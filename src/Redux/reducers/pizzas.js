import {SET_LOADED, SETPIZZAS} from "../constants";


const initialState = {
    pizzas: [],
    isFetching: false
}


const pizzas = (state = initialState, action) => {

    switch (action.type) {

        case SETPIZZAS:
            return {
                ...state,
                pizzas: action.items,
            }

        case SET_LOADED:
            return {
                ...state,
                isFetching: action.val
            }


        default:
            return state
    }
}

export default pizzas