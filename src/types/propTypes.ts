import { ReactElement } from 'react'
import { NavLink, ShadcnButtonSize, ShadcnButtonVariant } from './dataTypes'

export type NavItemProps = {
  title: string
  dropdown: boolean
  url: string
  icon?: ReactElement
  dropDownItems?: NavLink[]
  className?: string
  iconClassName?: string
  titleClassName?: string
  buttonVariant?: ShadcnButtonVariant
  buttonSize?: ShadcnButtonSize
  button: boolean
  showTitle: boolean
  onClickHandler?: () => any
}
