import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './MainPage.css';

export default function MainPage() {
  const chipNames = ['All', 'Music', 'Jams', 'Podcasts', 'Comedy', 'Live', 'Selena Gomez', 'Manga', 'Game Shows', 'Spiderman', 'Existential Dread', 'Horrors Beyond Comprehension']; 

  const [activeButton, setActiveButton] = useState(null);

  const renderCards = (count) => {
    return Array.from({ length: count }, (_, index) => (
      <Link to='/video'>
        <div key={index} className='card'>
          <p>Card {index + 1}</p>
        </div>
      </Link>
    ));
  }

  return(
    <div className="main">
      <div className='main--container'>
        <div className='banner'>
          <div className='banner-gradient-side'></div>
          <div className='banner-gradient-bottom'></div>
        </div>
      </div>

      <div className='horizontal-scroller'>
        <div className='gradient right'></div>
        <div className='gradient left'></div>
        <div className='chip-bar'>
          <div className='inner-box'>
            <div className='item-box'>
              {chipNames.map((chip, index) => (
                <button 
                  key={index} 
                  className={`item ${activeButton === index ? 'active' : ''}`} 
                  onClick={() => setActiveButton(index)}
                >
                  <p>{chip}</p>
                </button> 
              ))}
            </div>
            <div className='vertical-mid-hack'></div>
          </div>
        </div>
      </div>

      <div className='card-section'>
        <h1>Top 10 on this week</h1>
        <div className="cards">
          {renderCards(4)}
        </div>
        <h1>Continue watching</h1> 
        <div className="cards">
          {renderCards(4)}
        </div>
        <h1>Popular</h1> 
        <div className="cards">
          {renderCards(8)}
        </div>
        <h1>All Video</h1> 
        <div className="cards">
          {renderCards(20)}
        </div>
      </div>
    </div>
  )
}
