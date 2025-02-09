"use client";
import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Image from "next/image";

// Custom Marker Icon (transparent background with text/price)
const createCustomIcon = (price: number) =>
  new L.DivIcon({
    html: `
      <div class="bg-white text-gray-900 font-medium rounded-lg shadow-md border border-gray-300 p-2 text-sm w-max text-center">
        NGN ${price.toLocaleString()}
      </div>
    `,
    className: "custom-icon-container",
    iconSize: [80, 40],
    iconAnchor: [40, 40],
  });

interface Listing {
  id: string;
  name: string;
  price: number;
  latitude: number;
  longitude: number;
}

interface MapViewProps {
  listings: Listing[];
}

const MapView: React.FC<MapViewProps> = ({ listings }) => {
  const [hoveredListing, setHoveredListing] = useState<Listing | null>(null);

  return (
    <div className="relative">
      <MapContainer
        center={[25, 0]} // Default center
        zoom={3} // Default zoom level
        className="h-[500px] w-full rounded-md"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
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
            <Tooltip direction="top" offset={[0, -10]} opacity={1} permanent>
              <span className="text-sm font-semibold">{listing.name}</span>
            </Tooltip>
          </Marker>
        ))}
      </MapContainer>

      {/* Hovered Card */}
      {hoveredListing && (
        <div className="absolute top-10 right-10 bg-white shadow-lg rounded-lg p-4 w-80 z-50 transition duration-300 ease-in-out">
          <Image
            src="https://via.placeholder.com/150" // Replace with your dynamic image URL
            alt={hoveredListing.name}
            className="rounded-lg w-full mb-3"
            fill
          />
          <h3 className="font-bold text-lg text-gray-800">{hoveredListing.name}</h3>
          <p className="text-gray-600 text-sm">
            Price: <span className="font-semibold">NGN {hoveredListing.price.toLocaleString()}</span>
          </p>
          <p className="text-gray-600 text-sm">
            Location: <span className="font-semibold">Lat {hoveredListing.latitude}, Long {hoveredListing.longitude}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default MapView;
