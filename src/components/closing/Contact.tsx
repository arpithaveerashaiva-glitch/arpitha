import { site } from '@/content/site'
import { invite } from '@/content/copy'

const act =
  'inline-flex min-h-12 items-center rounded-sm border border-forest-950/40 px-5 text-forest-950'

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 px-4 pb-16 sm:px-8">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-sm bg-ivory-100 text-forest-950">
        {['top-4 left-4', 'top-4 right-4', 'bottom-4 left-4', 'bottom-4 right-4'].map((p) => (
          <span
            key={p}
            aria-hidden="true"
            className={`absolute ${p} h-2.5 w-2.5 rounded-full bg-forest-950`}
          />
        ))}
        <h2 className="pt-12 text-center font-display text-[clamp(4.5rem,20vw,17rem)] leading-none font-medium tracking-tight">
          Contact
        </h2>
        <img
          src="/images/portrait.webp"
          width={720}
          height={792}
          loading="lazy"
          alt=""
          className="relative z-10 mx-auto -mt-[24vw] block h-auto w-[min(72vw,26rem)] sm:-mt-[11vw]"
        />
        <div className="relative z-10 flex flex-wrap items-end justify-between gap-6 px-8 pt-2 pb-6 sm:px-14">
          <p className="max-w-xs font-semibold">
            {site.designation}
            <br />
            <span className="font-normal">{site.location}</span>
          </p>
          <p className="font-display text-4xl text-copper-700 sm:text-5xl">{site.name}</p>
        </div>
        <p className="mx-auto max-w-xl px-8 pb-6 text-center">{invite}</p>
        <div className="flex flex-wrap justify-center gap-3 px-8 pb-14">
          <a
            href={site.phone.whatsapp}
            className="inline-flex min-h-12 items-center rounded-sm bg-copper-700 px-5 text-ivory-50"
          >
            WhatsApp
          </a>
          <a href={`mailto:${site.email}`} className={act}>
            {site.email}
          </a>
          <a href={`tel:${site.phone.tel}`} className={act}>
            {site.phone.display}
          </a>
        </div>
      </div>
    </section>
  )
}
