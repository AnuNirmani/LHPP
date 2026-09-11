import LegacyPage from '../components/LegacyPage';
import html from '../content/index.html?raw';

export default function HomePage() {
  return <LegacyPage html={html} title="Lake House Printers & Publishers \u2013 Lake House Printers & Publishers" bodyClass="page-id-716 home" isContact={false} />;
}
