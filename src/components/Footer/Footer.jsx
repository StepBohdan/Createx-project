import React from 'react'
import Logo from "./FooterImages/logo.svg?react"
import FaceBook from "./FooterImages/Facebook.svg?react"
import LinkedIn from "./FooterImages/Linked-In.svg?react"
import Instagram from "./FooterImages/Instagram.svg?react"
import Twitter from "./FooterImages/Twitter.svg?react"
import Arrow from "./FooterImages/line-arrow.svg?react"
import ClutchAward from "./FooterImages/clutchAward.svg?react"
import GoogleAward from "./FooterImages/googleAward.svg?react"
import GoodFirms from "./FooterImages/goodFirmsAward.svg?react"
import HubSpot from "./FooterImages/hubSpotAward.svg?react"
import UpButton from "./FooterImages/upBtn.svg?react"
import Heart from "./FooterImages/Heart.svg?react"


import "./Footer.scss"

export default function Footer() {
  
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  


    
  return (
    <footer>
        <div className="footer-top-wrap">
      <ul className="footer-top-list">
        <li className="footer-top-list-item">
            <Logo/>
            <p className="footer-title">Createx SEO Agency is a full-service digital marketing agency. We help businesses make more money through a wealth of performance data and market research. We create science-based SEO strategies to empower our clients.</p>
            <ul className="social-networks">
                <li className="social-networks-item"><a href="#"><FaceBook/></a></li>
                <li className="social-networks-item"><a href="#"><LinkedIn/></a></li>
                <li className="social-networks-item"><a href="#"><Twitter/></a></li>
                <li className="social-networks-item"><a href="#"><Instagram/></a></li>
            </ul>
        </li>
        <li className="footer-top-list-item">
            <p className="footer-subtitle">COMPANY</p>
            <ul className="linked-list">
                <li className="linked-list-item"><a href="#" className='linked-list-item-text'>About Us</a></li>
                <li className="linked-list-item"><a href="#" className='linked-list-item-text'>Case Studies</a></li>
                <li className="linked-list-item"><a href="#" className='linked-list-item-text'>Blog</a></li>
                <li className="linked-list-item"><a href="#" className='linked-list-item-text'>Careers</a></li>
                <li className="linked-list-item"><a href="#" className='linked-list-item-text'>Contacts</a></li>
            </ul>
        </li>
        <li className="footer-top-list-item">
        <p className="footer-subtitle">SERVICES</p>
        <ul className="linked-list">
                <li className="linked-list-item"><a href="#" className='linked-list-item-text'>Social Media</a></li>
                <li className="linked-list-item"><a href="#" className='linked-list-item-text'>SEO</a></li>
                <li className="linked-list-item"><a href="#" className='linked-list-item-text'>Research</a></li>
                <li className="linked-list-item"><a href="#" className='linked-list-item-text'>Content & PR</a></li>
                <li className="linked-list-item"><a href="#" className='linked-list-item-text'>Payed Traffic</a></li>
            </ul>
        </li>
        <li className="footer-top-list-item">
        <p className="footer-subtitle">CONTACT US</p>
        <ul className="linked-list">
                <li className="linked-list-item"><a href="#" className='linked-list-item-text'>(405) 555-0128</a></li>
                <li className="linked-list-item"><a href="#" className='linked-list-item-text'>hello@createx.com</a></li>
            </ul>
        </li>
        <li className="footer-top-list-item">
        <p className="footer-subtitle">SIGN UP TO OUR NEWSLETTER</p>
        <div className='input-wrapper'>
        <input className='footer-input' type="email" placeholder='Email address' /><Arrow className="input-arrow" />
        <p className="input-legend">*Subscribe to our newsletter to receive communications and early updates from Createx SEO Agency.</p>
        </div>
        </li>
      </ul>
      <div className="line"></div>
        <div className="footer-middle">
            <div className="awards">
                <ul className="awards-list">
                    <li className="awards-list-item"><ClutchAward/></li>
                    <li className="awards-list-item"><GoodFirms/></li>
                    <li className="awards-list-item"><GoogleAward/></li>
                    <li className="awards-list-item"><HubSpot/></li>
                </ul>
            </div>
            <div className="btn-wrap">
                <p className="btn-title">GO TO TOP</p>
                <button className="up-btn" onClick={scrollToTop}><UpButton/></button>
            </div>
        </div>
      </div>
      <div className="footer-bottom-wrap">
      <div className="footer-bottom">
            <p className="footer-bottom-text">© All rights reserved.Made with <Heart/> by Createx Studio </p>
        </div>
    </div>
    </footer>
    
  )
}
