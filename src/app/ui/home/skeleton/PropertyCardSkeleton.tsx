import React from "react";
// import ContentLoader from "react-content-loader";

const PropertyCardSkeleton: React.FC = () => {
  return (
    <div className='bg-white overflow-hidden'>
      {/* Image Section */}
      <div className='relative w-full h-48 bg-gray-300 rounded-lg animate-pulse'></div>

      {/* Content Section */}
      <div className='py-4 px-3'>
        {/* Property Type and Rating */}
        <div className='flex justify-between items-center mb-2'>
          <div className='w-20 h-5 bg-gray-300 rounded-full animate-pulse'></div>
          <div className='flex items-center space-x-2'>
            <div className='w-6 h-4 bg-gray-300 rounded animate-pulse'></div>
            <div className='w-5 h-5 bg-gray-300 rounded-full animate-pulse'></div>
          </div>
        </div>

        {/* Title */}
        <div className='w-3/4 h-5 bg-gray-300 rounded mb-2 animate-pulse'></div>
        <div className='w-1/2 h-4 bg-gray-300 rounded mb-4 animate-pulse'></div>

        {/* Features */}
        <div className='flex items-center space-x-4 text-gray-600 text-sm mb-3'>
          <div className='w-10 h-5 bg-gray-300 rounded animate-pulse'></div>
          <div className='w-10 h-5 bg-gray-300 rounded animate-pulse'></div>
        </div>

        {/* Price */}
        <div className='w-24 h-6 bg-gray-300 rounded animate-pulse'></div>
      </div>
    </div>
  );
};

export default PropertyCardSkeleton;
