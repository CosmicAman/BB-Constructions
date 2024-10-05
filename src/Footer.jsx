import React from 'react';
import './index.css';

const Footer = React.memo(() => {
  return (
    <footer className="footer">
      <p>© 2024 BB Constructions. All rights reserved.</p>
      <p>
      Contact:<a href="tel:8434849491"> 8434849491</a> | 
        Email: <a style={{ color: 'white' }} href="mailto:info@bbbuilders.com">buildbrandconstructio@gmail.com</a>
      </p>
      <p>Address: Hirak Road Harina, P.O- Dumra, P.S- Barora, Dhanbad, Jharkhand, 828306</p>
      <p>
        Developed by: <a href="https://github.com/CosmicAman" className="github-link">Cosmic Aman</a>
      </p>
    </footer>
  );
});

export default Footer;
