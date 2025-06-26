export interface Property {
  id: string;
  title: string;
  image: string;
  price: number;
  status: "For Sale" | "Sold" | "For Rent";
  beds: number;
  baths: number;
  sqft: number;
  city: string;
  description: string;
  features: string[];
}
