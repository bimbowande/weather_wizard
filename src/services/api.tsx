
// fetch countries
export const getCountries = `https://countriesnow.space/api/v0.1/countries/capital`

// get cities

export const getCityLongLat = (name:string) =>`https://api.api-ninjas.com/v1/city?name=${name}`

// get weather info 
export const getWeatherInfo = (lat:number, long:number ) => `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${long}&exclude=minutely,daily&appid=0c1a9e78c4c612a9308632c16dadb7af`