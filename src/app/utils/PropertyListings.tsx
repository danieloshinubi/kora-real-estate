// const cards = [
//   {
//     name: "WestChester Palace",
//     description: "Relaxing retreat at the heart of Yuba City",
//     price: 100000,
//     amenities: ["3", "4"],
//     listingImg: "/house1.jpg",
//     propertyType: "House",
//   },
//   {
//     name: "Modern apartment with city view",
//     description: "Modern apartment with city view",
//     price: 80000,
//     amenities: ["2", "2"],
//     listingImg: "/house2.jpg",
//     propertyType: "Apartment",
//   },
//   {
//     name: "Cozy cottage near the beach",
//     description: "Cozy cottage near the beach",
//     price: 120000,
//     amenities: ["4", "3"],
//     listingImg: "/house3.jpg",
//     propertyType: "Cottage",
//   },
//   {
//     name: "Luxurious villa with private pool",
//     description: "Luxurious villa with private pool",
//     price: 250000,
//     amenities: ["5", "6"],
//     listingImg: "/house4.jpg",
//     propertyType: "Villa",
//   },
//   {
//     name: "Compact studio in the city center",
//     description: "Compact studio in the city center",
//     price: 50000,
//     amenities: ["1", "1"],
//     listingImg: "/house5.jpg",
//     propertyType: "Studio",
//   },
//   {
//     name: "Simple bungalow in the countryside",
//     description: "Simple bungalow in the countryside",
//     price: 40000,
//     amenities: ["2", "1"],
//     listingImg: "/house6.jpg",
//     propertyType: "Bungalow",
//   },
//   {
//     name: "Exclusive mansion with large garden",
//     description: "Exclusive mansion with large garden",
//     price: 500000,
//     amenities: ["6", "8"],
//     listingImg: "/house7.jpg",
//     propertyType: "Mansion",
//   },
//   {
//     name: "Modern penthouse with ocean view",
//     description: "Modern penthouse with ocean view",
//     price: 300000,
//     amenities: ["3", "4"],
//     listingImg: "/house8.jpg",
//     propertyType: "Penthouse",
//   },
//   {
//     name: "Rustic cabin in the mountains",
//     description: "Rustic cabin in the mountains",
//     price: 70000,
//     amenities: ["3", "2"],
//     listingImg: "/house9.jpg",
//     propertyType: "Cabin",
//   },
//   {
//     name: "Spacious duplex with private garden",
//     description: "Spacious duplex with private garden",
//     price: 150000,
//     amenities: ["4", "5"],
//     listingImg: "/house1.jpg",
//     propertyType: "Duplex",
//   },
//   {
//     name: "Floating houseboat on the river",
//     description: "Floating houseboat on the river",
//     price: 120000,
//     amenities: ["2", "2"],
//     listingImg: "/house2.jpg",
//     propertyType: "Houseboat",
//   },
//   {
//     name: "Luxury condo in the business district",
//     description: "Luxury condo in the business district",
//     price: 200000,
//     amenities: ["3", "3"],
//     listingImg: "/house3.jpg",
//     propertyType: "Condo",
//   },
//   {
//     name: "Peaceful farmhouse surrounded by greenery",
//     description: "Peaceful farmhouse surrounded by greenery",
//     price: 60000,
//     amenities: ["4", "3"],
//     listingImg: "/house4.jpg",
//     propertyType: "Farmhouse",
//   },
//   {
//     name: "Trendy loft in a vibrant neighborhood",
//     description: "Trendy loft in a vibrant neighborhood",
//     price: 90000,
//     amenities: ["2", "2"],
//     listingImg: "/house5.jpg",
//     propertyType: "Loft",
//   },
//   {
//     name: "Beautiful chalet with mountain views",
//     description: "Beautiful chalet with mountain views",
//     price: 100000,
//     amenities: ["3", "2"],
//     listingImg: "/house6.jpg",
//     propertyType: "Chalet",
//   },
//   {
//     name: "Charming terrace house with balcony",
//     description: "Charming terrace house with balcony",
//     price: 80000,
//     amenities: ["3", "3"],
//     listingImg: "/house7.jpg",
//     propertyType: "Terrace",
//   },
//   {
//     name: "Family-friendly townhouse in a gated estate",
//     description: "Family-friendly townhouse in a gated estate",
//     price: 140000,
//     amenities: ["4", "4"],
//     listingImg: "/house8.jpg",
//     propertyType: "Townhouse",
//   },
//   {
//     name: "Cozy tiny house with smart design",
//     description: "Cozy tiny house with smart design",
//     price: 45000,
//     amenities: ["1", "1"],
//     listingImg: "/house9.jpg",
//     propertyType: "Tiny House",
//   },
//   {
//     name: "Historic castle with breathtaking views",
//     description: "Historic castle with breathtaking views",
//     price: 1000000,
//     amenities: ["10", "12"],
//     listingImg: "/house1.jpg",
//     propertyType: "Castle",
//   },
//   {
//     name: "Fully equipped RV for road trips",
//     description: "Fully equipped RV for road trips",
//     price: 35000,
//     amenities: ["1", "1"],
//     listingImg: "/house2.jpg",
//     propertyType: "RV",
//   },
// ];

// export default cards;


// components/PropertyListings.tsx
"use client";
import { useEffect } from "react";
import { useGetListingsQuery } from "./services/api";

// Define Listing Type (adjust based on your backend response)
export type Listing = {
  _id: string;
  name: string;
  description: string;
  price: number;
  amenities: string[];
  listingImg: string;
  propertyType: string;
  location: {
    latitude: number;
    longitude: number;
  };
};