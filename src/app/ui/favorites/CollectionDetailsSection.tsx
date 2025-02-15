import React from "react";
import Image from "next/image";

interface CollectionDetailsProp {
  collection: {
    id: string;
    title: string;
    savedListings: number;
    images: string[];
  };
}

export default function CollectionDetailsSection({
  collection,
}: CollectionDetailsProp) {
  return (
    <section className='min-h-screen mt-32 p-6'>
      <h2 className='text-3xl font-semibold'>{collection.title}</h2>
      <p className='text-gray-500'>{collection.savedListings} saved listings</p>

      <div className='mt-8 grid md:grid-cols-3 gap-6'>
        {collection.images.map((img, index) => (
          <div key={index} className='relative h-60'>
            <Image
              src={img}
              alt={collection.title}
              fill
              className='rounded-md'
            />
          </div>
        ))}
      </div>
    </section>
  );
}
