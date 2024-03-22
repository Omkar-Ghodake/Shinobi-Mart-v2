import { dashboardLinks } from '@/data/navbar-items'
import { TempUserRole } from '@/types/dataTypes'
import Link from 'next/link'
import NavLinkItem from '../NavLinkItem'

const DashboardLinks = ({ userRole }: { userRole: TempUserRole }) => {
  const item = dashboardLinks[userRole]

  return (
    <>
      {userRole !== 'customer' && item && (
        <div>
          <NavLinkItem
            title={item.title}
            showTitle={item.showTitle}
            url={item.url}
            icon={item.icon}
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
      )}
    </>
  )
}

export default DashboardLinks
