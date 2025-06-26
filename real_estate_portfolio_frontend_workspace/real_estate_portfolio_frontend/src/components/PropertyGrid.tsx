import { FC } from "react";
import PropertyCard from "./PropertyCard";
import { properties } from "@/data/properties";

interface Props {
  className?: string;
}

// PUBLIC_INTERFACE
const PropertyGrid: FC<Props> = ({ className }) => (
  <section
    id="properties"
    className={"w-full flex flex-col items-center gap-7 " + (className ?? "")}
  >
    <h2 className="text-2xl sm:text-3xl font-bold text-primary dark:text-accent">
      Featured Properties
    </h2>
    <div className="w-full grid gap-9 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {properties.map((p) => (
        <PropertyCard property={p} key={p.id} />
      ))}
    </div>
  </section>
);

export default PropertyGrid;
