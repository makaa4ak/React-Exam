import React from 'react';
import './PhotoSlider.css';

export default function PhotoSlider({ sources }) {
  return (
    <div className='row'>
      {sources.map((source) => (
        <div>
          <img src={source}></img>
        </div>
      ))}
    </div>
  )
}