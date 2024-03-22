import { cn } from '@/lib/utils'
import {
  NavDropDownButton,
  NavDropDownLink,
  ShadcnButtonSize,
  ShadcnButtonVariant,
} from '@/types/dataTypes'
import Link from 'next/link'
import { ReactElement } from 'react'
import { Button } from '../ui/button'
import { ChevronDown } from 'lucide-react'
import DropDownMenu from '../DropDownMenu'

const NavLinkItem = ({
  url,
  title,
  showTitle,
  icon,
  dropdown,
  dropDownItems,
  isButton,
  buttonVariant,
  buttonSize,
  className,
  iconClassName,
  titleClassName,
}: {
  title: string
  url?: string
  showTitle: boolean
  icon?: ReactElement
  dropdown: boolean
  dropDownItems?: NavDropDownLink[] | NavDropDownButton[]
  isButton?: boolean
  buttonVariant?: ShadcnButtonVariant
  buttonSize?: ShadcnButtonSize
  className?: string
  iconClassName?: string
  titleClassName?: string
}) => {
  return (
    <>
      {url ? (
        isButton ? (
          dropdown && dropDownItems ? (
            <DropDownMenu content={dropDownItems}>
              <Button
                variant={buttonVariant}
                size={buttonSize}
                className={cn(className)}
              >
                <Link
                  href={url}
                  className={cn('flex justify-between items-center')}
                >
                  {showTitle && (
                    <span className={cn(titleClassName)}>{title}</span>
                  )}
                  {icon && (
                    <span
                      className={cn(`${showTitle && 'ml-2'}`, iconClassName)}
                    >
                      {icon}
                    </span>
                  )}
                  <ChevronDown className='ml-1' />
                </Link>
              </Button>
            </DropDownMenu>
          ) : (
            <Button
              variant={buttonVariant}
              size={buttonSize}
              className={cn(className)}
            >
              <Link
                href={url}
                className={cn('flex justify-between items-center')}
              >
                {showTitle && (
                  <span className={cn(titleClassName)}>{title}</span>
                )}
                {icon && (
                  <span className={cn(`${showTitle && 'ml-2'}`, iconClassName)}>
                    {icon}
                  </span>
                )}
              </Link>
            </Button>
          )
        ) : dropdown && dropDownItems ? (
          <DropDownMenu content={dropDownItems}>
            <Link
              href={url}
              className={cn('flex justify-between items-center')}
            >
              {showTitle && <span className={cn(titleClassName)}>{title}</span>}
              {icon && (
                <span className={cn(`${showTitle && 'ml-2'}`, iconClassName)}>
                  {icon}
                </span>
              )}
              <ChevronDown className='ml-1' />
            </Link>
          </DropDownMenu>
        ) : (
          <Link href={url} className={cn('flex justify-between items-center')}>
            {showTitle && <span className={cn(titleClassName)}>{title}</span>}
            {icon && (
              <span className={cn(`${showTitle && 'ml-2'}`, iconClassName)}>
                {icon}
              </span>
            )}
          </Link>
        )
      ) : isButton ? (
        dropdown && dropDownItems ? (
          <DropDownMenu content={dropDownItems}>
            <Button
              variant={buttonVariant}
              size={buttonSize}
              className={cn('', className)}
              asChild
            >
              <span
                className={cn(
                  'flex justify-center items-center cursor-pointer mx-auto',
                  titleClassName
                )}
              >
                {showTitle && (
                  <span className={cn(titleClassName)}>{title}</span>
                )}
                {icon && (
                  <span className={cn(`${showTitle && 'ml-2'}`, iconClassName)}>
                    {icon}
                  </span>
                )}
                <ChevronDown className='ml-1' />
              </span>
            </Button>
          </DropDownMenu>
        ) : (
          <Button
            variant={buttonVariant}
            size={buttonSize}
            className={cn('', className)}
            asChild
          >
            <span
              className={cn(
                'flex justify-center items-center cursor-pointer mx-auto',
                titleClassName
              )}
            >
              {showTitle && <span className={cn(titleClassName)}>{title}</span>}
              {icon && (
                <span className={cn(`${showTitle && 'ml-2'}`, iconClassName)}>
                  {icon}
                </span>
              )}
            </span>
          </Button>
        )
      ) : dropdown && dropDownItems ? (
        <DropDownMenu content={dropDownItems}>
          <span
            className={cn(
              'flex justify-between items-center cursor-pointer',
              titleClassName
            )}
          >
            {showTitle && <span className={cn(titleClassName)}>{title}</span>}
            {icon && (
              <span className={cn(`${showTitle && 'ml-2'}`, iconClassName)}>
                {icon}
              </span>
            )}
            <ChevronDown className='ml-1' />
          </span>
        </DropDownMenu>
      ) : (
        <span
          className={cn(
            'flex justify-between items-center cursor-pointer',
            titleClassName
          )}
        >
          {showTitle && <span className={cn(titleClassName)}>{title}</span>}
          {icon && (
            <span className={cn(`${showTitle && 'ml-2'}`, iconClassName)}>
              {icon}
            </span>
          )}
        </span>
      )}
    </>
  )
}

export default NavLinkItem
