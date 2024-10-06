import React, { useState, Suspense, lazy } from 'react';
import './index.css';
import backgroundVideo from './assets/background2.mp4';
import poster from './assets/poster.jpeg';

// Lazy loading
const Navbar = lazy(() => import('./navbar'));
const Footer = lazy(() => import('./Footer'));
const MainContent = lazy(() => import('./Main-content'));

function App() {
  const [activePage, setActivePage] = useState('home');

  return (
    <div className="App">
      {/* Optimized video background */}
      <video
        className="video-background"
        autoPlay
        muted
        loop
        preload="metadata"
        poster={poster}
        playsInline
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="overlay"></div>

      <Suspense fallback={<div>Loading please wait......</div>}>
        <Navbar setActivePage={setActivePage} />
        <MainContent activePage={activePage} />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
