import React from "react";

interface IHeader {
  text?: string;
  classStyle?: string;
}

export const Header: React.FC<IHeader> = ({ text, classStyle }) => {
  return <h3 className={`${classStyle ?? ``}`}>{text}</h3>;
};
