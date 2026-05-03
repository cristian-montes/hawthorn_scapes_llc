# Hawthorn Scapes Website

Astro website for Hawthorn Scapes LLC, a Colorado landscaping, xeriscaping, hardscape, fencing, and maintenance company serving Boulder through Colorado Springs.

## Requirements

- Node.js `>=22.12.0`
- npm

If you use `nvm`, run:

```bash
nvm use 22
```

If Node 22 is not installed yet:

```bash
nvm install 22
nvm use 22
```

## Local Setup

Install dependencies:

```bash
npm install
```

Create a local `.env` file from the example:

```bash
cp .env.example .env
```

Then set:

```text
WEB3FORMS_ACCESS_KEY=your-web3forms-access-key
```

Start the local dev server:

```bash
npm run dev
```

Astro will print the local URL in the terminal, usually:

```text
http://localhost:4321/
```

If that port is already in use, Astro may choose another port.

## Common Commands

```bash
npm run dev
```

Starts the local Astro development server.

```bash
npm run build
```

Runs `astro check`, builds the static site into `dist/`, and runs the HTML post-processing script.

```bash
npm run preview
```

Previews the production build locally after `npm run build`.

```bash
npm run format:check
```

Checks formatting across the project.

```bash
npm run format:fix
```

Formats the project with Prettier.

## Notes

- Main public pages live in `src/pages`.
- Shared business constants live in `src/data_files/constants.ts`.
- Navigation links live in `src/utils/navigation.ts`.
- Navbar and footer components live in `src/components/sections/navbar&footer`.
- Global styles live in `src/assets/styles/global.css`.
- Images live in `src/images` and public static assets live in `public`.
- The retired blog, product, and insight routes redirect visitors to the active services page.
- The site uses Astro, Tailwind CSS, Preline, Lenis, and Astro Compressor.
- Service-area copy should stay consistent across the homepage, footer, contact page, FAQ data, and structured data.
- The contact form uses Web3Forms. Set `WEB3FORMS_ACCESS_KEY` locally in `.env` and in Netlify site environment variables.

## Troubleshooting

If `npm run dev` or `npm run build` says Node is unsupported, check your active Node version:

```bash
node -v
```

Then switch to Node 22:

```bash
nvm use 22
```

If dependencies behave oddly after switching Node versions, reinstall them:

```bash
rm -rf node_modules
npm install
```
