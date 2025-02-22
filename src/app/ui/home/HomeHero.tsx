"use client";

import React, { useState } from "react";
import Image from "next/image";
import { cabin } from "../fonts";
import { MdMap, MdSearch } from "react-icons/md";

const listingTypes = [
  "House",
  "Residential",
  "Apartment",
  "Condo",
  "Pent House",
  "Duplex",
];

const states = ["Abia", "Lagos", "Abuja"];

const priceRanges = [
  "Below ₦50,000",
  "₦50,000 - ₦100,000",
  "₦100,000 - ₦200,000",
  "₦200,000 - ₦500,000",
  "₦500,000 and above",
];

const SearchCriteria = [
  {
    criteria: "Location",
    placeholder: "Select Location",
    stateKey: "location",
  },
  { criteria: "Price", placeholder: "Choose Range", stateKey: "price" },
  {
    criteria: "Listing Type",
    placeholder: "Select Type",
    stateKey: "listingType",
  },
];

export default function HomeHero() {
  const [location, setLocation] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [listingType, setListingType] = useState<string>("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>,
    key: string
  ) => {
    const value = e.target.value;
    if (key === "price") {
      setPrice(value);
    } else if (key === "location") {
      setLocation(value);
    } else if (key === "listingType") {
      setListingType(value);
    }
  };

  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center text-white">
      <div className="absolute top-0 left-0 w-full h-[450px] sm:h-[590px] bg-black bg-opacity-65"></div>
      <Image
        src="/kora-home-bg.jpeg"
        alt="hero"
        height={450}
        width={1200}
        className="w-full h-[450px] sm:h-[590px] object-cover"
      />
      <div className="container mx-auto">
        <div className="absolute px-3 sm:px-4 lg:px-0 top-[40%] -translate-x-1/3 left-1/3 lg:left-1/2 transform lg:-translate-x-1/2 lg:-translate-y-1/2 max-w-[777px] w-full text-center flex items-center flex-col">
          <div className="mb-4">
            <h1 className="text-[20px] sm:text-2xl lg:mb-4 lg:text-[32px] w-full lg:leading-[50px] tracking-[2%] ">
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
            className={`flex flex-col sm:flex-row justify-between bg-white py-4 lg:py-2 px-2 sm:px-8 lg:px-4 rounded-lg shadow-lg sm:shadow-none sm:rounded-full text-black w-full max-w-[650px] ${cabin.className}`}
          >
            <ul className="flex flex-col sm:flex-row gap-4 justify-between text-[14px] mr-2 lg:mr-8 w-full lg:rounded-full">
              {SearchCriteria.map((criteria, index) => (
                <li
                  key={index}
                  className="flex flex-col items-center text-left lg:border-r-[1px] lg:pr-2 last:border-none border-black"
                >
                  <span className="text-left w-full text-[16px] font-medium sm:text-[14px]">
                    {criteria.criteria}
                  </span>
                  <select
                    value={
                      criteria.stateKey === "location"
                        ? location
                        : criteria.stateKey === "price"
                        ? price
                        : listingType
                    }
                    onChange={(e) => handleInputChange(e, criteria.stateKey)}
                    className="mr-auto outline-none border-none text-gray-500 cursor-pointer"
                  >
                    <option value="">{criteria.placeholder}</option>
                    {criteria.stateKey === "location" &&
                      states.map((state) => (
                        <option key={state} value={state}>
                          {state}
                        </option>
                      ))}
                    {criteria.stateKey === "price" &&
                      priceRanges.map((range) => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    {criteria.stateKey === "listingType" &&
                      listingTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                  </select>
                </li>
              ))}
            </ul>
            <a href={`/searchlisting?location=${location}&price=${price}&listingType=${listingType}`}>
              <button className="bg-[#D2691E] w-full lg:w-auto text-white ml-auto mt-8 sm:mt-auto px-4 py-2 sm:rounded-full rounded-lg">
                <span className="flex gap-2 justify-center mx-auto">
                  <MdSearch className="text-2xl" />
                  <span className="hidden md:block"> Search</span>
                </span>
              </button>
            </a>
          </div>
        </div>
        <div className="absolute hidden lg:flex bottom-8 left-0 w-full justify-center py-4 px-8 items-center">
          <a href="/feed">
            <button className="bg-[#D2691E] text-white px-6 py-4 rounded-full">
              <span className={`flex gap-2 ${cabin.className}`}>
                <MdMap className="text-2xl" /> View Map
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
