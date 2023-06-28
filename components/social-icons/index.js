import Mail from './mail.svg'
import Github from './github.svg'
import Facebook from './facebook.svg'
import Youtube from './youtube.svg'
import Linkedin from './linkedin.svg'
import Twitter from './twitter.svg'

// Icons taken from: https://simpleicons.org/

const components = {
  mail: Mail,
  github: Github,
  facebook: Facebook,
  youtube: Youtube,
  linkedin: Linkedin,
  twitter: Twitter,
}

const SocialIcon = ({ kind, href, size = 8 }) => {
  if (!href || (kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)))
    return null

  const SocialSvg = components[kind]

  return (
    <a
      className="text-sm text-gray-500 transition hover:text-yellow-500 dark:text-gray-400 dark:hover:text-yellow-500"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="inline-flex rounded-md bg-gray-100 p-3 shadow-sm hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700">
        <span className="sr-only">{kind}</span>
        <SocialSvg
          className={`fill-current text-gray-700  dark:text-gray-200 h-${size} w-${size}`}
        />
      </span>
    </a>
  )
}

export default SocialIcon
