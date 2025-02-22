import React, { useState } from "react";
import FilterPanel from "./filter/FilterPanel";
import ListingList from "./listings/ListingList";
import { Listing } from "./listingType";
import SortDropdown from "./listings/SortDropDown";
import { cabin } from "../fonts";
import dynamic from "next/dynamic";

const SearchMapView = dynamic(() => import("./SearchMapView"), { ssr: false });

const ListingFinder: React.FC = ({}) => {
  const onSortChange = (sortOption: string) => {
    console.log(sortOption);
  };
  const [filteredListings, setFilteredListings] = useState<Listing[]>(listings);

  return (
    <div className="flex w-full mt-16">
      {/* Left Filter Panel */}
      <div className="w-[20%]">
        <FilterPanel
          listings={listings}
          // filteredListings={filteredListings}
          setFilteredListings={setFilteredListings}
        />
      </div>

      {/* Main Content */}
      <div className="w-[55%] pl-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-[18px]">Showing results</h2>
            <p className={`${cabin.className} text-sm`}>
              300+ listings for “Wedding Location”
            </p>
          </div>

          {/* You can add a SortDropdown here if you like */}
          <SortDropdown onSortChange={onSortChange} />
        </div>
        <ListingList listings={filteredListings} />
      </div>

      {/* Map Section */}
      <div className="w-1/4">
        {/* <SearchMapView listings={listings} size="h-900px" /> */}
      </div>
    </div>
  );
};

const listings: Listing[] = [
  {
    location: {
      longitude: 3.392512,
      latitude: 6.543976,
    },
    _id: "1",
    name: "Four Seasons Hotel",
    description: "It is a big hotel",
    amenities: [
      {
        _id: "6799521254953fa2f52b75a4",
        name: "Bed",
        icon: {
          _id: "6799521254953fa2f52b75a2",
          fileUrl:
            "https://res.cloudinary.com/dvv4wwuk1/image/upload/v1738101271/Kora%20Service/AmenityIcon/rahaiputovkupwhjmp5t.png",
        },
      },
    ],
    propertyType: {
      _id: "677989a8d9f94ec82502563b",
      name: "Apartment",
    },
    price: 100000,
    listingImg: [
      {
        _id: "67996ef2b7e8baf6d1a46d9d",
        fileUrl:
          "https://res.cloudinary.com/dvv4wwuk1/image/upload/v1738108663/Kora%20Service/Listing/koxsdxbpu4cj7hmc6fso.jpg",
      },
      {
        _id: "67996ef4b7e8baf6d1a46d9f",
        fileUrl:
          "https://res.cloudinary.com/dvv4wwuk1/image/upload/v1738108665/Kora%20Service/Listing/xdp1hagnprvsvk6nopuc.jpg",
      },
    ],
    rating: 0,
  },
  {
    location: {
      longitude: 3.392512,
      latitude: 6.543976,
    },
    _id: "2",
    name: "Four Seasons Hotel",
    description: "It is a big hotel",
    amenities: [
      {
        _id: "6799521254953fa2f52b75a4",
        name: "Bed",
        icon: {
          _id: "6799521254953fa2f52b75a2",
          fileUrl:
            "https://res.cloudinary.com/dvv4wwuk1/image/upload/v1738101271/Kora%20Service/AmenityIcon/rahaiputovkupwhjmp5t.png",
        },
      },
    ],
    propertyType: {
      _id: "677989a8d9f94ec82502563b",
      name: "Residential",
    },
    price: 50000,
    listingImg: [
      {
        _id: "67996ef2b7e8baf6d1a46d9d",
        fileUrl:
          "https://res.cloudinary.com/dvv4wwuk1/image/upload/v1738108663/Kora%20Service/Listing/koxsdxbpu4cj7hmc6fso.jpg",
      },
      {
        _id: "67996ef4b7e8baf6d1a46d9f",
        fileUrl:
          "https://res.cloudinary.com/dvv4wwuk1/image/upload/v1738108665/Kora%20Service/Listing/xdp1hagnprvsvk6nopuc.jpg",
      },
    ],
    rating: 0,
  },
];

export default ListingFinder;
