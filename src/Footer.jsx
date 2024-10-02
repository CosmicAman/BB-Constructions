import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© 2024 BB Builders. All rights reserved.</p>
      <p>Contact: +123456789 | Email: info@bbbuilders.com</p>
      <p>Address: 123 Builder Street, Buildtown, Country</p>
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
