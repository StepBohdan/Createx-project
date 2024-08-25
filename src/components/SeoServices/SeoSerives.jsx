import React from 'react'
import Options from "./SeoServicesImages/ic-options.svg?react"
import Analytics from "./SeoServicesImages/ic-analytics.svg?react"
import Target from "./SeoServicesImages/ic-target.svg?react"
import Chart from "./SeoServicesImages/ic-chart.svg?react"
import Speaker from "./SeoServicesImages/ic-speaker.svg?react"
import Analysis from "./SeoServicesImages/ic-analysis.svg?react"


import "./SeoServices.scss"

export default function SeoSerives() {
  return (
    <div className='seo-services'>
      <h1 className="seo-services-title">SEO services include</h1>
      <ul className="seo-services-list">
      <div className="top-cards">
        <li className="seo-services-card">
            <Options/>
            <h2 className="seo-services-card-title">SEO Strategy</h2>
            <p className="seo-services-card-subtitle">Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.</p>
        </li>
        <li className="seo-services-card">
            <Analytics/>
            <h2 className="seo-services-card-title">Competitor Analysis</h2>
            <p className="seo-services-card-subtitle">Nulla id egestas accumsan consequat tincidunt. Urna nisi, nec sed massa pharetra duis ut porttitor.</p>
        </li>
        <li className="seo-services-card">
            <Target/>
            <h2 className="seo-services-card-title">Technical Audit</h2>
            <p className="seo-services-card-subtitle">Congue viverra in quis urna lectus proin massa. Aliquam, justo nisl sed diam nibh vehicula.</p>
        </li>
        </div>
        <div className="bottom-cards">
        <li className="seo-services-card">
            <Chart/>
            <h2 className="seo-services-card-title">Content Strategy</h2>
            <p className="seo-services-card-subtitle">Posuere sed quam etiam semper id id euismod. Feugiat cras donec elementum interdum in.</p>
        </li>
        <li className="seo-services-card">
            <Speaker/>
            <h2 className="seo-services-card-title">Media Promotion</h2>
            <p className="seo-services-card-subtitle">Aliquam turpis viverra quam sit interdum blandit posuere pellentesque. Nisl, imperdiet gravida massa neque.</p>
        </li>
        <li className="seo-services-card">
            <Analysis/>
            <h2 className="seo-services-card-title">SEO Reports</h2>
            <p className="seo-services-card-subtitle">Congue phasellus est, amet sem bibendum sollicitudin arcu scelerisque senectus. Mauris, mus tincidunt a, nisi.</p>
        </li>
        </div>
      </ul>
    </div>
  )
}
