import {SET_POSITIONS} from "../constants";


const initialState = {
    positions: [],
}


const positions = (state = initialState, action) => {

    switch (action.type) {

        case SET_POSITIONS:
            return {
                ...state,
                positions: action.positions,
            }


        default:
            return state
    }
}

export default positions