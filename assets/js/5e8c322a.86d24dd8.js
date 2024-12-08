"use strict";(self.webpackChunkokai_docs=self.webpackChunkokai_docs||[]).push([[50594],{24099:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"api/index","title":"OKai","description":"For Chinese Version: \u4e2d\u6587\u8bf4\u660e","source":"@site/docs/api/index.md","sourceDirName":"api","slug":"/api/","permalink":"/okai/docs/api/","draft":false,"unlisted":false,"editUrl":"https://github.com/ai16z/okai/tree/main/docs/docs/api/index.md","tags":[],"version":"current","frontMatter":{}}');var s=i(74848),l=i(28453);const r={},a="OKai",d={},o=[{value:"For Chinese Version: \u4e2d\u6587\u8bf4\u660e",id:"for-chinese-version-\u4e2d\u6587\u8bf4\u660e",level:3},{value:"Features",id:"features",level:2},{value:"What can I use it for?",id:"what-can-i-use-it-for",level:2},{value:"Edit the .env file",id:"edit-the-env-file",level:3},{value:"Edit the character file",id:"edit-the-character-file",level:3},{value:"Adding custom actions",id:"adding-custom-actions",level:3},{value:"Running with different models",id:"running-with-different-models",level:2},{value:"Run with Llama",id:"run-with-llama",level:3},{value:"Run with Grok",id:"run-with-grok",level:3},{value:"Run with OpenAI",id:"run-with-openai",level:3},{value:"Additional Requirements",id:"additional-requirements",level:2},{value:"CUDA Setup",id:"cuda-setup",level:3},{value:"Running locally",id:"running-locally",level:3},{value:"Discord Bot",id:"discord-bot",level:2},{value:"Testing",id:"testing",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"okai",children:"OKai"})}),"\n",(0,s.jsx)("img",{src:"_media/okai_banner.jpg",alt:"OKai Banner",width:"100%"}),"\n",(0,s.jsx)(n.h3,{id:"for-chinese-version-\u4e2d\u6587\u8bf4\u660e",children:(0,s.jsx)(n.a,{href:"_media/README_CN.md",children:"For Chinese Version: \u4e2d\u6587\u8bf4\u660e"})}),"\n",(0,s.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\ud83d\udee0 Full-featured Discord, Twitter and Telegram connectors"}),"\n",(0,s.jsx)(n.li,{children:"\ud83d\udc65 Multi-agent and room support"}),"\n",(0,s.jsx)(n.li,{children:"\ud83d\udcda Easily ingest and interact with your documents"}),"\n",(0,s.jsx)(n.li,{children:"\ud83d\udcbe Retrievable memory and document store"}),"\n",(0,s.jsx)(n.li,{children:"\ud83d\ude80 Highly extensible - create your own actions and clients to extend capabilities"}),"\n",(0,s.jsx)(n.li,{children:"\u2601\ufe0f Supports many models, including local Llama, OpenAI, Anthropic, Groq, and more"}),"\n",(0,s.jsx)(n.li,{children:"\ud83d\udce6 Just works!"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"what-can-i-use-it-for",children:"What can I use it for?"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\ud83e\udd16 Chatbots"}),"\n",(0,s.jsx)(n.li,{children:"\ud83d\udd75\ufe0f Autonomous Agents"}),"\n",(0,s.jsx)(n.li,{children:"\ud83d\udcc8 Business process handling"}),"\n",(0,s.jsx)(n.li,{children:"\ud83c\udfae Video game NPCs"}),"\n"]}),"\n",(0,s.jsx)(n.h1,{id:"getting-started",children:"Getting Started"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Prerequisites (MUST):"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://www.python.org/downloads/",children:"Python 2.7+"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.npmjs.com/downloading-and-installing-node-js-and-npm",children:"Node.js 23+"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://pnpm.io/installation",children:"pnpm"})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"edit-the-env-file",children:"Edit the .env file"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Copy .env.example to .env and fill in the appropriate values"}),"\n",(0,s.jsx)(n.li,{children:"Edit the TWITTER environment variables to add your bot's username and password"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"edit-the-character-file",children:"Edit the character file"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Check out the file ",(0,s.jsx)(n.code,{children:"src/core/defaultCharacter.ts"})," - you can modify this"]}),"\n",(0,s.jsxs)(n.li,{children:["You can also load characters with the ",(0,s.jsx)(n.code,{children:'pnpm start --characters="path/to/your/character.json"'})," and run multiple bots at the same time."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"After setting up the .env file and character file, you can start the bot with the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"pnpm i\npnpm start\n"})}),"\n",(0,s.jsx)(n.h1,{id:"customising-okai",children:"Customising OKai"}),"\n",(0,s.jsx)(n.h3,{id:"adding-custom-actions",children:"Adding custom actions"}),"\n",(0,s.jsxs)(n.p,{children:["To avoid git clashes in the core directory, we recommend adding custom actions to a ",(0,s.jsx)(n.code,{children:"custom_actions"})," directory and then adding them to the ",(0,s.jsx)(n.code,{children:"okaiConfig.yaml"})," file. See the ",(0,s.jsx)(n.code,{children:"okaiConfig.example.yaml"})," file for an example."]}),"\n",(0,s.jsx)(n.h2,{id:"running-with-different-models",children:"Running with different models"}),"\n",(0,s.jsx)(n.h3,{id:"run-with-llama",children:"Run with Llama"}),"\n",(0,s.jsxs)(n.p,{children:["You can run Llama 70B or 405B models by setting the ",(0,s.jsx)(n.code,{children:"XAI_MODEL"})," environment variable to ",(0,s.jsx)(n.code,{children:"meta-llama/Meta-Llama-3.1-70B-Instruct-Turbo"})," or ",(0,s.jsx)(n.code,{children:"meta-llama/Meta-Llama-3.1-405B-Instruct"})]}),"\n",(0,s.jsx)(n.h3,{id:"run-with-grok",children:"Run with Grok"}),"\n",(0,s.jsxs)(n.p,{children:["You can run Grok models by setting the ",(0,s.jsx)(n.code,{children:"XAI_MODEL"})," environment variable to ",(0,s.jsx)(n.code,{children:"grok-beta"})]}),"\n",(0,s.jsx)(n.h3,{id:"run-with-openai",children:"Run with OpenAI"}),"\n",(0,s.jsxs)(n.p,{children:["You can run OpenAI models by setting the ",(0,s.jsx)(n.code,{children:"XAI_MODEL"})," environment variable to ",(0,s.jsx)(n.code,{children:"gpt-4o-mini"})," or ",(0,s.jsx)(n.code,{children:"gpt-4o"})]}),"\n",(0,s.jsx)(n.h2,{id:"additional-requirements",children:"Additional Requirements"}),"\n",(0,s.jsx)(n.p,{children:"You may need to install Sharp. If you see an error when starting up, try installing it with the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"pnpm install --include=optional sharp\n"})}),"\n",(0,s.jsx)(n.h1,{id:"environment-setup",children:"Environment Setup"}),"\n",(0,s.jsx)(n.p,{children:"You will need to add environment variables to your .env file to connect to various platforms:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"# Required environment variables\nDISCORD_APPLICATION_ID=\nDISCORD_API_TOKEN= # Bot token\nOPENAI_API_KEY=sk-* # OpenAI API key, starting with sk-\nELEVENLABS_XI_API_KEY= # API key from elevenlabs\nGOOGLE_GENERATIVE_AI_API_KEY= # Gemini API key\n\n# ELEVENLABS SETTINGS\nELEVENLABS_MODEL_ID=eleven_multilingual_v2\nELEVENLABS_VOICE_ID=21m00Tcm4TlvDq8ikWAM\nELEVENLABS_VOICE_STABILITY=0.5\nELEVENLABS_VOICE_SIMILARITY_BOOST=0.9\nELEVENLABS_VOICE_STYLE=0.66\nELEVENLABS_VOICE_USE_SPEAKER_BOOST=false\nELEVENLABS_OPTIMIZE_STREAMING_LATENCY=4\nELEVENLABS_OUTPUT_FORMAT=pcm_16000\n\nTWITTER_DRY_RUN=false\nTWITTER_USERNAME= # Account username\nTWITTER_PASSWORD= # Account password\nTWITTER_EMAIL= # Account email\nTWITTER_COOKIES= # Account cookies\n\nX_SERVER_URL=\nXAI_API_KEY=\nXAI_MODEL=\n\n# For asking Claude stuff\nANTHROPIC_API_KEY=\n\n# EVM\nEVM_PRIVATE_KEY=EXAMPLE_WALLET_PRIVATE_KEY\n\n# Solana\nSOLANA_PRIVATE_KEY=EXAMPLE_WALLET_PRIVATE_KEY\nSOLANA_PUBLIC_KEY=EXAMPLE_WALLET_PUBLIC_KEY\n\n# Fallback Wallet Configuration (deprecated)\nWALLET_PRIVATE_KEY=EXAMPLE_WALLET_PRIVATE_KEY\nWALLET_PUBLIC_KEY=EXAMPLE_WALLET_PUBLIC_KEY\n\nBIRDEYE_API_KEY=\n\nSOL_ADDRESS=So11111111111111111111111111111111111111112\nSLIPPAGE=1\nRPC_URL=https://api.mainnet-beta.solana.com\nHELIUS_API_KEY=\n\n## Telegram\nTELEGRAM_BOT_TOKEN=\n\nTOGETHER_API_KEY=\n"})}),"\n",(0,s.jsx)(n.h1,{id:"local-inference-setup",children:"Local Inference Setup"}),"\n",(0,s.jsx)(n.h3,{id:"cuda-setup",children:"CUDA Setup"}),"\n",(0,s.jsx)(n.p,{children:"If you have an NVIDIA GPU, you can install CUDA to speed up local inference dramatically."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"pnpm install\nnpx --no node-llama-cpp source download --gpu cuda\n"})}),"\n",(0,s.jsx)(n.p,{children:"Make sure that you've installed the CUDA Toolkit, including cuDNN and cuBLAS."}),"\n",(0,s.jsx)(n.h3,{id:"running-locally",children:"Running locally"}),"\n",(0,s.jsxs)(n.p,{children:["Add XAI_MODEL and set it to one of the above options from ",(0,s.jsx)(n.a,{href:"#run-with-llama",children:"Run with\nLlama"})," - you can leave X_SERVER_URL and XAI_API_KEY blank, it\ndownloads the model from huggingface and queries it locally"]}),"\n",(0,s.jsx)(n.h1,{id:"clients",children:"Clients"}),"\n",(0,s.jsx)(n.h2,{id:"discord-bot",children:"Discord Bot"}),"\n",(0,s.jsxs)(n.p,{children:["For help with setting up your Discord Bot, check out here: ",(0,s.jsx)(n.a,{href:"https://discordjs.guide/preparations/setting-up-a-bot-application.html",children:"https://discordjs.guide/preparations/setting-up-a-bot-application.html"})]}),"\n",(0,s.jsx)(n.h1,{id:"development",children:"Development"}),"\n",(0,s.jsx)(n.h2,{id:"testing",children:"Testing"}),"\n",(0,s.jsx)(n.p,{children:"To run the test suite:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pnpm test           # Run tests once\npnpm test:watch    # Run tests in watch mode\n"})}),"\n",(0,s.jsx)(n.p,{children:"For database-specific tests:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pnpm test:sqlite   # Run tests with SQLite\npnpm test:sqljs    # Run tests with SQL.js\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Tests are written using Jest and can be found in ",(0,s.jsx)(n.code,{children:"src/**/*.test.ts"})," files. The test environment is configured to:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Load environment variables from ",(0,s.jsx)(n.code,{children:".env.test"})]}),"\n",(0,s.jsx)(n.li,{children:"Use a 2-minute timeout for long-running tests"}),"\n",(0,s.jsx)(n.li,{children:"Support ESM modules"}),"\n",(0,s.jsx)(n.li,{children:"Run tests in sequence (--runInBand)"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["To create new tests, add a ",(0,s.jsx)(n.code,{children:".test.ts"})," file adjacent to the code you're testing."]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>a});var t=i(96540);const s={},l=t.createContext(s);function r(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);