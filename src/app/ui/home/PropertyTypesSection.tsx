import SectionHeader from "../components/SectionHeader";
import CategoryGrid from "../components/CategoryGrid";
import { useGetPropertyTypesQuery } from "@/app/utils/services/api";

export default function PropertyTypesSection() {
  const { data: propertyTypes = [], isLoading, error } = useGetPropertyTypesQuery();

  if (isLoading) return <div>Loading...</div>;

  if (error) console.log(error)

  return (
    <div className='pt-6 pb-12 '>
      <SectionHeader />
      <CategoryGrid categoryListing={propertyTypes}/>
    </div>
  );
}
