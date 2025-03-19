import * as React from "react";
import { UserListItem } from "./UserListItem";
import { User } from "./types";

const users: User[] = [
  {
    name: "Larry Smith",
    imageUrl: "/images/stockPhoto1.png", // Correct path for public folder
    altText: "Larry Smith profile picture",
    bgColor: "bg-slate-400",
  },
  {
    name: "Laura Cutler",
    imageUrl: "/images/lauraCutler.png", // Correct path for public folder
    altText: "Laura Cutler profile picture",
    bgColor: "bg-red-400",
  },
  {
    name: "Layla Summerhays",
    imageUrl: "/images/stockphoto2.png", // Correct path for public folder
    altText: "Layla Summerhays profile picture",
    bgColor: "bg-slate-100",
  },
];

export const UserList: React.FC = () => {
  return (
    <section className="gap-y-4 mt-4">
      {users.map((user) => (
        <UserListItem key={user.name} {...user} />
      ))}
    </section>
  );
};
