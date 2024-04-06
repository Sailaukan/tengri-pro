import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav'
import Profile from './components/Profile/profile';
import Content from './components/Content/Content'
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import Routes


const App = () => {
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
            <Route path="/content" element={<Content />} />
            {/* <Route path="/tengris" element={<Tengris />} /> */}
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;