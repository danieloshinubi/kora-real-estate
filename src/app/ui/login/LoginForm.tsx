"use client";

import React, { useState} from "react";
import Image from "next/image";
import { inknutAntiqua } from "../fonts";
import { cabin } from "../fonts";

import { useLoginMutation } from "../../utils/services/api";
import { useUser } from "@/app/context/UserContext";

import { useRouter } from "next/navigation";

type ErrorType = {
  status: number;
  data: {
    message: string;
  };
};

const LoginForm: React.FC = () => {
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [error, setError] = useState<ErrorType | null>(null);

  const [login, { isLoading }] = useLoginMutation();

  const { setUser } = useUser();

  const router = useRouter();

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const credentials = { email: email, password: password };
      const result = await login(credentials).unwrap();

      setUser(result.user);
      localStorage.setItem("user", JSON.stringify(result.user)); // Save user data in local storage

      await fetch("/api/set-token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: result.accessToken }),
      });

      router.push("/");
    } catch (err: unknown) {
      setError(err as ErrorType);
      if (err && typeof err === "object" && "data" in err) {
        console.error("Login failed:", err);
      } else {
        console.error("An unexpected error occurred:", err);
      }
    }
  };

  return (
    <div className='overflow-y-scroll flex items-center px-6 lg:h-[calc(100%-52px)]'>
      <div
        className={`max-w-md mx-auto h-full flex flex-col justify-center ${cabin.className}`}
      >
        <h1 className={`text-2xl font-semibold ${inknutAntiqua.className}`}>
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
            Login with Google
          </button>
          <button className='w-full flex items-center py-[10px] px-[16px] justify-center border rounded-lg bg-blue-600 text-white hover:bg-blue-700'>
            <Image
              src='/facebook-icon.png'
              alt='Facebook'
              className='w-5 h-5 mr-2'
              width={20}
              height={20}
            />
            Login with Facebook
          </button>
        </div>

        <div className='text-center my-4'>OR</div>
        {error && (
          <p className='text-red-600 text-center'>
            {error?.data?.message || "Something went wrong"}
          </p>
        )}

        {/* Email Address */}
        <input
          type='text'
          placeholder='Email Address'
          className='w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring focus:ring-orange-300'
          onChange={(e) => setEmail(e.target.value)}
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
          <a
            href='/auth/forgot-password'
            className='text-[#DB1E13] hover:underline'
          >
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
          <a href='/auth/sign-up' className='text-orange-500 hover:underline'>
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
