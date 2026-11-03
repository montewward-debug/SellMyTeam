<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Shirt photos (read before changing any color or artwork)

The shirt photos on the site are image files in `public/mockups/`. Changing a shirt color, an ink color or the artwork in code does not change them: until they're regenerated, the site shows the old shirt while Printful prints the new one. After any such change:

1. Commit and push the code, and wait about a minute for the deploy: the photo script renders from the live print files.
2. Regenerate the photos for the teams you changed (add `hoodie` if hoodies changed):
   - PowerShell: `$env:BASE_URL="https://www.sellmyteam.com"; node --env-file=.env.local scripts/generate-mockups.mjs tee <team-slug> <team-slug>`
   - Mac/Linux: `BASE_URL=https://www.sellmyteam.com node --env-file=.env.local scripts/generate-mockups.mjs tee <team-slug> <team-slug>`
3. Open the new PNGs and check the lettering color, bump `ART_VERSION` in `lib/art.ts`, commit `public/mockups/`, and push.

City tee photos are made from the plain tee photos with `scripts/city-mockups.py` (see README, Photos).
