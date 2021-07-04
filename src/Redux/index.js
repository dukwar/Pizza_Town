import {combineReducers} from "redux";
import filters from "./reducers/filters";
import pizzas from "./reducers/pizzas";
import cart from "./reducers/cart";
import allItems from "./reducers/allItems";
import positions from "./reducers/positions";

const rootReducer = combineReducers({
    filters,
    positions,
    pizzas,
    allItems,
    cart
})


export default rootReducer