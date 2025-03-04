import React from "react";
import PropertyCard from "../home/PropertyCard";
import { Location } from "@/types/listingtype";

interface CollectionDetailsProp {
  collection: {
    id: string;
    title: string;
    savedListings: number;
    collectionProperties: {
      image: string;
      _id: string;
      propertyType: string;
      rating: number;
      title: string;
      location: Location;
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
    <section className='min-h-screen mt-8 p-6'>
      <h2 className='text-2xl font-semibold text-[#8B3A2D]'>{collection.title}</h2>

      <div className='mt-8 grid md:grid-cols-4 gap-6'>
        {collection.collectionProperties.slice(0,4).map((img, index) => (
          <PropertyCard key={index} {...img} />
        ))}
      </div>
    </section>
  );
}
