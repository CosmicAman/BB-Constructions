import React, { lazy, Suspense, useEffect, useRef, memo, useState } from 'react';
import './home.css';
import MediaResources from './media';
import banner from './assets/banner.jpeg';

const ImageSlider = lazy(() => import('./ImageSlider'));
const CardSlider = lazy(() => import('./CardSlider'));

const MainContent = ({ activePage }) => {
  const homeSectionRef = useRef(null);
  const partnerSectionRef = useRef(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0); // To track scroll position
  const [isScrollEnabled, setIsScrollEnabled] = useState(false); // To manage scroll state

  useEffect(() => {
    const fadeInOnScroll = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-visible');
        } else {
          entry.target.classList.remove('fade-in-visible');
        }
      });
    };

    const observer = new IntersectionObserver(fadeInOnScroll, {
      threshold: 0.1,
    });

    if (imagesLoaded) {
      const fadeInElements = document.querySelectorAll('.fade-in');
      fadeInElements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, [activePage, imagesLoaded]);

  const handleImageLoad = () => {
    setImagesLoaded(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Reset partner section scroll if we're at the top of the page
      if (currentScrollY === 0 && partnerSectionRef.current) {
        partnerSectionRef.current.scrollTop = 0; // Reset scroll to top
      }

      // Update scroll position
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;

      // Enable scrolling when 70% of the partner section is in view
      if (entry.intersectionRatio >= 0.7) {
        setIsScrollEnabled(true); // Allow scrolling
        partnerSectionRef.current.style.overflowY = 'scroll'; // Enable scrolling
      } else {
        setIsScrollEnabled(false); // Disallow scrolling
        partnerSectionRef.current.style.overflowY = 'hidden'; // Ensure scroll is disabled
      }
    }, {
      threshold: 0.7, // Trigger when 70% of the partner section is visible
    });

    if (partnerSectionRef.current) {
      observer.observe(partnerSectionRef.current);
    }

    return () => {
      if (partnerSectionRef.current) {
        observer.unobserve(partnerSectionRef.current);
      }
    };
  }, []);

  return (
    <div style={styles.main}>
      <Suspense fallback={<div>Loading please wait...</div>}>
        {activePage === 'home' && (
          <section id="home" ref={homeSectionRef}>
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

            <div className="partner fade-in" ref={partnerSectionRef} style={{ overflowY: 'hidden' }}>
              <div className="hero">
                <h1>COMPANY EXECUTIVES</h1>
                <div className="hero-images">
                  <div className="image-card">
                    <img
                      loading="lazy"
                      src={MediaResources.aboutphoto[0]}
                      alt="Manish Kumar Bharti (C.E.O)"
                      onLoad={handleImageLoad}
                    />
                    <p className="hero-text">Manish Kumar Bharti (C.E.O)</p>
                  </div>
                  <div className="image-card">
                    <img
                      loading="lazy"
                      src={MediaResources.aboutphoto[1]}
                      alt="Amar Chouhan(M.D)"
                      onLoad={handleImageLoad}
                    />
                    <p className="hero-text">Amar Chouhan(M.D)</p>
                  </div>
                </div>
              </div>

              <p className="pacifico-regular">
                “Your dream home, built with our quality and innovation. We don't just construct buildings; we build trust and lasting foundations.”
              </p>

              <p className="kalam">
                “आपके सपनों का घर, हमारी गुणवत्ता और नवाचार के साथ। हम सिर्फ इमारतें नहीं, विश्वास और स्थायित्व का निर्माण करते हैं।„
              </p>

              <h1>OUR BANKING PARTNER</h1>
              <div className="partner-logos">
                <img
                  loading="lazy"
                  src={MediaResources.brandLogos[0]}
                  alt="SBI"
                  onLoad={handleImageLoad}
                />
                <img
                  loading="lazy"
                  src={MediaResources.brandLogos[1]}
                  alt="LIC"
                  onLoad={handleImageLoad}
                />
                <img
                  loading="lazy"
                  src={MediaResources.brandLogos[2]}
                  alt="BOI"
                  onLoad={handleImageLoad}
                />
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
