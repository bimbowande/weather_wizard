import React from "react";

interface ISelect {
  initValue?: string;
  label?: string;
  value: any;
  inputName: any;
  onChange?: (e: any) => void;
  optionValue?: string[];
  onFocus?: (e: any) => void;
  className?: string;
}

export const SelectInput: React.FC<ISelect> = () => {
  return (
    <select
      id="countries"
      className="bg-transparent border border-[#424040] text-[#fff] text-sm rounded-lg block w-full p-3.5 dark:border-gray-600   "
    >
      <option selected>Choose a country</option>
      <option value="US">United States</option>
      <option value="CA">Canada</option>
      <option value="FR">France</option>
      <option value="DE">Germany</option>
    </select>
  );
};
