import React from "react";
import { Line } from "../Line/Line";
import { CloudDrizzle } from "lucide-react";

export const InfoBox: React.FC = () => {
  return (
    <div className={`bg-[#3e3e3c88] w-[80px] p-5 rounded-lg`}>
      <p>09:00</p>
      <Line classStyle={`mt-1`} />
      <div className="mt-3 text-center  flex justify-center">
        <CloudDrizzle />
      </div>
      <h3 className="font-bold mt-4 text-[20px]">11&deg;C</h3>
    </div>
  );
};
