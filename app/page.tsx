'use client'

import dynamic from 'next/dynamic'
import Navbar    from '@/components/Navbar'
import Hero      from '@/components/Hero'
import About     from '@/components/About'
import Skills    from '@/components/Skills'
import Projects  from '@/components/Projects'
import Timeline  from '@/components/Timeline'
import Contact   from '@/components/Contact'
import Footer    from '@/components/Footer'
import Cursor    from '@/components/Cursor'

// Three.js canvas — loaded only on client (no SSR)
const ThreeScene = dynamic(() => import('@/components/ThreeScene'), { ssr: false })

export default function Home() {
  return (
    <>
      {/* Custom sacred cursor */}
      <Cursor />

      {/* Floating WebGL background — fixed, pointer-events: none */}
      <ThreeScene />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
