import { steps, why } from '@/content/copy'

export function Methodology() {
  return (
    <section id="methodology" className="mx-auto max-w-6xl scroll-mt-16 px-6 py-24 sm:px-10">
      <h2 className="font-display text-4xl font-light sm:text-6xl">Training methodology</h2>
      <p className="mt-4 text-lg text-ivory-300">Each topic follows the same six stages.</p>
      <ol className="mt-10 grid grid-cols-2 gap-px bg-ivory-300/15 sm:grid-cols-3 lg:grid-cols-6">
        {steps.map((s, i) => (
          <li key={s} className="bg-forest-950 py-6 pr-4">
            <span className="font-display text-copper-300">{String(i + 1).padStart(2, '0')}</span>
            <p className="mt-2 font-display text-xl">{s}</p>
          </li>
        ))}
      </ol>
      <h3 className="mt-16 font-display text-3xl">Why train with me</h3>
      <ul className="mt-6 grid gap-x-10 gap-y-6 md:grid-cols-2">
        {why.map((w) => (
          <li key={w.name}>
            <p className="text-ivory-50">{w.name}</p>
            <p className="text-ivory-300">{w.text}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
