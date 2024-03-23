import { TempUser } from '@/types/dataTypes'
import AuthLinks from './NavLists/AuthLinks'
import CartButton from './NavLists/CartButton'
import DashboardLinks from './NavLists/DashboardLinks'
import PrimaryLinks from './NavLists/PrimaryLinks'
import ThemeButtons from './NavLists/ThemeButtons'
import UserLinks from './NavLists/UserLinks'
import NavbarBrand from './NavbarBrand'

const Navbar = () => {
  const session: boolean = true

  const user: TempUser = {
    role: 'admin',
    username: 'Omkar Ghodake',
  }

  return (
    <>
      <nav className='flex items-center justify-center h-[10vh] border-b'>
        <div className='w-[80%] flex justify-evenly items-center'>
          <NavbarBrand />

          <div className='flex items-center space-x-10'>
            <PrimaryLinks />
          </div>

          {!session && (
            <div className='flex items-center space-x-10'>
              <AuthLinks />
            </div>
          )}

          {session && user.role !== 'customer' && (
            <div className='flex items-center space-x-10'>
              <DashboardLinks userRole={user.role} />
            </div>
          )}

          {session && (
            <div className='flex items-center space-x-10'>
              <UserLinks />
              <CartButton />
            </div>
          )}

          <div className='flex items-center'>
            <ThemeButtons />
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
