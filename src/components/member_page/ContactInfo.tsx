import React from "react";
import { EmailIcon, PhoneIcon, MapIcon } from "../icons/ContactIcons";

export default function ContactInfo() {
  return (
    <section>
      <div className="flex gap-2.5 items-center mt-8">
        <div className="flex items-center justify-center text-xl text-white rounded-md bg-sky-950 h-[33px] w-[33px]">
          26
        </div>
        <p className="text-xl text-black">days since last visit</p>
      </div>
      <div className="mt-5">
        <p className="text-base text-black">● 801-000-0000</p>
        <p className="mt-2.5 text-base text-black">● steve.harvey@gmail.com</p>
        <div className="flex gap-4 mt-5">
          <button
            className="inline-flex justify-center items-center p-3 rounded-md bg-sky-950"
            aria-label="Send email"
          >
            <EmailIcon />
          </button>
          <button
            className="inline-flex justify-center items-center p-3 rounded-md bg-sky-950"
            aria-label="Make call"
          >
            <PhoneIcon />
          </button>
          <button
            className="inline-flex justify-center items-center p-3 rounded-md bg-sky-950"
            aria-label="View map"
          >
            <MapIcon />
          </button>
        </div>
      </div>
    </section>
  );
}
