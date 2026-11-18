import { useState } from 'react';

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState({ divisions: false, secretarial: false });
  const toggleSubmenu = (submenu) => setOpenSubmenus((current) => ({ ...current, [submenu]: !current[submenu] }));

  return (
    <header className={`site-header header-one header-style-two${menuOpen ? ' menu-open' : ''}`}>
      <div className="top-bar"><div className="container">
        <div className="social-block social-font-wesome-problem">&nbsp;</div>
        <div className="logo-block" style={{ textAlign: 'center' }}>
          <a className="custom-logo-link" href="/" rel="home"><img alt="Lake House Printers &amp; Publishers" className="custom-logo" decoding="async" height="75" src="/wp-content/uploads/2024/04/cropped-logo-1-1.png" width="102" /></a>
          <br /><small className="logo-hd d-none d-lg-block" style={{ color: '#000' }}><strong>Lake House Printers and Publishers PLC</strong></small>
        </div>
        <small className="logo-hd d-lg-none w-100" style={{ color: '#000', textAlign: 'center', marginTop: '-20px' }}><strong>Lake House Printers and Publishers PLC</strong></small>
        <div className="right-block"><a href="mailto:info@lakehppl.com"><i className="fa fa-envelope" />info@lakehppl.com</a><br /><a href="https://wa.me/+94117683700"><i className="fa fa-whatsapp" style={{ fontSize: '17px' }} />+94 117 683 700</a></div>
      </div></div>
      <nav className="navbar navbar-expand-lg navbar-light header-navigation stricky"><div className="container clearfix">
        <div className="logo-box clearfix"><button type="button" className="menu-toggler" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}><span className={menuOpen ? 'fa fa-times' : 'fa fa-bars'} /></button></div>
        <div className="main-navigation" id="main-nav-bar"><ul className="navigation-box" id="menu-primary-menu">
          <li><a href="/">Home</a></li>
          <li className={`menu-item-has-children${openSubmenus.divisions ? ' submenu-open' : ''}`}><a href="#">Divisions</a><button type="button" className="submenu-toggle" aria-label="Toggle Divisions submenu" aria-expanded={openSubmenus.divisions} onClick={() => toggleSubmenu('divisions')} /><ul className="sub-menu"><li><a href="/security-printing-division">Security Printing</a></li><li><a href="/lake-house-technologies-division">Lake House Technologies</a></li><li><a href="/lake-house-atlas-division">Lake House Atlas</a></li><li><a href="/new-atlas">New Atlas</a></li></ul></li>
          {/* <li className={`menu-item-has-children${openSubmenus.divisions ? ' submenu-open' : ''}`}><a href="#">Divisions</a><button type="button" className="submenu-toggle" aria-label="Toggle Divisions submenu" aria-expanded={openSubmenus.divisions} onClick={() => toggleSubmenu('divisions')} /><ul className="sub-menu"><li><a href="/security-printing-division">Security Printing</a></li><li><a href="/lake-house-technologies-division">Lake House Technologies</a></li><li><a href="/lake-house-atlas-division">Lake House Atlas</a></li></ul></li> */}
          <li><a href="/about-us">About Us</a></li><li><a href="/contact-us">Contact Us</a></li>
          <li className={`menu-item-has-children${openSubmenus.secretarial ? ' submenu-open' : ''}`}><a href="/company-secretarial">Company Secretarial</a><button type="button" className="submenu-toggle" aria-label="Toggle Company Secretarial submenu" aria-expanded={openSubmenus.secretarial} onClick={() => toggleSubmenu('secretarial')} /><ul className="sub-menu"><li><a href="/interim-accounts">Interim Accounts</a></li><li><a href="/annual-reports">Annual Reports</a></li><li><a href="/audit-committee">Audit Committee</a></li><li><a href="/related-party-transactions-committee">Related Party Transactions Committee</a></li><li><a href="/remuneration-committee">Remuneration Committee</a></li><li><a href="/nomination-and-governance-committee">Nomination and Governance Committee</a></li><li><a href="/general">General</a></li><li><a href="/policies-on-corporate-governance">Policies on Corporate Governance</a></li></ul></li>
        </ul></div><div className="right-side-box"><div className="header__social-block">&nbsp;</div></div>
      </div></nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <>
      <footer className="site-footer"><div className="elementor elementor-460" data-elementor-id="460" data-elementor-type="section"><section className="elementor-section elementor-top-section elementor-element elementor-element-a91eea8 footer-mdl elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="a91eea8"><div className="elementor-container elementor-column-gap-default">
        <div className="elementor-column elementor-col-33 elementor-top-column elementor-element"><div className="elementor-widget-wrap elementor-element-populated"><div className="elementor-widget-container"><h3>&nbsp;<span style={{ color: '#b0812c', fontFamily: 'inherit', fontSize: '1.75rem' }}>Address</span></h3><div className="footer-widget contact-widget"><p style={{ color: '#b0812c', fontSize: '16px', fontWeight: 600 }}>Lake House Printers &amp; Publishers PLC</p><p style={{ color: '#b0812c', fontSize: '16px', fontWeight: 600, marginTop: '5px' }}>41, W A D Ramanayake Mawatha,</p><p style={{ color: '#b0812c', fontSize: '16px', fontWeight: 600, marginTop: '5px' }}>Colombo 00200.</p></div></div></div></div>
        <div className="elementor-column elementor-col-33 elementor-top-column elementor-element"><div className="elementor-widget-wrap elementor-element-populated"><div className="elementor-widget-container"><h3 style={{ color: '#b0812c' }}>Inquiries</h3><div className="footer-widget contact-widget"><p /><p style={{ color: '#b0812c', fontSize: '16px', fontWeight: 600 }}><i className="fa fa-envelope" /> – <a href="mailto:info@lakehppl.com">info@lakehppl.com </a></p><p style={{ color: '#b0812c', fontSize: '16px', fontWeight: 600 }}><i className="fa fa-whatsapp" style={{ fontSize: '17px' }} /> – <a href="https://wa.me/+94117683700">+94 117 683 700</a></p></div></div></div></div>
        <div className="elementor-column elementor-col-33 elementor-top-column elementor-element"><div className="elementor-widget-wrap elementor-element-populated"><div className="elementor-widget-container"><div className="footer-widget d-none d-lg-block"><div className="widget-title"><h3 style={{ color: '#b0812c' }}>Explore</h3></div><ul className="link-list"><li><a href="/about-us">About Us</a></li><li><a href="/contact-us">Contact Us</a></li></ul></div></div></div></div>
      </div></section></div><div className="bottom-footer text-center"><div className="container"><div className="inner-container"><p>© All copyrights are reserved. 2019 <a href="http://smartdatasoft.com">Smartdatasoft</a>.</p></div></div></div></footer>
      <a className="scroll-to-target scroll-to-top" data-target="html" href="#"><i className="fa fa-angle-up" /></a>
    </>
  );
}
