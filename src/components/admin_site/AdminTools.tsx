"use client";
import React from "react";
import { Header } from "../shared_components/Header";
import { Section } from "./Section";

const EditIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-[20px] h-[20px]"
  >
    <g clipPath="url(#clip0_260_195)">
      <path
        d="M9.16669 3.33333H3.33335C2.89133 3.33333 2.4674 3.50893 2.15484 3.82149C1.84228 4.13405 1.66669 4.55797 1.66669 5V16.6667C1.66669 17.1087 1.84228 17.5326 2.15484 17.8452C2.4674 18.1577 2.89133 18.3333 3.33335 18.3333H15C15.442 18.3333 15.866 18.1577 16.1785 17.8452C16.4911 17.5326 16.6667 17.1087 16.6667 16.6667V10.8333M15.4167 2.08333C15.7482 1.75181 16.1978 1.56557 16.6667 1.56557C17.1355 1.56557 17.5852 1.75181 17.9167 2.08333C18.2482 2.41485 18.4345 2.86449 18.4345 3.33333C18.4345 3.80217 18.2482 4.25181 17.9167 4.58333L10 12.5L6.66669 13.3333L7.50002 10L15.4167 2.08333Z"
        stroke="#F5F5F5"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_260_195">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const AdminTools: React.FC = () => {
  const companionship1 = [
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/b83e89ab198115a9289ce6d04a350169b5d8aac5",
      name: "Vin Jones",
    },
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/563d169672f23b488bf6bb27fec825aae67a51c4",
      name: "Yuto Takamura",
    },
  ];

  const assignment1 = [
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/5d7384386613c3a2eab46419de24d25d5c739db6",
      name: "Steve Harvey",
    },
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/0b0644e1918b33a7ede6fdfcc3334afd19b71940",
      name: "Gal Gadot",
    },
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/eb57a2a7040fd1bc224d9a8ee4064c79eee892c3",
      name: "Ryan Schuetzler",
    },
  ];

  const companionship2 = [
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/bd40774903cfc0528519b53fbe1efb0d47c18aa5",
      name: "Hadley Garff",
    },
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/049af089d51d19575883fabfc686d01f5fffd37a",
      name: "Sebastian",
    },
  ];

  const assignment2 = [
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/8040ef64c5e184c5e191931bd4340e6682f8eafc",
      name: "Greg Anderson",
    },
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d66dc9977213d4c67d5d160b0b7eff1c789e3652",
      name: "Taylor Wells",
    },
  ];

  const unassigned = [
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/85b9dbe0eda24cbfb6dba81c3387948bf71f6d0d",
      name: "Laura Cutler",
    },
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f36faabab733028ee8678bd2ea683c11c1732808",
      name: "Spencer Hilton",
    },
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/5265880f65b5cedb7791537a17d2f1ed0e76ef79",
      name: "Jason Schwartz",
    },
  ];

  return (
    <main className="flex flex-col bg-white min-h-[screen]">
      <Header />

      <div className="px-5 py-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-medium text-black">
            Administrator Tools
          </h1>
          <button
            className="flex justify-center items-center bg-sky-800 rounded-md h-[42px] w-[42px]"
            aria-label="Edit"
          >
            <EditIcon />
          </button>
        </div>

        <Section title="Companionship" people={companionship1} />
        <Section title="Assignment" people={assignment1} />

        <hr className="mb-4 border-b border-black border-opacity-30" />

        <Section title="Companionship" people={companionship2} />
        <Section title="Assignment" people={assignment2} />

        <hr className="mb-4 border-b border-black border-opacity-30" />

        <Section title="Unassigned" people={unassigned} titleSize="large" />
      </div>
    </main>
  );
};

export default AdminTools;
