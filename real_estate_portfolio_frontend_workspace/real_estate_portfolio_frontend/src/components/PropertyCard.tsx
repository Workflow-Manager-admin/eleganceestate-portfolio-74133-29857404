import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { Property } from "@/data/types";

// PUBLIC_INTERFACE
const PropertyCard: FC<{ property: Property }> = ({ property }) => (
  <Link
    href={`/property/${property.id}`}
    className="block rounded-2xl overflow-hidden shadow-md border border-secondary hover:shadow-xl transition-transform hover:-translate-y-1 bg-white dark:bg-primary group"
    style={{ transition: "box-shadow 0.2s, transform 0.2s" }}
  >
    <div className="relative">
      <Image
        src={property.image}
        alt={property.title}
        width={370}
        height={220}
        className="w-full h-[220px] object-cover group-hover:scale-105 transition-transform"
        priority={property.id < 4}
      />
      <span className="absolute top-3 left-3 px-3 py-1 bg-accent text-primary font-semibold rounded-full text-xs shadow">
        {property.status}
      </span>
    </div>
    <div className="py-4 px-5 flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-primary">{property.title}</h3>
        <span className="text-accent font-bold text-lg">${property.price.toLocaleString()}</span>
      </div>
      <div className="flex gap-3 text-gray-500 text-[15px]">
        <span>{property.beds} beds</span>
        <span>{property.baths} baths</span>
        <span>{property.sqft.toLocaleString()} sqft</span>
      </div>
      <div className="text-sm text-secondary">{property.city}</div>
    </div>
  </Link>
);

export default PropertyCard;
