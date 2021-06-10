import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Alert from '@material-ui/lab/Alert'
import CityInfo from '../CityInfo'
import Weather from '../Weather'
import useCityList from '../../hooks/useCityList'
import { getCityCode } from '../../utils/utils'
import { useWeatherDispatchContext, useWeatherStateContext } from '../../WeatherContext'

const CityListItem = React.memo(({ city, country, countryCode, weather, eventOnClickCity }) => {
    return (
        <ListItem button alignItems="center" onClick={() => eventOnClickCity(city, countryCode)}>
            <Grid container justify="center" alignItems="center">
                <Grid item md={9} xs={12}>
                    <CityInfo city={city} country={country}/>
                </Grid>
                <Grid item md={3} xs={12}>
                    <Weather temperature={weather && weather.temperature} state={weather && weather.state}/>
                </Grid>
            </Grid>
        </ListItem>
    )
})

CityListItem.displayName = "CityListItem"

// renderCityAndCountry se va a convertir en una función que retorna otra función
const renderCityAndCountry = eventOnClickCity => (cityAndCountry, weather) => {
    const { city, countryCode } = cityAndCountry

    return <CityListItem key={getCityCode(city, countryCode)} eventOnClickCity={eventOnClickCity} weather={weather} { ...cityAndCountry }/>
}

//cities: es un array, y en cada item tiene que tener la ciudad, pero además el country
const CityList = ({ cities, onClickCity }) => {
    const data = useWeatherStateContext()
    const actions = useWeatherDispatchContext()

    const { allWeather } = data
    //const { onSetAllWeather } = actions
    const { error, setError } = useCityList(cities, allWeather, actions)

    return (
        <div>
            {error && <Alert onClose={() => setError(null)} severity="error">{error}</Alert>}
            <List>
                {
                    cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry, allWeather[getCityCode(cityAndCountry.city, cityAndCountry.countryCode)]))
                }
            </List>
        </div>
    )
}

CityList.propTypes = {
    cities: PropTypes.arrayOf(PropTypes.shape({
        city: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired,
        countryCode: PropTypes.string.isRequired
    })).isRequired,
    onClickCity: PropTypes.func.isRequired
}

export default React.memo(CityList)