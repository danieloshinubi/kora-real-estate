import { Icon } from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const customIcon = new Icon({
  iconUrl: "/house-marker.png", // Make sure you have a marker icon in the public folder
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

type MapProps = {
  location: {
    latitude: number;
    longitude: number;
  };
};
export default function Map({ location }: MapProps) {
  const LatLngLocation = {
    lat: location.latitude || 15.0,
    lng: location.longitude || 15.0,
  };
  const { lat, lng } = LatLngLocation;
  return (
    <MapContainer center={[lat, lng]} zoom={8} className='h-full w-full'>
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={LatLngLocation} icon={customIcon}>
        <Popup>
          House <br /> Location
        </Popup>
      </Marker>
    </MapContainer>
  );
}
