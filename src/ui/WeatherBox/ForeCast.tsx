import React from "react";
import { CloudDrizzle } from "lucide-react";

export const ForeCast: React.FC<{}> = () => {
  return (
    <div className="flex gap-4  justify-center mb-5 ">
      <div className="bg-[#414140] w-[55px] h-[55px] flex justify-center items-center rounded-lg ">
        <CloudDrizzle />
      </div>
      <div className="flex flex-col justify-between">
        <p>Friday, April 21</p>
        <p className="font-thin">Heavy Rain</p>
      </div>
      <div className="ml-10 border-l border-[#7373737e] px-4 flex flex-col justify-between">
        <p>9&deg;</p>
        <p>9&deg;</p>
      </div>
    </div>
  );
};
