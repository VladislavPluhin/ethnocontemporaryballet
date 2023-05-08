import * as React from "react"
import './eventGallary.scss';
import 'swiper/swiper-bundle.css';

import 'swiper/scss/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Navigation} from "swiper";


function EventGallary({data}) {
    return(
        <div className="swiper-event ">
        <Swiper
            modules={[ Navigation]}
            autoHeight = {true}
            slidesPerView={1}
            spaceBetween={50}
            navigation
            >
            { data.map((slide, id)=> {
            return (
               
                     <SwiperSlide key={slide.title +  id}>
                        <div className="event-gallery-card">
                            <div className="bg-image" >
                                {slide.file.url && <img src={slide.file.url} alt={slide.title}/>}
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

