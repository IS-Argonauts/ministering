import React from "react";
import { StatusBarIcons } from "../Icons/StatusBarIcons";

export default function StatusBar() {
  return (
    <header className="pt-5 w-full bg-white h-[50px]">
      <div className="flex justify-between items-center px-4">
        <time className="text-lg font-medium text-black">9:41</time>
        <div className="w-[124px]" />
        <StatusBarIcons />
      </div>
    </header>
  );
}
