'use client'

import HeroSection from './components/HeroSection'
import MainNav from './components/MainNav'

export default function Home() {
  return (
    <main className=''>
      <MainNav />
      <div className='flex container mx-auto py-16'>
        <div className='w-2/5 '>
          <HeroSection />
        </div>
        <div className='w-3/5 bg-slate-400'>Column2</div>
      </div>
    </main>
  )
}
