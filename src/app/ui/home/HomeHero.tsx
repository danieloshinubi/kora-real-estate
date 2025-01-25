import React from "react";
import Image from "next/image";
import { cabin } from "../fonts";
import { MdSearch } from "react-icons/md";

const SearchCriteria = [
  { criteria: "Location", placeholder: "Search Where?", inputType: "text" },
  { criteria: "Price", placeholder: "Choose Range", inputType: "select" },
  { criteria: "Listing Type", placeholder: "Select Type", inputType: "select" },
  { criteria: "Listing Type", placeholder: "Select Type", inputType: "select" },
];
export default function HomeHero() {
  return (
    <div className='relative w-full h-full  flex flex-col justify-center items-center text-white'>
      <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50'></div>
      <Image
        src='/kora-home-bg.jpeg'
        alt='hero'
        height={450}
        width={1200}
        className='w-full h-[450px] sm:h-[650px] object-cover'
      />
      <div className='absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-[777px] text-center'>
        <div className='mb-4'>
          <h1 className='text-[32px] w-full leading-[83px] tracking-[2%] '>
            Your next Outdoorsy adventure starts here
          </h1>
          <p
            className={`text-[20px] w-full leading-[24px] tracking-[3%] ${cabin.className}`}
          >
            Discover the best RV, camper van or travel trailer rental for your
            next vacation
          </p>
        </div>
        <div
          className={`flex justify-between bg-white py-2 px-8 rounded-full text-black w-full max-w-[833px] ${cabin.className}`}
        >
          <ul className='flex justify-between text-[14px] mr-8 w-full rounded-full'>
            {SearchCriteria.map((criteria) => (
              <li
                key={criteria.criteria}
                className='flex flex-col items-center text-left'
              >
                <span className='text-left w-full'>{criteria.criteria}</span>
                {criteria.inputType === "select" ? (
                  <select className='outline-none border-none text-gray-500'>
                    <option value=''>{criteria.placeholder}</option>
                  </select>
                ) : (
                  <input
                    type='text'
                    placeholder={criteria.placeholder}
                    className='outline-none border-none'
                  />
                )}
              </li>
            ))}
          </ul>
          <button className='bg-orange-500 text-white ml-auto px-6 py-2 rounded-full'>
            <span className='flex gap-2'>
              <MdSearch className='text-2xl' /> Search
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
