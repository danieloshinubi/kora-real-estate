import Image from "next/image";
import Link from "next/link";

type HomeCategoryProps = {
  title: string;
  imageUrl: string;
};

const HomeCategory: React.FC<HomeCategoryProps> = ({ title, imageUrl }) => {
  return (
  <Link href={`/searchlisting?location=&price=&listingType=${title}`} passHref>
      <div className='relative w-full lg:max-w-[212px] h-64 rounded-lg sm:mx-0 overflow-hidden shadow-md group'>
        {/* Background Image */}
        <Image
          src={imageUrl}
          alt={title}
          fill
          className='object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out'
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        />
        {/* Overlay */}
        <div className='absolute inset-0 bg-black/50 group-hover:bg-black/30 transition duration-300' />
        {/* Title */}
        <div className='absolute bottom-4 left-4 text-white text-lg font-semibold'>
          {title}
        </div>
      </div>
    </Link>
  );
};

export default HomeCategory;
