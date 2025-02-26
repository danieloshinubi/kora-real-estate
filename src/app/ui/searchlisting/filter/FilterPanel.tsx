import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { cabin, inknutAntiqua } from "../../fonts";
import PriceRangeFilter from "./PriceRangeFilter";
import Amenities from "./AmenityFilter";
import ListingTypeFilter from "./ListingTypeFilter";
import RatingsFilter from "./RatingFilter";
import { Listing } from "../listingType";
import { HiOutlineXMark } from "react-icons/hi2";

interface Props {
  listings: Listing[];
  setFilteredListings: (filteredListings: Listing[]) => void;
}

const FilterPanel: React.FC<Props> = ({ listings, setFilteredListings }) => {
  const searchParams = useSearchParams();

  // Extract price parameter from URL
  const priceParams = searchParams?.get("price") || "₦0 - ₦1,000,000";
  const listingTypeParams = searchParams?.get("listingType") || "";
  const locationParams = searchParams?.get("location") || "";

  // Function to convert price string to number range
  const parsePriceRange = (price: string): [number, number] => {
    const trimmedPrice = price.trim().toLowerCase(); // Normalize the string

    if (trimmedPrice.includes("below")) {
      return [0, 50000];
    } else if (trimmedPrice.includes("above")) {
      return [500000, 10000000]; // Adjust upper limit as needed
    }

    const cleanedPrices = price
      .replace(/₦/g, "") // Remove "₦" symbol
      .split("-") // Split into min and max
      .map((p) => Number(p.trim().replace(/,/g, ""))); // Remove commas and convert to number

    return cleanedPrices.length === 2
      ? [cleanedPrices[0], cleanedPrices[1]]
      : [0, 1000000]; // Default fallback
  };

  const defaultPriceRange = parsePriceRange(priceParams);

  // State for filters
  const [priceRange, setPriceRange] =
    useState<[number, number]>(defaultPriceRange);

  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [selectedRatings, setSelectedRatings] = useState<number | null>(null);
  const [selectedType, setSelectedType] = useState<string | null>(
    listingTypeParams ? listingTypeParams : null
  );

  // Ensure state updates if URL changes
  useEffect(() => {
    setPriceRange(parsePriceRange(priceParams));
  }, [priceParams]);

  const amenitiesList = [
    "Bed",
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

  const applyFilters = () => {
    const filtered = listings.filter((item) => {
      const matchesPrice =
        item.price >= priceRange[0] && item.price <= priceRange[1];

      const matchesAmenities =
        selectedAmenities.length === 0 ||
        selectedAmenities.every((amenity) =>
          item.amenities?.some((a) => a.name === amenity)
        );

      const matchesRating =
        selectedRatings === null || item.rating === selectedRatings;

      const matchesType =
        selectedType === null || item.propertyType.name === selectedType;

      return matchesPrice && matchesAmenities && matchesRating && matchesType;
    });

    setFilteredListings(filtered);
  };

  const clearFilters = () => {
    setPriceRange([0, 1000000]);
    setSelectedAmenities([]);
    setSelectedRatings(null);
    setSelectedType(null);
    setFilteredListings(listings);
  };

  useEffect(() => {
    setPriceRange(parsePriceRange(priceParams));
  }, [priceParams]);

  useEffect(() => {
    applyFilters();
  }, [locationParams, listingTypeParams, priceParams]);

  return (
    <div
      className={`${cabin.className} space-y-6 bg-white rounded-lg text-[14px]`}
    >
      <div className="flex items-center justify-between">
        <h2 className={`${inknutAntiqua.className}`}>Filters</h2>
        <div
          onClick={clearFilters}
          className="flex items-center cursor-pointer text-red-500"
        >
          <HiOutlineXMark size={20} style={{ paddingRight: "5px" }} />
          Clear filter
        </div>
      </div>

      {/* Price Range */}
      <PriceRangeFilter priceRange={priceRange} setPriceRange={setPriceRange} />

      {/* Amenities */}
      <Amenities
        selectedAmenities={selectedAmenities}
        handleAmenityChange={handleAmenityChange}
        amenitiesList={amenitiesList}
      />

      {/* Listing Types */}
      <ListingTypeFilter
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />

      {/* Ratings */}
      <RatingsFilter
        selectedRating={selectedRatings}
        setSelectedRating={setSelectedRatings}
      />

      {/* Apply Filters Button */}
      <button onClick={applyFilters} className="btn btn-primary w-full">
        Apply Filters
      </button>
    </div>
  );
};

export default FilterPanel;
