import SectionHeader from "../components/SectionHeader";
import CategoryGrid from "../components/CategoryGrid";
import { useGetPropertyTypesQuery } from "@/app/utils/services/api";
import PropertyTypesSectionSkeleton from "./skeleton/PropertyTypesSectionSkeleton";

export default function PropertyTypesSection() {
  const { data: propertyTypes = [], isLoading, error } = useGetPropertyTypesQuery();

  if (isLoading) return <PropertyTypesSectionSkeleton/>;

  if (error) return  <PropertyTypesSectionSkeleton/>

  return (
    <div className='pt-6 pb-12 '>
      <SectionHeader />
      <CategoryGrid categoryListing={propertyTypes}/>
    </div>
  );
}
