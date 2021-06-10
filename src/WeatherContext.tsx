import React, { useReducer, useContext, FC } from 'react'

const WeatherStateContext: any = React.createContext(null)

const WeatherDispatchContext: any = React.createContext(null)

const initialValue = {
    allWeather: {},
    allChartData: {},
    allForecastItemList: {}
}

const reducer = (state: any, action: any) => {
    switch(action.type) {
        case "SET_ALL_WEATHER":
            const weatherCity = action.payload
            const newAllWeather = { ...state.allWeather, ...weatherCity }
            return { ...state, allWeather: newAllWeather }
        case "SET_CHART_DATA":
            const chartDataCity = action.payload
            const newAllChartData = { ...state.allChartData, ...chartDataCity }
            return { ...state, allChartData: newAllChartData }
        case "SET_FORECAST_ITEM_LIST":
            const forecastItemList = action.payload
            const newAllForecastItemList = { ...state.allForecastItemList, ...forecastItemList }
            return { ...state, allForecastItemList: newAllForecastItemList }
        default:
            return state
    }
}

const WeatherContext: FC = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialValue)

    return (
        <WeatherDispatchContext.Provider value={dispatch}>
            <WeatherStateContext.Provider value={state}>
                {children}
            </WeatherStateContext.Provider>
        </WeatherDispatchContext.Provider>
    )
}

export const useWeatherDispatchContext = () => {
    const dispatch = useContext(WeatherDispatchContext)

    if(!dispatch) {
        throw Error("Must set dispatch provider")
    }

    return dispatch
}

export const useWeatherStateContext = () => {
    const state = useContext(WeatherStateContext)

    if(!state) {
        throw Error("Must set state provider")
    }

    return state
}

export default WeatherContext