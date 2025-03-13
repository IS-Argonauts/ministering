import React from "react";

interface PersonCardProps {
  imageUrl: string;
  name: string;
}

export const PersonCard: React.FC<PersonCardProps> = ({ imageUrl, name }) => {
  return (
    <article className="w-[86px]">
      <img
        src={imageUrl}
        alt={`${name}'s profile`}
        className="w-full h-[69px] rounded-[2px] mb-[6px] object-cover"
      />
      <p className="text-xs text-center">{name}</p>
    </article>
  );
};
