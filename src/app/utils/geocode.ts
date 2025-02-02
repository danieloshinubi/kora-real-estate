import mbxGeocoding from '@mapbox/mapbox-sdk/services/geocoding';

const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN; // Store the token in an environment variable

if (!mapboxToken) {
  throw new Error('Mapbox token is not defined. Please set NEXT_PUBLIC_MAPBOX_TOKEN in your environment variables.');
}
const geocodingClient = mbxGeocoding({ accessToken: mapboxToken });

export const getCoordinates = async (place: string) => {
  try {
    const response = await geocodingClient
      .forwardGeocode({
        query: place,
        limit: 1, // Limit results to one
      })
      .send();

    const match = response.body.features[0];
    if (match) {
      return {
        placeName: match.place_name,
        coordinates: match.geometry.coordinates,
      };
    }

    throw new Error('No matching location found.');
  } catch (error) {
    console.error('Geocoding error:', error);
    throw error;
  }
};
