import { FiArrowRight, FiExternalLink, FiTag } from 'react-icons/fi'
import Image from './Image'
import Link from './Link'
import Button from './Button'

const CourseCard = ({ title, description, imgSrc, href, draft, price, salePrice }) => {
  return (
    <div className="md p-4 md:w-1/2" style={{ maxWidth: '544px' }}>
      <div
        className={`${
          imgSrc && 'h-full'
        }  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
      >
        <Link href={href} aria-label={`Link to ${title}`}>
          <Image
            alt={title}
            src={imgSrc}
            className="object-cover object-center md:h-36 lg:h-48"
            width={544}
            height={306}
            placeholder="blur"
            blurDataURL={imgSrc}
          />
        </Link>

        <div className="p-6">
          <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          </h2>
          <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <Link
              href={href}
              className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              aria-label={`Link to ${title}`}
            >
              <Button
                isDisabled={draft}
                color="yellow"
                rightIcon={<FiExternalLink className="inline" />}
              >
                {draft ? 'Coming Soon' : 'Eroll Now'}
              </Button>
            </Link>

            <div className="flex items-center gap-2 text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
              <FiTag className="mr-1 inline" size={20} />
              {salePrice && (
                <span className="text-base font-medium leading-6 text-red-500 line-through dark:text-red-400">
                  {price} USD
                </span>
              )}
              <span className="text-2xl font-bold leading-6 text-green-500 dark:text-green-400">
                {salePrice ? salePrice : price} <span className="text-sm">USD</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseCard
