import React, { ReactNode } from 'react'

const MaxContentHeightWrapper = ({
  children,
  classNames,
}: {
  children: ReactNode
  classNames: string
}) => {
  return (
    <>
      <div className='max-h-screen'>{children}</div>
    </>
  )
}

export default MaxContentHeightWrapper
