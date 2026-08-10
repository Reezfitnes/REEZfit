# REEZ Fitness Center — Website

A 6-page premium gym website: Home, Classes, Personal Training, Membership,
About Us, Contact. Pure HTML/CSS/JS — no build step, no framework required.

## File structure

```
reez-fitness/
├── index.html              Home
├── classes.html             Class schedule
├── personal-training.html   Coaches + PT packages
├── membership.html          Pricing
├── about.html                Mission / philosophy
├── contact.html              Contact form + map
├── css/style.css             All styling (one file, shared by every page)
├── js/main.js                Nav menu, scroll reveal, counters, class filter, form
└── images/                   Put your real photos here
```

## 1. Add your logo

Every page currently shows a text wordmark: `REEZ.` (the dot is yellow).
To swap in your real logo image, open `css/style.css` is not needed — just
edit the `.logo` link in each page's `<header>`, e.g.:

```html
<a href="index.html" class="logo">
  <img src="images/logo.png" alt="Reez Fitness Center" style="height:38px;">
</a>
```
Do this in the header of all 6 pages, plus the footer (`.footer-brand`).

## 2. Replace image placeholders

Every photo spot is a dashed yellow-on-charcoal box labeled with what to put
there and the recommended pixel size (e.g. "Hero Image — 1000×1250px"). To
swap one in:

1. Drop your photo into the `images/` folder (e.g. `images/hero.jpg`).
2. Find the matching `<div class="img-placeholder">...</div>` block in the
   page's HTML.
3. Replace the whole div with:
   ```html
   <img src="images/hero.jpg" alt="Describe the photo" style="width:100%;height:100%;object-fit:cover;">
   ```
   The surrounding container already has the right aspect ratio, so the
   image will crop and fit automatically.

Photos you'll need: hero shot, gym interior, 6 class photos, 3 coach
photos, personal-training action shot, 6 Instagram-grid images.

## 3. Update real contact details

Search each HTML file for these placeholders and replace them:
- `+973 0000 0000` — your real phone number (appears in `tel:` and `wa.me` links)
- `97300000000` — same number, digits-only, used in every WhatsApp link
- `Bahrain — [Full street address placeholder]` — your real address
- `@reezfitnesscenter` / Instagram `#` links — your real Instagram URL

## 4. Add your Google Maps embed

In `index.html` and `contact.html`, find `<div class="map-placeholder">`
and replace it with your embed code from Google Maps ("Share" → "Embed a
map"):
```html
<iframe src="YOUR_GOOGLE_MAPS_EMBED_URL" width="100%" height="100%" style="border:0;" loading="lazy"></iframe>
```

## 5. Connect the contact form

The form on `contact.html` currently shows a confirmation message but
doesn't send anywhere. To make it functional without a backend, the
easiest options are:
- **Formspree** (formspree.io) — free tier, just change the `<form>` tag's
  action to your Formspree endpoint and set `method="POST"`.
- **Netlify Forms** — if you host on Netlify, add `data-netlify="true"` to
  the `<form>` tag and it works automatically.

## 6. Publish the site

Because this is a static site (no server required), the simplest free
options are:
- **Netlify** — drag the whole `reez-fitness` folder onto app.netlify.com/drop
- **Vercel** — `vercel deploy` from inside the folder, or connect a GitHub repo
- **GitHub Pages** — push the folder to a GitHub repo and enable Pages in
  the repo settings

Any of these will give you a live URL in a few minutes, and you can later
connect your own domain (e.g. reezfitness.bh) from that host's dashboard.

## Notes

- Fonts (Anton, Oswald, Inter) load from Google Fonts via a `<link>` tag in
  each page's `<head>` — no download needed, they'll load automatically
  once the site is live and has internet access.
- The site is fully responsive and includes a mobile hamburger menu, a
  floating WhatsApp button on every page, scroll-reveal animations, and a
  filterable class list on the Classes page.
