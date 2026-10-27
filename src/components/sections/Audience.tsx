import { audiences, formats } from '@/content/copy'

export function Audience() {
  return (
    <section id="audience" className="mx-auto max-w-6xl scroll-mt-16 px-6 py-24 sm:px-10">
      <h2 className="font-display text-4xl font-light sm:text-6xl">Who I train</h2>
      <ul className="mt-10 grid gap-6 md:grid-cols-3">
        {audiences.map((a) => (
          <li key={a.name} className="border-t border-copper-500 pt-5">
            <h3 className="font-display text-2xl">{a.name}</h3>
            <p className="mt-2 text-ivory-300">{a.text}</p>
          </li>
        ))}
      </ul>
      <p className="mt-10 text-ivory-300">
        <span className="text-ivory-50">Formats:</span> {formats.join(' · ')}
      </p>
    </section>
  )
}
