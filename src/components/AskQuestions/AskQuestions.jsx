import React, { useState } from 'react';
import Right from "./AskQuestionsImages/Right.svg?react";
import AskQuestionsImage from "./AskQuestionsImages/ask-questions-img.png";
import "./AskQuestions.scss";

export default function AskQuestions() {

  const [activeIndex, setActiveIndex] = useState(0);


  const handleClick = (index, event) => {
    event.preventDefault();
    setActiveIndex(prevIndex => (prevIndex === index ? null : index));
  };

  const getItemClass = (index) => (
    activeIndex === index ? 'item-hidden-text' : 'item-hidden-text hidden'
  );

  const getSymbolClass = (index) => (
    activeIndex === index ? 'symbol minus' : 'symbol plus'
  );

  return (
    <div className='ask-questions'>
      <div className="ask-questions-wrapper">
        <h1 className="ask-questions-title">Frequently Asked Questions</h1>
        <ul className="ask-questions-list">

          <li className="ask-questions-list-item" onClick={(event) => handleClick(0, event)}>
            <div>
              <div className={getSymbolClass(0)}></div>
              <a href='#' className="item-main-text">Aliquet lectus urna viverra in odio?</a>
            </div>
            <p className={getItemClass(0)}>Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.</p>
          </li>

          <li className="ask-questions-list-item" onClick={(event) => handleClick(1, event)}>
            <div>
              <div className={getSymbolClass(1)}></div>
              <a href='#' className="item-main-text">Orci commodo, viverra orci mollis ut euismod?</a>
            </div>
            <p className={getItemClass(1)}>Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.</p>
          </li>

          <li className="ask-questions-list-item" onClick={(event) => handleClick(2, event)}>
            <div>
              <div className={getSymbolClass(2)}></div>
              <a href='#' className="item-main-text">Sagittis vitae facilisi rutrum amet mauris quisque vel convallis?</a>
            </div>
            <p className={getItemClass(2)}>Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.</p>
          </li>

          <li className="ask-questions-list-item" onClick={(event) => handleClick(3, event)}>
            <div>
              <div className={getSymbolClass(3)}></div>
              <a href='#' className="item-main-text">In id dolor quis nunc, urna hendrerit pharetra?</a>
            </div>
            <p className={getItemClass(3)}>Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.</p>
          </li>

        </ul>

        <a href="#" className="ask-questions-btn">Discover more <Right /></a>
      </div>
      <img src={AskQuestionsImage} alt="no image" className='ask-questions-img' />
    </div>
  );
}
