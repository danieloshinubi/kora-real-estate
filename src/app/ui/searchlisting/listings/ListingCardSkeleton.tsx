"use client";
import { cabin } from "../../fonts";
import Skeleton from "react-loading-skeleton";

const ListingCardSkeleton: React.FC = () => {
  return (
    <div className='relative grid grid-cols-3 rounded-md overflow-hidden bg-white'>
      {/* (left column) */}
      <div className='relative col-span-1 w-full'>
        <Skeleton height={200} className='object-cover' />
      </div>

      {/* Main Content (middle + right columns) */}
      <div className='col-span-2 p-4 flex flex-col justify-center'>
        <div className='flex justify-between items-top mb-2'>
          {/* Title */}
          <Skeleton width={100} height={20} />
          <Skeleton
            width={50}
            height={20}
            className={`rounded-full ${cabin.className}`}
          />
        </div>

        {/* Optional short description */}
        <Skeleton count={2} height={15} className={`${cabin.className} mb-2`} />

        {/* Bedrooms & Bathrooms */}
        <div className={`${cabin.className} flex items-center space-x-4 mb-2`}>
          {Array(2).map((_, index) => (
            <Skeleton key={index} width={20} height={20} />
          ))}
        </div>

        <div className='flex justify-between'>
          {/* Star Rating */}
          <div className={`items-center mb-3`}>
            <Skeleton width={60} height={10} />
            <div className='flex text-[#F4B400]'>
              <Skeleton width={20} height={10} className='ml-2' />
            </div>
          </div>

          {/* Price details */}
          <div className='mt-2 text-[10px]'>
            <Skeleton width={50} height={20} />
            <Skeleton width={50} height={15} className={`${cabin.className}`} />
            <Skeleton
              width={100}
              height={10}
              className={`${cabin.className}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingCardSkeleton;
