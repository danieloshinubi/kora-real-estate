import { FaBed, FaShower} from "react-icons/fa6";
import { cabin, inknutAntiqua } from "../../fonts";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Tabs from "../Tab";
import NearbyLocations from "../NearbyLocations";
import PropertyOwner from "../PropertyOwner";
import BathroomDetails from "../BedroomDetails";

export function HeaderSkeleton() {
  return (
    <div className='' id='Overview'>
      <Skeleton baseColor='#7f7c7c' highlightColor='#b0aeae' height={20} />
    </div>
  );
}

export function ImageGallerySkeleton() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-2 text-[#7f7c7c] mt-4 w-full rounded-lg'>
      {/* Large Image */}
      <div className='relative col-span-1 h-full'>
        <Skeleton baseColor='#7f7c7c' highlightColor='#b0aeae' height={"100%"} />
      </div>

      {/* Right Section with Four Images */}
      <div className='hidden md:grid md:grid-cols-2 gap-y-1 gap-x-2 col-span-1'>
        {[...Array(4).fill("*")].map((imgUrl, i) => (
          <div className='relative h-[177px]' key={i}>
            <Skeleton baseColor='#7f7c7c' highlightColor='#b0aeae' height={"100%"}/>
          </div>
        ))}
      </div>

      <div className='md:hidden'>
        <Skeleton baseColor='#7f7c7c' highlightColor='#b0aeae' height={257} />
      </div>
    </div>
  );
}

export function AboutSectionSkeleton() {
  return (
    <div
      className={`${cabin.className} flex flex-col gap-4 md:gap-6 py-6 pt-0 md:py-12`}
      id='Location'
    >
      {/* Header */}
      <div className='sm:flex justify-between items-start'>
        <h2
          className={`${inknutAntiqua.className}  text-[20px] md:text-[24px] mb-4 font-semibold text-[#8B3A2D]`}
        >
          About this location
        </h2>
        <Skeleton baseColor='#7f7c7c' highlightColor='#b0aeae' height={50} />
      </div>

      {/* Description */}
      <Skeleton baseColor='#7f7c7c' highlightColor='#b0aeae' height={20} />
      <Skeleton baseColor='#7f7c7c' highlightColor='#b0aeae' height={20} />
      <Skeleton baseColor='#7f7c7c' highlightColor='#b0aeae' height={20} />

      {/* Show More Button */}
      <button className='text-gray-600 mt-3 flex items-center'>
        <span className='underline'>Show more</span>{" "}
        <span className='ml-1'>&gt;</span>
      </button>
    </div>
  );
}

export function PriceCardSkeleton() {
  return (
    <div className='bg-white md:pt-[30px] md:px-[20px] max-h-[512px] md:max-h-[412px] md:shadow-2xl md:rounded-[20px]'>
      <h2 className='text-[18px] font-bold'>Listing Price</h2>
      <Skeleton baseColor='#7f7c7c' highlightColor='#b0aeae' height={20} />

      <button
        className={`${cabin.className} bg-[#D2691E] text-white px-4 py-2 rounded-md mt-4 w-full`}
      >
        Purchase Now
      </button>
      <ul
        className={`${cabin.className} md:space-y-4 text-[18px] list-none py-4 lg:py-12 border-b-[0.5px]`}
      >
        <li className='flex justify-between text-[16px] font-semibold'>
          <span className=' opacity-50'>Tax for Indoor payment</span>
          <span>NGN 0.000</span>
        </li>
        <li className='flex justify-between text-[16px] font-semibold'>
          <span className=' opacity-50'>Tax for Outdoor payment</span>
          <span>NGN 0.000</span>
        </li>
        <li className='flex justify-between text-[16px] font-semibold'>
          <span className=' opacity-50'>Govt. Servance</span>
          <span>NGN 0.000</span>
        </li>
      </ul>
      <li
        className={`${cabin.className} flex justify-between text-[15px] lg:text-[20px] font-semibold`}
      >
        <span className=' opacity-50'>Total Price</span>
        <Skeleton baseColor='#7f7c7c' highlightColor='#b0aeae' height={20} />
      </li>
    </div>
  );
}

export function AmenitiesListSkeleton() {
  return (
    <div className='max-w-3xl mx-auto flex flex-col pb-12'>
      <h2 className='text-[24px] font-semibold text-[#8B3A2D] py-6 mb-4'>
        Amenities offered
      </h2>
      <div className={`${cabin.className} grid sm:grid-cols-2 gap-y-4`}>
        {[
          { name: "Bed", icon: <FaBed /> },
          { name: "Shower", icon: <FaShower /> },
        ].map((amenity, index) => (
          <div
            key={index}
            className='flex items-center space-x-2 text-[16px] font-semibold'
          >
            <span className='text-lg'>{amenity.icon}</span>
            <span>{amenity.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ListingPageSkeleton() {
  return (
    <div>
      <div className='container mx-auto md:p-4'>
        <HeaderSkeleton />
        <ImageGallerySkeleton />
        <Tabs />
        <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-6 mt-6'>
          <div className='sm:col-span-1 md:col-span-2 space-y-6'>
            <AboutSectionSkeleton />
            <BathroomDetails />
            <AmenitiesListSkeleton />
          </div>
          <PriceCardSkeleton />
        </div>
        <NearbyLocations />
        <PropertyOwner />
      </div>
    </div>
  );
}
