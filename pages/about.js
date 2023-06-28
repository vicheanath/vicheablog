import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'
import Image from 'next/image'
const DEFAULT_LAYOUT = 'AuthorLayout'

export async function getStaticProps() {
  const authorDetails = await getFileBySlug('authors', ['default'])
  return { props: { authorDetails } }
}

export default function About({ authorDetails }) {
  console.log(authorDetails)
  const { mdxSource, frontMatter } = authorDetails

  const { programming, certifications, database, frameWorks, tools, education } = frontMatter
  return (
    <>
      <MDXLayoutRenderer
        layout={frontMatter.layout || DEFAULT_LAYOUT}
        mdxSource={mdxSource}
        frontMatter={frontMatter}
      />
      <div className="mt-5 flex flex-col">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Education</h1>
        <ul className="mt-5 flex flex-wrap gap-5">
          {education.map((edu) => (
            <li key={edu} className="flex flex-row items-center gap-5">
              <span className="flex flex-col items-center rounded-md bg-gray-100 p-3 dark:bg-gray-800">
                <Image src={edu.logo} alt={edu.name} width={50} height={50} />
              </span>
              <div className="flex flex-col">
                <h2 className="text-lg font-medium text-gray-500 dark:text-gray-400">
                  {edu.university}
                </h2>
                <p>{edu.major}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-5 flex flex-col">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Certifications</h1>
        <ul className="mt-5 flex flex-col gap-5">
          {certifications.map((cert) => (
            <li key={cert} className="flex flex-row items-center ">
              <span className="flex items-center rounded-md bg-gray-100 p-3 dark:bg-gray-800">
                <Image src={cert.logo} alt={cert.name} width={50} height={50} objectFit="contain" />
              </span>
              <div>
                <h2 className="ml-5 text-lg font-medium text-gray-500 dark:text-gray-400">
                  {cert.name}
                </h2>
                <a
                  href={cert.link}
                  className="text-md ml-5 font-medium text-yellow-500 dark:text-yellow-400"
                >
                  View &rarr;
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
          Programming Languages
        </h1>
        <ul className="mt-5 flex flex-wrap gap-5">
          {programming.map((prog) => (
            <li key={prog} className="flex flex-col items-center">
              <span className="flex flex-col items-center rounded-md bg-gray-100 p-3 dark:bg-gray-800">
                <Image
                  src={prog.logo}
                  alt={prog.name}
                  width={100}
                  height={100}
                  objectFit="contain"
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
        <ul className="mt-5 flex flex-wrap gap-5">
          {database.map((db) => (
            <li key={db} className="flex flex-col items-center">
              <span className="flex flex-col items-center rounded-md bg-gray-100 p-3 dark:bg-gray-800">
                <Image src={db.logo} alt={db.name} width={100} height={100} objectFit="contain" />
              </span>
              <p>{db.name}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Frameworks</h1>
        <ul className="mt-5 flex flex-wrap gap-5">
          {frameWorks.map((fw) => (
            <li key={fw} className="flex flex-col items-center">
              <Image src={fw.logo} alt={fw.name} width={100} height={100} />
              <p>{fw.name}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Tools</h1>
        <ul className="mt-5 flex flex-wrap gap-5">
          {tools.map((tool) => (
            <li key={tool}>
              <span className="flex flex-col items-center rounded-md bg-gray-100 p-3 dark:bg-gray-800">
                <Image
                  src={tool.logo}
                  alt={tool.name}
                  width={100}
                  height={100}
                  objectFit="contain"
                />
              </span>
              <p>{tool.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
