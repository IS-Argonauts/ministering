import React from "react";
import { StatusBarIcons, MenuIcon, UserIcon } from "./icons";

const MobileHeader: React.FC = () => {
  return (
    <header>
      <div className="flex justify-between items-center px-4 pt-5 pb-0 bg-white h-[50px]">
        <div className="text-lg text-black">9:41</div>
        <div className="h-2.5 w-[124px]" />
        <div className="flex items-center">
          <StatusBarIcons />
        </div>
      </div>
      <nav className="flex justify-between items-center px-3.5 py-0 bg-sky-800 h-[51px]">
        <button aria-label="Menu">
          <MenuIcon />
        </button>
        <button aria-label="User profile">
          <UserIcon />
        </button>
      </nav>
    </header>
  );
};

export default MobileHeader;
