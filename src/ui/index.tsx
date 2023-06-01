import React from "react";
import rain from "../assets/images/raining.jpg";

export const WeatherComp = () => {
  return (
    <div className="  overflow-hidden h-full w-full   bg-cover flex justify-center items-center ">
      <div
        style={{ backgroundImage: `url(${rain})` }}
        className="  bg-blend-overlay  blur bg-[#0a0e00a6] h-[100%] w-full scale-110  remove_scale "
      ></div>
      <div
        style={{ backgroundImage: `url(${rain})` }}
        className="h-[90%] z-6 w-[95%] bg-transparent border-[#384741] border-[12px] rounded-2xl absolute"
      ></div>
    </div>
  );
};
