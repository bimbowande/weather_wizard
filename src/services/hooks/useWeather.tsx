import { useQuery } from "@tanstack/react-query";
import fetchWeather from "../fetchWeather";

export const useWeather =  (coord: any) => {
  if (coord) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const result =  useQuery(
      ["weather", coord?.latitude, coord?.longitude],
      fetchWeather
    );
    return [result.data, result.status];
  }
  return [{ data: [] }, { status: "error" }];
};
