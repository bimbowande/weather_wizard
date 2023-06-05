import React from "react";
import { SelectInput } from "../Input/select";

export const CountriesList: React.FC<{
  data: any;
  onsetCity: (e: any) => void;
  defaultValue: any;
}> = ({ data, onsetCity, defaultValue }) => {
  if (!data) return <h3>Fetching data...</h3>;
  return (
    <div className="my-5 px-5">
      <SelectInput
        data={data}
        value={defaultValue}
        onchange={onsetCity}
        inputName={undefined}
      />
    </div>
  );
};
