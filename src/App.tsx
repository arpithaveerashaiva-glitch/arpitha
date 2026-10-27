import { SkipLink } from '@/components/layout/SkipLink'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/hero/Hero'
import { About } from '@/components/sections/About'
import { Domains } from '@/components/sections/Domains'
import { Gallery } from '@/components/sections/Gallery'
import { Audience } from '@/components/sections/Audience'
import { Methodology } from '@/components/sections/Methodology'
import { Experience } from '@/components/sections/Experience'
import { Contact } from '@/components/closing/Contact'

export default function App() {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Domains />
        <Gallery />
        <Audience />
        <Methodology />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
