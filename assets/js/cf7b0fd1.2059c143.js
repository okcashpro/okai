"use strict";(self.webpackChunkokai_docs=self.webpackChunkokai_docs||[]).push([[45464],{82223:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"Discord/development/coders/chat_2024-10-29","title":"\ud83d\udcbb-coders 2024-10-29","description":"Summary","source":"@site/community/Discord/development/coders/chat_2024-10-29.md","sourceDirName":"Discord/development/coders","slug":"/Discord/development/coders/chat_2024-10-29","permalink":"/okai/community/Discord/development/coders/chat_2024-10-29","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"\ud83d\udcbb-coders 2024-10-28","permalink":"/okai/community/Discord/development/coders/chat_2024-10-28"},"next":{"title":"\ud83d\udcbb-coders 2024-10-30","permalink":"/okai/community/Discord/development/coders/chat_2024-10-30"}}');var o=t(74848),s=t(28453);const r={},a="\ud83d\udcbb-coders 2024-10-29",l={},d=[{value:"Summary",id:"summary",level:2},{value:"FAQ",id:"faq",level:2},{value:"Who Helped Who",id:"who-helped-who",level:2},{value:"Action Items",id:"action-items",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"-coders-2024-10-29",children:"\ud83d\udcbb-coders 2024-10-29"})}),"\n",(0,o.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,o.jsx)(n.p,{children:"In the discussion, Shaw confirmed that full autonomy would be integrated into OKai's GitHub as an option following a meeting with an enthusiastic team at TEE Hackerhouse. They are set to collaborate immediately on this initiative. Meanwhile, SotoAlt | WAWE reported issues with the agent using an outdated personality for Twitter and Discord interactions despite deleting the old one; they planned to clone the repo and start from scratch once back at their desk. Additionally, SotoAlt mentioned troubleshooting problems with OpenAI API request formatting by copying the exact format from OpenAI's documentation after encountering a 400 error bad request."}),"\n",(0,o.jsx)(n.h2,{id:"faq",children:"FAQ"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:'What is the cause of the warning "Registering ts-node/esm" when running a Node.js application?'}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["Chad: This warning typically occurs due to an outdated version of ts-node or its dependencies, which might not be compatible with your current setup. To resolve this issue, you can try updating ts-node and related packages using ",(0,o.jsx)(n.code,{children:"npm update"})," or explicitly installing the latest versions. Additionally, running ",(0,o.jsx)(n.code,{children:"node --trace-warnings ..."})," will help identify where exactly in your codebase the warning is being triggered, allowing for more targeted troubleshooting."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"How to resolve issues with an agent generating text from an old personality when using a new one?"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Shaw: This issue might be related to caching or improperly loaded dependencies like llama.cpp and onnxruntime. To address this problem, you can try running ",(0,o.jsx)(n.code,{children:"npm run build"})," to check for any errors during the build process that could indicate issues with these dependencies. Additionally, cloning the repository from scratch may help ensure a clean environment without residual files or configurations causing conflicts between old and new personalities."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"What steps should be taken when encountering a 400 error (Bad Request) while using an API?"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"SotoAlt | WAWE: A 400 Bad Request error typically indicates that the server cannot process your request due to invalid syntax or missing parameters. In this case, it seems like there might be issues with the API request formatting in the repository you're using. To resolve this issue, make sure you are following the correct format as specified by OpenAI documentation and update any outdated code snippets that may not align with current standards."}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"How to troubleshoot monitor compatibility issues when dualbooting between operating systems?"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"whobody: Monitor compatibility issues during a dual boot setup can be challenging, especially if the monitors were working fine previously. To address this issue, you might want to check for any updates or drivers that need to be installed on both operating systems and ensure they are compatible with your monitor's specifications. Additionally, consulting the manufacturer's documentation or support channels can provide insights into known compatibility issues and potential solutions."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"who-helped-who",children:"Who Helped Who"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"SotoAlt | WAWE helped themselves with an issue related to the agent using an old personality for Twitter replies and Discord by suggesting checking npm run build for errors, possibly in llama.cpp dependency or onnxruntime, and considering cloning the repo to start from scratch."}),"\n",(0,o.jsx)(n.li,{children:"whobody was assisted by SotoAlt | WAWE with troubleshooting a 400 error bad request issue related to OpenAI API requests by pointing out that the repository might be using an old format for the requests, which needed copying from OpenAI's documentation."}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"action-items",children:"Action Items"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Technical Tasks"}),"\n",(0,o.jsx)(n.li,{children:"Investigate and resolve the issue with the agent using an old personality in Twt replies and Discord (mentioned by SotoAlt | WAWE)"}),"\n",(0,o.jsx)(n.li,{children:"Check npm run build for errors related to llama.cpp dependency or onnxruntime (suggested by shaw)"}),"\n",(0,o.jsxs)(n.li,{children:["Documentation Needs","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Update the repository's API request formatting documentation to match the latest OpenAI docs (requested by SotoAlt | WAWE)"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["Feature Requests","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Integrate full autonomy as an option in the OKai GitHub project (suggested by Utility Chad)"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["Community Tasks","\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:'Collaborate immediately on integrating full autonomy into the OKai GitHub project (led by shaw, with a meeting held at TEE hackerhouse involving an "awesome crew")'}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var i=t(96540);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);