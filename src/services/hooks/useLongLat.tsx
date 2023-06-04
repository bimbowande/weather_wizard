import { useQuery } from "@tanstack/react-query";
import fetchLongLat from "../fetchLongLat";

export const useLongLat = (city: string) => {
  if (city) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const results = useQuery(["lat_long", city], fetchLongLat);
    return [(results?.data && results?.data[0]) ?? [], results.status];
  }
};
