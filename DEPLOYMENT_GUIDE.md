# Deployment Guide - The Classified Files

This document explains how the repositories and deployment are connected.

---

## Quick Reference

| What | Where |
|------|-------|
| **Game Site** | https://cryptochris8.github.io/the-classified-files/ |
| **Marketing Site** | https://declassifiedio.netlify.app/ |
| **Main Repo** | github.com/cryptochris8/the-classified-files |
| **Marketing Site Repo** (unused) | github.com/cryptochris8/the-classified-files-site |

---

## Repository Structure

```
the-classified-files/           <- Main GitHub repo (THIS IS WHAT MATTERS)
├── index.html                  <- Game entry point
├── game-engine.js              <- Game logic
├── *-story-expanded.js         <- Story files for each case
├── images/                     <- Game images
├── website-repo/               <- MARKETING SITE FOLDER
│   ├── index.html              <- Marketing site HTML
│   ├── styles.css              <- Marketing site styles
│   ├── purchase-links.js       <- Purchase link mappings
│   ├── images/                 <- Marketing site images
│   └── netlify.toml            <- Netlify config
└── ...other game files
```

---

## Netlify Configuration (Marketing Site)

**Netlify MUST be connected to:**
- **Repository:** `github.com/cryptochris8/the-classified-files` (the MAIN repo)
- **Branch:** `master`
- **Publish directory:** `website-repo`

### How to Verify Netlify Settings

1. Go to https://app.netlify.com
2. Select the `declassifiedio` site
3. Click **Site configuration** → **Build & deploy**
4. Verify:
   - **Repository:** `cryptochris8/the-classified-files`
   - **Base directory:** (leave blank or `/`)
   - **Publish directory:** `website-repo`

---

## How to Update the Marketing Site

### Adding a New Case to Marketing Site

1. Edit `website-repo/index.html`:
   - Add the game card HTML
   - Update the premium case count in hero stats
   - Update the section subtitle text

2. Edit `website-repo/purchase-links.js`:
   - Add the case key mapping

3. Add marketing image (if needed):
   - Copy image to `website-repo/images/`

4. Commit and push:
   ```bash
   git add website-repo/
   git commit -m "Add [Case Name] to marketing site"
   git push origin master
   ```

5. Netlify auto-deploys from the push (usually within 1-2 minutes)

---

## How to Update the Game

1. Edit game files in the root directory:
   - Story files: `*-story-expanded.js`
   - Game config: `game-config.js`
   - Images: `images/`

2. Build and test locally:
   ```bash
   npm run build
   npm run dev
   ```

3. Commit and push:
   ```bash
   git add .
   git commit -m "Your changes"
   git push origin master
   ```

4. The game is hosted on GitHub Pages, which auto-deploys from `master`

---

## Common Issues

### Marketing site not updating after push

**Check these in order:**

1. **Verify Netlify is connected to the correct repo:**
   - Must be `cryptochris8/the-classified-files` (NOT `the-classified-files-site`)

2. **Verify publish directory:**
   - Must be `website-repo`

3. **Check Netlify deploy logs:**
   - Go to Netlify → Deploys → Click latest deploy
   - Look for errors

4. **Clear Netlify cache:**
   - Netlify → Deploys → Trigger deploy → Clear cache and deploy site

### Changes going to wrong place

| If you want to update... | Edit files in... | Push to... |
|--------------------------|------------------|------------|
| Marketing site | `website-repo/` | `origin master` |
| Game | Root directory | `origin master` |

---

## The "site-repo" Remote (IGNORE THIS)

The `website-repo` folder has a second git remote called `site-repo` pointing to `the-classified-files-site`.

**This is legacy and NOT used.** Netlify deploys from the main repo, not this separate repo.

You can verify remotes with:
```bash
cd website-repo
git remote -v
```

The `origin` remote is what matters. Ignore `site-repo`.

---

## Deployment Flow Diagram

```
Your Local Machine
       │
       │ git push origin master
       ▼
┌─────────────────────────────────────┐
│  GitHub: the-classified-files       │
│  (main repo)                        │
└─────────────────────────────────────┘
       │                    │
       │                    │
       ▼                    ▼
┌─────────────┐      ┌─────────────────┐
│ GitHub Pages│      │ Netlify         │
│ (Game)      │      │ (Marketing)     │
│             │      │                 │
│ Deploys:    │      │ Deploys:        │
│ Root files  │      │ website-repo/   │
└─────────────┘      └─────────────────┘
       │                    │
       ▼                    ▼
   Game Site           Marketing Site
```

---

## Checklist for New Case Deployment

- [ ] Story file created: `[case]-story-expanded.js`
- [ ] Story file added to `index.html` script tags
- [ ] Case added to `game-config.js`
- [ ] Stripe price ID configured in `stripe-prices.js`
- [ ] Images generated and added to `images/`
- [ ] Scene verification passes: `node verify-all-scenes.js`
- [ ] **Marketing site updated:** `website-repo/index.html`
- [ ] **Purchase links updated:** `website-repo/purchase-links.js`
- [ ] **Marketing image added:** `website-repo/images/`
- [ ] Changes pushed to `origin master`
- [ ] Netlify deploy successful
- [ ] Marketing site shows new case

---

*Last updated: January 2026*
