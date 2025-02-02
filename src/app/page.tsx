"use client";
// import { useUser } from "./context/UserContext";
import Navbar from "./ui/Navbar";
import HomeCategoriesSection from "./ui/home/HomeCategoriesSection";
import HomeHero from "./ui/home/HomeHero";
import HouseListingSection from "./ui/home/HouseListingSection";
import Footer from "./ui/components/Footer";
import CustomerReviewSection from "./ui/home/CustomerReviewSection";
import FinalSection from "./ui/home/FinalSection";
import CountryOutreachSection from "../../components/CountryOutreachSection";

export default function Home() {
  // const { user } = useUser();
  // console.log(user);
  return (
    <div className=''>
      <Navbar />
      <HomeHero />
      <div className='container mx-auto px-4 sm:px-8 md:px-12 lg:px-24'>
        <HouseListingSection />
        <HomeCategoriesSection/>
        <CountryOutreachSection/>
        <CustomerReviewSection/>
        <FinalSection/>
      </div>
      <Footer/>
    </div>
  );
}
