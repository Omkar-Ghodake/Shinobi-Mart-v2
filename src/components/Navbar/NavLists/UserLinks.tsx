import { userLinks } from '@/data/navbar-items'
import Link from 'next/link'
import React from 'react'
import NavLinkItem from '../NavLinkItem'

const UserLinks = () => {
  return (
    <>
      {userLinks.map((item, index) => {
        return (
          <div key={index}>
            <NavLinkItem
              title={item.title}
              showTitle={item.showTitle}
              icon={item.icon}
              url={item.url}
              dropdown={item.dropdown}
              dropDownItems={item.dropDownItems}
              isButton={item.isButton}
              buttonVariant={item.buttonVariant}
              buttonSize={item.buttonSize}
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

export default UserLinks
