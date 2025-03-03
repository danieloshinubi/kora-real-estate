import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const PropertyCardSkeleton: React.FC = () => {
  return (
    <div className='bg-white overflow-hidden'>
      {/* Image Section */}
      <div className='relative w-full h-48'>
        <Skeleton height='100%' className="object-cover"/>
      </div>

      {/* Content Section */}
      <div className='py-4 px-3'>
        {/* Property Type and Rating */}
        <div className='flex justify-between items-center mb-2'>
          <Skeleton width={80} height={20} />
          <div className='flex items-center space-x-2'>
            <Skeleton width={24} height={16} />
            <Skeleton circle={true} width={20} height={20} />
          </div>
        </div>

        {/* Title */}
        <Skeleton width='75%' height={20} />
        <Skeleton width='50%' height={16} className='mb-4' />

        {/* Features */}
        <div className='flex items-center space-x-4 text-gray-600 text-sm mb-3'>
          <Skeleton width={40} height={20} />
          <Skeleton width={40} height={20} />
        </div>

        {/* Price */}
        <Skeleton width={96} height={24} />
      </div>
    </div>
  );
};

export default PropertyCardSkeleton;
