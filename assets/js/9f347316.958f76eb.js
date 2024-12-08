"use strict";(self.webpackChunkokai_docs=self.webpackChunkokai_docs||[]).push([[60512],{39110:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"Streams/11-2024/2024-11-26","title":"a16z AI Agent Dev School #1","description":"Shaw\'s Eliza Deep Dive","source":"@site/community/Streams/11-2024/2024-11-26.md","sourceDirName":"Streams/11-2024","slug":"/Streams/11-2024/2024-11-26","permalink":"/okai/community/Streams/11-2024/2024-11-26","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"sidebar_position":6,"title":"a16z AI Agent Dev School #1","description":"Shaw\'s Eliza Deep Dive"},"sidebar":"defaultSidebar","previous":{"title":"What Did You Get Done This Week? #2","permalink":"/okai/community/Streams/11-2024/2024-11-22"},"next":{"title":"The Delphi Podcast: Crypto x AI Agents","permalink":"/okai/community/Streams/11-2024/2024-11-21"}}');var i=s(74848),a=s(28453);const r={sidebar_position:6,title:"a16z AI Agent Dev School #1",description:"Shaw's Eliza Deep Dive"},o="a16z AI Agent Dev School: Shaw's Eliza Deep Dive",l={},d=[{value:"Timestamps",id:"timestamps",level:2},{value:"Summary",id:"summary",level:2},{value:"Part 1: Development Basics",id:"part-1-development-basics",level:3},{value:"Part 2: Agent Concepts",id:"part-2-agent-concepts",level:3},{value:"General Notes",id:"general-notes",level:3},{value:"Hot Takes",id:"hot-takes",level:2}];function c(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"a16z-ai-agent-dev-school-shaws-okai-deep-dive",children:"a16z AI Agent Dev School: Shaw's Eliza Deep Dive"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["YouTube SD: ",(0,i.jsx)(n.a,{href:"https://www.youtube.com/watch?v=X1aFEOaGcYE",children:"https://www.youtube.com/watch?v=X1aFEOaGcYE"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Transcript is based on the SD version above"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["YouTube HD:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Part 1: ",(0,i.jsx)(n.a,{href:"https://www.youtube.com/watch?v=ArptLpQiKfI",children:"https://www.youtube.com/watch?v=ArptLpQiKfI"})]}),"\n",(0,i.jsxs)(n.li,{children:["Part 2: ",(0,i.jsx)(n.a,{href:"https://www.youtube.com/watch?v=AC3h_KzLARo",children:"https://www.youtube.com/watch?v=AC3h_KzLARo"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Much higher quality, easier to see code. Split into 2 videos and missing a chunk in the middle."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"timestamps",children:"Timestamps"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"0:13:40"})," - ",(0,i.jsx)(n.strong,{children:"JavaScript, Node.js, and the V8 Engine:"})," Origins of JavaScript and how it evolved to run on servers."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"0:17:16"})," - ",(0,i.jsx)(n.strong,{children:"Why TypeScript is Used for Eliza:"})," Explanation of type systems and the benefits of using TypeScript over standard JavaScript."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"0:25:32"})," - ",(0,i.jsx)(n.strong,{children:"NPM, PNPM, and the JavaScript Ecosystem:"})," Overview of package managers, the vastness of the JavaScript package ecosystem, and the team's preference for PNPM."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"0:37:28"})," - ",(0,i.jsx)(n.strong,{children:"Installing Node.js and PNPM:"})," Practical steps for setting up a development environment."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"0:42:12"})," - ",(0,i.jsx)(n.strong,{children:"WSL2 (Windows Subsystem for Linux):"})," Benefits of using WSL2 for development on Windows."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"0:44:30"})," - ",(0,i.jsx)(n.strong,{children:"Git, GitHub, and the Eliza Repo:"})," Introduction to version control, how to clone a repo, work with branches, and submit pull requests."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"1:08:44"})," - ",(0,i.jsx)(n.strong,{children:"Eliza Starter Kit:"})," Simplified way to build agents without modifying the core Eliza codebase."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"1:17:54"})," - ",(0,i.jsx)(n.strong,{children:"Creating a Character File:"})," In-depth explanation of character file structure and the various fields for defining an agent's personality."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"1:53:15"})," - ",(0,i.jsx)(n.strong,{children:"Running a Character and Adding it to Discord:"})," Demonstration of loading a character, running it, and integrating it with a Discord server."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"2:19:42"})," - ",(0,i.jsx)(n.strong,{children:"Q&A - General Agent Development Questions:"})," Addressing viewer questions about development environment, character development, and adding knowledge to agents."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"2:28:50"})," - ",(0,i.jsx)(n.strong,{children:"Eliza's Core Abstractions (Providers, Actions, Evaluators):"})," Explanation and examples of each core abstraction."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"2:47:23"})," - ",(0,i.jsx)(n.strong,{children:"Deep Dive into Providers:"})," Detailed examples of providers in action, including wallet and trust score providers."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"2:55:50"})," - ",(0,i.jsx)(n.strong,{children:"Deep Dive into Actions:"})," Examples of actions, including the PumpFun action for minting and buying tokens on Solana."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"3:01:31"})," - ",(0,i.jsx)(n.strong,{children:"Actions vs. Tools:"}),' Comparison of Eliza\'s "actions" to the "tool" approach used by other agent frameworks.']}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"3:03:35"})," - ",(0,i.jsx)(n.strong,{children:"Wrap-up, Q&A, and Future Session Topics:"})," Answering final questions, discussing future development plans, and announcing the next session's focus on building an agent that evaluates users and responds accordingly."]}),"\n",(0,i.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,i.jsx)(n.p,{children:"This is the first live session of a16z AI Agent Dev School hosted by Shaw on Discord. It seems to be geared towards developers of all levels, with the first hour focused on the basics of development for beginners. The session covered a range of topics including:"}),"\n",(0,i.jsx)(n.h3,{id:"part-1-development-basics",children:"Part 1: Development Basics"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"JavaScript & Node.js:"})," Shaw provided a historical overview of JavaScript and explained the relationship between JavaScript, Node.js, and the V8 engine."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"TypeScript:"})," Shaw explained the importance of types in programming, why TypeScript is beneficial for JavaScript development, and how it compares to Python's type system."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Package Managers (NPM & PNPM):"})," Shaw discussed the concepts of package managers, the benefits of the JavaScript package ecosystem, and why the team chose to use PNPM for the Eliza project."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"WSL2 (Windows Subsystem for Linux):"})," Shaw recommended using WSL2 for developers using Windows, citing the advantages of a Linux environment for development."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Git & GitHub:"})," Shaw provided a history and explanation of Git and GitHub, emphasizing the importance of learning Git for developers and demonstrating how to clone the Eliza repository and work with branches and pull requests."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Eliza Starter Kit:"})," Shaw introduced a starter kit repository designed to simplify building agents without needing to modify the core Eliza codebase."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"part-2-agent-concepts",children:"Part 2: Agent Concepts"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Character Files:"})," Shaw explained the structure of character files in the Eliza framework, detailing the various fields used for defining an agent's persona, including bio, lore, knowledge, message examples, and style."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Agent Runtime:"})," Shaw discussed the concept of an agent runtime and how it holds all the necessary information for running an agent."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Clients:"})," Shaw explained the different clients available in Eliza, which allow agents to connect to external services like Discord, Telegram, and Twitter."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Core Abstractions:"})," Shaw introduced the three core abstractions of the Eliza framework: providers, actions, and evaluators. He provided examples of each using the Solana plugin and the marketplace of trust feature."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"general-notes",children:"General Notes"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Shaw strongly emphasized the importance of self-learning for developers, recommending resources like YouTube, Andre Karpathy's Neural Networks Zero to Hero playlist, and Google Machine Learning courses."}),"\n",(0,i.jsx)(n.li,{children:"The session was highly interactive, with Shaw frequently addressing questions from participants in the Discord stage and encouraging them to contribute to the project through pull requests and discussion."}),"\n",(0,i.jsx)(n.li,{children:"The next session will involve building a bot that evaluates how much it likes a user based on their interaction and responds accordingly, incorporating the use of providers, actions, and evaluators."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Overall, the session was a comprehensive introduction to the Eliza framework and agent development, catering to both beginner and more experienced developers. It highlighted the project's collaborative nature and emphasized the importance of continuous learning and exploration within the agent development space."}),"\n",(0,i.jsx)(n.h2,{id:"hot-takes",children:"Hot Takes"}),"\n",(0,i.jsx)(n.p,{children:"Here are 5 of the hottest takes from the recording, sure to spark some controversy:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\"I think OpenAI's models are unusable. I don't know about anybody else.\" (0:30:03-0:30:05)"}),' Shaw boldly declares OpenAI\'s models, like ChatGPT, to be completely unusable, especially for character development, claiming they are too "cringe." This directly contradicts the popular opinion that OpenAI is leading the pack in language model innovation.']}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\"Unless you want to have a soul-sucking job, you're never ever going to see Java. You're pretty much going to use Python and JavaScript and stuff like that, or Rust or something.\" (0:24:43-0:24:51)"})," Shaw dismisses Java as a relevant programming language for aspiring developers, arguing that it primarily leads to undesirable jobs. This statement is bound to stir debate among Java enthusiasts and those who believe it remains a vital language in many industries."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\"I really recommend like Grok's great. Anthropic, which is Claude, is great...Llama's great. All these options are good and basically lets you run, you know, whatever. I think Gemini kind of sucks.\" (1:32:50-1:33:02)"})," Shaw unapologetically ranks various language models, favoring Grok, Claude, and Llama, while expressing a clear dislike for Google's Gemini. This candid assessment challenges the perceived dominance of Google in the AI landscape and provides a stark contrast to their heavily marketed Gemini model."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\"I don't really like tools...I don't think the general agent is really good at like stringing together things to do...The action is more like it makes sure that the entire action happens.\" (3:00:25 - 3:00:35)"}),' Shaw expresses a preference for Eliza\'s "actions" over the "tool" approach used by other agent frameworks like LangChain. He argues that agents struggle with using tools effectively and that actions provide a more robust and streamlined way to execute tasks. This critique of the widely adopted tool-based approach is likely to generate discussion about the optimal methods for agent task execution.']}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:'"I find it [GPT-4] unusable, unusable, literally the worst possible model. Like TV three was better." (3:10:05-3:10:08)'})," Shaw doubles down on his harsh criticism of OpenAI, this time targeting GPT-4 specifically and claiming that its predecessor, GPT-3, was superior. This strong statement flies in the face of the general excitement surrounding GPT-4's advanced capabilities and is sure to provoke reactions from those who believe it represents a significant leap forward in language models."]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>o});var t=s(96540);const i={},a=t.createContext(i);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);