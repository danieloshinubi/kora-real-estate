import React from "react";
import { cabin } from "../fonts";

export default function FinalSection() {
  return (
    <section className='pt-24 pb-64 flex justify-between'>
      <div className='gap-4'>
        <h2 className='text-[18px] sm:text-[20px] lg:text-[28px] font-bold text-gray-800'>
          Country Outreach
        </h2>
        <p className={` mt-2 text-[16px] ${cabin.className}`}>
          Our Country Outreach initiative expands real estate opportunities
          beyond borders, connecting buyers, sellers, and investors with
          properties in diverse locations. Whether you&apos;re looking for a
          vacation home, an investment property, or a commercial space in a new
          market, we make international real estate transactions seamless. With
          a network of trusted partners and verified listings, we ensure
          transparency, reliability, and accessibility for clients exploring
          global real estate options.
        </p>
        <p className={` mt-2 text-[16px] ${cabin.className}`}>
          Through strategic collaborations and in-depth market insights, we help
          individuals and businesses find the right spaces to suit their needs.
          Our outreach extends to emerging and established markets, offering
          tailored solutions that align with local regulations and investment
          potential. Whether you&apos;re relocating, expanding your portfolio,
          or seeking a second home, our platform provides the resources and
          support needed to make informed decisions with confidence.
        </p>
      </div>
    </section>
  );
}
