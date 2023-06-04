import React from "react";
import { Header } from "../Header/Header";
import { Line } from "../Line/Line";
import { InfoBox } from "../WeatherBox/InfoBox";
import { Breathing } from "react-shimmer";

export const DailyWeather: React.FC<{
  data: [];
  status: string;
  weather: [{ main: string; icon: string; description: string }];
}> = ({ data, status, weather }) => {
  if (status !== "success") {
    return <Breathing width={50} height={50} />;
  }
  const limitData = data?.splice(0, 15);

  return (
    <div className="">
      <img
        src={`http://openweathermap.org/img/wn/${weather[0]?.icon}@4x.png`}
        className="card-img-top"
        alt={`${weather[0]?.description}`}
      />
      <Header
        text={weather[0]?.description}
        classStyle="text-[100px] text-right bg-clip-text text-bg "
      />

      <Line />
      <div className="flex gap-4 justify-start p-5  flex-wrap ">
        {!!limitData &&
          limitData.map((item: any, index: any) => (
            <InfoBox timeData={item} key={index} />
          ))}
      </div>
    </div>
  );
};
