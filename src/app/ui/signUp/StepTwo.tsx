import { FaHouse } from "react-icons/fa6";
import { cabin } from "../fonts";
import { inknutAntiqua } from "../fonts";

type PropertyType = {
  name: string;
  _id: string;
  toggle: boolean;
};

type StepTwoProps = {
  nextStep: () => void;
  propertyTypes: PropertyType[];
  setPropertyTypes: React.Dispatch<React.SetStateAction<PropertyType[]>>;
  setUserPropertyPreference: React.Dispatch<React.SetStateAction<object[]>>;
};

const StepTwo = ({
  nextStep,
  setUserPropertyPreference,
  propertyTypes,
  setPropertyTypes,
}: StepTwoProps) => {

  const handleSelect = (selectedName: string) => {
    setPropertyTypes((prev) =>
      prev.map((type) =>
        type.name === selectedName ? { ...type, toggle: !type.toggle } : type
      )
    );
    setUserPropertyPreference(propertyTypes);
  };
  
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
            key={type.name}
            value={type.name}
            onClick={() => handleSelect(type.name)}
            className={`border-[1px] h-[100px] border-gray-500 font-medium py-[15px] px-[10px] rounded-[10px] ${
              type.toggle ? "text-[#873D2F] border-[#873D2F]" : "text-gray-500"
            } hover:text-[#873D2F] hover:border-[#873D2F] ${cabin.className}`}
          >
            <FaHouse className='text-2xl mb-2' />
            <p className='w-full text-left'>{type.name}</p>
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
