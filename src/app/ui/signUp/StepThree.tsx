import { cabin } from "../fonts";
import { inknutAntiqua } from "../fonts";
import LocationSearchWithMap from "./LocationSearchWithMap";

type Props = {
  nextStep: () => void;
};

const StepThree = ({ nextStep }: Props) => {
  return (
    <div className={`max-w-md mx-auto h-full ${cabin.className}`}>
      <h1 className={`text-2xl font-semibold ${inknutAntiqua.className}`}>
        Select Your preferred location
      </h1>
      <p className='text-gray-600 mb-6'>
      Search for a location below, and it will appear on the map.
      </p>
      <LocationSearchWithMap />
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
