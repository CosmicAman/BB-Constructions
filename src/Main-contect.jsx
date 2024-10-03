import React from 'react';
import './home.css';
import ImageSlider from './ImageSlider';
import CardSlider from './CardSlider';
import photo from './assets/photo1.jpeg';
import photo1 from './assets/photo2.jpeg';
import photo2 from './assets/photo3.jpeg';
import photo3 from './assets/photo4.jpeg';
import photo4 from './assets/aman.jpeg';
import photo5 from './assets/amit.jpeg';
import photo6 from './assets/malik.jpeg';
import photo7 from './assets/makil1.jpeg';
import photo8 from './assets/makil2.jpeg';
import photo9 from './assets/makil3.jpeg';
import video from './assets/intro-video.mp4';

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
  photo, photo1, photo2, photo3,photo6,photo7,photo8,photo9
];




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
            <h1 style={{textDecoration: 'underline'}}>बनाएं अपने सपनों का घर वास्तु के अनुसार</h1>
              <p className='moto-p'>
                <span>Walkthrough Design</span> | 
                <span> 3D Design</span> | 
                <span> Structural Design</span> | 
                <span> Architectural Design</span> | 
                <span> Interior Design</span> | 
                <span> Elevation Design</span>
              </p>
          </div>


          <ImageSlider images={images} />


          <div className="video-container">
          <video controls>
            <source src={video} type="video/mp4" />
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
      {projectImages.map((image, index) => (
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
          <CardSlider cards={cards} />
        </section>
      )}



      {activePage === 'contact' && (
        <section>
          <h1>Contact Us</h1>
          <p>We would love to hear from you!</p>

          <div className='contact'>
            <img loading='lazy' className='contact-img' src={photo4}></img>
            <address className='contact-info'>Manish Kumar Bharti | <a style={{color: 'white'}} href='tel:+123456789'>Contact: +123456789</a>  |  
            Email: <a style={{color: 'white'}}href='mailto:info@bbbuilders.com'>info@bbbuilders.com</a> |
            Address: Hirak Roaad Harina, P.O- Dumra, P.S- Barora,Dhanbad, Jharkhand,828306
            </address>
          </div>

          <div className='contact'>
          <img loading = 'lazy' className='contact-img' src={photo5}></img>
          <address className='contact-info'>
            Chota Malik | <a style={{color: 'white'}} href='tel:+123456789'>Contact: +123456789</a> | 
            Email: <a style={{color: 'white'}} href='mailto:info@bbbuilders.com'>info@bbbuilders.com</a> |
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
