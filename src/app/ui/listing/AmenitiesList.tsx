export default function AmenitiesList() {
    const amenities = ["Wi-Fi", "Air Conditioning", "Swimming Pool", "Free Parking", "CCTV", "Laundry Service"];
    return (
      <div>
        <h2 className="text-xl font-semibold">Amenities Offered</h2>
        <ul className="grid grid-cols-2 gap-2 text-gray-600 mt-2">
          {amenities.map((amenity, index) => (
            <li key={index}>✔ {amenity}</li>
          ))}
        </ul>
      </div>
    );
  }
  