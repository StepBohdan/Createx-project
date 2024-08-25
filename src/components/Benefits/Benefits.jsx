import React from 'react'
import Target from "./BenefitsImages/target.svg?react"
import List from "./BenefitsImages/list.svg?react"
import Eye from "./BenefitsImages/eye.svg?react"
import AdExpert from "./BenefitsImages/adExpert.svg?react"
import Like from "./BenefitsImages/like.svg?react"
import Chat from "./BenefitsImages/chat.svg?react"
import OurBenefitImage from "./BenefitsImages/ourbenefits-img.svg?react"



import "./Benefits.scss"

export default function Benefits() {
  return (
    <div className='benefits'>
      <h1 className='benefits-title'>Our benefits</h1>
      <div className="benefits-wrapper">
      <div className='benefit-left'>
        <div className="benefit-card">
          <div className="icon"><AdExpert/></div>
          <h2 className='benefit-card-title'>Social Advertising Experts</h2>
          <p className='benefit-card-subtitle'>Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.</p>
          </div>

        <div className="benefit-card">
          <div className="icon"><Target/></div>
          <h2 className='benefit-card-title'>Social Advertising Experts</h2>
          <p className='benefit-card-subtitle'>Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.</p>
        </div>

        <div className="benefit-card">
          <div className="icon"><List/></div>
          <h2 className='benefit-card-title'>Social Advertising Experts</h2>
          <p className='benefit-card-subtitle'>Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.</p>
        </div>

      
        </div>
        <div className="benefit-image">
          <OurBenefitImage/>
        </div>
        <div className='benefit-right'>
        <div className="benefit-card">
          <div className="icon"><Chat/></div>
          <h2 className='benefit-card-title'>Social Advertising Experts</h2>
          <p className='benefit-card-subtitle'>Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.</p>
        </div>
        <div className="benefit-card">
          <div className="icon"><Eye/></div>
          <h2 className='benefit-card-title'>Social Advertising Experts</h2>
          <p className='benefit-card-subtitle'>Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.</p>
        </div>
        <div className="benefit-card">
          <div className="icon"><Like/></div>
          <h2 className='benefit-card-title'>Social Advertising Experts</h2>
          <p className='benefit-card-subtitle'>Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.</p>
        </div>
        </div>
      </div>
    </div>
  )
}
