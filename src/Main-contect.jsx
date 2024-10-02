import React from 'react';
import './home.css';
import ImageSlider from './ImageSlider';
import CardSlider from './CardSlider';
import photo from './assets/photo1.jpg';
import photo1 from './assets/photo2.jpg';
import photo2 from './assets/photo3.jpg';
import photo3 from './assets/photo4.jpeg';
import photo4 from './assets/aman.jpeg';
import photo5 from './assets/amit.jpeg';

const images = [photo, photo1, photo2, photo3];

const cards = [
  {
    image: photo5,
    intro: 'Chota Malik is the best construction engineer in town.',
  },
  {
    image:photo4,
    intro:'Image testing Developers image'
  }
];


const projectImages = [
  photo, photo1, photo2, photo3
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
  <section className="projects-section">
    <h1>Our Projects</h1>
    <div className="projects-gallery">
      {projectImages.map((image, index) => (
        <div key={index} className="project-container">
          <img src={image} alt={`Project ${index + 1}`} className="project-image" />
        </div>
      ))}
    </div>
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
