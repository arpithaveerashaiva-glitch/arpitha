import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { domains, type Domain } from '@/content/domains'

// Digital Marketing sits at the centre of the row.
const row = ['soft-skills', 'finance', 'digital-marketing', 'human-resources', 'tally-erp'].map(
  (id) => domains.find((d) => d.id === id)!,
)
const extra = domains.filter((d) => !d.core)

export function Domains() {
  const [id, setId] = useState('digital-marketing')
  const reduce = useReducedMotion()
  const cur = domains.find((d) => d.id === id)!
  const tile = (d: Domain, cls: string) => (
    <button
      key={d.id}
      type="button"
      aria-pressed={d.id === id}
      onClick={() => setId(d.id)}
      className={`rounded-sm border px-3 text-left transition-colors ${cls} ${d.id === id ? 'border-copper-500 bg-forest-800 text-ivory-50' : 'border-ivory-300/20 bg-forest-900 text-ivory-300 hover:border-copper-500/60'}`}
    >
      {d.name}
    </button>
  )
  return (
    <section id="domains" className="mx-auto max-w-6xl scroll-mt-16 px-6 py-24 sm:px-10">
      <h2 className="font-display text-4xl font-light sm:text-6xl">Training domains</h2>
      <div className="mt-10 grid grid-cols-2 items-center gap-3 sm:grid-cols-5">
        {row.map((d) =>
          d.id === 'digital-marketing'
            ? tile(
                d,
                'order-first col-span-2 py-8 font-display text-2xl sm:order-none sm:col-span-1 sm:py-12 sm:text-xl',
              )
            : tile(d, 'py-5 text-sm'),
        )}
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <span className="text-sm text-ivory-300">Also taught</span>
        {extra.map((d) => tile(d, 'py-2 text-sm'))}
      </div>
      <div aria-live="polite" className="mt-10 min-h-56 border-l-2 border-copper-500 pl-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={cur.id}
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.3 }}
          >
            <h3 className="font-display text-3xl">{cur.name}</h3>
            <p className="mt-2 text-lg text-ivory-300">{cur.summary}</p>
            {cur.topics.length > 0 && (
              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {cur.topics.map((t) => (
                  <li
                    key={t}
                    className="text-ivory-50 before:mr-3 before:text-copper-300 before:content-['—']"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
