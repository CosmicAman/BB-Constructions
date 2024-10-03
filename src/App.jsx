import React, { useState, Suspense, lazy } from 'react';
import './index.css';
import backgroundVideo from './assets/background.mp4';

//Lazy loading ho raha hai
const Navbar = lazy(() => import('./navbar'));
const Footer = lazy(() => import('./Footer'));
const MainContent = lazy(() => import('./Main-contect'));

function App() {
  const [activePage, setActivePage] = useState('home');

  return (
    <div className="App">
      <video className="video-background" autoPlay muted loop>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay"></div>

      <Suspense fallback={<div>Loading...</div>}>
        <Navbar setActivePage={setActivePage} />
        <MainContent activePage={activePage} />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
