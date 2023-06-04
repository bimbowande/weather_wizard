import React from "react";
import { Line } from "../Line/Line";
import { getTime, fahrenheitToC } from "../../lib";
export const InfoBox: React.FC<{
  timeData: {
    dt: number;
    temp: number;
    dew_point: number;
    weather: [{ icon: string; description: string }];
  };
}> = ({ timeData }) => {
  return (
    <div className={`bg-[#3e3e3c88] w-[80px] p-5 rounded-lg`}>
      <p>{getTime(timeData?.dt)}</p>
      <Line classStyle={`mt-1`} />
      <div className="mt-3 text-center  flex justify-center">
        <img
          src={`http://openweathermap.org/img/wn/${timeData.weather[0].icon}@4x.png`}
          className="card-img-top"
          alt={`${timeData?.weather[0].description}`}
        />
      </div>
      <h3 className="font-bold mt-4 text-[20px]">
        {fahrenheitToC(timeData?.temp)}&deg;
      </h3>
    </div>
  );
};
