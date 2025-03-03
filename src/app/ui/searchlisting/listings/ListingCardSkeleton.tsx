"use client";
// components/Listings/ListingCardSkeleton.tsx
import { FaStar } from "react-icons/fa6";
import { cabin } from "../../fonts";
import Skeleton from "react-loading-skeleton";

const ListingCardSkeleton: React.FC = () => {


  return (
      <div className='relative grid grid-cols-3 rounded-md overflow-hidden bg-white'>
        {/* (left column) */}
        <div className='relative col-span-1 w-full'>
          <Skeleton height={200} className="object-cover"/>
        </div>

        {/* Main Content (middle + right columns) */}
        <div className='col-span-2 p-4 flex flex-col justify-center'>
          <div className='flex justify-between items-top mb-2'>
            {/* Title */}
            <h3 className='text-[#8B3A2D] font-semibold  text-[14px] mb-1 leading-[-3%]'>
              ..........
            </h3>
            <span
              className={`px-3 py-1 bg-gray-800 max-h-[26px] text-white rounded-full text-[12px] ${cabin.className}`}
            >
              ...
            </span>
          </div>

          {/* Optional short description */}
          <p className={`${cabin.className} text-sm text-gray-600 mb-2`}>
             ...............
          </p>

          {/* Optional short description */}
          <p className={`${cabin.className} text-sm text-gray-600 mb-2`}>
              Lorem ipsum dolor sit amet consectetur. Tempus semper suspendisse 
          semper nunc blandit at ac luctus.
          </p>

          {/* Bedrooms & Bathrooms */}
          <div
            className={`${cabin.className} flex items-center space-x-4 mb-2`}
          >
            {Array(2).map((amenities, index) => (
              <div className='flex items-center space-x-1' key={index}>
                <Skeleton width={20} height={20} />
              </div>
            ))}
          </div>

          <div className='flex justify-between'>
            {/* Star Rating */}
            <div className={`items-center mb-3`}>
              <span className='text-[10px] font-medium mr-2'>Star Rating</span>
              <div className='flex text-[#F4B400]'>
                {...Array(5).fill(<FaStar />)}
                <span className='ml-2 text-sm'>{0}</span>
              </div>
            </div>

            {/* Price details */}
            <div className='mt-2 text-[10px]'>
              <p className='font-bold text-[#8B3A2D] text-[14px]'>
                ₦ 0000
              </p>
              <p className={`${cabin.className} text-sm text-gray-500`}>
                ₦ 0000
              </p>
              <p className={`${cabin.className} text-xs text-gray-400`}>
                Includes Taxes and Fees
              </p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ListingCardSkeleton;
