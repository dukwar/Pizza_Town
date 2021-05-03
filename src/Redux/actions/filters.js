import {SET_CATEGORY, SET_SORT_BY} from "../constants";

export const setSortBy = (sortBy) => {
    return {
        type: SET_SORT_BY,
        sortBy
    }
}

export const setCategory = (index) => {
    return {
        type: SET_CATEGORY,
        index
    }
}