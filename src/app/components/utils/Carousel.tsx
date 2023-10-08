import React, { useCallback, useEffect } from 'react'
import { Avatar, Button, Image } from '@nextui-org/react'
import useEmblaCarousel from 'embla-carousel-react'
import { ArrowLongRight } from '../../icons/ArrowLongRight'
import { ArrowLongLeft } from '../../icons/ArrowLongLeft'
import { ImageData } from '@/app/types/ImageData'
import { ArrowUpRight } from '@/app/icons/ArrowUpRight'

type CarouselProps = {
  images: ImageData[]
}

const Carousel = ({ images }: CarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()) // Acceder a la API si es necesario
    }
  }, [emblaApi])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className='w-[360px] max-h-60 relative'>
      <div className='embla' ref={emblaRef}>
        <div className='embla__container'>
          {images.map((image, index) => (
            <div className='embla__slide' key={index}>
              {/* eslint-disable-next-line jsx-a11y/alt-text */}
              <Image as={image.component} {...image.props} />
            </div>
          ))}
        </div>
      </div>
      <Button
        size='sm'
        isIconOnly
        className='embla__prev absolute top-1/2 transform -translate-y-1/2 left-0 bg-transparent border-none cursor-pointer ml-2 bg-gray-200 text-gray-800 rounded-md'
        onClick={scrollPrev}
      >
        <ArrowLongLeft />
      </Button>
      <Button
        size='sm'
        isIconOnly
        className='embla__next absolute top-1/2 transform -translate-y-1/2 right-0 bg-transparent border-none cursor-pointer mr-2 bg-gray-200 text-gray-800 rounded-md'
        onClick={scrollNext}
      >
        <ArrowLongRight />
      </Button>
      <div className='absolute top-0 right-0 mt-2 mr-2'>
        <div className='flex items-center'>
          <Button
            size='sm'
            isIconOnly
            className='rounded-full bg-[#BEBAB4] text-white'
          >
            <Avatar src='/github2.png' className='w-full h-full bg-gray-50' />
          </Button>
          <Button
            size='sm'
            isIconOnly
            className='ml-2 rounded-full bg-[#BEBAB4] text-white'
          >
            <ArrowUpRight className='w-4 h-4' />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Carousel
