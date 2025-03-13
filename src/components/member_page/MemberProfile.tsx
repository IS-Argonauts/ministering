"use client";
import React from "react";
import StatusBar from "./StatusBar";
import NavigationBar from "./NavigationBar";
import ProfileHeader from "./ProfileHeader";
import ContactInfo from "./ContactInfo";
import FloatingChatButton from "./FloatingChatButton";

export default function MemberProfile() {
  return (
    <main className="flex flex-col bg-white min-h-[screen]">
      <StatusBar />
      <NavigationBar />
      <section className="px-5 pb-5">
        <h1 className="mt-5 mb-8 text-2xl font-medium text-black">
          Member Profile
        </h1>
        <ProfileHeader />
        <ContactInfo />
        <section className="p-5 mt-8 rounded-xl bg-zinc-300">
          <h2 className="mb-4 text-base font-medium">Personal Information</h2>
          <p className="text-base text-black">
            My favorite food is pizza, hamburger, roasted salmon, and chocolate
            cake. I am a fan of NFL. I would love to go hiking on weekends, so
            if you know good places, hit me up and we should go together.
          </p>
        </section>
        <button className="w-full p-2.5 mt-5 text-xs rounded-md bg-zinc-300">
          Log Ministering Visit/Action
        </button>
        <button className="w-full p-2.5 mt-2.5 text-xs rounded-md bg-zinc-300">
          Submit Service Request
        </button>
        <FloatingChatButton />
      </section>
    </main>
  );
}
