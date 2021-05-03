import React, {useCallback, useEffect} from 'react';
import {Categories, SortNav, PizzaBlock, PizzaLoadingBlock} from "../index";
import {useDispatch, useSelector} from "react-redux";
import {setCategory, setSortBy} from "../../Redux/actions/filters";
import {fetchPizzas} from "../../Redux/actions/pizzas";


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


    const { items, isFetching } = useSelector(({pizzas}) => {
        return {
            items: pizzas.items,
            isFetching: pizzas.isFetching
        }
    })

    const {category, sortBy} = useSelector(({filters}) => {
        return {
            category: filters.category,
            sortBy: filters.sortBy
        }
    })



    useEffect(() => {

        dispatch(fetchPizzas(category, sortBy))

    }, [category, sortBy, dispatch])


    const onSelectCategory = useCallback( index => {
        dispatch(setCategory(index))
    }, [dispatch])

    const onSelectSortBy = useCallback( sortBy => {
        dispatch(setSortBy(sortBy))
    }, [dispatch])


    return (
        <div className="container">
            <div className="content__top">

                <Categories
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
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">

                {isFetching && items ? items.map((item, index) => <PizzaBlock
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
        </div>
    );
}

export default Home;