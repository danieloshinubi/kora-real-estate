import Image from "next/image";
import React from "react";
import { cabin } from "../fonts";

interface CollectionCardProps {
  title: string;
  savedListings: number;
  images: string[];
}

const CollectionCard: React.FC<CollectionCardProps> = ({
  title,
  savedListings,
  images,
}) => {
  return (
    <div className='bg-white '>
      {/* Image Grid */}
      <div className='grid grid-cols-2 gap-1 w-full'>
        {images.slice(0, 4).map((img, index) => (
          <div key={index} className='relative h-[174px]'>
            <Image src={img} alt={title} fill/>
          </div>
        ))}
      </div>

      <div className='py-4'>
        {/* Text Content */}
        <h3 className='mt-3 text-lg font-semibold'>{title}</h3>
        <p className={`mt-3 text-gray-500 text-sm ${cabin.className}`}>
          {savedListings} saved listings
        </p>
      </div>
    </div>
  );
};

export default CollectionCard;
