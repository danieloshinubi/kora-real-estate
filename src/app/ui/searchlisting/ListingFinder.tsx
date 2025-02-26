import React, { useState } from "react";
import FilterPanel from "./filter/FilterPanel";
import ListingList from "./listings/ListingList";
import { Listing } from "./listingType";
import SortDropdown from "./listings/SortDropDown";
import { cabin } from "../fonts";
import { useGetListingsQuery } from "@/app/utils/services/api";
import ListingFinderSkeleton from "./ListingFinderSkeleton";
import Image from "next/image";
// import dynamic from "next/dynamic";
// import { listings } from "./PropertyList";

// const SearchMapView = dynamic(() => import("./SearchMapView"), { ssr: false });

const ListingFinder: React.FC = ({}) => {
  const onSortChange = (sortOption: string) => {
    console.log(sortOption);
  };
  const { data: listings = [], isLoading, error } = useGetListingsQuery();

  const [filteredListings, setFilteredListings] = useState<Listing[]>(listings);

  if (isLoading) return <ListingFinderSkeleton />;

  if (error) return <ListingFinderSkeleton />;

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
              {`${filteredListings.length}+ listings for “Wedding Location`}
            </p>
          </div>

          {/* You can add a SortDropdown here if you like */}
          <SortDropdown onSortChange={onSortChange} />
        </div>
        {filteredListings.length === 0 ? (
          <div className='flex w-full items-center justify-center'>
            <Image
              src={"/no-listing@2x.png"}
              width={458}
              height={520}
              alt='no-result'
            />
          </div>
        ) : (
          <ListingList listings={filteredListings} />
        )}
      </div>

      {/* Map Section */}
      <div className='w-1/4'>
        {/* <SearchMapView listings={listings} size="h-900px" /> */}
      </div>
    </div>
  );
};

export default ListingFinder;
