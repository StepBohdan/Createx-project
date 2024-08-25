import React from 'react'
import { useState } from 'react'
import Mark from "./PricingPlansImages/Mark.svg?react"
import Cross from "./PricingPlansImages/cross.svg?react"
import "./PricingPlans.scss"

export default function PricingPlans() {
    
    const [monthly, setMonthly] = useState(true);
    const [yearly, setYearly] = useState(false);

    
    function setMonthlyActive(event) {
        event.preventDefault();
        document.getElementById('monthly-btn').classList.add('active');
        document.getElementById('yearly-btn').classList.remove('active');
        setYearly(false)
        setMonthly(true)
      }

   function setYearlyActive(event) {
    event.preventDefault();
    document.getElementById('yearly-btn').classList.add('active');
    document.getElementById('monthly-btn').classList.remove('active');
    setMonthly(false);
    setYearly(true)
  }


  return (
    <div className='pricing-plans'>
      <p className="pricing-plans-title">Flexible pricing plans</p>
      <div className="plan-switcher"><a href="#" className="plan-switcher-btn active" id='monthly-btn' onClick={setMonthlyActive}>Monthly</a><a href="#" className="plan-switcher-btn" id='yearly-btn' onClick={setYearlyActive}>Yearly<span className='discount'>-12% Off</span></a></div>
      {monthly && (<ul className="pricing-plans-list">
        <li className="pricing-plans-list-item">
            <div className="card">
                <h2 className="card-title">Basic</h2>
                <p className="card-subtitle">$24<span className='card-subtitle-month'>/mon</span></p>
                <div className="line"></div>
                <ul className="benefits-list">
                    <li className="benefits-list-item"><Mark/>Advanced Analytics</li>
                    <li className="benefits-list-item"><Mark/>Change Management</li>
                    <li className="benefits-list-item"><Mark/>Corporate Finance</li>
                    <li className="benefits-list-item"><Mark/>One Way Link Building</li>
                    <li className="benefits-list-item"><Mark/>Social Media Marketing</li>
                    <li className="benefits-list-item grey"><Cross/>Strategy & Marketing</li>
                    <li className="benefits-list-item grey"><Cross/>Information Technology</li>
                </ul>
                <a href="#" className="card-btn">Choose plan</a>
            </div>
        </li>
        <li className="pricing-plans-list-item">
            <div className="card dark">
                <h2 className="card-title">Optimal</h2>
                <p className="card-subtitle">$64<span className='card-subtitle-month'>/mon</span></p>
                <div className="line"></div>
                <ul className="benefits-list">
                    <li className="benefits-list-item"><Mark className="dark-mark"/>Advanced Analytics</li>
                    <li className="benefits-list-item"><Mark className="dark-mark"/>Change Management</li>
                    <li className="benefits-list-item"><Mark className="dark-mark"/>Corporate Finance</li>
                    <li className="benefits-list-item"><Mark className="dark-mark"/>One Way Link Building</li>
                    <li className="benefits-list-item"><Mark className="dark-mark"/>Social Media Marketing</li>
                    <li className="benefits-list-item"><Mark className="dark-mark"/>Strategy & Marketing</li>
                    <li className="benefits-list-item grey"><Cross/>Information Technology</li>
                </ul>
                <a href="#" className="card-btn">Choose plan</a>
            </div>
        </li>
        <li className="pricing-plans-list-item">
            <div className="card">
                <h2 className="card-title">Premium</h2>
                <p className="card-subtitle">$98<span className='card-subtitle-month'>/mon</span></p>
                <div className="line"></div>
                <ul className="benefits-list">
                    <li className="benefits-list-item"><Mark/>Advanced Analytics</li>
                    <li className="benefits-list-item"><Mark/>Change Management</li>
                    <li className="benefits-list-item"><Mark/>Corporate Finance</li>
                    <li className="benefits-list-item"><Mark/>One Way Link Building</li>
                    <li className="benefits-list-item"><Mark/>Social Media Marketing</li>
                    <li className="benefits-list-item"><Mark/>Strategy & Marketing</li>
                    <li className="benefits-list-item"><Mark/>Information Technology</li>
                </ul>
                <a href="#" className="card-btn">Choose plan</a>
            </div>
        </li>
      </ul>)}
      {yearly && (<ul className="pricing-plans-list">
        <li className="pricing-plans-list-item">
            <div className="card">
                <h2 className="card-title">Basic</h2>
                <p className="card-subtitle">$21<span className='card-subtitle-month'>/mon</span></p>
                <div className="line"></div>
                <ul className="benefits-list">
                    <li className="benefits-list-item"><Mark/>Advanced Analytics</li>
                    <li className="benefits-list-item"><Mark/>Change Management</li>
                    <li className="benefits-list-item"><Mark/>Corporate Finance</li>
                    <li className="benefits-list-item"><Mark/>One Way Link Building</li>
                    <li className="benefits-list-item"><Mark/>Social Media Marketing</li>
                    <li className="benefits-list-item grey"><Cross/>Strategy & Marketing</li>
                    <li className="benefits-list-item grey"><Cross/>Information Technology</li>
                </ul>
                <a href="#" className="card-btn">Choose plan</a>
            </div>
        </li>
        <li className="pricing-plans-list-item">
            <div className="card dark">
                <h2 className="card-title">Optimal</h2>
                <p className="card-subtitle">$56<span className='card-subtitle-month'>/mon</span></p>
                <div className="line"></div>
                <ul className="benefits-list">
                    <li className="benefits-list-item"><Mark className="dark-mark"/>Advanced Analytics</li>
                    <li className="benefits-list-item"><Mark className="dark-mark"/>Change Management</li>
                    <li className="benefits-list-item"><Mark className="dark-mark"/>Corporate Finance</li>
                    <li className="benefits-list-item"><Mark className="dark-mark"/>One Way Link Building</li>
                    <li className="benefits-list-item"><Mark className="dark-mark"/>Social Media Marketing</li>
                    <li className="benefits-list-item"><Mark className="dark-mark"/>Strategy & Marketing</li>
                    <li className="benefits-list-item grey"><Cross/>Information Technology</li>
                </ul>
                <a href="#" className="card-btn">Choose plan</a>
            </div>
        </li>
        <li className="pricing-plans-list-item">
            <div className="card">
                <h2 className="card-title">Premium</h2>
                <p className="card-subtitle">$86<span className='card-subtitle-month'>/mon</span></p>
                <div className="line"></div>
                <ul className="benefits-list">
                    <li className="benefits-list-item"><Mark/>Advanced Analytics</li>
                    <li className="benefits-list-item"><Mark/>Change Management</li>
                    <li className="benefits-list-item"><Mark/>Corporate Finance</li>
                    <li className="benefits-list-item"><Mark/>One Way Link Building</li>
                    <li className="benefits-list-item"><Mark/>Social Media Marketing</li>
                    <li className="benefits-list-item"><Mark/>Strategy & Marketing</li>
                    <li className="benefits-list-item"><Mark/>Information Technology</li>
                </ul>
                <a href="#" className="card-btn">Choose plan</a>
            </div>
        </li>
      </ul>)}
    </div>
  )
}
