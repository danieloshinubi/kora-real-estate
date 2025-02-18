import Image from "next/image";
import Link from "next/link";
import React from "react";
import { cabin } from "../fonts";

interface CollectionCardProps {
  id: string;
  title: string;
  savedListings: number;
  collectionProperties:{
    image: string;
    category: string,
    rating: number,
    title: string,
    location: string,
    bedrooms: number,
    bathrooms: number,
    price: number,
  }[]
}

const CollectionCard: React.FC<CollectionCardProps> = ({
  id,
  title,
  savedListings,
  collectionProperties,
}) => {
  return (
    <Link href={`/favourites/${id}`} passHref>
      <div className="bg-white cursor-pointer transition duration-300">
        {/* Image Grid */}
        <div className="grid grid-cols-2 gap-1 w-full">
          {collectionProperties.slice(0, 4).map((img, index) => (
            <div key={index} className="relative h-[174px]">
              <Image src={img.image} alt={title} fill className="rounded-md" />
            </div>
          ))}
        </div>

        <div className="py-4">
          {/* Text Content */}
          <h3 className="mt-3 text-lg font-semibold">{title}</h3>
          <p className={`mt-3 text-gray-500 text-sm ${cabin.className}`}>
            {savedListings} saved listings
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CollectionCard;
