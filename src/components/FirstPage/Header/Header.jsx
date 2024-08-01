import React from 'react'
import Logo from "./HeaderImages/logo.svg?react"
import Illustration from "./HeaderImages/illustration.svg?react"
import Seo from "./HeaderImages/seo.svg?react"
import Website from "./HeaderImages/website.svg?react"
import Content from "./HeaderImages/content.svg?react"
import "./Header.scss"

export default function Header() {
  return (
<header>
    <div className="header-menu">
        <a href=""><Logo/></a>
        <ul className="header-menu-list">
            <li> <a className="header-menu-list-item" href="#">Services</a></li>
            <li> <a className="header-menu-list-item" href="#">Case Studies</a></li>
            <li> <a className="header-menu-list-item" href="#">About Us</a></li>
            <li> <a className="header-menu-list-item" href="#">Blog</a></li>
            <li> <a className="header-menu-list-item" href="#">Contacts</a></li>
        </ul>
        <a className="header-btn" href='#'><p className='header-btn-text'>Talk to a human</p></a>
    </div>
    <div className="header-main">
        <h1 className="header-title">Best <span className='colored'>SEO & Marketing</span> Solutions for You</h1>
        <div className="header-btns">
        <a href="#" className="header-main-btn"><p className='header-main-btn-text'>Get a free analysis</p></a>
        <a href="#" className="header-main-btn-play"><div className='player'></div></a><p className="header-main-btn-play-text">Play video</p>
        </div>
        <Illustration/>
    </div>
    <div className="footer-menu">
      <ul className="footer-menu-list">
        <li className="footer-menu-list-item"><Seo/> <p className="footer-menu-list-item-text">SEO Content Strategy</p></li>
        <div className="line-border"> </div>
        <li className="footer-menu-list-item"><Content/> <p className="footer-menu-list-item-text">Content Marketing</p></li>
        <div className="line-border"> </div>
        <li className="footer-menu-list-item"><Website/>  <p className="footer-menu-list-item-text">Website & Social Media Marketing</p></li>
      </ul>
    </div>
</header>     
   
  )
}
