import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'
import { VideoPlayer } from '@videojs-player/react'
import 'video.js/dist/video-js.css'

export default function AuthorLayout({ children, frontMatter }) {
  const { name, avatar, video } = frontMatter
  console.log(frontMatter)
  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      <div className="grid grid-cols-4 gap-2">
        <div className="col-span-3">
          <div className="flex">
            <VideoPlayer
              src={video.src}
              poster="/static/images/courses/reactjs.png"
              title={video.title}
              controls
              loop={true}
              volume={0.6}
            />
          </div>
          <div className="prose max-w-none pb-8 pt-8 dark:prose-dark xl:col-span-2">{children}</div>
        </div>
        <div className="col-span-1">
          <div className="flex flex-col items-center">Hello</div>
        </div>
      </div>
    </>
  )
}
