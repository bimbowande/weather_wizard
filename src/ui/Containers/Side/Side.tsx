import React from "react";
import { CountriesList } from "../../CountryList/CountriesList";
import { fahrenheitToC } from "../../../lib";
import { Line } from "../../Line/Line";
import Clock from "react-live-clock";
import { ForeCastWeather } from "../../ForeCast/ForeCastWeather";
import { useMediaQuery } from "usehooks-ts";
import { LoaderComp } from "../../Loader/Loader";

export const Side: React.FC<{
  data: {
    current: { temp: number; weather: [{ icon: string; description: string }] };
    timezone: string;
    daily: any;
  };
  status: string;
  city: any;
  countries: any;
  tempCity: any;
  updateCity: (e: any) => void;
}> = ({ data, city, status, countries, updateCity, tempCity }) => {
  const isLargeDevice = useMediaQuery("only screen and (min-width :1201px)");

  return (
    <div className="flex-auto w-1 backdrop-blur-[15px] bg-blend-exclusion bg-[#06060718] blur_effect h-[auto] ">
      <div className="p-5 h-[100%]  ">
        <CountriesList
          defaultValue={tempCity}
          data={countries}
          onsetCity={updateCity}
        />

        {status === "error" ? (
          <p>No weather data for this location</p>
        ) : status !== "success" ? (
          <LoaderComp />
        ) : (
          <div className="text-center ">
            {data?.current?.temp && (
              <h3 className="text-[60px]">
                {fahrenheitToC(data?.current?.temp)}&deg;c
              </h3>
            )}
            <p className="text-[#9e9797] font-bold">
              City: {city ?? tempCity?.capital}
            </p>
            {!isLargeDevice && (
              <div className=" flex flex-col text-center justify-center ">
                <div className="w-[100%] flex justify-center">
                  <img
                    className=" text-center"
                    src={`http://openweathermap.org/img/wn/${data?.current?.weather[0]?.icon}@2x.png`}
                    alt={`${data?.current?.weather[0]?.description}`}
                  />
                </div>
                <h3 className="text-[20px]">
                  {data?.current?.weather[0]?.description}
                </h3>
                <div>
                  <Clock
                    format={" Do, MMMM YYYY "}
                    ticking={true}
                    timezone={data?.timezone}
                  />
                  | {` `}
                  <Clock
                    format={"HH:mm:ss"}
                    ticking={true}
                    timezone={data?.timezone}
                  />
                </div>
              </div>
            )}
          </div>
        )}
        <Line classStyle={`my-3`} />

        <ForeCastWeather data={data?.daily} status={status && status} />
      </div>
    </div>
  );
};
