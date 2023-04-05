import * as React from "react"

import 'swiper/swiper-bundle.css';
import 'swiper/scss/pagination';
import  './sectionMain.scss';

import RichText from '../richText/richText'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,  Pagination} from "swiper";

function SectionMain ({data})  {


  return (
      <section className="sectionMain">
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        loop='true'
        pagination={{
          clickable: true
        }}
        >
          { data.map((slide, id)=> {
          return (
                <SwiperSlide key={slide.title +  id}>
                    <div className="bg-image"  style={{backgroundColor: '#000'}}>
                        {slide.slideBgImage.url && <img src={slide?.slideBgImage.url} alt={slide.slideBgImage?.description}/>}
                        { slide.layerOnImage && <span className="bg-image-layer"  style={{backgroundColor: slide.layerOnImage ?  slide.layerOnImage : '' }}></span> }
                    </div>
                      <div className="sectionMain__slide" >
                        <div className="container">
                        <div className="description">
                          {slide.title && <h1 className="title"  style={{color: slide.colorText ? slide.colorText : '' }}>{slide.title}</h1>}
                          {slide.subtitle && <h6 className="subtitle"  style={{color: slide.colorText ? slide.colorText : '' }}>{slide.subtitle}</h6>}
                          {slide.colorText &&  <RichText data={slide.slideDescription} colorText={slide.colorText}/>} 
                        </div>
                      </div>
                  </div>
              </SwiperSlide>
              )
            })}
        </Swiper>
      </section>
  )
}


export default SectionMain;
