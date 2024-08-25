import React from 'react'
import SuccessfulSeoImg from "./SuccessfulSeoImages/successfulSeoImg.png"

import "./SuccessfulSeo.scss"

export default function SuccessfulSeo() {
  return (
    <div className='successful-seo'>
        <img src={SuccessfulSeoImg} alt="no image" />
        <div className="successful-seo-text">
            <h1 className="successful-seo-title">We go above and beyond to ensure successful SEO</h1>
            <p className="successful-seo-subtitle">Lacus ac mollis vitae viverra. Tincidunt est, feugiat montes, viverra ullamcorper mi dui, nulla pharetra. Sapien urna nullam elit diam mauris orci. Volutpat quam tempus justo, aliquam. Tortor ultrices mattis eget orci eu nisi sed augue odio. Et senectus risus, pharetra, tristique libero. Dolor risus ac quam dictum mattis ultrices laoreet sapien. Feugiat lacus, suscipit eu sociis et quis hendrerit. Cras at ac magna ultricies orci.</p>
        </div>
      
    </div>
  )
}
