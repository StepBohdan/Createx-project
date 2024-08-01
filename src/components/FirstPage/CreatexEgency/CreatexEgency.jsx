import React from 'react'
import CreatexImage from "./CreatexEgencyImages/createx.png"
import CircleYears from "./CreatexEgencyImages/circle-years.svg?react"
import CircleProjects from "./CreatexEgencyImages/circle-projects.svg?react"
import CircleAwards from "./CreatexEgencyImages/circle-awards.svg?react"
import CircleHappy from "./CreatexEgencyImages/circle-happy.svg?react"
import "./CreatexEgency.scss"

export default function CreatexEgency() {
  return (
    <div className='createx-egency'>
      <div className="createx-wrap">
        <div>
        <h1 className="createx-title">Createx Agency </h1>
        <p className="createx-text">Lacus ac mollis vitae viverra. Tincidunt est, feugiat montes, viverra ullamcorper mi dui, nulla pharetra. Sapien urna nullam elit diam mauris orci. Volutpat quam tempus justo, aliquam. Tortor ultrices mattis eget orci eu nisi sed augue odio. Et senectus risus, pharetra, tristique libero. Dolor risus ac quam dictum mattis ultrices laoreet sapien. Feugiat lacus, suscipit eusociis et quis hendrerit. Cras at ac magna ultricies orci.</p>
        <a href="#" className="createx-btn"><p className="create-btn-text">More about us</p></a>
    </div>
    <img src={CreatexImage} alt="no image" />
      </div>
      <ul className="createx-progress-list">
        <li className="createx-progress-list-item"><CircleYears/><p className="createx-progress-list-item-text">Years of experience</p></li>
        <li className="createx-progress-list-item"><CircleProjects/><p className="createx-progress-list-item-text">Awards</p></li>
        <li className="createx-progress-list-item"><CircleAwards/><p className="createx-progress-list-item-text">Projects</p></li>
        <li className="createx-progress-list-item"><CircleHappy/><p className="createx-progress-list-item-text">Happy clients</p></li>
      </ul>
      
    </div>
  )
}
