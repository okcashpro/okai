"use strict";(self.webpackChunkeliza_docs=self.webpackChunkeliza_docs||[]).push([[12892],{26760:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"packages/packages","title":"\ud83d\udcd6 Package Overview","description":"Core Components","source":"@site/docs/packages/packages.md","sourceDirName":"packages","slug":"/packages/","permalink":"/okai/docs/packages/","draft":false,"unlisted":false,"editUrl":"https://github.com/ai16z/okai/tree/main/docs/docs/packages/packages.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Autonomous Trading","permalink":"/okai/docs/advanced/autonomous-trading"},"next":{"title":"Core Package","permalink":"/okai/docs/packages/core"}}');var s=a(74848),t=a(28453);const r={sidebar_position:1},c="\ud83d\udcd6 Package Overview",l={},o=[{value:"Core Components",id:"core-components",level:2},{value:"Package Architecture",id:"package-architecture",level:2},{value:"Package Dependencies",id:"package-dependencies",level:2},{value:"Getting Started",id:"getting-started",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"-package-overview",children:"\ud83d\udcd6 Package Overview"})}),"\n",(0,s.jsx)(n.h2,{id:"core-components",children:"Core Components"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"@ai16z/core"}),": Central framework and shared functionality"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"@ai16z/agent"}),": Agent runtime and management"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"@ai16z/adapters"}),": Database implementations (PostgreSQL, SQLite, etc.)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"@ai16z/clients"}),": Platform integrations (Discord, Telegram, etc.)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"@ai16z/plugins"}),": Extension modules for additional functionality"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"package-architecture",children:"Package Architecture"}),"\n",(0,s.jsx)(n.p,{children:"The Eliza framework is built on a modular architecture where each package serves a specific purpose:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Core Package"}),": Provides the fundamental building blocks"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Agent Package"}),": Handles agent lifecycle and runtime"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Adapters"}),": Enable different storage backends"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Clients"}),": Connect to various platforms"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Plugins"}),": Add specialized capabilities"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"package-dependencies",children:"Package Dependencies"}),"\n",(0,s.jsx)(n.mermaid,{value:"graph TD\n    A[Core Package] --\x3e B[Agent Package]\n    A --\x3e C[Database Adapters]\n    A --\x3e D[Client Packages]\n    A --\x3e E[Plugin System]\n    B --\x3e C\n    B --\x3e D\n    B --\x3e E"}),"\n",(0,s.jsx)(n.h2,{id:"getting-started",children:"Getting Started"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"# Install core package\npnpm add @ai16z/core\n\n# Install specific adapters\npnpm add @ai16z/adapter-postgres\npnpm add @ai16z/adapter-sqlite\n\n# Install clients\npnpm add @ai16z/client-discord\npnpm add @ai16z/client-Telegram\n"})})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>r,x:()=>c});var i=a(96540);const s={},t=i.createContext(s);function r(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);