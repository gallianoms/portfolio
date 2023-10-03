'use client'

import HeroSection from './components/HeroSection'
import MainNav from './components/MainNav'
import SocialMediaSection from './components/SocialMediaSection'

export default function Home() {
  return (
    <main>
      <MainNav />
      <div className='flex container mx-auto py-16 flex-col lg:flex-row'>
        <div className='mx-6 lg:mx-0 lg:w-2/5 '>
          <HeroSection />
        </div>
        <div className='lg:w-3/5'>
          <div className='lg:hidden'>
            <SocialMediaSection />
          </div>
          <div className='hidden lg:block'>
            <SocialMediaSection />
          </div>
        </div>
      </div>
    </main>
  )
}
