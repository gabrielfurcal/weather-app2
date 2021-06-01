const appid = "104c3b628ca00ad9d9a0e7a7673aa8d1"
export const getWeatherUrl = ({city, countryCode}) => `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${appid}`
export const getForecastUrl = ({city, countryCode}) => `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${appid}`