import React, { useRef } from 'react'
import './carousel.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.css'
import small from './small.jpg'
import large from './large.jpg'

SwiperCore.use([Autoplay, Navigation, Pagination])

export const CarouselTemplate = () => {

    return (
        <>
            <div className='top-swiper'>
                <Swiper 
                     autoplay={
                      {  delay: 1000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter:true,
                      }}
                      /* onAfterInit={(swiper)=>{setTimeout(()=>swiper.autoplay.stop(),5000)}} */
                    loop={true}
                    pagination={{ clickable: true }}
                    navigation={true}
                    id='main'
                    onSlideChange={() => console.log('slide change')}
                    
                >
                    <SwiperSlide key={`slide-1`} tag='li'>
                        <a href='yandex.ru'>
                            <div>
                                <picture>
                                    <source media='(min-width:1024px )' srcSet={large} />
                                    <img
                                        src={small}
                                        style={{ listStyle: 'none' }}
                                        alt={`Slide 1}`}
                                    />
                                </picture>
                            </div>
                            <div className='swiper-panel'>
                                <div className='swiper-info'>
                                    <div className='swiper-title swiper-title-1'>
                                        «Она не та»: Дина Саева о том, как классно быть собой
                                    </div>
                                </div>
                                <div className='swiper-group'>
                                    <div className='swiper-link swiper-link--background swiper-link-1'>
                                        купить
                                    </div>
                                </div>
                            </div>
                            <span className='item-24'></span>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide key={`slide-2`} tag='li'>
                        <a href='yandex.ru'>
                            <div>
                                <picture>
                                    <source media='(min-width:1024px )' srcSet={large} />
                                    <img
                                        src={small}
                                        style={{ listStyle: 'none' }}
                                        alt={`Slide 1}`}
                                    />
                                </picture>
                            </div>
                            <div className='swiper-panel'>
                                <div className='swiper-info'>
                                    <div className='swiper-title swiper-title-1'>
                                        «Она не та»: Дина Саева о том, как классно быть собой
                                    </div>
                                </div>
                                <div className='swiper-group'>
                                    <div className='swiper-link swiper-link--background swiper-link-1'>
                                        купить
                                    </div>
                                </div>
                            </div>
                            <span className='item-24'></span>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide key={`slide-3`} tag='li'>
                        <a href='yandex.ru'>
                            <div>
                                <picture>
                                    <source media='(min-width:1024px )' srcSet={large} />
                                    <img
                                        src={small}
                                        style={{ listStyle: 'none' }}
                                        alt={`Slide 1}`}
                                    />
                                </picture>
                            </div>
                            <div className='swiper-panel'>
                                <div className='swiper-info'>
                                    <div className='swiper-title swiper-title-1'>
                                        «Она не та»: Дина Саева о том, как классно быть собой
                                    </div>
                                </div>
                                <div className='swiper-group'>
                                    <div className='swiper-link swiper-link--background swiper-link-1'>
                                        купить
                                    </div>
                                </div>
                            </div>
                            <span className='item-24'></span>
                        </a>
                    </SwiperSlide>
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
    )
}
