import React from "react";

export const Line: React.FC<{ classStyle?: any }> = ({ classStyle }) => {
  return (
    <hr
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      className={`h-px p-1.3  bg-[#4f4e4e] border-0 dark:bg-gray-700 ${
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        classStyle ?? ``
      }`}
    />
  );
};
