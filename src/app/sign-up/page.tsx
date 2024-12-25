"use client";

import React, {useState} from "react";


export default function SignUpPage() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);
  return (
      <div className="w-2/3 p-5">
        {/* Progress Indicator */}
        <ul className="steps w-full mb-4">
          <li className={`step ${step >= 1 && "step-primary"}`}>Step 1</li>
          <li className={`step ${step >= 2 && "step-primary"}`}>Step 2</li>
          <li className={`step ${step >= 3 && "step-primary"}`}>Step 3</li>
        </ul>

        {/* Step Content */}
        <div>
          {step === 1 && (
            <div>
              <h2 className="text-xl font-semibold">Step 1: Personal Info</h2>
              <input type="text" placeholder="Name" className="input input-bordered w-full mb-3" />
              <input type="email" placeholder="Email" className="input input-bordered w-full" />
            </div>
          )}
          {step === 2 && (
            <div>
              <h2 className="text-xl font-semibold">Step 2: Address</h2>
              <input type="text" placeholder="Address" className="input input-bordered w-full mb-3" />
              <input type="text" placeholder="City" className="input input-bordered w-full" />
            </div>
          )}
          {step === 3 && (
            <div>
              <h2 className="text-xl font-semibold">Step 3: Confirmation</h2>
              <p>Review your details before submission.</p>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="mt-4 flex justify-between">
          {step > 1 && (
            <button className="btn btn-outline" onClick={prevStep}>
              Previous
            </button>
          )}
          {step < 3 ? (
            <button className="btn btn-primary" onClick={nextStep}>
              Next
            </button>
          ) : (
            <button className="btn btn-success">Submit</button>
          )}
        </div>
      </div>
  );
}
