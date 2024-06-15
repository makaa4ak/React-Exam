import React, { useState, useEffect } from 'react';
import './Sidebar.css';

function renderPlaceholders(count) {
  const placeholders = [];
  for (let i = 0; i < count; i++) {
    placeholders.push(
      <div key={i} className='sidenav--item'>
        <img src='./images/add-video.svg'/>
        <p>Item name</p>
      </div>
    );
  }
  return placeholders;
}

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const itemCount = 10;

  useEffect(() => {
    if (itemCount <= 7) {
      setIsExpanded(true);
    }}, [itemCount]);

  const handleShowMoreClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className='sidenav-component'>
      <div className="sidenav">
        <div className='sidenav--main'>
          <div className='section'>
            <div className={`sidenav--subscriptions ${isExpanded ? 'expanded' : ''}`}>
              {renderPlaceholders(itemCount - 1)}
              <div className='sidenav--item'>
                <img src='./images/add-video.svg'/>
                <p>Last item</p>
              </div>
            </div>
            {itemCount > 7 && (
              <button className='btn-toggle' onClick={handleShowMoreClick}>
                {isExpanded ? 'Show less' : 'Show more'}
                <img
                  src='./images/expand_more.svg'
                  className={`toggle-icon ${isExpanded ? 'rotated' : ''}`}
                  alt="Toggle icon"
                />
              </button>
            )}
          </div>
          <div className='section'>
            {renderPlaceholders(10)}
          </div>
          <div className='section'>
            {renderPlaceholders(10)}
          </div>
        </div>
      </div>
      <div className='sidenav-spacer'></div>
    </div>
  );
}
