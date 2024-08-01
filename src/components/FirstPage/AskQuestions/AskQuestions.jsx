import React from 'react'
import Right from "./AskQuestionsImages/Right.svg?react"
import AskQuestionsImage from "./AskQuestionsImages/ask-questions-img.png"
import "./AskQuestions.scss"

export default function AskQuestions() {
  return (
    <div className='ask-questions'>
        <div className="ask-questions-wrapper">
      <h1 className="ask-questions-title">Freequently Ask Questions</h1>
      <ul className="ask-questions-list">

        <li className="ask-questions-list-item">
        <div>
            <div className="symbol minus"></div>
            <a href='#' className="item-main-text">Aliquet lectus urna viverra in odio?</a>
        </div>
            <p className="item-hidden-text">Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.</p>
        </li>

        <li className="ask-questions-list-item">
        <div>
            <div className="symbol plus"></div>
            <a href='#' className="item-main-text">Orci commodo, viverra orci mollis ut euismod?</a>
        </div>
        <p className="item-hidden-text hidden">Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.</p>
        </li>

    
        <li className="ask-questions-list-item">
        <div>
            <div className="symbol plus"></div>
            <a href='#' className="item-main-text">Sagittis vitae facilisi rutrum amet mauris quisque vel convallis?</a>
        </div>
        <p className="item-hidden-text hidden">Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.</p>
        </li>

       
        <li className="ask-questions-list-item">
        <div>
            <div className="symbol plus"></div>
            <a href='#' className="item-main-text">In id dolor quis nunc, urna hendrerit pharetra?</a>
        </div>
        <p className="item-hidden-text hidden">Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.</p>
        </li>
      </ul>

    <a href="#" className="ask-questions-btn">Discover more <Right/></a>
      </div>
      <img src={AskQuestionsImage} alt="no image" />
    </div>
  )
}
