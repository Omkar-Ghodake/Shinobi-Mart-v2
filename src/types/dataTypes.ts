import { ReactElement } from 'react'

// const dd = [
//   {
//     head: 'first',
//     items: [
//       {
//         title: 'f_first',
//         url: '/ff',
//       },
//     ],
//   },
// ]

type NavDropDownItemLinks = {
  title: string
  url: string
}

type NavDropDownItemButtons = {
  title: string
  url?: string
}

export type NavDropDownLink = {
  head?: string
  items: NavDropDownItemLinks[]
}

export type NavDropDownButton = {
  head?: string
  items: NavDropDownItemButtons[]
}

export type NavLink = {
  title: string
  dropdown: boolean
  url: string
  icon?: ReactElement
  dropDownItems?: NavDropDownLink[]
  showTitle: boolean
  className?: string
  iconClassName?: string
  titleClassName?: string
}

export type NavButton = {
  title: string
  dropdown: boolean
  url?: string
  icon?: ReactElement
  isButton: true
  dropDownItems?: NavDropDownButton[]
  showTitle: boolean
  buttonVariant?: ShadcnButtonVariant
  buttonSize?: ShadcnButtonSize
  className?: string
  iconClassName?: string
  titleClassName?: string
}

export type TempUserRole = 'admin' | 'staff' | 'customer'

export type TempUser = {
  username: string
  role: TempUserRole
}

export type Theme = 'light' | 'dark'

export type ThemeContextType = {
  theme: Theme
  toggleTheme: () => void
} | null

export type ShadcnButtonVariant =
  | 'default'
  | 'link'
  | 'destructive'
  | 'outline'
  | 'secondary'
  | 'ghost'
  | null
  | undefined

export type ShadcnButtonSize =
  | 'icon'
  | 'default'
  | 'sm'
  | 'lg'
  | null
  | undefined
