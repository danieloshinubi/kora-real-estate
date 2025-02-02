import React from "react";

interface TabsProps {
  regions: string[];
  activeTab: string;
  setActiveTab: (region: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ regions, activeTab, setActiveTab }) => {
  return (
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
  );
};

export default Tabs;
