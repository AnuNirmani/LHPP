# LHP React

React/Vite conversion of the supplied Lake House Printers & Publishers static HTML project.

## Requirements

- Node.js 20.19+ or 22.12+

## Run locally

```bash
npm install
npm run dev
```

Open the local URL shown by Vite (normally `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

## Structure

- `src/pages/` — one React component per original HTML page
- `src/content/` — preserved page markup imported by the React components
- `src/components/LegacyPage.jsx` — shared React rendering/runtime bridge
- `public/wp-content/`, `public/wp-includes/` — original styles, images, fonts, PDFs and vendor scripts
- `public/js/contact-form.js` — static contact-form validation/feedback

## Note about the contact form

The supplied source is a static export and has no WordPress backend. The contact form validates in the browser and shows a confirmation, but does not actually send email until you connect it to a backend/API endpoint.

## Routing

The project uses extensionless URLs such as `/about-us`, while still accepting the old `/about-us.html` URL when the host is configured with SPA fallback. Netlify `_redirects` and a Vercel rewrite are included.
