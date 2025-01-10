import { cabin } from "../fonts";
import { inknutAntiqua } from "../fonts";
import dynamic from "next/dynamic";
import PlaceSearchInput from "./PlaceSearchInput";
import { useState } from "react";
import { LatLngTuple } from "leaflet";

const LocationSearchWithMap = dynamic(() => import("./LocationSearchWithMap"), {
  ssr: false,
});

type Props = {
  nextStep: () => void;
};

const StepThree = ({ nextStep }: Props) => {
  const [coordinates, setCoordinates] = useState<LatLngTuple>([51.505, -0.09]);
  return (
    <div className={`max-w-md mx-auto h-full ${cabin.className}`}>
      <h1 className={`text-2xl font-semibold ${inknutAntiqua.className}`}>
        Select Your preferred location
      </h1>
      <p className='text-gray-600 mb-6'>
        Search for a location below, and it will appear on the map.
      </p>
      <div>
        <PlaceSearchInput setCoordinates={setCoordinates} />
        <LocationSearchWithMap coordinates={coordinates} />
      </div>

      <button
        onClick={nextStep}
        className={`bg-[#D2691E] ${cabin.className} text-white w-full py-[10px] px-[18px] rounded-[6px]`}
      >
        Next
      </button>
    </div>
  );
};

export default StepThree;
