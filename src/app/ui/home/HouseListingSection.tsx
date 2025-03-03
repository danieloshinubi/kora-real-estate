import React, { useState } from "react";
import PropertyCard from "./PropertyCard";
import { cabin } from "../fonts";
import { MdArrowDownward, MdArrowUpward } from "react-icons/md";
import { useGetListingsQuery } from "@/app/utils/services/api";
import { Listing } from "@/types/listingtype";
import PropertyCardSkeleton from "./skeleton/PropertyCardSkeleton";

// Header component remains the same
const Header = () => (
  <div>
    <h1 className='text-[18px] sm:text-[20px] lg:text-[24px] font-semibold'>
      Discover Recent Listings
    </h1>
    <p className={`text-gray-600 ${cabin.className}`}>
      Find your next home or investment opportunity among our handpicked,
      up-to-date properties.
    </p>
  </div>
);

// Updated PropertyGrid interface and component
interface PropertyGridProps {
  visibleCount: number;
  listings: Listing[]; // Use proper type from your API response
}

const PropertyGrid: React.FC<PropertyGridProps> = ({
  visibleCount,
  listings,
}) => (
  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6'>
    {listings.slice(0, visibleCount).map((listing) => (
      <PropertyCard
        key={listing._id}
        _id={listing._id}
        image={listing.listingImg[0].fileUrl}
        propertyType={listing.propertyType.name}
        rating={5.0}
        title={listing.name}
        location={`${listing.location?.latitude}, ${listing.location?.longitude}`}
        bedrooms={3} // Update with actual data from API
        bathrooms={2} // Update with actual data from API
        price={listing.price}
      />
    ))}
  </div>
);

// Updated ShowMoreButton interface
interface ShowMoreButtonProps {
  visibleCount: number;
  totalListings: number;
  handleSeeMore: () => void;
  handleSeeLess: () => void;
}

const ShowMoreButton: React.FC<ShowMoreButtonProps> = ({
  visibleCount,
  totalListings,
  handleSeeMore,
  handleSeeLess,
}) =>
  visibleCount < totalListings ? (
    <div className='text-center mt-6 w-full flex justify-center items-center'>
      <button onClick={handleSeeMore} className='text-orange-500'>
        Show More Options
      </button>
      <MdArrowDownward className='text-orange-500 text-[2xl]' />
    </div>
  ) : (
    totalListings > 8 && (
      <div className='text-center mt-6 flex justify-center items-center'>
        <button onClick={handleSeeLess} className='text-orange-500'>
          Show Lesser Options
        </button>
        <MdArrowUpward className='text-orange-500 text-[2xl]' />
      </div>
    )
  );

export default function HouseListingSection() {
  const [visibleCount, setVisibleCount] = useState<number>(8);
  const { data: listings = [], isLoading, error } = useGetListingsQuery();

  const handleSeeMore = () => {
    setVisibleCount((prevCount) => prevCount + 8);
  };

  const handleSeeLess = () => {
    setVisibleCount(8);
  };

  if (isLoading)
    return (
      <div className='py-24 pt-64 sm:pt-24'>
        <Header />
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6'>
          {[...Array(8)].map((_, index) => (
            <PropertyCardSkeleton key={index} />
          ))}
        </div>
      </div>
    );
  if (error)
    return (
      <div className='py-24 pt-64 sm:pt-24'>
        <Header />
        <p className='text-red-500'>
          An error occurred while fetching the listings. Check your network and Please try again later.
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6'>
          {[...Array(8)].map((_, index) => (
            <PropertyCardSkeleton key={index} />
          ))}
        </div>
      </div>
    );

  return (
    <div className='py-24 pt-64 sm:pt-24'>
      <Header />
      <PropertyGrid visibleCount={visibleCount} listings={listings} />
      <ShowMoreButton
        visibleCount={visibleCount}
        totalListings={listings.length}
        handleSeeMore={handleSeeMore}
        handleSeeLess={handleSeeLess}
      />
    </div>
  );
}
