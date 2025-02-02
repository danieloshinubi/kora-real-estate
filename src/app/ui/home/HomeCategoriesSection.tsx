import { cabin } from "../fonts";
import categoryListing from "@/app/utils/HomeCategoryListing";
import HomeCategory from "../components/HomeCategory";

export default function HomeCategoriesSection() {
  return (
    <div className='pt-6 pb-12 '>
      <div className='text-center w-full lg:w-1/2 mx-auto'>
        <h1 className='text-[18px] sm:text-[20px] lg:text-[28px]  leading-[72px]'>
          Find spaces that suit your style
        </h1>
        <p className={`text-gray-600 ${cabin.className} text-[16px]`}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-4  mt-6'>
        {categoryListing.map((category) => (
          <HomeCategory
            title={category.title}
            key={category.title}
            imageUrl={category.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}
