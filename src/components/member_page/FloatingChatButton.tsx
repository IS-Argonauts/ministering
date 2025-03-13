import React from "react";
import { ChatBubbleIcon } from "../icons/ChatBubbleIcon";

export default function FloatingChatButton() {
  return (
    <button
      className="fixed right-5 bottom-5 h-[55px] w-[49px]"
      aria-label="Open chat"
    >
      <ChatBubbleIcon />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ddb620ebe58d04c501b7575e13138e3ad1ce73c5"
        alt=""
        className="w-[33px] h-[30px] absolute left-[8px] top-[6px]"
      />
    </button>
  );
}
