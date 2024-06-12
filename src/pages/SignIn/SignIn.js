import './SignIn.css';
import React from 'react';

export const SignIn = () => {
  return (
    <div className='page'>

      <div className='photos'>
        <img src='./images/SignPhoto1.png'/>
        <img src='./images/SignPhoto2.png'/>
        <img src='./images/SignPhoto3.png'/>
        <img src='./images/SignPhoto4.png'/>
        <img src='./images/SignPhoto5.png'/>
        <img src='./images/SignPhoto6.png'/>
        <img src='./images/SignPhoto7.png'/>
        <img src='./images/SignPhoto1.png'/>
      </div>

      <div className='block'>
        <div>
          <h1>
            get some<br />
            felicity<br />
            with <span>amtlis</span><br />
          </h1>
        </div>

        <label>
          <div>
            <input className='input' type="text" placeholder="Email"/>
          </div>

          <div className='passwordSection'>
            <input className='input' type="password" placeholder="Password"/>
            <a href="#">Forgot your password?</a>
          </div>
        </label>

        <div className='bottomSection'>
          <div className='logoSection'>
            <img src='./images/icon-facebook.svg'/>
            <img src='./images/icon-google.svg'/>
            <img src='./images/icon-twitter.svg'/>
            <img src='./images/icon-apple.svg'/>
          </div>
          <button className='sign-in-button'><p>Sign in</p></button>
        </div>

        <div className='flex-center'>
          <a href="#"><p>Create an account</p></a>
        </div>
        <br/>
      </div>

    </div>
  )
};