import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation, Pagination, Scrollbar, EffectFlip} from 'swiper';
import 'swiper/swiper-bundle.css';
import {SwiperSubData} from "./SwiperSub.dt";

SwiperCore.use([Navigation, Pagination, Scrollbar, EffectFlip]);


function SwiperSub() {


    return (
        <div className="swiper-sub--container">
            <h1>Новое и популярное</h1>
            <Swiper
                breakpoints={{

                    1315: {

                        slidesPerView: 4,
                        spaceBetween: 100,
                    },

                    1024: {

                        slidesPerView: 3.2,
                        spaceBetween: 30,
                    },

                    810: {

                        slidesPerView: 2.5,
                        spaceBetween: 30,
                    },

                    685: {

                        slidesPerView: 2,
                        spaceBetween: 30,
                    },

                    520: {
                        slidesPerView: 1.5,
                        spaceBetween: 30,
                    },

                    425: {
                        slidesPerView: 1.3,
                        spaceBetween: 30,
                    },

                    320: {
                        slidesPerView: 1.5,
                        spaceBetween: 30,
                    },

                    240: {

                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                }}


                className="swiper-sub"
                spaceBetween={30}
                slidesPerView={4}
            >


                {SwiperSubData.map(({id, title, price,  img}) => {
                    return (
                        <SwiperSlide key={`swiperSub-${id}`} className="swiper-sub--slide">
                            <div className="swiper-sub--content">
                                <div className="swiper-sub--img">
                                    <img src={img} alt=""/>
                                </div>
                                <div className="swiper-sub--title">
                                    <p>{title}</p>
                                    <p>{price}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>

    )
}




export default SwiperSub