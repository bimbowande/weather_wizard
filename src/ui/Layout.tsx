import React, { useEffect, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import { Overlay } from "./Overlay/Overlay";
import rain from "../assets/images/raining.jpg";

import { useLongLat } from "../services/hooks/useLongLat";
import { useWeather } from "../services/hooks/useWeather";

import { Main } from "./Containers/Main/Main";
import { Side } from "./Containers/Side/Side";

export const Layout: React.FC<{ countries: any }> = ({ countries }) => {
  const tempValue: any = countries?.[110] ?? "";
  const [city, setCity] = useState<string>(tempValue?.capital);

  // coordinate
  const coordRes = useLongLat(city);
  const weather = useWeather(coordRes?.[0]);
  const weatherInfo = weather?.[0];
  const weatherStatus = weather?.[1];
  const isLargeDevice = useMediaQuery("only screen and (min-width : 1201px)");

  useEffect(() => {}, [city, coordRes, weather]);

  const updateCity = (e: any) => {
    setCity(e.target.value);
  };

  return (
    <div className="overflow-hidden h-full w-full rubik-font  bg-cover flex justify-center items-center main-container ">
      <Overlay />
      <div
        style={{ backgroundImage: `url(${rain})` }}
        className="h-[95%] w-[95%] bg-transparent border-[#29342fb8] border-[12px] rounded-2xl flex absolute class-fill "
      >
        {isLargeDevice && <Main data={weatherInfo} status={weatherStatus} />}

        <Side
          data={weatherInfo}
          tempCity={tempValue}
          city={city}
          updateCity={updateCity}
          status={weatherStatus}
          countries={countries}
        />
      </div>
    </div>
  );
};
