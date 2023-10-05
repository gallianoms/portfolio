import { Avatar, Link } from '@nextui-org/react'
import React from 'react'
import { ArrowLongRight } from '../icons/ArrowLongRight'

const HeroSection = () => {
  return (
    <section>
      <Avatar
        src='/avatar.png'
        className='w-28 h-28 lg:w-44 lg:h-44 '
        isBordered
      />
      <h1 className='text-3xl lg:text-4xl font-bold mt-8'>Salvador Galliano</h1>
      <p className='text-base lg:text-lg mt-4'>
        <span className='underline underline-offset-4 decoration-1'>
          Jr. Full-Stack Developer in Node and React
        </span>{' '}
        for web applications. Proficient in creating responsive interfaces and
        user experiences. Committed to delivering high-quality software.{' '}
        <span className='font-semibold'>
          Exploring job opportunities, scholarships, or internships.
        </span>
      </p>
      <p className='text-base lg:text-lg mt-3 hover:underline underline-offset-4 decoration-1'>
        <a href='tel:+34692051399'>+34 692 051 399</a>
      </p>
      <p className='text-base lg:text-lg mt-2 hover:underline underline-offset-4 decoration-1'>
        <a href='mailto:ggallianoms@gmail.com'>ggallianoms@gmail.com</a>
      </p>
      <Link
        isExternal
        href='#'
        className='mt-3 text-base font-medium decoration-1 underline-offset-4 transition-transform transform hover:translate-x-2'
        underline='hover'
        color='warning'
      >
        View Full Résumé
        <span className='ml-2 '>
          <ArrowLongRight />
        </span>
      </Link>
    </section>
  )
}

export default HeroSection
