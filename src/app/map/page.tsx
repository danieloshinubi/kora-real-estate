"use client";
import { useUser } from "../context/UserContext";
import Navbar from "../ui/Navbar";
import Footer from "../ui/components/Footer";
import dynamic from "next/dynamic";

const MapView = dynamic(() => import("../ui/map/MapView"), { ssr: false });

import { houseListings } from "../utils/MapHouseListing";
import HomeHero from "../ui/home/HomeHero";

export default function Map() {
  const { user } = useUser();
  return (
    <div>
      <Navbar user={user} />
      <HomeHero/>
      <div className='relative container mx-auto h-[500px] w-full'>
        <MapView listings={houseListings} />
      </div>

      <Footer />
    </div>
  );
}
