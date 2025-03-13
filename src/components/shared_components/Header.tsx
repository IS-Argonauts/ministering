import React from "react";

const MenuIcon = () => (
  <svg
    width="34"
    height="34"
    viewBox="0 0 34 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-[34px] h-[34px]"
  >
    <path
      d="M4.25 25.5V22.6667H29.75V25.5H4.25ZM4.25 18.4167V15.5833H29.75V18.4167H4.25ZM4.25 11.3333V8.5H29.75V11.3333H4.25Z"
      fill="white"
    />
  </svg>
);

const UserIcon = () => (
  <svg
    width="33"
    height="36"
    viewBox="0 0 33 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-[29px] h-[29px]"
  >
    <g filter="url(#filter0_d_260_328)">
      <path
        d="M26.1666 25.375V22.9583C26.1666 21.6765 25.6574 20.4471 24.751 19.5407C23.8446 18.6342 22.6152 18.125 21.3333 18.125H11.6666C10.3848 18.125 9.15539 18.6342 8.24896 19.5407C7.34254 20.4471 6.83331 21.6765 6.83331 22.9583V25.375M21.3333 8.45833C21.3333 11.1277 19.1694 13.2917 16.5 13.2917C13.8306 13.2917 11.6666 11.1277 11.6666 8.45833C11.6666 5.78896 13.8306 3.625 16.5 3.625C19.1694 3.625 21.3333 5.78896 21.3333 8.45833Z"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_260_328"
        x="-2"
        y="0"
        width="37"
        height="37"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_260_328"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_260_328"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center px-3.5 w-full bg-sky-800 h-[51px]">
      <button aria-label="Menu">
        <MenuIcon />
      </button>
      <button aria-label="User profile">
        <UserIcon />
      </button>
    </header>
  );
};
