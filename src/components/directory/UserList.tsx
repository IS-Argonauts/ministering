import * as React from "react";
import { UserListItem } from "./UserListItem";
import { User } from "./types";

const users: User[] = [
  {
    name: "Larry Smith",
    imageUrl: "https://placehold.co/40x40/83B5BE/83B5BE",
    altText: "Larry Smith profile picture",
    bgColor: "bg-slate-400",
  },
  {
    name: "Laura Cutler",
    imageUrl: "https://placehold.co/40x40/E29578/E29578",
    altText: "Laura Cutler profile picture",
    bgColor: "bg-red-400",
  },
  {
    name: "Layla Summerhays",
    imageUrl: "https://placehold.co/40x40/EDF6F9/EDF6F9",
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
