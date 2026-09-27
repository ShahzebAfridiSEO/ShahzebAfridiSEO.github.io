# Shahzeb Afridi — SEO Portfolio

A lightweight static portfolio built with HTML5, CSS3 and vanilla JavaScript for GitHub Pages.

## Structure

- `index.html` — all page content and SEO metadata
- `style.css` — responsive design, hover states and animations
- `script.js` — navigation, counters, reveal effects, image viewer and dynamic canonical URL
- `favicon.svg` — site favicon
- `assets/images/` — profile image
- `assets/case-studies/` — Google Search Console evidence
- `assets/credentials/` — degree and certificate images

## Deploy on GitHub Pages

1. Create a new GitHub repository (for a user site use `<username>.github.io`; for a project site any repository name works).
2. Upload **the contents of this folder** to the repository root.
3. Commit the files to the `main` branch.
4. Open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select `main` and `/ (root)`, then save.
7. Wait for GitHub to publish the site and open the generated Pages URL.
8. Test the menu, all social links, case-study image viewer, credential links and mobile layout.

The canonical URL is set dynamically from the deployed page URL, so the same files work for both a user Pages site and a repository subpath.
