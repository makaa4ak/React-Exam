import React from 'react';
import './MainPage.css';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
export default function MainPage()
{
  const paragraph = "Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.";
  const repeat = 20;

  const renderParagraphs = (content, count) => {
    return Array.from({ length: count }, (_, index) => <p key={index}>{content}</p>);
  };

  return(
    <div>
      <Header></Header>
      <Sidebar></Sidebar>
      
      <div className="main">
        <h2>Main-Content</h2>
        {renderParagraphs(paragraph, repeat)}
      </div>
      
    </div>
  )
}