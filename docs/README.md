# Cash Docs

> This is where our documentation site lives 📄

## Getting Started

### Install dependencies

`npm install`

### Build the site

`npm run build`

### Run the development server

`npm run dev`

## Add/Change content

The content is written in [mdx](https://github.com/mdx-js/mdx).
All documentation files are located in the `/content` directory.

**Note:** Make sure when adding new files to also update the [navigation](./src/@primer/gatsby-theme-doctocat/nav.yml).

## Deploy to Github Pages

Runs `npm run build` and publishes the `/public` directory to [GitHub Pages](https://millionscard.github.io/cash/)

`npm run deploy`
