"use client";

import React, { useState } from "react";
// import Image from "next/image";
import { cabin } from "./fonts";
import StepOne from "./signUp/StepOne";

import { useSignUpMutation } from "../utils/services/api";

type SignupFormProps = {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

const SignupForm: React.FC<SignupFormProps> = ({ step, setStep }) => {
  const [password, setPassword] = useState<string>("");

  const [signUp] = useSignUpMutation();
  const [email, setEmail] = useState<string>("");

  const nextStep = async () => setStep((prev) => prev + 1);

  // const [isLoading, setIsLoading] = useState(false);

  const handleSignUp = async () => {
    // setIsLoading(true);

    try {
      await signUp({ username: email, password, email });
      nextStep();
    } catch (error) {
      alert("Signup failed. Try again.");
      console.log(error);
    } finally {
      // setIsLoading(false);
    }
  };



  return (
    <div className='overflow-y-scroll max-h-[80vh]'>
      {step === 1 && (
        <StepOne
          nextStep={nextStep}
          setEmail={setEmail}
          setPassword={setPassword}
          password={password}
        />
      )}
      {step === 2 && (
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
      )}
      {step === 3 && (
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
      )}
    </div>
  );
};

export default SignupForm;
