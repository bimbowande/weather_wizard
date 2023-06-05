import React from "react";
import Clock from "react-live-clock";
import { DailyWeather } from "../../DailyWeather/DailyWeather";
import { LoaderComp } from "../../Loader/Loader";

export const Main: React.FC<{ data: any; status: string }> = ({
  data,
  status,
}) => {
  return (
    <div className=" flex flex-auto w-64 basis-1/2  border-1 bg-blend-overlay bg-[#111111f4] flex-col justify-between px-10 main_page">
      {status !== "success" ? (
        <div className="mt-100 h-full flex justify-center relative top-100">
          <LoaderComp />
        </div>
      ) : (
        <>
          <div className="flex mt-8 gap-2 justify-end text-right px-4 py-4 ">
            <Clock
              format={" Do, MMMM YYYY "}
              ticking={true}
              timezone={data?.timezone}
            />
            |
            <Clock
              format={"HH:mm:ss"}
              ticking={true}
              timezone={data?.timezone}
            />
          </div>

          <DailyWeather
            weather={data?.current?.weather}
            data={data?.hourly}
            status={status && status}
          />
        </>
      )}
    </div>
  );
};
