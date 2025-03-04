import { useState, useEffect } from "react";
import Image from "next/image";
import { cabin } from "../fonts";
import { FaHeart } from "react-icons/fa6";
import Link from "next/link";
import { useUser } from "@/app/context/UserContext";
import {
  useAddFavoriteMutation,
  useRemoveFavoritesMutation,
} from "@/app/utils/services/api";
import { useRouter } from "next/navigation";
import { Location } from "@/types/listingtype";

interface CardProps {
  image: string;
  _id: string;
  propertyType: string;
  rating: number;
  title: string;
  location: Location;
  bedrooms: number;
  bathrooms: number;
  price: number;
}

interface address {
  city: string;
  state: string;
  country_code: string;
  town: string;
  county: string;
  postcode: string;
  country: string;
}

const PropertyCard: React.FC<CardProps> = ({
  image,
  _id,
  propertyType,
  rating,
  title,
  location,
  bedrooms,
  bathrooms,
  price,
}) => {
  const [favorite, setFavorite] = useState(false);
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
      //Remove to favorite
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

  const [address, setAddress] = useState<address | null>(null);

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
      setAddress(data.address || "Address not found");

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
      <div className=' bg-white overflow-hidden'>
        {/* Image Section */}
        <div className='relative'>
          <div className='relative w-full h-48'>
            <Image
              src={image}
              alt={title}
              fill
              className='object-cover rounded-lg'
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            />
          </div>
          <button className='absolute top-3 right-3 p-2'>
            <FaHeart
              className={`${favorite ? "text-[#D2691E]" : "text-white"} text-2xl`}
              onClick={toggleFavorite}
            />
          </button>
        </div>

        {/* Content Section */}
        <div className='py-4'>
          {/* propertyType and Rating */}
          <div className='flex justify-between items-center'>
            <span
              className={`px-3 py-1 bg-gray-800 text-white rounded-full text-[12px] ${cabin.className}`}
            >
              {propertyType}
            </span>
            <div className='flex items-center space-x-1'>
              <span
                className={`text-[14px] font-bold text-gray-800 ${cabin.className} `}
              >
                {rating}
              </span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 24 24'
                className='h-5 w-5 text-yellow-400'
              >
                <path d='M12 17.27l5.18 3.73-1.64-6.81L22 9.24l-6.87-.61L12 2 8.87 8.63 2 9.24l5.46 4.95L5.82 21z' />
              </svg>
            </div>
          </div>

          {/* Title */}
          <h3 className='mt-3 text-[16px] leading-[21px] font-semibold text-gray-900'>
            {title}
          </h3>
          <p className={`text-[14px] ${cabin.className} text-gray-500`}>
            {address?.county || address?.town || address?.city || ""},{" "}
            {address?.state || ""}
          </p>

          {/* Features */}
          <div className='flex items-center space-x-4 mt-3 text-gray-600 text-sm'>
            <div className='flex items-center space-x-1'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-5 w-5'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M21 21V5a2 2 0 00-2-2H5a2 2 0 00-2 2v16m18-3H3'
                />
              </svg>
              <span>{bedrooms}</span>
            </div>
            <div className='flex items-center space-x-1'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-5 w-5'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15.75 9V3.75a.75.75 0 00-1.5 0V9h1.5zM9.75 3.75V9h1.5V3.75a.75.75 0 00-1.5 0z'
                />
              </svg>
              <span>{bathrooms}</span>
            </div>
          </div>

          {/* Price */}
          <div
            className={`${cabin.className} mt-3 text-[18px] font-bold text-[#8B3A2D]`}
          >
            NGN {price}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
