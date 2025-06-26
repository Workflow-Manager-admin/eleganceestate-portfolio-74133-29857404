"use client";
import { FC } from "react";
import Image from "next/image";
import { agent } from "@/data/agent";

interface Props {
  className?: string;
}

// PUBLIC_INTERFACE
const AgentProfile: FC<Props> = ({ className }) => {
  return (
    <aside
      className={
        "bg-white dark:bg-primary shadow-xl rounded-2xl p-7 flex flex-col items-center justify-center gap-4 transition-colors duration-500 " +
        (className ?? "")
      }
      style={{ minWidth: 260, maxWidth: 350 }}
    >
      <Image
        src={agent.avatar}
        alt={`${agent.name} portrait`}
        width={90}
        height={90}
        className="rounded-full border-4 border-accent shadow-md"
        priority
      />
      <h3 className="text-primary dark:text-secondary text-2xl font-semibold">{agent.name}</h3>
      <span className="text-sm text-secondary dark:text-accent font-medium">{agent.title}</span>
      <hr className="w-16 border-accent my-2" />
      <p className="text-gray-500 text-center">{agent.bio}</p>
      <ul className="flex flex-col items-center gap-2 text-[15px]">
        {agent.attributes.map((attr) => (
          <li key={attr} className="flex items-center gap-2">
            <span className="w-2 h-2 bg-accent rounded-full"></span> {attr}
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        className="bg-accent text-primary font-semibold rounded-full py-2 px-5 mt-3 transition-opacity hover:opacity-90 shadow active:scale-95"
      >
        Contact Agent
      </a>
    </aside>
  );
};

export default AgentProfile;
