import { Property } from "./types";

export const properties: Property[] = [
  {
    id: "1",
    title: "Luxury Downtown Apartment",
    image: "/prop1.jpg",
    price: 1249000,
    status: "For Sale",
    beds: 3,
    baths: 2,
    sqft: 1850,
    city: "Uptown",
    description:
      "Modern high-rise apartment with city views, open plan kitchen, and luxury finishes throughout.",
    features: [
      "Fitness Center",
      "24/7 Security",
      "Pet Friendly",
      "Balcony with views",
      "Hardwood Floors"
    ]
  },
  {
    id: "2",
    title: "Cozy Family House",
    image: "/prop2.jpg",
    price: 799000,
    status: "Sold",
    beds: 4,
    baths: 3,
    sqft: 2500,
    city: "Cedar Grove",
    description:
      "Charming family home in a quiet neighborhood, with private garden and double garage.",
    features: [
      "Private Garden",
      "Spacious Living Room",
      "Fireplace",
      "Nearby Schools"
    ]
  },
  {
    id: "3",
    title: "Modern Loft",
    image: "/prop3.jpg",
    price: 519000,
    status: "For Sale",
    beds: 2,
    baths: 2,
    sqft: 1275,
    city: "Arts District",
    description:
      "Sleek loft in converted warehouse, exposed brick, and arched windows. Walk to trendy cafes.",
    features: [
      "Exposed Brick",
      "Open Plan Living",
      "Gourmet Kitchen"
    ]
  },
  {
    id: "4",
    title: "Waterfront Villa",
    image: "/prop4.jpg",
    price: 2250000,
    status: "For Sale",
    beds: 5,
    baths: 4,
    sqft: 3580,
    city: "Lakeside",
    description:
      "Expansive villa on private waterfront, pool and dock included. Entertainer’s dream.",
    features: [
      "Private Dock",
      "Infinity Pool",
      "Chef’s Kitchen"
    ]
  },
  {
    id: "5",
    title: "Chic Suburban Condo",
    image: "/prop5.jpg",
    price: 469000,
    status: "For Rent",
    beds: 2,
    baths: 2,
    sqft: 1000,
    city: "Greenpark",
    description:
      "Bright and airy condo with modern amenities. Resort-style complex with swimming pool.",
    features: [
      "Resort Pool",
      "Gym Access",
      "Gated Entry"
    ]
  }
];
