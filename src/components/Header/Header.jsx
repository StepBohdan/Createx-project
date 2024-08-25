import React, {useState} from 'react'
import { Link, useLocation } from 'react-router-dom';
import Logo from "./HeaderImages/logo.svg?react"
import Illustration from "./HeaderImages/illustration.svg?react"
import Seo from "./HeaderImages/seo.svg?react"
import Website from "./HeaderImages/website.svg?react"
import Content from "./HeaderImages/content.svg?react"
import Arrow from "./HeaderImages/arrow.svg?react"
import MainBackground from "./HeaderImages/background.png"
import ServicesBackground from "./HeaderImages/servicesbackground.png"
import SeoBackground from "./HeaderImages/backgroundseo.png"
import Phone from "./HeaderImages/iPhone.svg?react"

import "./Header.scss"

export default function Header() {

  const location = useLocation()

  const [isModalOpen, setIsModalOpen] = useState(false);

  function toogleModal(e) {
    e.preventDefault();
    setIsModalOpen(!isModalOpen)
  }



  function handleOutsideClick(e) {
    if (e.target.className === 'modal') {
      setIsModalOpen(false);
    }
  }

  const isMainHeader = location.pathname === "/";
  const isServices = location.pathname === "/services";
  const isSeo = location.pathname === "/services/seo";
  
  const backgroundImage = isMainHeader ? MainBackground
                    : isSeo ? SeoBackground 
                    : isServices ? ServicesBackground
                    : 'none';
                    // onClick={toogleModal}


  return (
<header style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>


    <div className="header-menu">
        <Link to="/"><Logo/></Link>
        <ul className="header-menu-list">
            <li id='openModalBtn'> <Link to="/services" className={`header-menu-list-item ${isModalOpen ? 'active' : ''}`}  id='openModalBtn' >Services <Arrow/></Link>
            
            {isModalOpen && (
              <div className={`modal ${isModalOpen ? 'show' : ''}`} onClick={handleOutsideClick}>
                <div className="modal-content">
                  <ul>
                    <li><a href="" className='modal-list-item' >Social Media Marketing <Arrow/></a></li>
                    <li><Link to="/services/seo" className='modal-list-item'>Search Engine Optimization <Arrow/></Link></li>
                    <li><a href="" className='modal-list-item'>Research Service <Arrow/></a></li>
                    <li><a href="" className='modal-list-item'>Content & PR Service <Arrow/></a></li>
                    <li><a href="" className='modal-list-item'>Payed Traffic Management <Arrow/></a></li>
                  
                  </ul>
                </div>
              </div>
            )
            }
                  {!isModalOpen && (
              <div className="modal" onClick={handleOutsideClick}>
              
              </div>
            )}
               
            
            </li>
            <li> <a className="header-menu-list-item" href="#">Case Studies</a></li>
            <li> <a className="header-menu-list-item" href="#">About Us</a></li>
            <li> <a className="header-menu-list-item" href="#">Blog</a></li>
            <li> <a className="header-menu-list-item" href="#">Contacts</a></li>
        </ul>
        <a className="header-btn" href='#'><p className='header-btn-text'>Talk to a human</p></a>
    </div>
    {isMainHeader ? (
      <><div className="header-main">
          <h1 className="header-title">Best <span className='colored'>SEO & Marketing</span> Solutions for You</h1>
          <div className="header-btns">
            <a href="#" className="header-main-btn"><p className='header-main-btn-text'>Get a free analysis</p></a>
            <a href="#" className="header-main-btn-play"><div className='player'></div></a><p className="header-main-btn-play-text">Play video</p>
          </div>
          <Illustration />
        </div><div className="footer-menu">
            <ul className="footer-menu-list">
              <li className="footer-menu-list-item"><Seo /> <p className="footer-menu-list-item-text">SEO Content Strategy</p></li>
              <div className="line-border"> </div>
              <li className="footer-menu-list-item"><Content /> <p className="footer-menu-list-item-text">Content Marketing</p></li>
              <div className="line-border"> </div>
              <li className="footer-menu-list-item"><Website />  <p className="footer-menu-list-item-text">Website & Social Media Marketing</p></li>
            </ul>
          </div></>
    )
    
  : isServices ? (    <><div className="main-header-main">
          <div className="route"></div>
          <h1 className="main-header-title">Our services</h1>
          <p className="main-header-subtitle">We offer more than services. Our agency provides solutions to your top-priority concerns, involving customer targeting, email performance and sales growth. If there is no existing solution readily available, we create one, specifically to suit your business.</p>
        </div><div className="main-header-bottom">
            <a href="#" className="main-header-bottom-btn">Start now</a>
            <div className="phone"><Phone /><div className="phone-text"><span className='call'>Call us</span><p className='number'>(405) 555-0128</p></div></div>

          </div></>) 
      : isSeo ? (
      <>
      <div className="main-header-main">
          <div className="route"></div>
          <h1 className="main-header-title">Search Engine Optimization</h1>
          <p className="main-header-subtitle">Ipsum blandit etiam nunc vitae. Duis lobortis odio vel morbi dui pellentesque enim integer facilisi. Ultrices vitae tempor amet nec euismod non. </p>
        </div>
      <div className="form-wrap">
        <label>
      <p className="ph-title">Your website URL</p>
      <div className='form'><input className='form-input' type="text" placeholder='http://yoursite.com' /><a className='form-btn' href="#">Analyse your site</a></div>
      </label>
      
      </div>
      </>

      ) : null}
    

</header>     
   
  )
}
