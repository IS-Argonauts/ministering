import React from "react";
import { MenuIcon } from "../Icons/MenuIcon";
import { UserIcon } from "../Icons/UserIcon";

export default function NavigationBar() {
  return (
    <nav className="flex justify-between items-center px-3.5 w-full bg-sky-800 h-[51px]">
      <button aria-label="Menu">
        <MenuIcon />
      </button>
      <button aria-label="User profile">
        <UserIcon />
      </button>
    </nav>
  );
}
