import { site } from '@/content/site'

export function Footer() {
  return (
    <footer className="border-t border-ivory-300/15 px-6 py-8 pb-[max(2rem,env(safe-area-inset-bottom))] text-sm text-ivory-300 sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <nav aria-label="Legal" className="flex flex-wrap gap-x-6 gap-y-2">
          <a href="/privacy/">Privacy Policy</a>
          <a href="/terms/">Terms and Conditions</a>
          <a href="#home">Back to top</a>
        </nav>
      </div>
    </footer>
  )
}
