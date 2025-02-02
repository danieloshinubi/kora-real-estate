import { inknutAntiqua, cabin } from "../fonts";

type Props = {
    setStep: React.Dispatch<React.SetStateAction<number>>;
}
const FinalStep = ({setStep}:Props) => {
  return (
    <div
      className={`max-w-md mx-auto flex flex-col gap-4 justify-center h-full ${cabin.className}`}
    >
      {/* Title and Description */}
      <h1 className={`text-2xl font-semibold ${inknutAntiqua.className}`}>
        Email Verification
      </h1>
      <p className='text-gray-600 mb-6'>
        A verification link has been sent to your email, please check your inbox
        to continue
      </p>

      <a href='https://www.gmail.com'>
        <button className='bg-[#D2691E] text-white w-full py-[10px] px-[18px] rounded-lg font-medium'>
          Check Your Email
        </button>
      </a>

      <p className='text-center mt-4 text-[16px]' onClick={()=>setStep(5)}>
        <a href='/auth/login' className='text-orange-500'>
          Resend Verification Mail
        </a>
      </p>
    </div>
  );
};

export default FinalStep;
