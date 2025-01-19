import { LatLngTuple } from "leaflet";
import React from "react";
import { getCoordinates } from "@/app/utils/geocode";
import { useState } from "react";
import { FaCrosshairs } from "react-icons/fa6";

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
      console.log(data)
      setCoordinates(data.coordinates as LatLngTuple);
    } catch (error) {
      console.error("Error fetching coordinates:", error);
    }
  };

  return (
    <div className='p-4'>
      <div className="flex flex-col gap-1">
        <div className='flex border-[#D2691E] border-[1px] p-4 items-center rounded-[10px]'>
        <FaCrosshairs className='text-[24px] ' />
        <input
          type='text'
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder='Please specify the location'
          className=' outline-0 h-full w-full ml-4'
        />
      </div>
      <select onClick={handleSearch} className="w-full flex flex-col rounded-t-none items-center justify-center p-4 rounded-[10px]">
        <option>Choose Selection</option>
      </select>
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
