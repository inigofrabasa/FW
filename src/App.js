import React from 'react';
// import logo from './logo.svg';
import './App.css';
import './scss/custom_styles.scss'
import './scss/custom_responsive.scss'

import LandingView from './components/landing'
import DefaultLayout from './components/defaultLayout'

function App() {
  return (
    <div className="App ">
      
      <DefaultLayout/>
    </div>
  );
}

export default App;
