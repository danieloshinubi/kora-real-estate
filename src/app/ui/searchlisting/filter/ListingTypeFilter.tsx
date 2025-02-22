import React, { useState } from "react";

const listingTypes = [
  "House",
  "Villa",
  "Apartment",
  "Condo",
  "Beach House",
  "Pent House",
  "Duplex",
];

const ListingTypeFilter: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const handleSelect = (type: string) => {
    setSelectedType(type === selectedType ? null : type);
  };

  return (
    <div className="space-y-3">
      {/* Title */}
      <h3 className="font-semibold text-lg">Listing Type</h3>

      {/* Listing Type Buttons */}
      <div className="grid grid-cols-2 gap-3">
        {listingTypes.map((type) => (
          <button
            key={type}
            className={`px-4 py-2 rounded-full text-white text-sm font-medium transition ${
              selectedType === type ? "bg-green-900" : "bg-green-800"
            } hover:bg-green-900`}
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
