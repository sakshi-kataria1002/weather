import { combineReducers } from "redux";
import forecastReducer from "./forecast/forecast.reducer";

export const rootReducer = combineReducers({
    forecast: forecastReducer
})