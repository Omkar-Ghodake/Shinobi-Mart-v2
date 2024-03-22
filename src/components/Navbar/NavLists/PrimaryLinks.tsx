import { primaryLinks } from '@/data/navbar-items'
import Link from 'next/link'
import React from 'react'
import NavLinkItem from '../NavLinkItem'

const PrimaryLinks = () => {
  return (
    <>
      {primaryLinks.map((item, index) => {
        return (
          <div key={index}>
            {/* <Link href={item.url}>{item.title}</Link> */}

            <NavLinkItem
              title={item.title}
              showTitle={item.showTitle}
              url={item.url}
              icon={item.icon}
              dropdown={item.dropdown}
              dropDownItems={item.dropDownItems}
              className={item.className}
              titleClassName={item.titleClassName}
              iconClassName={item.iconClassName}
            />
          </div>
        )
      })}
    </>
  )
}

export default PrimaryLinks
