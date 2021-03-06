import React, { useMemo } from 'react'
import Grid from '@material-ui/core/Grid'
import LinearProgress from '@material-ui/core/LinearProgress'
import Paper from '@material-ui/core/Paper'
import CityInfo from '../components/CityInfo'
import Weather from '../components/Weather'
import WeatherDetails from '../components/WeatherDetails'
import Forecast from '../components/Forecast'
import ForecastChart from '../components/ForecastChart'
import AppFrame from '../components/AppFrame'
import useCityPage from '../hooks/useCityPage'
import useCityList from '../hooks/useCityList'
import { getCityCode } from '../utils/utils'
import { getCountryNameByCountryCode } from '../utils/serviceCity'
import { useWeatherDispatchContext, useWeatherStateContext } from '../WeatherContext'

const CityPage = () => {
    const data = useWeatherStateContext()
    const actions = useWeatherDispatchContext()

    const { allWeather, allChartData, allForecastItemList } = data
    // const { onSetAllWeather, onSetChartData, onSetForecastItemList } = actions
    const { city, countryCode } = useCityPage(actions, allChartData, allForecastItemList)
    
    const cities = useMemo(() => ([{ city: city, countryCode: countryCode }]), [city, countryCode])
    
    useCityList(cities, allWeather, actions)

    const cityCode = getCityCode(city, countryCode)

    const weather = allWeather[cityCode]
    const chartData = allChartData[cityCode]
    const forecastItemList = allForecastItemList[cityCode]

    const country = countryCode && getCountryNameByCountryCode(countryCode)
    const humidity = weather && weather.humidity
    const wind = weather && weather.wind
    const state = weather && weather.state
    const temperature = weather && weather.temperature

    return (
        <AppFrame>
            <Paper elevation={3}>
                <Grid container justify="space-around" direction="column" spacing={2}>
                    <Grid item container justify="center" alignItems="flex-end" xs={12}>
                        <CityInfo city={city} country={country}/>
                    </Grid>
                    <Grid container item xd={12} justify="center">
                        <Weather state={state} temperature={temperature} />
                        {humidity && wind && <WeatherDetails humidity={humidity} wind={wind}/>}
                    </Grid>
                    <Grid item>
                        {!chartData && !forecastItemList && <LinearProgress/>}
                    </Grid>
                    <Grid item>
                        {chartData && <ForecastChart data={chartData}/>}
                    </Grid>
                    <Grid item>
                        {forecastItemList && <Forecast forecastItemList={forecastItemList}/>}
                    </Grid>
                </Grid>
            </Paper>
        </AppFrame>
    )
}

export default CityPage