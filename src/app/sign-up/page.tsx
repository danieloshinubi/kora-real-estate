"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function SignUpPage() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);
  return (
    <div className='w-full p-5'>
      {/* Navigation Buttons */}
      <div className='mt-4 flex justify-between'>
        {step > 1 && (
          <div>
            <button className='btn btn-outline' onClick={prevStep}>
              Back
            </button>
            <Image 
              src="/kora-logo.png"
              height={100}
              width={100}
              alt="kora logo"
            />
          </div>
        )}
      </div>
      {/* Step Content */}
      <div>
        {step === 1 && (
          <div>
            <h2 className='text-xl font-semibold'>Step 1: Personal Info</h2>
            <input
              type='text'
              placeholder='Name'
              className='input input-bordered w-full mb-3'
            />
            <input
              type='email'
              placeholder='Email'
              className='input input-bordered w-full'
            />
            <button onClick={nextStep}>Next</button>
          </div>
        )}
        {step === 2 && (
          <div>
            <h2 className='text-xl font-semibold'>Step 2: Address</h2>
            <input
              type='text'
              placeholder='Address'
              className='input input-bordered w-full mb-3'
            />
            <input
              type='text'
              placeholder='City'
              className='input input-bordered w-full'
            />
            <button onClick={nextStep}>Next</button>
          </div>
        )}
        {step === 3 && (
          <div>
            <h2 className='text-xl font-semibold'>Step 3: Confirmation</h2>
            <p>Review your details before submission.</p>
            <button onClick={nextStep}>Next</button>
          </div>
        )}
      </div>
    </div>
  );
}
