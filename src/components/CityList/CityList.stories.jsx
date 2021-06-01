import React from 'react'
import CityList from './CityList'
import { action } from '@storybook/addon-actions'
export default {
    title: "CityList",
    component: CityList
}

const cities = [
    {city: "Santo Domingo", country: "Dominican Republic", countryCode: "DO"},
    {city: "Buenos Aires", country: "Argentina", countryCode: "AR"},
    {city: "Montreal", country: "Canada", countryCode: "CA"},
    {city: "Moscow", country: "Russia", countryCode: "RU"}
]

export const CityListExample = () => <CityList cities={cities} onClickCity={action("Click en city")}/>