import { useVerifyAccountQuery } from "@/app/utils/services/api";
import { inknutAntiqua, cabin } from "../fonts";
import { useState } from "react";
import { skipToken } from "@reduxjs/toolkit/query";

const FinalStep = () => {
    const [showTokenInput, setShowTokenInput] = useState(false);
    const [token, setToken] = useState("");
  
    // Use the hook only when `token` is available
    const { data, error, isLoading } = useVerifyAccountQuery(token ? { token } : skipToken);
  
    const handleSubmit = () => {
      if (!showTokenInput) {
        setShowTokenInput(true);
        return;
      }
  
      if (error) {
        alert("Invalid Token");
        console.log(error);
      } else if (data) {
        alert("Account verified successfully!");
        console.log(data);
      }
    };

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

      {/* Show token input field after button click */}
      {showTokenInput && (
        <input
          type='text'
          placeholder='Enter Verification Code'
          className='border border-gray-300 rounded-lg p-4'
          value={token}
          onChange={(e) => setToken(e.target.value)}
        />
      )}

      <button
        onClick={handleSubmit}
        className='bg-[#D2691E] text-white w-full py-[10px] px-[18px] rounded-lg font-medium'
        disabled={isLoading}
      >
        {!showTokenInput ? "Check Your Email" : "Verify Token"}
      </button>

      <p className='text-center mt-4 text-[16px]'>
        <a href='/auth/login' className='text-orange-500'>
          Resend Verification Mail
        </a>
      </p>

      {/* Loading, Error, and Success States */}
      {isLoading && <p>Loading...</p>}
      {error && <p className='text-red-500'>Error: Something went wrong</p>}
      {data && <p className='text-green-500'>Verification successful!</p>}
    </div>
  );
};

export default FinalStep;
