import React from "react";

export const Text: React.FC<{ title: string }> = ({ title }) => {
  return <p>{title}</p>;
};
