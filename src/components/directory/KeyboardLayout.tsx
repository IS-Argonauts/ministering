import * as React from "react";
import { KeyboardKey } from "./types";

const suggestions = ['"The"', "the", "to"];

const keyboardRows: KeyboardKey[][] = [
  ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"].map((key) => ({
    label: key,
    type: "letter",
  })),
  ["a", "s", "d", "f", "g", "h", "j", "k", "l"].map((key) => ({
    label: key,
    type: "letter",
  })),
  [
    { label: "", type: "special", icon: "ti ti-arrow-up" },
    ...["z", "x", "c", "v", "b", "n", "m"].map((key) => ({
      label: key,
      type: "letter",
    })),
    { label: "", type: "special", icon: "ti ti-backspace" },
  ],
];

export const KeyboardLayout: React.FC = () => {
  return (
    <section className="fixed inset-x-0 bottom-0 p-2 bg-slate-100">
      <div className="flex justify-between items-center">
        <div className="flex-1">
          <div className="flex justify-between px-2">
            {suggestions.map((suggestion, index) => (
              <p key={index} className="text-sm leading-5 text-gray-500">
                {suggestion}
              </p>
            ))}
          </div>
        </div>
      </div>

      {keyboardRows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className={`grid grid-cols-${row.length} gap-1 mb-1`}
        >
          {row.map((key, keyIndex) => (
            <button
              key={keyIndex}
              className={`p-2 text-sm leading-5 text-center rounded ${
                key.type === "special" ? "bg-gray-300" : "bg-white"
              }`}
              aria-label={key.label || key.icon}
            >
              {key.icon ? (
                <i className={`${key.icon} text-gray-600`} />
              ) : (
                key.label
              )}
            </button>
          ))}
        </div>
      ))}

      <div className="grid grid-cols-3 gap-1">
        <button className="p-2 text-sm leading-5 text-center bg-gray-300 rounded">
          ABC
        </button>
        <button className="p-2 text-sm leading-5 text-center bg-white rounded">
          space
        </button>
        <button className="p-2 text-sm leading-5 text-center bg-gray-300 rounded">
          return
        </button>
      </div>

      <div className="flex justify-between items-center px-2 mt-2">
        <div className="flex-1">
          <div className="flex items-center bg-white rounded-full">
            <div className="flex-1 px-px text-white bg-teal-700 rounded-full">
              Assigned
            </div>
            <div className="flex-1 px-px text-gray-500">Unassigned</div>
          </div>
        </div>
        <button
          className="p-2 ml-2 bg-teal-700 rounded-full"
          aria-label="Search"
        >
          <i className="ti ti-search text-white" />
        </button>
      </div>
    </section>
  );
};
