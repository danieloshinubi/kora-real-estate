import React from "react";
import { cabin } from "@/app/ui/fonts";
import Image from "next/image";

export default function SignUpSidePane() {
  return (
    <div className='w-full lg:max-w-[540px]  px-6 py-6 rounded-b-[50%] lg:rounded-2xl lg:flex flex-col justify-between bg-[#2f4f4f] items-center'>
      <div className='mt-4 flex justify-center'>
        <Image
          src='/signUpHomeWbg.png'
          width={360}
          height={243}
          alt='sign up home picture'
          className='h-auto'
        />
      </div>
      <div className='leading-[24px] hidden lg:block text-white text-center'>
        <h1 className='text-[20px]  mb-4'>
          The Largest Selection Of Apartments
        </h1>
        <p className={` ${cabin.className} text-[16px]`}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>
      <div className='lg:flex flex-col gap-4 hidden items-center text-white'>
        <h3> Trusted by teams at</h3>
        <div className='flex items-center gap-4 justify-center'>
          <Image
            src='/konga.svg'
            width={100}
            height={50}
            alt='google'
            className='w-auto'
          />
          <Image
            src='/nairabet.svg'
            width={100}
            height={50}
            alt='facebook'
            className='w-auto h-auto'
          />
          <Image
            src='/oando.svg'
            width={100}
            height={50}
            alt='microsoft'
            className='w-auto'
          />
        </div>
      </div>
    </div>
  );
}
