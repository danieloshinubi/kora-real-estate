// components/Listings/ListingList.tsx

import React from 'react';
import { Listing } from '../listingType';
import ListingCard from './ListingCard';

interface ListingListProps {
  listings: Listing[];
}

const ListingList: React.FC<ListingListProps> = ({ listings }) => {
  return (
    <div className="flex flex-col gap-y-4 space-y-4 overflow-y-auto h-[1100px]">
      {listings.map((listing) => (
        <ListingCard key={listing._id} listing={listing} />
      ))}
    </div>
  );
};

export default ListingList;
