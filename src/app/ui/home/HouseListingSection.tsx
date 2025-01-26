import React from "react";
import cards from "@/app/utils/PropertyListings";
import PropertyCard from "./PropertyCard";

export default function HouseListingSection() {
  return (
    <div className="py-24 lg:px-12 pt-64 sm:pt-24">
      <div>
        <h1 className='text-[24px] font-semibold'>Discover Recent Listings</h1>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur.</p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6'>
        {cards.map((card) => (
          <PropertyCard
            key={card.title}
            image={card.image}
            category={card.category}
            rating={card.rating}
            title={card.title}
            location={card.location}
            bedrooms={card.bedrooms}
            bathrooms={card.bathrooms}
            price={card.price}
          />
        ))}
      </div>
    </div>
  );
}
