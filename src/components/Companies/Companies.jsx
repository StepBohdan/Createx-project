import React from 'react'

import InDepth from "./CompaniesImages/inDepth.svg?react"
import HigherFit from "./CompaniesImages/higherFit.svg?react"
import Sentinal from "./CompaniesImages/sentinal.svg?react"
import HappyHome from "./CompaniesImages/happyHouse.svg?react"
import OrSale from "./CompaniesImages/orSale.svg?react"
import Sunset from "./CompaniesImages/sunset.svg?react"
import Cursor from "./CompaniesImages/cursor.svg?react"


import "./Companies.scss"


export default function Companies() {
  return (
    <div className='companies'>
      <ul className="companies-list">
        <li className="companies-list-item"><InDepth/></li>
        <li className="companies-list-item"><HigherFit/></li>
        <li className="companies-list-item"><Sentinal/></li>
        <li className="companies-list-item"><HappyHome/></li>
        <li className="companies-list-item"><OrSale/></li>
        <li className="companies-list-item"><Sunset/><Cursor/></li>
      </ul>
    </div>
  )
}
