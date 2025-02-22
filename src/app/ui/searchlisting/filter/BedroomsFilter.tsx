import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

type BedroomFilterProps = {
  bedrooms: number;
  setBedrooms: React.Dispatch<React.SetStateAction<number>>;
  bathrooms: number;
  setBathrooms: React.Dispatch<React.SetStateAction<number>>;
};

export default function BedroomsFilter({
  bedrooms,
  setBedrooms,
  setBathrooms,
  bathrooms,
}: BedroomFilterProps) {
  return (
    <div className='flex flex-col space-y-2 pb-8 border-b'>
      <div className='flex items-center justify-between'>
        <span className='font-medium'>Number of Bedrooms</span>
        <div className='flex items-center space-x-2'>
          <button
            className='btn btn-xs text-[10px] bg-[#D2691E] btn-circle rounded-full p-1 text-white '
            onClick={() => setBedrooms((prev) => Math.max(1, prev - 1))}
          >
            <FaMinus />
          </button>
          <span className='text-lg font-semibold'>{bedrooms}</span>
          <button
            className='btn btn-xs text-[10px] bg-[#D2691E] btn-circle rounded-full p-1 text-white '
            onClick={() => setBedrooms((prev) => prev + 1)}
          >
            <FaPlus />
          </button>
        </div>
      </div>

      <div className='flex items-center justify-between'>
        <span className='font-medium'>Number of Bathrooms</span>
        <div className='flex items-center space-x-2'>
          <button
            className='btn btn-xs text-[10px] bg-[#D2691E] btn-circle rounded-full p-1 text-white '
            onClick={() => setBathrooms((prev) => Math.max(1, prev - 1))}
          >
            <FaMinus />
          </button>
          <span className='text-lg font-semibold'>{bathrooms}</span>
          <button
            className='btn btn-xs text-[10px] bg-[#D2691E] btn-circle rounded-full p-1 text-white '
            onClick={() => setBathrooms((prev) => prev + 1)}
          >
            <FaPlus />
          </button>
        </div>
      </div>
    </div>
  );
}
