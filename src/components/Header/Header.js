import React, { useState, useEffect } from 'react'; 
import './Header.css' 
import dropdownSections from './DropdownProfile';

export default function Header() {   
    console.log(dropdownSections);

    const resizedLogoWidth = 950;
    const [isResized, setIsResized] = useState(window.innerWidth < resizedLogoWidth);
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsResized(window.innerWidth < resizedLogoWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    const renderItems = (sections) => {
        return sections.map((section, sectionIndex) => {
          if (section.type === 'profile') {
            const profile = section.items[0];
            return (
              <div className='section profile' key={sectionIndex}>
                <img src={profile.src} alt={profile.alt} />
                <div>
                  <h1 className='channel-name'>{profile.channelName}</h1>
                  <p className='user-name'>{profile.userName}</p>
                </div>
              </div>
            );
          }
      
          return (
            <div className='section' key={sectionIndex}>
              {section.items.map((item, itemIndex) => (
                <div className='dropdown-item' key={itemIndex}>
                  <img src={item.src} alt={item.alt}></img>
                  <p>{item.text}</p>
                  {item.arrow && <img className='arrow' src='./images/header-images/arrow_forward_ios.svg' alt='Arrow'></img>}
                </div>
              ))}
            </div>
          );
        });
      };

    return( 
        <div> 
            <div className='header'> 
                <div className='section left'> 
                    <img 
                        className='logo' 
                        src={isResized ? './images/header-images/logo-mobile.svg' : './images/header-images/logo.svg'} 
                        alt='Logo' 
                    />
                </div> 
                <div className='section middle'> 
                    <div className='input-container'> 
                        <img className='icon-search' src='./images/header-images/search.svg' alt='Mic'/> 
                        <input className='input-search' type='text' name='search' placeholder="Search" />
                    </div> 
                    <img className='icon-mic' src='./images/header-images/mic.svg' alt='Mic'/> 
                </div> 
                <div className='section right'> 
                    <img src='./images/header-images/add-video.svg' alt='Video'/> 
                    <img src='./images/header-images/notification-alarm-bell_svgrepo.com.svg' alt='Bell'/> 
                    <div className='dropdown'>
                        <img 
                            src='./images/header-images/acc.svg' 
                            alt='Profile' 
                            onClick={toggleDropdown}
                        /> 
                        <div className={`dropdown-content ${isDropdownVisible ? 'show' : ''}`}>
                            <div>
                                {renderItems(dropdownSections)}
                            </div>
                        </div>
                    </div>
                </div> 
            </div> 
            <div className='header-spacer'></div> 
        </div> 
    ); 
}
