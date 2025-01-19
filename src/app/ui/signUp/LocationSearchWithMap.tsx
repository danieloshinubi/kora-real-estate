import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import { LatLngTuple } from "leaflet";
import { useMap } from "react-leaflet";
import "../../utils/leafletConfig";

const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), {
  ssr: false,
});

// Helper component to update map center
const UpdateMapCenter = ({ coordinates }: { coordinates: LatLngTuple }) => {
  const map = useMap();

  useEffect(() => {
    map.setView(coordinates, map.getZoom());
  }, [coordinates, map]);

  return null;
};

type Props = {
  coordinates: LatLngTuple;
};

const LocationSearchWithMap = ({ coordinates }: Props) => {
  return (
    <div className='w-full h-[400px] mb-6'>
      <MapContainer
        key={coordinates.toString()}
        center={coordinates}
        zoom={17}
        style={{ height: "100%", width: "100%", borderRadius: "10px" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={coordinates}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        {/* Add the UpdateMapCenter helper */}
        <UpdateMapCenter coordinates={coordinates} />
      </MapContainer>
    </div>
  );
};

export default LocationSearchWithMap;
