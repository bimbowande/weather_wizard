import React from "react";

interface IHeader {
  text?: any;
  classStyle?: string;
  type?: string;
}

export const Header: React.FC<IHeader> = ({ text, classStyle, type }) => {
  return <h3 className={`${classStyle ?? ``}`}>{text}</h3>;
};
