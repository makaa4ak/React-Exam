import React, { useState, useEffect } from 'react';
import './Sidebar.css';

const subscriptions = [
  {name: 'ENLEO', img: './images/profile-pictures/enleo.png'},
  {name: 'Eve', img: './images/profile-pictures/eve.png'},
  {name: 'Копійка', img: './images/profile-pictures/kopiyka.png'},
  {name: 'Rob Scallon', img: './images/profile-pictures/rob-scallon.png'},
  {name: 'Nikolai Chaze', img: './images/profile-pictures/nikolay-chaze.png'},
  {name: 'NEXPO', img: './images/profile-pictures/nexpo.jpg'},
  {name: 'CreepCast', img: './images/profile-pictures/creepcast.png'},
  {name: 'Nick Crowley', img: './images/profile-pictures/nick-crowley.jpg'},
]

const sidebarItems = [
  {name: 'Home', img: './images/sidebar-items/home.svg'},
  {name: 'Playme', img: './images/sidebar-items/playme.svg'},
  {name: 'Subscriptions', img: './images/sidebar-items/sub.svg'},

]
function renderPlaceholders() {
  return sidebarItems.map((item, index) => (
    <div key={index} className='sidenav--item'>
      <img className='icon' src={item.img} alt={item.name}/>
      <p>{item.name}</p>
    </div>
  ));
}

function renderSubscriptions() {
  return subscriptions.map((subscription, index) => (
    <div key={index} className='sidenav--item'>
      <img className='avatar' src={subscription.img} alt={subscription.name}/>
      <p>{subscription.name}</p>
    </div>
  ));}

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    if (subscriptions.length <= 7) {
      setIsExpanded(true);
    }
  }, []);

  const handleShowMoreClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className='sidenav-component'>
      <div className="sidenav">
        <div className='sidenav--main'>
          <div className='section'>
            {renderPlaceholders()}
          </div>
          <div className='section'>
            {renderPlaceholders()}
          </div>
          <div className='section'>
            <h1 className='category-name'>Subscriptions</h1>
            <div className={`sidenav--subscriptions ${isExpanded ? 'expanded' : ''}`}>
            {renderSubscriptions()}
            </div>
            {subscriptions.length > 7 && (
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
            <h1 className='category-name'>Categories</h1>
            {renderPlaceholders()}
          </div>
          <div className='section'>
            {renderPlaceholders()}
          </div>

        </div>
      </div>
      <div className='sidenav-spacer'></div>
    </div>
  );
}
