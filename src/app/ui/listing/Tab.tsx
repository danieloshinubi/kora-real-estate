import { useState, useEffect } from "react";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState<string>("Overview");

  useEffect(() => {
    window.location.hash = `#${activeTab}`;
  }, [activeTab]);

  return (
    <div className='hidden md:flex space-x-4 mt-4 border-b'>
      {["Overview","Amenities", "Location", "Comments", "FAQs"].map((tab, index) => (
        <button
          key={index}
          className={`lg:px-4 py-2 text-[12px] lg:text-[16px] ${
            activeTab === tab
              ? "text-white bg-[#2F4F4F] rounded-t-lg"
              : "text-black"
          }`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
