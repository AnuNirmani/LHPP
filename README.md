# Lake House Printers & Publishers — React/Vite Website

Corporate website for **Lake House Printers & Publishers PLC**, built as a React + Vite SPA. The project is a conversion of the original static WordPress export into a maintainable React application while preserving all existing styles, assets, and markup.

---

## Table of Contents

- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [Pages & Routes](#pages--routes)
- [Components](#components)
- [API Integration](#api-integration)
- [Deployment](#deployment)
- [Notes](#notes)

---

## Tech Stack

| Layer      | Technology                           |
|------------|--------------------------------------|
| UI Library | React (latest)                       |
| Build Tool | Vite                                 |
| Routing    | Custom hash-free client-side router  |
| Styling    | Preserved WordPress CSS + custom CSS |
| Linting    | oxlint                               |
| Hosting    | Vercel / Netlify                     |

---

## Prerequisites

- **Node.js** 20.19+ or 22.12+
- **npm** (bundled with Node.js)
- A running **Laravel backend** (for the dynamic downloads/posts API — see [API Integration](#api-integration))

---

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Configure environment variables
#    Edit .env or copy the example below
# 3. Start the development server
npm run dev
```

Open the local URL shown by Vite — typically `http://localhost:5173`.

---

## Environment Variables

Create a `.env` file in the project root (already listed in `.gitignore`):

```env
# Base URL of your Laravel backend (no trailing slash)
VITE_API_BASE_URL=http://127.0.0.1:8000
```

| Variable            | Description                                          | Default                 |
|---------------------|------------------------------------------------------|-------------------------|
| `VITE_API_BASE_URL` | Base URL of the Laravel API used for post downloads  | `http://127.0.0.1:8000` |

> **Note:** All Vite environment variables exposed to the browser must be prefixed with `VITE_`.

---

## Project Structure

```
LHPP/
├── public/
│   ├── _redirects              # Netlify SPA fallback rule
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── favicon.png / favicon.svg
│   ├── css/                    # Global CSS bundles (preserved from WP export)
│   ├── js/
│   │   └── contact-form.js     # Client-side contact form validation
│   ├── wp-content/             # Original WP uploads: images, fonts, PDFs
│   └── wp-includes/            # Original WP vendor scripts & styles
│
├── src/
│   ├── api/
│   │   └── postsApi.js         # Fetch helpers for the Laravel posts API
│   ├── assets/                 # Vite-managed static assets (imported in JS)
│   ├── components/
│   │   ├── BannerSlider.jsx    # Animated hero image carousel
│   │   ├── BannerSlider.css    # Styles for the banner slider
│   │   ├── CategoryDownloadsPage.jsx # Reusable template for download pages
│   │   ├── LegacyPage.jsx      # Bridge: renders preserved WP HTML markup
│   │   └── PostDownloadList.jsx # Dynamic post/download card list
│   ├── pages/                  # One component per site page (see Routes table)
│   ├── App.jsx                 # Client-side router + route map
│   ├── App.css                 # App-level styles
│   ├── index.css               # Global CSS entry point
│   └── main.jsx                # React DOM entry point
│
├── index.html                  # Vite HTML entry point
├── vite.config.js              # Vite configuration
├── vercel.json                 # Vercel SPA rewrite rule
├── .env                        # Local environment variables (git-ignored)
└── package.json
```

---

## Pages & Routes

The app uses a lightweight custom router in `src/App.jsx`. Each URL maps to a **lazy-loaded** page component. Both clean extensionless URLs and legacy `.html` URLs are supported simultaneously.

| URL                                       | Page Component                              |
|-------------------------------------------|---------------------------------------------|
| `/`                                       | `HomePage`                                  |
| `/about-us`                               | `AboutUsPage`                               |
| `/annual-reports`                         | `AnnualReportsPage`                         |
| `/audit-committee`                        | `AuditCommitteePage`                        |
| `/company-secretarial`                    | `CompanySecretarialPage`                    |
| `/contact-us`                             | `ContactUsPage`                             |
| `/general`                                | `GeneralPage`                               |
| `/interim-accounts`                       | `InterimAccountsPage`                       |
| `/lake-house-atlas-division`              | `LakeHouseAtlasDivisionPage`                |
| `/lake-house-technologies-division`       | `LakeHouseTechnologiesDivisionPage`         |
| `/nomination-and-governance-committee`    | `NominationAndGovernanceCommitteePage`      |
| `/policies-on-corporate-governance`       | `PoliciesOnCorporateGovernancePage`         |
| `/related-party-transactions-committee`   | `RelatedPartyTransactionsCommitteePage`     |
| `/remuneration-committee`                 | `RemunerationCommitteePage`                 |
| `/security-printing-division`             | `SecurityPrintingDivisionPage`              |

> All `.html` equivalents (e.g. `/about-us.html`) resolve to the same component. An unknown path renders a built-in 404 page.

---

## Components

### `BannerSlider`
Auto-advancing hero image carousel rendered on the Home page.

- 4 configurable slides served from `public/wp-content/uploads/`
- Directional enter/exit CSS animations (slides move up or down)
- Navigation dots and prev/next arrow buttons
- Auto-advances every ~4.8 s; timer resets on manual navigation

### `LegacyPage`
Thin bridge component that injects preserved WordPress HTML markup into the React tree. Most page components delegate their rendering here to minimise migration effort.

### `PostDownloadList`
Fetches published posts from the Laravel backend for a given `categoryTypeId` and renders them dynamically.

| Prop             | Type     | Default      | Description                                                       |
|------------------|----------|--------------|-------------------------------------------------------------------|
| `categoryTypeId` | `number` | *(required)* | ID used to query the API (`/api/posts?category_type_id=…`)        |
| `variant`        | `string` | `'cards'`    | `'cards'` — image + download card layout; `'simple'` — link list |

Renders nothing while loading, on error, or when the response is empty.

### `CategoryDownloadsPage`
Convenience wrapper that combines a static page header section with a `PostDownloadList`. Used as a template for download-heavy pages such as Annual Reports and Interim Accounts.

---

## API Integration

Dynamic downloadable content is served by a **Laravel backend**.

**Endpoint:** `GET /api/posts?category_type_id={id}`

**Expected response shape:**
```json
[
  {
    "post_id": 1,
    "title": "Annual Report 2024",
    "photo": "https://example.com/cover.jpg",
    "pdf":   "https://example.com/annual-report-2024.pdf"
  }
]
```

The `photo` or `image` field is used as the card thumbnail; `pdf` becomes the download link. The API base URL is set via `VITE_API_BASE_URL`. See `src/api/postsApi.js` for the full fetch implementation.

---

## Deployment

### Vercel (recommended)

`vercel.json` configures a catch-all rewrite so every path is served by `index.html` (required for the client-side router):

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
}
```

Deploy via the Vercel CLI or by connecting the repository on [vercel.com](https://vercel.com). Set `VITE_API_BASE_URL` in the Vercel project's environment variable settings.

```bash
# Verify the production build locally before deploying
npm run build
npm run preview
```

### Netlify

`public/_redirects` is included and handles SPA fallback automatically. Add `VITE_API_BASE_URL` to the Netlify site's environment variables.

### Other Hosts

Configure your web server to serve `index.html` for all non-asset 404 responses (the "try_files" / SPA fallback pattern).

---

## Notes

- **Contact Form:** Client-side validation is implemented in `public/js/contact-form.js`. The form shows a confirmation message in the browser but **does not send email**. Connect it to a server-side handler (e.g. a Laravel mail route or a service like Formspree) to enable real submissions.
- **WordPress Assets:** Styles, images, fonts, and vendor scripts from the original WordPress export live under `public/wp-content/` and `public/wp-includes/`. They are served as plain static files and referenced directly by the legacy page markup.
- **`.env` is git-ignored.** Never commit the `.env` file or any secrets to source control. Use your host's environment variable configuration for production values.

