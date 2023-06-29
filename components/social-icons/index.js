import {
  BsGlobeAsiaAustralia as Website,
  BsEnvelope as Mail,
  BsGithub as Github,
  BsFacebook as Facebook,
  BsYoutube as Youtube,
  BsLinkedin as Linkedin,
  BsTwitter as Twitter,
} from 'react-icons/bs'

const components = {
  mail: Mail,
  github: Github,
  facebook: Facebook,
  youtube: Youtube,
  linkedin: Linkedin,
  twitter: Twitter,
  website: Website,
}

const SocialIcon = ({ kind, href, size = 24 }) => {
  if (!href || (kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)))
    return null

  const props = { size }
  const SocialSvg = components[kind]

  if (!SocialSvg) return null
  return (
    <a
      className="text-sm text-gray-500 transition hover:text-yellow-500 dark:text-gray-400 dark:hover:text-yellow-500"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      title={kind}
    >
      <span className="inline-flex rounded-md bg-gray-100 p-3 shadow-sm hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700">
        <span className="sr-only">{kind}</span>
        <SocialSvg {...props} />
      </span>
    </a>
  )
}

export default SocialIcon
