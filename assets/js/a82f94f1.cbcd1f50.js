"use strict";(self.webpackChunkokai_docs=self.webpackChunkokai_docs||[]).push([[66332],{57744:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"Discord/development/coders/chat_2024-11-28","title":"\ud83d\udcbb-coders 2024-11-28","description":"Summary","source":"@site/community/Discord/development/coders/chat_2024-11-28.md","sourceDirName":"Discord/development/coders","slug":"/Discord/development/coders/chat_2024-11-28","permalink":"/okai/community/Discord/development/coders/chat_2024-11-28","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"\ud83d\udcbb-coders 2024-11-27","permalink":"/okai/community/Discord/development/coders/chat_2024-11-27"},"next":{"title":"\ud83d\udcbb-coders 2024-11-29","permalink":"/okai/community/Discord/development/coders/chat_2024-11-29"}}');var s=i(74848),a=i(28453);const r={},o="\ud83d\udcbb-coders 2024-11-28",d={},l=[{value:"Summary",id:"summary",level:2},{value:"FAQ",id:"faq",level:2},{value:"Who Helped Who",id:"who-helped-who",level:2},{value:"Action Items",id:"action-items",level:2},{value:"Technical Tasks",id:"technical-tasks",level:3},{value:"Documentation Needs",id:"documentation-needs",level:3},{value:"Feature Requests",id:"feature-requests",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"-coders-2024-11-28",children:"\ud83d\udcbb-coders 2024-11-28"})}),"\n",(0,s.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,s.jsx)(n.p,{children:"Discussion focused on integrating a newly modified 'Twitter-Client' into the codebase. The modification allows for sending tweets and retweets without requiring Twitter API access, running in both browser & server environments."}),"\n",(0,s.jsx)(n.h2,{id:"faq",children:"FAQ"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Is modified Twitter-client module a replacement for 'Twitter-Client' or the scraper? What is its purpose and how does it differ from original twitter client? (asked by @N00t)"}),"\n",(0,s.jsx)(n.li,{children:"How to import solanaPlugin into charactor.ts file in agents/index.js. (asked by @h\u0394rdshell)"}),"\n",(0,s.jsx)(n.li,{children:"What's @shaw 's YT channel name? (01:55)? (asked by @Jaseem)"}),"\n",(0,s.jsx)(n.li,{children:"Is there any way I can run models without paying for tests?(02:27) (asked by @jaseem)"}),"\n",(0,s.jsx)(n.li,{children:"Why is the system trying to use Llama when XAI_MODEL=gpt-4o-mini and with OpenAI key in .env? Who can answer this question? (asked by Whale  \ud83d\udc0b (03:42))"}),"\n",(0,s.jsx)(n.li,{children:"How do I prevent the agent from responding to past messages after a restart, so it doesn't interact again on Twitter when changes are made and started anew? Who can answer this question? (asked by ray (04:40))"}),"\n",(0,s.jsx)(n.li,{children:"Issue with not being able to post new tweets after merging specific GitHub pull request. Has anyone else faced the same issue and how did they resolve it? Who can answer this question? (asked by CaptainCool (04:51))"}),"\n",(0,s.jsx)(n.li,{children:"Can someone recommend a good base model to finetune an agent on, preferably compatible with unsloth 4bit training? Who can answer this question? (asked by Havohej (05:03))"}),"\n",(0,s.jsx)(n.li,{children:"Why am I facing issues while running OKai on Windows? What should be the correct Node version to use? (asked by [Tharakesh](05:14, 05:29))"}),"\n",(0,s.jsxs)(n.li,{children:["How can ",(0,s.jsx)(n.code,{children:"SupabaseDatabaseAdapter"})," be used as a ",(0,s.jsx)(n.code,{children:"DbCacheAdapter"}),"? Are there any missing methods that need implementation for this purpose? What is your experience with using Supabase and OKai together? (asked by ",(0,s.jsx)(n.a,{href:"05:35",children:"AM"}),")"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"who-helped-who",children:"Who Helped Who"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"@Odilitime helped @N00t with Understanding new twitter client functionality by providing Odilitime helped N00t understand the purpose and usage of modified Twitter-client module."}),"\n",(0,s.jsx)(n.li,{children:"@h\u0394rdshell helped @Odilitime with Understanding the role of ENV variable in loading plugins, clarifying code snippet for plugin inclusion by providing h\u0394rdshell helped with solanaPlugin configuration and understanding of AgentRuntime"}),"\n",(0,s.jsx)(n.li,{children:"Everyone in the chat, including @shaw helped @fudme(01:31) with Connecting a bot's actions/functions on server by providing Customizing character and connecting to Discord (\ud83d\udd38 WFB)"}),"\n",(0,s.jsx)(n.li,{children:"CaptainCool helped All with Resolving Twitter agent client plugin string error in character.json file. by providing DataRelic (04:59) provided the GitHub link for CaptainCool's issue regarding not being able to post new tweets after merging specific changes."}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"05:16",children:"Tharakesh"})," helped Windows users facing issues with OKai setup with Provided guidance on Node version and debugging using claude by providing [Radagast](05:32, 05:34)"]}),"\n",(0,s.jsx)(n.li,{children:"[Mina] helped [Citizen1553, Tharakesh] with Technical issue resolution by providing Resolved missing properties in adapter"}),"\n",(0,s.jsx)(n.li,{children:"[DataRelic] helped [Mina, MrEnjOy_] with Feature implementation by providing Provided Twitter setup instructions for OKai bot integration."}),"\n",(0,s.jsx)(n.li,{children:"[Mina, DataRelic] helped Twitter cookies setup for environment. with  by providing DataRelic helps Mina with adding Twitter client in character JSON file."}),"\n",(0,s.jsx)(n.li,{children:"@h\u0394rdshell helped @radagast with Character Model Loading Issue by providing [Radagast] suggested setting up the trump character on correct model for h\u0394rdshell's issue with finding models."}),"\n",(0,s.jsx)(n.li,{children:"@Alain Schaerer helped @Tharakesh with Explaining the intent of @dexbruce's PR. by providing Understanding pull request purpose"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"action-items",children:"Action Items"}),"\n",(0,s.jsx)(n.h3,{id:"technical-tasks",children:"Technical Tasks"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Update dependencies to use modified Twitter-client module (mentioned by @N00t)"}),"\n",(0,s.jsx)(n.li,{children:"Implement vercel or replit integration (mentioned by @Odilitime)"}),"\n",(0,s.jsx)(n.li,{children:"Integrate data with OKai using a custom plugin (mentioned by @Moudinho3)"}),"\n",(0,s.jsx)(n.li,{children:"Resolve character.json plugin string issue by modifying the default character in .ts format and starting it successfully. (mentioned by crazysailor1000)"}),"\n",(0,s.jsxs)(n.li,{children:["Update Node version to match OKai's requirements (mentioned by ",(0,s.jsx)(n.a,{href:"05:18",children:"Tharakesh"}),")"]}),"\n",(0,s.jsx)(n.li,{children:"Update PostgresDatabaseAdapter to resolve missing properties error (mentioned by [Citizen1553, Mina])"}),"\n",(0,s.jsx)(n.li,{children:"Add Twitter client to character JSON file (mentioned by [Mina, DataRelic])"}),"\n",(0,s.jsx)(n.li,{children:"Load character model correctly (mentioned by [h\u0394rdshell, Radagast])"}),"\n",(0,s.jsx)(n.li,{children:"Set API key for Hugging Face endpoints in .env file and index.ts. (mentioned by [Alain Schaerer, Radagast])"}),"\n",(0,s.jsx)(n.li,{children:"Prevent multiple downloads for localLama model on pnpm build (mentioned by @dexbruce)"}),"\n",(0,s.jsx)(n.li,{children:"Prepare a new Hugging Face endpoint without requiring explicit CUDA passing, to be compatible with Apple Silicon MacBooks using Metal. (mentioned by @dexbruce)"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"documentation-needs",children:"Documentation Needs"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Document how agents interact with each other using rooms and actions in the codebase. (mentioned by @razor)"}),"\n",(0,s.jsx)(n.li,{children:"Configure max response length in the relevant file (mentioned by @Radagast)"}),"\n",(0,s.jsx)(n.li,{children:"Update README to explain Llama extension of Twitter agent client (mentioned by Bootoshi)"}),"\n",(0,s.jsxs)(n.li,{children:["Use claude for debugging issues on Windows platform with OKai setup. (mentioned by ",(0,s.jsx)(n.a,{href:"05:32",children:"Radagast"}),")"]}),"\n",(0,s.jsx)(n.li,{children:"Login into the twitter account and pull cookie details from browser dev tools for environment setup. (mentioned by DataRelic)"}),"\n",(0,s.jsx)(n.li,{children:"Simplify system to provide base URL, API key and model name only. (mentioned by @Alain Schaerer)"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"feature-requests",children:"Feature Requests"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Ensure domain is whitelisted for OpenAI API key usage or paste the key manually when using it. (mentioned by DataRelic)"}),"\n",(0,s.jsx)(n.li,{children:"Set up Twitter integration for OKai bot using environment variables and dry run option. (mentioned by [DataRelic, MrEnjOy_])"}),"\n",(0,s.jsx)(n.li,{children:"Investigate Dstack TEE integration usage (mentioned by [KarlK | Galadriel])"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>o});var t=i(96540);const s={},a=t.createContext(s);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);