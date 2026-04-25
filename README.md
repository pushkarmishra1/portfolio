
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

---

## 🚀 How to Run Locally

1. Clone the repo:
   ```bash
   git clone https://github.com/pushkarmishra/portfolio.git
   cd portfolio
   ```

2. Open `index.html` directly in a browser, **or** use VS Code Live Server:
   - Install the **Live Server** extension in VS Code
   - Right-click `index.html` → **Open with Live Server**

> No `npm install`, no build step needed. It's just HTML/CSS/JS.

---

## 📸 Adding Your Photo

1. Add your headshot as `assets/photo.jpg` (recommended: 500×600px, webp or jpg)
2. In `index.html`, find the comment `<!-- REPLACE -->` and swap:

```html
<!-- Remove this: -->
<div class="hero-photo-placeholder"> ... </div>

<!-- Add this: -->
<img src="assets/photo.jpg" alt="Pushkar Mishra" class="hero-photo" loading="lazy" />
```

---

## 📬 Wiring the Contact Form (Free with Formspree)

1. Go to [formspree.io](https://formspree.io) → Sign up → Create form → Copy your endpoint
2. In `js/form.js`, replace `simulateSend()` with:

```javascript
async function realSend(data) {
  const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  if (!res.ok) throw new Error('Send failed');
}
```

---

## 🌍 Deployment (GitHub Pages — Free & Permanent)

See `DEPLOYMENT.md` for step-by-step instructions.

---

## 📄 License

MIT — Free to use and modify for personal portfolios.

---

*Built by Pushkar Mishra — Lucknow, UP*
=======
# portfolio
Personal Portfolio | Full Stack Developer | HTML CSS JS
4a559538d9431c281ab7dc1d574d9622c9edfc04
