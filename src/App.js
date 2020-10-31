import React from 'react';
// import logo from './logo.svg';
import './App.css';
import './scss/custom_styles.scss'
import './scss/custom_responsive.scss'

import LandingView from './components/landing'

function App() {
  return (
    <div className="App globalContainerCtrl">
      <LandingView display={true} />
    </div>
  );
}

export default App;
