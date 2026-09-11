import LegacyPage from '../components/LegacyPage';
import html from '../content/contact-us.html?raw';

export default function ContactUsPage() {
  return <LegacyPage html={html} title="Contact Us \u2013 Lake House Printers & Publishers" bodyClass="page-id-56" isContact={true} />;
}
