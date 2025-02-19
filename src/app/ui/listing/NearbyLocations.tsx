export default function NearbyLocations() {
    const locations = [
      { name: "Downtown Plaza", city: "California" },
      { name: "USA Bank", city: "California" },
      { name: "Golden Tulip", city: "California" },
    ];
  
    return (
      <div>
        <h2 className="text-xl font-semibold">Nearby Popular Locations</h2>
        <ul className="space-y-2 mt-2">
          {locations.map((location, index) => (
            <li key={index} className="border p-2 rounded-md shadow-sm">
              <strong>{location.name}</strong> - {location.city}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  