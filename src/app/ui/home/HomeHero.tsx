import React from "react";
import Image from "next/image";
import { cabin } from "../fonts";
import { MdMap, MdSearch } from "react-icons/md";

const SearchCriteria = [
  { criteria: "Location", placeholder: "Search Where?", inputType: "text" },
  { criteria: "Price", placeholder: "Choose Range", inputType: "select" },
  { criteria: "Listing Type", placeholder: "Select Type", inputType: "select" },
  { criteria: "Listing Type", placeholder: "Select Type", inputType: "select" },
];
export default function HomeHero() {
  return (
    <div className='relative w-full h-full flex flex-col justify-center items-center text-white'>
      <div className='absolute top-0 left-0 w-full h-[450px] sm:h-[590px] bg-black bg-opacity-65'></div>
      <Image
        src='/kora-home-bg.jpeg'
        alt='hero'
        height={450}
        width={1200}
        className='w-full h-[450px] sm:h-[590px] object-cover'
      />
      <div className='container mx-auto'>
        <div className='absolute px-6 lg:px-0 top-[40%] lg:left-1/2 transform lg:-translate-x-1/2 lg:-translate-y-1/2 max-w-[777px] w-full text-center'>
          <div className='mb-4'>
            <h1 className='text-[20px] sm:text-2xl lg:mb-4 lg:text-[32px] w-full lg:leading-[50px] tracking-[2%] '>
              Your next Outdoorsy adventure starts here
            </h1>
            <p
              className={`text-[14px] sm:text-xl lg:text-[20px] w-full leading-[24px] tracking-[3%] ${cabin.className}`}
            >
              Discover the best RV, camper van or travel trailer rental for your
              next vacation
            </p>
          </div>
          <div
            className={`flex flex-col sm:flex-row justify-between bg-white py-4 lg:py-2 px-8  lg:px-4 rounded-lg shadow-lg sm:shadow-none sm:rounded-full text-black w-full max-w-[833px] ${cabin.className}`}
          >
            <ul className='flex flex-col sm:flex-row gap-4 justify-between text-[14px] mr-2 lg:mr-8 w-full lg:rounded-full'>
              {SearchCriteria.map((criteria, index) => (
                <li
                  key={index}
                  className='flex flex-col items-center text-left border-r-[1px] pr-2 last:border-none border-black'
                >
                  <span className='text-left w-full text-[16px] font-medium sm:text-[14px]'>
                    {criteria.criteria}
                  </span>
                  {criteria.inputType === "select" ? (
                    <select className='mr-auto outline-none border-none text-gray-500'>
                      <option value=''>{criteria.placeholder}</option>
                    </select>
                  ) : (
                    <input
                      type='text'
                      placeholder={criteria.placeholder}
                      className='outline-none border-none mr-auto'
                    />
                  )}
                </li>
              ))}
            </ul>
            <button className='bg-[#D2691E] w-full lg:w-auto text-white ml-auto mt-8 sm:mt-auto px-4 py-2 sm:rounded-full rounded-lg'>
              <span className='flex gap-2 justify-center mx-auto'>
                <MdSearch className='text-2xl' />
                <span className='hdden md:block'> Search</span>
              </span>
            </button>
          </div>
        </div>
        <div className='absolute hidden lg:flex  bottom-8 left-0 w-full justify-center py-4 px-8 items-center'>
          <button className='bg-[#D2691E] text-white px-6 py-4 rounded-full'>
            <span className={`flex gap-2 ${cabin.className}`}>
              <MdMap className='text-2xl' /> View Map
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
