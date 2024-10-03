import React from 'react';
import './home.css';
import ImageSlider from './ImageSlider';
import CardSlider from './CardSlider';
import MediaResources from './media'; // Importing MediaResources

const MainContent = ({ activePage }) => {
  return (
    <div style={styles.main}>
      {activePage === 'home' && (
        <section>
          <div className='home'>
            <h1>Build Brand Constructions</h1>
            <p>Make your own dream house</p>
          </div>
          <div className='moto'>
            <h1 style={{ textDecoration: 'underline' }}>बनाएं अपने सपनों का घर वास्तु के अनुसार</h1>
            <p className='moto-p'>
              <span>Walkthrough Design</span> |
              <span> 3D Design</span> |
              <span> Structural Design</span> |
              <span> Architectural Design</span> |
              <span> Interior Design</span> |
              <span> Elevation Design</span>
            </p>
          </div>

          <ImageSlider images={MediaResources.Homecard.slice(0, 8)} /> {/* Using MediaResources.photos */}

          <div className="video-container">
            <video controls>
              <source src={MediaResources.video} type="video/mp4" /> {/* Using MediaResources.video */}
              <source src="./assets/intro-video.webm" type="video/webm" />
              <source src="./assets/intro-video.ogg" type="video/ogg" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>
      )}

      {activePage === 'projects' && (
        <section className="projects-section">
          <h1 className='projects'>Our Projects</h1>
          <div className="projects-gallery">
            {MediaResources.projectgallery.map((image, index) => (
              <div key={index} className="project-container">
                <img loading='lazy' src={image} alt={`Project ${index + 1}`} className="project-image" />
              </div>
            ))}
          </div>
        </section>
      )}

      {activePage === 'about' && (
        <section>
          <h1>About Us</h1>
          <p>BB Builders is committed to quality construction and client satisfaction.</p>
          <CardSlider cards={[
            {
              image: MediaResources.aboutphoto[0],
              intro: 'Manish kuamr Bharti is the best construction engineer in town.',
            },
            {
              image: MediaResources.aboutphoto[1],
              intro: 'Chota malik is the best architect in town.',
            }
          ]} />
        </section>
      )}

      {activePage === 'contact' && (
        <section>
          <h1>Contact Us</h1>
          <p>We would love to hear from you!</p>

          <div className='contact'>
            <img loading='lazy' className='contact-img' src={MediaResources.contactphoto[0]} alt="Contact Person 1" />
            <address className='contact-info'>
              Manish Kumar Bharti | <a style={{ color: 'white' }} href='tel:+123456789'>Contact: 8434849491</a> |
              Email: <a style={{ color: 'white' }} href='mailto:info@bbbuilders.com'>info@bbbuilders.com</a> |
              Address: Hirak Roaad Harina, P.O- Dumra, P.S- Barora,Dhanbad, Jharkhand,828306
            </address>
          </div>

          <div className='contact'>
            <img loading='lazy' className='contact-img' src={MediaResources.contactphoto[1]} alt="Contact Person 2" />
            <address className='contact-info'>
              Chota Malik | <a style={{ color: 'white' }} href='tel:+123456789'>Contact: 8434849491</a> |
              Email: <a style={{ color: 'white' }} href='mailto:info@bbbuilders.com'>info@bbbuilders.com</a> |
              Address: Hirak Roaad Harina, P.O- Dumra, P.S- Barora,Dhanbad, Jharkhand,828306
            </address>
          </div>
        </section>
      )}
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

export default MainContent;
