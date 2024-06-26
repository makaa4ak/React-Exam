import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import pages from './PagesPaths';

import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import VideoPage from './pages/Video/Video';

function App() {
  return (

    <Router>
    <Header></Header>
    <div className='container'>
      <Sidebar></Sidebar>
      {/* <MainPage></MainPage> */}
      <VideoPage/>
     {/* // <RouterApp /> */}
    </div>
  </Router>

//     <Router>
// <RouterApp />
// </Router>
);
}

// function RouterApp()
// {
//   const location = useLocation();
//   const noHeader = ['/sign-in', '/sign-up'];

//   const showHeader = !noHeader.includes(location.pathname);
//   const showNavbar = showHeader;

//   return (
//     <>
//       {showHeader && <Header />}
//       <div className='container'>
//       {showNavbar && <Sidebar />}
//       <Routes>
//         {pages.map((page, index) => (
//           <Route key={index} path={page.path} element={<page.component />} />
//         ))}
//       </Routes>
//       </div>
//     </>
//   );
// }

export default App;
