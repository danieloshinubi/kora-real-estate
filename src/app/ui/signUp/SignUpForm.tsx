"use client";

import React, { useState } from "react";
// import Image from "next/image";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

import { useSignUpMutation } from "../../utils/services/api";

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
      {step === 2 && <StepTwo nextStep={nextStep} />}
      {step === 3 && <StepThree nextStep={nextStep} />}
    </div>
  );
};

export default SignupForm;
