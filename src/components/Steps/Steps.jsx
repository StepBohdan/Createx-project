import React from 'react'
import "./Steps.scss"


export default function Steps() {
  return (
    <div className='steps'>
      <h1 className="steps-title">That’s how it works</h1>
      <ul className="steps-list">
        <li className="steps-list-item right">
        <div>
            <p className="step">STEP 1</p>
            <h2 className="step-title">Off-Site SEO Analysis</h2>
            <p className="step-subtitle">Aliquam turpis viverra quam sit interdum blandit posuere pellentesque. Nisl, imperdiet gravida massa neque.</p>
        </div>
        </li>
        <li className="steps-list-item left">
        <div>
            <p className="step">STEP 2</p>
            <h2 className="step-title">Technical SEO Optimizations</h2>
            <p className="step-subtitle">Facilisis pellentesque quis accumsan ultricies. Eu egestas eget feugiat lacus, amet, sollicitudin egestas laoreet etiam. Nunc nisl orci auctor et fames. Vestibulum viverra faucibus faucibus et convallis.</p>
        </div>
        </li>
        <li className="steps-list-item right">
        <div>
            <p className="step">STEP 3</p>
            <h2 className="step-title">Usability Check</h2>
            <p className="step-subtitle">Eget amet, enim pharetra leo egestas nisi, odio imperdiet facilisis. Aliquet orci varius volutpat egestas facilisi lobortis. Varius praesent pretium in leo, accumsan, in ultricies. </p>
        </div>
        </li>
        <li className="steps-list-item left">
        <div>
            <p className="step">STEP 4</p>
            <h2 className="step-title">Content Marketing</h2>
            <p className="step-subtitle">Non tempor pulvinar tincidunt aliquam. Placerat ultricies malesuada dui auctor. Faucibus in leo, nulla odio nulla imperdiet quis faucibus neque.</p>
        </div>
        </li>
      </ul>
    </div>
  )
}
