import React from 'react';
import Home from '../views/Home'
import Navbar from '../components/Navbar'
import {
  BrowserRouter as Router
} from 'react-router-dom';

export default () => {

  return (
    <div id="app">
      <Router>
        <Navbar />
        <Home />
      </Router>
    </div>
  )
}
