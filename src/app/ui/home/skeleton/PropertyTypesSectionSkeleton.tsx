import Skeleton from "react-loading-skeleton";
import SectionHeader from "../../components/SectionHeader";

export default function PropertyTypesSectionSkeleton() {
  return (
    <div className='pt-6 pb-12 '>
      <SectionHeader />
      <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  px-0 md:p-0 gap-4  mt-6'>
        {[...Array(5)].map((_, index) => (
          <div
            className='relative w-full lg:max-w-[212px] h-64 rounded-lg sm:mx-0 overflow-hidden shadow-md group'
            key={index}
          >
            <Skeleton
              height='100%'
              className='object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out'
            />
            {/* Title */}
            <div className='absolute bottom-4 left-4 text-white text-lg font-semibold'>
              .......
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
