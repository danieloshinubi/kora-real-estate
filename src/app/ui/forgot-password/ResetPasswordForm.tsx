"use client";

import React, { useState } from "react";
import { inknutAntiqua } from "../fonts";
import { cabin } from "../fonts";

import { useResetPasswordMutation } from "../../utils/services/api";

type ResetNewPasswordFormProps = {
  email: string;
};

const ResetNewPasswordForm = ({ email }: ResetNewPasswordFormProps) => {
  const [otp, setOtp] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [resetNewPassword] = useResetPasswordMutation();
  const [showPassword, setShowPassword] = useState<boolean>(false);

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
  const passwordValidation = validatePassword(newPassword);

  const checkPassword = () => {
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (!passwordValidation.isValid) {
      alert("Passwords doesn't meet the criteria!");
      return;
    }
  };

  const [isLoading, setIsLoading] = useState(false);

  const handleresetNewPassword = async () => {
    checkPassword();
    setIsLoading(true);

    try {
      await resetNewPassword({
        email: email,
        otp: otp,
        newPassword: newPassword,
      });
    } catch (error) {
      alert("resetNewPassword failed. Try again.");
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='overflow-y-scroll flex items-center h-[calc(100%-52px)]'>
      <div
        className={`max-w-md mx-auto h-full flex flex-col justify-center ${cabin.className}`}
      >
        <h1 className={`text-2xl font-semibold ${inknutAntiqua.className}`}>
          Reset Password
        </h1>
        <p className='text-center text-gray-600 mb-6'>
          We recommend using your school email for the best experience.
        </p>

        {/*New Password */}
        <div className='mb-4 relative'>
          <input
            type={showPassword ? "text" : "password"}
            placeholder='Password'
            className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-orange-300'
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
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
        {/* OTP */}
        <div className='mb-6 relative'>
          <input
            type="text"
            placeholder='OTP'
            className='w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-orange-300'
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
        </div>

        {/* Submit Button */}
        <button
          disabled={isLoading}
          className='w-full py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600'
          onClick={handleresetNewPassword}
        >
          {isLoading ? "Resetting..." : "Reset Password"}
        </button>

        <p className='text-center mt-4 text-sm text-gray-500'>
          <a href='/auth/login' className='text-orange-500 hover:underline'>
            Remember Your Password?
          </a>
        </p>

        {/*Remember Password Button */}
        <button className='w-full text-orange-500 rounded-lg mb-8'></button>
      </div>
    </div>
  );
};

export default ResetNewPasswordForm;
