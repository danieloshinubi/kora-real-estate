"use client";
import { useSearchParams } from "next/navigation";
import { useUser } from "../context/UserContext";
import Navbar from "../ui/Navbar";
import Footer from "../ui/components/Footer";
import ListingFinder from "../ui/searchlisting/ListingFinder";
import SearchComponent from "../ui/searchlisting/SearchComponent";

// import { houseListings } from "../utils/MapHouseListing";

export default function SearchListing() {
  const { user } = useUser();

  return (
    <div className="relative flex flex-col">
      <Navbar user={user} theme="dark" />
      <div className="relative container pl-24 py-20 mx-auto w-full">
        {/* <SearchComponent/> */}
        <ListingFinder
        />
      </div>

      <Footer />
    </div>
  );
}
