const cities = [
    {city: "Santo Domingo", country: "Dominican Republic", countryCode: "DO"},
    {city: "Buenos Aires", country: "Argentina", countryCode: "AR"},
    {city: "Montreal", country: "Canada", countryCode: "CA"},
    {city: "Moscow", country: "Russia", countryCode: "RU"}
]

export const getCities = () => (cities)

export const getCountryNameByCountryCode = (countryCode) => {
    return cities.filter(c => c.countryCode === countryCode)[0].country
}