import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from 'swiper/modules';
import National from "./SliderStudiesImages/national.svg?react";
import Delmar from "./SliderStudiesImages/delmar.svg?react";
import Sunset from "./SliderStudiesImages/sunset.svg?react";
import Deliverability from "./SliderStudiesImages/deliverability.png";
import Engagement from "./SliderStudiesImages/engagement.png";
import GrowthInSales from "./SliderStudiesImages/growthinsales.png";
import GrowthInSales2 from "./SliderStudiesImages/growthinsales2.png";
import OpenRate from "./SliderStudiesImages/openrate.png";
import Arrow from "./SliderStudiesImages/line-arrow.svg?react"
import './SliderStudies.scss';

function SliderStudies() {
  const slides = [
    {
      id: 1,
      className: "national",
      image: National,
      title: "Charity organisation",
      text: "Createx SEO Agency helped National Inc. increase their MQL to SQL conversion rate by 300%.",
      stats: [
        { image: Engagement, title: "90%", subtitle: "Engagement" },
        { image: Deliverability, title: "100%", subtitle: "Deliverability" },
      ],
    },
    {
      id: 2,
      className: "delmar",
      image: Delmar,
      title: "Oil and natural resources",
      text: "With an advanced A/B testing and usability analysis, Createx SEO Agency helps Del Mar see a 400% increase in conversion rate.",
      stats: [
        { image: GrowthInSales, title: "200%", subtitle: "Growth in sales" },
        { title: "1,400", subtitle: "Target investors" },
      ],
    },
    {
      id: 3,
      className: "sunset",
      image: Sunset,
      title: "Personal care",
      text: "We helped Sunset company break through a noisy industry and better understand their buyer's journey.",
      stats: [
        { image: OpenRate, title: "70%", subtitle: "Open Rate" },
        { image: GrowthInSales2, title: "200%", subtitle: "Growth in sales" },
      ],
    },
  ];

  return (
    <div className="slider">
      <div className="slider-wrapper">
        <h1 className="slider-title">Read our clients' case studies</h1>
        <div className="slides">
          <Swiper
            spaceBetween={30}
            slidesPerView={3}
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
                  <div className="card-header">
                    <slide.image />
                    <h2 className="card-title">{slide.title}</h2>
                    <div className="line"></div>
                  </div>
                  <div className="card-main">
                    <p className="card-text">{slide.text}</p>
                  </div>
                  <div className="card-bottom">
                    {slide.stats.map((stat, statIndex) => (
                     
                      <div key={statIndex} className="circle-wrapper">
                         {stat.image && <img src={stat.image} alt="no image" />}
                         <div className='circle-text'>
                        <p className="circle-title">{stat.title}</p>
                        <p className="circle-subtitle">{stat.subtitle}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
         
            {slides.map((slide) => (
              <SwiperSlide key={`duplicate-${slide.id}`}>
                <div className={`card ${slide.className}`}>
                  <div className="card-header">
                    <slide.image />
                    <h2 className="card-title">{slide.title}</h2>
                    <div className="line"></div>
                  </div>
                  <div className="card-main">
                    <p className="card-text">{slide.text}</p>
                  </div>
                  <div className="card-bottom">
                    {slide.stats.map((stat, statIndex) => (
                    
                    <div key={statIndex} className="circle-wrapper">
                    {stat.image && <img src={stat.image} alt="no image" />}
                    <div className='circle-text'>
                   <p className="circle-title">{stat.title}</p>
                   <p className="circle-subtitle">{stat.subtitle}</p>
                   </div>
                 </div>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-button-prev"><Arrow/></div>
          <div className="swiper-button-next"><Arrow/></div>
        </div>
        <div className="slider-bottom">
        <p className="slider-bottom-btn-text">Explore more case studies</p>
        <a href="#" className="slider-bottom-btn">View all case studies</a>
        </div>
      </div>
    </div>
  );
}

export default SliderStudies;
