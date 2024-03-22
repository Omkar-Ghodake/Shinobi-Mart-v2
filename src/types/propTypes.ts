import { ReactElement } from 'react'
import { NavLinks, ShadcnButtonSize, ShadcnButtonVariant } from './dataTypes'

export type NavItemProps = {
  title: string
  dropdown: boolean
  url: string
  icon?: ReactElement
  dropDownItems?: NavLinks[]
  className?: string
  iconClassName?: string
  titleClassName?: string
  buttonVariant?: ShadcnButtonVariant
  buttonSize?: ShadcnButtonSize
  button: boolean
  showTitle: boolean
  onClickHandler?: () => any
}
