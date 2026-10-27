import { useRef } from 'react'
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from 'framer-motion'
import { roles, type Role } from '@/content/experience'

function Item({ role, i, progress }: { role: Role; i: number; progress: MotionValue<number> }) {
  const t = (i + 0.5) / roles.length
  const fill = useTransform(progress, [t - 0.06, t], ['#1c3a2c', '#b87333'])
  return (
    <li className="relative pl-10 sm:pl-14">
      <motion.span
        aria-hidden="true"
        style={{ backgroundColor: fill }}
        className="absolute top-2 -left-[7px] h-3.5 w-3.5 rounded-full border border-copper-500"
      />
      <p className="text-sm text-copper-300">{role.dates}</p>
      <h3 className="mt-1 font-display text-2xl sm:text-3xl">{role.title}</h3>
      <p className="text-ivory-300">{role.org}</p>
      <ul className="mt-4 max-w-prose space-y-2 text-ivory-300">
        {role.duties.map((d) => (
          <li key={d} className="before:mr-3 before:text-copper-300 before:content-['—']">
            {d}
          </li>
        ))}
      </ul>
    </li>
  )
}

// Copper line draws forward as the visitor scrolls. Fully drawn under reduced motion.
export function Experience() {
  const ref = useRef<HTMLOListElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 75%', 'end 65%'] })
  const done = useMotionValue(1)
  const progress = reduce ? done : scrollYProgress
  return (
    <section id="experience" className="mx-auto max-w-6xl scroll-mt-16 px-6 py-24 sm:px-10">
      <h2 className="font-display text-4xl font-light sm:text-6xl">Professional experience</h2>
      <ol ref={ref} className="relative mt-12 ml-2 space-y-14">
        <svg
          aria-hidden="true"
          viewBox="0 0 2 100"
          preserveAspectRatio="none"
          className="absolute top-0 left-0 h-full w-[2px] -translate-x-px"
        >
          <path
            d="M1 0V100"
            fill="none"
            stroke="#1c3a2c"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
          />
          <motion.path
            d="M1 0V100"
            fill="none"
            stroke="#b87333"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
            style={{ pathLength: progress }}
          />
        </svg>
        {roles.map((r, i) => (
          <Item key={r.org} role={r} i={i} progress={progress} />
        ))}
      </ol>
    </section>
  )
}
