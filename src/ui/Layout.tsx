import React, { useEffect, useState } from "react";
import { Overlay } from "./Overlay/Overlay";
import rain from "../assets/images/raining.jpg";
import { Line } from "./Line/Line";

import { Header } from "./Header/Header";
import { CountriesList } from "./CountryList/CountriesList";
import { DailyWeather } from "./DailyWeather/DailyWeather";
import { ForeCastWeather } from "./ForeCast/ForeCastWeather";
import Clock from "react-live-clock";
import { useLongLat } from "../services/hooks/useLongLat";

import { useWeather } from "../services/hooks/useWeather";

export const Layout: React.FC<{ countries: any }> = ({ countries }) => {
  const tempValue = countries?.[110] ?? "";
  const [city, setCity] = useState<string>(tempValue?.capital);

  // coordinate
  const coordRes = useLongLat(city);
  const weather = useWeather( coordRes?.[0])
  console.log(weather);

  useEffect(() => {}, [city,coordRes]);

  const updateCity = (e: any) => {
    setCity(e.target.value);
  };

  return (
    <div className="overflow-hidden h-full w-full rubik-font  bg-cover flex justify-center items-center">
      <Overlay />
      <div
        style={{ backgroundImage: `url(${rain})` }}
        className="h-[95%]  w-[95%] bg-transparent border-[#29342fb8] border-[12px] rounded-2xl flex absolute"
      >
        <div className=" flex flex-auto w-64 basis-1/2  border-1 bg-blend-overlay bg-[#000000b1] flex-col justify-between px-10">
          <div className="flex mt-8 gap-2 justify-end text-right px-4 py-4 ">
            <Clock
              format={" Do, MMMM YYYY "}
              ticking={true}
              timezone={"Europe/London"}
            />
            |
            <Clock format={"HH:mm"} ticking={true} timezone={"Europe/London"} />
          </div>
          <DailyWeather />
        </div>
        <div className="flex-auto w-1 backdrop-blur-[15px] bg-blend-exclusion bg-[#4d5c6b18] blur_effect">
          <div className="p-5">
            <CountriesList
              defaultValue={tempValue}
              data={countries && countries}
              onsetCity={updateCity}
            />
            <div className="text-center">
              <Header text="11&deg;C" classStyle="text-[100px]  text-[#fff]" />
              <p className="text-[#9e9797] ">{city ?? tempValue?.capital}</p>
            </div>
            <Line classStyle={`my-3`} />
            <ForeCastWeather />
          </div>
        </div>
      </div>
    </div>
  );
};
