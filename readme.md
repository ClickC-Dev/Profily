# ProFily Design System

**ProFily — Contabilidade Digital** is a high-end online accounting ("contabilidade online") brand for Brazilian businesses (MEI, Simples Nacional, small/medium companies). This design system was built from a single asset provided by the user: the brand logo (`uploads/Imagem do WhatsApp de 2025-09-04 à(s) 19.01.09_bd565b56 profily.jpg (1).jpeg`, copied to `assets/logo-source.jpeg`). No codebase, Figma file, or additional brand materials were supplied — everything below (tokens, components, UI kits) was designed from scratch to fit the logo's visual language, following standard high-quality SaaS/fintech conventions for an "online accounting" product. Treat this as a strong starting point, not a mined-from-source system: the user should review and correct anything that doesn't match how ProFily actually looks and speaks.

## Sources
- Logo image (only material provided): `assets/logo-source.jpeg`, cropped into `assets/profily-logo-full.png` (full lockup) and `assets/profily-mark.png` (icon mark alone).
- No GitHub repo, Figma file, or slide deck was attached.

## Index
- `styles.css` — root stylesheet, imports everything under `tokens/`.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css` (spacing, radius, shadow, motion), `base.css` (resets/link colors).
- `components/core/` — Button, IconButton, Card, Badge, Tag.
- `components/forms/` — Input, Select, Checkbox, Radio, Switch.
- `components/navigation/` — Tabs.
- `components/feedback/` — Dialog, Toast, Tooltip.
- `ui_kits/dashboard/` — client accounting portal (login, overview, documents, taxes, chat, settings).
- `ui_kits/marketing-site/` — public landing page (header, hero, features, pricing, footer).
- `guidelines/` — foundation specimen cards (colors, type, spacing, radius/shadow, brand, iconography).
- `assets/` — logo crops.
- `SKILL.md` — portable skill file for use in Claude Code.

## Components
Button, IconButton, Card, Badge, Tag, Input, Select, Checkbox, Radio, Switch, Tabs, Dialog, Toast, Tooltip.

### Intentional additions
No source defined a component inventory, so a standard SaaS primitive set was authored, sized to what an accounting portal needs (forms-heavy: Input/Select/Checkbox/Radio/Switch; status-heavy: Badge/Tag; feedback: Dialog/Toast/Tooltip). Nothing here is mandated by a source file — treat the whole set as a first draft.

## Content fundamentals
Copy is written in **Brazilian Portuguese**, second person informal ("você"), never "tu" or formal "o senhor". Tone is warm, reassuring and plain-spoken — it explains accounting/tax concepts in everyday language rather than jargon, e.g. "Sua contabilidade, sempre em dia" rather than "Gestão contábil integrada". Sentences are short and benefit-first ("Feche o mês em minutos, não em dias"). No emoji — the brand reads as trustworthy/professional financial services, not playful consumer app. Numbers are formatted in Brazilian style (R$ 48.200, DD/MM/AAAA dates). Product vocabulary uses real Brazilian tax/accounting terms (DAS, MEI, Simples Nacional, NF-e, ISS, FGTS) rather than generic "invoice/tax" placeholders — precision here signals expertise. CTAs are direct and low-friction ("Comece grátis", "Abrir minha conta", "Falar com um especialista"), never hype-y ("Unlock your potential!").

## Visual foundations
- **Color**: two-tone brand palette straight from the logo — sky blue (`--sky-500 #3FC1F0`) as the single accent/action color, and deep navy (`--navy-900 #052430`) as the anchor/dark surface color (sidebar, footer, hero). Neutrals are a cool gray scale. Semantic colors (success/warning/danger) are desaturated, paired with tinted backgrounds for badges — never used for large surfaces.
- **Type**: Poppins (Google Fonts substitute — see Fonts note below) for both display and body, weighted 400–800; a rounded accent face, Baloo 2, borrowed from the logo's "Contabilidade Digital" tagline, is reserved for taglines/onboarding moments only, used sparingly.
- **Spacing**: 4px base unit, scale 4/8/12/16/20/24/32/40/48/64/80/96.
- **Backgrounds**: flat colors only — no gradients, no textures/patterns, no photography. Dark navy full-bleed sections (hero, sidebar, footer) contrast against light gray/white content surfaces. This is a deliberate restraint given the brand has no illustration library.
- **Shadows/elevation**: soft, low-contrast navy-tinted shadows (`--shadow-sm/md/lg`), never harsh black shadows.
- **Corners**: generous rounding — 8/12/16/24px on cards and containers, full pill radius on buttons, tags and switches.
- **Borders**: thin (1–1.5px) neutral-gray hairlines on cards/inputs; no colored borders except a 2px accent border to highlight the "most popular" pricing tier.
- **Hover/press states**: hover = one step down in the tint scale (e.g. primary → sky-400) or a light neutral wash on ghost/secondary buttons; no scale/shrink or shadow-pop micro-interactions defined.
- **Motion**: minimal — 120–200ms ease-standard transitions on hover/focus color changes only. No entrance animations, bounces, or parallax.
- **Transparency/blur**: used only for the dialog scrim (semi-transparent navy + light blur) — not used elsewhere.
- **Imagery**: none supplied. Placeholders should be clean product-style photography or omitted; avoid stock "handshake"/generic business photography.

## Iconography
No icon set was supplied with the logo. This system uses **Lucide** (outline, 1.5px stroke, no fill) via CDN as the working icon set — it matches the logo mark's own linework (a single-weight outline arrow/swirl). Icons are used functionally in navigation, table rows and feature cards; never decoratively, never as emoji. If ProFily has its own icon library, swap the Lucide CDN script for it and update icon names.

## Fonts — substitution flag
No brand font files were provided. **Poppins** (geometric grotesque, closest public match to the "ProFily" wordmark's bold geometric letterforms) and **Baloo 2** (rounded, closest match to the tagline's soft display face) are used as Google Fonts substitutes, loaded via `@import` in `tokens/typography.css`. If ProFily has real brand font files, please share them and this system will be updated to self-host them.
