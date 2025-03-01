import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { cabin, inknutAntiqua } from "../../fonts";

const FilterPanelSkeleton: React.FC = () => {
  return (
    <div
      className={`${cabin.className} space-y-6 bg-white rounded-lg text-[14px]`}
    >
      <div className='flex items-center justify-between'>
        <h2 className={`${inknutAntiqua.className}`}>
          <Skeleton width={100} />
        </h2>
        <div className='flex items-center text-gray-500'>
          <Skeleton circle={true} height={20} width={20} />
          <span className='ml-2'>
            <Skeleton width={80} />
          </span>
        </div>
      </div>
      <div className='space-y-4'>
        <Skeleton height={24} />
        <Skeleton height={24} />
        <Skeleton height={24} />
        <Skeleton height={24} />
        <Skeleton height={24} />
      </div>
    </div>
  );
};

export default FilterPanelSkeleton;
