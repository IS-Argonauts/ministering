import React from "react";

export default function ProfileHeader() {
  return (
    <article className="flex gap-5 max-sm:flex-col">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ce54a8856bbbe4d549c740b9edc8038d8ca364b"
        alt="Steve Harvey profile"
        className="w-[129px] h-[108px] rounded-[5px]"
      />
      <div className="flex-1">
        <h2 className="text-xl text-black">Steve Harvey</h2>
        <hr className="my-4 border-b border-zinc-300" />
        <p className="text-base text-black">Birthday : January 17, 1957</p>
        <p className="mt-2.5 text-base text-black">Address: W310 TNRB, Provo</p>
      </div>
    </article>
  );
}
