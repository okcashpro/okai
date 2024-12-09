"use strict";(self.webpackChunkokai_docs=self.webpackChunkokai_docs||[]).push([[14482],{60187:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>m,frontMatter:()=>r,metadata:()=>a,toc:()=>l});const a=JSON.parse('{"id":"packages/core","title":"\ud83d\udce6 Core Package","description":"Overview","source":"@site/docs/packages/core.md","sourceDirName":"packages","slug":"/packages/core","permalink":"/okai/docs/packages/core","draft":false,"unlisted":false,"editUrl":"https://github.com/okcashpro/okai/tree/main/docs/docs/packages/core.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Overview","permalink":"/okai/docs/packages/"},"next":{"title":"Database Adapters","permalink":"/okai/docs/packages/adapters"}}');var s=t(74848),i=t(28453);const r={sidebar_position:1},c="\ud83d\udce6 Core Package",o={},l=[{value:"Overview",id:"overview",level:2},{value:"Installation",id:"installation",level:2},{value:"Key Components",id:"key-components",level:2},{value:"AgentRuntime",id:"agentruntime",level:3},{value:"Memory System",id:"memory-system",level:3},{value:"Context System",id:"context-system",level:3},{value:"Action System",id:"action-system",level:3},{value:"Evaluation System",id:"evaluation-system",level:3},{value:"State Management",id:"state-management",level:3},{value:"Service Architecture",id:"service-architecture",level:2},{value:"Best Practices",id:"best-practices",level:2},{value:"Memory Management",id:"memory-management",level:3},{value:"State Composition",id:"state-composition",level:3},{value:"Service Management",id:"service-management",level:3},{value:"Error Handling",id:"error-handling",level:2},{value:"Advanced Features",id:"advanced-features",level:2},{value:"Custom Memory Types",id:"custom-memory-types",level:3},{value:"Enhanced Embeddings",id:"enhanced-embeddings",level:3},{value:"State Persistence",id:"state-persistence",level:3},{value:"Related Documentation",id:"related-documentation",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"-core-package",children:"\ud83d\udce6 Core Package"})}),"\n",(0,s.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsxs)(n.p,{children:["The Core Package (",(0,s.jsx)(n.code,{children:"@okcashpro/core"}),") provides the fundamental building blocks of OKai's architecture, handling essential functionalities like:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Memory Management & Semantic Search"}),"\n",(0,s.jsx)(n.li,{children:"Message Processing & Generation"}),"\n",(0,s.jsx)(n.li,{children:"Runtime Environment & State Management"}),"\n",(0,s.jsx)(n.li,{children:"Action & Evaluator Systems"}),"\n",(0,s.jsx)(n.li,{children:"Provider Integration & Context Composition"}),"\n",(0,s.jsx)(n.li,{children:"Service Infrastructure"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pnpm add @okcashpro/core\n"})}),"\n",(0,s.jsx)(n.h2,{id:"key-components",children:"Key Components"}),"\n",(0,s.jsx)(n.h3,{id:"agentruntime",children:"AgentRuntime"}),"\n",(0,s.jsx)(n.p,{children:"The AgentRuntime class serves as the central nervous system of OKai, orchestrating all major components:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'import { AgentRuntime } from "@okcashpro/core";\n\nconst runtime = new AgentRuntime({\n  // Core configuration\n  databaseAdapter,\n  token,\n  modelProvider: ModelProviderName.OPENAI,\n  character,\n\n  // Extension points\n  plugins: [bootstrapPlugin, nodePlugin],\n  providers: [],\n  actions: [],\n  services: [],\n  managers: [],\n\n  // Optional settings\n  conversationLength: 32,\n  agentId: customId,\n  fetch: customFetch,\n});\n'})}),"\n",(0,s.jsx)(n.p,{children:"Key capabilities:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"State composition and management"}),"\n",(0,s.jsx)(n.li,{children:"Plugin and service registration"}),"\n",(0,s.jsx)(n.li,{children:"Memory and relationship management"}),"\n",(0,s.jsx)(n.li,{children:"Action processing and evaluation"}),"\n",(0,s.jsx)(n.li,{children:"Message generation and handling"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"memory-system",children:"Memory System"}),"\n",(0,s.jsx)(n.p,{children:"The MemoryManager handles persistent storage and retrieval of context-aware information:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"class MemoryManager implements IMemoryManager {\n  runtime: IAgentRuntime;\n  tableName: string;\n\n  // Create new memories with embeddings\n  async createMemory(memory: Memory, unique = false): Promise<void> {\n    if (!memory.embedding) {\n      memory.embedding = await embed(this.runtime, memory.content.text);\n    }\n\n    await this.runtime.databaseAdapter.createMemory(\n      memory,\n      this.tableName,\n      unique,\n    );\n  }\n\n  // Semantic search with embeddings\n  async searchMemoriesByEmbedding(\n    embedding: number[],\n    opts: {\n      match_threshold?: number;\n      count?: number;\n      roomId: UUID;\n      unique?: boolean;\n    },\n  ): Promise<Memory[]> {\n    return this.runtime.databaseAdapter.searchMemories({\n      tableName: this.tableName,\n      roomId: opts.roomId,\n      embedding,\n      match_threshold: opts.match_threshold ?? 0.8,\n      match_count: opts.count ?? 10,\n      unique: opts.unique ?? false,\n    });\n  }\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"context-system",children:"Context System"}),"\n",(0,s.jsx)(n.p,{children:"The context system manages state composition and template handling:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'// Template composition\nexport const composeContext = ({\n  state,\n  template,\n}: {\n  state: State;\n  template: string;\n}): string => {\n  return template.replace(/{{\\w+}}/g, (match) => {\n    const key = match.replace(/{{|}}/g, "");\n    return state[key] ?? "";\n  });\n};\n\n// Header handling\nexport const addHeader = (header: string, body: string): string => {\n  return body.length > 0 ? `${header ? header + "\\n" : header}${body}\\n` : "";\n};\n'})}),"\n",(0,s.jsx)(n.h3,{id:"action-system",children:"Action System"}),"\n",(0,s.jsx)(n.p,{children:"Actions define the available behaviors and responses:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'interface Action {\n  name: string;\n  similes: string[];\n  description: string;\n  examples: MessageExample[][];\n\n  validate: (\n    runtime: IAgentRuntime,\n    message: Memory,\n    state?: State,\n  ) => Promise<boolean>;\n\n  handler: (\n    runtime: IAgentRuntime,\n    message: Memory,\n    state?: State,\n    options?: any,\n    callback?: HandlerCallback,\n  ) => Promise<void>;\n}\n\n// Example action implementation\nconst generateImageAction: Action = {\n  name: "GENERATE_IMAGE",\n  similes: ["CREATE_IMAGE", "MAKE_PICTURE"],\n  description: "Generate an AI image from text",\n\n  validate: async (runtime, message) => {\n    return (\n      !!runtime.getSetting("ANTHROPIC_API_KEY") &&\n      !!runtime.getSetting("TOGETHER_API_KEY")\n    );\n  },\n\n  handler: async (runtime, message, state, options, callback) => {\n    const images = await generateImage(\n      { prompt: message.content.text },\n      runtime,\n    );\n\n    const captions = await Promise.all(\n      images.data.map((image) => generateCaption({ imageUrl: image }, runtime)),\n    );\n\n    callback?.(\n      {\n        text: "Generated images",\n        attachments: images.data.map((image, i) => ({\n          id: crypto.randomUUID(),\n          url: image,\n          title: "Generated image",\n          description: captions[i].title,\n        })),\n      },\n      [],\n    );\n  },\n};\n'})}),"\n",(0,s.jsx)(n.h3,{id:"evaluation-system",children:"Evaluation System"}),"\n",(0,s.jsx)(n.p,{children:"Evaluators assess messages and guide agent behavior:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'interface Evaluator {\n  name: string;\n  similes: string[];\n  alwaysRun?: boolean;\n\n  validate: (\n    runtime: IAgentRuntime,\n    message: Memory,\n    state?: State,\n  ) => Promise<boolean>;\n\n  handler: (runtime: IAgentRuntime, message: Memory) => Promise<void>;\n}\n\n// Example evaluator\nconst factEvaluator: Evaluator = {\n  name: "EVALUATE_FACTS",\n  similes: ["CHECK_FACTS"],\n  alwaysRun: true,\n\n  validate: async (runtime, message) => {\n    return message.content.text.includes("fact:");\n  },\n\n  handler: async (runtime, message) => {\n    const facts = await runtime.loreManager.searchMemories({\n      text: message.content.text,\n      threshold: 0.8,\n    });\n\n    if (facts.length > 0) {\n      await runtime.messageManager.createMemory({\n        content: {\n          text: `Verified fact: ${facts[0].content.text}`,\n        },\n        roomId: message.roomId,\n        userId: runtime.agentId,\n      });\n    }\n  },\n};\n'})}),"\n",(0,s.jsx)(n.h3,{id:"state-management",children:"State Management"}),"\n",(0,s.jsx)(n.p,{children:"The state system maintains conversation context and agent knowledge:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"interface State {\n  // Agent identity\n  agentId: UUID;\n  agentName: string;\n  bio: string;\n  lore: string;\n  adjective?: string;\n\n  // Conversation context\n  senderName?: string;\n  actors: string;\n  actorsData: Actor[];\n  recentMessages: string;\n  recentMessagesData: Memory[];\n\n  // Objectives\n  goals: string;\n  goalsData: Goal[];\n\n  // Behavioral guidance\n  actions: string;\n  actionNames: string;\n  evaluators: string;\n  evaluatorNames: string;\n\n  // Additional context\n  providers: string;\n  attachments: string;\n  characterPostExamples?: string;\n  characterMessageExamples?: string;\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"service-architecture",children:"Service Architecture"}),"\n",(0,s.jsx)(n.p,{children:"The core implements a service-based architecture:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"// Service base class\nclass Service {\n  static serviceType: ServiceType;\n\n  async initialize(\n    device: string | null,\n    runtime: IAgentRuntime,\n  ): Promise<void>;\n}\n\n// Service registry\nclass ServiceRegistry {\n  private services = new Map<ServiceType, Service>();\n\n  registerService(service: Service): void {\n    const type = (service as typeof Service).serviceType;\n    if (this.services.has(type)) {\n      console.warn(`Service ${type} already registered`);\n      return;\n    }\n    this.services.set(type, service);\n  }\n\n  getService<T>(type: ServiceType): T | null {\n    return (this.services.get(type) as T) || null;\n  }\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,s.jsx)(n.h3,{id:"memory-management",children:"Memory Management"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"// Use unique flags for important memories\nawait memoryManager.createMemory(memory, true);\n\n// Search with appropriate thresholds\nconst similar = await memoryManager.searchMemoriesByEmbedding(embedding, {\n  match_threshold: 0.8,\n  count: 10,\n});\n\n// Clean up old memories periodically\nawait memoryManager.removeAllMemories(roomId, tableName);\n"})}),"\n",(0,s.jsx)(n.h3,{id:"state-composition",children:"State Composition"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'// Compose full state\nconst state = await runtime.composeState(message, {\n  additionalContext: "Custom context",\n});\n\n// Update with recent messages\nconst updatedState = await runtime.updateRecentMessageState(state);\n\n// Add custom providers\nstate.providers = addHeader(\n  "# Additional Information",\n  await Promise.all(providers.map((p) => p.get(runtime, message))).join("\\n"),\n);\n'})}),"\n",(0,s.jsx)(n.h3,{id:"service-management",children:"Service Management"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"// Service initialization\nclass CustomService extends Service {\n  static serviceType = ServiceType.CUSTOM;\n\n  async initialize(device: string | null, runtime: IAgentRuntime) {\n    await this.setupDependencies();\n    await this.validateConfig();\n    await this.connect();\n  }\n\n  async cleanup() {\n    await this.disconnect();\n    await this.clearResources();\n  }\n}\n\n// Service registration\nruntime.registerService(new CustomService());\n\n// Service usage\nconst service = runtime.getService<CustomService>(ServiceType.CUSTOM);\n"})}),"\n",(0,s.jsx)(n.h2,{id:"error-handling",children:"Error Handling"}),"\n",(0,s.jsx)(n.p,{children:"Implement proper error handling throughout:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'try {\n  await runtime.processActions(message, responses, state);\n} catch (error) {\n  if (error instanceof TokenError) {\n    await this.refreshToken();\n  } else if (error instanceof DatabaseError) {\n    await this.reconnectDatabase();\n  } else {\n    console.error("Unexpected error:", error);\n    throw error;\n  }\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"advanced-features",children:"Advanced Features"}),"\n",(0,s.jsx)(n.h3,{id:"custom-memory-types",children:"Custom Memory Types"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'// Create specialized memory managers\nclass DocumentMemoryManager extends MemoryManager {\n  constructor(runtime: IAgentRuntime) {\n    super({\n      runtime,\n      tableName: "documents",\n      useCache: true,\n    });\n  }\n\n  async processDocument(doc: Document): Promise<void> {\n    const chunks = await splitChunks(doc.content);\n\n    for (const chunk of chunks) {\n      await this.createMemory({\n        content: { text: chunk },\n        metadata: {\n          documentId: doc.id,\n          section: chunk.section,\n        },\n      });\n    }\n  }\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"enhanced-embeddings",children:"Enhanced Embeddings"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'// Advanced embedding handling\nasync function enhancedEmbed(\n  runtime: IAgentRuntime,\n  text: string,\n  opts: {\n    model?: string;\n    dimensions?: number;\n    pooling?: "mean" | "max";\n  },\n): Promise<number[]> {\n  // Get cached embedding if available\n  const cached = await runtime.databaseAdapter.getCachedEmbeddings({\n    query_input: text,\n    query_threshold: 0.95,\n  });\n\n  if (cached.length > 0) {\n    return cached[0].embedding;\n  }\n\n  // Generate new embedding\n  return embed(runtime, text, opts);\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"state-persistence",children:"State Persistence"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'class StateManager {\n  async saveState(state: State): Promise<void> {\n    await this.runtime.databaseAdapter.createMemory(\n      {\n        content: {\n          type: "state",\n          data: state,\n        },\n        roomId: state.roomId,\n        userId: state.agentId,\n      },\n      "states",\n    );\n  }\n\n  async loadState(roomId: UUID): Promise<State | null> {\n    const states = await this.runtime.databaseAdapter.getMemories({\n      roomId,\n      tableName: "states",\n      count: 1,\n    });\n\n    return states[0]?.content.data || null;\n  }\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"related-documentation",children:"Related Documentation"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/api/classes/AgentRuntime",children:"API Reference"})}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var a=t(96540);const s={},i=a.createContext(s);function r(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);