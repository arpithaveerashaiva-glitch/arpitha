import { useEffect, useRef } from 'react'

type Point = { x: number; y: number; t: number }
const LIFE = 700 // milliseconds a trail segment stays visible

// Soft copper ribbon behind the pointer. Mouse only, off for reduced motion, pauses offscreen.
export function CursorTrail() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    const host = canvas?.parentElement
    const ctx = canvas?.getContext('2d')
    const mouse = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!canvas || !host || !ctx || !mouse || calm) return

    let points: Point[] = []
    let frame = 0
    let visible = true
    let w = 0
    let h = 0

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = host.clientWidth
      h = host.clientHeight
      canvas.width = w * dpr
      canvas.height = h * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const draw = (now: number) => {
      ctx.clearRect(0, 0, w, h)
      points = points.filter((p) => now - p.t < LIFE)
      ctx.lineCap = 'round'
      for (let i = 1; i < points.length; i++) {
        const k = 1 - (now - points[i].t) / LIFE
        ctx.strokeStyle = `rgba(219,160,116,${0.55 * k})`
        ctx.lineWidth = 1 + 5 * k
        ctx.beginPath()
        ctx.moveTo(points[i - 1].x, points[i - 1].y)
        ctx.lineTo(points[i].x, points[i].y)
        ctx.stroke()
      }
      frame = points.length && visible ? requestAnimationFrame(draw) : 0
    }

    const wake = () => {
      if (!frame && visible) frame = requestAnimationFrame(draw)
    }
    const onMove = (e: PointerEvent) => {
      const r = host.getBoundingClientRect()
      points.push({ x: e.clientX - r.left, y: e.clientY - r.top, t: performance.now() })
      wake()
    }
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      if (visible) wake()
    })

    resize()
    io.observe(host)
    window.addEventListener('resize', resize)
    host.addEventListener('pointermove', onMove, { passive: true })
    return () => {
      cancelAnimationFrame(frame)
      io.disconnect()
      window.removeEventListener('resize', resize)
      host.removeEventListener('pointermove', onMove)
    }
  }, [])

  return (
    <canvas ref={ref} aria-hidden="true" className="pointer-events-none absolute inset-0 z-[5]" />
  )
}
