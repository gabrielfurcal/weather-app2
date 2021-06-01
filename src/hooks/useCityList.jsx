import { useState, useEffect } from 'react'
import axios from 'axios'
import { getWeatherUrl } from '../utils/urls'
import getAllWeather from '../utils/transform/getAllWeather'

const useCityList = (cities, onSetAllWeather) => {
    //const [allWeather, setAllWeather] = useState({})
    const [error, setError] = useState(null)

    useEffect(() => {
        const setWeather = async (city, countryCode) => {
            try {
                const response = await axios.get(getWeatherUrl({city, countryCode}))
                const allWeatherAux = getAllWeather(response, city, countryCode)

                // setAllWeather(allWeather => ({...allWeather, ...allWeatherAux}))
                onSetAllWeather(allWeatherAux)
            } catch(error) {
                if(error.response) { // Errores que nos responde el server
                    setError("An error has been occurred in the weather server")
                } else if(error.request) { // Errores que suceden por no llegar al server
                    setError("Check the internet connection")
                } else { // Errores imprevistos
                    setError("An error has been occurred while loading the data")
                }
            }
        }
        
        cities.forEach(({ city, countryCode }) => {
            setWeather(city, countryCode)
        })

    }, [cities, onSetAllWeather])

    return { error, setError }
}

export default useCityList