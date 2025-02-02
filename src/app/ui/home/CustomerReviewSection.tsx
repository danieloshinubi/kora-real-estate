import React from "react";
import { cabin } from "../fonts";
import { useState } from "react";

import TestimonialCard from "../components/TestimonialCard";
import { MdChevronLeft } from "react-icons/md";

export default function CustomerReviewSection() {
  const [slice, setSlice] = useState([0, 2]);

  const nextSlice = (num: number) => {
    const newSlice = [...slice];
    const arrayLength = 4; // Replace with the actual length of your reviews array

    newSlice[0] = (newSlice[0] + num) % arrayLength - 2;
    newSlice[1] = (newSlice[1] + num) % arrayLength;


    // if (newSlice[0] === arrayLength - 1) {
    //   newSlice[1] = 0;
    // }

    // if (newSlice[1] === arrayLength + 1) {
    //   newSlice[1] = 2;
    // }

    console.log(newSlice);
    setSlice(newSlice);
  };

  return (
    <section className='py-8 px-4 lg:flex justify-between'>
      <div className='gap-4 lg:max-w-[460px]'>
        <h2 className='text-[28px] font-bold text-gray-800'>
          Customer Reviews
        </h2>
        <p className={`text-gray-500 mt-2 text-[16px] ${cabin.className}`}>
          Lorem ipsum dolor sit amet consectetur. Tempus semper suspendisse
          semper nunc blandit at ac luctus. Viverra diam in sit ultrices in et
          proin lorem ipsum. Feugiat etiam scelerisque aliquet vitae mauris
          ornare quis eget tincidunt. Sapien aliquet aliquet ut curabitur.
          Aliquet leo arcu tellus.
        </p>
        <button
          className={`${cabin.className} bg-[#D2691E] text-white py-[10px] px-[18px] mt-12 rounded-[6px] w-full max-w-[204px]`}
        >
          View More
        </button>
      </div>
      <div className="lg:flex gap-2 lg:gap-6 items-center mt-16 lg:mt-0">
        <TestimonialCard slice={slice} />
        <div className='h-full lg:flex flex-col items-center justify-center gap-6'>
          <button
            onClick={() => nextSlice(1)}
            className='bg-[#D2691E] text-white rounded-full p-2 lg:p-4'
          >
            <MdChevronLeft className='rotate-90 text-[32px]' />
          </button>
          <button
            onClick={() => nextSlice(-1)}
            className='bg-[#D2691E] text-white rounded-full p-2 lg:p-4'
          >
            <MdChevronLeft className='-rotate-90 text-[32px]' />
          </button>
        </div>
      </div>
    </section>
  );
}
