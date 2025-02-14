"use client";
import { useUser } from "../context/UserContext";
import Navbar from "../ui/Navbar";
import Footer from "../ui/components/Footer";
import FavouritesSection from "../ui/favorites/FavouritesSection";

export default function Favourites() {
  const { user } = useUser();
  return (
    <div>
      <div className="text-[#8B3A2D]">
        <Navbar user={user} theme="dark"/>
      </div>
      
      <div className='relative container mx-auto h-[500px] w-full'>
        <FavouritesSection/>
      </div>

      <Footer />
    </div>
  );
}
