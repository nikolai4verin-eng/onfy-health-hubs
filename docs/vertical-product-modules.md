# Shared product modules for Health Hub verticals

All current and future vertical pages use the same product-module contract for the two horizontal commerce rails:

- Add `product-module` to the section containing the bestseller rail.
- Add `product-module` to the section containing the curated sets rail.
- Keep rail IDs `popRail` and `setRail` for the shared scrolling and filtering behaviour.
- Set cards use `pcard wide`, a `pwell lav` media area, `pcombo` for the Kombi label, and keep all product information inside the tinted card.
- Legal text uses `product-module-note`.

Responsive sizing, typography, chip scrolling, product-image scale, set-card surface, spacing and pricing styles live in `styles/vh.css`. Vertical pages should supply only their own copy, products, images and symptom filters.
