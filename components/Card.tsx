'use client';

import { useState } from 'react';
import Image from './Image';
import Link from './Link';

const Card = ({ title, description, imgSrcArray = [], href }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + imgSrcArray.length) % imgSrcArray.length);
  };

  const handleNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imgSrcArray.length);
  };

  return (
    <div className="md:max-w-[544px] p-4 md:w-1/2">
      <div
        className={`${
          imgSrcArray && 'h-full'
        } overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
      >
        {imgSrcArray && imgSrcArray.length > 0 && (
          <div className="relative">
            {href ? (
              <Link href={href} aria-label={`Link to ${title}`}>
                <Image
                  alt={title}
                  src={imgSrcArray[currentIndex]}
                  className="object-cover object-center md:h-36 lg:h-48 w-full" // Ensure full width and cover
                  width={544} // These dimensions help in maintaining the aspect ratio
                  height={306}
                />
              </Link>
            ) : (
              <Image
                alt={title}
                src={imgSrcArray[currentIndex]}
                className="object-cover object-center md:h-36 lg:h-48 w-full" // Ensure full width and cover
                width={544}
                height={306}
              />
            )}
            <button
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-r-md"
              onClick={handlePrevImage}
            >
              &#10094;
            </button>
            <button
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-l-md"
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
  );
};

export default Card;
