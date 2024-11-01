import React from 'react'
import OpenRate from "./orSaleImages/openRate.svg?react"
import GrownInSales from "./orSaleImages/grownInSales.svg?react"
import Twitter from "./orSaleImages/Twitter.svg?react"
import Facebook from "./orSaleImages/Facebook.svg?react"
import LinkedIn from "./orSaleImages/LinkedIn.svg?react"
import Mark from "./orSaleImages/Mark.svg?react"
import DiagramImg from "./orSaleImages/diagram.png"
import StrategiesImg from "./orSaleImages/strategies.png"
import "./orSale.scss"


export default function orSale() {
  return (
    
      <div className="or-sale">
        <div className="or-sale-main-content">
            <div className="or-sale-stats">
               <div className='stats-wrap'><OpenRate/> <div className="stats-text"><span className='bold'>70%</span><div>Open Rate</div></div></div>
               <div className='stats-wrap'><GrownInSales/> <div className="stats-text"><span className='bold'>200%</span><div>Growth in sales</div></div></div>
               <div className='stats-wrap'><div className="stats-text"><span className='bold'>8,000</span><div>DAU</div></div></div>
            </div>
            <div className="or-sale-stats-discription">
                <h1 className="or-sale-stats-discription-title">The Company has been with us for 3 months. They are in our optimal package for SEO & our premium package for SEM plus Ad spend ($1,000). The client’s goal was to get growth in sales. We helped exceeding the client’s goals in generating new clients.</h1>
                <p className="or-sale-stats-discription-subtitle">At facilisi sapien posuere eget nunc senectus proin nullam. Tortor senectus in et sagittis, vitae diam cras dignissim. Varius adipiscing eget diam nisi. Orci, consectetur vulputate metus ornare pharetra, neque, fermentum. Vel nec rhoncus, non nunc, neque in massa. Feugiat leo nam nisl lacinia amet, odio. Mi varius viverra risus vel.</p>
            </div>
            <img src={DiagramImg} alt="no image" className="or-sale-diagram" />

            <div className="or-sale-strategies">
                <h1 className="or-sale-strategies-title">Strategies</h1>
                <ul className="or-sale-strategies-list">
                    <li className="or-sale-strategies-item"><Mark/>Gravida elit et libero, varius congue risus quisque enim.</li>
                    <li className="or-sale-strategies-item"><Mark/>Sit quis vitae, gravida aliquam condimentum.</li>
                    <li className="or-sale-strategies-item"><Mark/>Praesent et facilisis nam mus senectus massa dignissim.</li>
                    <li className="or-sale-strategies-item"><Mark/>Fermentum diam elementum viverra proin.</li>
                </ul>
                <p className="or-sale-strategies-text">Enim, vel massa odio diam. Blandit massa gravida feugiat elementum id nec sed leo. Nisi in ornare lectus eget. Urna, risus, consectetur volutpat lorem purus. Velit aliquet nibh vitae maecenas. Consectetur neque ut aliquam eros, purus enim dignissim aenean vitae. Ultrices fames augue mattis tortor est justo, pharetra nibh risus. Facilisi at porttitor volutpat natoque proin amet, nulla. Vivamus ut lobortis sagittis curabitur tellus convallis eget netus vitae.</p>
                <img src={StrategiesImg} alt="np image" />
            </div>
            <div className="or-sale-goals">
                <h1 className="or-sale-goals-title">Resieved goals</h1>
                <ul className="or-sale-goals-list">
                    <li className="or-sale-goals-item"><Mark/>Bibendum malesuada mauris, id nisl enim diam.</li>
                    <li className="or-sale-goals-item"><Mark/>Nam id in non sed cras purus nunc et.</li>
                    <li className="or-sale-goals-item"><Mark/>Neque tortor, pellentesque amet est, eu accumsan condimentum nulla.</li>
                    <li className="or-sale-goals-item"><Mark/>Mauris orci, cursus nisl odio est adipiscing gravida magna eget.</li>
                    <li className="or-sale-goals-item"><Mark/>Sit turpis sit ultrices viverra adipiscing malesuada.</li>
                </ul>
            </div>
            <div className="or-sale-results">
                <h1 className="or-sale-results-title">Results</h1>
                <ul className="or-sale-results-list">
                    <li className="or-sale-results-item"><Mark/>Mauris dignissim blandit cursus imperdiet accumsan lorem vel, tortor.</li>
                    <li className="or-sale-results-item"><Mark/>Quis mauris vel felis convallis nulla dignissim.</li>
                    <li className="or-sale-results-item"><Mark/>Cursus sit platea ac posuere non interdum in.</li>
                    <li className="or-sale-results-item"><Mark/>Mattis pellentesque vel, venenatis, urna, quis ut.</li>
                 
                </ul>
            </div>
        </div>


        <div className="or-sale-additional-content">
            <div className="or-sale-additional-content-box">
            <div className="or-sale-about">
                <h1 className="or-sale-about-title">About the client</h1>
                <p className="or-sale-about-subtitle">At facilisi sapien posuere eget nunc senectus proin nullam. Tortor senectus in et sagittis, vitae diam cras dignissim. Varius adipiscing eget diam nisi. Orci, consectetur vulputate metus ornare pharetra, neque, fermentum.</p>
            </div>
            <div className="or-sale-industry">
                <h1 className="or-sale-industry-title">Industry</h1>
                <p className="or-sale-industry-subtitle">Electric company - B2B</p>
            </div>
            <div className="or-sale-services">
                <h1 className="or-sale-services-title">Services rendered</h1>
                <ul className="or-sale-services-list">
                    <li className="or-sale-services-item"><Mark/>Remarketing</li>
                    <li className="or-sale-services-item"><Mark/>Conversion Rate Optimization</li>
                    <li className="or-sale-services-item"><Mark/>User Testing</li>
                    <li className="or-sale-services-item"><Mark/>PPC Management</li>
                    <li className="or-sale-services-item"><Mark/>Usability Testing</li>
                </ul>
            </div>
        </div>
            <div className="or-sale-additional-content-btns"><a className="or-sale-additional-content-btn" href="#">#SEO</a><a className="or-sale-additional-content-btn" href="#">#research</a><a className="or-sale-additional-content-btn" href="#">#payed_traffic</a></div>
            <div className='logos'><p className="sharing">Share:</p><a href="#"><Facebook/></a><a href="#"><Twitter/></a><a href="#"><LinkedIn/></a></div>
        
        </div>
      </div>
  )
}
