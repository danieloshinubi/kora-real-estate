// components/Listings/ListingCard.tsx
import React from "react";
import Image from "next/image";
import { Listing } from "../listingType";
import { FaHeart, FaStar } from "react-icons/fa6";
import { cabin } from "../../fonts";

interface ListingCardProps {
  listing: Listing;
}

const ListingCard: React.FC<ListingCardProps> = ({ listing }) => {
  const { title, description, image, category, price, currency, rating } =
    listing;
  const [favorite, setFavorite] = React.useState(false);

  const toggleFavorite = () => {
    setFavorite(!favorite);
  };

  return (
    <div className='relative grid grid-cols-3 rounded-md overflow-hidden  bg-white'>
      {/* Image (left column) */}
      <div className='relative col-span-1 w-full'>
        <Image src={image} alt={title} fill className='object-cover' />
        <button className='absolute top-3 right-3 p-2'>
          <FaHeart
            className={`${favorite ? "text-[#D2691E]" : "text-white"} text-2xl`}
            onClick={toggleFavorite}
          />
        </button>
      </div>

      {/* Main Content (middle + right columns) */}
      <div className='col-span-2 p-4 flex flex-col justify-center'>
        <div className='flex justify-between items-top mb-2'>
          {/* Title */}
          <h3 className='text-[#8B3A2D] font-semibold  text-[14px] mb-1 leading-[-3%]'>
            {title}
          </h3>
          <span
            className={`px-3 py-1 bg-gray-800 max-h-[26px] text-white rounded-full text-[12px] ${cabin.className}`}
          >
            {category}
          </span>
        </div>

        {/* Optional short description */}
        <p className={`${cabin.className} text-sm text-gray-600 mb-2`}>
          {description ||
            `Lorem ipsum dolor sit amet consectetur. Tempus semper suspendisse 
          semper nunc blandit at ac luctus.`}
        </p>

        {/* Bedrooms & Bathrooms */}
        <div className={`${cabin.className} flex items-center space-x-4 mb-2`}>
          <div className='flex items-center space-x-1'>
            <span className='text-sm text-gray-700'>3 Bedrooms</span>
          </div>
          <div className='flex items-center space-x-1'>
            <span className='text-sm text-gray-700'>4 Bathrooms</span>
          </div>
        </div>

        <div className='flex justify-between'>
          {/* Star Rating */}
          <div className={`items-center mb-3`}>
            <span className='text-[10px] font-medium mr-2'>Star Rating</span>
            <div className='flex text-[#F4B400]'>
              {...Array(5).fill(<FaStar />)}
              <span className='ml-2 text-sm'>{rating}</span>
            </div>
          </div>

          {/* Price details */}
          <div className='mt-2 text-[10px]'>
            <p className='font-bold text-[#8B3A2D] text-[14px]'>
              {currency} {price.toLocaleString()}
            </p>
            <p className={`${cabin.className} text-sm text-gray-500`}>
              {currency} {price.toLocaleString()} total
            </p>
            <p className={`${cabin.className} text-xs text-gray-400`}>Includes Taxes and Fees</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
