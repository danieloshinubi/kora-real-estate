"use client";

import React, { useState } from "react";
import Image from "next/image";
import ForgotPasswordForm from "../../ui/forgot-password/ForgotPasswordForm";
import ResetNewPasswordForm from "@/app/ui/forgot-password/ResetPasswordForm";

export default function ForgotPasswordPage() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState<string>("");
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
      {step === 1 && <ForgotPasswordForm setStep={setStep} email={email} setEmail={setEmail} />}
      {step === 2 && <ResetNewPasswordForm email={email}/>}
    </div>
  );
}
