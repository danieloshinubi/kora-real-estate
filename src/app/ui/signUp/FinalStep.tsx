type Props = {
    handleSignUp: () => void;
    isLoading: boolean;
}

const FinalStep = ({handleSignUp, isLoading}: Props) => {
  return (
    <div>
        <h1 className='text-2xl font-semibold text-center mb-2'>
            Almost There!
        </h1>
        <p className='text-center text-gray-600 mb-6'>
            Click the button below to complete your registration.
        </p>
        <button
            onClick={handleSignUp}
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        >
            {isLoading ?"Signing Up":"Complete Registration"}
        </button>
    </div>
  )
}

export default FinalStep;