import React from 'react';
import './carousel.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
    Navigation,
    Pagination,
    Controller,
    Thumbs,
    Autoplay,
} from 'swiper';
import 'swiper/swiper-bundle.css';
import { url } from 'inspector';
SwiperCore.use([Autoplay, Navigation, Pagination]);

export const CarouselTemplate = () => {
    const slides = [];
    for (let i = 0; i < 5; i += 1) {
        slides.push(
            <SwiperSlide key={`slide-${i}`} tag="li">
                <a href="yandex.ru">
                    <div
                        style={{
                            background: `url(https://picsum.photos/id/${
                                i + 1
                            }/500/300)`,
                        }}
                        className="url2"
                    >
                        <img
                            src={`https://picsum.photos/id/${i + 1}/500/300`}
                            style={{ listStyle: 'none' }}
                            alt={`Slide ${i}`}
                        />
                    </div>
                    <div className="swiper-panel">
                        <div className="swiper-info">
                            <div className="swiper-title swiper-title-1">
                                «Она не та»: Дина Саева о том, как классно быть
                                собой
                            </div>
                        </div>
                        <div className="swiper-group">
                            <div className="swiper-link swiper-link--background swiper-link-1">
                                купить
                            </div>
                        </div>
                    </div>

                    <span className="item-24"></span>
                </a>
            </SwiperSlide>
        );
    }
    return (
        <>
            <div className="top-swiper">
                <Swiper
                    autoplay={true}
                    loop={true}
                    pagination={{ clickable: true }}
                    navigation={true}
                    speed={2500}
                    id="main"
                >
                    {slides}
                </Swiper>
            </div>
            {/*    <Swiper
                pagination={{ clickable: true }}
                navigation={true}
                speed={900}
                id="main"
            >
                {slides}
            </Swiper> */}
        </>
    );
};
