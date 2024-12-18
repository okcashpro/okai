"use strict";(self.webpackChunkokai_docs=self.webpackChunkokai_docs||[]).push([[99047],{58461:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"advanced/fine-tuning","title":"\ud83c\udfaf Fine-tuning Guide","description":"Overview","source":"@site/docs/advanced/fine-tuning.md","sourceDirName":"advanced","slug":"/advanced/fine-tuning","permalink":"/okai/docs/advanced/fine-tuning","draft":false,"unlisted":false,"editUrl":"https://github.com/okcashpro/okai/tree/main/docs/docs/advanced/fine-tuning.md","tags":[],"version":"current","sidebarPosition":13,"frontMatter":{"sidebar_position":13},"sidebar":"tutorialSidebar","previous":{"title":"WSL Setup","permalink":"/okai/docs/guides/wsl"},"next":{"title":"Infrastructure","permalink":"/okai/docs/advanced/infrastructure"}}');var s=r(74848),t=r(28453);const l={sidebar_position:13},a="\ud83c\udfaf Fine-tuning Guide",o={},d=[{value:"Overview",id:"overview",level:2},{value:"Model Providers",id:"model-providers",level:2},{value:"Provider Configuration",id:"provider-configuration",level:3},{value:"Model Classes",id:"model-classes",level:2},{value:"Embedding System",id:"embedding-system",level:2},{value:"Configuration",id:"configuration",level:3},{value:"Implementation",id:"implementation",level:3},{value:"Fine-tuning Options",id:"fine-tuning-options",level:2},{value:"Temperature Control",id:"temperature-control",level:3},{value:"Context Window",id:"context-window",level:3},{value:"Performance Optimization",id:"performance-optimization",level:2},{value:"Caching Strategy",id:"caching-strategy",level:3},{value:"Model Selection",id:"model-selection",level:3},{value:"Provider-Specific Optimizations",id:"provider-specific-optimizations",level:2},{value:"OpenAI",id:"openai",level:3},{value:"Anthropic",id:"anthropic",level:3},{value:"Local LLM",id:"local-llm",level:3},{value:"Heurist Provider",id:"heurist-provider",level:3},{value:"Testing and Validation",id:"testing-and-validation",level:2},{value:"Embedding Tests",id:"embedding-tests",level:3},{value:"Model Performance Testing",id:"model-performance-testing",level:3},{value:"Best Practices",id:"best-practices",level:2},{value:"Model Selection Guidelines",id:"model-selection-guidelines",level:3},{value:"Performance Optimization",id:"performance-optimization-1",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Common Issues",id:"common-issues",level:3}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"-fine-tuning-guide",children:"\ud83c\udfaf Fine-tuning Guide"})}),"\n",(0,s.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(n.p,{children:"OKai supports multiple AI model providers and offers extensive configuration options for fine-tuning model behavior, embedding generation, and performance optimization."}),"\n",(0,s.jsx)(n.h2,{id:"model-providers",children:"Model Providers"}),"\n",(0,s.jsx)(n.p,{children:"OKai supports multiple model providers through a flexible configuration system:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"enum ModelProviderName {\r\n  OPENAI,\r\n  ANTHROPIC,\r\n  CLAUDE_VERTEX,\r\n  GROK,\r\n  GROQ,\r\n  LLAMACLOUD,\r\n  LLAMALOCAL,\r\n  GOOGLE,\r\n  REDPILL,\r\n  OPENROUTER,\r\n  HEURIST,\r\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"provider-configuration",children:"Provider Configuration"}),"\n",(0,s.jsx)(n.p,{children:"Each provider has specific settings:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'const models = {\r\n  [ModelProviderName.ANTHROPIC]: {\r\n    settings: {\r\n      stop: [],\r\n      maxInputTokens: 200000,\r\n      maxOutputTokens: 8192,\r\n      frequency_penalty: 0.0,\r\n      presence_penalty: 0.0,\r\n      temperature: 0.3,\r\n    },\r\n    endpoint: "https://api.anthropic.com/v1",\r\n    model: {\r\n      [ModelClass.SMALL]: "claude-3-5-haiku",\r\n      [ModelClass.MEDIUM]: "claude-3-5-sonnet-20241022",\r\n      [ModelClass.LARGE]: "claude-3-5-opus-20240229",\r\n    },\r\n  },\r\n  // ... other providers\r\n};\n'})}),"\n",(0,s.jsx)(n.h2,{id:"model-classes",children:"Model Classes"}),"\n",(0,s.jsx)(n.p,{children:"Models are categorized into different classes based on their capabilities:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"enum ModelClass {\r\n    SMALL,    // Fast, efficient for simple tasks\r\n    MEDIUM,   // Balanced performance and capability\r\n    LARGE,    // Most capable but slower/more expensive\r\n    EMBEDDING // Specialized for vector embeddings\r\n    IMAGE     // Image generation capabilities\r\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"embedding-system",children:"Embedding System"}),"\n",(0,s.jsx)(n.h3,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'const embeddingConfig = {\r\n  dimensions: 1536,\r\n  modelName: "text-embedding-3-small",\r\n  cacheEnabled: true,\r\n};\n'})}),"\n",(0,s.jsx)(n.h3,{id:"implementation",children:"Implementation"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'async function embed(runtime: IAgentRuntime, input: string): Promise<number[]> {\r\n  // Check cache first\r\n  const cachedEmbedding = await retrieveCachedEmbedding(runtime, input);\r\n  if (cachedEmbedding) return cachedEmbedding;\r\n\r\n  // Generate new embedding\r\n  const response = await runtime.fetch(\r\n    `${runtime.modelProvider.endpoint}/embeddings`,\r\n    {\r\n      method: "POST",\r\n      headers: {\r\n        Authorization: `Bearer ${runtime.token}`,\r\n        "Content-Type": "application/json",\r\n      },\r\n      body: JSON.stringify({\r\n        input,\r\n        model: runtime.modelProvider.model.EMBEDDING,\r\n        dimensions: 1536,\r\n      }),\r\n    },\r\n  );\r\n\r\n  const data = await response.json();\r\n  return data?.data?.[0].embedding;\r\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"fine-tuning-options",children:"Fine-tuning Options"}),"\n",(0,s.jsx)(n.h3,{id:"temperature-control",children:"Temperature Control"}),"\n",(0,s.jsx)(n.p,{children:"Configure model creativity vs. determinism:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"const temperatureSettings = {\r\n  creative: {\r\n    temperature: 0.8,\r\n    frequency_penalty: 0.7,\r\n    presence_penalty: 0.7,\r\n  },\r\n  balanced: {\r\n    temperature: 0.5,\r\n    frequency_penalty: 0.3,\r\n    presence_penalty: 0.3,\r\n  },\r\n  precise: {\r\n    temperature: 0.2,\r\n    frequency_penalty: 0.0,\r\n    presence_penalty: 0.0,\r\n  },\r\n};\n"})}),"\n",(0,s.jsx)(n.h3,{id:"context-window",children:"Context Window"}),"\n",(0,s.jsx)(n.p,{children:"Manage token limits:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"const contextSettings = {\r\n  OPENAI: {\r\n    maxInputTokens: 128000,\r\n    maxOutputTokens: 8192,\r\n  },\r\n  ANTHROPIC: {\r\n    maxInputTokens: 200000,\r\n    maxOutputTokens: 8192,\r\n  },\r\n  LLAMALOCAL: {\r\n    maxInputTokens: 32768,\r\n    maxOutputTokens: 8192,\r\n  },\r\n};\n"})}),"\n",(0,s.jsx)(n.h2,{id:"performance-optimization",children:"Performance Optimization"}),"\n",(0,s.jsx)(n.h3,{id:"caching-strategy",children:"Caching Strategy"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'class EmbeddingCache {\r\n  private cache: NodeCache;\r\n  private cacheDir: string;\r\n\r\n  constructor() {\r\n    this.cache = new NodeCache({ stdTTL: 300 }); // 5 minute TTL\r\n    this.cacheDir = path.join(__dirname, "cache");\r\n  }\r\n\r\n  async get(key: string): Promise<number[] | null> {\r\n    // Check memory cache first\r\n    const cached = this.cache.get<number[]>(key);\r\n    if (cached) return cached;\r\n\r\n    // Check disk cache\r\n    return this.readFromDisk(key);\r\n  }\r\n\r\n  async set(key: string, embedding: number[]): Promise<void> {\r\n    this.cache.set(key, embedding);\r\n    await this.writeToDisk(key, embedding);\r\n  }\r\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"model-selection",children:"Model Selection"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'async function selectOptimalModel(\r\n  task: string,\r\n  requirements: ModelRequirements,\r\n): Promise<ModelClass> {\r\n  if (requirements.speed === "fast") {\r\n    return ModelClass.SMALL;\r\n  } else if (requirements.complexity === "high") {\r\n    return ModelClass.LARGE;\r\n  }\r\n  return ModelClass.MEDIUM;\r\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"provider-specific-optimizations",children:"Provider-Specific Optimizations"}),"\n",(0,s.jsx)(n.h3,{id:"openai",children:"OpenAI"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'const openAISettings = {\r\n  endpoint: "https://api.openai.com/v1",\r\n  settings: {\r\n    stop: [],\r\n    maxInputTokens: 128000,\r\n    maxOutputTokens: 8192,\r\n    frequency_penalty: 0.0,\r\n    presence_penalty: 0.0,\r\n    temperature: 0.6,\r\n  },\r\n  model: {\r\n    [ModelClass.SMALL]: "gpt-4o-mini",\r\n    [ModelClass.MEDIUM]: "gpt-4o",\r\n    [ModelClass.LARGE]: "gpt-4o",\r\n    [ModelClass.EMBEDDING]: "text-embedding-3-small",\r\n    [ModelClass.IMAGE]: "dall-e-3",\r\n  },\r\n};\n'})}),"\n",(0,s.jsx)(n.h3,{id:"anthropic",children:"Anthropic"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'const anthropicSettings = {\r\n  endpoint: "https://api.anthropic.com/v1",\r\n  settings: {\r\n    stop: [],\r\n    maxInputTokens: 200000,\r\n    maxOutputTokens: 8192,\r\n    temperature: 0.3,\r\n  },\r\n  model: {\r\n    [ModelClass.SMALL]: "claude-3-5-haiku",\r\n    [ModelClass.MEDIUM]: "claude-3-5-sonnet-20241022",\r\n    [ModelClass.LARGE]: "claude-3-5-opus-20240229",\r\n  },\r\n};\n'})}),"\n",(0,s.jsx)(n.h3,{id:"local-llm",children:"Local LLM"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'const llamaLocalSettings = {\r\n  settings: {\r\n    stop: ["<|eot_id|>", "<|eom_id|>"],\r\n    maxInputTokens: 32768,\r\n    maxOutputTokens: 8192,\r\n    repetition_penalty: 0.0,\r\n    temperature: 0.3,\r\n  },\r\n  model: {\r\n    [ModelClass.SMALL]: "NousResearch/Hermes-3-Llama-3.1-8B-GGUF",\r\n    [ModelClass.MEDIUM]: "NousResearch/Hermes-3-Llama-3.1-8B-GGUF",\r\n    [ModelClass.LARGE]: "NousResearch/Hermes-3-Llama-3.1-8B-GGUF",\r\n    [ModelClass.EMBEDDING]: "togethercomputer/m2-bert-80M-32k-retrieval",\r\n  },\r\n};\n'})}),"\n",(0,s.jsx)(n.h3,{id:"heurist-provider",children:"Heurist Provider"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'const heuristSettings = {\r\n  settings: {\r\n    stop: [],\r\n    maxInputTokens: 32768,\r\n    maxOutputTokens: 8192,\r\n    repetition_penalty: 0.0,\r\n    temperature: 0.7,\r\n  },\r\n  imageSettings: {\r\n    steps: 20,\r\n  },\r\n  endpoint: "https://llm-gateway.heurist.xyz",\r\n  model: {\r\n    [ModelClass.SMALL]: "hermes-3-llama3.1-8b",\r\n    [ModelClass.MEDIUM]: "mistralai/mixtral-8x7b-instruct",\r\n    [ModelClass.LARGE]: "nvidia/llama-3.1-nemotron-70b-instruct",\r\n    [ModelClass.EMBEDDING]: "", // Add later\r\n    [ModelClass.IMAGE]: "FLUX.1-dev",\r\n  },\r\n};\n'})}),"\n",(0,s.jsx)(n.h2,{id:"testing-and-validation",children:"Testing and Validation"}),"\n",(0,s.jsx)(n.h3,{id:"embedding-tests",children:"Embedding Tests"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'async function validateEmbedding(\r\n  embedding: number[],\r\n  expectedDimensions: number = 1536,\r\n): Promise<boolean> {\r\n  if (!Array.isArray(embedding)) return false;\r\n  if (embedding.length !== expectedDimensions) return false;\r\n  if (embedding.some((n) => typeof n !== "number")) return false;\r\n  return true;\r\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"model-performance-testing",children:"Model Performance Testing"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"async function benchmarkModel(\r\n  runtime: IAgentRuntime,\r\n  modelClass: ModelClass,\r\n  testCases: TestCase[],\r\n): Promise<BenchmarkResults> {\r\n  const results = {\r\n    latency: [],\r\n    tokenUsage: [],\r\n    accuracy: [],\r\n  };\r\n\r\n  for (const test of testCases) {\r\n    const start = Date.now();\r\n    const response = await runtime.generateText({\r\n      context: test.input,\r\n      modelClass,\r\n    });\r\n    results.latency.push(Date.now() - start);\r\n    // ... additional metrics\r\n  }\r\n\r\n  return results;\r\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,s.jsx)(n.h3,{id:"model-selection-guidelines",children:"Model Selection Guidelines"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Task Complexity"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Use SMALL for simple, quick responses"}),"\n",(0,s.jsx)(n.li,{children:"Use MEDIUM for balanced performance"}),"\n",(0,s.jsx)(n.li,{children:"Use LARGE for complex reasoning"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Context Management"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Keep prompts concise and focused"}),"\n",(0,s.jsx)(n.li,{children:"Use context windows efficiently"}),"\n",(0,s.jsx)(n.li,{children:"Implement proper context truncation"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Temperature Adjustment"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Lower for factual responses"}),"\n",(0,s.jsx)(n.li,{children:"Higher for creative tasks"}),"\n",(0,s.jsx)(n.li,{children:"Balance based on use case"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"performance-optimization-1",children:"Performance Optimization"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Caching Strategy"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Cache embeddings for frequently accessed content"}),"\n",(0,s.jsx)(n.li,{children:"Implement tiered caching (memory/disk)"}),"\n",(0,s.jsx)(n.li,{children:"Regular cache cleanup"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Resource Management"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Monitor token usage"}),"\n",(0,s.jsx)(n.li,{children:"Implement rate limiting"}),"\n",(0,s.jsx)(n.li,{children:"Optimize batch processing"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,s.jsx)(n.h3,{id:"common-issues",children:"Common Issues"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Token Limits"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'function handleTokenLimit(error: Error) {\r\n  if (error.message.includes("token limit")) {\r\n    return truncateAndRetry();\r\n  }\r\n}\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Embedding Errors"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'function handleEmbeddingError(error: Error) {\r\n  if (error.message.includes("dimension mismatch")) {\r\n    return regenerateEmbedding();\r\n  }\r\n}\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Model Availability"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'async function handleModelFailover(error: Error) {\r\n  if (error.message.includes("model not available")) {\r\n    return switchToFallbackModel();\r\n  }\r\n}\n'})}),"\n"]}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>a});var i=r(96540);const s={},t=i.createContext(s);function l(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);