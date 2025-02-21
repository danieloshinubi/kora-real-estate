import { Icon } from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Location } from "./NearbyLocations";

const customIcon = new Icon({
  iconUrl: "/marker-icon.png", // Make sure you have a marker icon in the public folder
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

export default function Map({ locations }: { locations: Location[] }) {
  return (
    <MapContainer center={[6.5244, 3.3792]} zoom={12} className='h-full w-full'>
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {locations.map((location, index) => (
        <Marker key={index} position={location.coordinates} icon={customIcon}>
          <Popup>
            <strong>{location.name}</strong>
            <br />
            {location.city}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
