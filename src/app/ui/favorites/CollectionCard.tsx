// CollectionCard.tsx
import Image from "next/image";
import React from "react";

interface CollectionCardProps {
  title: string;
  savedListings: number;
  images: string[];
}

const CollectionCard: React.FC<CollectionCardProps> = ({ title, savedListings, images }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="grid grid-cols-2 gap-2 relative">
        {images.map((img, index) => (
          <Image key={index} src={img} alt={title} fill className="w-full h-24 object-cover rounded-md" />
        ))}
      </div>
      <h3 className="mt-3 text-lg font-semibold">{title}</h3>
      <p className="text-gray-500 text-sm">{savedListings} saved listings</p>
    </div>
  );
};

export default CollectionCard;