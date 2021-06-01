import React from 'react'
import PropTypes from 'prop-types'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import Typography from '@material-ui/core/Typography'

const ForecastChart = ({ data }) => {
    return (
        <Typography>
            <ResponsiveContainer height={250} width={"95%"}>
                <LineChart margin={{top:21, bottom: 20, left: 5, right: 5}} data={data}>
                    <XAxis dataKey="dayHour"/>
                    <YAxis/>
                    <CartesianGrid/>
                    <Tooltip/>
                    <Legend />
                    <Line type="monotone" dataKey="min" stroke="#FF0000"/>
                    <Line type="monotone" dataKey="max" stroke="#0000FF"/>
                </LineChart>
            </ResponsiveContainer>
        </Typography>
    )
}

ForecastChart.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            dayHour: PropTypes.string.isRequired,
            min: PropTypes.number.isRequired,
            max: PropTypes.number.isRequired
        })
    )
}

export default ForecastChart