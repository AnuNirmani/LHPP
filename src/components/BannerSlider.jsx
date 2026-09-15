import { useState, useEffect, useRef, useCallback } from 'react';
import './BannerSlider.css';

const slides = [
  {
    id: 0,
    image: '/wp-content/uploads/2025/03/slider.jpg',
    alt: 'Lake House Security Printing',
  },
  {
    id: 1,
    image: '/wp-content/uploads/2024/10/slider-1-7-copy.jpg',
    alt: 'Lake House Security Cards',
  },
    {
    id: 2,
    image: '/wp-content/uploads/2025/03/3.jpg',
    alt: 'Lake House Security Cards',
  },
      {
    id: 2,
    image: '/wp-content/uploads/2025/01/sp-2.png',
    alt: 'Lake House Security Cards',
  },
];

const SLIDE_INTERVAL_MS = 3000;
const ANIMATION_DURATION_MS = 850;

export default function BannerSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [outgoingIndex, setOutgoingIndex] = useState(null);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState('down'); // 'down' (up-to-down) or 'up' (down-to-up)

  const activeIndexRef = useRef(0);
  activeIndexRef.current = activeIndex;

  const animatingRef = useRef(false);
  animatingRef.current = animating;

  const timerRef = useRef(null);

  const goToSlide = useCallback((targetIndex, dir = 'down') => {
    if (animatingRef.current || targetIndex === activeIndexRef.current) return;

    setDirection(dir);
    setOutgoingIndex(activeIndexRef.current);
    setActiveIndex(targetIndex);
    setAnimating(true);

    setTimeout(() => {
      setAnimating(false);
      setOutgoingIndex(null);
    }, ANIMATION_DURATION_MS);
  }, []);

  const handleNext = useCallback(() => {
    const nextIdx = (activeIndexRef.current + 1) % slides.length;
    goToSlide(nextIdx, 'down');
  }, [goToSlide]);

  const handlePrev = useCallback(() => {
    const prevIdx = (activeIndexRef.current - 1 + slides.length) % slides.length;
    goToSlide(prevIdx, 'up');
  }, [goToSlide]);

  const handleDotClick = useCallback((idx) => {
    if (idx === activeIndexRef.current) return;
    const dir = idx > activeIndexRef.current ? 'down' : 'up';
    goToSlide(idx, dir);
  }, [goToSlide]);

  // Set up 3-second auto-slide interval (slides up to down)
  useEffect(() => {
    timerRef.current = setInterval(() => {
      handleNext();
    }, SLIDE_INTERVAL_MS);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [activeIndex, handleNext]);

  return (
    <div className="lhp-banner-wrapper">
      {/* Sliding Background Layers */}
      <div className="lhp-banner-slides-track">
        {slides.map((slide, idx) => {
          let slideClass = 'lhp-banner-slide lhp-slide-hidden';

          if (idx === activeIndex) {
            if (animating) {
              slideClass = `lhp-banner-slide ${
                direction === 'down' ? 'lhp-slide-entering-down' : 'lhp-slide-entering-up'
              }`;
            } else {
              slideClass = 'lhp-banner-slide lhp-slide-active';
            }
          } else if (idx === outgoingIndex) {
            slideClass = `lhp-banner-slide ${
              direction === 'down' ? 'lhp-slide-exiting-down' : 'lhp-slide-exiting-up'
            }`;
          }

          return (
            <div
              key={slide.id}
              className={slideClass}
              style={{ backgroundImage: `url("${slide.image}")` }}
              role="img"
              aria-label={slide.alt}
            />
          );
        })}
      </div>

      {/* Centered Overlay with Title and Button */}
      <div className="lhp-banner-overlay-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h3 className="banner-title">
                Lake House Printers <br /> &amp; Publishers PLC
              </h3>
              <div className="btn-block">
                <a className="theme-btn banner-btn" href="/about-us">
                  About Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Dots (Bottom Left) */}
      <div className="lhp-banner-dots-container">
        {slides.map((slide, idx) => (
          <button
            key={slide.id}
            type="button"
            className={`lhp-banner-dot ${idx === activeIndex ? 'active' : ''}`}
            onClick={() => handleDotClick(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows (Bottom Right) */}
      <div className="lhp-banner-arrows-container">
        <button
          type="button"
          className="lhp-banner-arrow prev"
          onClick={handlePrev}
          aria-label="Previous slide"
        >
          <i className="fa fa-angle-left" />
        </button>
        <button
          type="button"
          className="lhp-banner-arrow next"
          onClick={handleNext}
          aria-label="Next slide"
        >
          <i className="fa fa-angle-right" />
        </button>
      </div>
    </div>
  );
}
