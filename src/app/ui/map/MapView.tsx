"use client";
import React, { useState } from "react";
import { MapContainer, TileLayer, Marker} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import MapCard from "./MapCard";

// Custom Marker Icon (transparent background with text/price)
const createCustomIcon = (price: number) =>
  new L.DivIcon({
    html: `
      <div class="bg-white text-[#8B3A2D] hover:bg-[#8B3A2D] hover:text-white font-medium rounded-lg shadow-md border border-gray-300 p-2 text-sm w-max text-center">
        NGN ${price.toLocaleString()}
      </div>
    `,
    className: "custom-icon-container",
    iconSize: [80, 40],
    iconAnchor: [40, 40],
  });

interface Listing {
  id: string;
  title: string;
  price: number;
  latitude: number;
  longitude: number;
  image: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
}

interface MapViewProps {
  listings: Listing[];
}

const MapView: React.FC<MapViewProps> = ({ listings }) => {
  const [hoveredListing, setHoveredListing] = useState<Listing | null>(null);

  return (
    <div className='relative'>
      <MapContainer
        center={[9.082, 8.6753]} // Default center
        zoom={7} // Default zoom level
        className='h-[500px] w-full rounded-md'
      >
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Map Markers */}
        {listings.map((listing) => (
          <Marker
            key={listing.id}
            position={[listing.latitude, listing.longitude]}
            icon={createCustomIcon(listing.price)}
            eventHandlers={{
              mouseover: () => setHoveredListing(listing),
              mouseout: () => setHoveredListing(null),
            }}
          >
          </Marker>
        ))}
      </MapContainer>

      {/* Hovered Card */}
      {hoveredListing && (
        <div className='absolute top-10 right-10 bg-white shadow-lg rounded-lg w-80 z-[1000] transition duration-300 ease-in-out'>
          <MapCard {...hoveredListing} />
        </div>
      )}
    </div>
  );
};

export default MapView;
