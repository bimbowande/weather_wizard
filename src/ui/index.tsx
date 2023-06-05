import React from "react";
import { useQuery } from "@tanstack/react-query";
import fetchCountries from "../services/fetchCountries";

import { Layout } from "./Layout";
import { LoaderComp } from "./Loader/Loader";

export const WeatherComp = () => {
  // fetch all countries
  const results = useQuery(["countries"], fetchCountries);

  // if countries fetch fails
  if (results.isLoading) return <LoaderComp />;

  // store country in an object
  const countries = results?.data?.data;

  // init country

  return <Layout countries={countries} />;
};
