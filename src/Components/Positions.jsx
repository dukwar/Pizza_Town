import React, {useEffect} from 'react';
import PositionItem from "./PositionItem";
import {fetchItems} from "../Redux/actions/allItems";
import {useDispatch, useSelector} from "react-redux";
import PropTypes from "prop-types";
import PizzaBlock from "./PizzaBlock";

function Positions({id, name, category, onClickAddPizza}) {

    useEffect(() => {
        dispatch(fetchItems(category))
    }, [])

    const items = useSelector(({allItems}) => {
        if (allItems.items[category]) {
            return allItems.items[category]
        }
    })

    const cartItems = useSelector(({cart}) => cart.items)
    const dispatch = useDispatch()

    return (
        <>


            <h2 className="content__title">{name}</h2>
            <div className="content__items">
                {items && items.map(({id, name, imageUrl, price, description}) => {
                    return  <PositionItem name={name}
                                          id={id}
                                          img={imageUrl}
                                          price={price}
                                          onClickAddPizza={onClickAddPizza}
                                          addedCartCount={cartItems[id] && cartItems[id].items.length}
                    />
                })}
            </div>
        </>
    );
}

Positions.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    price: PropTypes.number.isRequired,
    onClickAddPizza: PropTypes.func,
    addedCartCount: PropTypes.number
}

Positions.defaultProps = {
    name: '---',
    category: 'name',
}


export default Positions