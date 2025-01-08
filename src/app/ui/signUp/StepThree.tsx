import { cabin } from "../fonts";
import { inknutAntiqua } from "../fonts";

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
        Lorem ipsum dolor sit amet consectetur. Malesuada gravida quam sed eu.
      </p>
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
