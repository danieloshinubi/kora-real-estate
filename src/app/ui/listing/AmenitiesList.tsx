import {
  FaSwimmingPool,
  FaParking,
  FaWifi,
  FaDumbbell,
  FaVideo,
  FaSnowflake,
  FaTv,
  FaDog,
  FaHome,
  FaUtensils,
  FaBed,
  FaShower,
} from "react-icons/fa";
import { cabin } from "../fonts";
import { Amenity } from "@/types/listingtype";
import { FaKitchenSet } from "react-icons/fa6";

type AmenitiesListProps = {
  amenitiesList: Amenity[];
};
export default function AmenitiesList({ amenitiesList }: AmenitiesListProps) {
  const amenities = [
    { name: "Kitchen", icon: <FaUtensils /> },
    { name: "Car Parking", icon: <FaParking /> },
    { name: "Wifi & Telephone Services", icon: <FaWifi /> },
    { name: "Swimming Pool", icon: <FaSwimmingPool /> },
    { name: "Gym", icon: <FaDumbbell /> },
    { name: "CCTV Surveillance", icon: <FaVideo /> },
    { name: "Air Conditioning", icon: <FaSnowflake /> },
    { name: "Cable TV and IPTV Service", icon: <FaTv /> },
    { name: "Backyard Space", icon: <FaHome /> },
    { name: "Pets Allowed", icon: <FaDog /> },
    { name: "Bed", icon: <FaBed /> },
    { name: "Shower", icon: <FaShower /> },
    { name: "kitchen", icon: <FaKitchenSet /> },
  ];

  const filteredAmenities = amenities.filter((amenity) =>
    amenitiesList.some((item) => item.name === amenity.name)
  );

  return (
    <div className='max-w-3xl mx-auto flex flex-col pb-12'>
      <h2 className='text-[24px] font-semibold text-[#8B3A2D] py-6 mb-4'>
        Amenities offered
      </h2>
      <div className={`${cabin.className} grid sm:grid-cols-2 gap-y-4`}>
        {filteredAmenities.map((amenity, index) => (
          <div
            key={index}
            className='flex items-center space-x-2 text-[16px] font-semibold'
          >
            <span className='text-lg'>{amenity.icon}</span>
            <span>{amenity.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
