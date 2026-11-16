import { useEffect, useState } from 'react';
import './NewAtlasPage.css';

import ceylonDailyNewsCookery from '../assets/atlas/ceylon-daily-news-cookery.webp';
import communicationMedia1 from '../assets/atlas/communication-media-1.webp';
import communicationMedia2 from '../assets/atlas/communication-media-2.webp';
import constitutionalConversations from '../assets/atlas/constitutional-conversations.webp';
import essaysAdministrativeLaw from '../assets/atlas/essays-administrative-law.webp';
import introductionLegalSystem from '../assets/atlas/introduction-legal-system.webp';
import invitationToLaw from '../assets/atlas/invitation-to-law.webp';
import justiceAndJustices from '../assets/atlas/justice-and-justices.webp';
import lawMarriageRelationship from '../assets/atlas/law-marriage-relationship.webp';
import lawOfEvidence from '../assets/atlas/law-of-evidence.webp';
import practicalPhysics from '../assets/atlas/practical-physics.webp';
import unjustEnrichment from '../assets/atlas/unjust-enrichment.webp';
import westernMusic from '../assets/atlas/western-music.webp';

const books = [
  ['Law of Evidence in Sri Lanka', 'Prof. G. L. Peiris', lawOfEvidence, 'Legal'],
  ['Echoes of Divergence: Justice and Justices', 'Justice Dr. Sobhitha Rajakaruna', justiceAndJustices, 'Legal'],
  ['Constitutional Conversations', 'Dr. Jayampathy Wickramaratne', constitutionalConversations, 'Legal'],
  ['An Invitation to the Law', 'C. G. Weeramantry', invitationToLaw, 'Legal'],
  ['Essays on Administrative Law in Sri Lanka', 'G. L. Peiris', essaysAdministrativeLaw, 'Legal'],
  ['Law and the Marriage Relationship in Sri Lanka', 'Shirani Ponnambalam', lawMarriageRelationship, 'Legal'],
  ['An Introduction to the Legal System of Sri Lanka', 'L. J. M. Cooray', introductionLegalSystem, 'Legal'],
  ['Some Aspects of the Law of Unjust Enrichment', 'G. L. Peiris', unjustEnrichment, 'Legal'],
  ['ප්‍රායෝගික භෞතික විද්‍යාව', 'සී. දිසානායක', practicalPhysics, 'Educational'],
  ['සන්නිවේදනය හා මාධ්‍ය අධ්‍යයනය 1', 'චන්ද්‍ර මාරසිංහ', communicationMedia1, 'Educational'],
  ['සන්නිවේදනය හා මාධ්‍ය අධ්‍යයනය 2', 'චන්ද්‍ර මාරසිංහ', communicationMedia2, 'Educational'],
  ['Western Music Composers & Instruments', 'S. N. M. Bandara', westernMusic, 'Educational'],
  ['Ceylon Daily News Cookery Book', 'Ceylon Daily News', ceylonDailyNewsCookery, 'Other'],
];

const categories = ['All Books', 'Legal', 'Educational', 'Other'];

