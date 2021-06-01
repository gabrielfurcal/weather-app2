import { useEffect, useState, useDebugValue } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { getForecastUrl } from '../utils/urls'
import getChartData from '../utils/transform/getChartData'
import getForecastItemList from '../utils/transform/getForecastItemList'

const useCityPage = () => {
    const [chartData, setChartData] = useState(null)
    const [forecastItemList, setForecastItemList] = useState(null)

    const { city, countryCode } = useParams()

    useDebugValue(`useCityPage ${city}`)

    useEffect(() => {
        const getForecast = async () => {
            try {
                const { data } = await axios.get(getForecastUrl({city, countryCode}))

                const dataAux = getChartData(data)

                setChartData(dataAux)
                
                const forecastItemListAux = getForecastItemList(data)

                setForecastItemList(forecastItemListAux)
            } catch(error) {
                console.log(error);
            }
        } 
        
        getForecast()
    }, [city, countryCode])

    return { city, countryCode, chartData, forecastItemList }
}

export default useCityPage