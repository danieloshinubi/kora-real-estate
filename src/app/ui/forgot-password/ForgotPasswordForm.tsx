"use client";

import React, { useState } from "react";
import { inknutAntiqua } from "../fonts";
import { cabin } from "../fonts";

import { useForgotPasswordMutation } from "../../utils/services/api";

type ForgotPasswordFormProps = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
};

type ErrorType = {
  status: number;
  data: {
    message: string;
  };
};

const ForgotPasswordForm = ({
  setStep,
  email,
  setEmail,
}: ForgotPasswordFormProps) => {
  const [forgotPassword] = useForgotPasswordMutation();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleforgotPassword = async () => {
    setIsLoading(true);
    try {
      const response = await forgotPassword({ email: email }).unwrap();
      if (response?.message === "password reset token sent") {
        setStep(2); // Redirect only if the response is successful
      } else {
        throw new Error(response?.message || "Couldn't send email."); // Throw an error if success is not true
      }
    } catch (error) {
      const errorData = error as ErrorType;
      setError(errorData.data.message as string);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='overflow-y-scroll flex items-center h-[calc(100%-52px)]'>
      <div
        className={`max-w-md mx-auto h-full flex flex-col justify-center ${cabin.className}`}
      >
        <h1 className={`text-2xl font-semibold ${inknutAntiqua.className}`}>
          Forgot Password?
        </h1>
        <p className='text-center text-gray-600 mb-6'>
          Enter your email in the field below to receive a password reset link
        </p>

        {/* Email Address */}
        <input
          type='text'
          placeholder='Email Address'
          className='w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring focus:ring-orange-300'
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <p className='text-right text-red-500'>{error}</p>

        {/* Submit Button */}
        <button
          disabled={isLoading}
          className='w-full py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600'
          onClick={handleforgotPassword}
        >
          Send
        </button>

        <p className='text-center mt-4 text-sm text-gray-500'>
          <a href='/auth/login' className='text-orange-500 hover:underline'>
            Remember Your Password?
          </a>
        </p>

        {/*Remember Password Button */}
        <button className='w-full text-orange-500 rounded-lg mb-8'></button>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
