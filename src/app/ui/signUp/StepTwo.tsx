import { cabin } from "../fonts";
import { inknutAntiqua } from "../fonts";

type Props = {
    nextStep: () => void;
};

const StepTwo = ({nextStep}: Props) => {
  return (
    <div className={`max-w-md mx-auto h-full ${cabin.className}`}>
          <h1
            className={`text-2xl font-semibold ${inknutAntiqua.className}`}
          >
            What Property Type Interests You
          </h1>
          <p className='text-center text-gray-600 mb-6'>
            We recommend using your school email for the best experience.
          </p>
      <input
        type='text'
        placeholder='Address'
        className='input p-[12px] border-[1px] border-[#BAC7D5] w-full mb-3'
      />
      <input
        type='text'
        placeholder='City'
        className='input p-[12px] border-[1px] border-[#BAC7D5] w-full'
      />
      <button
        onClick={nextStep}
        className={`bg-[#D2691E] ${cabin.className} text-white w-full py-[10px] px-[18px] rounded-[6px]`}
      >
        Next
      </button>
    </div>
  );
};

export default StepTwo;
