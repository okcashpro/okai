"use strict";(self.webpackChunkokai_docs=self.webpackChunkokai_docs||[]).push([[72151],{65071:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"Discord/development/dev-vc/chat_2024-11-16","title":"dev-vc 2024-11-16","description":"Summary","source":"@site/community/Discord/development/dev-vc/chat_2024-11-16.md","sourceDirName":"Discord/development/dev-vc","slug":"/Discord/development/dev-vc/chat_2024-11-16","permalink":"/okai/community/Discord/development/dev-vc/chat_2024-11-16","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"dev-vc 2024-11-15","permalink":"/okai/community/Discord/development/dev-vc/chat_2024-11-15"},"next":{"title":"dev-vc 2024-11-17","permalink":"/okai/community/Discord/development/dev-vc/chat_2024-11-17"}}');var s=n(74848),r=n(28453);const o={},a="dev-vc 2024-11-16",c={},l=[{value:"Summary",id:"summary",level:2},{value:"FAQ",id:"faq",level:2},{value:"Who Helped Who",id:"who-helped-who",level:2},{value:"Action Items",id:"action-items",level:2}];function d(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"dev-vc-2024-11-16",children:"dev-vc 2024-11-16"})}),"\n",(0,s.jsx)(i.h2,{id:"summary",children:"Summary"}),"\n",(0,s.jsx)(i.p,{children:"In the Discord chat, Jin encountered technical issues with their Twitter client startup due to missing tweet cache files and an error during login attempts using agent-twitter-client. The server failed to start because of a recursive run failure in ai16z/agent@0.0.1. Meanwhile, Yikesawjeez shared links related to the Qwen2.5 model by mlx-community, creator fund information from Jin's repository, and resources on local development for creating new plugins with Eliza. Additionally, they discussed neurite network developments and a GitHub project called satellitecomponent/neurite."}),"\n",(0,s.jsx)(i.h2,{id:"faq",children:"FAQ"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"What is the issue with the Twitter client not finding the tweet cache file?"}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Jin: The Tweet Cache File Path points to a non-existent or inaccessible file (/home/jin/repo/okai/packages/client-twitter/dist/tweetcache/latest_checked_tweet_id.txt). This issue might be resolved by ensuring the correct path is set and that the file exists at that location."}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:'What does the error message "Incorrect. Please try again." mean when trying to log in using Twitter?'}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Jin: The error code 399 indicates an incorrect login attempt, possibly due to invalid credentials or a temporary issue with the authentication process. It is recommended to double-check the provided credentials and retry logging in after some time if it's a temporary problem."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"What could be causing the Node.js application to fail when starting?"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Jin: The error message indicates that there was an issue running ",(0,s.jsx)(i.code,{children:'tsc && node --loader ts-node/esm src/index.ts "--isRoot" "--characters=./characters/degenspartan.character.json"'})," command, which is part of the application's startup process. This could be due to a problem with TypeScript compilation or an issue within the specified script file. To resolve this, check for any syntax errors in the code and ensure that all dependencies are correctly installed."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"How can one create a new plugin using Eliza?"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Jin: The guide on creating a new plugin is available at ",(0,s.jsx)(i.a,{href:"https://ai16z.github.io/okai/docs/guides/local-development/#creating-a-new-plugin",children:"https://ai16z.github.io/okai/docs/guides/local-development/#creating-a-new-plugin"}),". This resource provides step-by-step instructions and best practices for developing plugins within the Eliza framework."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"who-helped-who",children:"Who Helped Who"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Jin helped yikesawjeez with troubleshooting a Twitter client startup issue by providing links to documentation on common issues, suggesting checking for file paths and cache files."}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Yikesawjeez sought assistance from Jin regarding an error encountered while running a Node.js application using the agent-twitter-client package. Jin responded with resources related to community support, creator fund information, local development guides, and links to Neurite Network for potential solutions or further help."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"action-items",children:"Action Items"}),"\n",(0,s.jsx)(i.p,{children:"Technical Tasks:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Resolve the issue with the tweet cache file not being found at ",(0,s.jsx)(i.code,{children:"/home/jin/repo/okai/packages/client-twitter/dist/tweetcache/latest_checked_tweet_id.txt"})," (mentioned by jin)"]}),"\n",(0,s.jsxs)(i.li,{children:['Address the error related to Twitter user authentication, specifically code 399 ("Incorrect. Please try again.") and fix issues in ',(0,s.jsx)(i.code,{children:"file:///home/jin/repo/okai/node_modules/agent-twitter-client/dist/node/esm/index.mjs"})," (mentioned by jin)"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Documentation Needs:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Jin requested documentation on the community creator fund at ",(0,s.jsx)(i.a,{href:"https://ai16z.github.io/okai/docs/community/creator-fund/",children:"https://ai16z.github.io/okai/docs/community/creator-fund/"})," (requested by jin)"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Feature Requests:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Jin suggested creating a new plugin and provided guidance for local development, which could be considered as an indirect feature request to improve the platform's extensibility at ",(0,s.jsx)(i.a,{href:"https://ai16z.github.io/okai/docs/guides/local-development/#creating-a-new-plugin",children:"https://ai16z.github.io/okai/docs/guides/local-development/#creating-a-new-plugin"})," (suggested by jin)"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Community Tasks:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Jin shared a HackMD link for further discussion or collaboration, which could be seen as leading a community task at ",(0,s.jsx)(i.a,{href:"https://hackmd.io/LVAwiU0kTMWzoZETA4AkfQ",children:"https://hackmd.io/LVAwiU0kTMWzoZETA4AkfQ"})," (led by jin)"]}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>o,x:()=>a});var t=n(96540);const s={},r=t.createContext(s);function o(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);