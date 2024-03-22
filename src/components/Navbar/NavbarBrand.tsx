'use client'

import { useTheme } from '@/context/ThemeState'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NavbarBrand = () => {
  const { theme } = useTheme()

  return (
    <Link
      href={'/'}
      className={`navbar-brand relative h-[8vh] w-[8vh] ${
        theme === 'dark' && 'invert'
      }`}
    >
      <Image src={'/navbar-brand.png'} alt='Shinobi' fill />
    </Link>
  )
}

export default NavbarBrand
