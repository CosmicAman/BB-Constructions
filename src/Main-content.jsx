import React, { lazy, Suspense, useEffect, useRef, memo, useState } from 'react';
import './home.css';
import MediaResources from './media';
import banner from './assets/banner.jpeg';

// Lazy load the components
const ImageSlider = lazy(() => import('./ImageSlider'));
const CardSlider = lazy(() => import('./CardSlider'));

const MainContent = ({ activePage }) => {
  const homeSectionRef = useRef(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const partnerSectionRef = useRef(null);

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

    // Observe after all images are loaded
    if (imagesLoaded) {
      const fadeInElements = document.querySelectorAll('.fade-in');
      fadeInElements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect(); // Clean up observer on component unmount
  }, [activePage, imagesLoaded]); // Re-run this effect whenever activePage or imagesLoaded changes

  // Callback to check if all images are loaded
  const handleImageLoad = () => {
    setImagesLoaded(true);
  };

  // Handle scrolling behavior for the partner section
  useEffect(() => {
    const handleScroll = (entries) => {
      const [entry] = entries;

      if (entry.intersectionRatio >= 0.90) {
        partnerSectionRef.current.style.overflowY = 'scroll'; // Enable scrolling when partially in view (25%)
      } else {
        partnerSectionRef.current.style.overflowY = 'hidden'; // Disable scrolling when not enough is in view
      }
    };

    const observer = new IntersectionObserver(handleScroll, {
      threshold: 0.90, // Start scrolling when 25% of the partner section is visible
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

            <div className="partner fade-in" ref={partnerSectionRef}>
              <div className="hero">
                <h1>COMPANY EXECUTIVES</h1>
                <div className="hero-images">
                  <div className="image-card">
                    <img
                      loading="lazy"
                      src={MediaResources.aboutphoto[0]}
                      alt="Manish Kumar Bharti (C.E.O)"
                      onLoad={handleImageLoad}  // Call when image loads
                    />
                    <p className="hero-text">Manish Kumar Bharti (C.E.O)</p>
                  </div>
                  <div className="image-card">
                    <img
                      loading="lazy"
                      src={MediaResources.aboutphoto[1]}
                      alt="Amar Chouhan(M.D)"
                      onLoad={handleImageLoad}  // Call when image loads
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
                  onLoad={handleImageLoad}  // Call when image loads
                />
                <img
                  loading="lazy"
                  src={MediaResources.brandLogos[1]}
                  alt="LIC"
                  onLoad={handleImageLoad}  // Call when image loads
                />
                <img
                  loading="lazy"
                  src={MediaResources.brandLogos[2]}
                  alt="BOI"
                  onLoad={handleImageLoad}  // Call when image loads
                />
              </div>
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
