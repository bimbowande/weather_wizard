import React from "react";

import { Header } from "../Header/Header";
import { ForeCastComp } from "./ForeCastComp";

export const ForeCastWeather: React.FC<{ data: []; status: string }> = ({
  data,
  status,
}) => {
  if (status !== "success") {
    return <>data</>;
  }
  return (
    <div className="h-[auto]">
      <Header
        classStyle="text-center text-[#fff] text-[25px] mt-7 font-bold md:text[20px] "
        text={`The Next Days Forecast`}
      />
      <div className="mt-6 h-[400px]  md:h-[200px] overflow-scroll">
        {!!data &&
          data.map((item: any, index: number) => (
            <ForeCastComp data={item} key={index} />
          ))}
      </div>
    </div>
  );
};
