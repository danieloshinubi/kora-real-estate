"use client";

import Image from "next/image";
import { inknutAntiqua } from "../fonts";
import { cabin } from "../fonts";
import { useState } from "react";
// import PhoneField from "./PhoneField";

type Props = {
  nextStep: () => void;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  password: string;
};

const StepOne = ({ nextStep, setEmail, setPassword, password }: Props) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const validatePassword = (password: string) => {
    const validation = {
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
      number: /[0-9]/.test(password),
    };

    // Return false if any of the validation criteria fail
    const isValid = Object.values(validation).every(Boolean);

    return {
      ...validation,
      isValid, // Add this to track overall password validity
    };
  };
  const passwordValidation = validatePassword(password);

  const checkPassword = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (!passwordValidation.isValid) {
      alert("Passwords doesn't meet the criteria!");
      return;
    }

    nextStep();
  };
  return (
    <div className={`max-w-md mx-auto h-full ${cabin.className}`}>
      <h1
        className={`text-2xl font-semibold ${inknutAntiqua.className}`}
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
        onChange={(e) => setEmail(e.target.value)}
        required
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
      {/* <PhoneField/> */}

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
            className={passwordValidation.specialChar ? "text-green-600" : ""}
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
      <button
        // disabled={isLoading}
        className='w-full py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600'
        onClick={checkPassword}
      >
        Create Account
      </button>

      <p className='text-center mt-4 text-sm text-gray-500'>
        Already have an account?{" "}
        <a href='/auth/login' className='text-orange-500 hover:underline'>
          Login
        </a>
      </p>
    </div>
  );
};

export default StepOne;
