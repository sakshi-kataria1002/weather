import { USER_ACTION_TYPES } from "./user.type"

//To validate the values entered are valid or not
export const getForecast = () => {
    return(
        {
            type:USER_ACTION_TYPES.GET_FORECAST
        }
    )
}
