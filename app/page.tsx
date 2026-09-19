'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Problem from '@/components/Problem'
import Agents from '@/components/Agents'
import Workflow from '@/components/Workflow'
import Channels from '@/components/Channels'
import CRMDashboard from '@/components/CRMDashboard'
import Pricing from '@/components/Pricing'
import Guarantee from '@/components/Guarantee'
import Implementation from '@/components/Implementation'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import DemoModal from '@/components/DemoModal'

export default function Home() {
  const [demoOpen, setDemoOpen] = useState(false)
  const [demoInitialPhase, setDemoInitialPhase] = useState<'pick' | 'booked'>('pick')

  const openTryDemo = () => { setDemoInitialPhase('pick'); setDemoOpen(true) }
  const openBookDemo = () => { setDemoInitialPhase('booked'); setDemoOpen(true) }

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-cyan-500 focus:text-slate-950 focus:rounded-lg focus:font-semibold"
      >
        Skip to main content
      </a>
      <Header onTryDemo={openTryDemo} onBookDemo={openBookDemo} />
      <main id="main-content">
        <Hero onDemoOpen={openTryDemo} />
        <Problem />
        <Agents />
        <Workflow />
        <Channels />
        <CRMDashboard />
        <Pricing />
        <Guarantee />
        <Implementation />
        <FinalCTA onDemoOpen={openBookDemo} />
      </main>
      <Footer />
      <DemoModal open={demoOpen} onClose={() => setDemoOpen(false)} initialPhase={demoInitialPhase} />
    </>
  )
}
