# 🚀 Deployment Guide — GitHub Pages (Free & Permanent)

This guide will get your portfolio live on the internet in under 10 minutes, for free, forever.

---

## Step 1 — Create a GitHub Account (if you don't have one)

Go to [github.com](https://github.com) → Sign Up → Choose username like `pushkarmishra`

---

## Step 2 — Create a New Repository

1. Click the **+** button (top right) → **New repository**
2. Repository name: `portfolio` (or `pushkarmishra.github.io` for a cleaner URL)
3. Set to **Public** (required for free GitHub Pages)
4. ✅ Check **Add a README file**
5. Click **Create repository**

---

## Step 3 — Upload Your Files (Easy Method — No Terminal)

1. Open your repository on GitHub
2. Click **Add file** → **Upload files**
3. Drag and drop your entire `portfolio` folder contents:
   - `index.html`
   - `css/` folder
   - `js/` folder
   - `assets/` folder
   - `README.md`
4. Scroll down → Write commit message: `"Initial portfolio upload"`
5. Click **Commit changes**

---

## Step 4 — Enable GitHub Pages

1. Go to your repository → **Settings** tab
2. Left sidebar → **Pages**
3. Under **Source** → select **Deploy from a branch**
4. Branch: `main` | Folder: `/ (root)`
5. Click **Save**
6. Wait ~2 minutes ⏳

---

## Step 5 — Your Site is Live! 🎉

Your portfolio is now permanently live at:

```
https://pushkarmishra.github.io/portfolio
```

*(If you named the repo `pushkarmishra.github.io`, the URL is just `https://pushkarmishra.github.io`)*

---

## Step 6 — Update Your Portfolio Anytime

### Option A — Through GitHub Website (Easiest):
1. Go to your repo → click any file → click ✏️ pencil icon → edit → commit

### Option B — Through Terminal (Recommended):
```bash
# First time setup
git clone https://github.com/pushkarmishra/portfolio.git
cd portfolio

# Make changes to your files in VS Code, then:
git add .
git commit -m "Updated projects section"
git push origin main
```
Changes go live automatically in ~1 minute after push.

---

## Alternative: Netlify (Even Easier, Custom Domain Support)

1. Go to [netlify.com](https://netlify.com) → Sign up with GitHub
2. Click **New site from Git** → Choose GitHub → Select your repo
3. Build command: *(leave empty)*
4. Publish directory: `/`
5. Click **Deploy site**

Netlify gives you a free URL like `pushkar-portfolio.netlify.app`
You can also connect a custom domain like `pushkarmishra.dev`

---

## Checklist Before Going Live

- [ ] Replace photo placeholder with your actual photo in `assets/`
- [ ] Update GitHub/LinkedIn links in `index.html`
- [ ] Update project GitHub links in `index.html`
- [ ] Wire up contact form with Formspree (see README.md)
- [ ] Test on mobile (Chrome DevTools → toggle device toolbar)
- [ ] Check all links open correctly

---

*After hosting, add the live URL to your GitHub profile and LinkedIn!*
