import { inknutAntiqua, cabin } from "../fonts";
import { useState } from "react";
import { Range } from "react-range";

type Props = {
  nextStep: () => void;
  handleCreateUserProfile: () => void;
};

const StepFour = ({ nextStep }: Props) => {
  const [bedrooms, setBedrooms] = useState(4);
  const [pets, setPets] = useState(2);
  const [price, setPrice] = useState([0, 100000]); // Min and Max Price


  const increment = (
    value: number,
    setter: React.Dispatch<React.SetStateAction<number>>
  ) => {
    setter(value + 1);
  };

  const decrement = (
    value: number,
    setter: React.Dispatch<React.SetStateAction<number>>
  ) => {
    if (value > 0) setter(value - 1);
  };

  return (
    <div className={`max-w-md mx-auto h-full ${cabin.className}`}>
      {/* Title and Description */}
      <h1 className={`text-2xl font-semibold ${inknutAntiqua.className}`}>
        Choose Your Other Options
      </h1>
      <p className='text-gray-600 mb-6'>
        Lorem ipsum dolor sit amet consectetur. Malesuada gravida quam sed eu.
      </p>

      {/* Bedrooms Selector */}
      <div className='flex justify-between items-center mb-4 border-b-[2px] py-4 border-black'>
        <span className='font-medium text-[24px]'>Bedrooms</span>
        <div className='flex items-center'>
          <button
            onClick={() => decrement(bedrooms, setBedrooms)}
            className='border-[#8B3A2D] border rounded-full w-[36px] h-[36px] text-[16px]'
          >
            -
          </button>
          <span className='mx-4'>{bedrooms}</span>
          <button
            onClick={() => increment(bedrooms, setBedrooms)}
            className='border-[#8B3A2D] border rounded-full w-[36px] h-[36px] text-[16px]'
          >
            +
          </button>
        </div>
      </div>

      {/* Pets Selector */}
      <div className='flex justify-between items-center mb-4 border-b-[2px] py-4 border-black'>
        <span className='font-medium text-[24px]'>Pets</span>
        <div className='flex items-center'>
          <button
            onClick={() => decrement(pets, setPets)}
            className='border-[#8B3A2D] border rounded-full w-[36px] h-[36px] text-[16px]'
          >
            -
          </button>
          <span className='mx-4'>{pets}</span>
          <button
            onClick={() => increment(pets, setPets)}
            className='border-[#8B3A2D] border rounded-full w-[36px] h-[36px] text-[16px]'
          >
            +
          </button>
        </div>
      </div>

      {/* Price Range */}
      <div className='mb-6'>
        <div className='flex justify-between text-sm mb-2'>
          <span className='font-medium text-[24px] py-6'>Price</span>
        </div>
        <div className='flex gap-4 text-sm mb-6'>
          <div className='w-full p-4 border-[1px] border-[#697D95] rounded-[10px]'>
            <span className='block font-medium text-[18px] border-gray-300'>
              Min
            </span>
            <span className='text-[24px]'>NGN {price[0]}</span>
          </div>
          <div className='w-full p-4 border-[1px] border-[#697D95] rounded-[10px]'>
            <span className='block font-medium text-[18px] border-gray-300'>
              Max
            </span>
            <span className=' text-[24px]'>NGN {price[1]}</span>
          </div>
        </div>
        <Range
  step={1}
  min={0}
  max={100000}
  values={price}
  onChange={(price) => setPrice(price)}
  renderTrack={({ props, children }) => (
    <div
      {...props}
      className="h-[5px] w-full bg-[#2F4F4F] rounded-sm mt-[10px] mb-6 flex"
      style={{
        position: "relative",
        width: "100%",
      }}
    >
      {children}
    </div>
  )}
  renderThumb={({ props, index }) => (
    <div
      {...props}
      key={index}
      className="h-[24px] w-[24px] rounded-full bg-[#2F4F4F] outline-0"
      style={{
        ...props.style,
        boxShadow: "0px 2px 6px #aaa",
        position: "absolute",
      }}
    />
  )}
/>

      </div>

      {/* Next Button */}
      <button
        onClick={nextStep}
        className='bg-[#D2691E] text-white w-full py-2 rounded-lg font-medium'
      >
        Next
      </button>
    </div>
  );
};

export default StepFour;
