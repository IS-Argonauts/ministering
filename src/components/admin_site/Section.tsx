import React from "react";
import { PersonCard } from "./PersonCard";

interface Person {
  imageUrl: string;
  name: string;
}

interface SectionProps {
  title: string;
  people: Person[];
  titleSize?: "normal" | "small";
}

export const Section: React.FC<SectionProps> = ({
  title,
  people,
  titleSize = "normal",
}) => {
  const titleClass =
    titleSize === "small"
      ? "text-xl font-medium text-black"
      : "text-base font-medium text-stone-900";

  return (
    <section className="mb-4">
      <h2 className={`mb-3 ${titleClass}`}>{title}</h2>
      <div className="flex flex-wrap gap-5">
        {people.map((person, index) => (
          <PersonCard
            key={`${person.name}-${index}`}
            imageUrl={person.imageUrl}
            name={person.name}
          />
        ))}
      </div>
    </section>
  );
};
