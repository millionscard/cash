(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[301],{1093:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/Modal",function(){return r(8597)}])},2966:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(5893),s=r(7294),o={default:"bg-orange-50 border border-orange-100 text-orange-800 dark:text-orange-300 dark:bg-orange-400 dark:border-orange-400 dark:bg-opacity-20 dark:border-opacity-30",error:"bg-red-100 border border-red-200 text-red-900 dark:text-red-200 dark:bg-red-900 dark:bg-opacity-30 dark:border-opacity-30",warning:"bg-yellow-50 border border-yellow-100 text-yellow-900 dark:text-yellow-200 dark:bg-yellow-700 dark:bg-opacity-30"},i=({children:e,type:t="default",emoji:r="\ud83d\udca1"})=>s.createElement("div",{className:`${o[t]} flex rounded-lg nextra-callout mt-6`},s.createElement("div",{className:"pl-3 pr-2 py-2 select-none text-xl",style:{fontFamily:'"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'}},r),s.createElement("div",{className:"pr-4 py-2"},e)),a=JSON.parse('[{"name":"ActivityIndicator","description":"","methods":[],"props":[{"name":"size","description":"","defaultValue":"\'md\'","required":false,"type":"enum"},{"name":"color","description":"","defaultValue":"\'purple.500\'","required":false,"type":"string"}]},{"name":"Avatar","description":"","methods":[],"props":[{"name":"src","description":"","defaultValue":"","required":false,"type":"object"},{"name":"size","description":"","defaultValue":"\'md\'","required":false,"type":"enum"},{"name":"showBorder","description":"","defaultValue":"false","required":false,"type":"bool"},{"name":"borderColor","description":"","defaultValue":"\'black\'","required":false,"type":"string"}]},{"name":"Box","description":"","methods":[],"props":[{"name":"_text","description":"","defaultValue":"","required":false,"type":"object"},{"name":"sx","description":"","defaultValue":"","required":false,"type":"object"}]},{"name":"Card","description":"","methods":[],"props":[{"name":"borderRadius","description":"","defaultValue":"\'lg\'","required":false,"type":"enum"},{"name":"bg","description":"","defaultValue":"\'white\'","required":false,"type":"string"},{"name":"space","description":"","defaultValue":"\'md\'","required":false,"type":"enum"}]},{"name":"GradientText","description":"","methods":[],"props":[{"name":"colors","description":"array of at least two color values that represent gradient colors","defaultValue":"[\'#8D34FF\', \'#FF006E\']","required":false,"type":"array"},{"name":"coordinates","description":"declares the position that the gradient starts at","defaultValue":"{\\n  start: { x: 0, y: 0 },\\n  end: { x: 1, y: 0 },\\n}","required":false,"type":"object"}]},{"name":"Heading","description":"","methods":[],"props":[{"name":"align","description":"a value of `center`, `left` or `right`","defaultValue":"","required":false,"type":"enum"},{"name":"color","description":"`color` from the theme","defaultValue":"\'black.500\'","required":false,"type":"string"},{"name":"lineHeight","description":"","defaultValue":"","required":false,"type":"union"},{"name":"size","description":"results in smaller or larger Heading text size","defaultValue":"\'md\'","required":false,"type":"enum"},{"name":"weight","description":"a value of `light`, `book`, `medium`, `demi`, `bold`, `heavy` or `extrabold`","defaultValue":"\'demi\'","required":false,"type":"enum"},{"name":"numberOfLines","description":"will shorten text with an ellipsis","defaultValue":"","required":false,"type":"number"}]},{"name":"Icon","description":"","methods":[],"props":[{"name":"name","description":"name of the icon","defaultValue":"","required":false,"type":"string"},{"name":"width","description":"width of the icon","defaultValue":"\'12\'","required":false,"type":"string"},{"name":"height","description":"height of the icon","defaultValue":"\'12\'","required":false,"type":"string"},{"name":"color","description":"color from the theme","defaultValue":"","required":false,"type":"string"}]},{"name":"Link","description":"","methods":[],"props":[{"name":"url","description":"","defaultValue":"","required":false,"type":"string"},{"name":"color","description":"","defaultValue":"\'purple.500\'","required":false,"type":"string"}]},{"name":"Text","description":"","methods":[],"props":[{"name":"align","description":"a value of `center`, `left` or `right`","defaultValue":"","required":false,"type":"enum"},{"name":"color","description":"`color` from the theme","defaultValue":"\'black.500\'","required":false,"type":"string"},{"name":"lineHeight","description":"","defaultValue":"","required":false,"type":"union"},{"name":"size","description":"`fontSizes` from the theme","defaultValue":"\'md\'","required":false,"type":"union"},{"name":"weight","description":"a value of `thin`, `extralight`, `light`, `regular`, `medium`, `semibold` , `bold`, `extrabold` or `black`","defaultValue":"\'medium\'","required":false,"type":"enum"},{"name":"numberOfLines","description":"will shorten text with an ellipsis","defaultValue":"","required":false,"type":"number"}]},{"name":"ThemeProvider","description":"","methods":[],"props":[{"name":"children","description":"","defaultValue":"","required":true,"type":"element"}]},{"name":"Button","description":"","methods":[],"props":[{"name":"children","description":"","defaultValue":"","required":false,"type":"node"},{"name":"onPress","description":"","defaultValue":"","required":false,"type":"func"},{"name":"isDisabled","description":"","defaultValue":"","required":false,"type":"bool"},{"name":"isFullWidth","description":"","defaultValue":"true","required":false,"type":"bool"},{"name":"isLoading","description":"","defaultValue":"","required":false,"type":"bool"},{"name":"hasShadow","description":"","defaultValue":"","required":false,"type":"bool"},{"name":"leftIcon","description":"","defaultValue":"","required":false,"type":"element"},{"name":"rightIcon","description":"","defaultValue":"","required":false,"type":"element"},{"name":"size","description":"a value of `lg`, `md`, or `sm`","defaultValue":"","required":false,"type":"enum"},{"name":"colorScheme","description":"a value of `white` or `translucent`","defaultValue":"\'white\'","required":false,"type":"enum"}]},{"name":"ButtonGhost","description":"","methods":[],"props":[{"name":"children","description":"","defaultValue":"","required":false,"type":"string"},{"name":"onPress","description":"","defaultValue":"","required":false,"type":"func"},{"name":"leftIcon","description":"","defaultValue":"","required":false,"type":"node"},{"name":"rightIcon","description":"","defaultValue":"","required":false,"type":"node"},{"name":"isDisabled","description":"","defaultValue":"","required":false,"type":"bool"}]},{"name":"ButtonIcon","description":"","methods":[],"props":[{"name":"icon","description":"name of the icon","defaultValue":"\'LeftArrow\'","required":false,"type":"string"},{"name":"size","description":"a value of `lg`, `md`, or `sm`","defaultValue":"\'lg\'","required":false,"type":"enum"},{"name":"onPress","description":"","defaultValue":"","required":false,"type":"func"},{"name":"isRounded","description":"","defaultValue":"","required":false,"type":"bool"},{"name":"isDisabled","description":"","defaultValue":"","required":false,"type":"bool"}]},{"name":"ButtonPrimary","description":"","methods":[],"props":[{"name":"children","description":"","defaultValue":"","required":false,"type":"node"},{"name":"onPress","description":"","defaultValue":"","required":false,"type":"func"},{"name":"isDisabled","description":"","defaultValue":"","required":false,"type":"bool"},{"name":"isFullWidth","description":"","defaultValue":"true","required":false,"type":"bool"},{"name":"isLoading","description":"","defaultValue":"","required":false,"type":"bool"},{"name":"hasShadow","description":"","defaultValue":"","required":false,"type":"bool"},{"name":"leftIcon","description":"","defaultValue":"","required":false,"type":"element"},{"name":"rightIcon","description":"","defaultValue":"","required":false,"type":"element"},{"name":"size","description":"a value of `lg`, `md`, or `sm`","defaultValue":"","required":false,"type":"enum"},{"name":"colorScheme","description":"a value of `purple`, `gold`, `danger`, `success`","defaultValue":"\'purple\'","required":false,"type":"enum"}]},{"name":"Modal","description":"","methods":[],"props":[{"name":"isOpen","description":"Set whether or not the modal is shown","defaultValue":"false","required":false,"type":"bool"},{"name":"onClose","description":"A user-provided function that should close the modal","defaultValue":"","required":false,"type":"func"}]},{"name":"Numpad","description":"","methods":[],"props":[{"name":"onPress","description":"","defaultValue":"() => {}","required":false,"type":"func"},{"name":"decimal","description":"Renders an additional period button to support decimal input","defaultValue":"true","required":false,"type":"bool"}]},{"name":"OutputPasscode","description":"","methods":[],"props":[{"name":"value","description":"","defaultValue":"","required":false,"type":"string"}]},{"name":"OutputValue","description":"","methods":[],"props":[{"name":"value","description":"","defaultValue":"","required":false,"type":"string"}]},{"name":"Stack","description":"","methods":[],"props":[{"name":"children","description":"","defaultValue":"","required":false,"type":"node"},{"name":"direction","description":"a value of `row`, or `column`","defaultValue":"\'row\'","required":false,"type":"enum"},{"name":"gap","description":"","defaultValue":"","required":false,"type":"string"}]},{"name":"ButtonBase","description":"","methods":[],"props":[{"name":"children","description":"","defaultValue":"","required":false,"type":"node"},{"name":"onPress","description":"","defaultValue":"","required":false,"type":"func"},{"name":"isDisabled","description":"","defaultValue":"","required":false,"type":"bool"},{"name":"isFullWidth","description":"","defaultValue":"","required":false,"type":"bool"},{"name":"isLoading","description":"","defaultValue":"","required":false,"type":"bool"},{"name":"hasShadow","description":"","defaultValue":"","required":false,"type":"bool"},{"name":"borderRadius","defaultValue":"\'2xl\'","required":false},{"name":"size","defaultValue":"defaultSizeProp","required":false}]},{"name":"ButtonBase.Content","description":"","methods":[],"props":[{"name":"size","description":"","defaultValue":"defaultSizeProp","required":false,"type":"enum"},{"name":"isLoading","description":"","defaultValue":"","required":false,"type":"bool"},{"name":"leftIcon","description":"","defaultValue":"","required":false,"type":"object"},{"name":"rightIcon","description":"","defaultValue":"","required":false,"type":"object"}]}]'),l=function(e){var t=e.of,r=void 0===t?"":t,s=a.find((function(e){return e.name===r}));return s?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h3",{children:s.name}),s.props.length>0?(0,n.jsxs)("table",{className:"block w-full overflow-x-auto",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{align:"left",children:"Prop"}),(0,n.jsx)("th",{align:"left",children:"Type"}),(0,n.jsx)("th",{align:"left",children:"Default"}),(0,n.jsx)("th",{align:"left",children:"Description"})]})}),(0,n.jsx)("tbody",{children:s.props.map((function(e){return(0,n.jsxs)("tr",{children:[(0,n.jsxs)("td",{className:"whitespace-nowrap",children:[(0,n.jsx)("code",{children:e.name})," ",e.required?(0,n.jsx)("span",{className:"align-text-top",children:"Required"}):null]}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:e.type})}),(0,n.jsx)("td",{children:e.defaultValue?(0,n.jsx)("code",{children:e.defaultValue}):"\u2013"}),(0,n.jsx)("td",{children:e.description})]},e.name)}))})]}):(0,n.jsx)("p",{children:"No props"})]}):(console.error("Could not find component ".concat(r)),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h3",{children:r}),(0,n.jsx)(i,{children:"Component not found"})]}))}},250:function(e,t,r){"use strict";var n=r(5893),s=r(3454).env.BASE_PATH||"";t.Z={projectLink:"https://github.com/millionscard/cash",docsRepositoryBase:"https://github.com/millionscard/cash/blob/main/docs",titleSuffix:" \u2013 Cash",nextLinks:!0,prevLinks:!0,search:!0,customSearch:null,darkMode:!0,floatTOC:!0,footer:!0,footerText:null,footerEditLink:"Edit this page on GitHub",logo:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",fill:"none",viewBox:"0 0 43 43",children:[(0,n.jsx)("g",{fill:"currentColor",clipPath:"url(#clip0)",children:(0,n.jsx)("path",{fillRule:"evenodd",d:"M25.487 5.04L21.378.12 17.27 5.04l-5.902-2.428-1.375 6.286-6.344.62 1.676 6.21-5.332 3.526 4.341 4.712-3.098 5.625 6.013 2.135-.156 6.435 6.307-.931L16.223 43l5.155-3.784L26.534 43l2.824-5.77 6.306.93-.155-6.434 6.013-2.135-3.099-5.625 4.341-4.712-5.332-3.526 1.676-6.21-6.344-.62-1.374-6.286-5.903 2.429zm-2.363 6.929l.761-2.869 2.33.63-.762 2.869c.837.288 1.515.717 2.154 1.29.681.645 1.177 1.302 1.536 2.014l-2.514 1.902c-.763-1.713-2.032-2.21-2.571-2.356-.597-.161-1.387-.283-2.114.166a1.923 1.923 0 0 0-.898 1.202c-.152.574-.031 1.037.381 1.548.272.35.666.703 2.017 1.806.157.13.32.26.484.392.882.708 1.833 1.47 2.435 2.489.764 1.252.87 2.572.505 3.948-.487 1.836-1.657 3.149-2.838 3.813-1.08.63-2.397.889-3.623.803l-.852 3.212-2.33-.63.838-3.155a8.224 8.224 0 0 1-3.257-2.296 7.887 7.887 0 0 1-1.518-2.654l2.716-1.633c.225.645.652 1.56 1.163 2.16.594.744 1.349 1.225 2.371 1.502.739.2 1.572.272 2.357-.162.612-.357 1.014-.955 1.182-1.586.19-.717-.014-1.325-.235-1.754-.221-.429-1.396-1.393-1.748-1.672-.76-.575-2.366-1.87-3.192-3.231-.68-1.107-.863-2.14-.46-3.66.335-1.262 1.024-2.367 2.207-3.153a5.794 5.794 0 0 1 3.475-.935z",clipRule:"evenodd"})}),(0,n.jsx)("defs",{children:(0,n.jsx)("clipPath",{id:"clip0",children:(0,n.jsx)("path",{fill:"#fff",d:"M0 0h152v43H0z"})})})]}),(0,n.jsx)("span",{className:"mx-2 font-extrabold select-none",children:"Cash"})]}),head:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,n.jsx)("link",{rel:"icon",type:"image/svg+xml",href:"".concat(s,"/favicon.svg")})]})}},8597:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return f}});var n=r(5893),s=r(2503),o=r(3805),i=r(250),a=r(1151),l=r(2966);function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){d(e,t,r[t])}))}return e}var u=[{name:"components",children:[{name:"ActivityIndicator",route:"/components/ActivityIndicator",frontMatter:{title:"ActivityIndicator",description:null,source:"https://github.com/millionscard/cash/blob/main/src/ActivityIndicator.js",status:"Alpha"}},{name:"Box",route:"/components/Box",frontMatter:{title:"Box",description:null,source:"https://github.com/millionscard/cash/blob/main/src/Box.js",status:"Alpha"}},{name:"Buttons",route:"/components/Buttons",frontMatter:{title:"Buttons",description:null,source:"https://github.com/millionscard/cash/blob/main/src/Button",status:"Alpha"}},{name:"Card",route:"/components/Card",frontMatter:{title:"Card",description:null,source:"https://github.com/millionscard/cash/blob/main/src/Card.js",status:"Alpha"}},{name:"GradientText",route:"/components/GradientText",frontMatter:{title:"GradientText",description:null,source:"https://github.com/millionscard/cash/blob/main/src/GradientText.js",status:"Alpha"}},{name:"Icon",route:"/components/Icon",frontMatter:{title:"Icon",description:null,source:"https://github.com/millionscard/cash/blob/main/src/Icon.js",status:"Alpha"}},{name:"Link",route:"/components/Link",frontMatter:{title:"Link",description:null,source:"https://github.com/millionscard/cash/blob/main/src/Link.js",status:"Alpha"}},{name:"Modal",route:"/components/Modal",frontMatter:{title:"Modal",description:null,source:"https://github.com/millionscard/cash/blob/main/src/Modal.js",status:"Alpha"}},{name:"Numpad",route:"/components/Numpad",frontMatter:{title:"Numpad",description:null,source:"https://github.com/millionscard/cash/blob/main/src/Numpad",status:"Alpha"}},{name:"Stack",route:"/components/Stack",frontMatter:{title:"Stack",description:null,source:"https://github.com/millionscard/cash/blob/main/src/Stack",status:"Alpha"}},{name:"typography",children:[{name:"Heading",route:"/components/typography/Heading",frontMatter:{title:"Heading",description:null,source:"https://github.com/millionscard/cash/blob/main/src/Heading.js",status:"Alpha"}},{name:"Text",route:"/components/typography/Text",frontMatter:{title:"Text",description:null,source:"https://github.com/millionscard/cash/blob/main/src/Text.js",status:"Alpha"}}],route:"/components/typography"}],route:"/components"},{name:"getting-started",route:"/getting-started",frontMatter:{title:"Getting started"}},{name:"index",route:"/",frontMatter:{title:"Getting started"}},{name:"meta.json",meta:{index:"Introduction","getting-started":"Getting Started",components:"Components"}},{name:"theming",children:[{name:"reference",route:"/theming/reference",frontMatter:{title:"Theme reference"}}],route:"/theming"}];globalThis.__nextra_internal__={pageMap:u,route:"/components/Modal"};var p=(0,n.jsx)(m,{}),h=(0,o.withSSG)((0,s.Z)({filename:"Modal.mdx",route:"/components/Modal",meta:{title:"Modal",description:null,source:"https://github.com/millionscard/cash/blob/main/src/Modal.js",status:"Alpha"},pageMap:u,titleText:void 0,headings:[{type:"heading",depth:2,children:[{type:"text",value:"Props",position:{start:{line:18,column:4,offset:363},end:{line:18,column:9,offset:368}}}],position:{start:{line:18,column:1,offset:360},end:{line:18,column:9,offset:368}},value:"Props"}],hasH1:!1,timestamp:1650488893e3},i.Z));function m(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=function(){var t=Object.assign({div:"div",pre:"pre",code:"code",span:"span",h2:"h2"},(0,a.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.div,{"data-rehype-pretty-code-fragment":"","data-nextra-code":"",children:(0,n.jsx)(t.pre,{children:(0,n.jsxs)(t.code,{"data-language":"jsx","data-theme":"default",children:[(0,n.jsxs)(t.span,{className:"line",children:[(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" ["}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"isModalOpen"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"setModalOpen"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"] "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"useState"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"false"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,n.jsxs)(t.span,{className:"line",children:[(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"toggleModal"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" () "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,n.jsxs)(t.span,{className:"line",children:[(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"setModalOpen"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"!"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"isModalOpen);"})]}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,n.jsx)(t.span,{className:"line"}),"\n",(0,n.jsxs)(t.span,{className:"line",children:[(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"Modal"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"isOpen"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"{"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"true"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"} "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"onClose"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"{toggleModal}>"})]}),"\n",(0,n.jsxs)(t.span,{className:"line",children:[(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  <"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"Heading"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:">Title</"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"Heading"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,n.jsxs)(t.span,{className:"line",children:[(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  <"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"ButtonOutline"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"size"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"md"'}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"onPress"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"{toggleModal} "}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-function)"},children:"isFullWidth"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,n.jsx)(t.span,{className:"line",children:(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"    Close modal"})}),"\n",(0,n.jsxs)(t.span,{className:"line",children:[(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"  </"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"ButtonOutline"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,n.jsxs)(t.span,{className:"line",children:[(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:"</"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-token-constant)"},children:"Modal"}),(0,n.jsx)(t.span,{style:{color:"var(--shiki-color-text)"},children:">;"})]})]})})}),"\n",(0,n.jsx)(t.h2,{id:"props",children:"Props"}),"\n",(0,n.jsx)(l.Z,{of:"Modal"})]})},r=Object.assign({},(0,a.ah)(),e.components),s=r.wrapper;return s?(0,n.jsx)(s,c({},e,{children:(0,n.jsx)(t,{})})):t()}function f(e){return(0,n.jsx)(h,c({},e,{children:p}))}f.getLayout=h.withLayout}},function(e){e.O(0,[984,774,888,179],(function(){return t=1093,e(e.s=t);var t}));var t=e.O();_N_E=t}]);