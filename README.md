# SFT228 — Software Design & Analysis · Study Hub

A complete, self-contained study website for **SFT228 Software Design & Analysis**
(İstanbul Ticaret University, Faculty of Engineering), built for the make-up
midterm & final.

**Live site:** https://wazder.github.io/sft228-study-hub/

## What's inside

- **14-week curriculum** — every topic from the official lecture slides rewritten
  as clear, exam-ready notes with diagrams, the Walden Hospital case and key terms.
- **Video lessons** — curated explanations for every week.
- **Test bank** — 100+ multiple-choice questions with explanations, filterable by week.
- **Open-ended questions** — full model answers in the make-up exam style.
- **Mock midterm & final** — auto-scored multiple-choice plus self-checked written parts.
- **Glossary & cheat sheet** — searchable definitions and a one-page revision sheet.

Built from: Ashrafi & Ashrafi *Object-Oriented Systems Analysis and Design*
(Pearson, 2009), Gomaa *Software Modeling and Design*, Kendall HCI, and the
Gang of Four design patterns.

## Tech

Pure static site — HTML, CSS and vanilla JavaScript. No build step, no
dependencies. Single-page app with hash routing; works offline from `file://`
and on GitHub Pages. Light/dark theme, progress tracking via `localStorage`,
fully responsive.

```
index.html
assets/css/styles.css
assets/js/content.js    # 14 weeks of notes
assets/js/questions.js  # question bank + mock exams
assets/js/app.js        # SPA engine
```
