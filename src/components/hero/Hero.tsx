import { useEffect } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion'
import { site } from '@/content/site'
import { CursorTrail } from './CursorTrail'

// Form heights rise toward the centre: the summit.
const FORMS = [34, 46, 60, 78, 60, 46, 34]
const MID = Math.floor(FORMS.length / 2)

export function Hero() {
  const reduce = useReducedMotion()
  const px = useMotionValue(0)
  const py = useMotionValue(0)
  const sx = useSpring(px, { stiffness: 50, damping: 20 })
  const sy = useSpring(py, { stiffness: 50, damping: 20 })
  const rotateY = useTransform(sx, [-1, 1], [-4, 4])
  const rotateX = useTransform(sy, [-1, 1], [2.5, -2.5])

  // Restrained depth shift. Mouse only, never under reduced motion.
  useEffect(() => {
    const mouse = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    if (reduce || !mouse) return
    const onMove = (e: PointerEvent) => {
      px.set((e.clientX / window.innerWidth - 0.5) * 2)
      py.set((e.clientY / window.innerHeight - 0.5) * 2)
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [reduce, px, py])

  const letters = Array.from(site.name)
  const fade = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as const },
  })

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] flex-col items-center overflow-hidden"
    >
      <CursorTrail />

      <div className="relative z-10 mt-[16svh] px-6 text-center">
        <h1
          aria-label={site.name}
          className="font-display text-[clamp(3.5rem,14vw,10.5rem)] leading-[0.95] font-light tracking-tight"
        >
          {letters.map((ch, i) => (
            <span
              key={i}
              aria-hidden="true"
              className="inline-block overflow-hidden pb-[0.08em] align-bottom"
            >
              <motion.span
                className="inline-block"
                initial={reduce ? false : { y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 1.5 + i * 0.045, ease: [0.22, 1, 0.36, 1] }}
              >
                {ch === ' ' ? '\u00A0' : ch}
              </motion.span>
            </span>
          ))}
        </h1>
        <motion.p {...fade(2.2)} className="mt-4 text-[clamp(1rem,2.4vw,1.5rem)] text-ivory-300">
          {site.designation}
        </motion.p>
        <motion.p
          {...fade(2.5)}
          className="mt-2 font-display text-[clamp(1.25rem,3vw,2rem)] text-copper-300 italic"
        >
          {site.tagline}
        </motion.p>
      </div>

      <div
        className="absolute inset-x-0 bottom-0 h-[56svh]"
        style={{ perspective: 1400 }}
        aria-hidden="true"
      >
        <motion.div
          className="flex h-full items-end justify-center gap-[1.2vw]"
          style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        >
          {FORMS.map((h, i) => {
            const d = Math.abs(i - MID)
            return (
              <motion.div
                key={i}
                className="relative w-[11vw] min-w-[2.5rem] max-w-[9rem] overflow-hidden rounded-t-sm"
                style={{
                  height: `${h}%`,
                  background:
                    'linear-gradient(180deg, var(--color-forest-600) 0%, var(--color-forest-800) 38%, var(--color-forest-900) 100%)',
                  boxShadow:
                    'inset 1px 0 0 rgba(250,247,238,.10), 0 40px 60px -24px rgba(0,0,0,.65)',
                }}
                initial={reduce ? false : { y: '105%' }}
                animate={{ y: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 60,
                  damping: 17,
                  delay: 0.2 + (MID - d) * 0.14,
                }}
              >
                <div
                  className="absolute inset-x-0 top-0 h-[2px]"
                  style={{
                    background: d === 0 ? 'var(--color-copper-300)' : 'var(--color-copper-500)',
                  }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      'radial-gradient(120% 55% at 50% 0%, rgba(219,160,116,.22), transparent 62%)',
                  }}
                />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
