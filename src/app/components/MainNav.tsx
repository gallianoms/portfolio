import React from 'react'

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from '@nextui-org/react'
import ThemeSwitch from './ThemeSwitch'

export default function MainNav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const menuItems = [
    '01. Social Media',
    '02. Experience',
    '03. Techs',
    '04. Work',
    '05. Contact',
    '06. Resume',
  ]

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='sm:hidden'
        />
        <NavbarBrand>
          <ThemeSwitch />
          <p className='font-bold text-inherit pl-3'>HI THERE..</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className='hidden sm:flex gap-4 ' justify='center'>
        <NavbarItem>
          <Link color='foreground' href='#' className='text-sm font-light'>
            01. About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color='foreground' href='#' className='text-sm font-light'>
            02. Experience
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color='foreground' href='#' className='text-sm font-light'>
            03. Techs
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color='foreground' href='#' className='text-sm font-light'>
            04. Work
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color='foreground' href='#' className='text-sm font-light'>
            05. Contact
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            href='#'
            variant='bordered'
            radius='sm'
            className='bg-gradient-to-tr from-pink-500 to-blue-500 text-white shadow-lg font-medium'
          >
            Resume
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link color='foreground' className='w-full' href='#' size='md'>
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
