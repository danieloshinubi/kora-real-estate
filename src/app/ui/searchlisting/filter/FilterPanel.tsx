"use client";
import React, { useState } from "react";

import { cabin, inknutAntiqua } from "../../fonts";
import PriceRangeFilter from "./PriceRangeFilter";
import BedroomsFilter from "./BedroomsFilter";

const FilterPanel: React.FC = () => {
  const [bedrooms, setBedrooms] = useState(4);
  const [bathrooms, setBathrooms] = useState(4);
  const [priceRange, setPriceRange] = useState([0, 1000000]);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [selectedRatings, setSelectedRatings] = useState<number | null>(null);

  const amenitiesList = [
    "Parking Space",
    "Air Conditioning",
    "Swimming Pool",
    "Wifi & Phone Services",
    "Guest House",
    "Pet Friendly",
  ];

  const handleAmenityChange = (amenity: string) => {
    setSelectedAmenities((prev) =>
      prev.includes(amenity)
        ? prev.filter((a) => a !== amenity)
        : [...prev, amenity]
    );
  };

  return (
    <div
      className={`${cabin.className} space-y-6 bg-white rounded-lg text-[14px]`}
    >
      <h2 className={`${inknutAntiqua.className}`}>Filters</h2>

      {/* Bedrooms & Bathrooms */}
      <BedroomsFilter
        bedrooms={bedrooms}
        setBedrooms={setBedrooms}
        bathrooms={bathrooms}
        setBathrooms={setBathrooms}
      />

      {/* Price Range */}
      <PriceRangeFilter priceRange={priceRange} setPriceRange={setPriceRange} />

      {/* Amenities */}
      <div>
        <span className='font-medium'>Amenities</span>
        <div className='grid grid-cols-2 gap-2'>
          {amenitiesList.map((amenity) => (
            <label key={amenity} className='flex items-center space-x-2'>
              <input
                type='checkbox'
                className='checkbox checkbox-sm checkbox-primary'
                checked={selectedAmenities.includes(amenity)}
                onChange={() => handleAmenityChange(amenity)}
              />
              <span>{amenity}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Ratings */}
      <div>
        <span className='font-medium'>Ratings</span>
        <div className='flex flex-col space-y-1'>
          {[5, 4, 3, 2, 1].map((rating) => (
            <label key={rating} className='flex items-center space-x-2'>
              <input
                type='radio'
                name='rating'
                className='radio radio-sm radio-primary'
                checked={selectedRatings === rating}
                onChange={() => setSelectedRatings(rating)}
              />
              <span className='flex items-center'>
                {"★".repeat(rating)}
                {"☆".repeat(5 - rating)}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Apply Filters Button */}
      <button className='btn btn-primary w-full'>Apply Filters</button>
    </div>
  );
};

export default FilterPanel;
