import React from "react";
import rain from "../assets/images/raining.jpg";
import { SelectInput } from "./Input/select";
import { Header } from "./Header/Header";
import { Line } from "./Line/Line";
import { Text } from "./Text/Text";
import { InfoBox } from "./WeatherBox/InfoBox";
import { ForeCast } from "./WeatherBox/ForeCast";

export const WeatherComp = () => {
  return (
    <div className="  overflow-hidden h-full w-full rubik-font  bg-cover flex justify-center items-center ">
      <div
        style={{ backgroundImage: `url(${rain})` }}
        className="  bg-blend-overlay  blur bg-[#0a0e00a6] h-[100%] w-full scale-110 remove_scale "
      ></div>
      <div
        style={{ backgroundImage: `url(${rain})` }}
        className="h-[95%]  w-[95%] bg-transparent border-[#29342fb8] border-[12px] rounded-2xl flex absolute"
      >
        <div className=" flex flex-auto w-64 basis-1/2  border-1 bg-blend-overlay bg-[#000000b1] flex-col justify-between px-10">
          <div className="flex mt-8 gap-2 justify-end text-right px-4 py-4 ">
            <Text title={`21 April 2023`} /> <Text title="|" />
            <Text title="11:00" />
          </div>
          <div className="">
            <Header
              text="Heavy Rain"
              classStyle="text-[100px] text-right bg-clip-text text-bg "
            />
            <Line />
            <div className="flex gap-4 justify-center p-10 ">
              <InfoBox />
              <InfoBox />
              <InfoBox />
              <InfoBox />
              <InfoBox />
              <InfoBox />
              <InfoBox />
              <InfoBox />
              <InfoBox />
              <InfoBox />
            </div>
          </div>
        </div>
        <div className="flex-auto w-1 backdrop-blur-[15px] bg-blend-exclusion bg-[#4d5c6b18] blur_effect">
          <div className="p-5">
            <div className="my-5 px-5 ">
              <SelectInput value={undefined} inputName={undefined} />
            </div>
            <div className="text-center">
              <Header text="11&deg;C" classStyle="text-[100px]  text-[#fff]" />
              <p className="text-[#9e9797] ">Northwest , 39km/hr</p>
            </div>
            <Line classStyle={`my-3`} />
            <Header
              classStyle="text-center text-[#fff] text-[25px] mt-7 font-bold "
              text={`The Next Days Forecast`}
            />
            <div className="mt-6">
              <ForeCast />
              <ForeCast />
              <ForeCast />
              <ForeCast />
              <ForeCast />
              <ForeCast />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
