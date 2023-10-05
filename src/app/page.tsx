'use client'

import AboutSection from './components/AboutSection'
import ExperienceSection from './components/ExperienceSection'
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
          <AboutSection num='01' title='About Me' />
          <ExperienceSection num='02' title='Work Experience' />
        </div>
      </div>
    </main>
  )
}
