# eunjung926.github.io

Academic portfolio site (GitHub Pages).

## Local preview

**Option A — Python (no install)**

```bash
python3 -m http.server 8000
```

Open http://localhost:8000

**Option B — npm**

```bash
npm run dev
```

## Edit content

| What | Where |
|------|-------|
| Name, bio, links | `index.html` → `#summary` |
| News | `index.html` → `.news-feed` |
| Publications | `index.html` → `#publications` |
| Team | `index.html` → `#team` |
| Teaching / Services | `index.html` → `#services` |
| Profile photo | Add `images/photo.jpg`, uncomment `<img>` in hero |
| Styles | `css/style.css` |

## Deploy

Push to `main`. GitHub Pages serves `index.html` from the repo root.

Settings → Pages → Source: **Deploy from branch / main / root**
