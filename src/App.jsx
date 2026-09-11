import AboutUsPage from './pages/AboutUsPage.jsx';
import AnnualReportsPage from './pages/AnnualReportsPage.jsx';
import AuditCommitteePage from './pages/AuditCommitteePage.jsx';
import CompanySecretarialPage from './pages/CompanySecretarialPage.jsx';
import ContactUsPage from './pages/ContactUsPage.jsx';
import GeneralPage from './pages/GeneralPage.jsx';
import HomePage from './pages/HomePage.jsx';
import InterimAccountsPage from './pages/InterimAccountsPage.jsx';
import LakeHouseAtlasDivisionPage from './pages/LakeHouseAtlasDivisionPage.jsx';
import LakeHouseTechnologiesDivisionPage from './pages/LakeHouseTechnologiesDivisionPage.jsx';
import NominationAndGovernanceCommitteePage from './pages/NominationAndGovernanceCommitteePage.jsx';
import PoliciesOnCorporateGovernancePage from './pages/PoliciesOnCorporateGovernancePage.jsx';
import RelatedPartyTransactionsCommitteePage from './pages/RelatedPartyTransactionsCommitteePage.jsx';
import RemunerationCommitteePage from './pages/RemunerationCommitteePage.jsx';
import SecurityPrintingDivisionPage from './pages/SecurityPrintingDivisionPage.jsx';

const routes = {
  "/about-us": AboutUsPage,
  "/about-us.html": AboutUsPage,
  "/annual-reports": AnnualReportsPage,
  "/annual-reports.html": AnnualReportsPage,
  "/audit-committee": AuditCommitteePage,
  "/audit-committee.html": AuditCommitteePage,
  "/company-secretarial": CompanySecretarialPage,
  "/company-secretarial.html": CompanySecretarialPage,
  "/contact-us": ContactUsPage,
  "/contact-us.html": ContactUsPage,
  "/general": GeneralPage,
  "/general.html": GeneralPage,
  "/": HomePage,
  "/interim-accounts": InterimAccountsPage,
  "/interim-accounts.html": InterimAccountsPage,
  "/lake-house-atlas-division": LakeHouseAtlasDivisionPage,
  "/lake-house-atlas-division.html": LakeHouseAtlasDivisionPage,
  "/lake-house-technologies-division": LakeHouseTechnologiesDivisionPage,
  "/lake-house-technologies-division.html": LakeHouseTechnologiesDivisionPage,
  "/nomination-and-governance-committee": NominationAndGovernanceCommitteePage,
  "/nomination-and-governance-committee.html": NominationAndGovernanceCommitteePage,
  "/policies-on-corporate-governance": PoliciesOnCorporateGovernancePage,
  "/policies-on-corporate-governance.html": PoliciesOnCorporateGovernancePage,
  "/related-party-transactions-committee": RelatedPartyTransactionsCommitteePage,
  "/related-party-transactions-committee.html": RelatedPartyTransactionsCommitteePage,
  "/remuneration-committee": RemunerationCommitteePage,
  "/remuneration-committee.html": RemunerationCommitteePage,
  "/security-printing-division": SecurityPrintingDivisionPage,
  "/security-printing-division.html": SecurityPrintingDivisionPage,
};

function normalizePath(pathname) {
  if (pathname === '/index.html') return '/';
  if (pathname.length > 1 && pathname.endsWith('/')) return pathname.slice(0, -1);
  return pathname;
}

function NotFound() {
  return (
    <main style={{ padding: '64px 24px', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
      <h1>Page not found</h1>
      <p>The page you requested is not part of this site.</p>
      <a href="/">Go to Home</a>
    </main>
  );
}

export default function App() {
  const path = normalizePath(window.location.pathname);
  const Page = routes[path] || NotFound;
  return <Page />;
}
