import {SET_ALL_ITEMS} from "../constants";
import axios from "axios";

export const setAllItems = (items) => {
    return {
        type: SET_ALL_ITEMS,
        items
    }
}

export const fetchItems = (category) => async (dispatch) => {

    const data = await axios.get(`http://localhost:3001/${category}`)
    dispatch(setAllItems(data.data))

}