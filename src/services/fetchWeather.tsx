import { getWeatherInfo } from "./api";

const fetchWeather = async ({ queryKey }: any) => {
  const lat = queryKey[1];
  const long = queryKey[2];

  const apiRes = await fetch(getWeatherInfo(lat, long));
  if (!apiRes.ok) {
    throw new Error(`details fetch not okay`);
  }
  return await apiRes.json();
};

export default fetchWeather;
