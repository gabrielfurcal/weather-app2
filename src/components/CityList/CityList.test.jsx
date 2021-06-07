import React from 'react'
import CityList from './CityList'
import { render, fireEvent } from '@testing-library/react'

const cities = [
    {city: "Santo Domingo", country: "Dominican Republic", countryCode: "DO"},
    {city: "Buenos Aires", country: "Argentina", countryCode: "AR"},
    {city: "Montreal", country: "Canada", countryCode: "CA"},
    {city: "Moscow", country: "Russia", countryCode: "RU"}
]

test("CityList render", async () => {
    const { findAllByRole } = render(<CityList cities={cities} onClickCity={() => {}} data={{ allWeather: {} }} actions={{}}/>)

    const elements = await findAllByRole("button")
    
    expect(elements).toHaveLength(5)
})

test("CityList click on item", async () => {
    // Debemos simular una acción del usuario: click sobre un item
    // Para eso vamos a utilizar una función "mock"

    const fnClickOnItem = jest.fn()
    const { findAllByRole } = render(<CityList cities={cities} onClickCity={fnClickOnItem} data={{ allWeather: {} }} actions={{}}/>)
    const items = await findAllByRole("button")

    // Ahora, apra simular la acción, vamos a utilizar fireEvent
    // fireEvent es parte de la librería testing-library/react
    fireEvent.click(items[0])

    // ¿Ahora qué tuvo que suceder?
    // Se debió llamar a la función fnClickOnItem UNA única vez
    expect(fnClickOnItem).toHaveBeenCalledTimes(0)
})