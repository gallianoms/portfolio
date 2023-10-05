import React from 'react'

type AboutSectionProps = {
  num: string
  title: string
}

const AboutSection = ({ num, title }: AboutSectionProps) => {
  return (
    <section className='flex flex-col items-center justify-center mt-14'>
      <p className='text-xl lg:text-xl font-normal'>
        {num}. <span className='font-normal text-xl lg:text-xl '>{title}</span>
      </p>
      <article className='mt-6 mx-6'>
        <p className='pb-4 max-w-[72ch]'>
          My passion for technology was ignited at the age of 7, when my father
          introduced our first computer to our home. This encounter triggered my
          journey into Computer Science (C.C.) in college.
        </p>
        <p className='pb-4 max-w-[72ch]'>
          After graduating from C.C., I started working as a Full-Stack JS
          Developer at ASTOR. I currently reside in Spain, where I continue my
          training through bootcamps and courses. Currently, I play the role of
          promoter of the HP brand, providing advice on computers and printers.
        </p>
        <p className='pb-2 max-w-[72ch]'>
          Outside of the tech world, I cherish moments with my wife and our
          beloved dog, Duna. My hobbies include watching anime series, playing
          chess, and exploring the city.
        </p>
        <ul className='grid grid-cols-2 text-sm mt-4'>
          <li className='flex font-mono mb-1'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='w-5 h-5 text-amber-500'
            >
              <path
                fillRule='evenodd'
                d='M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z'
                clipRule='evenodd'
              />
            </svg>
            HTML, CSS, JS
          </li>

          <li className='flex font-mono mb-1'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='w-5 h-5 text-amber-500'
            >
              <path
                fillRule='evenodd'
                d='M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z'
                clipRule='evenodd'
              />
            </svg>
            Tailwindcss
          </li>
          <li className='flex font-mono mb-1'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='w-5 h-5 text-amber-500'
            >
              <path
                fillRule='evenodd'
                d='M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z'
                clipRule='evenodd'
              />
            </svg>
            React, Next, TS
          </li>
          <li className='flex font-mono mb-1'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='w-5 h-5 text-amber-500'
            >
              <path
                fillRule='evenodd'
                d='M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z'
                clipRule='evenodd'
              />
            </svg>
            Teamwork
          </li>
          <li className='flex font-mono'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='w-5 h-5 text-amber-500'
            >
              <path
                fillRule='evenodd'
                d='M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z'
                clipRule='evenodd'
              />
            </svg>
            Node, Express
          </li>

          <li className='flex font-mono mb-1'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='w-5 h-5 text-amber-500'
            >
              <path
                fillRule='evenodd'
                d='M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z'
                clipRule='evenodd'
              />
            </svg>
            Empthy
          </li>
          <li className='flex font-mono mb-1'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='w-5 h-5 text-amber-500'
            >
              <path
                fillRule='evenodd'
                d='M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z'
                clipRule='evenodd'
              />
            </svg>
            SQL, MongoDB
          </li>

          <li className='flex font-mono mb-1'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='w-5 h-5 text-amber-500'
            >
              <path
                fillRule='evenodd'
                d='M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z'
                clipRule='evenodd'
              />
            </svg>
            Kanban/Scrum
          </li>
        </ul>
      </article>
    </section>
  )
}

export default AboutSection
