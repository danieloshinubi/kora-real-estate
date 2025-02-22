// types/listing.ts

export interface Listing {
    id: string;
    title: string;
    description: string;
    image: string;
    price: number;
    currency: string;
    category: string;
    rating: number;
    location: string;
    latitude: number;
    longitude: number;
    bathrooms: number;
    bedrooms: number;
    // add more fields as needed
  }
  