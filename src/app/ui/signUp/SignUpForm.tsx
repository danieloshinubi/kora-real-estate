"use client";

import React, { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import FinalStep from "./FinalStep";

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

  const [isLoading, setIsLoading] = useState(false);

  const handleSignUp = async () => {
    setIsLoading(true);

    try {
      await signUp({ username: email, password, email });
      nextStep();
    } catch (error) {
      alert("Signup failed. Try again.");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='overflow-y-scroll flex items-center max-h-[85vh]'>
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
      {step === 4 && <StepFour nextStep={nextStep} />}
      {step === 5 && (
        <FinalStep handleSignUp={handleSignUp} isLoading={isLoading} />
      )}
    </div>
  );
};

export default SignupForm;
