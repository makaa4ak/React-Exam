import React from 'react';
import './MainPage.css';
export default function MainPage()
{
  const paragraph = "Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.";
  const repeat = 20;
  const chipNames = ['All', 'Music', 'Jams', 'Podcasts', 'Comedy', 'Live', 'Selena Gomez', 'Manga', 'Game Shows', 'Spiderman', 'Existential Dread', 'Horrors Beyond Comprehension']; 

  const renderParagraphs = (content, count) => {
    return Array.from({ length: count }, (_, index) => <p key={index}>{content}</p>);
  };


  return(
    <div>
      <div className="main">
        <div className='banner'>
          <div className=''></div>
          <div className='banner-gradient-side'></div>
          <div className='banner-gradient-bottom'></div>
        </div>
        {/* <div className='chip-bar'>
          {chipNames.map((chip, index) => (
            <div key={index} className='chip'>
              <p>{chip}</p>
            </div>
          ))}
        </div> */}
        <div>Section</div>
        <h2>Main-Content</h2>
        {renderParagraphs(paragraph, repeat)}
      </div>
    </div>
  )
}