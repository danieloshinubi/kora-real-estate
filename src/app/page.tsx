"use client";
// import { useUser } from "./context/UserContext";
import Navbar from "./ui/Navbar";
import HomeCategoriesSection from "./ui/home/HomeCategoriesSection";
import HomeHero from "./ui/home/HomeHero";
import HouseListingSection from "./ui/home/HouseListingSection";
import Footer from "./ui/components/Footer";
import CountryOutreachSection from "./ui/home/CountryOutreachSection";

export default function Home() {
  // const { user } = useUser();
  // console.log(user);
  return (
    <div className=''>
      <Navbar />
      <HomeHero />
      <div className='container mx-auto px-12'>
        <HouseListingSection />
        <HomeCategoriesSection/>
        <CountryOutreachSection/>
      </div>
      <Footer/>
    </div>
  );
}
