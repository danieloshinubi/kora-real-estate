import Image from "next/image";
import { cabin, inknutAntiqua } from "../fonts";

interface BedroomProps {
  imageSrc: string;
  altText: string;
  title: string;
  description: string;
}

interface BathroomProps {
  imageSrc: string;
  altText: string;
  title: string;
  description: string;
}

function Bedroom({ imageSrc, altText, title, description }: BedroomProps) {
  return (
    <div>
      <Image
        src={imageSrc}
        alt={altText}
        width={300}
        height={200}
        className='rounded-lg'
      />
      <h3 className='text-lg font-bold mt-2'>{title}</h3>
      <p className={`${cabin.className} text-gray-600 text-[16px]`}>
        {description}
      </p>
    </div>
  );
}

function Bathroom({ imageSrc, altText, title, description }: BathroomProps) {
  return (
    <div className='mt-6'>
      <Image
        src={imageSrc}
        alt={altText}
        width={300}
        height={200}
        className='rounded-lg'
      />
      <h3 className='text-lg font-bold mt-2'>{title}</h3>
      <p className={`${cabin.className} text-gray-600`}>{description}</p>
    </div>
  );
}

export default function BathroomDetails() {
  return (
    <div className='max-w-3xl mx-auto flex flex-col space-y-6 pb-12'>
      {/* Title */}
      <h2
        className={`${inknutAntiqua.className} text-[20px] md:text-[24px] font-semibold text-[#8B3A2D]`}
      >
        Bedrooms and Bathrooms
      </h2>
      {/* Bedrooms Section */}
      <div className='grid xs:grid-cols-1 sm:grid-cols-2 gap-6'>
        <Bedroom
          imageSrc='/bed.jpeg'
          altText='Bedroom 1'
          title='Bedroom 1'
          description='King Size Bed'
        />
        <Bedroom
          imageSrc='/bed.jpeg'
          altText='Bedroom 2'
          title='Bedroom 2'
          description='Queen Size Bed'
        />
      </div>

      {/* Bathroom Section */}
      <div className='grid xs:grid-cols-1 sm:grid-cols-2 gap-6'>
        <Bathroom
          imageSrc='/bed.jpeg'
          altText='Bathroom 1'
          title='Bathroom 1'
          description='Equipped with a bathtub, bidet, and two washing hand basins.'
        />
      </div>
    </div>
  );
}
