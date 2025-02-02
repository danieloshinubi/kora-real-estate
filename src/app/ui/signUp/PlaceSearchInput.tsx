import { LatLngTuple } from "leaflet";
import React from "react";
import { getCoordinates } from "@/app/utils/geocode";
import { useState } from "react";
import { FaArrowRight, FaCrosshairs } from "react-icons/fa6";

type Props = {
  setCoordinates: (coordinates: LatLngTuple) => void;
};
const PlaceSearchInput = ({ setCoordinates }: Props) => {
  const [location, setLocation] = useState("");
  // const [result, setResult] = useState<{
  //   placeName: string;
  //   coordinates: number[];
  // } | null>(null);

  const handleSearch = async () => {
    try {
      const data = await getCoordinates(location);
      // setResult(data);
      // console.log(data);
      setCoordinates(data.coordinates.reverse() as LatLngTuple);
    } catch (error) {
      console.error("Error fetching coordinates:", error);
    }
  };

  return (
    <div className='p-4 absolute top-20 z-20 w-full'>
      <div className='flex flex-col gap-1'>
        <div className='flex border-[#D2691E] border-[1px] p-4 bg-white items-center rounded-[10px]'>
          <FaCrosshairs className='text-[20px] text-[#D2691E]' />
          <input
            type='text'
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder='Please specify the location'
            className=' outline-0 h-full w-full ml-4'
          />
          <button onClick={handleSearch}>
            <FaArrowRight className='text-[20px] text-[#D2691E]' />
          </button>
        </div>
      </div>

      {/* {result && (
        <div className='mt-4'>
          <p>
            <strong>Place:</strong> {result.placeName}
          </p>
          <p>
            <strong>Coordinates:</strong> {result.coordinates.join(", ")}
          </p>
        </div>
      )} */}
    </div>
  );
};

export default PlaceSearchInput;
