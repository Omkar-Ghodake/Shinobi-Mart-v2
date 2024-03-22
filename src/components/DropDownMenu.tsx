import { NavDropDownButton, NavDropDownLink } from '@/types/dataTypes'
import React, { ReactNode } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import Link from 'next/link'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'

const DropDownMenu = ({
  children,
  content,
}: {
  children: ReactNode
  content: NavDropDownLink[] | NavDropDownButton[]
}) => {
  const totalLength = () => {
    let length = content.length
    console.log('🚀 ~ totalLength ~ length:', length)

    content.forEach((element) => {
      length += element.items.length
    })

    return length
  }
  console.log('🚀 ~ totalLength ~ totalLength:', totalLength())
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>

        <DropdownMenuContent
          className={cn(
            `flex flex-col flex-wrap 
            ${totalLength() < 10 && 'w-[8vw] max-h-[10vh]'}
            ${totalLength() > 10 && 'w-[24vw] max-h-[40vh]'}
            ${totalLength() > 20 && 'w-[40vw] max-h-[40vh]'}
            ${totalLength() > 30 && 'w-[40vw] max-h-[60vh]'}
            ${totalLength() > 40 && 'w-[56vw] max-h-[80vh]'}
            ${totalLength() > 50 && 'w-[80vw] max-h-[95vh]'}
            `
          )}
        >
          {content.map((item, index) => (
            <div key={index}>
              {item.head && (
                <>
                  <DropdownMenuLabel>{item.head}</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                </>
              )}
              <DropdownMenuGroup>
                {item.items.map((subItem, index) => (
                  <DropdownMenuItem key={index} asChild>
                    {subItem.url ? (
                      <Link href={subItem.url} className='w-full'>
                        {subItem.title}
                      </Link>
                    ) : (
                      <span className='w-full'>{subItem.title}</span>
                    )}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </div>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}

export default DropDownMenu
