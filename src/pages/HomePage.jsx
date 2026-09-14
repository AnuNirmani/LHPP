import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import LegacyPage from '../components/LegacyPage';
import BannerSlider from '../components/BannerSlider';
import html from '../content/index.html?raw';

export default function HomePage() {
  const [mountNode, setMountNode] = useState(null);

  useEffect(() => {
    const findMount = () => {
      const el = document.getElementById('home-banner-slider-mount');
      if (el) {
        setMountNode(el);
        return true;
      }
      return false;
    };

    if (!findMount()) {
      const interval = setInterval(() => {
        if (findMount()) clearInterval(interval);
      }, 30);
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <>
      <LegacyPage
        html={html}
        title="Lake House Printers &amp; Publishers \u2013 Lake House Printers &amp; Publishers"
        bodyClass="page-id-716 home"
        isContact={false}
      />
      {mountNode && createPortal(<BannerSlider />, mountNode)}
    </>
  );
}

