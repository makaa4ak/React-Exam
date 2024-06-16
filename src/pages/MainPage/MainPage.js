import React, { useState } from 'react';
import './MainPage.css';

export default function MainPage() {
  const paragraph = "Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.";
  const repeat = 20;
  const chipNames = ['All', 'Music', 'Jams', 'Podcasts', 'Comedy', 'Live', 'Selena Gomez', 'Manga', 'Game Shows', 'Spiderman', 'Existential Dread', 'Horrors Beyond Comprehension']; 

  const [activeButton, setActiveButton] = useState(null);

  const renderParagraphs = (content, count) => {
    return Array.from({ length: count }, (_, index) => <p key={index}>{content}</p>);
  };
  
  const renderCards = (count) => {
    return Array.from({ length: count }, (_, index) => (
      <div key={index} className='card'>
        <p>Card {index + 1}</p>
      </div>
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
        <div className='slider'>
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

      <div>Section</div>
      <h2>Main-Content</h2>
      {renderParagraphs(paragraph, repeat)}
    </div>
  )
}
