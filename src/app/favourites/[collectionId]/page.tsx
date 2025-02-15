"use client";
import { useParams } from "next/navigation";
import { collections } from "@/app/utils/FavoriteCollection";
import { notFound } from "next/navigation";
import CollectionDetailsSection from "@/app/ui/favorites/CollectionDetailsSection";
import { useUser } from "@/app/context/UserContext";
import Navbar from "@/app/ui/Navbar";
import Footer from "@/app/ui/components/Footer";
import Link from "next/link";
import { cabin } from "@/app/ui/fonts";
import {  FaChevronLeft } from "react-icons/fa6";

const CollectionPage = () => {
  const { user } = useUser();
  const params = useParams(); // Get route params
  const collectionId = params?.collectionId as string; // Cast collectionId to string

  // Find the correct collection
  const collection = collections.find((col) => col.id === collectionId);

  if (!collection) return notFound(); // Show 404 if not found

  return (
    <div className=''>
      <div className='text-[#8B3A2D]'>
        <Navbar user={user} theme='dark' />
      </div>

      <div className='relative container mx-auto px-6 lg:px-24 w-full'>
        <Link href='/favourites' passHref>
          <div className={`${cabin.className} text-[16px] mt-32 px-6 flex items-center`}>
            <FaChevronLeft  />

            <h2 className=''>Favorites</h2>
          </div>
        </Link>
        <CollectionDetailsSection collection={collection} />
      </div>

      <Footer />
    </div>
  );
};

export default CollectionPage;
