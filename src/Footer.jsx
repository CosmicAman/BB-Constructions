import React from 'react';
import './index.css';

const Footer = React.memo(() => {
  return (
    <footer className="footer">
      <p>© 2024 Build-Brand Construction. All rights reserved.</p>
      <p>
      Contact:<a href="tel:8434849491"> 8434849491</a> | 
        Email: <a style={{ color: 'yellow' }} href="mailto:buildbrandconstruction@gmail.com">buildbrandconstruction@gmail.com</a>
      </p>
      <p>
      Address:<a
        style={{ fontSize:"20px", cursor: "pointer", color:"yellow" }}
        onClick={() => window.open('https://maps.app.goo.gl/RcYvnaVzS83KbMt78', '_blank', 'noopener,noreferrer')}
      >
         Hirak Road Harina, P.O- Dumra, P.S- Barora, Dhanbad, Jharkhand, 828306
      </a>
      </p>

      <p>
      <hr/>
        Developed with ❤️ by: <a href="https://github.com/CosmicAman" className="github-link">Cosmic Aman</a>
      </p>
    </footer>
  );
});

export default Footer;
