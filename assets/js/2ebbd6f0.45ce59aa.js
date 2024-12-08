"use strict";(self.webpackChunkokai_docs=self.webpackChunkokai_docs||[]).push([[75028],{96755:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"guides/local-development","title":"\ud83d\udcbb Local Development Guide","description":"This guide covers setting up and working with OKai in a development environment.","source":"@site/docs/guides/local-development.md","sourceDirName":"guides","slug":"/guides/local-development","permalink":"/okai/docs/guides/local-development","draft":false,"unlisted":false,"editUrl":"https://github.com/okcashpro/okai/tree/main/docs/docs/guides/local-development.md","tags":[],"version":"current","sidebarPosition":12,"frontMatter":{"sidebar_position":12},"sidebar":"tutorialSidebar","previous":{"title":"Secrets Management","permalink":"/okai/docs/guides/secrets-management"},"next":{"title":"Fine-tuning","permalink":"/okai/docs/advanced/fine-tuning"}}');var l=i(74848),t=i(28453);const a={sidebar_position:12},r="\ud83d\udcbb Local Development Guide",o={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Initial Setup",id:"initial-setup",level:2},{value:"1. Repository Setup",id:"1-repository-setup",level:3},{value:"2. Environment Configuration",id:"2-environment-configuration",level:3},{value:"3. Local Model Setup",id:"3-local-model-setup",level:3},{value:"Development Workflow",id:"development-workflow",level:2},{value:"Running the Development Server",id:"running-the-development-server",level:3},{value:"Development Commands",id:"development-commands",level:3},{value:"Database Development",id:"database-development",level:2},{value:"SQLite (Recommended for Development)",id:"sqlite-recommended-for-development",level:3},{value:"In-Memory Database (for Testing)",id:"in-memory-database-for-testing",level:3},{value:"Schema Management",id:"schema-management",level:3},{value:"Testing",id:"testing",level:2},{value:"Running Tests",id:"running-tests",level:3},{value:"Writing Tests",id:"writing-tests",level:3},{value:"Plugin Development",id:"plugin-development",level:2},{value:"Creating a New Plugin",id:"creating-a-new-plugin",level:3},{value:"Custom Action Development",id:"custom-action-development",level:3},{value:"Debugging",id:"debugging",level:2},{value:"VS Code Configuration",id:"vs-code-configuration",level:3},{value:"Debugging Tips",id:"debugging-tips",level:3},{value:"Common Development Tasks",id:"common-development-tasks",level:2},{value:"1. Adding a New Character",id:"1-adding-a-new-character",level:3},{value:"2. Creating Custom Services",id:"2-creating-custom-services",level:3},{value:"3. Working with Models",id:"3-working-with-models",level:3},{value:"Performance Optimization",id:"performance-optimization",level:2},{value:"CUDA Setup",id:"cuda-setup",level:3},{value:"Memory Management",id:"memory-management",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Common Issues",id:"common-issues",level:3},{value:"Development Tools",id:"development-tools",level:3},{value:"Best Practices",id:"best-practices",level:2},{value:"Additional Tools",id:"additional-tools",level:2},{value:"Character Development",id:"character-development",level:3},{value:"Development Scripts",id:"development-scripts",level:3},{value:"Further Resources",id:"further-resources",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.header,{children:(0,l.jsx)(n.h1,{id:"-local-development-guide",children:"\ud83d\udcbb Local Development Guide"})}),"\n",(0,l.jsx)(n.p,{children:"This guide covers setting up and working with OKai in a development environment."}),"\n",(0,l.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,l.jsx)(n.p,{children:"Before you begin, ensure you have:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"# Required\nNode.js 23+\npnpm\nGit\n\n# Optional but recommended\nVS Code\nDocker (for database development)\nCUDA Toolkit (for GPU acceleration)\n"})}),"\n",(0,l.jsx)(n.h2,{id:"initial-setup",children:"Initial Setup"}),"\n",(0,l.jsx)(n.h3,{id:"1-repository-setup",children:"1. Repository Setup"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"# Clone the repository\ngit clone https://github.com/okcashpro/okai.git\ncd okai\n\n# Install dependencies\npnpm install\n\n# Install optional dependencies\npnpm install --include=optional sharp\n"})}),"\n",(0,l.jsx)(n.h3,{id:"2-environment-configuration",children:"2. Environment Configuration"}),"\n",(0,l.jsx)(n.p,{children:"Create your development environment file:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"cp .env.example .env\n"})}),"\n",(0,l.jsx)(n.p,{children:"Configure essential development variables:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"# Minimum required for local development\nOPENAI_API_KEY=sk-*           # Optional, for OpenAI features\nX_SERVER_URL=                 # Leave blank for local inference\nXAI_API_KEY=                 # Leave blank for local inference\nXAI_MODEL=meta-llama/Llama-3.1-7b-instruct  # Local model\n"})}),"\n",(0,l.jsx)(n.h3,{id:"3-local-model-setup",children:"3. Local Model Setup"}),"\n",(0,l.jsx)(n.p,{children:"For local inference without API dependencies:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"# Install CUDA support for NVIDIA GPUs\nnpx --no node-llama-cpp source download --gpu cuda\n\n# The system will automatically download models from\n# Hugging Face on first run\n"})}),"\n",(0,l.jsx)(n.h2,{id:"development-workflow",children:"Development Workflow"}),"\n",(0,l.jsx)(n.h3,{id:"running-the-development-server",children:"Running the Development Server"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:'# Start with default character\npnpm run dev\n\n# Start with specific character\npnpm run dev --characters="characters/my-character.json"\n\n# Start with multiple characters\npnpm run dev --characters="characters/char1.json,characters/char2.json"\n'})}),"\n",(0,l.jsx)(n.h3,{id:"development-commands",children:"Development Commands"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"pnpm run build          # Build the project\npnpm run clean         # Clean build artifacts\npnpm run dev           # Start development server\npnpm run test          # Run tests\npnpm run test:watch    # Run tests in watch mode\npnpm run lint          # Lint code\n"})}),"\n",(0,l.jsx)(n.h2,{id:"database-development",children:"Database Development"}),"\n",(0,l.jsx)(n.h3,{id:"sqlite-recommended-for-development",children:"SQLite (Recommended for Development)"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:'import { SqliteDatabaseAdapter } from "@okcashpro/okai/adapters";\nimport Database from "better-sqlite3";\n\nconst db = new SqliteDatabaseAdapter(new Database("./dev.db"));\n'})}),"\n",(0,l.jsx)(n.h3,{id:"in-memory-database-for-testing",children:"In-Memory Database (for Testing)"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:'import { SqlJsDatabaseAdapter } from "@okcashpro/okai/adapters";\n\nconst db = new SqlJsDatabaseAdapter(new Database(":memory:"));\n'})}),"\n",(0,l.jsx)(n.h3,{id:"schema-management",children:"Schema Management"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"# Create new migration\npnpm run migration:create\n\n# Run migrations\npnpm run migration:up\n\n# Rollback migrations\npnpm run migration:down\n"})}),"\n",(0,l.jsx)(n.h2,{id:"testing",children:"Testing"}),"\n",(0,l.jsx)(n.h3,{id:"running-tests",children:"Running Tests"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"# Run all tests\npnpm test\n\n# Run specific test file\npnpm test tests/specific.test.ts\n\n# Run tests with coverage\npnpm test:coverage\n\n# Run database-specific tests\npnpm test:sqlite\npnpm test:sqljs\n"})}),"\n",(0,l.jsx)(n.h3,{id:"writing-tests",children:"Writing Tests"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:'import { runAiTest } from "@okcashpro/okai/test_resources";\n\ndescribe("Feature Test", () => {\n  beforeEach(async () => {\n    // Setup test environment\n  });\n\n  it("should perform expected behavior", async () => {\n    const result = await runAiTest({\n      messages: [\n        {\n          user: "user1",\n          content: { text: "test message" },\n        },\n      ],\n      expected: "expected response",\n    });\n    expect(result.success).toBe(true);\n  });\n});\n'})}),"\n",(0,l.jsx)(n.h2,{id:"plugin-development",children:"Plugin Development"}),"\n",(0,l.jsx)(n.h3,{id:"creating-a-new-plugin",children:"Creating a New Plugin"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:'// plugins/my-plugin/src/index.ts\nimport { Plugin } from "@okcashpro/okai/types";\n\nexport const myPlugin: Plugin = {\n  name: "my-plugin",\n  description: "My custom plugin",\n  actions: [],\n  evaluators: [],\n  providers: [],\n};\n'})}),"\n",(0,l.jsx)(n.h3,{id:"custom-action-development",children:"Custom Action Development"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:'// plugins/my-plugin/src/actions/myAction.ts\nexport const myAction: Action = {\n  name: "MY_ACTION",\n  similes: ["SIMILAR_ACTION"],\n  validate: async (runtime: IAgentRuntime, message: Memory) => {\n    return true;\n  },\n  handler: async (runtime: IAgentRuntime, message: Memory) => {\n    // Implementation\n    return true;\n  },\n  examples: [],\n};\n'})}),"\n",(0,l.jsx)(n.h2,{id:"debugging",children:"Debugging"}),"\n",(0,l.jsx)(n.h3,{id:"vs-code-configuration",children:"VS Code Configuration"}),"\n",(0,l.jsxs)(n.p,{children:["Create ",(0,l.jsx)(n.code,{children:".vscode/launch.json"}),":"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'{\n  "version": "0.2.0",\n  "configurations": [\n    {\n      "type": "node",\n      "request": "launch",\n      "name": "Debug OKai",\n      "skipFiles": ["<node_internals>/**"],\n      "program": "${workspaceFolder}/src/index.ts",\n      "runtimeArgs": ["-r", "ts-node/register"],\n      "env": {\n        "DEBUG": "okai:*"\n      }\n    }\n  ]\n}\n'})}),"\n",(0,l.jsx)(n.h3,{id:"debugging-tips",children:"Debugging Tips"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"Enable Debug Logging"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"# Add to your .env file\nDEBUG=okai:*\n"})}),"\n",(0,l.jsxs)(n.ol,{start:"2",children:["\n",(0,l.jsx)(n.li,{children:"Use Debug Points"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:'const debug = require("debug")("okai:dev");\n\ndebug("Operation details: %O", {\n  operation: "functionName",\n  params: parameters,\n  result: result,\n});\n'})}),"\n",(0,l.jsxs)(n.ol,{start:"3",children:["\n",(0,l.jsx)(n.li,{children:"Memory Debugging"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:'# Increase Node.js memory for development\nNODE_OPTIONS="--max-old-space-size=8192" pnpm run dev\n'})}),"\n",(0,l.jsx)(n.h2,{id:"common-development-tasks",children:"Common Development Tasks"}),"\n",(0,l.jsx)(n.h3,{id:"1-adding-a-new-character",children:"1. Adding a New Character"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-json",children:'{\n  "name": "DevBot",\n  "description": "Development testing bot",\n  "modelProvider": "openai",\n  "settings": {\n    "debug": true,\n    "logLevel": "debug"\n  }\n}\n'})}),"\n",(0,l.jsx)(n.h3,{id:"2-creating-custom-services",children:"2. Creating Custom Services"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"class CustomService extends Service {\n  static serviceType = ServiceType.CUSTOM;\n\n  async initialize() {\n    // Setup code\n  }\n\n  async process(input: any): Promise<any> {\n    // Service logic\n  }\n}\n"})}),"\n",(0,l.jsx)(n.h3,{id:"3-working-with-models",children:"3. Working with Models"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:'// Local model configuration\nconst localModel = {\n  modelProvider: "llamalocal",\n  settings: {\n    modelPath: "./models/llama-7b.gguf",\n    contextSize: 8192,\n  },\n};\n\n// Cloud model configuration\nconst cloudModel = {\n  modelProvider: "openai",\n  settings: {\n    model: "gpt-4o-mini",\n    temperature: 0.7,\n  },\n};\n'})}),"\n",(0,l.jsx)(n.h2,{id:"performance-optimization",children:"Performance Optimization"}),"\n",(0,l.jsx)(n.h3,{id:"cuda-setup",children:"CUDA Setup"}),"\n",(0,l.jsx)(n.p,{children:"For NVIDIA GPU users:"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"Install CUDA Toolkit with cuDNN and cuBLAS"}),"\n",(0,l.jsx)(n.li,{children:"Set environment variables:"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"CUDA_PATH=/usr/local/cuda  # Windows: C:\\Program Files\\NVIDIA GPU Computing Toolkit\\CUDA\\v11.0\n"})}),"\n",(0,l.jsx)(n.h3,{id:"memory-management",children:"Memory Management"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"class MemoryManager {\n  private cache = new Map();\n  private maxSize = 1000;\n\n  async cleanup() {\n    if (this.cache.size > this.maxSize) {\n      // Implement cleanup logic\n    }\n  }\n}\n"})}),"\n",(0,l.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,l.jsx)(n.h3,{id:"common-issues",children:"Common Issues"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"Model Loading Issues"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"# Clear model cache\nrm -rf ./models/*\n# Restart with fresh download\n"})}),"\n",(0,l.jsxs)(n.ol,{start:"2",children:["\n",(0,l.jsx)(n.li,{children:"Database Connection Issues"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"# Test database connection\npnpm run test:db-connection\n"})}),"\n",(0,l.jsxs)(n.ol,{start:"3",children:["\n",(0,l.jsx)(n.li,{children:"Memory Issues"}),"\n"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"# Check memory usage\nnode --trace-gc index.js\n"})}),"\n",(0,l.jsx)(n.h3,{id:"development-tools",children:"Development Tools"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"# Generate TypeScript documentation\npnpm run docs:generate\n\n# Check for circular dependencies\npnpm run madge\n\n# Analyze bundle size\npnpm run analyze\n"})}),"\n",(0,l.jsx)(n.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Code Organization"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Place custom actions in ",(0,l.jsx)(n.code,{children:"custom_actions/"})]}),"\n",(0,l.jsxs)(n.li,{children:["Keep character files in ",(0,l.jsx)(n.code,{children:"characters/"})]}),"\n",(0,l.jsxs)(n.li,{children:["Store test data in ",(0,l.jsx)(n.code,{children:"tests/fixtures/"})]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Testing Strategy"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Write unit tests for new features"}),"\n",(0,l.jsx)(n.li,{children:"Use integration tests for plugins"}),"\n",(0,l.jsx)(n.li,{children:"Test with multiple model providers"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Git Workflow"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Create feature branches"}),"\n",(0,l.jsx)(n.li,{children:"Follow conventional commits"}),"\n",(0,l.jsx)(n.li,{children:"Keep PRs focused"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"additional-tools",children:"Additional Tools"}),"\n",(0,l.jsx)(n.h3,{id:"character-development",children:"Character Development"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"# Generate character from Twitter data\nnpx tweets2character\n\n# Convert documents to knowledge base\nnpx folder2knowledge <path/to/folder>\n\n# Add knowledge to character\nnpx knowledge2character <character-file> <knowledge-file>\n"})}),"\n",(0,l.jsx)(n.h3,{id:"development-scripts",children:"Development Scripts"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"# Analyze codebase\n./scripts/analyze-codebase.ts\n\n# Extract tweets for training\n./scripts/extracttweets.js\n\n# Clean build artifacts\n./scripts/clean.sh\n"})}),"\n",(0,l.jsx)(n.h2,{id:"further-resources",children:"Further Resources"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"/okai/docs/guides/configuration",children:"Configuration Guide"})," for setup details"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"/okai/docs/guides/advanced",children:"Advanced Usage"})," for complex features"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"/api",children:"API Documentation"})," for complete API reference"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"../community/contributing.md",children:"Contributing Guide"})," for contribution guidelines"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>r});var s=i(96540);const l={},t=s.createContext(l);function a(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);