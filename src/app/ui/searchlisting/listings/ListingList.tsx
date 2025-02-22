// components/Listings/ListingList.tsx

import React from 'react';
import { Listing } from '../listingType';
import ListingCard from './ListingCard';

interface ListingListProps {
  listings: Listing[];
}

const ListingList: React.FC<ListingListProps> = ({ listings }) => {
  return (
    <div className="space-y-4 overflow-y-auto h-[600px]">
      {listings.map((listing) => (
        <ListingCard key={listing.id} listing={listing} />
      ))}
    </div>
  );
};

export default ListingList;
