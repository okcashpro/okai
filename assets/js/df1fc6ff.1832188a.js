"use strict";(self.webpackChunkokai_docs=self.webpackChunkokai_docs||[]).push([[4563],{7371:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"core/characterfile","title":"\ud83d\udcdd Character Files","description":"Character files are JSON-formatted configurations that define an AI character\'s personality, knowledge, and behavior patterns. This guide explains how to create effective character files for use with Eliza agents.","source":"@site/docs/core/characterfile.md","sourceDirName":"core","slug":"/core/characterfile","permalink":"/okai/docs/core/characterfile","draft":false,"unlisted":false,"editUrl":"https://github.com/ai16z/okai/tree/main/docs/docs/core/characterfile.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"\u2753 FAQ","permalink":"/okai/docs/faq"},"next":{"title":"Agents","permalink":"/okai/docs/core/agents"}}');var s=i(74848),l=i(28453);const a={sidebar_position:4},t="\ud83d\udcdd Character Files",c={},o=[{value:"Overview",id:"overview",level:2},{value:"Core Components",id:"core-components",level:2},{value:"Key Fields",id:"key-fields",level:3},{value:"<code>name</code> (required)",id:"name-required",level:4},{value:"<code>modelProvider</code> (required)",id:"modelprovider-required",level:4},{value:"<code>clients</code> (required)",id:"clients-required",level:4},{value:"<code>bio</code>",id:"bio",level:4},{value:"<code>lore</code>",id:"lore",level:4},{value:"<code>knowledge</code>",id:"knowledge",level:4},{value:"<code>messageExamples</code>",id:"messageexamples",level:4},{value:"<code>postExamples</code>",id:"postexamples",level:4},{value:"Style Configuration",id:"style-configuration",level:3},{value:"Topics Array",id:"topics-array",level:3},{value:"Adjectives Array",id:"adjectives-array",level:3},{value:"Settings Configuration",id:"settings-configuration",level:3},{value:"Example: Complete Character File",id:"example-complete-character-file",level:2},{value:"Best Practices",id:"best-practices",level:2},{value:"Tips for Quality",id:"tips-for-quality",level:2},{value:"Further Reading",id:"further-reading",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"-character-files",children:"\ud83d\udcdd Character Files"})}),"\n",(0,s.jsx)(n.p,{children:"Character files are JSON-formatted configurations that define an AI character's personality, knowledge, and behavior patterns. This guide explains how to create effective character files for use with Eliza agents."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.code,{children:"characterfile"})," implements the ",(0,s.jsx)(n.a,{href:"/api/type-aliases/character",children:"Character"})," type and defines the character's:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Core identity and behavior"}),"\n",(0,s.jsx)(n.li,{children:"Model provider configuration"}),"\n",(0,s.jsx)(n.li,{children:"Client settings and capabilities"}),"\n",(0,s.jsx)(n.li,{children:"Interaction examples and style guidelines"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "name": "trump",\n  "clients": ["DISCORD", "DIRECT"],\n  "settings": {\n    "voice": { "model": "en_US-male-medium" }\n  },\n  "bio": [\n    "Built a strong economy and reduced inflation.",\n    "Promises to make America the crypto capital and restore affordability."\n  ],\n  "lore": [\n    "Secret Service allocations used for election interference.",\n    "Promotes WorldLibertyFi for crypto leadership."\n  ],\n  "knowledge": [\n    "Understands border issues, Secret Service dynamics, and financial impacts on families."\n  ],\n  "messageExamples": [\n    {\n      "user": "{{user1}}",\n      "content": { "text": "What about the border crisis?" },\n      "response": "Current administration lets in violent criminals. I secured the border; they destroyed it."\n    }\n  ],\n  "postExamples": [\n    "End inflation and make America affordable again.",\n    "America needs law and order, not crime creation."\n  ]\n}\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"core-components",children:"Core Components"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "id": "unique-identifier",\n  "name": "character_name",\n  "modelProvider": "ModelProviderName",\n  "clients": ["Client1", "Client2"],\n  "settings": {\n    "secrets": { "key": "value" },\n    "voice": { "model": "VoiceModelName", "url": "VoiceModelURL" },\n    "model": "CharacterModel",\n    "embeddingModel": "EmbeddingModelName"\n  },\n  "bio": "Character biography or description",\n  "lore": [\n    "Storyline or backstory element 1",\n    "Storyline or backstory element 2"\n  ],\n  "messageExamples": [["Message example 1", "Message example 2"]],\n  "postExamples": ["Post example 1", "Post example 2"],\n  "topics": ["Topic1", "Topic2"],\n  "adjectives": ["Adjective1", "Adjective2"],\n  "style": {\n    "all": ["All style guidelines"],\n    "chat": ["Chat-specific style guidelines"],\n    "post": ["Post-specific style guidelines"]\n  }\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"key-fields",children:"Key Fields"}),"\n",(0,s.jsxs)(n.h4,{id:"name-required",children:[(0,s.jsx)(n.code,{children:"name"})," (required)"]}),"\n",(0,s.jsx)(n.p,{children:"The character's display name for identification and in conversations."}),"\n",(0,s.jsxs)(n.h4,{id:"modelprovider-required",children:[(0,s.jsx)(n.code,{children:"modelProvider"})," (required)"]}),"\n",(0,s.jsxs)(n.p,{children:["Specifies the AI model provider. Supported options from ",(0,s.jsx)(n.a,{href:"/api/enumerations/modelprovidername",children:"ModelProviderName"})," include ",(0,s.jsx)(n.code,{children:"ANTHROPIC"}),", ",(0,s.jsx)(n.code,{children:"LLAMALOCAL"}),", ",(0,s.jsx)(n.code,{children:"OPENAI"}),", and others."]}),"\n",(0,s.jsxs)(n.h4,{id:"clients-required",children:[(0,s.jsx)(n.code,{children:"clients"})," (required)"]}),"\n",(0,s.jsxs)(n.p,{children:["Array of supported client types from ",(0,s.jsx)(n.a,{href:"/api/enumerations/clients",children:"Clients"})," e.g., ",(0,s.jsx)(n.code,{children:"DISCORD"}),", ",(0,s.jsx)(n.code,{children:"DIRECT"}),", ",(0,s.jsx)(n.code,{children:"TWITTER"}),", ",(0,s.jsx)(n.code,{children:"TELEGRAM"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"bio",children:(0,s.jsx)(n.code,{children:"bio"})}),"\n",(0,s.jsx)(n.p,{children:"Character background as a string or array of statements."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Contains biographical information about the character"}),"\n",(0,s.jsx)(n.li,{children:"Can be a single comprehensive biography or multiple shorter statements"}),"\n",(0,s.jsx)(n.li,{children:"Multiple statements are randomized to create variety in responses"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'"bio": [\n  "Mark Andreessen is an American entrepreneur and investor",\n  "Co-founder of Netscape and Andreessen Horowitz",\n  "Pioneer of the early web, created NCSA Mosaic"\n]\n'})}),"\n",(0,s.jsx)(n.h4,{id:"lore",children:(0,s.jsx)(n.code,{children:"lore"})}),"\n",(0,s.jsx)(n.p,{children:"Backstory elements and unique character traits. These help define personality and can be randomly sampled in conversations."}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'"lore": [\n  "Believes strongly in the power of software to transform industries",\n  "Known for saying \'Software is eating the world\'",\n  "Early investor in Facebook, Twitter, and other tech giants"\n]\n'})}),"\n",(0,s.jsx)(n.h4,{id:"knowledge",children:(0,s.jsx)(n.code,{children:"knowledge"})}),"\n",(0,s.jsx)(n.p,{children:"Array used for Retrieval Augmented Generation (RAG), containing facts or references to ground the character's responses."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Can contain chunks of text from articles, books, or other sources"}),"\n",(0,s.jsx)(n.li,{children:"Helps ground the character's responses in factual information"}),"\n",(0,s.jsx)(n.li,{children:"Knowledge can be generated from PDFs or other documents using provided tools"}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"messageexamples",children:(0,s.jsx)(n.code,{children:"messageExamples"})}),"\n",(0,s.jsx)(n.p,{children:"Sample conversations for establishing interaction patterns, helps establish the character's conversational style."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'"messageExamples": [\n  [\n    {"user": "user1", "content": {"text": "What\'s your view on AI?"}},\n    {"user": "character", "content": {"text": "AI is transforming every industry..."}}\n  ]\n]\n'})}),"\n",(0,s.jsx)(n.h4,{id:"postexamples",children:(0,s.jsx)(n.code,{children:"postExamples"})}),"\n",(0,s.jsx)(n.p,{children:"Sample social media posts to guide content style:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'"postExamples": [\n  "No tax on tips, overtime, or social security for seniors!",\n  "End inflation and make America affordable again."\n]\n'})}),"\n",(0,s.jsx)(n.h3,{id:"style-configuration",children:"Style Configuration"}),"\n",(0,s.jsx)(n.p,{children:"Contains three key sections:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"all"}),": General style instructions for all interactions"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"chat"}),": Specific instructions for chat interactions"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"post"}),": Specific instructions for social media posts"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Each section can contain multiple instructions that guide the character's communication style."}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"style"})," object defines behavior patterns across contexts:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'"style": {\n  "all": ["maintain technical accuracy", "be approachable and clear"],\n  "chat": ["ask clarifying questions", "provide examples when helpful"],\n  "post": ["share insights concisely", "focus on practical applications"]\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"topics-array",children:"Topics Array"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"List of subjects the character is interested in or knowledgeable about"}),"\n",(0,s.jsx)(n.li,{children:"Used to guide conversations and generate relevant content"}),"\n",(0,s.jsx)(n.li,{children:"Helps maintain character consistency"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"adjectives-array",children:"Adjectives Array"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Words that describe the character's traits and personality"}),"\n",(0,s.jsx)(n.li,{children:"Used for generating responses with consistent tone"}),"\n",(0,s.jsx)(n.li,{children:'Can be used in "Mad Libs" style content generation'}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"settings-configuration",children:"Settings Configuration"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"settings"})," object defines additional configurations like secrets and voice models."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'"settings": {\n  "secrets": { "API_KEY": "your-api-key" },\n  "voice": { "model": "voice-model-id", "url": "voice-service-url" },\n  "model": "specific-model-name",\n  "embeddingModel": "embedding-model-name"\n}\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"example-complete-character-file",children:"Example: Complete Character File"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "name": "TechAI",\n  "modelProvider": "ANTHROPIC",\n  "clients": ["DISCORD", "DIRECT"],\n  "bio": "AI researcher and educator focused on practical applications",\n  "lore": [\n    "Pioneer in open-source AI development",\n    "Advocate for AI accessibility"\n  ],\n  "messageExamples": [\n    [\n      {\n        "user": "{{user1}}",\n        "content": { "text": "Can you explain how AI models work?" }\n      },\n      {\n        "user": "TechAI",\n        "content": {\n          "text": "Think of AI models like pattern recognition systems."\n        }\n      }\n    ]\n  ],\n  "postExamples": [\n    "Understanding AI doesn\'t require a PhD - let\'s break it down simply",\n    "The best AI solutions focus on real human needs"\n  ],\n  "topics": [\n    "artificial intelligence",\n    "machine learning",\n    "technology education"\n  ],\n  "style": {\n    "all": ["explain complex topics simply", "be encouraging and supportive"],\n    "chat": ["use relevant examples", "check understanding"],\n    "post": ["focus on practical insights", "encourage learning"]\n  },\n  "adjectives": ["knowledgeable", "approachable", "practical"],\n  "settings": {\n    "model": "claude-3-opus-20240229",\n    "voice": { "model": "en-US-neural" }\n  }\n}\n'})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Randomization for Variety"})}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Break bio and lore into smaller chunks"}),"\n",(0,s.jsx)(n.li,{children:"This creates more natural, varied responses"}),"\n",(0,s.jsx)(n.li,{children:"Prevents repetitive or predictable behavior"}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Knowledge Management"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Use the provided tools to convert documents into knowledge:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/ai16z/characterfile/blob/main/scripts/folder2knowledge.js",children:"folder2knowledge"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/ai16z/characterfile/blob/main/scripts/knowledge2character.js",children:"knowledge2folder"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/ai16z/characterfile/blob/main/scripts/tweets2character.js",children:"tweets2character"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npx folder2knowledge <path/to/folder>\nnpx knowledge2character <character-file> <knowledge-file>\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Style Instructions"})}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Be specific about communication patterns"}),"\n",(0,s.jsx)(n.li,{children:"Include both dos and don'ts"}),"\n",(0,s.jsx)(n.li,{children:"Consider platform-specific behavior (chat vs posts)"}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Message Examples"})}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Include diverse scenarios"}),"\n",(0,s.jsx)(n.li,{children:"Show character-specific responses"}),"\n",(0,s.jsx)(n.li,{children:"Demonstrate typical interaction patterns"}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"tips-for-quality",children:"Tips for Quality"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Bio and Lore"})}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Mix factual and personality-defining information"}),"\n",(0,s.jsx)(n.li,{children:"Include both historical and current details"}),"\n",(0,s.jsx)(n.li,{children:"Break into modular, reusable pieces"}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Style Instructions"})}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Be specific about tone and mannerisms"}),"\n",(0,s.jsx)(n.li,{children:"Include platform-specific guidance"}),"\n",(0,s.jsx)(n.li,{children:"Define clear boundaries and limitations"}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Examples"})}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Cover common scenarios"}),"\n",(0,s.jsx)(n.li,{children:"Show character-specific reactions"}),"\n",(0,s.jsx)(n.li,{children:"Demonstrate proper tone and style"}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.strong,{children:"Knowledge"})}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Focus on relevant information"}),"\n",(0,s.jsx)(n.li,{children:"Organize in digestible chunks"}),"\n",(0,s.jsx)(n.li,{children:"Update regularly to maintain relevance"}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"further-reading",children:"Further Reading"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/okai/docs/core/agents",children:"Agents Documentation"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"../../advanced/fine-tuning",children:"Model Providers"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"../../packages/clients",children:"Client Integration"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>t});var r=i(96540);const s={},l=r.createContext(s);function a(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);