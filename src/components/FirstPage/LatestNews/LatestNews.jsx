import React from 'react'
import Analyzing from "./LatestNewsImages/analyzing.png"
import Optimization from "./LatestNewsImages/optimization.png"
import Clock from "./LatestNewsImages/Clock.svg?react"
import Arrow from "./LatestNewsImages/line-arrow.svg?react"
import Profile from "./LatestNewsImages/Profile.svg?react"

import "./LatestNews.scss"

export default function LatestNews() {
  return (
    <div className='latest-news'>
      <ul className="latest-news-list">
        <li className="latest-news-list-item">
            <p className="latest-news-title">Latest news</p>
            <p className="latest-news-subtitle">Check more posts in our blog for featured news and advertising insights</p>
            <a href="#" className="latest-news-btn">Go to blog</a>
        </li>
        <li className="latest-news-list-item">
            <figure>
            <img src={Analyzing} alt="no image" />
            <figcaption className='image-legend'>Marketing <span className='line'></span><Clock/>July 5, 2020<span className="line"></span><Profile/>By Diane Mccoy</figcaption>
            </figure>
            <div className="image-content">
            <p className="image-title">The Basics of Blogging Search Engine Optimization.</p>
            <p className="image-subtitle">Mauris tincidunt sollicitudin tristique odio eget volutpat. Fringilla viverra amet, mi interdum blandit...</p>
            <a href="#" className="image-btn">Read more<Arrow/></a>
            </div>

        </li>
        <li className="latest-news-list-item">
            <figure>
            <img src={Optimization} alt="no image" />
            <figcaption className='image-legend'>SEO <span className='line'></span><Clock/>July 2, 2020<span className="line"></span><Profile/>By Diane Mccoy</figcaption>
            </figure>
            <div className="image-content">
                <p className="image-title">The Basics of Blogging Search Engine Optimization.</p>
                <p className="image-subtitle">Mauris tincidunt sollicitudin tristique odio eget volutpat. Fringilla viverra amet, mi interdum blandit...</p>
                <a href="#" className="image-btn">Read more<Arrow/></a>
            </div>
        </li>
      </ul>
    </div>
  )
}
