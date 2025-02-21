import Image from "next/image";
import { cabin, inknutAntiqua } from "../fonts";

export default function BathroomDetails() {
  return (
    <div className='max-w-3xl mx-auto flex flex-col space-y-6 pb-12'>
      {/* Title */}
      <h2
        className={`${inknutAntiqua.className} text-[24px] font-semibold text-[#8B3A2D]`}
      >
        Bedrooms and Bathrooms
      </h2>
      {/* Bedrooms Section */}
      <div className='grid grid-cols-2 gap-6'>
        {/* Bedroom 1 */}
        <div>
          <Image
            src='/bed.jpeg' // Update with actual image path
            alt='Bedroom 1'
            width={300}
            height={200}
            className='rounded-lg'
          />
          <h3 className='text-lg font-bold mt-2'>Bedroom 1</h3>
          <p className={`${cabin.className} text-gray-600 text-[16px]`}>
            King Size Bed
          </p>
        </div>

        {/* Bedroom 2 */}
        <div>
          <Image
            src='/bed.jpeg' // Update with actual image path
            alt='Bedroom 2'
            width={300}
            height={200}
            className='rounded-lg'
          />
          <h3 className='text-lg font-bold mt-2'>Bedroom 2</h3>
          <p className={`${cabin.className} text-gray-600`}>Queen Size Bed</p>
        </div>
      </div>

      {/* Bathroom Section */}
      <div className='grid grid-cols-2 gap-6'>
        <div className='mt-6'>
          <Image
            src='/bed.jpeg' // Update with actual image path
            alt='Bathroom 1'
            width={600}
            height={300}
            className='rounded-lg'
          />
          <h3 className='text-lg font-bold mt-2'>Bathroom 1</h3>
          <p className={`${cabin.className} text-gray-600`}>
            Equipped with a bathtub, bidet, and two washing hand basins.
          </p>
        </div>
      </div>
    </div>
  );
}
