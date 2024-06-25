import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import pages from './PagesPaths';

import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';

function App() {
  return (
    <Router>
      <div className='container'>
        <RouterApp />
      </div>
    </Router>
  );
}

function RouterApp()
{
  const location = useLocation();
  const noHeader = ['/sign-in', '/sign-up'];

  const showHeader = !noHeader.includes(location.pathname);
  const showNavbar = showHeader;

  return (
    <>
      {showHeader && <Header />}
      {showNavbar && <Sidebar />}
      <Routes>
        {pages.map((page, index) => (
          <Route key={index} path={page.path} element={<page.component />} />
        ))}
      </Routes>
    </>
  );
}

export default App;
