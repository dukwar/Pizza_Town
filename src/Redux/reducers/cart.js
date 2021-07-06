import {ADD_LOCAL_ITEM, ADD_PIZZA_CART, CLEAR_CART, REMOVE_CART_ITEM, REMOVE_LOCAL_ITEM} from "../constants";


const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0
}

const getPrice = arr => arr.reduce((acc, next) => acc + next.price, 0)

const getTotalPrice = (obj) => Object.keys(obj).reduce((acc, curr) => {
    const totalPrice = 'totalPrice'
    return acc += obj[curr][totalPrice]
}, 0)

const getTotalCount = (obj) => Object.keys(obj).reduce((acc, curr) => {
    const totalCount= 'totalCount'
    return acc += obj[curr][totalCount]
}, 0)





const cart = (state = initialState, action) => {

    switch (action.type) {

        case ADD_PIZZA_CART:

            const currentPizzaItems = !state.items[action.payload.id]
                ? [action.payload]
                : [...state.items[action.payload.id].items, action.payload]



            const newItems = {

                ...state.items,
                [action.payload.id]: {
                    items:  currentPizzaItems,
                    totalPrice: getPrice(currentPizzaItems),
                    totalCount: currentPizzaItems.length
                }

            }


            const totalCount = getTotalCount(newItems)
            const totalPrice = getTotalPrice(newItems)


            return {
                ...state,
                items: newItems,
                totalCount: totalCount,
                totalPrice: totalPrice

                
            }

        case CLEAR_CART:
            return {
                ...state,
                items: {},
                totalPrice: 0,
                totalCount: 0

            }

        case REMOVE_CART_ITEM:

            const newItem = {
                ...state.items,
            }

            const currentTotalPrice = newItem[action.id].totalPrice
            const currentTotalCount = newItem[action.id].totalCount

            delete newItem[action.id]

            return {
                ...state,
                items: newItem,
                totalPrice: state.totalPrice - currentTotalPrice,
                totalCount: state.totalCount - currentTotalCount
            }

        case REMOVE_LOCAL_ITEM:

            const arr = state.items[action.id].items.length !== 1
                ? [...state.items[action.id].items.slice(1)]
                : [...state.items[action.id].items]

            const newItems2 = {
                ...state.items,
                [action.id]: {
                    items:  arr,
                    totalPrice: getPrice(arr),
                    totalCount: arr.length
                }
            }


            const totalCountRemove = getTotalCount(newItems2)
            const totalPriceRemove = getTotalPrice(newItems2)


            return {
                ...state,
                items: newItems2,
                totalCount: totalCountRemove,
                totalPrice: totalPriceRemove
            }


        case ADD_LOCAL_ITEM:

            const obj =  state.items[action.id].items[0]
            const arr2 = [...state.items[action.id].items, obj]

            const newItems3 = {
                ...state.items,
                [action.id]: {
                    items: arr2,
                    totalPrice: getPrice(arr2),
                    totalCount: arr2.length
                }
            }

            const totalCountAdd = getTotalCount(newItems3)
            const totalPriceAdd = getTotalPrice(newItems3)


            return {
                ...state,
                items: newItems3,
                totalCount: totalCountAdd,
                totalPrice: totalPriceAdd,

            }




        default:
            return state
    }
}

export default cart