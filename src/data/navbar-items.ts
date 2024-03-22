import { NavButton, NavLink } from '@/types/dataTypes'
import { Moon, ShieldCheck, ShieldHalf, ShoppingCart, Sun } from 'lucide-react'
import React from 'react'

export const primaryLinks: NavLink[] = [
  {
    title: 'Home',
    url: '/',
    showTitle: true,
    dropdown: false,
  },
  {
    title: 'Products',
    url: '/products',
    showTitle: true,
    dropdown: false,
  },
  {
    title: 'Categories',
    url: '/categories',
    showTitle: true,
    dropdown: true,
    dropDownItems: [
      {
        head: 'Category 1',
        items: [
          {
            title: 'item-1',
            url: '#',
          },
          {
            title: 'item-2',
            url: '#',
          },
          {
            title: 'item-3',
            url: '#',
          },
          {
            title: 'item-4',
            url: '#',
          },
        ],
      },
      {
        head: 'Category 2',
        items: [
          {
            title: 'item-1',
            url: '#',
          },
          {
            title: 'item-2',
            url: '#',
          },
          {
            title: 'item-3',
            url: '#',
          },
        ],
      },
      {
        head: 'Category 3',
        items: [
          {
            title: 'item-1',
            url: '#',
          },
          {
            title: 'item-2',
            url: '#',
          },
          {
            title: 'item-3',
            url: '#',
          },
        ],
      },
      {
        head: 'Category 4',
        items: [
          {
            title: 'item-1',
            url: '#',
          },
          {
            title: 'item-2',
            url: '#',
          },
        ],
      },
    ],
  },
  {
    title: 'Contact Us',
    url: '/contact-us',
    showTitle: true,
    dropdown: false,
  },
]

export const authLinks: NavLink[] = [
  {
    title: 'Login',
    url: '/auth/login',
    showTitle: true,
    dropdown: false,
  },
  {
    title: 'Register',
    url: '/auth/register',
    showTitle: true,
    dropdown: false,
  },
]

export const dashboardLinks: {
  admin: NavButton
  staff: NavButton
  customer: null
} = {
  admin: {
    title: 'Admin',
    url: '/control/dashboard',
    showTitle: true,
    dropdown: false,
    icon: React.createElement(ShieldCheck),
    isButton: true,
    buttonVariant: 'outline',
    className:
      'border-green-500 text-green-500 hover:bg-green-500/5 hover:text-green-500',
  },
  staff: {
    title: 'Staff',
    url: '/control/dashboard',
    showTitle: true,
    icon: React.createElement(ShieldHalf),
    dropdown: false,
    isButton: true,
    buttonVariant: 'outline',
    className:
      'border-amber-500 text-amber-500 hover:bg-amber-500/5 hover:text-amber-500',
  },
  customer: null,
}

export const userLinks: NavButton[] = [
  {
    title: 'Profile',
    isButton: true,
    showTitle: true,
    dropdown: true,
    buttonVariant: 'outline',
    dropDownItems: [
      {
        items: [
          {
            title: 'Profile',
            url: '/control/user-profile',
          },
        ],
      },
      {
        items: [
          {
            title: 'Sign Out',
          },
        ],
      },
    ],
  },
]

export const cartButton: NavButton = {
  title: 'Cart',
  isButton: true,
  showTitle: false,
  dropdown: false,
  icon: React.createElement(ShoppingCart),
  buttonVariant: 'outline',
  buttonSize: 'icon',
}

export const themeButtons: { light: NavButton; dark: NavButton } = {
  light: {
    title: 'Dark Mode',
    showTitle: false,
    icon: React.createElement(Moon),
    dropdown: false,
    isButton: true,
    buttonVariant: 'outline',
    buttonSize: 'icon',
    className: 'rounded-full',
  },
  dark: {
    title: 'Light Mode',
    showTitle: false,
    icon: React.createElement(Sun),
    dropdown: false,
    isButton: true,
    buttonVariant: 'outline',
    buttonSize: 'icon',
    className: 'rounded-full',
  },
}
