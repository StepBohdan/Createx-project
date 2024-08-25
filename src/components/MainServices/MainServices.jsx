import React from 'react'
import {Link} from "react-router-dom"
import SMM from "./MainServicesImages/mediamarketing.png"
import SEO from "./MainServicesImages/seo.png"
import ResearchServices from "./MainServicesImages/researchservice.png"
import PR from './MainServicesImages/prservices.png'
import TrafficManagement from "./MainServicesImages/trafficmanagement.png"
import Test from "./MainServicesImages/test.png"
import "./MainServices.scss"

export default function MainServices() {
  return (
    <div className='main-services'>
      <ul className="main-services-list">
        <li className="main-services-list-item">

            <div>
            <h1 className="card-title">Social Media Marketing</h1>
            <p className="card-subtitle">Eleifend orci massa et facilisis orci feugiat ac. Congue in ut lacus, turpis accumsan gravida. Aliquet mattis dignissim massa sociis a, id bibendum. Egestas lorem eros, mi cras amet, vel eget molestie. Turpis enim arcu, amet donec massa pellentesque nulla duis. Arcu dictum metus sed purus senectus faucibus eget elementum pretium. 
            </p>
            <div className="main-services-btns">
                <Link to="/services/seo" className="main-services-btn">Learn more</Link>
                <a href="#" className="main-services-btn purple">Try SEO toolkit</a>
            </div>
            </div>
            <img src={SMM} alt="no image" style={{width: '712px'}} />

        </li>
        <li className="main-services-list-item">

        <img src={Test} alt="no image" style={{width: '716px'}} />
            <div>
            <h1 className="card-title">Search Engine Optimization</h1>
            <p className="card-subtitle">Elementum ipsum lorem tortor morbi quis turpis pellentesque ultrices aenean. Lacus sit viverra et egestas nisl vitae lacus, eget. Eu pulvinar duis in posuere non adipiscing. Nunc, tristique viverra tincidunt nec proin tempus egestas massa. Quis velit nunc nisl sem in tristique.</p>
            <div className="main-services-btns">
                <Link to="/services/seo" className="main-services-btn">Learn more</Link>
                <a href="#" className="main-services-btn purple">Try SEO toolkit</a>
            </div>
            </div>

        </li>
        <li className="main-services-list-item">

        <div>
            <h1 className="card-title">Research Service</h1>
            <p className="card-subtitle">Volutpat tellus mauris sit sit. Posuere ut sit vestibulum amet viverra in. Est nulla lectus purus tincidunt massa tortor. Hendrerit vulputate elementum blandit massa vitae amet felis eget. </p>
            <div className="main-services-btns">
            <Link to="/services/seo" className="main-services-btn">Learn more</Link>
                <a href="#" className="main-services-btn purple">Try SEO toolkit</a>
            </div>
            </div>
            <img src={ResearchServices} alt="no image" style={{width: '607px'}} />

        </li>
        <li className="main-services-list-item">

        <img src={PR} alt="no image" style={{width: '635px'}} />
            <div>
            <h1 className="card-title">Content & PR Service</h1>
            <p className="card-subtitle">Consequat pharetra elit posuere fringilla luctus sit. Curabitur accumsan fermentum magna amet. Sed nec amet posuere tellus pellentesque vitae. Pulvinar nulla sem risus diam volutpat. Amet, sit aliquet magna in viverra at elit nullam.</p>
            <div className="main-services-btns">
            <Link to="/services/seo" className="main-services-btn">Learn more</Link>
                <a href="#" className="main-services-btn purple">Try SEO toolkit</a>
            </div>
            </div>

        </li>
        <li className="main-services-list-item">

        <div>
            <h1 className="card-title">Payed Traffic Management</h1>
            <p className="card-subtitle">Tortor vitae orci hendrerit lobortis eu. Metus aliquam sem tellus ut fringilla purus nisl, consectetur netus. Velit ac feugiat ut mattis dis nullam ultrices amet. Lacus eu neque arcu arcu curabitur at sapien. Id sed aliquet id sit nibh ornare massa scelerisque.</p>
            <div className="main-services-btns">
            <Link to="/services/seo" className="main-services-btn">Learn more</Link>
                <a href="#" className="main-services-btn purple">Try SEO toolkit</a>
            </div>
            </div>
            <img src={TrafficManagement} alt="no image" style={{width: '700px'}}/>

        </li>
      </ul>
    </div>
  )
}
