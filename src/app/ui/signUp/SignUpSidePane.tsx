import React from 'react'
import { cabin } from "@/app/ui/fonts";
import Image from "next/image";

export default function SignUpSidePane() {
  return (
    <div className='w-[40%] max-w-[540px] hidden px-6 py-6 rounded-2xl lg:flex flex-col justify-between bg-[#2f4f4f] items-center'>
          <div className='mt-4'>
            <Image
              src='/signUpHomeWbg.png'
              width={360}
              height={243}
              alt='sign up home picture'
            />
          </div>
          <div className="leading-[24px] text-white text-center">
            <h1 className='text-[20px]  mb-4'>
              The Largest Selection Of Apartments
            </h1>
            <p className={` ${cabin.className} text-[16px]`}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
          <div className='flex flex-col gap-4 items-center text-white'>
            <h3> Trusted by teams at</h3>
            <div className='flex items-center gap-4 justify-center'>
              <Image src='/konga.svg' width={100} height={50} alt='google' />
              <Image
                src='/nairabet.svg'
                width={100}
                height={50}
                alt='facebook'
              />
              <Image src='/oando.svg' width={100} height={50} alt='microsoft' />
            </div>
          </div>
        </div>
  )
}
