import {SET_TOTAL_COUNT, SET_TOTAL_PRICE} from "../constants";


const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0
}


const cart = (state = initialState, action) => {

    switch (action.type) {

        case SET_TOTAL_PRICE:
            return {
                ...state,
                totalPrice: action.price
            }

        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.count
            }




        default:
            return state
    }
}

export default cart