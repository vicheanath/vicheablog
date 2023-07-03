import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'
import Script from 'next/script'
import { useTheme } from 'next-themes'

export default function AuthorLayout({ children, frontMatter }) {
  const { name, avatar, occupation, company, email, twitter, linkedin, github, facebook } =
    frontMatter
  const { theme, setTheme, resolvedTheme } = useTheme()

  return (
    <>
      <PageSEO title={`About Me - ${name}`} description={`About Me - ${name}`} />
      <div className="">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About Me
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0 ">
          <div className="flex flex-col items-center rounded-md bg-gray-200 pt-8 pb-8 dark:bg-gray-700">
            <Image
              src={avatar}
              alt="avatar"
              width={200}
              height={200}
              className="h-48 w-48 rounded-full"
              objectFit="cover"
              placeholder="blur"
              blurDataURL={avatar}
            />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
            <div className="text-lg text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-gray-500 dark:text-gray-400">{company}</div>
            <div className="flex space-x-3 pt-6">
              <SocialIcon kind="mail" href={`mailto:${email}`} />
              <SocialIcon kind="github" href={github} />
              <SocialIcon kind="linkedin" href={linkedin} />
              <SocialIcon kind="facebook" href={facebook} />
            </div>

            <div className="flex flex-col items-center justify-center">
              <h3 className="pt-4 pb-2 text-2xl font-bold">Subscribe</h3>
              <p className="text-lg text-gray-600 dark:text-gray-100">B. CHEA</p>
              <div
                className="g-ytsubscribe"
                data-channelid="UCvmVTbvJkOSFzEcq2X0iCZw"
                data-layout="default"
                data-theme={theme === 'dark' || resolvedTheme === 'dark' ? 'dark' : 'light'}
                data-count="default"
              ></div>
            </div>
          </div>

          <div className="prose max-w-none pb-8 dark:prose-dark xl:col-span-2">{children}</div>
        </div>
        <Script src="https://apis.google.com/js/platform.js"></Script>
      </div>
    </>
  )
}
