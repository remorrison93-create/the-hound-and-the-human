# The Hound & The Human

Website for a custom dog portrait commission business. Plain HTML/CSS/JS —
no build step, no framework, so it deploys as-is on free static hosting.

## Pages

- `index.html` — homepage (hero, process, featured work, CTA)
- `gallery.html` — full portfolio with filtering and a lightbox
- `commission.html` — pricing + commission request form

## 1. Deploy for free with GitHub Pages

1. Push this repo to GitHub (already done if you're reading this on GitHub).
2. Go to **Settings → Pages**.
3. Under "Build and deployment", set **Source** to "Deploy from a branch".
4. Choose the `main` branch and `/ (root)` folder, then **Save**.
5. GitHub will give you a URL like `https://<username>.github.io/the-hound-and-the-human/` within a minute or two.

No cost, no server, no build step required.

## 2. Connect the commission form (Formspree — free tier)

The form in `commission.html` submits to [Formspree](https://formspree.io),
which emails you each submission without needing a backend server. The free
tier includes 50 submissions/month.

1. Create a free account at https://formspree.io.
2. Create a new form and copy its **form ID** (looks like `xzbqonvw`).
3. In `commission.html`, find:
   ```html
   <form id="commission-form" action="https://formspree.io/f/YOUR_FORM_ID" ...>
   ```
   Replace `YOUR_FORM_ID` with your real ID.
4. Confirm your email address with Formspree the first time a test submission comes in.

That's it — the form already handles file uploads (reference photos), a
hidden spam-trap field, and shows a success/error message via `js/main.js`
without leaving the page.

## 3. Personalize before launch

- **Images**: swap the placeholder illustrations in `assets/img/gallery-0*.svg`
  for real photos of your artwork. Just replace the files (keep the same
  names) or update the `src` attributes in `gallery.html` and `index.html`
  to point at your own `.jpg`/`.png` files.
- **Pricing**: update the numbers in the `pricing-grid` section of `commission.html`.
- **Contact email**: update `hello@houndandhuman.com` in the footer of each page.
- **Social links**: update the Instagram/Etsy URLs in the footer of each page.
- **Testimonial**: replace the placeholder quote on the homepage once you have a real one.
- **Favicon/brand mark**: `assets/img/mark.svg` is a simple placeholder logo — swap it for your own if you have a logo.

## Local preview

No build tools needed — just open `index.html` in a browser, or serve the
folder locally:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.
