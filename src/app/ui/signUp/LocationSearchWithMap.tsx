import React from "react";
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';
import { LatLngTuple } from "leaflet";

const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });

type Props = {
  coordinates: LatLngTuple;
}
const LocationSearchWithMap = ({coordinates}:Props) => {
  return (
    <div className="w-full h-[400px] mb-6">
      <MapContainer center={coordinates} zoom={20} style={{ height: '100%', width: '100%' , borderRadius: '10px'}}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          // style={{height: '400px', width: '100%', borderRadius: '10px'}}
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default LocationSearchWithMap;
