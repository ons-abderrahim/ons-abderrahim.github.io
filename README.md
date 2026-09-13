# Portfolio

Seven files. Put them all at the **root** of `ons-abderrahim.github.io`, replacing what is there.

```bash
git add -A && git commit -m "Rebuild portfolio" && git push
```

| File | Page |
|---|---|
| `index.html` | Home: hero, live stat counters, the through-line, work cards, the architecture diagram |
| `work.html` | Four case studies, each structured brief / built / went wrong / fix |
| `research.html` | The three publications |
| `writing.html` | The anti-hallucination article, full text, both languages |
| `about.html` | Background, tools, education, contact |
| `style.css` | Design system, one file |
| `app.js` | Language toggle, scroll reveal, count-up stats, reading progress |

## Design system

**Type.** Fraunces for display (variable, with the WONK axis on, which is what gives the
headings their character), IBM Plex Mono for labels and metadata, Source Serif 4 for body.
All three load from Google Fonts.

**Palette.** Deep blueprint ink `#0E1821` for hero and footer, warm paper `#F7F5F0` for
content, signal orange `#E2581F` for emphasis. The hero has a faint technical grid masked
with a radial gradient so it fades out rather than tiling flatly.

**Motion.** Everything is `transform` and `opacity` only, so it stays on the GPU.
`prefers-reduced-motion` disables all of it.

## Two things that matter if you edit it

**Bilingual.** Every page is complete in French and English. The pattern is:

```html
<p data-en>English</p>
<p data-fr>Français</p>
```

Add one without the other and speakers of that language see a gap.

**Progressive enhancement.** Animations only activate when JavaScript confirms it can run
(`document.documentElement.classList.add('js')`). Without JS, everything is visible and
correct rather than stuck invisible. The stat numbers are written into the HTML as their
final values and JS animates *from* zero, so no-JS visitors see the right figures.

Do not remove that `.js` guard when editing the CSS.

## Keep current

The footer date says September 2026 on every page.

The Assembly101 case study says "in progress". Put the real split numbers in once you have
them; that entry gets much stronger with figures.
