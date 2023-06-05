import React from "react";

interface ISelect {
  initValue?: string;
  label?: string;
  value: any;
  inputName: any;
  // eslint-disable-next-line no-unused-vars
  onchange?: (e: any) => void;
  optionValue?: string[];
  onFocus?: (e: any) => void;
  className?: string;
  data: any;
}

export const SelectInput: React.FC<ISelect> = ({ data, onchange, value }) => {
  return (
    <>
      <select
        id="countries"
        className="bg-transparent border border-[#424040] text-[#fff] text-sm rounded-lg block w-full p-3.5 dark:border-gray-600 mt-2"
        onChange={(e) => onchange?.(e)}
      >
        <option defaultChecked>Select a City</option>
        {!!data &&
          data.map((d: any, i: any) => (
            <option key={i} value={d?.capital ?? d?.name}>
              {d.capital} , {d.name}
            </option>
          ))}
      </select>
    </>
  );
};
