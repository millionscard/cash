import { version } from '../package.json';

const BASE_PATH = process.env.BASE_PATH || '';
const CASH_VERSION = version;

export default {
  projectLink: 'https://github.com/millionscard/cash', // GitHub link in the navbar
  docsRepositoryBase: 'https://github.com/millionscard/cash/blob/main/docs/pages', // base URL for the docs repository
  titleSuffix: ' – Cash',
  nextLinks: true,
  prevLinks: true,
  search: true,
  customSearch: null, // customizable, you can use algolia for example
  darkMode: true,
  floatTOC: true,
  footer: true,
  footerText: () => `v${CASH_VERSION}`,
  footerEditLink: 'Edit this page on GitHub',
  logo: (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        fill="none"
        viewBox="0 0 43 43"
      >
        <g fill="currentColor" clipPath="url(#clip0)">
          <path
            fillRule="evenodd"
            d="M25.487 5.04L21.378.12 17.27 5.04l-5.902-2.428-1.375 6.286-6.344.62 1.676 6.21-5.332 3.526 4.341 4.712-3.098 5.625 6.013 2.135-.156 6.435 6.307-.931L16.223 43l5.155-3.784L26.534 43l2.824-5.77 6.306.93-.155-6.434 6.013-2.135-3.099-5.625 4.341-4.712-5.332-3.526 1.676-6.21-6.344-.62-1.374-6.286-5.903 2.429zm-2.363 6.929l.761-2.869 2.33.63-.762 2.869c.837.288 1.515.717 2.154 1.29.681.645 1.177 1.302 1.536 2.014l-2.514 1.902c-.763-1.713-2.032-2.21-2.571-2.356-.597-.161-1.387-.283-2.114.166a1.923 1.923 0 0 0-.898 1.202c-.152.574-.031 1.037.381 1.548.272.35.666.703 2.017 1.806.157.13.32.26.484.392.882.708 1.833 1.47 2.435 2.489.764 1.252.87 2.572.505 3.948-.487 1.836-1.657 3.149-2.838 3.813-1.08.63-2.397.889-3.623.803l-.852 3.212-2.33-.63.838-3.155a8.224 8.224 0 0 1-3.257-2.296 7.887 7.887 0 0 1-1.518-2.654l2.716-1.633c.225.645.652 1.56 1.163 2.16.594.744 1.349 1.225 2.371 1.502.739.2 1.572.272 2.357-.162.612-.357 1.014-.955 1.182-1.586.19-.717-.014-1.325-.235-1.754-.221-.429-1.396-1.393-1.748-1.672-.76-.575-2.366-1.87-3.192-3.231-.68-1.107-.863-2.14-.46-3.66.335-1.262 1.024-2.367 2.207-3.153a5.794 5.794 0 0 1 3.475-.935z"
            clipRule="evenodd"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <path fill="#fff" d="M0 0h152v43H0z" />
          </clipPath>
        </defs>
      </svg>
      <span className="mx-2 font-extrabold select-none">Cash</span>
    </>
  ),
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/svg+xml" href={`${BASE_PATH}/favicon.svg`} />
    </>
  ),
};
