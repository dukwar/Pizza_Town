import {SET_ALL_ITEMS} from "../constants";


const initialState = {
    items: {},
    isFetching: false
}


const allItems = (state = initialState, action) => {

    switch (action.type) {

        case SET_ALL_ITEMS:

            const newItems = !action.items[0] ? {...state.items}
                : {...state.items, [action.items[0].category]: action.items}

            return {
                ...state,
                items: newItems,
            }


        default:
            return state
    }
}

export default allItems