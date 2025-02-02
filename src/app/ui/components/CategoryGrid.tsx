import categoryListing from "@/app/utils/HomeCategoryListing";
import HomeCategory from "./HomeCategory";

export default function CategoryGrid() {
  return (
    <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  px-0 md:p-0 gap-4  mt-6'>
      {categoryListing.map((category) => (
        <HomeCategory
          title={category.title}
          key={category.title}
          imageUrl={category.imageUrl}
        />
      ))}
    </div>
  );
}
