import React from "react";
import { cabin, inknutAntiqua } from "../../fonts";

type StateFilterProps = {
  selectedState: string | null;
  setSelectedState: (newState: string) => void;
};

const statesInNigeria = [
  "Abia",
  "Adamawa",
  "Akwa Ibom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Edo",
  "Ekiti",
  "Enugu",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara",
];

export default function StateFilter({
  selectedState,
  setSelectedState,
}: StateFilterProps) {
  return (
    <div className={`${cabin.className} space-y-4 pb-8 border-b`}>
      <span
        className={`${inknutAntiqua.className} text-sm font-medium text-gray-700`}
      >
        State
      </span>

      <select
        value={selectedState || ""}
        onChange={(e) => setSelectedState(e.target.value)}
        className='w-full p-2 border border-gray-300 rounded'
      >
        <option value='' disabled>
          Select a state
        </option>
        {statesInNigeria.map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
      </select>
    </div>
  );
}
