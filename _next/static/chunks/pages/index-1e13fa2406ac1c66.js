(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(6823)}])},7590:function(e,t,n){"use strict";n.r(t),n.d(t,{getLink:function(){return s},default:function(){return i}});var a=n(5893),r=(0,n(1752).default)().publicRuntimeConfig,s=function(e){return"".concat(r.pagePrefix).concat(e).concat(r.pageSuffix)};function i(){return(0,a.jsx)(a.Fragment,{})}},385:function(e,t,n){"use strict";n.r(t),n.d(t,{tagsData:function(){return r},postsData:function(){return s},default:function(){return i}});var a=n(5893),r=[{Slug:"coding",Title:"Coding",Color:"black"},{Slug:"experience",Title:"Experience",Color:"indigo-500"}],s=[{Id:0,Slug:"my-first-post",Title:"My First Post",Text:"People talk loud when they wanna act smart, right?",Tags:["experience"]},{Id:1,Slug:"another-post",Title:"Another Post",Text:"It's not just a boulder... It's a rock!",Tags:["experience"]},{Id:2,Slug:"data-part-1",Title:"Data 1",Text:"People talk loud when they wanna act smart, right?",Tags:["coding","experience"]},{Id:3,Slug:"data-part-2",Title:"Data 2",Text:"People talk loud when they wanna act smart, right?",Tags:["coding"]},{Id:4,Slug:"data-part-3",Title:"Data 3",Text:"People talk loud when they wanna act smart, right?",Tags:["coding"]}];function i(){return(0,a.jsx)("article",{})}},6823:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var a=n(5893),r=n(9008),s=n(214),i=n.n(s),c=n(385),l=n(1664),o=n(7590),d=n(7294),h=n(425),u=n(4405);const x=d.createContext({});function g(e){const t=d.useContext(x);return d.useMemo((()=>"function"===typeof e?e(t):{...t,...e}),[t,e])}const m={};function p({components:e,children:t,disableParentContext:n}){let a=g(e);return n&&(a=e||m),d.createElement(x.Provider,{value:a},t)}var f=function(){var e=(0,h.F)(),t=e.theme,n=e.setTheme,s=(0,d.useState)("dark"===t),x=s[0],g=s[1];(0,d.useEffect)((function(){g("dark"===t)}),[t]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"dark:bg-indigo-600 bg-white scroll-smooth text-black",children:[(0,a.jsx)(u.Z,{onChange:function(){console.log(x,t),n("dark"===t?"light":"dark")},checked:x,size:80}),(0,a.jsxs)(r.default,{children:[(0,a.jsx)("title",{children:"Create Next App"}),(0,a.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,a.jsx)("link",{rel:"icon",href:"./favicon.ico"})]}),(0,a.jsxs)("main",{className:i().main,children:[(0,a.jsxs)("h1",{className:"".concat(i().title," dark:text-white blur-[1px] text-black"),children:["Welcome to ",(0,a.jsx)("a",{href:"https://nextjs.org",className:"dark:text-green-500",children:"Next.js!"})]}),(0,a.jsx)("span",{className:"animate-bounce w-6 h-6 hover:animate-pulse blur-sm hover:blur-none",children:"Scroll below"}),(0,a.jsxs)("p",{className:i().description,children:["Get started by editing"," ",(0,a.jsx)("code",{className:"".concat(i().code," text-black bg-white dark:text-white dark:bg-black"),children:"pages/index.tsx"})]}),(0,a.jsx)(l.default,{href:(0,o.getLink)("/poc/navbar"),children:(0,a.jsx)("a",{children:"POC"})}),(0,a.jsx)(l.default,{href:(0,o.getLink)("/mui/dark"),children:(0,a.jsx)("a",{children:"MUI"})}),(0,a.jsxs)("div",{className:"bg-white dark:bg-gray-900 rounded-lg px-6 py-8 ring-1 ring-gray-900/5 shadow-xl",children:[(0,a.jsx)("div",{children:(0,a.jsx)("span",{className:"inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg",children:(0,a.jsx)("svg",{className:"h-6 w-6 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"})})}),(0,a.jsx)("h3",{className:"text-gray-900 dark:text-white mt-5 text-base font-medium tracking-tight",children:"Writes Upside-Down"}),(0,a.jsx)("p",{className:"text-gray-500 dark:text-gray-400 mt-2 text-sm",children:"The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space."})]}),(0,a.jsx)(l.default,{href:(0,o.getLink)("/blog/page/1"),children:(0,a.jsx)("a",{className:"p-3 m-3",children:"Pagination"})}),(0,a.jsx)("ol",{className:"content-left col-span-6",children:c.postsData.map((function(e){return(0,a.jsx)("li",{className:"bg-black text-fuchsia-200 m-3 p-3",children:(0,a.jsx)(l.default,{href:(0,o.getLink)("/blog/post/".concat(e.Slug)),children:(0,a.jsx)("a",{children:e.Title})})},"post_".concat(e.Id))}))}),(0,a.jsx)("ol",{className:"align-right col-span-6",children:c.tagsData.map((function(e){return(0,a.jsx)("li",{className:"bg-green-500 align-right m-3 p-3 text-white ",children:(0,a.jsx)(l.default,{href:(0,o.getLink)("/blog/tag/".concat(e.Slug,"/page/1")),children:(0,a.jsx)("a",{children:e.Title})})},"tag_".concat(e.Slug))}))}),(0,a.jsxs)("div",{className:i().grid,children:[(0,a.jsxs)("a",{href:"https://nextjs.org/docs",className:i().card,children:[(0,a.jsx)("h2",{children:"Documentation \u2192"}),(0,a.jsx)("p",{children:"Find in-depth information about Next.js features and API."})]}),(0,a.jsxs)("a",{href:"https://nextjs.org/learn",className:i().card,children:[(0,a.jsx)("h2",{children:"Learn \u2192"}),(0,a.jsx)("p",{children:"Learn about Next.js in an interactive course with quizzes!"})]}),(0,a.jsxs)("a",{href:"https://github.com/vercel/next.js/tree/master/examples",className:i().card,children:[(0,a.jsx)("h2",{children:"Examples \u2192"}),(0,a.jsx)("p",{children:"Discover and deploy boilerplate example Next.js projects."})]}),(0,a.jsxs)("a",{href:"https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",className:i().card,children:[(0,a.jsx)("h2",{children:"Deploy \u2192"}),(0,a.jsx)("p",{children:"Instantly deploy your Next.js site to a public URL with Vercel."})]})]})]}),(0,a.jsx)("footer",{className:i().footer,children:(0,a.jsxs)("a",{href:"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:["Powered by"," ",(0,a.jsx)("span",{className:i().logo,children:(0,a.jsx)("img",{src:"./vercel.svg",alt:"Vercel Logo",width:72,height:16})})]})})]}),(0,a.jsx)(p,{children:(0,a.jsx)("main",{})})]})}},214:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb"}}},function(e){e.O(0,[296,541,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);