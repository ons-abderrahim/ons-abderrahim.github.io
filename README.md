# Portfolio — deployment

## Files

| File | Page |
|---|---|
| `index.html` | Home |
| `work.html` | Four case studies (Bauer, Schneider/Concordia, Hydatis, Assembly101) |
| `research.html` | The three publications |
| `writing.html` | The anti-hallucination article, full text |
| `about.html` | Background, tools, education, contact |
| `style.css` | All styling, one file |
| `nav.js` | Language toggle + active nav state |

## Deploy to GitHub Pages

Put all seven files at the **root** of your `ons-abderrahim.github.io` repo, replacing what's
there now. Commit and push. Live in about a minute.

```bash
git add -A
git commit -m "Rebuild portfolio"
git push
```

## Bilingual

Every page is fully French and English. The toggle is the FR/EN button in the header, and the
choice persists across pages via localStorage.

When you edit content, **edit both versions or delete the one you don't want.** The pattern is:

```html
<p data-en>English text</p>
<p data-fr>Texte français</p>
```

If you add a `data-en` without a matching `data-fr`, French visitors see a gap.

## Keep these current

**The footer date.** It says September 2026 on every page. A stale date undoes the whole effect
of a carefully written site.

**The Assembly101 case study** says "in progress". Once you have the split numbers and the
per-participant spread, put them in. That entry becomes much stronger with real figures.

**The writing page** is the full article. If you publish it on LinkedIn as an article too, that
is fine — cross-posting is normal and drives people back here.

## What was deliberately left out

No contact form. Static sites can't process them, and the old one just opened a mail client
while claiming to have sent something.

No skill bars, no percentage rings, no logo grid, no "Available for hire" badge, no loading
screen, no sparkle characters. All of those read as template output.

No analytics. Add Plausible or GoatCounter if you want numbers, but not Google Analytics on a
personal site people will view while deciding whether to interview you.
