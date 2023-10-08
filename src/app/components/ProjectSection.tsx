import React from 'react'
import NextImage from 'next/image'
import Carousel from './utils/Carousel'
import { ImageData } from '../types/ImageData'

type ProjectSectionProps = {
  num: string
  title: string
}

const ProjectSection = ({ num, title }: ProjectSectionProps) => {
  const images: ImageData[] = [
    {
      component: NextImage,
      props: {
        width: 384,
        height: 384,
        src: '/project1/1.png',
        alt: '',
      },
    },
    {
      component: NextImage,
      props: {
        width: 384,
        height: 384,
        src: '/project1/2.png',
        alt: '',
      },
    },
    {
      component: NextImage,
      props: {
        width: 384,
        height: 384,
        src: '/project1/3.png',
        alt: '',
      },
    },
  ]

  return (
    <section className='flex flex-col items-center justify-center mt-14'>
      <p className='text-xl lg:text-xl font-normal'>
        {num}. <span className='font-normal text-xl lg:text-xl '>{title}</span>
      </p>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6 py-2'>
        <Carousel images={images} />
        <Carousel images={images} />
        <Carousel images={images} />
        <Carousel images={images} />
      </div>
    </section>
  )
}

export default ProjectSection
