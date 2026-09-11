import LegacyPage from '../components/LegacyPage';
import html from '../content/about-us.html?raw';

export default function AboutUsPage() {
  return <LegacyPage html={html} title="About Us \u2013 Lake House Printers & Publishers" bodyClass="page-id-75" isContact={false} />;
}
