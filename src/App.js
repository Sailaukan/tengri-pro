import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/profile';
import Content from './components/Content/Content';
import Tengris from './components/Tengris/Tengris';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';


const App = () => {
const [isAuth, setIsAuth] = useState(false);

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <style>
          {'body {background-color: #15141C;}'}
        </style>
        <Header />
        <Nav />
        <div className='app-wrapper-content'>
          <Routes> {}
            <Route path="/content" element={<Content isAuth={isAuth}/>} />
            <Route path="/tengris" element={<Tengris />} />
            <Route path="/profile" element={<Profile setIsAuth={setIsAuth} isAuth={isAuth} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;