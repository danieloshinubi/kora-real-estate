// Favorites.tsx (Main Component)
"use client";
import React from "react";
import CollectionCard from "./CollectionCard";
import NewCollectionButton from "./NewCollectionButton";
import { FaRegHeart } from "react-icons/fa6";
import { cabin } from "../fonts";

const collections = [
  {
    id: 1,
    title: "Houses Collection",
    savedListings: 10,
    images: ["/dubai.jpeg", "/high-rise.jpeg", "/living-room2.jpeg", "/living-room.jpeg"],
  },
  {
    id: 2,
    title: "Villas Collection",
    savedListings: 7,
    images: ["/condo.jpg", "/duplex.jpg", "/estate.jpg", "/villa.jpg"],
  },
  {
    id: 3,
    title: "Apartment",
    savedListings: 9,
    images: [
      "/apartment.jpg",
      "/bed.jpeg",
      "/skyscraper.jpg",
      "/street.jpg",
    ],
  },
];

const FavouritesSection = () => {
  return (
    <section className='min-h-[600px] p-6 mt-32'>
      <div className='lg:flex space-y-6 justify-between items-center'>
        <div>
          <h2 className='text-2xl font-semibold text-red-900 flex items-center gap-2'>
            <FaRegHeart />
            Favourites
          </h2>
          <p className={`${cabin.className} text-gray-600 text-sm pl-8`}>
            View all your favorite listings in one place. These can only be
            visible by you
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
