import React, { useState } from "react";
import FilterPanel from "./filter/FilterPanel";
import { Listing } from "./listingType";
import SortDropdown from "./listings/SortDropDown";
import { cabin } from "../fonts";
import { listings } from "./PropertyList";
import ListingCardSkeleton from "./listings/ListingCardSkeleton";

const ListingFinderSkeleton: React.FC = ({}) => {
  const onSortChange = (sortOption: string) => {
    console.log(sortOption);
  };

  const [filteredListings, setFilteredListings] = useState<Listing[]>(listings);

  return (
    <div className='flex w-full mt-16'>
      {/* Left Filter Panel */}
      <div className='w-[20%]'>
        <FilterPanel
          listings={listings}
          // filteredListings={filteredListings}
          setFilteredListings={setFilteredListings}
        />
      </div>

      {/* Main Content */}
      <div className='w-[55%] pl-6'>
        <div className='flex items-center justify-between mb-4'>
          <div>
            <h2 className='text-[18px]'>Showing results</h2>
            <p className={`${cabin.className} text-sm`}>
              {`${listings.length + 1}+ listings for “Wedding Location`}
            </p>
          </div>

          {/* You can add a SortDropdown here if you like */}
          <SortDropdown onSortChange={onSortChange} />
        </div>
        <div className='flex flex-col gap-y-4 space-y-4 overflow-y-auto h-[1100px]'>
          {filteredListings.slice(0,5).map((listing) => (
            <ListingCardSkeleton key={listing._id} />
          ))}
        </div>
      </div>

      {/* Map Section */}
      <div className='w-1/4'>
        {/* <SearchMapView listings={listings} size="h-900px" /> */}
      </div>
    </div>
  );
};

export default ListingFinderSkeleton;
