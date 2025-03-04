"use client";
// components/Listings/ListingCard.tsx
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Listing } from "../listingType";
import { FaHeart, FaStar } from "react-icons/fa6";
import { cabin } from "../../fonts";
import Link from "next/link";
import { useUser } from "@/app/context/UserContext";
import {
  useAddFavoriteMutation,
  useRemoveFavoritesMutation,
} from "@/app/utils/services/api";
import { useRouter } from "next/navigation";

interface ListingCardProps {
  listing: Listing;
}

const ListingCard: React.FC<ListingCardProps> = ({ listing }) => {
  const {
    name,
    _id,
    description,
    listingImg,
    propertyType,
    price,
    rating,
    location,
    amenities,
  } = listing;
  const [favorite, setFavorite] = React.useState(false);
  const [addFavorite] = useAddFavoriteMutation();
  const [removeFavorite] = useRemoveFavoritesMutation();

  const { user } = useUser();
  const router = useRouter();

  const addToFavorite = async () => {
    if (user) {
      // Add to favorite
      try {
        const { data } = await addFavorite({ userId: user.id, listingId: _id });
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    } else {
      // Redirect to login
      router.push("/login");
    }
  };

  const removeFromFavorite = async () => {
    if (user) {
      // Remove from favorite
      try {
        const { data } = await removeFavorite({
          userId: user.id,
          listingId: _id,
        });
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    } else {
      // Redirect to login
      router.push("/login");
    }
  };

  const toggleFavorite = () => {
    if (user) {
      if (!favorite) {
        setFavorite(true);
        addToFavorite();
      } else {
        setFavorite(false);
        removeFromFavorite();
      }
    }
  };

  const [state, setState] = useState<string>("");
  console.log(state);
  
  const [address, setAddress] = useState<string>("Loading...");

  // function to get address by longitude and latitude
  async function getAddress(lat: number, lon: number) {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`,
        {
          headers: {
            "User-Agent": "KORA-REAL-ESTATE/1.0 (olusanyajolaoluwa@gmail.com)", // Replace with your app name and email
          },
        }
      );
      const data = await response.json();
      setAddress(data.display_name || "Address not found");

      // Extract state from the address components
      const state = data.address?.state || "state not found";
      setState(state);
    } catch (error) {
      console.error("Error fetching address:", error);
      setState("Error fetching state");
    }
  }

  useEffect(() => {
    getAddress(location.latitude, location.longitude);
  }, [location.latitude, location.longitude]);

  return (
    <Link href={`/propertyinfo/${_id}`} passHref>
      <div className='relative grid grid-cols-3 rounded-md overflow-hidden  bg-white'>
        {/* Image (left column) */}
        <div className='relative col-span-1 w-full'>
          <Image
            src={listingImg?.[0]?.fileUrl}
            alt={name}
            fill
            className='object-cover'
          />

          <button className='absolute top-3 right-3 p-2'>
            <FaHeart
              className={`${favorite ? "text-[#D2691E]" : "text-white"} text-2xl`}
              onClick={toggleFavorite}
            />
          </button>
        </div>

        {/* Main Content (middle + right columns) */}
        <div className='col-span-2 p-4 flex flex-col justify-center'>
          <div className='flex justify-between items-top mb-2'>
            {/* Title */}
            <h3 className='text-[#8B3A2D] font-semibold  text-[14px] mb-1 leading-[-3%]'>
              {name}
            </h3>
            <span
              className={`px-3 py-1 bg-gray-800 max-h-[26px] text-white rounded-full text-[12px] ${cabin.className}`}
            >
              {propertyType.name}
            </span>
          </div>

          {/* Optional short description */}
          <p className={`${cabin.className} text-sm text-gray-600 mb-2`}>
            {address || `24 Lanre Awolokun, Gbagada Phase 2`}
          </p>

          {/* Optional short description */}
          <p className={`${cabin.className} text-sm text-gray-600 mb-2`}>
            {description ||
              `Lorem ipsum dolor sit amet consectetur. Tempus semper suspendisse 
          semper nunc blandit at ac luctus.`}
          </p>

          {/* Bedrooms & Bathrooms */}
          <div
            className={`${cabin.className} flex items-center space-x-4 mb-2`}
          >
            {amenities.map((amenities, index) => (
              <div className='flex items-center space-x-1' key={index}>
                <Image
                  src={amenities.icon.fileUrl}
                  alt={name}
                  height={20}
                  width={20}
                  className='object-cover h-[20px] w-[20px]'
                />
                <span className='text-sm text-gray-700'>{amenities.name}</span>
              </div>
            ))}
          </div>

          <div className='flex justify-between'>
            {/* Star Rating */}
            <div className={`items-center mb-3`}>
              <span className='text-[10px] font-medium mr-2'>Star Rating</span>
              <div className='flex text-[#F4B400]'>
                {...Array(5).fill(<FaStar />)}
                <span className='ml-2 text-sm'>{rating}</span>
              </div>
            </div>

            {/* Price details */}
            <div className='mt-2 text-[10px]'>
              <p className='font-bold text-[#8B3A2D] text-[14px]'>
                ₦{price.toLocaleString()}
              </p>
              <p className={`${cabin.className} text-sm text-gray-500`}>
                ₦ {price.toLocaleString()} total
              </p>
              <p className={`${cabin.className} text-xs text-gray-400`}>
                Includes Taxes and Fees
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ListingCard;
