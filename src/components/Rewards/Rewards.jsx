import React from 'react'
import Clutch from "./RewardsImages/clutch.svg?react"
import UpCity from "./RewardsImages/upCity.svg?react"
import Forbes from "./RewardsImages/forbes.svg?react"
import TopDev from "./RewardsImages/topDev.svg?react"



import "./Rewards.scss"

export default function Rewards() {
  return (
    <div>
        <div className="rewards-wrap">
            <div className="rewards-header">
      <h1 className="rewards-title">Createx SEO Agency is a full-service digital marketing agency. We help businesses make more money through a wealth of performance data and market research. We create science-based SEO strategies to empower our clients.</h1>
      <ul className="rewards-list">
        <li className="rewards-list-item">
            <Clutch/><p className="rewards-list-item-text">Top SEO Companies 2020 by Clutch</p>
        </li>
        <li className="rewards-list-item">
           <UpCity/> <p className="rewards-list-item-text">Top Digital Marketing Agency 2019 by UpCity</p>
        </li>
        <li className="rewards-list-item">
            <Forbes/><p className="rewards-list-item-text">Official Member 2020 by Forbes Agency Council</p>
        </li>
        <li className="rewards-list-item">
            <TopDev/><p className="rewards-list-item-text">Top SEO Companies 2020 by Top Developers</p>
        </li>
      </ul>
      </div>
  
      </div>
    </div>
  )
}
