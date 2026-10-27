import { site } from '@/content/site'

const links = [
  ['About', '#about'],
  ['Domains', '#domains'],
  ['Gallery', '#gallery'],
  ['Experience', '#experience'],
  ['Contact', '#contact'],
] as const

export function Header() {
  const close = (e: React.MouseEvent<HTMLElement>) =>
    e.currentTarget.closest('details')?.removeAttribute('open')
  return (
    <header className="sticky top-0 z-30 border-b border-ivory-300/10 bg-forest-950/85 pt-[env(safe-area-inset-top)] backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 sm:px-10">
        <a href="#home" className="font-display text-xl tracking-tight">
          {site.name}
        </a>
        <nav aria-label="Main" className="hidden gap-7 text-sm text-ivory-300 sm:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="hover:text-ivory-50">
              {label}
            </a>
          ))}
        </nav>
        <details className="relative sm:hidden">
          <summary className="cursor-pointer list-none px-2 py-2 text-sm text-ivory-300">
            Menu
          </summary>
          <nav
            aria-label="Mobile"
            className="absolute top-11 right-0 flex w-48 flex-col rounded-sm border border-ivory-300/20 bg-forest-900 p-2 text-sm"
          >
            {links.map(([label, href]) => (
              <a key={href} href={href} onClick={close} className="px-3 py-3 text-ivory-300">
                {label}
              </a>
            ))}
          </nav>
        </details>
      </div>
    </header>
  )
}
