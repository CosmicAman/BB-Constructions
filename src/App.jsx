import React, { useState } from 'react';
import Navbar from './navbar';
import Footer from './Footer';
import MainContent from './Main-contect';
import './index.css';
import backgroundVideo from './assets/background.mp4';

function App() {
  const [activePage, setActivePage] = useState('home');

  return (
    <div className="App">
      <video className="video-background" autoPlay muted loop>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay"></div>
      <Navbar setActivePage={setActivePage} />
      <MainContent activePage={activePage} />
      <Footer />
    </div>
  );
}

export default App;
