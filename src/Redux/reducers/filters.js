import {SET_CATEGORY, SET_SORT_BY} from "../constants";


const initialState = {
    sortBy:{
        type: 'popular',
        order: 'desc'
    },
    category: null
}


const filters = (state = initialState, action) => {

    switch (action.type) {

        case SET_CATEGORY:
            return {
                ...state,
                category: action.index
            }


        case SET_SORT_BY:
            return {
                ...state,
                sortBy: action.sortBy
            }

        default:
            return state
    }
}

export default filters