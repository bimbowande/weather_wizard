import { getCountries } from "./api";

const fetchCountries = async ({ queryKey }: any) => {
  const apiRes = await fetch(getCountries);

  if (!apiRes.ok) {
    throw new Error(`details fetch not okay`);
  }
  return await apiRes.json();
};

export default fetchCountries;
