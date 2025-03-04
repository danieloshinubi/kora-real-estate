import React, { useState } from "react";
import { cabin } from "@/app/ui/fonts";
import Tabs from "../components/Tabs";
import Listings from "../components/Listings";

const CountryOutreachSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("South - West");

  const regions: string[] = [
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
      <h2 className='text-[18px] sm:text-[20px] lg:text-[28px] font-bold text-gray-800'>
        Country Outreach
      </h2>
      <p className={`text-gray-500 mt-2 text-[16px] ${cabin.className}`}>
      Expanding real estate opportunities across borders with seamless connections.
      </p>
      <Tabs
        regions={regions}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <Listings listings={listings} />
    </section>
  );
};

export default CountryOutreachSection;
