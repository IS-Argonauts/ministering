import * as React from "react";
import { User } from "./types";

export const UserListItem: React.FC<User> = ({
  name,
  imageUrl,
  altText,
  bgColor,
}) => {
  return (
    <article className="flex gap-x-3 items-center">
      <img
        src={imageUrl}
        alt={altText}
        className={`object-cover w-10 h-10 rounded-full ${bgColor}`}
      />
      <h3 className="text-gray-900">{name}</h3>
    </article>
  );
};
