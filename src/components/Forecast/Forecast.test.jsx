import React from 'react'
import Forecast from './Forecast'
import { render } from '@testing-library/react'

const forecastItemList = [
    { hour: 18, state: "clear", temperature: 17, weekDay: "Thursday" },
    { hour: 6, state: "clouds", temperature: 18, weekDay: "Friday" },
    { hour: 12, state: "drizzle", temperature: 18, weekDay: "Friday" },
    { hour: 18, state: "clouds", temperature: 19, weekDay: "Thursday" },
    { hour: 6, state: "rain", temperature: 17, weekDay: "Saturday" },
    { hour: 12, state: "rain", temperature: 17, weekDay: "Saturday" }
]

test("Forecast render", async () => {
    // ¿Cómo encontrar los items?
    // findAllByTestId nos va a permitir encontrar con esa marca
    const { findAllByTestId } = render(<Forecast forecastItemList={forecastItemList} />)

    const forecastItems = await findAllByTestId("forecast-item-container")

    expect(forecastItems).toHaveLength(6)
})