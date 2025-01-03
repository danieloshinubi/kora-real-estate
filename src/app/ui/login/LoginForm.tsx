"use client";

import React, { useState } from "react";
import Image from "next/image";
import { inknutAntiqua } from "../fonts";
import { cabin } from "../fonts";

import { useLoginMutation } from "../../utils/services/api";

const LoginForm: React.FC = () => {
  const [password, setPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [login] = useLoginMutation();

  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);

    try {
      await login({ username: username, password: password });
    } catch (error) {
      alert("login failed. Try again.");
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
        <h1
          className={`text-2xl font-semibold ${inknutAntiqua.className}`}
        >
          Welcome Back, User
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
          type='text'
          placeholder='Email Address'
          className='w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring focus:ring-orange-300'
          onChange={(e) => setUsername(e.target.value)}
          required
        />

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
        </div>

        {/*Forgot Password Button */}
        <button className='w-full text-[#DB1E13] text-right rounded-lg mb-8'>
          <a href='/forgot-password' className='text-[#DB1E13] hover:underline'>
            Forgot Password?
          </a>
        </button>

        {/* Submit Button */}
        <button
          disabled={isLoading}
          className='w-full py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600'
          onClick={handleLogin}
        >
          {isLoading ? "Signing In" : "Sign In"}
        </button>

        <p className='text-center mt-4 text-sm text-gray-500'>
          Don&apos;t have an account?{" "}
          <a href='/sign-up' className='text-orange-500 hover:underline'>
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
