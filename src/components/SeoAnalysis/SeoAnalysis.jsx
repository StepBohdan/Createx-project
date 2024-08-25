import React from 'react'
import "./SeoAnalysis.scss"

export default function SeoAnalysis() {
  return (
    <div className='seo-analysis'>
      <div className="seo-analysis-box">
        <h1 className="seo-analysis-title">Get a Free SEO Analysis!</h1>
        <div className="seo-analysis-form">
        <label className='seo-analysis-label'>
        <p className='seo-analysis-input-title'>Name</p>
        <input className='seo-analysis-input' type="text" placeholder='Your working email' />
        </label>
        <label className='seo-analysis-label'>
        <p className='seo-analysis-input-title'>Email</p>
        <input className='seo-analysis-input' type="text" placeholder='Your name' />
        </label>
        <label className='seo-analysis-label'>
        <p className='seo-analysis-input-title'>Your website URL</p>
        <input className='seo-analysis-input website' type="text" placeholder='http://yoursite.com' />
        </label>
        <a href="#" className='seo-analysis-btn'>Analyse your site</a>
        </div>
      
      </div>
    </div>
  )
}
