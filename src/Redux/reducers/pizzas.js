import {SET_LOADED, SETPIZZAS} from "../constants";


const initialState = {
    items: [],
    isFetching: false
}


const pizzas = (state = initialState, action) => {

    switch (action.type) {

        case SETPIZZAS:
            return {
                ...state,
                items: action.items,
                isFetching: true
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