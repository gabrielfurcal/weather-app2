import React from 'react'
import WeatherDetails from './WeatherDetails'
import { render } from '@testing-library/react'

test("WeatherDetails render", async () => {
    //findByText: Permite encontrar un componente por el texto que muestra 
    const { findByText } = render(<WeatherDetails humidity={80} wind={10}/>)

    //Al utilizar las barras utilizamos un REGEXP, una expresión regular
    const humidity = await findByText(/80/)
    const wind = await findByText(/10/)

    expect(humidity).toHaveTextContent("Humidity: 80%")
    expect(wind).toHaveTextContent("Wind: 10km/h")
})