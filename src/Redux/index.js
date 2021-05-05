import {combineReducers} from "redux";
import filters from "./reducers/filters";
import pizzas from "./reducers/pizzas";
import cart from "./reducers/cart";

const rootReducer = combineReducers({
    filters,
    pizzas,
    cart
})


export default rootReducer