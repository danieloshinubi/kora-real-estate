import { cabin } from "../fonts";
type Props = {
  nextStep: () => void;
};

const StepThree = ({ nextStep }: Props) => {
  return (
    <div>
      <h2 className='text-xl font-semibold'>Step 3: Confirmation</h2>
      <p>Review your details before submission.</p>
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
