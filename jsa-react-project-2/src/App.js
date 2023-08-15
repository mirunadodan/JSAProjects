import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Page404 from './pages/Page404';

class App extends React.Component {
  constructor () {
    super();
    this.state={};
  }
  render() {
    return (
      <div> 
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="*" element={<Page404 />} /> 
        </Routes>
        </div>
    )
  }
}

export default App;
