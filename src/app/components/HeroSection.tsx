import { Avatar } from '@nextui-org/react'
import React from 'react'

const HeroSection = () => {
  return (
    <div className=''>
      <Avatar
        src='/avatar.png'
        className='w-28 h-28 lg:w-44 lg:h-44 '
        isBordered
      />
      <h1 className='text-2xl lg:text-4xl font-bold mt-8'>Salvador Galliano</h1>
      <p className='text-sm lg:text-lg mt-4'>
        <span className='underline underline-offset-4 decoration-1'>
          Jr. Full-Stack Developer in Node and React
        </span>{' '}
        for web applications. Proficient in creating responsive interfaces and
        user experiences. Committed to delivering high-quality software.{' '}
        <span className='font-semibold'>
          Exploring job opportunities, scholarships, or internships.
        </span>
      </p>
      <p className='text-sm lg:text-lg mt-3'>+34 692 051 399</p>
      <p className='text-sm lg:text-lg mt-2 hover:underline underline-offset-4 decoration-1'>
        <a href='mailto:ggallianoms@gmail.com'>ggallianoms@gmail.com</a>
      </p>
    </div>
  )
}

export default HeroSection
