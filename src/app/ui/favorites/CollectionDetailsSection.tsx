import React from "react";
import Image from "next/image";

interface CollectionDetailsProp {
  collection: {
    id: string;
    title: string;
    savedListings: number;
    collectionProperties: {
      image: string;
      category: string;
      rating: number;
      title: string;
      location: string;
      bedrooms: number;
      bathrooms: number;
      price: number;
    }[];
  };
}

export default function CollectionDetailsSection({
  collection,
}: CollectionDetailsProp) {
  return (
    <section className='min-h-screen mt-32 p-6'>
      <h2 className='text-3xl font-semibold'>{collection.title}</h2>

      <div className='mt-8 grid md:grid-cols-3 gap-6'>
        {collection.collectionProperties.slice(0,4).map((img, index) => (
          <div key={index} className='relative h-60'>
            <Image
              src={img.image}
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
