import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function ImageGallery() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mt-4 w-full rounded-lg'>
      {/* Large Image */}
      <div className='relative col-span-1 h-full'>
        <Image
          src='/lodge.jpg'
          alt='Main'
          fill
          className='w-full h-full object-cover rounded-l-lg '
        />
      </div>

      {/* Right Section with Four Images */}
      <div className='hidden md:grid md:grid-cols-2 gap-2 col-span-1'>
        <div className='relative h-[177px]'>
          <Image
            src='/lodge.jpg'
            alt='Gallery'
            fill
            className='w-full h-full object-cover'
          />
        </div>
        <div className='relative h-[177px]'>
          <Image
            src='/lodge.jpg'
            alt='Gallery'
            fill
            className='w-full h-full object-cover rounded-tr-lg'
          />
        </div>
        <div className='relative h-[177px]'>
          <Image
            src='/lodge.jpg'
            alt='Gallery'
            fill
            className='w-full h-full object-cover'
          />
        </div>

        {/* Last Image with Overlayed "Show More" Button */}
        <div className='relative h-[177px]'>
          <Image
            src='/lodge.jpg'
            alt='Gallery'
            fill
            className='w-full h-full object-cover rounded-br-lg'
          />
        </div>
      </div>
      <div className='md:hidden'>
        <Carousel>
          <div className='relative h-[257px]'>
            <Image
              src='/lodge.jpg'
              alt='Gallery'
              fill
              className='w-full h-full object-cover  rounded-lg'
            />
          </div>
          <div className='relative h-[257px]'>
            <Image
              src='/lodge.jpg'
              alt='Gallery'
              fill
              className='w-full h-full object-cover rounded--lg'
            />
          </div>
          <div className='relative h-[257px]'>
            <Image
              src='/lodge.jpg'
              alt='Gallery'
              fill
              className='w-full h-full object-cover  rounded-lg'
            />
          </div>

          {/* Last Image with Overlayed "Show More" Button */}
          <div className='relative h-[257px]'>
            <Image
              src='/lodge.jpg'
              alt='Gallery'
              fill
              className='w-full h-full object-cover rounded-lg'
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
