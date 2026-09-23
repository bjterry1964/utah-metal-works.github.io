# Utah Metal Works

Static replacement for [umw.com](https://umw.com). Plain HTML, CSS, JavaScript, images, and one hero video. GitHub Pages can host it with no build step.

The public pages are the household and industrial services, buyers information, out-of-state recycling, recyclables, the price table, the FAQ, staff, reviews, community, solar, and contact. There is no blog, no site search, and no contact form. The yard asks people to call **877-221-0099** or text **385-308-5015**.

Copy was taken from the live WordPress site. Injected spam (casino and pharma paragraphs, and a script printed into every response) was left behind.

## Preview locally

From this directory:

```bash
python3 -m http.server 8080
```

Open http://127.0.0.1:8080/. Links are root-relative (`/pricing/`), so the server has to be rooted here.

## Publish to a new GitHub organization

Links assume the site lives at the host root, which is how an organization site works.

1. Create the GitHub organization.
2. Create a repository named exactly `<organization>.github.io`.
3. Push this directory to that repository's `main` branch.
4. In the repository, open Settings → Pages and set the source to the `main` branch, folder `/` (root). Organization sites named this way often turn that on by themselves.
5. The site will be at `https://<organization>.github.io/`.

DNS for umw.com can wait. Do not add a `CNAME` file until that cutover is intentional.

`.nojekyll` is in the root so Pages serves these files as-is and does not run Jekyll.

## Editing prices

Prices live in one table in [`pricing/index.html`](pricing/index.html). On GitHub, open that file, choose Edit, change the dollar amounts, and commit. The page updates when the commit lands. Every figure is per pound unless that cell says otherwise. Steel also shows a per-ton price.

The numbers in the table were current on the old site as of August 20, 2026.

## A line worth rereading

Several pages still say the company has been trusted "for 55 years," which is how the WordPress site phrases it. The history section says the Lewon family bought the yard in 1955, and the promo video's title card says "since 1916." Those should be reconciled before this copy is treated as final.

## Static files

| What | Where | Size |
|---|---|---|
| Logo, favicon, yard photos, recyclable thumbnails, solar photos, safety badge | `assets/img/` | about 2 MB together |
| Hero poster (a frame from the promo) | `assets/img/hero-poster.jpg` | about 100 KB |
| Hero video | `assets/video/main-promo.mp4` | about 15 MB |

The video on the old site is `Main-promo.mp4` (1280×720, 93 seconds, about 32 MB, with an audio track the page never plays). The file in this repo is that same picture, re-encoded as muted H.264 with the index at the front of the file so a browser can start playback without downloading the whole clip. The 32 MB master is not in git.

### Where these files should live

Keep the images and this video in the GitHub repository and let GitHub Pages serve them.

- The photos are small. Pages handles them without a second host, and a clone of the repo stays light.
- The video is one 15 MB file. That is under GitHub's 50 MB warning and far under the 100 MB file limit. A local scrap yard will not press the GitHub Pages bandwidth guidance (100 GB a month) unless this clip is embedded all over the web.
- Git LFS is a poor fit. Pages would serve the pointer file, not the video.

Move only the video later if clones feel heavy or the mp4 starts to dominate traffic. Put `main-promo.mp4` in a public object bucket such as Cloudflare R2, then change the single `<source src>` in `index.html`. Leave the poster image in the repo so the hero still has a picture if the video is slow. Do not hotlink the old WordPress upload. That host is the one this site replaces.

The ReMA safety badge is included because the company published it on the current site. The BBB seal is not. BBB serves that image from their own domain, so the footer links to the BBB profile instead of copying the badge.
