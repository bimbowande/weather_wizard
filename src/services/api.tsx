// fetch countries
export const getCountries = `https://countriesnow.space/api/v0.1/countries/capital`;

// get cities

export const getCityLongLat = (name: string) =>
  `https://api.api-ninjas.com/v1/city?name=${name}`;

// get weather info
export const getWeatherInfo = (lat: number, long: number) =>
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${long}& exclude=minutely&appid=${process.env.REACT_APP_API_OPEN_WEATHER}&units="metric"&lang='en'`;

// `https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_API_OPEN_WEATHER}`;
