import { useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import BackgroundWorld from './components/BackgroundWorld'
import Interlude from './components/Interlude'
import Intro from './sections/Intro'
import About from './sections/About'
import WhatWeDo from './sections/WhatWeDo'
import Careers from './sections/Careers'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

export default function App() {
  const [activeBg, setActiveBg] = useState(0)

  return (
    <div>
      <BackgroundWorld active={activeBg} />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <Intro />
        <Interlude
          index={0}
          number="01"
          title="The Estate"
          line="We only buy what we'd be proud to keep."
          onActive={setActiveBg}
        />
        <About />
        <Interlude
          index={1}
          number="02"
          title="Inside"
          line="Technology runs through everything we operate."
          onActive={setActiveBg}
        />
        <WhatWeDo />
        <Interlude
          index={2}
          number="03"
          title="The Long View"
          line="Built by people who stay."
          onActive={setActiveBg}
        />
        <Careers />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}
