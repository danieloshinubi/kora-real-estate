"use client";
import { useUser } from "./context/UserContext";

import Navbar from "./ui/Navbar";
import HomeHero from "./ui/home/HomeHero";

import PropertyTypesSection from "./ui/home/PropertyTypesSection";
import HouseListingSection from "./ui/home/HouseListingSection";

import CustomerReviewSection from "./ui/home/CustomerReviewSection";
import FinalSection from "./ui/home/FinalSection";
import CountryOutreachSection from "./ui/home/CountryOutreachSection";

import Footer from "./ui/components/Footer";

export default function Home() {
  // const { user, userProfileData } = useUser();
  const { user } = useUser();

  // console.log("From Home:", userProfileData)

  
  //get the user profile and store it

  return (
    <div className=''>
      <Navbar user={user}/>
      <HomeHero />
      <div className='container mx-auto px-4 sm:px-8 md:px-12 lg:px-24'>
        <HouseListingSection />
        <PropertyTypesSection />
        <CountryOutreachSection />
        <CustomerReviewSection />
        <FinalSection />
      </div>
      <Footer />
    </div>
  );
}
