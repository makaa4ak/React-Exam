import './SignIn.css';
import React from 'react';
import PhotoSlider from '../../components/PhotoSlider/PhotoSlider';
import { Link } from 'react-router-dom';

export default function SignIn()
{
  const Photos = 
  [
    ["./images/sign-page/SignPhoto1.png", "./images/sign-page/SignPhoto2.png", "./images/sign-page/SignPhoto3.png"],
    ["./images/sign-page/SignPhoto4.png", "./images/sign-page/SignPhoto5.png", "./images/sign-page/SignPhoto6.png"],
    ["./images/sign-page/SignPhoto7.png", "./images/sign-page/SignPhoto1.png", "./images/sign-page/SignPhoto3.png"]
  ]

  return (
    <div className='page'>

      <div className='photos'>
        <PhotoSlider sources={Photos[0]}/>
        <PhotoSlider sources={Photos[1]}/>
        <PhotoSlider sources={Photos[2]}/>
      </div>

      <div className='block'>
        <div>
          <h1 className='mainText'>
            get some<br />
            felicity<br />
            with <span className='specialText'>amtlis</span><br />
          </h1>
        </div>

        <label>
          <div>
            <input className='input' type="text" placeholder="Email"/>
          </div>

          <div className='passwordSection'>
            <input className='input' type="password" placeholder="Password"/>
            <a className="link" href="#">Forgot your password?</a>
          </div>
        </label>

        <div className='bottomSection'>
          <div className='logoSection'>
            <img src='./images/sign-page/icon-facebook.svg'/>
            <img src='./images/sign-page/icon-google.svg'/>
            <img src='./images/sign-page/icon-twitter.svg'/>
            <img src='./images/sign-page/icon-apple.svg'/>
          </div>
          <button className='sign-in-button'><p className='text'>Sign in</p></button>
        </div>

        <div className='flex-center'>
          <Link to = '/sign-up'>
            <a className="link" href="#"><p className='text'>Create an account</p></a>
          </Link>
        </div>
        <br/>
      </div>

    </div>
  )
};