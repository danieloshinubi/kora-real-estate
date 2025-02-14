// Favorites.tsx (Main Component)
"use client";
import React from "react";
import CollectionCard from "./CollectionCard";
import NewCollectionButton from "./NewCollectionButton";

const collections = [
  {
    id: 1,
    title: "Houses Collection",
    savedListings: 10,
    images: ["/condo.jpg", "/condo.jpg", "/condo.jpg", "/condo.jpg"],
  },
  {
    id: 2,
    title: "Villas Collection",
    savedListings: 7,
    images: ["/villa.jpg", "/villa.jpg", "/villa.jpg", "/villa.jpg"],
  },
  {
    id: 3,
    title: "Apartment",
    savedListings: 9,
    images: [
      "/apartment.jpg",
      "/apartment.jpg",
      "/apartment.jpg",
      "/apartment.jpg",
    ],
  },
];

const FavouritesSection = () => {
  return (
    <section className='p-6 mt-32'>
      <div className='flex justify-between items-center'>
        <div>
          <h2 className='text-2xl font-semibold text-red-900 flex items-center gap-2'>
            <span>&hearts;</span> Favorites
          </h2>
          <p className='text-gray-600 text-sm'>
            View all your favorite listings in one place.
          </p>
        </div>
        <NewCollectionButton />
      </div>

      <div className='mt-6 grid md:grid-cols-3 gap-6'>
        {collections.map((collection) => (
          <CollectionCard key={collection.id} {...collection} />
        ))}
      </div>
    </section>
  );
};

export default FavouritesSection;
