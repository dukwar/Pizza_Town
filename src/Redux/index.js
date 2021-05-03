import {combineReducers} from "redux";
import filters from "./reducers/filters";
import pizzas from "./reducers/pizzas";

const rootReducer = combineReducers({
    filters,
    pizzas
})


export default rootReducer