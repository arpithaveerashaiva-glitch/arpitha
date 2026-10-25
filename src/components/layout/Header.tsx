import { site } from '@/content/site'

// Navigation links join this header as each section is built, so none point nowhere.
export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 px-6 pt-[max(1.25rem,env(safe-area-inset-top))] sm:px-10">
      <a href="#home" className="font-display text-xl tracking-tight text-ivory-50">
        {site.name}
      </a>
    </header>
  )
}
