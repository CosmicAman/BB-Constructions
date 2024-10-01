import React from 'react';
import './home.css';
import ImageSlider from './ImageSlider';
import CardSlider from './CardSlider';
import photo from './assets/photo1.jpg';
import photo1 from './assets/photo2.jpg';
import photo2 from './assets/photo3.jpg';

const images = [photo, photo1, photo2];

const cards = [
  {
    image: photo,
    intro: 'BB Builders has been in the construction business for over 10 years, delivering quality projects on time.',
  },
  {
    image: photo1,
    intro: 'Our team of skilled professionals is dedicated to providing top-notch construction services.',
  },
  {
    image: photo2,
    intro: 'We prioritize client satisfaction and work closely with you to bring your vision to life.',
  },
];

const MainContent = ({ activePage }) => {
  return (
    <div style={styles.main}>
      {activePage === 'home' && (
        <section>
          <div className='home'>
            <h1>Welcome to BB Constructions</h1>
            <p>Your trusted construction partner.</p>
          </div>
          <ImageSlider images={images} />
        </section>
      )}
      {activePage === 'projects' && (
        <section>
          <h1>Our Projects</h1>
          <p>Check out our latest construction projects here.</p>
        </section>
      )}
      {activePage === 'about' && (
        <section>
          <h1>About Us</h1>
          <p>BB Builders is committed to quality construction and client satisfaction.</p>
          <CardSlider cards={cards} />
        </section>
      )}
      {activePage === 'contact' && (
        <section>
          <h1>Contact Us</h1>
          <p>We would love to hear from you!</p>
        </section>
      )}
    </div>
  );
};

const styles = {
  main: {
    padding: '40px',
    minHeight: '60vh',
    textAlign: 'center', // Center text for better presentation
  },
};

export default MainContent;
