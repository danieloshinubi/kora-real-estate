import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { cabin, inknutAntiqua } from "../../fonts";
import PriceRangeFilter from "./PriceRangeFilter";
import Amenities from "./AmenityFilter";
import ListingTypeFilter from "./ListingTypeFilter";
import RatingsFilter from "./RatingFilter";
import { Listing } from "../listingType";
import { HiOutlineXMark } from "react-icons/hi2";
import StateFilter from "./StateFilter";
import FilterPanelSkeleton from "./FilterPanelSkeleton";

interface Props {
  listings: Listing[];
  setFilteredListings: (filteredListings: Listing[]) => void;
}

const FilterPanelContent: React.FC<Props> = ({
  listings,
  setFilteredListings,
}) => {
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
  const [selectedState, setSelectedState] = useState<string | null>(null);

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

  // async function getStateFromCoordinates(lat: number, lon: number, retries = 3) {
  //   try {
  //     const response = await fetch(`/api/get-location?lat=${lat}&lon=${lon}`);
  //     const data = await response.json();
  
  //     return data.address?.state || "Unknown";
  //   } catch (error) {
  //     console.error("Error fetching address:", error);
  //     if (retries > 0) {
  //       console.log(`Retrying... (${3 - retries + 1})`);
  //       await new Promise((resolve) => setTimeout(resolve, 1000));
  //       return getStateFromCoordinates(lat, lon, retries - 1);
  //     }
  //     return "Unknown";
  //   }
  // }

  const applyFilters = async () => {
    const filtered = await Promise.all(
      listings.map(async (item) => {
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
  
        // Get state based on coordinates
        // const state = await getStateFromCoordinates(item.location.latitude, item.location.longitude);
  
        // const matchesLocation =
        //   selectedState === null || state === selectedState + " State";
  
        return (
          matchesPrice &&
          matchesAmenities &&
          matchesRating &&
          matchesType
          // && matchesLocation
        );
      })
    );
  
    // Filter only items that match all criteria
    const finalFiltered = listings.filter((item, index) => filtered[index]);
  
    setFilteredListings(finalFiltered);
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
      <div className='flex items-center justify-between'>
        <h2 className={`${inknutAntiqua.className}`}>Filters</h2>
        <div
          onClick={clearFilters}
          className='flex items-center cursor-pointer text-red-500'
        >
          <HiOutlineXMark size={20} style={{ paddingRight: "5px" }} />
          Clear filter
        </div>
      </div>

      <StateFilter
        selectedState={selectedState}
        setSelectedState={setSelectedState}
      />

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
      <button onClick={applyFilters} className='btn btn-primary w-full'>
        Apply Filters
      </button>
    </div>
  );
};

const FilterPanel: React.FC<Props> = ({ listings, setFilteredListings }) => {
  return (
    <Suspense fallback={<FilterPanelSkeleton />}>
      <FilterPanelContent
        listings={listings}
        setFilteredListings={setFilteredListings}
      />
    </Suspense>
  );
};

export default FilterPanel;