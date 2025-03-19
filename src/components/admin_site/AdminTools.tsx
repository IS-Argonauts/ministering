import React from "react";
import { Section } from "./Section";

const companionshipPeople = [
  {
    imageUrl: "https://via.placeholder.com/86x69",
    name: "Person 1",
  },
  {
    imageUrl: "https://via.placeholder.com/86x69",
    name: "Person 2",
  },
  {
    imageUrl: "https://via.placeholder.com/86x69",
    name: "Person 3",
  },
];

const assignmentPeople = [
  {
    imageUrl: "https://via.placeholder.com/86x69",
    name: "Person A",
  },
  {
    imageUrl: "https://via.placeholder.com/86x69",
    name: "Person B",
  },
  {
    imageUrl: "https://via.placeholder.com/86x69",
    name: "Person C",
  },
];

export const AdminTools: React.FC = () => {
  return (
    <div className="p-6 w-full max-w-2xl mx-auto">
      {/* Main Heading */}
      <h1 className="text-sm font-medium text-black text-left mb-4">
        Admin Tools
      </h1>

      {/* Companionship Section */}
      <div className="mb-6">
        <h2 className="text-base font-medium text-left mb-3">Companionship</h2>
        <div className="flex justify-start gap-5">
          {companionshipPeople.map((person, index) => (
            <div key={index} className="w-[86px] text-center">
              <img
                src={person.imageUrl}
                alt={person.name}
                className="w-[86px] h-[69px] rounded-[2px] object-cover mb-1"
              />
              <p className="text-xs">{person.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Assignment Section */}
      <div className="mb-6">
        <h2 className="text-base font-medium text-left mb-3">Assignment</h2>
        <div className="flex justify-start gap-5">
          {assignmentPeople.map((person, index) => (
            <div key={index} className="w-[86px] text-center">
              <img
                src={person.imageUrl}
                alt={person.name}
                className="w-[86px] h-[69px] rounded-[2px] object-cover mb-1"
              />
              <p className="text-xs">{person.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Thin Grey Line */}
      <hr className="border-t border-gray-300 w-full" />
    </div>
  );
};
