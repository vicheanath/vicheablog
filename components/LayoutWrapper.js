import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import React from 'react'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import { useRouter } from 'next/router'
import { useSession, signIn, signOut } from 'next-auth/react'
import Button from './Button'
import { FiLogIn, FiLogOut } from 'react-icons/fi'

const Profile = () => {
  const { data: session } = useSession()
  const [isOpen, setIsOpen] = React.useState(false)
  if (session) {
    return (
      <div
        className="relative inline-block cursor-pointer justify-center rounded-md px-3 py-2 hover:bg-gray-100 focus:outline-none dark:hover:bg-gray-800"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>
          <div className="flex items-center">
            <div className="mr-3">
              <img src={session.user.image} alt="avatar" className="h-10 w-10 rounded-full" />
            </div>
            <div className="hidden h-6 text-lg font-semibold sm:block">{session.user.name}</div>
          </div>
        </div>

        <div
          className={`
          ${
            isOpen
              ? 'scale-100 transform opacity-100 transition duration-100 ease-out'
              : 'scale-95 transform opacity-0 transition duration-75 ease-in'
          }
          absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-500 rounded-md bg-gray-100 shadow-lg ring-1 ring-gray-500 ring-opacity-5 focus:outline-none dark:divide-gray-500 dark:bg-gray-800 dark:ring-gray-500`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
        >
          <div className="py-1" role="none">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-0"
            >
              Profile
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-1"
            >
              Settings
            </a>
          </div>
          <div className="py-1" role="none">
            <a
              onClick={() => signOut()}
              className="flex justify-between px-4 py-2 text-sm text-gray-700 dark:text-gray-300"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-3"
            >
              <span>Sign out</span>
              <FiLogOut className="inline" size={20} />
            </a>
          </div>
        </div>
      </div>
    )
  }
  return (
    <Button
      color="yellow"
      onClick={() => signIn()}
      rightIcon={<FiLogIn className="inline" size={20} />}
    >
      Sign in
    </Button>
  )
}

const LayoutWrapper = ({ children }) => {
  const router = useRouter()
  const path = router.pathname
  const activeMenuItem = (href) => {
    if (href === path) {
      return 'text-gray-900 dark:text-gray-100'
    } else {
      return 'text-gray-500 dark:text-gray-400'
    }
  }

  return (
    <SectionContainer>
      <div className="flex h-screen flex-col justify-between">
        <header className="flex items-center justify-between py-10">
          <div>
            <Link href="/" aria-label={siteMetadata.headerTitle}>
              <div className="flex items-center justify-between">
                <div className="mr-3">
                  <Logo />
                </div>
                {typeof siteMetadata.headerTitle === 'string' ? (
                  <div className="hidden h-6 text-2xl font-semibold sm:block">
                    {siteMetadata.headerTitle}
                  </div>
                ) : (
                  siteMetadata.headerTitle
                )}
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className={`p-1 font-medium sm:p-4 ${activeMenuItem(link.href)}`}
                >
                  <span className="text-gray-900 dark:text-gray-100">{link.icon}</span>
                  <span className="ml-2">{link.title}</span>
                </Link>
              ))}
            </div>
            <ThemeSwitch />
            <Profile />
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
