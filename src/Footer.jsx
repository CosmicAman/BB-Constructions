import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© 2024 BB Constructions. All rights reserved.</p>
      <p><a style={{color: 'white'}} href='tel:+123456789'>Contact: 8434849491</a> | Email: info@bbbuilders.com</p>
      <p>Address: Hirak Roaad Harina, P.O- Dumra, P.S- Barora,Dhanbad, Jharkhand,828306</p>
    </footer>
  );
};

const styles = {
  footer: {
    padding: '20px',
    textAlign: 'center',
    color: '#fff',
    position: 'relative',
    bottom: 0,
    width: '100%',
  },
};

export default Footer;
