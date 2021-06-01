import React from 'react'
import ForecastItem from './ForecastItem'
import { render } from '@testing-library/react'

test("ForecastItem render", async () => {
    //Tarea, se deben renderizar los diferentes textos
    const { findByText } = render(<ForecastItem weekDay="Monday" hour={10} state="clear" temperature={23} />)

    const weekDay = await findByText(/Monday/)
    const hour = await findByText(/10/)
    const temperature = await findByText(/23/)

    expect(weekDay).toHaveTextContent("Monday")
    expect(hour).toHaveTextContent("10")
    expect(temperature).toHaveTextContent("23 °")
})