"use client";
import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import MapCard from "./MapCard";
// import PriceBox from "./PriceBox";

// Custom Marker Icon
const createCustomIcon = (price: number) =>
  new L.DivIcon({
    html: `<div class="custom-price-box">
      NGN ${price.toLocaleString()}
      <div class="custom-price-arrow"></div>
    </div>`,
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
  const [cardPosition, setCardPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);

  // Custom Marker Component to handle hover events
  const CustomMarker = ({
    listing,
    position,
  }: {
    listing: Listing;
    position: [number, number];
  }) => {
    const map = useMap(); // Access map instance

    const handleMouseOver = (e: L.LeafletMouseEvent) => {
      const containerPoint = map.latLngToContainerPoint(e.latlng); // Convert to screen coordinates
      setHoveredListing(listing);
      setCardPosition({ x: containerPoint.x, y: containerPoint.y });
    };

    const handleMouseOut = () => {
      setHoveredListing(null);
      setCardPosition(null);
    };

    return (
      <Marker
        position={position}
        icon={createCustomIcon(listing.price)}
        eventHandlers={{
          mouseover: handleMouseOver,
          mouseout: handleMouseOut,
        }}
      />
    );
  };

  return (
    <div className='relative'>
      <MapContainer
        center={[9.082, 8.6753]} // Default center
        zoom={3} // Default zoom level
        className='h-[500px] w-full rounded-md'
      >
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Map Markers */}
        {listings.map((listing) => (
          <CustomMarker
            key={listing.id}
            listing={listing}
            position={[listing.latitude, listing.longitude]}
          />
        ))}
      </MapContainer>

      {/* Hovered Card */}
      {hoveredListing && cardPosition && (
        <div
          className='absolute bg-white shadow-lg rounded-lg w-80 z-[1000] transition duration-300 ease-in-out'
          style={{
            left: cardPosition.x + 10, // Offset for better visibility
            top: cardPosition.y + 10,
          }}
        >
          <MapCard {...hoveredListing} />
        </div>
      )}
    </div>
  );
};

export default MapView;
