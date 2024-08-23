'use client'

import { useState } from 'react'
import Image from './Image'
import Link from './Link'

interface CardProps {
  title: string
  description: string
  href?: string
  imgSrcs?: string[]
}

const Card: React.FC<CardProps> = ({ title, description, imgSrcs = [], href }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? imgSrcs.length - 1 : prevIndex - 1))
  }

  const handleNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imgSrcs.length)
  }

  return (
    <div className="p-4 md:w-1/2 md:max-w-[544px]">
      <div
        className={`${
          imgSrcs && 'h-full'
        } overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
      >
        {imgSrcs.length > 0 && (
          <div className="relative">
            {href ? (
              <Link href={href} aria-label={`Link to ${title}`}>
                <Image
                  alt={title}
                  src={imgSrcs[currentIndex]}
                  className="w-full object-cover object-center md:h-36 lg:h-48"
                  width={544}
                  height={306}
                />
              </Link>
            ) : (
              <Image
                alt={title}
                src={imgSrcs[currentIndex]}
                className="w-full object-cover object-center md:h-36 lg:h-48"
                width={544}
                height={306}
              />
            )}
            <button
              className="absolute left-0 top-1/2 z-10 -translate-y-1/2 transform rounded-r-md bg-gray-800 bg-opacity-70 p-2 text-white"
              onClick={handlePrevImage}
            >
              &#10094;
            </button>
            <button
              className="absolute right-0 top-1/2 z-10 -translate-y-1/2 transform rounded-l-md bg-gray-800 bg-opacity-70 p-2 text-white"
              onClick={handleNextImage}
            >
              &#10095;
            </button>
          </div>
        )}
        <div className="p-6">
          <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
            {href ? (
              <Link href={href} aria-label={`Link to ${title}`}>
                {title}
              </Link>
            ) : (
              title
            )}
          </h2>
          <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
          {href && (
            <Link
              href={href}
              className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              aria-label={`Link to ${title}`}
            >
              Learn more &rarr;
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default Card
