import React from "react";
import { MdSearch } from "react-icons/md";
import { cabin } from "../fonts";

const SearchCriteria = [
  { criteria: "Location", placeholder: "Search Where?", inputType: "text" },
  { criteria: "Price", placeholder: "Choose Range", inputType: "select" },
  { criteria: "Listing Type", placeholder: "Select Type", inputType: "select" },
];

export default function SearchComponent() {
  return (
    <div className="pr-24">
      <div
        className={`flex flex-col sm:flex-row items-center justify-between shadow-lg sm:shadow-none text-black w-full  ${cabin.className}`}
      >
        <ul className='grid grid-cols-3 gap-4 text-[14px] mr-2 lg:mr-8 w-full '>
          {SearchCriteria.map((criteria, index) => (
            <li
              key={index}
              className='flex flex-col py-2 px-4 rounded-lg items-center text-left lg:border-[1px] lg:pr-2 border-black'
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
        <button className='bg-[#D2691E] w-full lg:w-auto h-full text-white ml-auto px-4 py-2 sm:rounded-full rounded-lg'>
          <span className='flex gap-2 justify-center mx-auto'>
            <MdSearch className='text-2xl' />
            <span className='hdden md:block'> Search</span>
          </span>
        </button>
      </div>
    </div>
  );
}
