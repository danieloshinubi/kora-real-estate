// Favorites.tsx (Main Component)
"use client";
import React from "react";
import CollectionCard from "./CollectionCard";
import NewCollectionButton from "./NewCollectionButton";
import { FaRegHeart } from "react-icons/fa6";
import { cabin } from "../fonts";
import { collections } from "@/app/utils/FavoriteCollection";



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

      <div className='mt-16 grid md:grid-cols-3 gap-6'>
        {collections.map((collection) => (
          <CollectionCard key={collection.id} {...collection} />
        ))}
      </div>
    </section>
  );
};

export default FavouritesSection;
