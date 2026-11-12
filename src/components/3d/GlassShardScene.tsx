import { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Float, MeshTransmissionMaterial } from '@react-three/drei'
import * as THREE from 'three'

interface ShardProps {
  position: [number, number, number]
  rotation: [number, number, number]
  scale: number
  geometryType: 'octahedron' | 'icosahedron' | 'dodecahedron' | 'tetrahedron'
  color?: string
}

function GlassShard({ position, rotation, scale, geometryType, color = '#ffffff' }: ShardProps) {
  const meshRef = useRef<THREE.Mesh>(null!)
  const initialPos = useMemo(() => new THREE.Vector3(...position), [position])
  const targetPos = useMemo(() => new THREE.Vector3(...position), [position])

  const geometry = useMemo(() => {
    switch (geometryType) {
      case 'octahedron':
        return new THREE.OctahedronGeometry(1.2, 0)
      case 'icosahedron':
        return new THREE.IcosahedronGeometry(1.1, 0)
      case 'dodecahedron':
        return new THREE.DodecahedronGeometry(1.0, 0)
      case 'tetrahedron':
      default:
        return new THREE.TetrahedronGeometry(1.3, 0)
    }
  }, [geometryType])

  useFrame((state) => {
    if (!meshRef.current) return
    const { pointer, clock } = state
    const t = clock.getElapsedTime()

    // Magnetic repulsion / attraction towards cursor
    targetPos.x = initialPos.x + pointer.x * 1.5
    targetPos.y = initialPos.y + pointer.y * 1.2

    meshRef.current.position.lerp(targetPos, 0.04)

    // Gentle rotational drift
    meshRef.current.rotation.x = rotation[0] + Math.sin(t * 0.3) * 0.3 + pointer.y * 0.4
    meshRef.current.rotation.y = rotation[1] + Math.cos(t * 0.4) * 0.4 + pointer.x * 0.5
    meshRef.current.rotation.z = rotation[2] + Math.sin(t * 0.2) * 0.2
  })

  return (
    <mesh ref={meshRef} position={position} scale={scale} geometry={geometry}>
      <MeshTransmissionMaterial
        backside
        samples={6}
        resolution={512}
        transmission={0.92}
        roughness={0.12}
        ior={1.45}
        thickness={1.5}
        chromaticAberration={0.08}
        anisotropy={0.2}
        distortion={0.3}
        distortionScale={0.4}
        temporalDistortion={0.1}
        color={color}
        attenuationColor="#06b6d4"
        attenuationDistance={1.2}
      />
    </mesh>
  )
}

function StardustField({ count = 300 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null!)
  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const col = new Float32Array(count * 3)

    const palette = [
      new THREE.Color('#38bdf8'),
      new THREE.Color('#818cf8'),
      new THREE.Color('#c084fc'),
      new THREE.Color('#2dd4bf')
    ]

    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 35
      pos[i * 3 + 1] = (Math.random() - 0.5) * 30
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20 - 5

      const c = palette[Math.floor(Math.random() * palette.length)]
      col[i * 3] = c.r
      col[i * 3 + 1] = c.g
      col[i * 3 + 2] = c.b
    }
    return [pos, col]
  }, [count])

  useFrame((state) => {
    if (!pointsRef.current) return
    const t = state.clock.getElapsedTime() * 0.05
    pointsRef.current.rotation.y = t
    pointsRef.current.rotation.x = Math.sin(t * 0.5) * 0.1
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.7}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}

function SceneLights() {
  const lightRef = useRef<THREE.PointLight>(null!)
  useFrame(({ pointer }) => {
    if (!lightRef.current) return
    lightRef.current.position.x = pointer.x * 12
    lightRef.current.position.y = pointer.y * 10
  })

  return (
    <>
      <ambientLight intensity={0.65} />
      <directionalLight position={[10, 15, 10]} intensity={1.5} color="#e0f2fe" />
      <pointLight ref={lightRef} position={[0, 0, 4]} intensity={2.8} color="#38bdf8" distance={20} />
      <pointLight position={[-8, -6, 2]} intensity={2.2} color="#8b5cf6" distance={18} />
      <pointLight position={[8, 8, -4]} intensity={1.8} color="#06b6d4" distance={22} />
    </>
  )
}

export function GlassShardScene() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <SceneLights />
        <StardustField count={220} />

        <Float speed={1.5} rotationIntensity={0.6} floatIntensity={1.2}>
          {/* Main Hero Featured Shards */}
          <GlassShard
            position={[4.2, 1.5, 0]}
            rotation={[0.4, 0.6, 0.2]}
            scale={1.3}
            geometryType="octahedron"
            color="#e0f2fe"
          />
        </Float>

        <Float speed={2} rotationIntensity={0.8} floatIntensity={1.6}>
          <GlassShard
            position={[-4.5, -2, -1]}
            rotation={[0.8, -0.4, 0.3]}
            scale={1.1}
            geometryType="dodecahedron"
            color="#cbd5e1"
          />
        </Float>

        <Float speed={1.2} rotationIntensity={0.5} floatIntensity={0.8}>
          <GlassShard
            position={[5.5, -4, -3]}
            rotation={[-0.2, 0.8, 0.5]}
            scale={1.4}
            geometryType="icosahedron"
            color="#bae6fd"
          />
        </Float>

        <Float speed={1.8} rotationIntensity={0.7} floatIntensity={1.4}>
          <GlassShard
            position={[-3.8, 3.8, -2]}
            rotation={[0.5, -0.7, 0.1]}
            scale={0.9}
            geometryType="tetrahedron"
            color="#f1f5f9"
          />
        </Float>
      </Canvas>

      {/* Subtle Atmospheric Vignette & Color Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0f172a]/40 to-[#0f172a] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-2/3 right-10 w-[550px] h-[550px] bg-violet-600/10 rounded-full blur-[150px] pointer-events-none -z-10" />
    </div>
  )
}