function Header() {
  return (
    <header className="site-header header-one header-style-two">
      <div className="top-bar"><div className="container">
        <div className="social-block social-font-wesome-problem">&nbsp;</div>
        <div className="logo-block" style={{ textAlign: 'center' }}>
          <a className="custom-logo-link" href="/" rel="home"><img alt="Lake House Printers &amp; Publishers" className="custom-logo" decoding="async" height="75" src="/wp-content/uploads/2024/04/cropped-logo-1-1.png" width="102" /></a>
          <br />
          <small className="logo-hd d-none d-lg-block" style={{ color: '#000' }}><strong>Lake House Printers and Publishers PLC</strong></small>
        </div>
        <small className="logo-hd d-lg-none w-100" style={{ color: '#000', textAlign: 'center', marginTop: '-20px' }}><strong>Lake House Printers and Publishers PLC</strong></small>
        <div className="right-block">
          <a href="mailto:info@lakehppl.com"><i className="fa fa-envelope" />info@lakehppl.com</a><br />
          <a href="https://wa.me/+94117683700"><i className="fa fa-whatsapp" style={{ color: '', fontSize: '17px' }} />+94 117 683 700</a>
        </div>
      </div></div>
      <nav className="navbar navbar-expand-lg navbar-light header-navigation stricky">
        <div className="container clearfix">
          <div className="logo-box clearfix"><button className="menu-toggler" data-target="#main-nav-bar" style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px', backgroundColor: '#fff', borderRadius: '5px', padding: '4px 7px', border: '1px solid #eeeeee' }}><span className="fa fa-bars" /></button></div>
          <div className="main-navigation" id="main-nav-bar">
            <ul className="navigation-box" id="menu-primary-menu">
              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-25"><a href="/">Home</a></li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children menu-item-1026"><a href="#">Divisions</a>
                <ul className="sub-menu">
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1029"><a href="/security-printing-division">Security Printing</a></li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1028"><a href="/lake-house-technologies-division">Lake House Technologies</a></li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1027"><a href="/lake-house-atlas-division">Lake House Atlas</a></li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item current_page_item menu-item-new-atlas"><a aria-current="page" href="/new-atlas">New Atlas</a></li>
                </ul>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-140"><a href="/about-us">About Us</a></li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-74"><a href="/contact-us">Contact Us</a></li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-1740"><a href="/company-secretarial">Company Secretarial</a>
                <ul className="sub-menu">
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1716"><a href="/interim-accounts">Interim Accounts</a></li><li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1714"><a href="/annual-reports">Annual Reports</a></li><li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1715"><a href="/audit-committee">Audit Committee</a></li><li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1718"><a href="/related-party-transactions-committee">Related Party Transactions Committee</a></li><li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1719"><a href="/remuneration-committee">Remuneration Committee</a></li><li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1717"><a href="/nomination-and-governance-committee">Nomination and Governance Committee</a></li><li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1720"><a href="/general">General</a></li><li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2212"><a href="/policies-on-corporate-governance">Policies on Corporate Governance</a></li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="right-side-box"><div className="header__social-block">&nbsp;</div></div>
        </div>
      </nav>
    </header>
  );
}

