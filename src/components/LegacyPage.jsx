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

export default function LegacyPage({ html, title, bodyClass, isContact = false }) {
  useEffect(() => {
    document.title = title;
    document.body.className = bodyClass;
    window.scrollTo(0, 0);

    let cancelled = false;
    (async () => {
      if (!window.__lhpVendorScriptsLoaded) {
        window.__lhpVendorScriptsLoaded = true;
        for (const src of vendorScripts) {
          if (cancelled) return;
          await loadScript(src);
        }
      }
      if (isContact && !cancelled) await loadScript('/js/contact-form.js');
    })();

    return () => { cancelled = true; };
  }, [title, bodyClass, isContact]);

  return <div className="lhp-react-page" dangerouslySetInnerHTML={{ __html: html }} />;
}
