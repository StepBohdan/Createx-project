import React from 'react'
import FeedBackImage from "./FeedbackImage/feedback-img.png"
import "./Feedback.scss"

export default function Feedback() {
  return (
      <div className="feedback">
        <div className="feedback-wrapper">
       
            <img src={FeedBackImage} alt="no image" />
        <div className="feedback-info">
        <h1 className="feedback-title">Get a Free SEO Analysis!</h1>
        <div className="top-inputs">
          <label>
        <p className='ph-title'>Name</p>
        <input className='top-input' type="text" placeholder='Your name' />
        </label>
        <label>
        <p className='ph-title'>Email</p>
        <input className='top-input' type="email" placeholder='Your working email' />
        </label>
        </div>
        <label>
        <p className="ph-title">Your website URL</p>
        <input className='bottom-input' type="text" placeholder='http://yoursite.com' />
        </label>
        <div className='feedback-bottom'>

        <label className="checkbox-label">
          <input type="checkbox" />
          <span className="checkmark"></span>
          <p className="checkbox-text">I agree to receive communications from Createx SEO Agency</p>
        </label>

  
          <a href="#" className="feedback-btn">Get a free analysis</a>
          </div>
        </div>
        </div>
      </div>
  
  )
}
