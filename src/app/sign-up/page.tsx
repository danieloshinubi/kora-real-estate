"use client";

import React, { useState } from "react";
import Image from "next/image";
import SignupForm from "../ui/SignUpForm";

export default function SignUpPage() {
  const [step, setStep] = useState(1);
  const prevStep = () => setStep((prev) => prev - 1);
  return (
    <div className='w-full p-5'>
      {/* Navigation Buttons */}
      <div className='flex justify-between'>
        {step > 1 ? (
          <div className='flex absolute top-0 justify-between w-full'>
            <button className='btn btn-outline' onClick={prevStep}>
              {"< Back"}
            </button>
            <Image
              src='/kora-logo.png'
              height={100}
              width={100}
              alt='kora logo'
            />
          </div>
        ) : (
          <div className='flex justify-end w-full'>
            <Image
              src='/kora-logo.png'
              height={200}
              width={150}
              alt='kora logo'
            />
          </div>
        )}
      </div>
      {/* Step Content */}
      <SignupForm step={step} setStep={setStep} />
    </div>
  );
}
