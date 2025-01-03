"use client";

import React, { useState } from "react";
import Image from "next/image";
import LoginForm from "../../ui/login/LoginForm";

export default function LoginPage() {
  const [step, setStep] = useState(1);
  const prevStep = () => setStep((prev) => prev - 1);
  return (
    <div className='w-full h-full'>
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
              height={52}
              width={151}
              alt='kora logo'
            />
          </div>
        )}
      </div>
      
      {/* Login Form */}
      <LoginForm/>
    </div>
  );
}
