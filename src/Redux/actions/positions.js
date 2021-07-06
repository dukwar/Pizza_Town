import {SET_POSITIONS} from "../constants";
import axios from "axios";

export const setPositions = (positions) => {
    return {
        type: SET_POSITIONS,
        positions
    }
}


export const fetchPositions = () => (dispatch) => {

    axios.get(`/positions`)
        .then(data => dispatch(setPositions(data.data)))

}