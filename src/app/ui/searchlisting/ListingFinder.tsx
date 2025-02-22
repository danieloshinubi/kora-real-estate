import React from "react";
import FilterPanel from "./filter/FilterPanel";
import ListingList from "./listings/ListingList";
import { Listing } from "./listingType";
import SortDropdown from "./listings/SortDropDown";
import { cabin } from "../fonts";
import SearchMapView from "./SearchMapView";

const listings: Listing[] = [
  {
    id: "1",
    title: "Relaxing retreat at the heart of Yaba City",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tempus semper suspendisse semper nunc blandit at ac luctus.",
    image: "/house3.jpg",
    price: 96000,
    currency: "NGN",
    category: "House",
    rating: 4.5,
    location: "Yaba City",
    latitude: 7.7332, 
    longitude: 8.5333,
    bathrooms: 2,
    bedrooms: 3,
  },
  {
    id: "1",
    title: "Relaxing retreat at the heart of Yaba City",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tempus semper suspendisse semper nunc blandit at ac luctus.",
    image: "/house3.jpg",
    price: 96000,
    currency: "NGN",
    category: "House",
    rating: 4.5,
    location: "Yaba City",
    latitude: 8.3830,
    longitude: 8.5167,
    bathrooms: 2,
    bedrooms: 3,
  },
  {
    id: "1",
    title: "Relaxing retreat at the heart of Yaba City",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tempus semper suspendisse semper nunc blandit at ac luctus.",
    image: "/house3.jpg",
    price: 96000,
    currency: "NGN",
    category: "House",
    rating: 4.5,
    location: "Yaba City",
    latitude: 7.1665,
    longitude: 8.1332,
    bathrooms: 2,
    bedrooms: 3,
  },
  {
    id: "1",
    title: "Relaxing retreat at the heart of Yaba City",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tempus semper suspendisse semper nunc blandit at ac luctus.",
    image: "/house3.jpg",
    price: 96000,
    currency: "NGN",
    category: "House",
    rating: 4.5,
    location: "Yaba City",
    latitude: 8.5001,
    longitude: 9.0003,
    bathrooms: 2,
    bedrooms: 3,
  },
  {
    id: "1",
    title: "Relaxing retreat at the heart of Yaba City",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tempus semper suspendisse semper nunc blandit at ac luctus.",
    image: "/house3.jpg",
    price: 96000,
    currency: "NGN",
    category: "House",
    rating: 4.5,
    location: "Yaba City",
    latitude: 8.0334,
    longitude: 8.3666,
    bathrooms: 2,
    bedrooms: 3,
  },
  {
    id: "1",
    title: "Relaxing retreat at the heart of Yaba City",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tempus semper suspendisse semper nunc blandit at ac luctus.",
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
    description:
      "Lorem ipsum dolor sit amet consectetur. Tempus semper suspendisse semper nunc blandit at ac luctus.",
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
    description:
      "Lorem ipsum dolor sit amet consectetur. Tempus semper suspendisse semper nunc blandit at ac luctus.",
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
    description:
      "Lorem ipsum dolor sit amet consectetur. Tempus semper suspendisse semper nunc blandit at ac luctus.",
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
    description:
      "Lorem ipsum dolor sit amet consectetur. Tempus semper suspendisse semper nunc blandit at ac luctus.",
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
    description:
      "Lorem ipsum dolor sit amet consectetur. Tempus semper suspendisse semper nunc blandit at ac luctus.",
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
    description:
      "Lorem ipsum dolor sit amet consectetur. Tempus semper suspendisse semper nunc blandit at ac luctus.",
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
    description:
      "Lorem ipsum dolor sit amet consectetur. Tempus semper suspendisse semper nunc blandit at ac luctus.",
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
    description:
      "Lorem ipsum dolor sit amet consectetur. Tempus semper suspendisse semper nunc blandit at ac luctus.",
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
    description:
      "Lorem ipsum dolor sit amet consectetur. Tempus semper suspendisse semper nunc blandit at ac luctus.",
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
    description:
      "Lorem ipsum dolor sit amet consectetur. Tempus semper suspendisse semper nunc blandit at ac luctus.",
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
    description:
      "Lorem ipsum dolor sit amet consectetur. Tempus semper suspendisse semper nunc blandit at ac luctus.",
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
    description:
      "Lorem ipsum dolor sit amet consectetur. Tempus semper suspendisse semper nunc blandit at ac luctus.",
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
    description:
      "Lorem ipsum dolor sit amet consectetur. Tempus semper suspendisse semper nunc blandit at ac luctus.",
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
    description:
      "Lorem ipsum dolor sit amet consectetur. Tempus semper suspendisse semper nunc blandit at ac luctus.",
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
    description:
      "Lorem ipsum dolor sit amet consectetur. Tempus semper suspendisse semper nunc blandit at ac luctus.",
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
  const onSortChange = (sortOption: string) => {
    console.log(sortOption);
  };
  return (
    <div className='flex w-full mt-16'>
      {/* Left Filter Panel */}
      <div className='w-[20%]'>
        <FilterPanel />
      </div>

      {/* Main Content */}
      <div className='w-[55%] pl-6'>
        <div className='flex items-center justify-between mb-4'>
          <div>
            <h2 className='text-[18px]'>Showing results</h2>
            <p className={`${cabin.className} text-sm`}>
              300+ listings for “Wedding Location”
            </p>
          </div>

          {/* You can add a SortDropdown here if you like */}
          <SortDropdown onSortChange={onSortChange} />
        </div>
        <ListingList listings={listings} />
      </div>

      {/* Map Section */}
      <div className='w-1/4'>
        <SearchMapView listings={listings} size='h-900px' />
      </div>
    </div>
  );
}
