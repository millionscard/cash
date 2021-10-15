# Cash Docs

> This is where our documentation site lives 📄

## Getting Started

### Install dependencies

```bash
npm install
```

### Build the site

```bash
npm run build
```

### Run the development server

```bash
npm run dev
```

## Add/Change content

The content is written in [mdx](https://github.com/mdx-js/mdx).
All documentation files are located in the `/content` directory.

**Note:** Make sure when adding new files to also update the [navigation](./src/@primer/gatsby-theme-doctocat/nav.yml).

## Deploy to Github Pages

Runs `npm run build` and publishes the `/public` directory to [GitHub Pages](https://millionscard.github.io/cash/)

```bash
npm run deploy
```
