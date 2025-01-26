import React, { useState } from "react";
import cards from "@/app/utils/PropertyListings";
import PropertyCard from "./PropertyCard";
import { cabin } from "../fonts";
import { MdArrowDropDown } from "react-icons/md";

export default function HouseListingSection() {
  const [visibleCount, setVisibleCount] = useState(8);

  const handleSeeMore = () => {
    setVisibleCount((prevCount) => prevCount + 8);
  };
  const handleSeeLess = () => {
    setVisibleCount(8);
  };

  return (
    <div className="py-24 lg:px-12 pt-64 sm:pt-24">
      <div>
        <h1 className='text-[18px] sm:text-[20px] lg:text-[24px] font-semibold'>Discover Recent Listings</h1>
        <p className={`text-gray-600 ${cabin.className}`}>Lorem ipsum dolor sit amet consectetur.</p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6'>
        {cards.slice(0, visibleCount).map((card) => (
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
      {visibleCount < cards.length ? (
        <div className="text-center mt-6 w-full flex justify-center items-center">
          <button
            onClick={handleSeeMore}
            className=" text-orange-500"
          >
            Show More Options
            
          </button><MdArrowDropDown className="text-orange-500 text-[2xl]"/>
        </div>
      ):(
        <div className="text-center mt-6 flex justify-center items-center">
          <button
            onClick={handleSeeLess}
            className=" text-orange-500"
          >
            Show Lesser Options
            
          </button><MdArrowDropDown className="text-orange-500 text-[2xl]"/>
        </div>
      )}
    </div>
  );
}
