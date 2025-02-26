import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

type ImageGalleryProps = {
  listingImg: {
    _id: string;
    fileUrl: string;
  }[];
};

export default function ImageGallery({ listingImg }: ImageGalleryProps) {
  console.log(listingImg);
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mt-4 w-full rounded-lg'>
      {/* Large Image */}
      <div className='relative col-span-1 h-full'>
        <Image
          src={`${listingImg[1].fileUrl}`}
          alt='Main'
          fill
          className='w-full h-full object-cover rounded-l-lg '
        />
      </div>

      {/* Right Section with Four Images */}
      <div className='hidden md:grid md:grid-cols-2 gap-y-1 gap-x-2 col-span-1'>
        {[...Array(4).fill(listingImg[0].fileUrl)].map((imgUrl, i) => (
          <div className='relative h-[177px]' key={i}>
            <Image
              src={imgUrl}
              alt='Gallery'
              fill
              className={`w-full h-full object-cover ${i !== 0 && i !== 2 ? (i === 1 ? "rounded-tr-lg" : "rounded-br-lg") : "rounded-none"}`}
            />
          </div>
        ))}
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
