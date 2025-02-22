import React from "react";
import { Check } from "lucide-react"; // For Custom Check Icon
import { cabin, inknutAntiqua } from "../../fonts";

type AmenitiesProps = {
  selectedAmenities: string[];
  handleAmenityChange: (amenity: string) => void;
  amenitiesList: string[];
};

const Amenities: React.FC<AmenitiesProps> = ({
  selectedAmenities,
  handleAmenityChange,
  amenitiesList,
}) => {
  return (
    <div className={`space-y-3 ${cabin.className} pb-8 border-b`}>
      {/* Title */}
      <h3 className={`${inknutAntiqua.className} text-[12px]`}>Amenities</h3>

      {/* Amenities List */}
      <div className='grid grid-cols-1 gap-2'>
        {amenitiesList.map((amenity) => (
          <label
            key={amenity}
            className='flex items-center space-x-3 cursor-pointer'
          >
            {/* Custom Checkbox */}
            <div
              className={`w-[18px] h-[18px] flex items-center justify-center rounded-md ${
                selectedAmenities.includes(amenity)
                  ? "bg-orange-600 text-white"
                  : "bg-gray-200 text-gray-400"
              }`}
              onClick={() => handleAmenityChange(amenity)}
            >
              {selectedAmenities.includes(amenity) && <Check size={16} />}
            </div>
            <span className='text-gray-600'>{amenity}</span>
          </label>
        ))}
      </div>

      {/* View More Link */}
      <button className='text-orange-600 text-sm font-medium hover:underline'>
        View more
      </button>
    </div>
  );
};

export default Amenities;
