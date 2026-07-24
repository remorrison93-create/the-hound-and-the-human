# The Hound & The Human

Website for a custom dog portrait commission business. Plain HTML/CSS/JS —
no build step, no framework, so it deploys as-is on free static hosting.

## Pages

- `index.html` — homepage (hero, process, featured work, CTA)
- `gallery.html` — full portfolio with two tabs, filtering, and a lightbox:
  - **Dog Portraits** (`assets/img/gallery/dogs/`) — filterable by Solo Portraits / Human & Hound
  - **Other Artwork** (`assets/img/gallery/other/`) — fan art and original characters, kept separate so it doesn't get mixed in with commission samples
- `commission.html` — pricing + commission request form

## 1. Deploy for free with GitHub Pages

1. Push this repo to GitHub (already done if you're reading this on GitHub).
2. Go to **Settings → Pages**.
3. Under "Build and deployment", set **Source** to "Deploy from a branch".
4. Choose the `main` branch and `/ (root)` folder, then **Save**.
5. GitHub will give you a URL like `https://<username>.github.io/the-hound-and-the-human/` within a minute or two.

No cost, no server, no build step required.

## 2. Commission form (Formspree — free tier)

The form in `commission.html` already submits to your Formspree endpoint
(`https://formspree.io/f/xykrnryv`), which emails you each submission
without needing a backend server. The free tier includes 50 submissions/month.

Submission happens via `fetch()` in `js/main.js` (see the `#commission-form`
handler) so the page never reloads — it shows an inline success or error
message instead. Confirm your email address with Formspree the first time a
real submission comes in (their first-submission verification step).

If you ever need to point the form at a different Formspree form, just
update the `action` URL on the `<form id="commission-form">` element in
`commission.html`.

That's it — the form has a hidden spam-trap field and shows a success/error
message via `js/main.js` without leaving the page.

Note: the form doesn't accept file uploads (Formspree's free tier rejects
submissions with an attached file — you'll only get a generic "something went
wrong" error). Reference photos are collected afterward by emailing the
client directly, per the note above the submit button.

## 3. Personalize before launch

- **Images**: add new pieces by dropping a file into `assets/img/gallery/dogs/`
  or `assets/img/gallery/other/` and adding a matching `<figure class="gallery-card">`
  block in `gallery.html` (copy an existing one as a template). Dog portraits
  use `data-category="solo"` or `data-category="duo"` to work with the filter
  buttons.
- **Pricing**: update the numbers in the `pricing-grid` section of `commission.html`.
- **Contact email**: update `residentsmol@gmail.com` in the footer of each page.
- **Social links**: update the Instagram/Etsy URLs in the footer of each page.
- **Testimonial**: replace the placeholder quote on the homepage once you have a real one.
- **Favicon/brand mark**: `assets/img/logo.png` is used as both the nav/footer logo and the favicon. To update it, replace the file (keep the name, or update the `href`/`src` references in each page's `<head>` and header/footer).

## Local preview

No build tools needed — just open `index.html` in a browser, or serve the
folder locally:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.
