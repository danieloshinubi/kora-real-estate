import React, { useState } from "react";
import Image from "next/image";
import { cabin } from "./fonts";
import { inknutAntiqua } from "./fonts";

type SignupFormProps = {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

const SignupForm: React.FC<SignupFormProps> = ({step, setStep}) => {
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const nextStep = () => setStep((prev) => prev + 1);

  const validatePassword = (password: string) => {
    return {
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
      number: /[0-9]/.test(password),
    };
  };

  const passwordValidation = validatePassword(password);

  return (
    <div className="overflow-y-scroll max-h-[80vh]"> 
      {step === 1 && (
        <div className={`max-w-md mx-auto ${cabin.className}`}>
          <h1
            className={`text-2xl font-semibold text-center mb-2 ${inknutAntiqua.className}`}
          >
            Create Your Account
          </h1>
          <p className='text-center text-gray-600 mb-6'>
            We recommend using your school email for the best experience.
          </p>

          {/* Social Signup Buttons */}
          <div className='mb-4'>
            <button className='w-full flex items-center py-[10px] px-[16px] justify-center border rounded-lg mb-2 hover:bg-gray-100'>
              <Image
                src='/google-icon.png'
                alt='Google'
                className='w-5 h-5 mr-2'
                width={20}
                height={20}
              />
              Sign Up with Google
            </button>
            <button className='w-full flex items-center py-[10px] px-[16px] justify-center border rounded-lg bg-blue-600 text-white hover:bg-blue-700'>
              <Image
                src='/facebook-icon.png'
                alt='Facebook'
                className='w-5 h-5 mr-2'
                width={20}
                height={20}
              />
              Sign Up with Facebook
            </button>
          </div>

          <div className='text-center my-4'>OR</div>

          {/* Email Address */}
          <input
            type='email'
            placeholder='Email Address'
            className='w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring focus:ring-orange-300'
          />

          {/* Phone Number */}
          <div className='flex mb-4'>
            <select className='border rounded-l-lg px-3 py-2 focus:outline-none'>
              <option value='+234'>🇳🇬 +234</option>
              <option value='+1'>🇺🇸 +1</option>
              <option value='+44'>🇬🇧 +44</option>
            </select>
            <input
              type='tel'
              placeholder='Phone Number'
              className='flex-grow px-4 py-2 border rounded-r-lg focus:outline-none focus:ring focus:ring-orange-300'
            />
          </div>

          {/* Password */}
          <div className='mb-4 relative'>
            <input
              type={showPassword ? "text" : "password"}
              placeholder='Password'
              className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-orange-300'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type='button'
              className='absolute right-3 top-3 text-gray-500'
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
            {/* Password Validation */}
            <div
              className={`grid grid-cols-4 text-gray-600 text-[13px] leading-[16px] ${cabin.className}`}
            >
              <span className={passwordValidation.length ? "text-green-600" : ""}>
                8 characters
              </span>
              <span
                className={passwordValidation.uppercase ? "text-green-600" : ""}
              >
                An uppercase letter
              </span>
              <span
                className={passwordValidation.lowercase ? "text-green-600" : ""}
              >
                A lowercase letter
              </span>
              <span
                className={
                  passwordValidation.specialChar ? "text-green-600" : ""
                }
              >
                A special character
              </span>
              <span className={passwordValidation.number ? "text-green-600" : ""}>
                A number
              </span>
            </div>
          </div>

          {/* Confirm Password */}
          <div className='mb-6 relative'>
            <input
              type={showPassword ? "text" : "password"}
              placeholder='Confirm Password'
              className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-orange-300'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button
              type='button'
              className='absolute right-3 top-3 text-gray-500'
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>

          {/* Submit Button */}
          <button className='w-full py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600'>
            Create Account
          </button>

          <p className='text-center mt-4 text-sm text-gray-500'>
            Already have an account?{" "}
            <a href='/login' className='text-orange-500 hover:underline'>
              Login
            </a>
          </p>
        </div>
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
