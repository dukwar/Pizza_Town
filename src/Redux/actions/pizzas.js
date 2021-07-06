import {SET_LOADED, SETPIZZAS} from "../constants";
import axios from "axios";

export const setLoaded = val => {
    return {
        type: SET_LOADED,
        val
    }
}

export const setPizzas = (items) => {
    return {
        type: SETPIZZAS,
        items
    }
}


export const fetchPizzas = (category,sortBy) => (dispatch) => {



    axios.get(`http://localhost:3001/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`)
        .then(data => dispatch(setPizzas(data.data)))

    setTimeout(() => {
        dispatch(setLoaded(true))
    }, 1000)

}

