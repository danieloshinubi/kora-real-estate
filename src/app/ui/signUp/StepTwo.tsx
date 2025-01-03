import { cabin } from "../fonts";

type Props = {
    nextStep: () => void;
};

const StepTwo = ({nextStep}: Props) => {
  return (
    <div>
      <h2 className='text-xl font-semibold'>Step 2: Address</h2>
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
