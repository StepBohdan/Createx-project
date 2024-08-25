import React from 'react'
import ServicesImage from "./ServicesImages/services-image.png"
import Mark from "./ServicesImages/Mark.svg?react"
import './Services.scss'


export default function Services() {
  return (
    <div className='services'>
      <h1 className="services-title">Our services</h1>
      <ul className="services-menu">
        <li className="services-list-item"><a className='services-list-item-link' href="#">Social Media</a></li>
        <li className="services-list-item"><a className='services-list-item-link' href="#">SEO</a></li>
        <li className="services-list-item"><a className='services-list-item-link' href="#">Research</a></li>
        <li className="services-list-item"><a className='services-list-item-link' href="#">Content & PR</a></li>
        <li className="services-list-item"><a className='services-list-item-link' href="#">Payed Traffic</a></li>
      </ul>
      <div className="services-wrap">
        <div className='left-part'>
      <h2 className="services-subtitle">Complete Worflow For Any SEO Professional</h2>
      <ul className="services-list">
        <li className="services-list-item"><Mark/>Aenean enim tellus morbi nisl vulputate dictumst.</li>
        <li className="services-list-item"><Mark/>Nibh sapien volutpat lacus augue.</li>
        <li className="services-list-item"><Mark/>Vel in amet, placerat adipiscing est pharetra.</li>
        <li className="services-list-item"><Mark/>Gravida ornare sit in et ut sit sem id.</li>
        <li className="services-list-item"><Mark/>Ultrices pellentesque dictum enim egestas ac diam.</li>
        <li className="services-list-item"><Mark/>Sit semper enim senectus integer ut turpis et.</li>
      </ul>
        <a href="#" className="services-btn">Learn more</a> <a href="#" className="services-btn">Try SEO toolkit</a>
      </div>
      <div className="right-part">
            <img src={ServicesImage} alt="no image" />
            </div>
      </div>
    </div>
  )
}
