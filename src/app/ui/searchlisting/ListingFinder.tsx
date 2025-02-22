import React from "react";
import FilterPanel from "./filter/FilterPanel";
import ListingList from "./listings/ListingList";
import MapView from "../map/MapView";
import { Listing } from "./listingType";

const listings: Listing[] = [
  {
    id: "1",
    title: "Relaxing retreat at the heart of Yaba City",
    description: "Lorem ipsum dolor sit amet consectetur. Tempus semper suspendisse semper nunc blandit at ac luctus.",
    image: "/house3.jpg",
    price: 96000,
    currency: "NGN",
    category: "House",
    rating: 4.5,
    location: "Yaba City",
    latitude: 6.5244,
    longitude: 3.3792,
    bathrooms: 2,
    bedrooms: 3,
  },
  {
    id: "1",
    title: "Relaxing retreat at the heart of Yaba City",
    description: "Lorem ipsum dolor sit amet consectetur. Tempus semper suspendisse semper nunc blandit at ac luctus.",
    image: "/house3.jpg",
    price: 96000,
    currency: "NGN",
    category: "House",
    rating: 4.5,
    location: "Yaba City",
    latitude: 6.5244,
    longitude: 3.3792,
    bathrooms: 2,
    bedrooms: 3,
  },
  {
    id: "1",
    title: "Relaxing retreat at the heart of Yaba City",
    description: "Lorem ipsum dolor sit amet consectetur. Tempus semper suspendisse semper nunc blandit at ac luctus.",
    image: "/house3.jpg",
    price: 96000,
    currency: "NGN",
    category: "House",
    rating: 4.5,
    location: "Yaba City",
    latitude: 6.5244,
    longitude: 3.3792,
    bathrooms: 2,
    bedrooms: 3,
  },
  {
    id: "1",
    title: "Relaxing retreat at the heart of Yaba City",
    description: "Lorem ipsum dolor sit amet consectetur. Tempus semper suspendisse semper nunc blandit at ac luctus.",
    image: "/house3.jpg",
    price: 96000,
    currency: "NGN",
    category: "House",
    rating: 4.5,
    location: "Yaba City",
    latitude: 6.5244,
    longitude: 3.3792,
    bathrooms: 2,
    bedrooms: 3,
  },
  {
    id: "1",
    title: "Relaxing retreat at the heart of Yaba City",
    description: "Lorem ipsum dolor sit amet consectetur. Tempus semper suspendisse semper nunc blandit at ac luctus.",
    image: "/house3.jpg",
    price: 96000,
    currency: "NGN",
    category: "House",
    rating: 4.5,
    location: "Yaba City",
    latitude: 6.5244,
    longitude: 3.3792,
    bathrooms: 2,
    bedrooms: 3,
  },
  {
    id: "1",
    title: "Relaxing retreat at the heart of Yaba City",
    description: "Lorem ipsum dolor sit amet consectetur. Tempus semper suspendisse semper nunc blandit at ac luctus.",
    image: "/house3.jpg",
    price: 96000,
    currency: "NGN",
    category: "House",
    rating: 4.5,
    location: "Yaba City",
    latitude: 6.5244,
    longitude: 3.3792,
    bathrooms: 2,
    bedrooms: 3,
  },
];

export default function ListingFinder() {
  return (
    <div className='flex w-full mt-16'>
      {/* Left Filter Panel */}
      <div className='w-[20%] border-r border-gray-200'>
        <FilterPanel />
      </div>

      {/* Main Content */}
      <div className='w-[55%]'>
        <div className='flex items-center justify-between mb-4'>
          <h2 className='text-xl font-semibold'>Showing results</h2>
          {/* You can add a SortDropdown here if you like */}
        </div>
        <ListingList listings={listings} />
      </div>

      {/* Map Section */}
      <div className='w-1/4'>
        <MapView listings={listings} />
      </div>
    </div>
  );
}
