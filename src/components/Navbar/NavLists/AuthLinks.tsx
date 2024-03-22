import { authLinks } from '@/data/navbar-items'
import Link from 'next/link'
import React from 'react'
import NavLinkItem from '../NavLinkItem'

const AuthLinks = () => {
  return (
    <>
      {authLinks.map((item, index) => {
        return (
          <div key={index}>
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

export default AuthLinks
