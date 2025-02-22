"use client";
import React, { useState } from "react";

import { cabin, inknutAntiqua } from "../../fonts";
import PriceRangeFilter from "./PriceRangeFilter";
import BedroomsFilter from "./BedroomsFilter";
import Amenities from "./AmenityFilter";
import ListingTypeFilter from "./ListingTypeFilter";
import RatingsFilter from "./RatingFilter";

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
      <Amenities
        selectedAmenities={selectedAmenities}
        handleAmenityChange={handleAmenityChange}
        amenitiesList={amenitiesList}
      />
      {/* Listing Types*/}
      <ListingTypeFilter />

      {/* Ratings */}
      <RatingsFilter
        selectedRating={selectedRatings}
        setSelectedRating={setSelectedRatings}
      />

      {/* Apply Filters Button */}
      <button className='btn btn-primary w-full'>Apply Filters</button>
    </div>
  );
};

export default FilterPanel;
