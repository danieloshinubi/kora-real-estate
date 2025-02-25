import HomeCategory from "./HomeCategory";

interface CategoryGridProps {
  categoryListing: {
    _id: string;
    name: string;
  }[];
}

function getRandomCategories(
  categories: { _id: string; name: string }[],
  count: number
) {
  const shuffled = [...categories].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export default function CategoryGrid({ categoryListing }: CategoryGridProps) {
  const randomCategories = getRandomCategories(categoryListing, 5);

  return (
    <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  px-0 md:p-0 gap-4  mt-6'>
      {randomCategories.map((category) => (
        <HomeCategory
          title={category.name}
          key={category.name}
          imageUrl={`/${category.name.toLowerCase().replace(" ", "-")}.jpg`}
        />
      ))}
    </div>
  );
}
