import React from "react";
import { CountriesList } from "../../CountryList/CountriesList";
import { fahrenheitToC } from "../../../lib";
import { Line } from "../../Line/Line";
import { ForeCastWeather } from "../../ForeCast/ForeCastWeather";

export const Side: React.FC<{
  data: any;
  status: string;
  city: any;
  countries: any;
  tempCity: any;
  updateCity: (e: any) => void;
}> = ({ data, city, status, countries, updateCity, tempCity }) => {
  return (
    <div className="flex-auto w-1 backdrop-blur-[15px] bg-blend-exclusion bg-[#06060718] blur_effect ">
      <div className="p-5">
        <CountriesList
          defaultValue={tempCity}
          data={countries}
          onsetCity={updateCity}
        />
        <div className="text-center">
          {data?.current?.temp && (
            <h3 className="text-[60px]">
              {fahrenheitToC(data?.current?.temp)}&deg;c
            </h3>
          )}

          <p className="text-[#9e9797] font-bold">
            City: {city ?? tempCity?.capital}
          </p>
        </div>
        <Line classStyle={`my-3`} />

        <ForeCastWeather data={data?.daily} status={status && status} />
      </div>
    </div>
  );
};
