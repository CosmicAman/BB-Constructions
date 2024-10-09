import React, { lazy, Suspense, useEffect, useRef, memo } from 'react';
import './home.css';
import MediaResources from './media';
import banner from './assets/banner.jpeg';

// Lazy load the components
const ImageSlider = lazy(() => import('./ImageSlider'));
const CardSlider = lazy(() => import('./CardSlider'));

const MainContent = ({ activePage }) => {
  const homeSectionRef = useRef(null); 

  useEffect(() => {
    const fadeInOnScroll = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-visible');
          // Remove the observer disconnection to allow re-triggering on re-entry
        } else {
          // Optionally remove the fade-in-visible when out of view, to trigger the animation again
          entry.target.classList.remove('fade-in-visible');
        }
      });
    };

    const observer = new IntersectionObserver(fadeInOnScroll, {
      threshold: 0.01,
    });

    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect(); // Clean up observer on component unmount
  }, [activePage]); // Re-run this effect whenever activePage changes

  return (
    <div style={styles.main}>
      <Suspense fallback={<div>Loading please wait...</div>}>
        {activePage === 'home' && (
          <section id="home">
            <div className="home fade-head">
              <h1>Build Brand Construction</h1>
              <p>Make your own dream house</p>
            </div>
            <div className="moto fade-head">
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
              <video poster={banner} controls preload="none" loading="lazy">
                <source src={MediaResources.video} type="video/mp4" />
                <source src="./assets/intro-video.webm" type="video/webm" />
                <source src="./assets/intro-video.ogg" type="video/ogg" />
                Your browser does not support the video tag.
              </video>
            </div>

            <div className='partner fade-in'>
              <div className="hero">
                <h1>COMPANY EXECUTIVES</h1>
                <div className="hero-images">
                  <div className="image-card">
                    <img loading="lazy" src={MediaResources.aboutphoto[0]} alt="Manish Kumar Bharti (C.E.O)" />
                    <p className="hero-text">Manish Kumar Bharti (C.E.O)</p>
                  </div>
                  <div className="image-card">
                    <img loading="lazy" src={MediaResources.aboutphoto[1]} alt="Amar Chouhan(M.D)" />
                    <p className="hero-text">Amar Chouhan(M.D)</p>
                  </div>
                </div>
              </div>

              <p className='pacifico-regular '>“Your dream home, built with our quality and innovation. We don't just construct buildings; we build trust and lasting foundations.„</p>

              <p className='kalam'>“आपके सपनों का घर, हमारी गुणवत्ता और नवाचार के साथ। हम सिर्फ इमारतें नहीं, विश्वास और स्थायित्व का निर्माण करते हैं।„</p>

              <h1>OUR BANKING PARTNER</h1>
              <div className='partner-logos'>
                <img loading="lazy" src={MediaResources.brandLogos[0]} alt="SBI" />
                <img loading="lazy" src={MediaResources.brandLogos[1]} alt="LIC" />
                <img loading="lazy" src={MediaResources.brandLogos[2]} alt="BOI" />
              </div>  
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
            <h1>OUR TEAM</h1>
            <p>Build Brand Construction is committed to quality construction and client satisfaction.</p>
            <CardSlider cards={[
              {
                image: MediaResources.aboutphoto[0],
                intro: <p><h3 style={{ textAlign: 'center', fontWeight: 'bold', color: 'yellow' }}>Manish Kumar Bharti(CEO)</h3>The dynamic CEO of BuildBrand Construction, a newly established company in the construction industry...</p>
              },
              {
                image: MediaResources.aboutphoto[1],
                intro: <p><h3 style={{ textAlign: 'center', fontWeight: 'bold', color: 'yellow' }}>Amar Chouhan(MD)</h3> The Managing Director of BuildBrand Construction...</p>
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
                Manish Kumar Bharti | Contact: <a style={{ color: 'yellow' }} href="tel:8434849491">8434849491</a> |
                Email: <a style={{ color: 'yellow' }} href="mailto:buildbrandconstruction@gmail.com">buildbrandconstruction@gmail.com</a> |
                Address: Hirak Road Harina, P.O- Dumra, P.S- Barora, Dhanbad, Jharkhand, 828306
              </address>
            </div>

            <div className="contact">
              <img loading="lazy" className="contact-img" src={MediaResources.contactphoto[1]} alt="Contact Person 2" />
              <address className="contact-info">
                Amar Chouhan | Contact: <a style={{ color: 'yellow' }} href="tel:8434849491">8434849491</a> |
                Email: <a style={{ color: 'yellow' }} href="mailto:buildbrandconstruction@gmail.com">buildbrandconstruction@gmail.com</a> |
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
    textAlign: 'center',
  },
};

export default memo(MainContent);
