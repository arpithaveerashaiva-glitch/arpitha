import { site } from '@/content/site'
import { about } from '@/content/copy'

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-16 px-6 py-24 sm:px-10">
      <div className="grid items-center gap-12 md:grid-cols-[minmax(0,24rem)_1fr]">
        <div className="overflow-hidden rounded-sm border border-ivory-300/20 bg-gradient-to-b from-forest-600 to-forest-800 pt-6">
          <img
            src="/images/portrait.webp"
            width={720}
            height={792}
            loading="lazy"
            alt="Portrait of Arpitha M in a black blazer and tinted glasses"
            className="mx-auto block h-auto w-full max-w-sm"
          />
        </div>
        <div>
          <h2 className="font-display text-4xl font-light sm:text-6xl">About me</h2>
          <div className="mt-6 max-w-prose space-y-4 text-lg leading-relaxed text-ivory-300">
            {about.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-ivory-300/20 pt-8 sm:grid-cols-4">
            {site.stats.map((s) => (
              <div key={s.label}>
                <dt className="order-2 text-sm text-ivory-300">{s.label}</dt>
                <dd className="font-display text-4xl text-copper-300">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
