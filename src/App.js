import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
// import SignIn from './pages/SignIn/SignIn'
// import SignUp from './pages/SignUp/SignUp'

import MainPage from './pages/MainPage/MainPage';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';

import VideoPage from './pages/Video/Video';

function App() {
  return (
    // <div>
    //     <SignIn></SignIn>
    //     {/* <SignUp></SignUp> */}
    // </div>

    // <div>
    //   <Header></Header>
    //   <div className='container'>
    //     <Sidebar></Sidebar>
    //     <MainPage></MainPage>
    //   </div>
    // </div>

    <Router>
      <Header></Header>
      <div className='container'>
        <Sidebar></Sidebar>
        <VideoPage/>
      </div>
    </Router>
  );
}

export default App;
