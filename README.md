# Anvesha Jewels — website

A standalone static build of the approved Figma designs. Nothing here is shared with or linked to
any earlier version of the site; this folder is self-contained.

## Run it

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>. Any static host will serve it as-is (no build step).

The home page's Instagram reels come from Cloudflare R2, kept up to date by a GitHub Action:
see [docs/instagram-reels.md](docs/instagram-reels.md).

## Pages

| File | What it is |
| --- | --- |
| `index.html` | Home — campaign carousel, about, categories, collection, Instagram, client words, inquiry, contact |
| `rings.html` `bracelets.html` `necklaces.html` `earrings.html` | Category listings with filters and sort |
| `product.html?id=AJ-R001` | Product detail; `id` is any jewellery code from `assets/js/data.js` |
| `collections.html` | The collection and the Solene selection |
| `about.html` | Our story, jewellery care, sizing guidance, privacy, terms |
| `contact.html` | Inquiry form and contact routes |
| `testimonials.html` | Stories — every testimonial in a masonry grid, filterable by category (linked from the footer and the menu drawer) |

The header, mega menus, drawer, footer, CTA band and quote modal are injected by
`assets/js/site.js`, so every page stays in step from one source.

## Home · categories
The line comes first ("A ring ▢ for a promise…"); its four small photos then glide into the category boxes.
It follows the scroll, so it plays again when scrolling up or down (`assets/js/categories.js`).

## Testimonials (client words)

Edit them in `assets/js/data.js` → `window.TESTIMONIALS`. Each entry is
`{ name, city, quote, product, category }`:

- `name` — first name only; `city` — shown beside it in small capitals
- `quote` — plain text, without quotation marks (they are added)
- `product` — a jewellery code from `AJ.products` (e.g. `AJ-R001`); it gives the link to the piece and its thumbnail
- `category` — `rings`, `bracelets`, `necklaces` or `earrings`; drives the filter on the Stories page

**The eight entries there now are placeholders** (each marked `// PLACEHOLDER – replace with real
client words`). Replace them with real, approved client words before the site goes live.

On the home page the entries are split across two rows that drift slowly in opposite directions
(`assets/js/testimonials.js`). The drift pauses on hover, focus or touch, quickens a little while
the page scrolls, and loops seamlessly. On phones it becomes one swipeable row; with reduced motion
it is a still row that scrolls sideways. The Stories page lists them all — no HTML changes needed
when entries are added or removed.

## Type and colour

Two faces only, both from Google Fonts:

- **Cormorant Garamond** — all display and headings
- **Nunito Sans** — everything else

One type scale in `assets/css/site.css` (`:root`): labels 10.5px, small 12.5px, body 14px, lede 15px,
italic serif lines one size, one letter-spacing for every small-capital style, and three weights
(300 reading, 400 headings, 500 labels). No inline font sizes in the pages.

## White theme

Every page, section and panel is white (`#FFFFFF`) except the nav row, which stays an emerald band
with white links and a gold underline. White: header, collection block,
inquiry, CTA band, testimonials, footer, drawer, mega menus and modals. Sections are separated by
space, and where needed by a single 1px hairline in `var(--line)`. Cards and form fields are white
with a 1px `var(--line)` border — no shadows, no rounded corners. The overlays behind the drawer,
quote modal and lightbox are translucent white.

The brand colours are accents only (`assets/css/site.css`, `:root`):

- **Emerald `#184736`** — links, small-capital labels, active states, the primary button
  (the only filled block on the site), and the 1px outline of secondary buttons
- **Gold `#C8AE6E` / `--gold-deep`** — thin rules, italic serif lines, hover underlines
- **Ink `#141414`** headings, **`--body`** text, **`--muted`** meta

`--cream` and `--sage` remain in `:root` but are no longer used as fills. Both logos (header and
footer) are the emerald script logo (`assets/logo.png`); `assets/logo-white.png` and
`assets/logo-dark.png` are kept in case they are wanted again.

## Spacing

One rhythm, defined in `:root` and used everywhere:

| Token | Value | Use |
| --- | --- | --- |
| `--space-section` | `clamp(72px, 9vw, 128px)` (64px on phones) | above and below every section |
| `--space-head` | `clamp(28px, 3.4vw, 48px)` | section heading → content |
| `--space-stack-s` / `-m` / `-l` | 16 / 24 / 32px | inside blocks |
| `--space-grid` | `clamp(16px, 2vw, 28px)` | gaps in product, category and card grids |

`--gut` and `--maxw` are unchanged.

- Every section is `<section class="sec">`. Back-to-back sections share one `--space-section` gap
  rather than doubling it; add `sec--rule` to put a hairline in the middle of that gap.
- Inner pages open with `<div class="wrap-wide page-top">` (breadcrumb + page hero), which is
  followed by the same gap.
- Section headings use `.sec-head`: centred eyebrow, serif heading, one short line of body text
  (max 60 characters a line), then `--space-head`. A trailing link or button goes in `.sec-foot`.
- There are no inline styles in the pages.

## Catalogue

`assets/js/data.js` holds all 24 pieces plus the category copy, metal/karat/diamond options and
ring sizes. Add or edit a product there and it appears on its listing page, in the filters and on
its own product page — no HTML changes needed.

## Two things still to supply

1. **WhatsApp number** — `AJ.whatsapp` in `assets/js/data.js` is a placeholder
   (`919999999999`). The "Request a quote" flow builds a `wa.me` link with the piece, its code and
   the chosen metal, karat, diamond and size.
2. **Catalogue PDF** — `AJ.catalogue` is `"#"`. Until a file is set, "Download catalogue" shows a
   note instead of downloading. Point it at the PDF to switch it on.

## Photography

Product and campaign imagery was cut from the approved Figma frames, so it matches the designs
exactly but is only as large as those frames were (listing tiles 416×328, product main 704×584).
Swap in the original high-resolution files over the same names in `assets/` when they are
available — nothing else needs to change.

`assets/hero-1.webp` and `assets/hero-2.webp` needed extra work: both Figma frames had the hero
copy baked into the photograph, which collided with the live text. The left of each frame has been
rebuilt as the plain lit wall it is, so the headline sits on clean background. Original
photographs without the copy burned in would be better still.

The hero runs two slides and advances on its own every 6.5s, scrolling sideways. There are no
arrows — only the `01 / 02` progress indicator. Add another `.hero-slide` block in `index.html`
and it joins the rotation automatically.

Note `Hero2.png`–`Hero4.png` in the Figma folder are alternative full-page design concepts, not
photographs; the second slide comes from `Campaign carousel · Alternate slide.png`.

## Inquiry form

The form validates in the browser and shows a confirmation, but does not post anywhere yet. Wire
the `submit` handler in `assets/js/site.js` to whichever endpoint or inbox the client prefers.
