import * as React from "react"
import './eventGallary.scss';
import 'swiper/swiper-bundle.css';

import 'swiper/scss/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Navigation} from "swiper";


function EventGallary({data}) {
    return(
        <div className="swiper-event">
        <Swiper
            modules={[ Navigation]}
            slidesPerView={1}
            navigation
            >
            { data.map((slide, id)=> {
            return (
               
                     <SwiperSlide key={slide.title +  id}>
                        <div className="event-gallery-card">
                            <div className="bg-image"  style={{backgroundColor: '#000'}}>
                                {slide.file.url && <img src={slide.file.url} alt={slide.title}/>}
                            </div> 
                                <div className="event-gallery-card__body">
                                        {slide.title && <h2 className="event-gallery-card__title">{slide.title } </h2>}
                                        {slide.description && <h4 className="event-gallery-card__subtitle">{slide.description}</h4> }
                                </div>
                        </div>
                    </SwiperSlide>
               
                )
            })}
        </Swiper>
    </div>
    )
}

export default EventGallary;

