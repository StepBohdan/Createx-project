import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import ClientImage from "./SliderClientsSayImages/clientImage.png";
import Arrow from "./SliderClientsSayImages/line-arrow.svg?react"
import Lines from "./SliderClientsSayImages/lines.svg?react"
import 'swiper/css';
import "./SliderClientsSay.scss";

export default function SliderClientsSay() {

    const slides = [
        {
          id: 1,
          className: "courtney-alexander",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in euismod vulputate etiam eros. Pulvinar neque pharetra arcu diam maecenas diam integer in.",
          stats: [
            { image: ClientImage, title: "Courtney Alexander", subtitle: "Position, Company name" },
          ]
        }
      ];

  return (
    <div className='slider-say'>
      <h1 className="slider-say-title">What our clients say</h1>
      <div className="slides">
        <Swiper
        allowTouchMove={false}
        loop={true}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[Navigation]}
        >
           
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className={`card ${slide.className}`}>
                    <div className="card-wrapper">
                  <div className="card-header">
                  <Lines/>
                    <h2 className="card-title">{slide.text}</h2>
                  </div>
                  <div className="card-bottom">
                    <img className='card-image' src={slide.stats[0].image} alt={slide.stats[0].title} />
                    <div className="card-text">
                       <p className="card-text-title">{slide.stats[0].title}</p>
                       <p className="card-text-subtitle">{slide.stats[0].subtitle}</p>
                    </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className={`card dublicate-${slide.className}`}>
                    <div className="card-wrapper">
                  <div className="card-header">
                  <Lines/>
                    <h2 className="card-title">{slide.text}</h2>
                  </div>
                  <div className="card-bottom">
                    <img className='card-image' src={slide.stats[0].image} alt={slide.stats[0].title} />
                    <div className="card-text">
                       <p className="card-text-title">{slide.stats[0].title}</p>
                       <p className="card-text-subtitle">{slide.stats[0].subtitle}</p>
                    </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            
        </Swiper>
        <div className="swiper-button-prev"><Arrow/></div>
            <div className="swiper-button-next"><Arrow/></div>
        </div>
    </div>
  )
}
