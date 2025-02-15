import React from "react";
import Image from "next/image";

interface Listing {
  name: string;
  image: string;
  count: number;
}

interface ListingsProps {
  listings: Listing[];
}

const Listings: React.FC<ListingsProps> = ({ listings }) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8'>
      {listings.map((listing) => (
        <div key={listing.name} className='flex flex-col gap-4 overflow-hidden'>
          <div className='flex relative w-full h-[189px]'>
            <Image
              src={listing.image}
              alt={listing.name}
              fill
              className='w-full object-cover rounded-lg'
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className='flex justify-between text-center'>
            <h3 className='text-[16px] font-semibold'>{listing.name}</h3>
            <p className='text-sm text-gray-500'>({listing.count} Listings)</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Listings;
