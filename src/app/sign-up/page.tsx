"use client";

import React, { useState } from "react";
import Image from "next/image";
import { cabin } from "../ui/fonts";

export default function SignUpPage() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);
  return (
    <div className='w-full p-5'>
      {/* Navigation Buttons */}
      <div className='mt-4 flex justify-between'>
        {step > 1 ? (
          <div className='flex justify-between w-full'>
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
      <div>
        {step === 1 && (
          <div className='w-full flex text-center'>
            <div className='mx-auto max-w-[414px] flex flex-col gap-4'>
              <div className='text-left'>
                <h2 className='text-[28px] font-[500]'>Create Your Account</h2>
                <p className={`${cabin.className} leading-[19px] text-[#6C7275]`}>
                  We recommend using your school email for the best experience.
                </p>
              </div>

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
              <button
                onClick={nextStep}
                className={`bg-[#D2691E] ${cabin.className} text-white w-full py-[10px] px-[18px] rounded-[6px]`}
              >
                Create Account
              </button>
            </div>
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
    </div>
  );
}
