import React, {useRef} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation, Pagination, Scrollbar, EffectFlip} from 'swiper';
import 'swiper/swiper-bundle.css';
import {SwiperMainData} from "./SwiperMain.dt";

SwiperCore.use([Navigation, Pagination, Scrollbar, EffectFlip]);


function SwiperMain() {

    const navigationPrevRef = useRef(null)
    const navigationNextRef = useRef(null)

        return (
            <div className="swiper-main--container">
                <i className="swiper-bg--left"><div id="home-slider-btn-prev" className="swiper-main--buttonPrev" ref={navigationPrevRef}>
                    <span className="btn-arrow-left"></span>
                </div> </i>
                <i className="swiper-bg--right"><div id="home-slider-btn-next" className="swiper-main--buttonNext" ref={navigationNextRef}>
                    <span className="btn-arrow-right"></span>
                </div> </i>
                <Swiper
                    className="swiper-main"
                    spaceBetween={30}
                    centeredSlides
                    slidesPerView={1}
                    loop
                    navigation
                    pagination={{
                        clickable: true
                    }}

                    onInit={(swiper) => {
                        swiper.params.navigation.prevEl = navigationPrevRef.current
                        swiper.params.navigation.nextEl = navigationNextRef.current
                        swiper.navigation.init()
                        swiper.navigation.update()

                    }}
                >


                    {SwiperMainData.map(({id, img}) => {
                        return (
                            <SwiperSlide key={`swiperMain-${id}`} className="swiper-main--slide">
                                <img className="swiper-img swiper-main--img" src={img} alt=""/>
                            </SwiperSlide>
                        )

                    })}
                </Swiper>
            </div>

        )
}




export default SwiperMain