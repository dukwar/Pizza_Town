import React from 'react';
import PropTypes from "prop-types";
import {Swiper, SwiperSlide} from "swiper/react";



const SwiperCategories = React.memo(function Categories({items, activeCategory, onClick}) {

    console.log('Render')


    return (

        <div className="categories">
            <ul>
            <Swiper

                breakpoints={{

                    1315: {

                        slidesPerView: 6.5,
                        spaceBetween: 100,
                    },

                    1024: {

                        slidesPerView: 5.5,
                        spaceBetween: 30,
                    },

                    810: {

                        slidesPerView: 5,
                        spaceBetween: 30,
                    },

                    685: {

                        slidesPerView: 4,
                        spaceBetween: 30,
                    },

                    240: {

                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}

                className="swiper-categories"
                spaceBetween={30}
                freeMode
                slidesPerView={3}
            >


                <SwiperSlide className="swiper-categories--slide">
                    <li className={activeCategory === null && 'active'} onClick={() => onClick(null)}>Все</li>
                </SwiperSlide>
                    {items && items.map((item, index) => {
                        return <SwiperSlide key={`category-${index}`} className="swiper-categories--slide">
                                <li className={index === activeCategory && 'active'}
                                    onClick={() => onClick(index)}>{item}</li>
                            </SwiperSlide>

                    })}
            </Swiper>
            </ul>
        </div>

    );
})

SwiperCategories.propTypes = {
    activeCategory: PropTypes.oneOf([PropTypes.number, null]),
    items: PropTypes.array.isRequired,
    onClick: PropTypes.func
}

SwiperCategories.defaultProps = {
    activeCategory: null,
    items: []
}



export default SwiperCategories;