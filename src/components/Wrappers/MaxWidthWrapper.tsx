import { cn } from '@/lib/utils'
import React, { ReactNode } from 'react'

const MaxWidthWrapper = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <>
      <div className={cn('max-w-[70vw] mx-auto', className)}>{children}</div>
    </>
  )
}

export default MaxWidthWrapper
