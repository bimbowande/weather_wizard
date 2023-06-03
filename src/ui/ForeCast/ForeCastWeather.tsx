import React from "react";

import { Header } from "../Header/Header";
import { ForeCastComp } from "./ForeCastComp";

export const ForeCastWeather = () => {
  return (
    <div>
      <Header
        classStyle="text-center text-[#fff] text-[25px] mt-7 font-bold "
        text={`The Next Days Forecast`}
      />
      <div className="mt-6">
        <ForeCastComp />
        <ForeCastComp />
        <ForeCastComp />
        <ForeCastComp />
        <ForeCastComp />
      </div>
    </div>
  );
};
