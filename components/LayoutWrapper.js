import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import { useRouter } from 'next/router'
import { useSession, signIn, signOut } from 'next-auth/react'

const Profile = () => {
  const { data: session } = useSession()
  if (session) {
    return (
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="mr-3">
            <img src={session.user.image} alt="avatar" className="h-10 w-10 rounded-full" />
          </div>
          <div className="hidden h-6 text-2xl font-semibold sm:block">{session.user.name}</div>
        </div>
        <button
          className="focus:shadow-outline-primary rounded-md border border-transparent bg-primary-600 px-3 py-2 text-sm font-medium leading-4 text-white transition-colors duration-150 hover:bg-primary-700 focus:outline-none active:bg-primary-600"
          onClick={() => signOut()}
        >
          Sign out
        </button>
      </div>
    )
  }
  return (
    <button
      className="focus:shadow-outline-primary rounded-md border border-transparent bg-primary-600 px-3 py-2 text-sm font-medium leading-4 text-white transition-colors duration-150 hover:bg-primary-700 focus:outline-none active:bg-primary-600"
      onClick={() => signIn()}
    >
      Sign in
    </button>
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
