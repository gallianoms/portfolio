import React, { useState } from 'react'
import { Listbox, ListboxItem } from '@nextui-org/react'
import { ListboxWrapper } from './utils/ListboxWrapper'
import { ChevronRightIcon } from '../icons/ChevronRightIcon'

type ExperienceSectionProps = {
  num: string
  title: string
}

const ExperienceSection = ({ num, title }: ExperienceSectionProps) => {
  const [visibleOption, setVisibleOption] = useState<number>(1)
  const [selectedKeys, setSelectedKeys] = React.useState(['mexican_grill'])

  const toggleOption = (option: number) => {
    setVisibleOption(option)
  }

  return (
    <section className='flex flex-col items-center justify-center mt-14 mx-6 '>
      <p className='text-xl lg:text-xl font-normal'>
        {num}. <span className='font-normal text-xl lg:text-xl '>{title}</span>
      </p>

      <div className='flex justify-center w-full mt-4'>
        <ListboxWrapper>
          <Listbox
            aria-label='Single selection jobs'
            variant='flat'
            disallowEmptySelection
            selectionMode='single'
            selectedKeys={selectedKeys}
            onSelectionChange={setSelectedKeys}
            className='flex-row'
          >
            <ListboxItem key='mexican_grill' onClick={() => toggleOption(1)}>
              Mexican Grill
            </ListboxItem>
            <ListboxItem key='party_cake' onClick={() => toggleOption(2)}>
              Party Cake
            </ListboxItem>
            <ListboxItem key='astor' onClick={() => toggleOption(3)}>
              ASTOR
            </ListboxItem>
          </Listbox>
        </ListboxWrapper>
      </div>

      <div className='mt-6 max-w-[70ch]'>
        {/* Option 1 - Kitchener */}
        <div className={visibleOption === 1 ? '' : 'hidden'}>
          <h3 className=' font-normal text-lg'>
            Kitchener <span className='font-light'>·</span>
            <span className=' font-extralight text-md'> Mexican Grill</span>
          </h3>
          <p className='text-xs  font-mono pt-1'>
            October 2022 - February 2023
          </p>
          <ul className='mt-3'>
            <li className='text-md flex self-center py-1 items-center'>
              <div className='w-5 h-5 flex-shrink-0'>
                <ChevronRightIcon className='w-full h-full text-amber-500' />
              </div>
              <div className='flex-grow'>
                Conducted cash handling duties and ensured precise cash register
                reconciliations, maintaining a professional and organized
                financial process.
              </div>
            </li>
            <li className='text-md flex self-center py-1 items-center'>
              <div className='w-5 h-5 flex-shrink-0'>
                <ChevronRightIcon className='w-full h-full text-amber-500' />
              </div>
              <div className='flex-grow'>
                Provided comprehensive training to new employees, facilitating
                their smooth adaptation to their respective job positions
              </div>
            </li>
            <li className='text-md flex self-center py-1 items-center'>
              <div className='w-5 h-5 flex-shrink-0'>
                <ChevronRightIcon className='w-full h-full text-amber-500' />
              </div>
              <div className='flex-grow'>
                Responsible for welcoming customers, taking their orders, and
                providing efficient food and beverage service with a focus on
                customer satisfaction.
              </div>
            </li>
          </ul>
        </div>

        {/* Option 2 - Baker */}
        <div className={visibleOption === 2 ? '' : 'hidden'}>
          <h3 className='font-normal text-lg'>
            Baker <span className='font-light'>·</span>{' '}
            <span className='font-extralight text-md'>Party Cake</span>
          </h3>
          <p className='text-xs font-mono pt-1'>
            February 2022 - September 2022
          </p>
          <ul className='mt-3'>
            <li className='text-md flex self-center py-1 items-center'>
              <div className='w-5 h-5 flex-shrink-0'>
                <ChevronRightIcon className='w-full h-full text-amber-500' />
              </div>
              <div className='flex-grow'>
                Responsible for ensuring a clean and orderly kitchen
                environment, maintaining high standards of cleanliness and
                organization.
              </div>
            </li>
            <li className='text-md flex self-center py-1 items-center'>
              <div className='w-5 h-5 flex-shrink-0'>
                <ChevronRightIcon className='w-full h-full text-amber-500' />
              </div>
              <div className='flex-grow'>
                In charge of the preparation and baking of a diverse range of
                breads, cakes, and cookies, delivering delicious baked goods to
                satisfy customer cravings.
              </div>
            </li>
            <li className='text-md flex self-center py-1 items-center'>
              <div className='w-5 h-5 flex-shrink-0'>
                <ChevronRightIcon className='w-full h-full text-amber-500' />
              </div>
              <div className='flex-grow'>
                Proficient in precise ingredient blending, dough preparation
                techniques, and meticulous oven temperature control for optimal
                baking results.
              </div>
            </li>
          </ul>
        </div>

        {/* Option 3 - Developer */}
        <div className={visibleOption === 3 ? '' : 'hidden'}>
          <h3 className='font-normal text-lg'>
            React Developer <span className='font-light'>·</span>{' '}
            <span className='font-extralight text-md'>ASTOR</span>
          </h3>
          <p className='text-xs font-mono pt-1'>July 2020 - November 2021</p>
          <ul className='mt-3'>
            <li className='text-md flex self-center py-1 items-center'>
              <div className='w-5 h-5 flex-shrink-0'>
                <ChevronRightIcon className='w-full h-full text-amber-500' />
              </div>
              <div className='flex-grow'>
                Developed software for customer accounts payable migration from
                Excel and Word documents.
              </div>
            </li>
            <li className='text-md flex self-center py-1 items-center'>
              <div className='w-5 h-5 flex-shrink-0'>
                <ChevronRightIcon className='w-full h-full text-amber-500' />
              </div>
              <div className='flex-grow'>
                Created an intuitive interface for account management that
                allowed users to view, search, and filter information.
              </div>
            </li>
            <li className='text-md flex self-center py-1 items-center'>
              <div className='w-5 h-5 flex-shrink-0'>
                <ChevronRightIcon className='w-full h-full text-amber-500' />
              </div>
              <div className='flex-grow'>
                Created a RESTful API in Node.js to automate the extraction and
                storage of data from Excel and Word docs using SQL queries.
              </div>
            </li>
            <li className='text-md flex self-center py-1'>
              <div className='w-5 h-5 flex-shrink-0'>
                <ChevronRightIcon className='w-full h-full text-amber-500' />
              </div>
              <div className='flex-grow'>
                Added automatic report generation and data export to various
                formats.
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
