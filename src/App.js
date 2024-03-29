import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav'
import Content from './components/Content/Content'

const App = () => {
  return (
    <div className="app-wrapper">
      <style>
        {'body {background-color: #222222;}'}
      </style>

      <Header />
      <Nav />
      <Content />
    </div>
  );
}

export default App;