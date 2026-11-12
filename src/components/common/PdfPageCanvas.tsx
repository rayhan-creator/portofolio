import { useEffect, useRef, useState } from 'react'
import * as pdfjsLib from 'pdfjs-dist'
// @ts-ignore
import pdfWorker from 'pdfjs-dist/build/pdf.worker.min.mjs?url'

// Configure worker to load locally from Vite bundle
pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker

interface PdfPageCanvasProps {
  pdfUrl: string
  pageNumber: number
  scale?: number
  className?: string
}

export function PdfPageCanvas({ pdfUrl, pageNumber, scale = 1.6, className = '' }: PdfPageCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    let isCancelled = false
    let currentRenderTask: any = null

    async function renderPage() {
      try {
        setLoading(true)
        setError(false)

        const loadingTask = pdfjsLib.getDocument({ url: pdfUrl })
        const pdf = await loadingTask.promise
        if (isCancelled) return

        const page = await pdf.getPage(pageNumber)
        if (isCancelled) return

        const viewport = page.getViewport({ scale })
        const canvas = canvasRef.current
        if (!canvas) return

        const context = canvas.getContext('2d')
        if (!context) return

        canvas.height = viewport.height
        canvas.width = viewport.width

        const renderContext: any = {
          canvasContext: context,
          viewport: viewport,
          canvas: canvas,
        }

        currentRenderTask = page.render(renderContext)
        await currentRenderTask.promise
        if (!isCancelled) setLoading(false)
      } catch (err) {
        if (!isCancelled) {
          console.warn('PDF page render notice:', err)
          setError(true)
          setLoading(false)
        }
      }
    }

    renderPage()

    return () => {
      isCancelled = true
      if (currentRenderTask) {
        try {
          currentRenderTask.cancel()
        } catch (_) {}
      }
    }
  }, [pdfUrl, pageNumber, scale])

  return (
    <div className={`relative flex items-center justify-center overflow-hidden rounded-xl bg-slate-950/80 ${className}`}>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-900/70 backdrop-blur-sm z-10">
          <div className="flex items-center gap-2 text-cyan-400 text-xs font-sans">
            <span className="w-4 h-4 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
            <span>Memuat Halaman {pageNumber}...</span>
          </div>
        </div>
      )}
      {error ? (
        <div className="p-8 text-center text-slate-400 text-xs">
          Gagal merender halaman {pageNumber}. Silakan klik tombol untuk membuka PDF langsung.
        </div>
      ) : (
        <canvas
          ref={canvasRef}
          className="max-w-full h-auto object-contain rounded-lg transition-transform duration-300"
        />
      )}
    </div>
  )
}
