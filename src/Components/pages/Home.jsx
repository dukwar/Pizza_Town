import React, {useCallback, useEffect} from 'react';
import {SortNav, PizzaBlock, PizzaLoadingBlock} from "../index";
import {useDispatch, useSelector} from "react-redux";
import {setCategory, setSortBy} from "../../Redux/actions/filters";
import {fetchPizzas} from "../../Redux/actions/pizzas";
import {addPizzaToCart} from "../../Redux/actions/cart";
import SwiperCategories from "../SwiperCategories/SwiperCategories";
import SnackBlock from "../SnackBlock/SnackBlock";
import {useScrollTopMenu} from "../../hooks/scrollMenu.hook";
import {fetchPositions} from "../../Redux/actions/positions";
import Positions from "../Positions";


const categoryNames = [
    'Мясные',
    'Вегетарианская',
    'Гриль',
    'Острые',
    'Закрытые',
]

const sortItems = [
    {name: 'популярности', type: 'popular', order: 'desc'},
    {name: 'цена', type: 'price', order: 'asc'},
    {name: 'алфавит', type: 'name',  order: 'asc'}

]

function Home() {

    const dispatch = useDispatch()
    const { pizzas, isFetching } = useSelector(({pizzas}) => pizzas)
    const positions = useSelector(({positions}) => positions.positions)
    const cartItems = useSelector(({cart}) => cart.items)

    console.log(isFetching)

    const {category, sortBy} = useSelector(({filters}) => {
        return {
            category: filters.category,
            sortBy: filters.sortBy
        }
    })





    useEffect(() => {
        dispatch(fetchPositions())
        dispatch(fetchPizzas(category, sortBy))
    }, [category, sortBy, dispatch])


    const onSelectCategory = useCallback( index => {
        dispatch(setCategory(index))
    }, [dispatch])

    const onSelectSortBy = useCallback( sortBy => {
        dispatch(setSortBy(sortBy))
    }, [dispatch])


    const handleAddPizzaToCart = (obj) => {
        dispatch(addPizzaToCart(obj))
    }


    return (
        <div className="container">
            <div className="content__top">
                <SwiperCategories
                    activeCategory={category}
                    onClick={onSelectCategory}
                    items={categoryNames}
                />
                <SortNav
                    onClickSort={onSelectSortBy}
                    activeSortBy={sortBy.type}
                    items={sortItems}
                />
            </div>

            <h2 className="content__title">Пицца</h2>
            <div className="content__items">

                {isFetching && pizzas ? pizzas.map((item, index) =>
                    <PizzaBlock
                        onClickAddPizza={(obj) => handleAddPizzaToCart(obj)}
                        addedCartCount={cartItems[item.id] && cartItems[item.id].items.length}
                        id={item.id}
                        key={item.id}
                        name={item.name}
                        img={item.imageUrl}
                        types={item.types}
                        sizes={item.sizes}
                        price={item.price}
                        category={item.category}
                        rating={item.rating}
                        isFetching={true}
                />) : Array(10)
                    .fill(0)
                    .map((_, index) =>
                        <PizzaLoadingBlock key={index} />
                    )
                }
            </div>

            {isFetching && positions && positions.map(({id, name, category}) => {
                return <Positions
                    key={`position-${name}`}
                    id={id}
                    name={name}
                    category={category}
                    onClickAddPizza={(obj) => handleAddPizzaToCart(obj)}

                />
            })}

            {/*<h2 className="content__title">Закуски</h2>*/}
            {/*<div className="content__items">*/}
            {/*    {snacks && snacks.map(({id, name, imageUrl, description, price}) => {*/}
            {/*        return <SnackBlock*/}
            {/*            id={id}*/}
            {/*            name={name}*/}
            {/*            img={imageUrl}*/}
            {/*            description={description}*/}
            {/*            price={price}*/}
            {/*            addedCartCount={cartItems[id] && cartItems[id].items.length}*/}
            {/*            onClickAddPizza={(obj) => handleAddPizzaToCart(obj)}*/}
            {/*        />*/}
            {/*    })}*/}
            {/*</div>*/}
        </div>
    );
}

export default Home;