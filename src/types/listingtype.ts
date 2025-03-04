export interface Location {
    longitude: number;
    latitude: number;
  }
  
  export interface Icon {
    _id: string;
    fileUrl: string;
  }
  
  export interface Amenity {
    _id: string;
    name: string;
    icon: Icon;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }
  
  export interface PropertyType {
    _id: string;
    name: string;
  }
  
  export interface ListingImg {
    _id: string;
    fileUrl: string;
  }
  
  export interface Listing {
    location: Location;
    _id: string;
    name: string;
    description: string;
    amenities: Amenity[];
    propertyType: PropertyType;
    price: number;
    listingImg: ListingImg[];
    rating: number;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }