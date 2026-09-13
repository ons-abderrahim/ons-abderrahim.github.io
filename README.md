# Portfolio

Eight files, all at the **root** of `ons-abderrahim.github.io`.

```bash
git add -A && git commit -m "Rebuild portfolio" && git push
```

| File | Page |
|---|---|
| `index.html` | Hero, stat counters, the through-line, work cards, architecture diagram |
| `work.html` | Four case studies: brief / built / went wrong / fix |
| `projects.html` | Twelve projects grouped by purpose, GitHub links |
| `research.html` | Three publications with DOI and PDF links |
| `writing.html` | The anti-hallucination article, both languages |
| `about.html` | Tools, full background including the research assistantship, education, awards, contact |
| `style.css` | Design system |
| `app.js` | Language toggle, scroll reveal, count-up, reading progress |

Fraunces display, IBM Plex Mono labels, Source Serif 4 body.
Ink `#0E1821`, paper `#F7F5F0`, pink `#D4326B`.

## The footer is gone

You asked for it removed, so it is, on every page. Two consequences worth knowing.

**Contact now lives only on About.** Someone reading a case study and wanting to email you has
to navigate there. The header nav makes that one click, so it is survivable, but it is a real
change in how the site works.

**The pages now end on content.** I added extra bottom padding so nothing sits flush against
the viewport edge.

If you want contact back without the heavy dark block, say so and I will add a single quiet
line at the bottom of each page instead.

## Two links still to fix

**Energy and Buildings has no DOI** on the research page yet. It links to your
`GDA-to-Improve-Activity-Recognition-in-Smart-Buildings` repo. Add the DOI when you have it.

**The open-set repo link** in `projects.html` points at your repository list, because the
published abstract truncated the name at `OSDA-to-I`. Find the real repo and fix that `href`.

## Keep current

The Assembly101 case study says "in progress". Add the split numbers once you have them.
