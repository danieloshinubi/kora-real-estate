import Header from "./Header";
import ImageGallery from "./ImageGallery";
import Tabs from "./Tab";
import AboutSection from "./AboutSection";
import PriceCard from "./PriceCard";
import BedroomDetails from "./BedroomDetails";
import AmenitiesList from "./AmenitiesList";
import NearbyLocations from "./NearbyLocations";
import PropertyOwner from "./PropertyOwner";
import { useGetListingsQuery } from "@/app/utils/services/api";
import ListingPageSkeleton, {
  NearbyLocationsSkeleton,
} from "./Skeleton/ListingPageSkeleton";

type ListingPageProps = {
  propertyId: string;
};

export default function ListingPage({ propertyId }: ListingPageProps) {
  const { data: listings = [], isLoading, error } = useGetListingsQuery();

  const listing = listings.find((listing) => listing._id === propertyId);

  if (isLoading || error || !listing) return <ListingPageSkeleton />;

  return (
    <div className='container mx-auto md:p-4'>
      <Header
        title={listing.name || "Title Here"}
        rating={listing.rating || 0}
      />
      <ImageGallery listingImg={listing.listingImg} />
      <Tabs />
      <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-6 mt-6'>
        <div className='sm:col-span-1 md:col-span-2 space-y-6'>
          <AboutSection
            description={listing.description}
            propertyType={listing.propertyType}
          />
          <BedroomDetails />
          <AmenitiesList amenitiesList={listing.amenities} />
        </div>
        <PriceCard price={listing.price} propertyName={listing.name} />
      </div>
      {listing ? (
        <NearbyLocations houseLocation={listing.location} />
      ) : (
        <NearbyLocationsSkeleton />
      )}
      <PropertyOwner />
    </div>
  );
}
