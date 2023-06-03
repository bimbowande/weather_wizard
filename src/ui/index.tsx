import React from "react";
import { useQuery } from "@tanstack/react-query";
import fetchCountries from "../services/fetchCountries";
import { Shimmer } from "react-shimmer";

import { Layout } from "./Layout";

export const WeatherComp = () => {
  // fetch all countries
  const results = useQuery(["countries"], fetchCountries);

  // if countries fetch fails
  if (results.isLoading) return <Shimmer width={800} height={600} />;

  // store country in an object
  const countries = results?.data?.data;

  // init country

  return <Layout countries={countries} />;
};
