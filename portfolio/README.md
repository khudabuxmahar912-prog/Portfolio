# Khuda Bux Mahar — Developer Portfolio

Plain HTML, CSS and JavaScript. No install, no build step.

## Run it in VS Code
1. Open this folder in VS Code (File > Open Folder).
2. Install the **Live Server** extension (Ritwick Dey).
3. Right-click `index.html` > **Open with Live Server**.

(You can also just double-click `index.html`.)

## Add your own files
| File to add | Where |
|---|---|
| Profile photo | `assets/images/profile.jpg` (about 480x560, portrait) |
| CV image preview | `assets/images/cv-preview.jpg` |
| CV PDF | `assets/cv/Khuda-Bux-Mahar-CV.pdf` |
| Social share image (optional) | `assets/images/og-image.jpg` (1200x630) |

Until you add the photo, the hero shows your initials. Until you add the CV preview, the CV section shows a note.

## Updating content
Everything that changes lives in `js/data.js`:
- `PROJECTS`: copy a block to add a project. Fill `githubUrl` / `liveUrl` when they exist.
- `TOOLS`, `LEARNING`, `EXPLORING`: your tools and what you are learning.
- `EXPERIENCE`: hackathons, certifications, internships (newest first).
- `JOURNEY`: learning paths.
- `SITE.formEndpoint`: paste a Formspree URL to make the contact form send directly.

Current skill cards are plain HTML in the `#skills` section of `index.html`.

## Before you publish
Search the project for `YOUR-USERNAME` and replace it with your real GitHub Pages address
(in `index.html`, `robots.txt` and `sitemap.xml`).

## Deploy on GitHub Pages
1. Create a repository, e.g. `portfolio`, and push this folder to it.
2. Repository Settings > Pages > Deploy from branch > `main` / root.
3. Your site appears at `https://YOUR-USERNAME.github.io/portfolio/`.

## Structure
```
portfolio/
├── index.html
├── css/style.css
├── js/data.js      <- edit this
├── js/script.js
├── assets/{images,icons,cv}
├── robots.txt
├── sitemap.xml
└── README.md
```
