import React, { useState } from 'react';
import Navbar from './navbar';
import Footer from './Footer';
import MainContent from './Main-contect';
import './index.css';

function App() {
  const [activePage, setActivePage] = useState('home');

  return (
    <div className="App">
      <Navbar setActivePage={setActivePage} />
      <MainContent activePage={activePage} />
      <Footer />
    </div>
  );
}

export default App;
