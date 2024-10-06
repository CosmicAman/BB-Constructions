import React, { lazy, Suspense, memo } from 'react';
import './home.css';
import MediaResources from './media';
import banner from './assets/banner.jpeg';

// Lazy load the components
const ImageSlider = lazy(() => import('./ImageSlider'));
const CardSlider = lazy(() => import('./CardSlider'));

const MainContent = ({ activePage }) => {
  return (
    <div style={styles.main}>
      <Suspense fallback={<div>Loading please wait...</div>}>
        {activePage === 'home' && (
          <section id="home">
            <div className="home fade-in">
              <h1>Build Brand Constructions</h1>
              <p>Make your own dream house</p>
            </div>
            <div className="moto fade-in">
              <h1 style={{ textDecoration: 'underline' }}>बनाएं अपने सपनों का घर वास्तु के अनुसार</h1>
              <p className="moto-p">
                <span>Walkthrough Design</span> |
                <span> 3D Design</span> |
                <span> Structural Design</span> |
                <span> Architectural Design</span> |
                <span> Interior Design</span> |
                <span> Elevation Design</span>
              </p>
            </div>

            <ImageSlider images={MediaResources.Homecard.slice(0, 8)} />

            <div className="video-container">
              <video poster={banner} controls preload="none">
                <source src={MediaResources.video} type="video/mp4" />
                <source src="./assets/intro-video.webm" type="video/webm" />
                <source src="./assets/intro-video.ogg" type="video/ogg" />
                Your browser does not support the video tag.
              </video>
            </div>
          </section>
        )}

        {activePage === 'projects' && (
          <section id="projects" className="projects-section">
            <h1 className="projects">Our Projects</h1>
            <div className="projects-gallery">
              {MediaResources.projectgallery.map((image, index) => (
                <div key={index} className="project-container">
                  <img loading="lazy" src={image} alt={`Project ${index + 1}`} className="project-image" />
                </div>
              ))}
            </div>
          </section>
        )}

        {activePage === 'about' && (
          <section id="about">
            <h1>About Us</h1>
            <p>BB Builders is committed to quality construction and client satisfaction.</p>
            <CardSlider cards={[
              {
                image: MediaResources.aboutphoto[0],
                intro: 'Manish Kumar Bharti is the best construction engineer in town.',
              },
              {
                image: MediaResources.aboutphoto[1],
                intro: 'Chota Malik is the best architect in town.',
              }
            ]} />
          </section>
        )}

        {activePage === 'contact' && (
          <section id="contact">
            <h1>Contact Us</h1>
            <p>We would love to hear from you!</p>

            <div className="contact">
              <img loading="lazy" className="contact-img" src={MediaResources.contactphoto[0]} alt="Contact Person 1" />
              <address className="contact-info">
                Manish Kumar Bharti | <a style={{ color: 'white' }} href="tel:8434849491">Contact: 8434849491</a> |
                Email: <a style={{ color: 'white' }} href="mailto:info@bbbuilders.com">info@bbbuilders.com</a> |
                Address: Hirak Road Harina, P.O- Dumra, P.S- Barora, Dhanbad, Jharkhand, 828306
              </address>
            </div>

            <div className="contact">
              <img loading="lazy" className="contact-img" src={MediaResources.contactphoto[1]} alt="Contact Person 2" />
              <address className="contact-info">
                Chota Malik | <a style={{ color: 'white' }} href="tel:8434849491">Contact: 8434849491</a> |
                Email: <a style={{ color: 'white' }} href="mailto:info@bbbuilders.com">info@bbbuilders.com</a> |
                Address: Hirak Road Harina, P.O- Dumra, P.S- Barora, Dhanbad, Jharkhand, 828306
              </address>
            </div>
          </section>
        )}
      </Suspense>
    </div>
  );
};

const styles = {
  main: {
    padding: '30px',
    minHeight: '60vh',
    textAlign: 'center',
  },
};

export default memo(MainContent);
