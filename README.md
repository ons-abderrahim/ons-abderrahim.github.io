# Portfolio

Eight files, all at the **root** of `ons-abderrahim.github.io`.

```bash
git add -A && git commit -m "Rebuild portfolio" && git push
```

| File | Page |
|---|---|
| `index.html` | Hero, live stat counters, the through-line, work cards, architecture diagram |
| `work.html` | Four case studies: brief / built / went wrong / fix |
| `projects.html` | **New.** Twelve projects grouped by purpose, with GitHub links |
| `research.html` | Three publications, with DOI and PDF links |
| `writing.html` | The anti-hallucination article, both languages |
| `about.html` | Tools, full background including the research assistantship, education, awards |
| `style.css` | Design system |
| `app.js` | Language toggle, scroll reveal, count-up, reading progress |

## Design

Fraunces display, IBM Plex Mono labels, Source Serif 4 body. Blueprint ink `#0E1821`,
warm paper `#F7F5F0`, **pink accent `#D4326B`**.

## Publication links, now real

- **JBE** links to `doi.org/10.1016/j.jobe.2025.113784`. It is **open access**, so anyone
  can read the full paper. Worth knowing: reviewers can verify you without a paywall.
- **IBPSA** links to the conference page and the direct PDF.
- **Energy and Buildings** has no DOI on the page yet. It links to your
  `GDA-to-Improve-Activity-Recognition-in-Smart-Buildings` repo instead.
  **Add the DOI when you have it**, in `research.html`.

## Projects page

Grouped into computer vision, LLM systems and retrieval, and research code. Repos link to
GitHub; academic projects with no public repo are marked "private".

**One link needs your attention.** The open-set domain adaptation repo points at your
repository list because the JBE abstract truncated the name. Find the real repo and fix
that single `href` in `projects.html`.

**Hard_hat_detection is now prominent.** It was on GitHub but nowhere on your CV or old
site. YOLOv5 detecting safety equipment in site footage is industrial computer vision, and
it is the most relevant repo you have for a manufacturing vision role.

## Keep current

Footer date on every page. The Assembly101 case study still says "in progress", so add the
split numbers once you have them.
