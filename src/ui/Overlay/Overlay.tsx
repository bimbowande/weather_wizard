import React from "react";
import rain from "../../assets/images/raining.jpg";

export const Overlay = () => {
  return (
    <div
      style={{ backgroundImage: `url(${rain})` }}
      className="  bg-blend-overlay  blur bg-[#0a0e00a6] h-[100%] w-full scale-110 remove_scale "
    ></div>
  );
};
