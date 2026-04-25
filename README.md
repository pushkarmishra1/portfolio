
# 🌐 Pushkar Mishra — Portfolio Website

> A dark-themed, animated personal portfolio built with pure **HTML5, CSS3, and Vanilla JavaScript** — no frameworks, no build tools, zero dependencies.

**Live Demo:** [pushkarmishra.github.io/portfolio](https://pushkarmishra.github.io/portfolio) *(update after hosting)*

---

## 📁 Project Structure

```
portfolio/
├── index.html              ← Main HTML (semantic, SEO-ready)
├── css/
│   ├── reset.css           ← Browser normalization
│   ├── variables.css       ← All design tokens (colors, fonts, spacing)
│   ├── layout.css          ← Grid, flex, section structure
│   ├── components.css      ← Buttons, cards, forms, skill items
│   ├── animations.css      ← All keyframes and motion
│   └── responsive.css      ← Mobile & tablet breakpoints
├── js/
│   ├── cursor.js           ← Custom animated cursor
│   ├── scroll.js           ← Parallax, progress bar, scroll reveal
│   ├── filter.js           ← Project category filtering
│   └── form.js             ← Contact form logic
└── assets/
    └── photo.jpg           ← Your headshot (add this yourself)
```

---

## ✨ Features

| Feature | How it's built |
|---|---|
| Dark neon UI | CSS custom properties (`variables.css`) |
| Custom cursor | `requestAnimationFrame` loop with LERP interpolation |
| Parallax blooms + grid | `mousemove` + `scroll` event listeners |
| Scroll reveal animations | `IntersectionObserver` API |
| 3D wireframe cube | CSS `transform-style: preserve-3d` + keyframes |
| Skill icon 3D flip | CSS `rotateY(360deg)` on hover |
| Project card filter | DOM show/hide + staggered CSS animation re-trigger |
| Progress bar | `scrollY / maxScroll` percentage |
| Active nav link | Section offset comparison on scroll |
| Contact form | Client-side validation + Formspree-ready |
| Responsive layout | CSS Grid + media queries (768px, 1024px) |
| SEO | Meta tags, semantic HTML5, `aria-label` attributes |

---

## 🛠️ Tech Stack

**Frontend:**
- HTML5 — Semantic elements (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- CSS3 — Custom properties, Grid, Flexbox, `backdrop-filter`, `transform-style`
- Vanilla JavaScript (ES6+) — No jQuery, no libraries

**Fonts:**
- [Orbitron](https://fonts.google.com/specimen/Orbitron) — Display / headings
- [Syne](https://fonts.google.com/specimen/Syne) — Body text

**APIs used:**
- `IntersectionObserver` — Scroll reveal
- `requestAnimationFrame` — Cursor animation loop
- Google Fonts CDN

*Built by Pushkar Mishra — Lucknow, UP*
=======
# portfolio
Personal Portfolio | Full Stack Developer | HTML CSS JS
