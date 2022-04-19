<p align="center">
  <img width="600" src="assets/cover.png" alt="Millions Design System">
</p>

<h1 align="center">Cash</h1>

<p align="center">React Native implementation of Millions Design System</p>

<p align="center">
  <a href="https://github.com/millionscard/cash/actions/workflows/ci.yml">
    <img alt="CI status" src="https://github.com/millionscard/cash/actions/workflows/ci.yml/badge.svg">
  </a>
</p>

## Getting started

### Install dependencies

```bash
npm install
```

### Start development environment

```bash
npm run ios
```

```bash
npm run android
```

### Custom Fonts

iOS uses the "PostScript name" of the font, while Android uses the "font file name".  
To prevent platform specific conditions our font file name is the same as the PostScript name.

Currently these are the fonts available:

```
Inter-Thin
Inter-ExtraLight
Inter-Light
Inter-Medium
Inter-Regular
Inter-SemiBold
Inter-Bold
Inter-ExtraBold
Inter-Black

FuturaPT-Bold
FuturaPT-Book
FuturaPT-Demi
FuturaPT-ExtraBold
FuturaPT-Heavy
FuturaPT-Light
FuturaPT-Medium
```

To get the PostScript name of a font, use the following command:

```bash
(cd assets/fonts && for file in "$arg"*.{ttf,otf}; do fc-scan --format "%{postscriptname}\n" $file; done)
```

_Note: `fontconfig` is available via homebrew `brew cask install fontconfig`._

### Start development environment of the docs

```bash
npm run docs
```

### Deploy docs

```bash
npm run docs:deploy
```
