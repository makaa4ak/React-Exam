import './App.css';
import SignIn from './pages/SignIn/SignIn'
import SignUp from './pages/SignUp/SignUp'

import MainPage from './pages/MainPage/MainPage';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
        <SignIn></SignIn>
        {/* <SignUp></SignUp> */}
    </div>

    // <div>
    //   <Header></Header>
    //   <div className='container'>
    //     <Sidebar></Sidebar>
    //     <MainPage></MainPage>
    //   </div>
    // </div>
  );
}

export default App;