export default function NewAtlasPage() {
  const [category, setCategory] = useState('All Books');
  const [heroSlide, setHeroSlide] = useState(0);
  const [heroPaused, setHeroPaused] = useState(false);

  useEffect(() => {
    document.title = 'New Atlas – Lake House Printers & Publishers';
    document.body.className = 'page-id-870 new-atlas-body';
    window.scrollTo(0, 0);
    return () => { document.body.className = ''; };
  }, []);

  useEffect(() => {
    if (heroPaused) return undefined;
    const interval = window.setInterval(() => {
      setHeroSlide((current) => (current + 1) % 2);
    }, 5000);
    return () => window.clearInterval(interval);
  }, [heroPaused]);

  const visibleBooks = category === 'All Books'
    ? books
    : books.filter(([, , , bookCategory]) => bookCategory === category);

  return (
    <div className="new-atlas-page">
      <Header />
      <main>
        <section className="new-atlas-hero" aria-label="New Atlas introduction">
          <div className="new-atlas-hero__slides" aria-hidden="true">
            <div className={`new-atlas-hero__slide ${heroSlide === 0 ? 'is-active' : ''}`} style={{ backgroundImage: "url('/wp-content/uploads/2024/10/atlus.jpg')" }} />
            <div className={`new-atlas-hero__slide ${heroSlide === 1 ? 'is-active' : ''}`} style={{ backgroundImage: "url('/wp-content/uploads/2024/10/atlus-2.jpg')" }} />
          </div>
          <div className="new-atlas-hero__veil" />
          <div className="new-atlas-hero__content">
            <span className="new-atlas-eyebrow">Lake House Printers &amp; Publishers PLC</span>
            <h1>Publishing <em>Division</em></h1>
            <p>Keeping the tradition of reading alive through publications that inform, educate and endure.</p>
            <div className="new-atlas-hero__actions">
              <a className="new-atlas-button" href="#books">Explore Our Books <span>↗</span></a>
              <a className="new-atlas-button new-atlas-button--outline" href="#contact">Publishing Enquiries <span>→</span></a>
            </div>
          </div>
          <div className="new-atlas-hero__controls" role="group" aria-label="Hero slideshow controls">
            {[0, 1].map((slide) => (
              <button key={slide} type="button" className={`new-atlas-hero__dot ${heroSlide === slide ? 'is-active' : ''}`} onClick={() => setHeroSlide(slide)} aria-label={`View hero image ${slide + 1}`} aria-pressed={heroSlide === slide} />
            ))}
            <button type="button" className="new-atlas-hero__toggle" onClick={() => setHeroPaused((paused) => !paused)} aria-label={heroPaused ? 'Play slideshow' : 'Pause slideshow'} aria-pressed={heroPaused}>{heroPaused ? '▶' : 'Ⅱ'}</button>
          </div>
          <span className="new-atlas-hero__chapter">{String(heroSlide + 1).padStart(2, '0')} / 02</span>
        </section>

        <div className="new-atlas-scrollnav">
          <span>DISCOVER</span>
          <a href="#overview">Overview</a>
          <a href="#heritage">Our Legacy</a>
          <a href="#new-releases">New Publications</a>
          <a href="#books">Books</a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
        </div>

        <section className="new-atlas-section new-atlas-overview" id="overview">
          <div>
            <span className="new-atlas-index">01 / WHO WE ARE</span>
            <h2>A publishing partner for <em>generations of readers.</em></h2>
            <p className="new-atlas-overview__lead">The Publishing Division of Lake House Printers &amp; Publishers PLC focuses primarily on publishing legal, professional and educational books. Our aim is to keep the tradition of reading alive by producing high-quality publications that inform, educate and endure.</p>
          </div>
          <div className="new-atlas-overview__copy">
            <p>We seek to serve professionals, academics, students and readers with reliable and authoritative knowledge to help them excel in their respective fields. At the same time, we strive to provide authors with a publishing partner they can trust and rely upon.</p>
            <p>Our catalogue includes legal publications, professional and educational books, atlases, autobiographies, cookery books and other specialised titles.</p>
            <p>The Publishing Division has publishing agreements with distinguished legal scholars, academics, professionals and other authors.</p>
            <p>Our books are available through leading bookstores across Sri Lanka as well as through online book-selling platforms.</p>
            <div className="new-atlas-tags"><span>Legal Publications</span><span>Professional Books</span><span>Educational Titles</span><span>Atlases &amp; More</span></div>
          </div>
        </section>

        <section className="new-atlas-section new-atlas-heritage" id="heritage">
          <div className="new-atlas-section-head">
            <div>
              <span className="new-atlas-index">02 / OUR STORY</span>
              <h2>Our Legacy <em>&amp; History</em></h2>
            </div>
            <p>The publishing heritage of the Publishing Division of Lake House Printers &amp; Publishers PLC extends well beyond the establishment of its present Publishing Division.</p>
          </div>
          <div className="new-atlas-history">
            <div className="new-atlas-history__rail"><span>1945</span><span>2025</span></div>
            <div className="new-atlas-history__content">
              <article><span>Early legacy · 1945</span><h3>Rooted in Sri Lankan literature</h3><p>The late Mr. D. R. Wijewardene, the founder and Chairman of Associated Newspapers of Ceylon Limited, had a deep interest in preserving and promoting Sinhala literature. His commitment to publishing began well before the establishment of the Book Publishing Department in 1945 at Associated Newspapers of Ceylon Limited.</p></article>
              <article><span>The years that followed</span><h3>A landmark for generations of readers</h3><p>Following the acquisition of Associated Newspapers of Ceylon Limited by the Government, publishing operations continued under Lake House Investments Limited, a closely associated company of Lake House Printers &amp; Publishers PLC. Under the chairmanship of Mr. R. S. Wijewardene, the company maintained a highly successful publishing operation for several decades.</p><p>The renowned Lake House Book Shop, which served generations of readers and became a landmark destination for books in Sri Lanka, was also operated by Lake House Investments Limited.</p></article>
              <article><span>Stamford Lake · 2021</span><h3>A respected name in legal publishing</h3><p>In more recent years, Stamford Lake (Pvt) Limited, a well-known name in Sri Lanka&apos;s publishing industry, developed a strong reputation among legal professionals and scholars for its extensive range of legal and other publications. Stamford Lake was established as a Joint Venture between Lake House Printers &amp; Publishers PLC and Stamford Press Pvt. Ltd., Singapore. In 2021, Lake House Printers &amp; Publishers PLC divested its shareholding in Stamford Lake.</p></article>
              <article><span>August 2025</span><h3>The Publishing Division begins a new chapter</h3><p>Following the cessation of Stamford Lake&apos;s operations, the Publishing Division of Lake House Printers &amp; Publishers PLC was established in August 2025, with selected titles and stock taken over from Stamford Lake.</p></article>
              <article><span>More than five decades</span><h3>The iconic Lake House Atlas series</h3><p>Lake House Printers &amp; Publishers PLC has been publishing the iconic Lake House Atlas series in Sinhala, English and Tamil for more than five decades.</p></article>
            </div>
            <aside className="new-atlas-history__aside"><strong>1945</strong><b>A tradition of publishing</b><p>From early literary publishing to today&apos;s professional and educational titles.</p><hr /><strong>2025</strong><b>A new chapter</b><p>Formal establishment of the present Publishing Division.</p></aside>
          </div>
        </section>

        <section className="new-atlas-section new-atlas-releases" id="new-releases">
          <div className="new-atlas-section-head">
            <div><span className="new-atlas-index">03 / LATEST TITLES</span><h2>New <em>Publications</em></h2></div>
            <p>New publications by the Publishing Division of Lake House Printers &amp; Publishers PLC.</p>
          </div>
          <div className="new-atlas-release-grid">
            <div className="new-atlas-release-panel"><strong>AVAILABLE NOW</strong><ul><li>Law of Evidence in Sri Lanka (Updated and Revised Edition)<small>Prof. G. L. Peiris</small></li><li>Echoes of Divergence: Justice and Justices<small>Justice Dr. Sobhitha Rajakaruna</small></li><li>Constitutional Conversations<small>Dr. Jayampathy Wickramaratne</small></li><li>Marriage Law in Sri Lanka: A British Colonial Legacy<small>Prof. Sharya Scharenguivel</small></li><li>Subsidiary Legislation and the Legislative Sovereignty of the People of Sri Lanka<small>Deepthika Kulasena, PC</small></li></ul></div>
            <div className="new-atlas-release-panel new-atlas-release-panel--upcoming"><strong>FORTHCOMING PUBLICATIONS</strong><p>Titles to look forward to</p><ul><li>Law of Property – Volume I (Updated and Revised Edition)<small>Prof. G. L. Peiris</small></li><li>Offences under the Penal Code of Sri Lanka (Updated and Revised Edition)<small>Prof. G. L. Peiris</small></li></ul></div>
          </div>
        </section>

        <section className="new-atlas-section new-atlas-books" id="books">
          <div className="new-atlas-section-head">
            <div>
              <span className="new-atlas-index">04 / OUR BOOKS</span>
              <h2>Explore Our <em>Publications</em></h2>
            </div>
            <p>A selection of legal, professional, educational and other titles. Legal publications appear first.</p>
          </div>
          <div className="new-atlas-filters" role="group" aria-label="Filter books by category">
            {categories.map((item) => (
              <button key={item} type="button" className={category === item ? 'is-active' : ''} onClick={() => setCategory(item)}>
                {item} <span>{item === 'All Books' ? books.length : books.filter(([, , , bookCategory]) => bookCategory === item).length}</span>
              </button>
            ))}
          </div>
          <div className="new-atlas-book-grid">
            {visibleBooks.map(([title, author, image, bookCategory]) => (
              <article className="new-atlas-book" key={title}>
                <a className="new-atlas-book__image" href={image} target="_blank" rel="noreferrer" aria-label={`View the cover of ${title}`}>
                  <img src={image} alt={`Book cover of ${title}`} loading="lazy" />
                  <span>View cover ↗</span>
                </a>
                <div className="new-atlas-book__info">
                  <small>{bookCategory}</small>
                  <h3>{title}</h3>
                  <p>{author}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="new-atlas-section new-atlas-news" id="news">
          <div className="new-atlas-section-head">
            <div><span className="new-atlas-index">05 / IN THE PRESS</span><h2>Latest <em>News</em></h2></div>
            <p>Read news and coverage related to the Publishing Division and its authors.</p>
          </div>
          <div className="new-atlas-news-grid">
            <article><span>THE SUNDAY TIMES</span><h3>Constitutional Conversations by Dr. Jayampathy Wickramaratne Launched</h3><a href="https://www.sundaytimes.lk/260719/news/constitutional-conversations-a-book-by-jayampathi-wickramaratne-launched-649742.html" target="_blank" rel="noreferrer">Read article <b>↗</b></a></article>
            <article><span>DAILY NEWS</span><h3>Echoes of Divergence: Justice and Justices</h3><a href="https://dailynews.lk/2026/06/06/culture-art/1006419/echoes-of-divergence-justice-and-justices/" target="_blank" rel="noreferrer">Read article <b>↗</b></a></article>
            <article><span>THE ISLAND</span><h3>Prof. G. L. Peiris Trust for Legal Education and Research Launched</h3><a href="https://island.lk/prof-g-l-peiris-trust-for-legal-education-and-research-launched/" target="_blank" rel="noreferrer">Read article <b>↗</b></a></article>
          </div>
        </section>

        <section className="new-atlas-catalogue">
          <div><span className="new-atlas-eyebrow">Our Collection</span><h2>Find your next <em>great read.</em></h2><p>Explore our collection of legal, professional, educational and other publications.</p></div>
          <div className="new-atlas-catalogue__action"><strong>Catalogue coming soon</strong><small>Our catalogue will be added here once available.</small></div>
        </section>

        <section className="new-atlas-section new-atlas-contact-section" id="contact">
          <div className="new-atlas-section-head">
            <div><span className="new-atlas-index">06 / GET IN TOUCH</span><h2>Contact <em>Us</em></h2></div>
            <p>We welcome enquiries from authors, readers, booksellers and publishing partners.</p>
          </div>
          <div className="new-atlas-contact-grid">
            <article><i>✦</i><span>FOR AUTHORS &amp; PUBLISHERS</span><h3>Publishing Enquiries and New Publications</h3><p>For publishing enquiries, manuscript submissions and proposals for new publications:</p><strong>Mr. Tharaka Randeniya</strong><small>Head of Publishing Division<br />Lake House Printers &amp; Publishers PLC</small><a href="mailto:tharaka@lakehppl.com">tharaka@lakehppl.com</a><b>011 768 3700 · Ext. 160</b></article>
            <article><i>✦</i><span>FOR ORDERS &amp; DISTRIBUTION</span><h3>Sales Enquiries</h3><p>For sales, distribution and marketing enquiries:</p><strong>Mr. Janaka Wickramasinghe</strong><small>Sales and Marketing Manager<br />Lake House Printers &amp; Publishers PLC</small><a href="mailto:janaka@lakehppl.com">janaka@lakehppl.com</a><b>011 768 3700 · Ext. 146</b></article>
          </div>
        </section>

        <section className="new-atlas-gallery">
          <div className="new-atlas-gallery__head"><div><span className="new-atlas-index">INSIDE LAKE HOUSE</span><h2>Our publishing world</h2></div><span>Continuing a tradition of knowledge</span></div>
          <div className="new-atlas-gallery__grid"><img src="/wp-content/uploads/2024/10/at-1.jpg" alt="Student studying an atlas" /><div><img src="/wp-content/uploads/2024/10/at-2.jpg" alt="Atlas pages and illustrations" /><img src="/wp-content/uploads/2024/10/at-4.jpg" alt="Lake House Atlas covers" /></div></div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="elementor elementor-460" data-elementor-id="460" data-elementor-type="section">
          <section className="elementor-section elementor-top-section elementor-element elementor-element-a91eea8 footer-mdl elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-element_type="section" data-id="a91eea8" data-settings={{ background_background: 'classic' }}>
            <div className="elementor-container elementor-column-gap-default">
              <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-1659e22" data-element_type="column" data-id="elementor-element-1659e22">
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-ffb28e4 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="ffb28e4" data-widget_type="text-editor.default">
                    <div className="elementor-widget-container">
                      <h3>&nbsp;<span style={{ color: '#b0812c', fontFamily: 'inherit', fontSize: '1.75rem' }}>Address</span></h3>
                      <div className="footer-widget contact-widget">
                        <p style={{ color: '#b0812c', fontSize: '16px', fontWeight: 600 }}>Lake House Printers &amp; Publishers PLC</p>
                        <p style={{ color: '#b0812c', fontSize: '16px', fontWeight: 600, marginTop: '5px' }}>41, W A D Ramanayake Mawatha,</p>
                        <p style={{ color: '#b0812c', fontSize: '16px', fontWeight: 600, marginTop: '5px' }}>Colombo 00200.</p>
                      </div>
                      <div className="notranslate" style={{ all: 'initial' }} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-6357f76" data-element_type="column" data-id="elementor-element-6357f76">
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-ab61739 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="ab61739" data-widget_type="text-editor.default">
                    <div className="elementor-widget-container">
                      <h3 style={{ color: '#b0812c' }}>Inquiries</h3>
                      <div className="footer-widget contact-widget">
                        <p />
                        <p style={{ color: '#b0812c', fontSize: '16px', fontWeight: 600 }}><i className="fa fa-envelope" /> – <a href="mailto:info@lakehppl.com" style={{ color: '#b0812c' }}>info@lakehppl.com </a></p>
                        <p style={{ color: '#b0812c', fontSize: '16px', fontWeight: 600 }}><i className="fa fa-whatsapp" style={{ fontSize: '17px' }} /> <a href="https://wa.me/+94117683700" rel="noopener" style={{ color: '#b0812c', fontSize: '16px', fontWeight: 600 }}>– </a><a href="https://wa.me/+94117683700">+94 117 683 700</a></p>
                      </div>
                      <div className="notranslate" style={{ all: 'initial' }} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-969749c" data-element_type="column" data-id="elementor-element-969749c">
                <div className="elementor-widget-wrap elementor-element-populated">
                  <div className="elementor-element elementor-element-b39b436 elementor-widget elementor-widget-text-editor" data-element_type="widget" data-id="b39b436" data-widget_type="text-editor.default">
                    <div className="elementor-widget-container">
                      <div className="footer-widget d-none d-lg-block"><div className="widget-title"><h3 style={{ color: '#b0812c' }}>Explore</h3></div><ul className="link-list"><li><a href="/about-us" style={{ color: '#b0812c' }}>About Us</a></li><li><a href="/contact-us" style={{ color: '#b0812c' }}>Contact Us</a></li></ul></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="bottom-footer text-center"><div className="container"><div className="inner-container"><p>© All copyrights are reserved. 2019 <a href="http://smartdatasoft.com">Smartdatasoft</a>.</p></div></div></div>
      </footer>
      <a className="scroll-to-target scroll-to-top" data-target="html" href="#"><i className="fa fa-angle-up" /></a>
    </div>
  );
}
