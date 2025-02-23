import { Listing } from "./listingType";

const commonImageUrl =
  "https://res.cloudinary.com/dvv4wwuk1/image/upload/v1738108663/Kora%20Service/Listing/koxsdxbpu4cj7hmc6fso.jpg";
const bedUrl =
  "https://res.cloudinary.com/dvv4wwuk1/image/upload/v1738101271/Kora%20Service/AmenityIcon/rahaiputovkupwhjmp5t.png";

export const listings: Listing[] = [
  {
    location: {
      longitude: 3.392512,
      latitude: 6.543976,
    },
    _id: "1",
    name: "Four Seasons Hotel",
    description: "It is a big hotel",
    amenities: [
      {
        _id: "6799521254953fa2f52b75a4",
        name: "Bed",
        icon: {
          _id: "6799521254953fa2f52b75a2",
          fileUrl: bedUrl,
        },
      },
    ],
    propertyType: {
      _id: "677989a8d9f94ec82502563b",
      name: "Apartment",
    },
    price: 100000,
    listingImg: [
      {
        _id: "67996ef2b7e8baf6d1a46d9d",
        fileUrl: commonImageUrl,
      },
      {
        _id: "67996ef4b7e8baf6d1a46d9f",
        fileUrl: commonImageUrl,
      },
    ],
    rating: 0,
  },
  {
    location: {
      longitude: 3.392512,
      latitude: 6.543976,
    },
    _id: "2",
    name: "Four Seasons Hotel",
    description: "It is a big hotel",
    amenities: [
      {
        _id: "6799521254953fa2f52b75a4",
        name: "Bed",
        icon: {
          _id: "6799521254953fa2f52b75a2",
          fileUrl: bedUrl,
        },
      },
    ],
    propertyType: {
      _id: "677989a8d9f94ec82502563b",
      name: "Residential",
    },
    price: 50000,
    listingImg: [
      {
        _id: "67996ef2b7e8baf6d1a46d9d",
        fileUrl: commonImageUrl,
      },
      {
        _id: "67996ef4b7e8baf6d1a46d9f",
        fileUrl: commonImageUrl,
      },
    ],
    rating: 0,
  },
  {
    location: {
      longitude: 3.392512,
      latitude: 6.543976,
    },
    _id: "3",
    name: "Luxury Villa",
    description: "A luxurious villa with modern amenities",
    amenities: [
      {
        _id: "6799521254953fa2f52b75a4",
        name: "Pool",
        icon: {
          _id: "6799521254953fa2f52b75a2",
          fileUrl: bedUrl,
        },
      },
    ],
    propertyType: {
      _id: "677989a8d9f94ec82502563b",
      name: "Villa",
    },
    price: 200000,
    listingImg: [
      {
        _id: "67996ef2b7e8baf6d1a46d9d",
        fileUrl: commonImageUrl,
      },
      {
        _id: "67996ef4b7e8baf6d1a46d9f",
        fileUrl: commonImageUrl,
      },
    ],
    rating: 4.5,
  },
  {
    location: {
      longitude: 3.392512,
      latitude: 6.543976,
    },
    _id: "4",
    name: "Cozy Cottage",
    description: "A cozy cottage in a serene environment",
    amenities: [
      {
        _id: "6799521254953fa2f52b75a4",
        name: "Fireplace",
        icon: {
          _id: "6799521254953fa2f52b75a2",
          fileUrl: bedUrl,
        },
      },
    ],
    propertyType: {
      _id: "677989a8d9f94ec82502563b",
      name: "Cottage",
    },
    price: 75000,
    listingImg: [
      {
        _id: "67996ef2b7e8baf6d1a46d9d",
        fileUrl: commonImageUrl,
      },
      {
        _id: "67996ef4b7e8baf6d1a46d9f",
        fileUrl: commonImageUrl,
      },
    ],
    rating: 4.0,
  },
  {
    location: {
      longitude: 3.392512,
      latitude: 6.543976,
    },
    _id: "5",
    name: "Modern Apartment",
    description: "A modern apartment in the city center",
    amenities: [
      {
        _id: "6799521254953fa2f52b75a4",
        name: "Gym",
        icon: {
          _id: "6799521254953fa2f52b75a2",
          fileUrl: bedUrl,
        },
      },
    ],
    propertyType: {
      _id: "677989a8d9f94ec82502563b",
      name: "Apartment",
    },
    price: 120000,
    listingImg: [
      {
        _id: "67996ef2b7e8baf6d1a46d9d",
        fileUrl: commonImageUrl,
      },
      {
        _id: "67996ef4b7e8baf6d1a46d9f",
        fileUrl: commonImageUrl,
      },
    ],
    rating: 4.2,
  },
  {
    location: {
      longitude: 3.392512,
      latitude: 6.543976,
    },
    _id: "6",
    name: "Beach House",
    description: "A beautiful beach house with ocean view",
    amenities: [
      {
        _id: "6799521254953fa2f52b75a4",
        name: "Beach Access",
        icon: {
          _id: "6799521254953fa2f52b75a2",
          fileUrl: bedUrl,
        },
      },
    ],
    propertyType: {
      _id: "677989a8d9f94ec82502563b",
      name: "House",
    },
    price: 300000,
    listingImg: [
      {
        _id: "67996ef2b7e8baf6d1a46d9d",
        fileUrl: commonImageUrl,
      },
      {
        _id: "67996ef4b7e8baf6d1a46d9f",
        fileUrl: commonImageUrl,
      },
    ],
    rating: 4.8,
  },
  {
    location: {
      longitude: 3.392512,
      latitude: 6.543976,
    },
    _id: "7",
    name: "Mountain Cabin",
    description: "A cozy cabin in the mountains",
    amenities: [
      {
        _id: "6799521254953fa2f52b75a4",
        name: "Hiking Trails",
        icon: {
          _id: "6799521254953fa2f52b75a2",
          fileUrl: bedUrl,
        },
      },
    ],
    propertyType: {
      _id: "677989a8d9f94ec82502563b",
      name: "Cabin",
    },
    price: 90000,
    listingImg: [
      {
        _id: "67996ef2b7e8baf6d1a46d9d",
        fileUrl: commonImageUrl,
      },
      {
        _id: "67996ef4b7e8baf6d1a46d9f",
        fileUrl: commonImageUrl,
      },
    ],
    rating: 4.3,
  },
  {
    location: {
      longitude: 3.392512,
      latitude: 6.543976,
    },
    _id: "8",
    name: "Downtown Loft",
    description: "A stylish loft in downtown",
    amenities: [
      {
        _id: "6799521254953fa2f52b75a4",
        name: "Rooftop Access",
        icon: {
          _id: "6799521254953fa2f52b75a2",
          fileUrl: bedUrl,
        },
      },
    ],
    propertyType: {
      _id: "677989a8d9f94ec82502563b",
      name: "Loft",
    },
    price: 150000,
    listingImg: [
      {
        _id: "67996ef2b7e8baf6d1a46d9d",
        fileUrl: commonImageUrl,
      },
      {
        _id: "67996ef4b7e8baf6d1a46d9f",
        fileUrl: commonImageUrl,
      },
    ],
    rating: 4.6,
  },
  {
    location: {
      longitude: 3.392512,
      latitude: 6.543976,
    },
    _id: "9",
    name: "Suburban House",
    description: "A spacious house in the suburbs",
    amenities: [
      {
        _id: "6799521254953fa2f52b75a4",
        name: "Garage",
        icon: {
          _id: "6799521254953fa2f52b75a2",
          fileUrl: bedUrl,
        },
      },
    ],
    propertyType: {
      _id: "677989a8d9f94ec82502563b",
      name: "House",
    },
    price: 180000,
    listingImg: [
      {
        _id: "67996ef2b7e8baf6d1a46d9d",
        fileUrl: commonImageUrl,
      },
      {
        _id: "67996ef4b7e8baf6d1a46d9f",
        fileUrl: commonImageUrl,
      },
    ],
    rating: 4.1,
  },
  {
    location: {
      longitude: 3.392512,
      latitude: 6.543976,
    },
    _id: "10",
    name: "Penthouse Suite",
    description: "A luxurious penthouse suite",
    amenities: [
      {
        _id: "6799521254953fa2f52b75a4",
        name: "Private Elevator",
        icon: {
          _id: "6799521254953fa2f52b75a2",
          fileUrl: bedUrl,
        },
      },
    ],
    propertyType: {
      _id: "677989a8d9f94ec82502563b",
      name: "Penthouse",
    },
    price: 500000,
    listingImg: [
      {
        _id: "67996ef2b7e8baf6d1a46d9d",
        fileUrl: commonImageUrl,
      },
      {
        _id: "67996ef4b7e8baf6d1a46d9f",
        fileUrl: commonImageUrl,
      },
    ],
    rating: 4.9,
  },
  {
    location: {
      longitude: 3.392512,
      latitude: 6.543976,
    },
    _id: "11",
    name: "Country Farmhouse",
    description: "A charming farmhouse in the countryside",
    amenities: [
      {
        _id: "6799521254953fa2f52b75a4",
        name: "Barn",
        icon: {
          _id: "6799521254953fa2f52b75a2",
          fileUrl: bedUrl,
        },
      },
    ],
    propertyType: {
      _id: "677989a8d9f94ec82502563b",
      name: "Farmhouse",
    },
    price: 250000,
    listingImg: [
      {
        _id: "67996ef2b7e8baf6d1a46d9d",
        fileUrl: commonImageUrl,
      },
      {
        _id: "67996ef4b7e8baf6d1a46d9f",
        fileUrl: commonImageUrl,
      },
    ],
    rating: 4.7,
  },
  {
    location: {
      longitude: 3.392512,
      latitude: 6.543976,
    },
    _id: "12",
    name: "Urban Studio",
    description: "A compact studio in the urban area",
    amenities: [
      {
        _id: "6799521254953fa2f52b75a4",
        name: "WiFi",
        icon: {
          _id: "6799521254953fa2f52b75a2",
          fileUrl: bedUrl,
        },
      },
    ],
    propertyType: {
      _id: "677989a8d9f94ec82502563b",
      name: "Studio",
    },
    price: 60000,
    listingImg: [
      {
        _id: "67996ef2b7e8baf6d1a46d9d",
        fileUrl: commonImageUrl,
      },
      {
        _id: "67996ef4b7e8baf6d1a46d9f",
        fileUrl: commonImageUrl,
      },
    ],
    rating: 3.9,
  },
  {
    location: {
      longitude: 3.392512,
      latitude: 6.543976,
    },
    _id: "13",
    name: "Historic Mansion",
    description: "A historic mansion with antique furnishings",
    amenities: [
      {
        _id: "6799521254953fa2f52b75a4",
        name: "Library",
        icon: {
          _id: "6799521254953fa2f52b75a2",
          fileUrl: bedUrl,
        },
      },
    ],
    propertyType: {
      _id: "677989a8d9f94ec82502563b",
      name: "Mansion",
    },
    price: 400000,
    listingImg: [
      {
        _id: "67996ef2b7e8baf6d1a46d9d",
        fileUrl: commonImageUrl,
      },
      {
        _id: "67996ef4b7e8baf6d1a46d9f",
        fileUrl: commonImageUrl,
      },
    ],
    rating: 4.4,
  },
  {
    location: {
      longitude: 3.392512,
      latitude: 6.543976,
    },
    _id: "14",
    name: "Eco-Friendly Home",
    description: "An eco-friendly home with solar panels",
    amenities: [
      {
        _id: "6799521254953fa2f52b75a4",
        name: "Solar Panels",
        icon: {
          _id: "6799521254953fa2f52b75a2",
          fileUrl: bedUrl,
        },
      },
    ],
    propertyType: {
      _id: "677989a8d9f94ec82502563b",
      name: "House",
    },
    price: 220000,
    listingImg: [
      {
        _id: "67996ef2b7e8baf6d1a46d9d",
        fileUrl: commonImageUrl,
      },
      {
        _id: "67996ef4b7e8baf6d1a46d9f",
        fileUrl: commonImageUrl,
      },
    ],
    rating: 4.5,
  },
  {
    location: {
      longitude: 3.392512,
      latitude: 6.543976,
    },
    _id: "15",
    name: "Luxury Condo",
    description: "A luxury condo with high-end amenities",
    amenities: [
      {
        _id: "6799521254953fa2f52b75a4",
        name: "Concierge",
        icon: {
          _id: "6799521254953fa2f52b75a2",
          fileUrl: bedUrl,
        },
      },
    ],
    propertyType: {
      _id: "677989a8d9f94ec82502563b",
      name: "Condo",
    },
    price: 350000,
    listingImg: [
      {
        _id: "67996ef2b7e8baf6d1a46d9d",
        fileUrl: commonImageUrl,
      },
      {
        _id: "67996ef4b7e8baf6d1a46d9f",
        fileUrl: commonImageUrl,
      },
    ],
    rating: 4.8,
  },
  {
    location: {
      longitude: 3.392512,
      latitude: 6.543976,
    },
    _id: "16",
    name: "Rustic Barn",
    description: "A rustic barn converted into a home",
    amenities: [
      {
        _id: "6799521254953fa2f52b75a4",
        name: "Wood Stove",
        icon: {
          _id: "6799521254953fa2f52b75a2",
          fileUrl: bedUrl,
        },
      },
    ],
    propertyType: {
      _id: "677989a8d9f94ec82502563b",
      name: "Barn",
    },
    price: 150000,
    listingImg: [
      {
        _id: "67996ef2b7e8baf6d1a46d9d",
        fileUrl: commonImageUrl,
      },
      {
        _id: "67996ef4b7e8baf6d1a46d9f",
        fileUrl: commonImageUrl,
      },
    ],
    rating: 4.2,
  },
  {
    location: {
      longitude: 3.392512,
      latitude: 6.543976,
    },
    _id: "17",
    name: "Seaside Bungalow",
    description: "A charming bungalow by the sea",
    amenities: [
      {
        _id: "6799521254953fa2f52b75a4",
        name: "Sea View",
        icon: {
          _id: "6799521254953fa2f52b75a2",
          fileUrl: bedUrl,
        },
      },
    ],
    propertyType: {
      _id: "677989a8d9f94ec82502563b",
      name: "Bungalow",
    },
    price: 280000,
    listingImg: [
      {
        _id: "67996ef2b7e8baf6d1a46d9d",
        fileUrl: commonImageUrl,
      },
      {
        _id: "67996ef4b7e8baf6d1a46d9f",
        fileUrl: commonImageUrl,
      },
    ],
    rating: 4.6,
  },
  {
    location: {
      longitude: 3.392512,
      latitude: 6.543976,
    },
    _id: "18",
    name: "City Penthouse",
    description: "A luxurious penthouse in the city",
    amenities: [
      {
        _id: "6799521254953fa2f52b75a4",
        name: "City View",
        icon: {
          _id: "6799521254953fa2f52b75a2",
          fileUrl: bedUrl,
        },
      },
    ],
    propertyType: {
      _id: "677989a8d9f94ec82502563b",
      name: "Penthouse",
    },
    price: 450000,
    listingImg: [
      {
        _id: "67996ef2b7e8baf6d1a46d9d",
        fileUrl: commonImageUrl,
      },
      {
        _id: "67996ef4b7e8baf6d1a46d9f",
        fileUrl: commonImageUrl,
      },
    ],
    rating: 4.9,
  },
  {
    location: {
      longitude: 3.392512,
      latitude: 6.543976,
    },
    _id: "19",
    name: "Countryside Villa",
    description: "A beautiful villa in the countryside",
    amenities: [
      {
        _id: "6799521254953fa2f52b75a4",
        name: "Garden",
        icon: {
          _id: "6799521254953fa2f52b75a2",
          fileUrl: bedUrl,
        },
      },
    ],
    propertyType: {
      _id: "677989a8d9f94ec82502563b",
      name: "Villa",
    },
    price: 320000,
    listingImg: [
      {
        _id: "67996ef2b7e8baf6d1a46d9d",
        fileUrl: commonImageUrl,
      },
      {
        _id: "67996ef4b7e8baf6d1a46d9f",
        fileUrl: commonImageUrl,
      },
    ],
    rating: 4.7,
  },
  {
    location: {
      longitude: 3.392512,
      latitude: 6.543976,
    },
    _id: "20",
    name: "Modern Loft",
    description: "A modern loft with open floor plan",
    amenities: [
      {
        _id: "6799521254953fa2f52b75a4",
        name: "Open Floor Plan",
        icon: {
          _id: "6799521254953fa2f52b75a2",
          fileUrl: bedUrl,
        },
      },
    ],
    propertyType: {
      _id: "677989a8d9f94ec82502563b",
      name: "Loft",
    },
    price: 170000,
    listingImg: [
      {
        _id: "67996ef2b7e8baf6d1a46d9d",
        fileUrl: commonImageUrl,
      },
      {
        _id: "67996ef4b7e8baf6d1a46d9f",
        fileUrl: commonImageUrl,
      },
    ],
    rating: 4.4,
  },
  {
    location: {
      longitude: 3.392512,
      latitude: 6.543976,
    },
    _id: "21",
    name: "Luxury Townhouse",
    description: "A luxury townhouse with private garden",
    amenities: [
      {
        _id: "6799521254953fa2f52b75a4",
        name: "Private Garden",
        icon: {
          _id: "6799521254953fa2f52b75a2",
          fileUrl: bedUrl,
        },
      },
    ],
    propertyType: {
      _id: "677989a8d9f94ec82502563b",
      name: "Townhouse",
    },
    price: 280000,
    listingImg: [
      {
        _id: "67996ef2b7e8baf6d1a46d9d",
        fileUrl: commonImageUrl,
      },
      {
        _id: "67996ef4b7e8baf6d1a46d9f",
        fileUrl: commonImageUrl,
      },
    ],
    rating: 4.8,
  },
  {
    location: {
      longitude: 3.392512,
      latitude: 6.543976,
    },
    _id: "22",
    name: "Charming Cottage",
    description: "A charming cottage with a beautiful garden",
    amenities: [
      {
        _id: "6799521254953fa2f52b75a4",
        name: "Garden",
        icon: {
          _id: "6799521254953fa2f52b75a2",
          fileUrl: bedUrl,
        },
      },
    ],
    propertyType: {
      _id: "677989a8d9f94ec82502563b",
      name: "Cottage",
    },
    price: 150000,
    listingImg: [
      {
        _id: "67996ef2b7e8baf6d1a46d9d",
        fileUrl: commonImageUrl,
      },
      {
        _id: "67996ef4b7e8baf6d1a46d9f",
        fileUrl: commonImageUrl,
      },
    ],
    rating: 4.3,
  },
  {
    location: {
      longitude: 3.392512,
      latitude: 6.543976,
    },
    _id: "23",
    name: "Modern Studio",
    description: "A modern studio with all amenities",
    amenities: [
      {
        _id: "6799521254953fa2f52b75a4",
        name: "WiFi",
        icon: {
          _id: "6799521254953fa2f52b75a2",
          fileUrl: bedUrl,
        },
      },
    ],
    propertyType: {
      _id: "677989a8d9f94ec82502563b",
      name: "Studio",
    },
    price: 80000,
    listingImg: [
      {
        _id: "67996ef2b7e8baf6d1a46d9d",
        fileUrl: commonImageUrl,
      },
      {
        _id: "67996ef4b7e8baf6d1a46d9f",
        fileUrl: commonImageUrl,
      },
    ],
    rating: 4.1,
  },
  {
    location: {
      longitude: 3.392512,
      latitude: 6.543976,
    },
    _id: "24",
    name: "Luxury Apartment",
    description: "A luxury apartment with city view",
    amenities: [
      {
        _id: "6799521254953fa2f52b75a4",
        name: "City View",
        icon: {
          _id: "6799521254953fa2f52b75a2",
          fileUrl: bedUrl,
        },
      },
    ],
    propertyType: {
      _id: "677989a8d9f94ec82502563b",
      name: "Apartment",
    },
    price: 200000,
    listingImg: [
      {
        _id: "67996ef2b7e8baf6d1a46d9d",
        fileUrl: commonImageUrl,
      },
      {
        _id: "67996ef4b7e8baf6d1a46d9f",
        fileUrl: commonImageUrl,
      },
    ],
    rating: 4.7,
  },
  {
    location: {
      longitude: 3.392512,
      latitude: 6.543976,
    },
    _id: "25",
    name: "Beachfront Villa",
    description: "A luxurious villa on the beachfront",
    amenities: [
      {
        _id: "6799521254953fa2f52b75a4",
        name: "Beach Access",
        icon: {
          _id: "6799521254953fa2f52b75a2",
          fileUrl: bedUrl,
        },
      },
    ],
    propertyType: {
      _id: "677989a8d9f94ec82502563b",
      name: "Villa",
    },
    price: 500000,
    listingImg: [
      {
        _id: "67996ef2b7e8baf6d1a46d9d",
        fileUrl: commonImageUrl,
      },
      {
        _id: "67996ef4b7e8baf6d1a46d9f",
        fileUrl: commonImageUrl,
      },
    ],
    rating: 4.9,
  },
  {
    location: {
      longitude: 3.392512,
      latitude: 6.543976,
    },
    _id: "26",
    name: "Urban Loft",
    description: "A stylish loft in the urban area",
    amenities: [
      {
        _id: "6799521254953fa2f52b75a4",
        name: "Rooftop Access",
        icon: {
          _id: "6799521254953fa2f52b75a2",
          fileUrl: bedUrl,
        },
      },
    ],
    propertyType: {
      _id: "677989a8d9f94ec82502563b",
      name: "Loft",
    },
    price: 180000,
    listingImg: [
      {
        _id: "67996ef2b7e8baf6d1a46d9d",
        fileUrl: commonImageUrl,
      },
      {
        _id: "67996ef4b7e8baf6d1a46d9f",
        fileUrl: commonImageUrl,
      },
    ],
    rating: 4.5,
  },
  {
    location: {
      longitude: 3.392512,
      latitude: 6.543976,
    },
    _id: "27",
    name: "Mountain Retreat",
    description: "A peaceful retreat in the mountains",
    amenities: [
      {
        _id: "6799521254953fa2f52b75a4",
        name: "Hiking Trails",
        icon: {
          _id: "6799521254953fa2f52b75a2",
          fileUrl: bedUrl,
        },
      },
    ],
    propertyType: {
      _id: "677989a8d9f94ec82502563b",
      name: "Cabin",
    },
    price: 120000,
    listingImg: [
      {
        _id: "67996ef2b7e8baf6d1a46d9d",
        fileUrl: commonImageUrl,
      },
      {
        _id: "67996ef4b7e8baf6d1a46d9f",
        fileUrl: commonImageUrl,
      },
    ],
    rating: 4.4,
  },
];
