import {ADD_LOCAL_ITEM, ADD_PIZZA_CART, CLEAR_CART, REMOVE_CART_ITEM, REMOVE_LOCAL_ITEM} from "../constants";


const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0
}

const getPrice = arr => arr.reduce((acc, next) => acc + next.price, 0)

const _get = (obj, path) => {
    const [firstKey, ...keys] = path.split('.')

    return keys.reduce((val, key) => {
        return val[key]
    }, obj[firstKey])
}

const totalSum = (obj, path) => {

    return Object.values(obj).reduce((acc, obj) => {

        const value = _get(obj, path)
        return acc + value
    }, 0)

}





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


            const totalCount = totalSum(newItems, 'items.length')

            const totalPrice = totalSum(newItems, 'totalPrice')


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

            const newItems2 = {
                ...state.items
            }

            const currentPrice =  newItems2[action.id].items[0].price
            newItems2[action.id].items.pop()
            --newItems2[action.id].totalCount
            newItems2.[action.id].totalPrice = newItems2.[action.id].totalPrice - currentPrice


            return {
                ...state,
                items: newItems2,
                totalCount: state.totalCount - 1,
                totalPrice: state.totalPrice - currentPrice

            }

        case ADD_LOCAL_ITEM:

            const newItems3 = {
                ...state.items
            }

            const currentPriceAdd =  newItems3[action.id].items[0].price
            const obj = newItems3[action.id].items[0]
            newItems3[action.id].items.push(obj)
            ++newItems3[action.id].totalCount
            newItems3[action.id].totalPrice = newItems3[action.id].totalPrice + currentPriceAdd



            return {
                ...state,
                items: newItems3,
                totalCount: state.totalCount + 1,
                totalPrice: state.totalPrice + currentPriceAdd

            }




        default:
            return state
    }
}

export default cart