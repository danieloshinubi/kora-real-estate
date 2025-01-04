import { FaHouse } from "react-icons/fa6";
import { cabin } from "../fonts";
import { inknutAntiqua } from "../fonts";

type Props = {
  nextStep: () => void;
};

const StepTwo = ({ nextStep }: Props) => {
  const propertyTypes = [
    "Apartment",
    "House",
    "Duplex",
    "Terraced House",
    "Detached House",
    "Bungalow",
    "Studio Apartment",
    "Penthouse",
    "House!",
    "House!!",
    "House!!!",
    "House!!!!",
  ];

  return (
    <div className={`max-w-md mx-auto h-full ${cabin.className}`}>
      <h1 className={`text-2xl font-semibold ${inknutAntiqua.className}`}>
        What Property Type Interests You
      </h1>
      <p className='text-gray-600 mb-6'>
        What are property types you are looking for on{" "}
        <span className='text-[#873D2F]'>KORA</span>
      </p>
      <div className='grid grid-cols-3 gap-[10px]'>
        {propertyTypes.map((type) => (
          <button
            key={type}
            className={`border-[1px] h-[100px] border-gray-500 text-gray-500 font-medium hover:text-[#873D2F] hover:border-[#873D2F] py-[15px] px-[10px] rounded-[10px] ${cabin.className}`}
          >
            <FaHouse className='text-2xl mb-2' />
            <p className="w-full text-left">{type}</p>
          </button>
        ))}
      </div>
      <button
        onClick={nextStep}
        className={`bg-[#D2691E] ${cabin.className} text-white mt-8 w-full py-[10px] px-[18px] rounded-[6px]`}
      >
        Next
      </button>
    </div>
  );
};

export default StepTwo;
