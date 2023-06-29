import { MDXLayoutRenderer } from '@/components/MDXComponents'
import SocialIcon from '@/components/social-icons'
import { getFileBySlug } from '@/lib/mdx'
import Image from 'next/image'
import Link from 'next/link'

import { FiCalendar, FiMapPin, FiExternalLink } from 'react-icons/fi'

const DEFAULT_LAYOUT = 'AuthorLayout'

export async function getStaticProps() {
  const authorDetails = await getFileBySlug('authors', ['default'])
  return { props: { authorDetails } }
}

export default function About({ authorDetails }) {
  const { mdxSource, frontMatter } = authorDetails
  const {
    programming,
    certifications,
    database,
    frameWorks,
    tools,
    education,
    workExperience,
    recommendation,
  } = frontMatter
  return (
    <>
      <MDXLayoutRenderer
        layout={frontMatter.layout || DEFAULT_LAYOUT}
        mdxSource={mdxSource}
        frontMatter={frontMatter}
      />
      <div className="mt-5">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Education</h1>
        <ul className="mt-5 flex flex-col gap-5">
          {education.map((edu) => (
            <li key={edu} className="grid grid-cols-1 gap-5 sm:grid-cols-6">
              <span className="flex items-center justify-center rounded-md bg-gray-100 p-3 dark:bg-gray-200 sm:col-span-1">
                <Image
                  src={edu.logo}
                  alt={edu.university}
                  width={'100%'}
                  height={'100%'}
                  objectFit="contain"
                  placeholder="blur"
                  blurDataURL={edu.logo}
                />
              </span>
              <div className="flex flex-col sm:col-span-5">
                <h2 className="text-lg font-medium text-gray-800 dark:text-gray-100">
                  {edu.major}
                </h2>
                <h3 className="text-md font-medium text-gray-500 dark:text-gray-400">
                  {edu.university}
                </h3>
                <div className="flex items-center gap-2">
                  <FiCalendar className="text-md font-medium text-gray-500 dark:text-gray-400" />
                  <p className="text-md font-medium text-gray-500 dark:text-gray-400">
                    {edu.start} - {edu.end}
                  </p>
                  <FiMapPin className="text-md font-medium text-gray-500 dark:text-gray-400" />
                  <p className="text-md font-medium text-gray-500 dark:text-gray-400">
                    {edu.location}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-5 flex flex-col">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Certifications</h1>
        <ul className="mt-5 flex flex-col gap-5">
          {certifications.map((cert) => (
            <li key={cert} className="grid grid-cols-1 gap-5 sm:grid-cols-6">
              <span className="flex items-center justify-center rounded-md bg-gray-100 p-3 dark:bg-gray-200 sm:col-span-1">
                <Image
                  src={cert.logo}
                  alt={cert.name}
                  width={'100%'}
                  height={'100%'}
                  objectFit="contain"
                  placeholder="blur"
                  blurDataURL={cert.logo}
                />
              </span>
              <div className="flex flex-col sm:col-span-5">
                <div>
                  <h2 className="text-lg font-medium text-gray-800 dark:text-gray-100">
                    {cert.name}
                  </h2>
                  <h3 className="text-md font-medium text-gray-500 dark:text-gray-400">
                    {cert.issuer} - {cert.issued}
                  </h3>
                  <Link href={cert.link} passHref>
                    <a target="_blank">
                      <div className="text-md flex cursor-pointer items-center gap-2 font-medium text-yellow-500 dark:text-yellow-400">
                        <span>Show credential</span> <FiExternalLink />
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-5 flex flex-col">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Work Experience</h1>
        <ul className="mt-5 grid gap-5">
          {workExperience.map((work) => (
            <li key={work} className="grid grid-cols-1 gap-5 sm:grid-cols-6">
              <span className="flex flex-col items-center justify-center rounded-md bg-gray-100 p-3 dark:bg-gray-200 sm:col-span-1">
                <Image
                  src={work.logo}
                  alt={work.company}
                  width={'100%'}
                  height={'100%'}
                  objectFit="contain"
                  placeholder="blur"
                  blurDataURL={work.logo}
                />
              </span>
              <div className="flex flex-col sm:col-span-5">
                <h2 className="text-lg font-medium text-gray-800 dark:text-gray-100">
                  {work.company}
                </h2>
                <h3 className="text-md font-medium text-gray-500 dark:text-gray-400">
                  {work.start} - {work.end} | {work.position}
                </h3>
                <p className="text-md font-medium text-gray-500 dark:text-gray-400">
                  {work.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-5 flex flex-col">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
          Programming Languages
        </h1>
        <ul className="mt-5 grid grid-cols-4 gap-5 sm:grid-cols-6 md:grid-cols-8">
          {programming.map((prog) => (
            <li key={prog} className="flex flex-col items-center">
              <span className="flex flex-col items-center rounded-md bg-gray-100 p-3 dark:bg-gray-200">
                <Image
                  src={prog.logo}
                  alt={prog.name}
                  width={'100%'}
                  height={'100%'}
                  objectFit="contain"
                  placeholder="blur"
                  blurDataURL={prog.logo}
                />
              </span>
              <p className="mt-2 text-lg font-medium text-gray-500 dark:text-gray-400">
                {prog.name}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-5 flex flex-col">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Database</h1>
        <ul className="mt-5 grid grid-cols-4 gap-5 sm:grid-cols-6 md:grid-cols-8">
          {database.map((db) => (
            <li key={db} className="flex flex-col items-center">
              <span className="flex flex-col items-center rounded-md bg-gray-100 p-3 dark:bg-gray-200">
                <Image
                  src={db.logo}
                  alt={db.name}
                  width={'100%'}
                  height={'100%'}
                  objectFit="contain"
                  placeholder="blur"
                  blurDataURL={db.logo}
                />
              </span>
              <p className="mt-2 text-lg font-medium text-gray-500 dark:text-gray-400">{db.name}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-5 flex flex-col">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Frameworks</h1>
        <ul className="mt-5 grid grid-cols-4 gap-5 sm:grid-cols-6 md:grid-cols-8">
          {frameWorks.map((fw) => (
            <li key={fw} className="flex flex-col items-center">
              <span className="flex flex-col items-center rounded-md bg-gray-100 p-3 dark:bg-gray-200">
                <Image
                  src={fw.logo}
                  alt={fw.name}
                  width={'100%'}
                  height={'100%'}
                  objectFit="contain"
                  placeholder="blur"
                  blurDataURL={fw.logo}
                />
              </span>
              <p className="mt-2 text-lg font-medium text-gray-500 dark:text-gray-400">{fw.name}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-5 flex flex-col">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Tools</h1>
        <ul className="mt-5  grid grid-cols-4 gap-5 sm:grid-cols-6 md:grid-cols-8">
          {tools.map((tool) => (
            <li key={tool} className="flex flex-col items-center">
              <span className="flex flex-col items-center rounded-md bg-gray-100 p-3 dark:bg-gray-200">
                <Image
                  src={tool.logo}
                  alt={tool.name}
                  width={'100%'}
                  height={'100%'}
                  objectFit="contain"
                  placeholder="blur"
                  blurDataURL={tool.logo}
                />
              </span>
              <p className="mt-2 text-lg font-medium text-gray-500 dark:text-gray-400">
                {tool.name}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-5 flex flex-col">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Recommendation</h1>
        <ul className="mt-5 flex flex-wrap gap-10">
          {recommendation.map((re) => (
            <li key={re} className="grid grid-cols-1 gap-5 rounded-md sm:grid-cols-4">
              <div className="col-span-1 flex flex-col items-center justify-center gap-5">
                <span className=" flex items-center justify-center overflow-hidden rounded-full">
                  <Image
                    src={re.photo}
                    alt={re.name}
                    width={200}
                    height={200}
                    objectFit="contain"
                    placeholder="blur"
                    blurDataURL={re.photo}
                  />
                </span>
                <div className="flex space-x-2 ">
                  <SocialIcon kind="github" href={re.github} size={20} />
                  <SocialIcon kind="linkedin" href={re.linkedin} />
                  <SocialIcon kind="website" href={re.website} />
                  <SocialIcon kind="facebook" href={re.facebook} />
                </div>
              </div>

              <div className="col-span-3 flex flex-col justify-start">
                <p className="mt-2 text-lg font-bold text-gray-800 dark:text-gray-100">{re.name}</p>
                <p className="text-md mt-2 font-medium text-gray-500 dark:text-gray-400">
                  {re.occupation}
                </p>
                <div className="flex">
                  <blockquote className="italic">{re.comment}</blockquote>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
