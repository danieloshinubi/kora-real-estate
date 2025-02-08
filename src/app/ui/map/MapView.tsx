"use client"
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";


// Custom Marker Icon
const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
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
  return (
    <MapContainer
      center={[20, 0]} // Default center
      zoom={12} // Default zoom level
      className="h-[500px] w-full"
    >
      {/* Add Tile Layer */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* Map Markers */}
      {listings.map((listing) => (
        <Marker
          key={listing.id}
          position={[listing.latitude, listing.longitude]}
          icon={customIcon}
        >
          <Popup>
            <strong>{listing.name}</strong>
            <br />
            Price: NGN {listing.price.toLocaleString()}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapView;
