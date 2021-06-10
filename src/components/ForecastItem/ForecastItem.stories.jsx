import React from 'react'
import ForecastItem from './ForecastItem'

export default {
    title: "ForecastItem",
    component: ForecastItem,
    argTypes: {
        hour: { control: { type: "number" } },
        state: { control: { type: "text" } },
        temperature: { control: { type: "number" } },
        weekDay: { control: { type: "text" } }
    }
}

export const MondaySunny = (args) => <ForecastItem {...args}/>
MondaySunny.args = { hour: 10, state: "clear", temperature: 23, weekDay: "Monday" }