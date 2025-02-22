import Header from "./Header";
import ImageGallery from "./ImageGallery";
import Tabs from "./Tab";
import AboutSection from "./AboutSection";
import PriceCard from "./PriceCard";
import BedroomDetails from "./BedroomDetails";
import AmenitiesList from "./AmenitiesList";
import NearbyLocations from "./NearbyLocations";
import PropertyOwner from "./PropertyOwner";

export default function ListingPage() {
  return (
    <div className='container mx-auto md:p-4'>
      <Header />
      <ImageGallery />
      <Tabs />
      <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-6 mt-6'>
        <div className='sm:col-span-1 md:col-span-2 space-y-6'>
          <AboutSection />
          <BedroomDetails />
          <AmenitiesList />
        </div>
        <PriceCard />
      </div>
      <NearbyLocations />
      <PropertyOwner />
    </div>
  );
}
