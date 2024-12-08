"use strict";(self.webpackChunkokai_docs=self.webpackChunkokai_docs||[]).push([[7024],{41075:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"Discord/development/coders/chat_2024-11-13","title":"\ud83d\udcbb-coders 2024-11-13","description":"Summary","source":"@site/community/Discord/development/coders/chat_2024-11-13.md","sourceDirName":"Discord/development/coders","slug":"/Discord/development/coders/chat_2024-11-13","permalink":"/okai/community/Discord/development/coders/chat_2024-11-13","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"\ud83d\udcbb-coders 2024-11-12","permalink":"/okai/community/Discord/development/coders/chat_2024-11-12"},"next":{"title":"\ud83d\udcbb-coders 2024-11-14","permalink":"/okai/community/Discord/development/coders/chat_2024-11-14"}}');var i=r(74848),s=r(28453);const o={},d="\ud83d\udcbb-coders 2024-11-13",l={},a=[{value:"Summary",id:"summary",level:2},{value:"FAQ",id:"faq",level:2},{value:"Who Helped Who",id:"who-helped-who",level:2},{value:"Action Items",id:"action-items",level:2}];function c(e){const n={h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"-coders-2024-11-13",children:"\ud83d\udcbb-coders 2024-11-13"})}),"\n",(0,i.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,i.jsx)(n.p,{children:"During the discussion, SMA encountered a dependency error with the Anthropic model in the default character typescript file related to Google Vertex integration. The team sought assistance on locating the specific file within the repository for manual correction. Meanwhile, v1xingyue reported an issue when interacting with the application; it returned another error due to insufficient parameter values provided during a database query using the adapter-sqlite package. H.D.P suggested that CLAUDE_VERTEX might be the modelProviderName needed for resolution. Additionally, standard and Hackor shared links to GitHub repositories containing scripts and files relevant to their projects."}),"\n",(0,i.jsx)(n.h2,{id:"faq",children:"FAQ"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"What is the issue with using Google Vertex as an endpoint for Anthropic models?"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"H.D.P answered: The dependency error occurs in the default character typescript file related to the Google vertex part, which needs fixing by locating the specific file within the repository and making necessary adjustments."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"How can I resolve the RangeError when using adapter-sqlite for Eliza's MemoryManager?"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"H.D.P answered: The error is due to insufficient parameter values provided in the SQL query. To fix this, ensure that you are passing the correct number of parameters as per your SQL statement and data requirements."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"who-helped-who",children:"Who Helped Who"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"H.D.P helped v1xingyue with a dependency error by identifying CLAUDE_VERTEX as the modelProviderName to use for Anthropic models, which could potentially resolve the issue related to Google Vertex in their setup."}),"\n",(0,i.jsx)(n.li,{children:'ZO offered support and encouragement to SMA by acknowledging his efforts ("Okay brother") and prompting him to share information once available ("Tag when you drop the info"), although this does not directly solve a technical problem but provides moral support during troubleshooting.'}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"action-items",children:"Action Items"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Technical Tasks"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Fix the dependency error with Google vertex in Anthropic model's character typescript file (mentioned by SMA)"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Resolve RangeError: Too few parameter values provided when using adapter-sqlite (reported by v1xingyue)"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Documentation Needs"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"No specific documentation needs were mentioned."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Feature Requests"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"No specific feature requests were mentioned."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Community Tasks"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Tag updates on progress for the Anthropic model setup (requested by ZO)"}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>d});var t=r(96540);const i={},s=t.createContext(i);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);