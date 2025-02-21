"use client";
import React from "react";
import Image from "next/image";
import "leaflet/dist/leaflet.css";
import { cabin } from "../fonts";
import Map from "./Map"; // Import your Map component here

export type Location = {
  name: string;
  distance: string;
  description: string;
  image: string;
  coordinates: [number, number];
  city: string;
};

const locations: Location[] = [
  {
    name: "Dominos Pizza",
    distance: "0.4 Kilometers",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tempus semper suspendisse semper",
    image: "/house1.jpg", // Replace with your actual image path
    coordinates: [6.5244, 3.3792], // Lagos coordinates
    city: "Lagos, Nigeria",
  },
  {
    name: "UBA Bank",
    distance: "0.4 Kilometers",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tempus semper suspendisse semper",
    image: "/house1.jpg", // Replace with your actual image path
    coordinates: [6.5275, 3.3845], // Slightly different coords for variation
    city: "Lagos, Nigeria",
  },
  {
    name: "Golden Tulip Hotel",
    distance: "0.4 Kilometers",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tempus semper suspendisse semper",
    image: "/house1.jpg", // Replace with your actual image path
    coordinates: [6.53, 3.39], // Slightly different coords
    city: "Lagos, Nigeria",
  },
  {
    name: "Shoprite",
    distance: "0.5 Kilometers",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tempus semper suspendisse semper",
    image: "/house1.jpg", // Replace with your actual image path
    coordinates: [6.524, 3.38], // Slightly different coords
    city: "Lagos, Nigeria",
  },
  {
    name: "Eko Hotel",
    distance: "0.6 Kilometers",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tempus semper suspendisse semper",
    image: "/house1.jpg", // Replace with your actual image path
    coordinates: [6.521, 3.381], // Slightly different coords
    city: "Lagos, Nigeria",
  },
  {
    name: "Lekki Conservation Centre",
    distance: "1.2 Kilometers",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tempus semper suspendisse semper",
    image: "/house1.jpg", // Replace with your actual image path
    coordinates: [6.515, 3.385], // Slightly different coords
    city: "Lagos, Nigeria",
  },
  {
    name: "Nike Art Gallery",
    distance: "1.5 Kilometers",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tempus semper suspendisse semper",
    image: "/house1.jpg", // Replace with your actual image path
    coordinates: [6.51, 3.39], // Slightly different coords
    city: "Lagos, Nigeria",
  },
  {
    name: "National Museum Lagos",
    distance: "2.0 Kilometers",
    description:
      "Lorem ipsum dolor sit amet consectetur. Tempus semper suspendisse semper",
    image: "/house1.jpg", // Replace with your actual image path
    coordinates: [6.5, 3.395], // Slightly different coords
    city: "Lagos, Nigeria",
  },
];

export default function NearbyLocations() {
  return (
    <section className='max-w-6xl mx-auto py-8'>
      {/* Top heading (optional) */}
      <h2 className='text-[#8B3A2D] text-xl font-semibold'>Location</h2>
      <h3 className={`${cabin.className} text-[36px] mb-6`}>
        Nearby Popular Locations
      </h3>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {/* Left Section - List of Locations */}
        <div className='max-h-[500px] overflow-y-auto custom-scrollbar pr-2'>
          {locations.map((loc, index) => (
            <div
              key={index}
              className='mb-4 border-2 border-[#8B3A2D] rounded-md p-1'
            >
              {/* Inner border for the "double border" effect */}
              <div className='border-2 border-[#8B3A2D] rounded-md flex overflow-hidden'>
                {/* Image Section */}
                <div className='relative w-1/3 min-h-[200px]'>
                  <Image
                    src={loc.image}
                    alt={loc.name}
                    fill
                    className='object-cover grayscale'
                  />
                </div>

                {/* Text Section */}
                <div className='w-2/3 p-4'>
                  <span className={`'bg-[#8B3A2D] text-white text-xs px-2 py-1 rounded-md inline-block ${cabin.className}`}>
                    {loc.distance}
                  </span>
                  <h4 className='text-lg font-bold mt-2'>{loc.name}</h4>
                  <p className={`text-sm text-gray-600 ${cabin.className}`}>{loc.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Section - Map */}
        <div className='h-[500px] w-full rounded-md overflow-hidden shadow-lg'>
          <Map locations={locations} />
        </div>
      </div>
    </section>
  );
}
