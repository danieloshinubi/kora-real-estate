"use client";
import { useUser } from "../context/UserContext";
import Navbar from "../ui/Navbar";
import Footer from "../ui/components/Footer";
import FavouritesSection from "../ui/favorites/FavouritesSection";
import withAuth from "../ui/hoc/withAuth";

function Favourites() {
  const { user } = useUser();
  return (
    <div className=''>
      <div className='text-[#8B3A2D]'>
        <Navbar user={user} theme='dark' />
      </div>

      <div className='relative container mx-auto px-6 lg:px-24 w-full'>
        <FavouritesSection />
      </div>

      <Footer />
    </div>
  );
}

export default withAuth(Favourites);
