import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

const logo = '<svg xmlns="http://www.w3.org/2000/svg" width="152" height="43" fill="none"><g fill="#8D34FF" clip-path="url(#a)"><path fill-rule="evenodd" d="M25.487 5.04 21.378.12 17.27 5.04l-5.902-2.428-1.375 6.286-6.344.62 1.676 6.21-5.332 3.526 4.341 4.712-3.098 5.625 6.013 2.135-.156 6.435 6.307-.931L16.223 43l5.155-3.784L26.534 43l2.824-5.77 6.306.93-.155-6.434 6.013-2.135-3.099-5.625 4.341-4.712-5.332-3.526 1.676-6.21-6.344-.62-1.374-6.286-5.903 2.429zm-2.363 6.929.761-2.869 2.33.63-.762 2.869c.837.288 1.515.717 2.154 1.29.681.645 1.177 1.302 1.536 2.014l-2.514 1.902c-.763-1.713-2.032-2.21-2.571-2.356-.597-.161-1.387-.283-2.114.166a1.923 1.923 0 0 0-.898 1.202c-.152.574-.031 1.037.381 1.548.272.35.666.703 2.017 1.806.157.13.32.26.484.392.882.708 1.833 1.47 2.435 2.489.764 1.252.87 2.572.505 3.948-.487 1.836-1.657 3.149-2.838 3.813-1.08.63-2.397.889-3.623.803l-.852 3.212-2.33-.63.838-3.155a8.224 8.224 0 0 1-3.257-2.296 7.887 7.887 0 0 1-1.518-2.654l2.716-1.633c.225.645.652 1.56 1.163 2.16.594.744 1.349 1.225 2.371 1.502.739.2 1.572.272 2.357-.162.612-.357 1.014-.955 1.182-1.586.19-.717-.014-1.325-.235-1.754-.221-.429-1.396-1.393-1.748-1.672-.76-.575-2.366-1.87-3.192-3.231-.68-1.107-.863-2.14-.46-3.66.335-1.262 1.024-2.367 2.207-3.153a5.794 5.794 0 0 1 3.475-.935z" clip-rule="evenodd"/><path d="M50.007 34.187h4.626l2.384-14.586 5.994 14.586h1.542l6.274-14.586 2.103 14.586h4.627l-3.925-23.67h-3.295l-6.485 15.046-6.204-15.047h-3.295l-4.346 23.671zM79.314 18.82v15.367h4.276V18.821h-4.276zm-.42-6.494c0 1.42 1.156 2.59 2.558 2.59s2.559-1.17 2.559-2.59-1.157-2.59-2.559-2.59c-1.402 0-2.559 1.17-2.559 2.59zm7.02-4.01v25.871h4.276V8.316h-4.276zm6.599 0v25.871h4.277V8.316h-4.277zm6.6 10.504v15.367h4.276V18.821h-4.276zm-.42-6.494c0 1.42 1.156 2.59 2.558 2.59s2.559-1.17 2.559-2.59-1.157-2.59-2.559-2.59c-1.402 0-2.559 1.17-2.559 2.59zm14.941 5.998c-2.874 0-4.837.958-6.134 2.165-1.507 1.384-2.559 3.513-2.559 6.033 0 2.484 1.052 4.613 2.559 5.997 1.297 1.207 3.26 2.165 6.134 2.165 2.875 0 4.837-.958 6.134-2.165 1.508-1.384 2.559-3.513 2.559-5.997 0-2.52-1.051-4.65-2.559-6.033-1.297-1.207-3.259-2.165-6.134-2.165zm0 12.527c-2.488 0-4.276-1.987-4.276-4.33 0-2.413 1.823-4.364 4.276-4.364 2.454 0 4.277 1.951 4.277 4.365 0 2.342-1.788 4.33-4.277 4.33zm10.248 3.336h4.276v-7.843c0-.887.035-1.987.666-2.98.631-.96 1.508-1.35 2.629-1.35.421 0 1.332.072 1.998.781.771.816.806 2.165.806 3.017v8.375h4.277v-9.653c0-1.49-.14-3.016-1.192-4.33-1.192-1.49-3.155-1.88-4.487-1.88-2.453 0-3.89 1.348-4.697 2.484v-1.987h-4.276v15.366zm27.347-14.231c-1.928-1.49-3.716-1.632-4.837-1.632-1.227 0-2.769.142-3.961 1.1a4.59 4.59 0 0 0-1.578 3.478c0 1.242.456 2.2 1.157 2.945.912.958 2.173 1.455 3.26 1.846l.981.355c.561.213 1.332.603 1.332 1.561 0 1.065-.911 1.668-2.103 1.668-1.262 0-2.523-.78-3.365-1.774l-2.243 2.626c.946 1.029 2.734 2.555 5.889 2.555 1.858 0 3.33-.497 4.557-1.633 1.226-1.135 1.682-2.52 1.682-3.903 0-.994-.315-1.917-.771-2.555-.876-1.207-2.664-1.81-3.856-2.2l-1.016-.32c-1.192-.39-1.367-.994-1.367-1.384 0-.745.631-1.242 1.647-1.242.456 0 1.472.07 2.489 1.029l2.103-2.52z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h152v43H0z"/></clipPath></defs></svg>';
const theme = create({
  base: 'light',
  colorPrimary: '#8D34FF',
  brandImage: `data:image/svg+xml;utf8,${encodeURIComponent(logo)}`,
});

addons.setConfig({ theme });
