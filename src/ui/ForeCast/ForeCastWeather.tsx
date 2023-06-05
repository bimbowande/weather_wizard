import React from "react";
import { Header } from "../Header/Header";
import { ForeCastComp } from "./ForeCastComp";

import { LoaderComp } from "../Loader/Loader";

export const ForeCastWeather: React.FC<{ data: []; status: string }> = ({
  data,
  status,
}) => {
  return (
    <div className="forecast_container">
      <Header
        classStyle="text-center text-[#fff] text-[25px] mt-7 font-bold md:text[20px] "
        text={`The Next Days Forecast`}
      />
      <div className="mt-6  lg:h-[500px] sm:h-[300px] md:h-[300px] lg:overflow-scroll mobile_view  ">
        {status === "error" ? (
          <p> No data found</p>
        ) : (
          status !== "success" && <LoaderComp />
        )}
        {!!data &&
          data.map((item: any, index: number) => (
            <ForeCastComp data={item} key={index} />
          ))}
      </div>
    </div>
  );
};
