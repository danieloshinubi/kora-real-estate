import React from "react";
import Image from "next/image";
import { cabin } from "../fonts";
import { FaHeart} from "react-icons/fa6";

interface CardProps {
  image: string;
  title: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  price: number;
}

const MapCard: React.FC<CardProps> = ({
  image,
  title,
  location,
  bedrooms,
  bathrooms,
  price,
}) => {
  const [favorite, setFavorite] = React.useState(false);

  const toggleFavorite = () => {
    setFavorite(!favorite);
  }

  return (
    <div className='rounded-lg bg-white overflow-hidden'>
      {/* Image Section */}
      <div className='relative'>
        <div className='relative w-full h-48'>
          <Image
            src={image}
            alt={title}
            fill
            className='object-cover rounded-t-lg'
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <button className='absolute top-3 right-3 p-2'>
         
            <FaHeart
              className={`${favorite? "text-[#D2691E]":"text-white" } text-2xl`}
              onClick={toggleFavorite}
            />
        </button>
      </div>

      {/* Content Section */}
      <div className='py-4 px-6'>
        

        {/* Title */}
        <h3 className='mt-3 text-[16px] leading-[21px] font-semibold text-gray-900'>
          {title}
        </h3>
        <p className={`text-[14px] ${cabin.className} text-gray-500`}>
          {location}
        </p>

        {/* Features */}
        <div className='flex items-center space-x-4 mt-3 text-gray-600 text-sm'>
          <div className='flex items-center space-x-1'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='h-5 w-5'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M21 21V5a2 2 0 00-2-2H5a2 2 0 00-2 2v16m18-3H3'
              />
            </svg>
            <span>{bedrooms}</span>
          </div>
          <div className='flex items-center space-x-1'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='h-5 w-5'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M15.75 9V3.75a.75.75 0 00-1.5 0V9h1.5zM9.75 3.75V9h1.5V3.75a.75.75 0 00-1.5 0z'
              />
            </svg>
            <span>{bathrooms}</span>
          </div>
        </div>

        {/* Price */}
        <div
          className={`${cabin.className} mt-3 text-[18px] font-bold text-[#8B3A2D]`}
        >
          NGN {price}
        </div>
      </div>
    </div>
  );
};

export default MapCard;
