import { cabin } from "../fonts";

type Props = {
  nextStep: () => void;
  handleCreateUserProfile: () => void;
};

const StepFour = ({ nextStep }: Props) => {
  return (
    <div>
      <h2 className='text-xl font-semibold'>Step 3: Confirmation</h2>
      <p>Step 4</p>
      <button
        onClick={nextStep}
        className={`bg-[#D2691E] ${cabin.className} text-white w-full py-[10px] px-[18px] rounded-[6px]`}
      >
        Next
      </button>
    </div>
  );
};

export default StepFour;