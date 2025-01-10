import { LatLngTuple } from "leaflet";
import React from "react";
import { getCoordinates } from "@/app/utils/geocode";
import { useState } from "react";

type Props = {
  setCoordinates: (coordinates: LatLngTuple) => void;
};
const PlaceSearchInput = ({ setCoordinates }: Props) => {
  const [location, setLocation] = useState("");
  const [result, setResult] = useState<{
    placeName: string;
    coordinates: number[];
  } | null>(null);

  const handleSearch = async () => {
    try {
      const data = await getCoordinates(location);
      setResult(data);
      setCoordinates(data.coordinates as LatLngTuple);
    } catch (error) {
      console.error("Error fetching coordinates:", error);
    }
  };

  return (
    <div className='p-4'>
      <div className="">
        <input
          type='text'
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder='Please specify the location'
          className='border-[#D2691E] border-[1px] p-4 rounded-[10px] outline-0 w-full mb-4'
        />
        <button
          onClick={handleSearch}
          className='bg-[#D2691E] text-white px-4 py-2 rounded'
        >
          Search
        </button>
        <select>
          <option>Choose Selection</option>
        </select>
      </div>

      {result && (
        <div className='mt-4'>
          <p>
            <strong>Place:</strong> {result.placeName}
          </p>
          <p>
            <strong>Coordinates:</strong> {result.coordinates.join(", ")}
          </p>
        </div>
      )}
    </div>
  );
};

export default PlaceSearchInput;
