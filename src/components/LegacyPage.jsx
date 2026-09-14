import { useEffect } from 'react';

const vendorScripts = [
  '/wp-includes/js/jquery/jquery.min.js',
  '/wp-includes/js/jquery/jquery-migrate.min.js',
  '/wp-content/themes/dexen/assets/js/bootstrap.bundle.min.js',
  '/wp-content/themes/dexen/assets/js/jquery.counterup.min.js',
  '/wp-content/themes/dexen/assets/js/waypoints.min.js',
  '/wp-content/themes/dexen/assets/js/theme.js',
  '/wp-content/plugins/dexen-core/elementor-addons/assets/js/owl.carousel.min.js',
  '/wp-content/plugins/dexen-core/elementor-addons/assets/js/swiper.min.js',
  '/wp-content/plugins/dexen-core/elementor-addons/assets/js/addons-script.js',
  '/wp-content/plugins/elementor/assets/js/webpack.runtime.min.js',
  '/wp-content/plugins/elementor/assets/js/frontend-modules.min.js',
  '/wp-content/plugins/elementor/assets/lib/waypoints/waypoints.min.js',
  '/wp-includes/js/jquery/ui/core.min.js',
  '/js/elementor-config.js',
  '/wp-content/plugins/elementor/assets/js/frontend.min.js',
];

function loadScript(src) {
  return new Promise((resolve) => {
    const existing = document.querySelector(`script[data-lhp-src="${src}"]`);
    if (existing) return resolve();
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    script.dataset.lhpSrc = src;
    script.onload = resolve;
    script.onerror = resolve;
    document.body.appendChild(script);
  });
}

function initializeLegacyCarousels() {
  const $ = window.jQuery;
  if (!$ || !$.fn.owlCarousel) return;

  $('.testimonial-one__carousel').each(function () {
    const $carousel = $(this);
    if ($carousel.hasClass('owl-loaded')) return;

    $carousel.owlCarousel({
      loop: true,
      margin: 0,
      nav: true,
      navText: [
        '<span aria-label="Previous slide">&#10094;</span>',
        '<span aria-label="Next slide">&#10095;</span>',
      ],
      dots: true,
      slideBy: 1,
      items: 1,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      smartSpeed: 900,
      mouseDrag: true,
      touchDrag: true,
    });
  });
}

function loadVendorScripts() {
  if (!window.__lhpVendorScriptsPromise) {
    window.__lhpVendorScriptsPromise = (async () => {
      for (const src of vendorScripts) await loadScript(src);
    })();
  }

  return window.__lhpVendorScriptsPromise;
}

export default function LegacyPage({ html, title, bodyClass, isContact = false }) {
  useEffect(() => {
    document.title = title;
    document.body.className = bodyClass;
    window.scrollTo(0, 0);

    let cancelled = false;
    (async () => {
      await loadVendorScripts();
      if (cancelled) return;
      if (!cancelled) initializeLegacyCarousels();
      if (isContact && !cancelled) await loadScript('/js/contact-form.js');
    })();

    return () => { cancelled = true; };
  }, [title, bodyClass, isContact]);

  return <div className="lhp-react-page" dangerouslySetInnerHTML={{ __html: html }} />;
}
