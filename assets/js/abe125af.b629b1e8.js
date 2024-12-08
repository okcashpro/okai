"use strict";(self.webpackChunkokai_docs=self.webpackChunkokai_docs||[]).push([[21562],{44428:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"Discord/development/dev-contributors/chat_2024-11-21","title":"dev-contributors 2024-11-21","description":"Summary","source":"@site/community/Discord/development/dev-contributors/chat_2024-11-21.md","sourceDirName":"Discord/development/dev-contributors","slug":"/Discord/development/dev-contributors/chat_2024-11-21","permalink":"/okai/community/Discord/development/dev-contributors/chat_2024-11-21","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"dev-contributors 2024-11-20","permalink":"/okai/community/Discord/development/dev-contributors/chat_2024-11-20"},"next":{"title":"dev-contributors 2024-11-22","permalink":"/okai/community/Discord/development/dev-contributors/chat_2024-11-22"}}');var r=n(74848),s=n(28453);const o={},a="dev-contributors 2024-11-21",d={},c=[{value:"Summary",id:"summary",level:2},{value:"FAQ",id:"faq",level:2},{value:"Who Helped Who",id:"who-helped-who",level:2},{value:"Action Items",id:"action-items",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"dev-contributors-2024-11-21",children:"dev-contributors 2024-11-21"})}),"\n",(0,r.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,r.jsxs)(t.p,{children:["During the recent Eliza project meeting, contributors Barry Drew, massivefermion, Piotr G., and EdwardLazz engaged in a focused discussion on enhancing bot intelligence for GitHub projects. They explored strategies such as implementing GitHub webhook integration to capture real-time repository activities like issues, pull requests, and commits. The team also considered the importance of creating a knowledge base ingestion script using ",(0,r.jsx)(t.code,{children:"scripts/knowledge2character.js"})," to transform these events into structured data for EdwardLazz's learning process."]}),"\n",(0,r.jsx)(t.p,{children:"The conversation further delved into configuring the bot with this new context-rich information, emphasizing type-safe parsing in TypeScript and consistent type management through src/types/plugin.ts. Contributors agreed on training EdwardLazz to recognize project-specific terminology and build a comprehensive understanding of ongoing issues and discussions within the GitHub repository."}),"\n",(0,r.jsx)(t.p,{children:"Additionally, they discussed creating a scoring mechanism for relevance, ensuring that the bot could prioritize information based on its importance in relation to the project's current needs. The meeting concluded with an agreement to welcome new contributors by crafting personalized welcome messages and encouraging their active participation within the Eliza ecosystem."}),"\n",(0,r.jsx)(t.h2,{id:"faq",children:"FAQ"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"How can I make EdwardLazz smarter about our GitHub project?"}),"\n",(0,r.jsxs)(t.li,{children:["EdwardLazz: To enhance the bot's awareness of your GitHub project, implement GitHub webhook integration in its config, set up a knowledge base ingestion script to pull recent issues, PRs, and repository metadata, and use ",(0,r.jsx)(t.code,{children:"knowledge2character.js"})," to transform this data into structured knowledge."]}),"\n",(0,r.jsxs)(t.li,{children:["What is the purpose of the ",(0,r.jsx)(t.code,{children:"tweets2character.js"})," script?","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["EdwardLazz: The ",(0,r.jsx)(t.code,{children:"tweets2character.js"})," script generates a knowledge JSON file that can be used for various purposes in character or contributor data processing, such as generating structured character profiles, importing into data analysis tools, and providing contributor metadata within the Eliza project ecosystem."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["How do I welcome new GitHub contributors to EdwardLazz?","\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Odilitime: You should consider welcoming these new contributors with a good message for them. This can help foster a positive community atmosphere and encourage further contributions."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"who-helped-who",children:"Who Helped Who"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"EdwardLazz helped Odilitime with enhancing their Eliza bot, EdwardLazz's GitHub project awareness by outlining a detailed strategy involving webhook integration, knowledge base ingestion, and context processing. The assistance provided included step-by-step guidance on implementing these features to make the bot smarter about the GitHub project."}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Jin helped Odilitime with addressing an issue related to voice fixes in their AI profile by providing a link to the updated profiles page. This action was successful as it directed Odilitime to the relevant information needed for resolving the problem they were facing."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"action-items",children:"Action Items"}),"\n",(0,r.jsx)(t.p,{children:"Technical Tasks:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Implement GitHub webhook integration in EdwardLazz's config (mentioned by Odilitime)"}),"\n",(0,r.jsx)(t.li,{children:"Set up a knowledge base ingestion script that pulls recent issues, PRs, and repository metadata (suggested by EdwardLazz)"}),"\n",(0,r.jsxs)(t.li,{children:["Use ",(0,r.jsx)(t.code,{children:"knowledge2character.js"})," to transform GitHub data into structured knowledge for the Eliza bot ecosystem (recommended by EdwardLazz)"]}),"\n",(0,r.jsx)(t.li,{children:"Update EdwardLazz's knowledge base with extracted GitHub context using TypeScript and src/types/plugin.ts for consistent type management (outlined by EdwardLazz)"}),"\n",(0,r.jsx)(t.li,{children:"Train EdwardLazz to recognize project-specific terminology, build context understanding of ongoing issues/discussions, and create a scoring mechanism for relevance (proposed by EdwardLazz)"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Documentation Needs:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Provide a code snippet demonstrating the webhook parsing logic in TypeScript (requested by Odilitime)"}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Feature Requests:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Welcome message creation for new contributors to be added by EdwardLazz (mentioned by Odilitime)"}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var i=n(96540);const r={},s=i.createContext(r);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);