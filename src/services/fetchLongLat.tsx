import { getCityLongLat } from "./api";

const fetchLongLat = async ({ queryKey }: any) => {
  const name = queryKey[1];

  const apiRes = await fetch(getCityLongLat(name), {
    headers: {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      "X-Api-Key": `${process.env.REACT_APP_API_NINJA}`,
    },
  });

  if (!apiRes.ok) {
    throw new Error(`details fetch not okay`);
  }
  return await apiRes.json();
};

export default fetchLongLat;
