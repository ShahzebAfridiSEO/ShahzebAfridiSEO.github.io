# Shahzeb Afridi — SEO Portfolio

A lightweight, responsive SEO portfolio built for GitHub Pages with HTML5, CSS3 and vanilla JavaScript only.

## File structure

```text
shahzeb-seo-portfolio/
├── index.html
├── style.css
├── script.js
├── robots.txt
├── README.md
└── assets/
    ├── favicon.svg
    ├── shahzeb-afridi-profile.webp
    ├── shahzeb-afridi-formal.webp
    ├── shahzeb-afridi-seo-cv.pdf
    ├── gsc-7-days.webp
    ├── gsc-12-months.webp
    ├── gsc-16-months.webp
    ├── gsc-28-days.webp
    ├── gsc-3-months.webp
    ├── degree-msc-computer-science-university-of-peshawar.webp
    ├── degree-bsc-university-of-peshawar.webp
    ├── certificate-digital-media-marketing-pseb-corvit.webp
    ├── certificate-iskills-seo-ai.webp
    ├── certificate-social-media-marketing.webp
    ├── certificate-ecommerce-undp.webp
    ├── certificate-digiskills-graphic-design.webp
    ├── certificate-digiskills-freelancing.webp
    ├── certificate-artificial-intelligence-ml-dl-uet.webp
    └── certificate-computer-graphics-kpttb.webp
```

## Credential-image mapping

Every linked credential uses the matching supplied image. Duplicate uploads of the same Computer Graphics certificate are intentionally included only once.

- MSc Computer Science → University of Peshawar MSc degree image
- BSc → University of Peshawar BSc degree image
- Digital Media Marketing → PSEB / Corvit Certificate of Merit
- SEO, Digital Marketing & AI Automations → iSkills training certificate
- Social Media Marketing → Digital Skills Training Programme certificate
- E-Commerce → Digital Skills for KP / Cybervision / UNDP certificate
- Graphic Design → DigiSkills Graphic Design certificate
- Freelancing → DigiSkills Freelancing certificate
- Artificial Intelligence (ML/DL) → UET Peshawar training qualification
- Computer Graphics → Khyber Pakhtunkhwa Trade Testing Board certificate

## Deploy on GitHub Pages

1. Create a new GitHub repository. If you want the cleanest URL, name it `YOUR-GITHUB-USERNAME.github.io`. A normal project repository also works.
2. Upload every file and the complete `assets` folder while keeping the same folder structure.
3. Commit the files to the default branch (usually `main`).
4. Open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select the `main` branch and `/ (root)`, then save.
7. Wait for GitHub Pages to publish the site, then open the live URL and test the navigation, images, CV link, degree/certificate links, email link and LinkedIn link.
8. After the final public URL is known, you may replace the relative canonical and social-image URLs with absolute URLs for the strongest social-sharing metadata. The current site works without that edit, and JavaScript updates the canonical URL in browsers.

## Content integrity notes

- Google Search Console metrics are taken directly from the supplied screenshots.
- The screenshots do not identify domains or show project change logs, so the portfolio does not make causal claims about specific tactics.
- Credential images are linked to the exact relevant degree/certification title rather than reused under unrelated titles.
- Some original credential scans contain personal identification or registration numbers. They are included because these exact source images were supplied for public portfolio linking; review them before publishing if you prefer to redact those identifiers.
- No backend, Node.js, PHP, database or build step is required.
