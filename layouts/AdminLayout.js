import Link from '@/components/Link'
import { useRouter } from 'next/router'
import {
  FiBarChart2,
  FiBookmark,
  FiFilePlus,
  FiList,
  FiStar,
  FiTag,
  FiUser,
  FiVideo,
} from 'react-icons/fi'
import LayoutWrapper from '@/components/LayoutWrapper'

export default function AdminLayout({ children }) {
  const router = useRouter()
  const path = router.pathname

  const menu = [
    { name: 'Dashboard', href: '/admin', icon: <FiBarChart2 /> },
    { name: 'Users', href: '/admin/users', icon: <FiUser /> },
    { name: 'Roles', href: '/admin/roles', icon: <FiStar /> },
    { name: 'Permissions', href: '/admin/permissions', icon: <FiBookmark /> },
    { name: 'Courses', href: '/admin/courses', icon: <FiVideo /> },
    { name: 'Posts', href: '/admin/posts', icon: <FiFilePlus /> },
    { name: 'Categories', href: '/admin/categories', icon: <FiList /> },
    { name: 'Tags', href: '/admin/tags', icon: <FiTag /> },
  ]

  const activeMenu = (href) => {
    if (href === path) {
      return 'bg-gray-100 dark:bg-gray-800'
    } else {
      return ''
    }
  }

  return (
    <LayoutWrapper>
      <div className="flex flex-col gap-5 md:flex-row">
        <div className="">
          <ul className="flex flex-col gap-1">
            {menu.map((item) => (
              <li
                key={item.name}
                className={`rounded-md px-5 py-3 hover:bg-gray-200 dark:hover:bg-gray-800 ${activeMenu(
                  item.href
                )}`}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-2 text-lg font-medium text-gray-900 dark:text-gray-100"
                >
                  {item.icon}
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex w-full flex-1 flex-col">{children}</div>
      </div>
    </LayoutWrapper>
  )
}
