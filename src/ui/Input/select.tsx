import React from "react";
import Select from "react-select";
import { ICountry, ISelect } from "../../domain/interface";

const customStyles = {
  option: (provided: any) => ({
    ...provided,
    color: "black",
    padding: 5,
    backgroundColor: "#ccc",
    cursor: "pointer",
  }),
};
export const SelectInput: React.FC<ISelect> = ({ data, onchange, value }) => {
  return (
    <>
      <Select
        aria-invalid="spelling"
        onChange={(e) => onchange?.(e)}
        getOptionLabel={(v: ICountry) => `${v?.name},${v?.capital}`}
        getOptionValue={(v: ICountry) => v?.capital}
        options={data && data}
        styles={customStyles}
      />
      {/* <select
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
      </select> */}
    </>
  );
};
