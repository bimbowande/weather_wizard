import React from "react";
import { convertUnixToDate, fahrenheitToC } from "../../lib";

export const ForeCastComp: React.FC<{
  data: {
    temp: any;
    summary: string;
    dt: number;
    weather: [{ icon: string; description: string }];
  };
}> = ({ data }) => {
  return (
    <div className="flex gap-4  justify-center mb-5 ">
      <div className="bg-[#414140] w-[55px] h-[55px] flex justify-center items-center rounded-lg ">
        <img
          src={`http://openweathermap.org/img/wn/${data?.weather?.[0]?.icon}@4x.png`}
          alt="data"
        />
      </div>
      <div className="flex flex-col grow justify-between">
        <p>{convertUnixToDate(data?.dt)}</p>
        <p className="font-light">{data?.weather?.[0]?.description}</p>
      </div>
      <div className="ml-10 border-l border-[#7373737e] px-4 flex flex-col justify-between">
        <p>{fahrenheitToC(data?.temp?.min)}&deg;C</p>
        <p> {fahrenheitToC(data?.temp?.max)}&deg;C</p>
      </div>
    </div>
  );
};
