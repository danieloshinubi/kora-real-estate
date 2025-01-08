"use client";

import React, { useState } from "react";
import Image from "next/image";
import SignupForm from "../../ui/signUp/SignUpForm";

export default function SignUpPage() {
  const [step, setStep] = useState(1);
  const prevStep = () => setStep((prev) => prev - 1);
  return (
    <div className='w-full h-full'>
      {/* Navigation Buttons */}
      <div className='flex justify-between'>
        {step > 1 ? (
          <div className='flex justify-between top-0 w-full'>
            <button className='btn btn-outline' onClick={prevStep}>
              {"< Back"}
            </button>
            <Image
              src='/kora-logo.png'
              height={52}
              width={151}
              alt='kora logo'
              className="w-auto h-auto"
            />
          </div>
        ) : (
          <div className='flex justify-end w-full'>
            <Image
              src='/kora-logo.png'
              height={52}
              width={151}
              alt='kora logo'
              className="w-auto h-auto"
            />
          </div>
        )}
      </div>
      {/* Step Content */}
      <SignupForm step={step} setStep={setStep} />
    </div>
  );
}
