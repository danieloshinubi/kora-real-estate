import React, { useState } from "react";
import { inknutAntiqua } from "../../fonts";

const listingTypes = [
  "House",
  "Residential",
  "Apartment",
  "Condo",
  "Pent House",
  "Duplex",
];

interface Props {
  selectedType: string | null;
  setSelectedType: (listingType: string | null) => void;
}

const ListingTypeFilter: React.FC<Props> = ({
  selectedType,
  setSelectedType,
}) => {
  const handleSelect = (type: string) => {
    setSelectedType(type === selectedType ? null : type);
  };

  return (
    <div className="space-y-6 border-b pb-8">
      {/* Title */}
      <h3 className={`${inknutAntiqua.className} text-[14px]`}>Listing Type</h3>

      {/* Listing Type Buttons */}
      <div className="grid grid-cols-2 gap-3">
        {listingTypes.map((type, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              selectedType === type
                ? "bg-[#2F4F4F]  text-white"
                : " text-[#2F4F4F] border border-[#2F4F4F]"
            } hover:bg-[#2F4F4F]  hover:text-white`}
            onClick={() => handleSelect(type)}
          >
            {type}
          </button>
        ))}
      </div>

      {/* View More Link */}
      <button className="text-orange-600 text-sm font-medium hover:underline">
        View more
      </button>
    </div>
  );
};

export default ListingTypeFilter;
