import React, { useState } from "react";
import Image from "next/image";
import { cabin } from "../fonts";

const CountryOutreachSection = () => {
  const [activeTab, setActiveTab] = useState("South - West");

  const regions = [
    "South - West",
    "South - East",
    "South - South",
    "North - West",
    "North - Central",
    "North - East",
  ];

  const listings = [
    { name: "Lagos", image: "/lagos.png", count: 400 },
    { name: "Ogun", image: "/ogun.png", count: 400 },
    { name: "Osun", image: "/osun.png", count: 400 },
    { name: "Oyo", image: "/oyo.png", count: 400 },
    { name: "Ondo", image: "/ondo.png", count: 400 },
  ];

  return (
    <section className='py-8 '>
      <h2 className='text-[28px] font-bold text-gray-800'>Country Outreach</h2>
      <p className={`text-gray-500 mt-2 text-[16px] ${cabin.className}`}>
        Lorem ipsum dolor sit amet consectetur.
      </p>

      {/* Tabs */}
      <div className='hidden sm:flex mt-8 overflow-x-auto border-b border-gray-300'>
        {regions.map((region) => (
          <button
            key={region}
            className={`lg:px-4 py-2 text-[12px] lg:text-[16px] ${
              activeTab === region
                ? "text-white bg-[#2F4F4F] rounded-t-lg"
                : "text-black"
            }`}
            onClick={() => setActiveTab(region)}
          >
            {region}
          </button>
        ))}
      </div>

      {/* Listings */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8'>
        {listings.map((listing) => (
          <div
            key={listing.name}
            className='flex flex-col gap-4 overflow-hidden'
          >
            <div className='flex relative w-full h-[189px]'>
              <Image
                src={listing.image}
                alt={listing.name}
                fill
                className='w-full object-cover rounded-lg'
              />
            </div>

            <div className='flex justify-between text-center'>
              <h3 className='text-[16px] font-semibold'>{listing.name}</h3>
              <p className='text-sm text-gray-500'>
                ({listing.count} Listings)
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CountryOutreachSection;
