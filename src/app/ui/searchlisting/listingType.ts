export interface Listing {
  _id: string;
  name: string;
  description: string;
  listingImg: { _id: string; fileUrl: string }[];
  price: number;
  rating: number;
  location: {
    longitude: number;
    latitude: number;
  };
  amenities: {
    _id: string;
    name: string;
    icon: {
      _id: string;
      fileUrl: string;
    };
  }[];
  propertyType: {
    _id: string;
    name: string;
  };
}
