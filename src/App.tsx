import React from "react";
import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WeatherComp } from "./ui";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WeatherComp />
    </QueryClientProvider>
  );
}

export default App;
