"use strict";(self.webpackChunkokai_docs=self.webpackChunkokai_docs||[]).push([[87246],{85232:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"guides/advanced","title":"\ud83d\udd27 Advanced Usage Guide","description":"This guide covers advanced features and capabilities of OKai, including complex integrations, custom services, and specialized plugins.","source":"@site/docs/guides/advanced.md","sourceDirName":"guides","slug":"/guides/advanced","permalink":"/okai/docs/guides/advanced","draft":false,"unlisted":false,"editUrl":"https://github.com/okcashpro/okai/tree/main/docs/docs/guides/advanced.md","tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"sidebar_position":10},"sidebar":"tutorialSidebar","previous":{"title":"Configuration","permalink":"/okai/docs/guides/configuration"},"next":{"title":"Secrets Management","permalink":"/okai/docs/guides/secrets-management"}}');var s=i(74848),t=i(28453);const a={sidebar_position:10},o="\ud83d\udd27 Advanced Usage Guide",c={},l=[{value:"Service Integration",id:"service-integration",level:2},{value:"Video Processing Service",id:"video-processing-service",level:3},{value:"Image Processing",id:"image-processing",level:3},{value:"Blockchain Integration",id:"blockchain-integration",level:2},{value:"Solana Integration",id:"solana-integration",level:3},{value:"Token Operations",id:"token-operations",level:4},{value:"Trust Score System",id:"trust-score-system",level:4},{value:"Custom Services",id:"custom-services",level:2},{value:"Speech Generation",id:"speech-generation",level:3},{value:"PDF Processing",id:"pdf-processing",level:3},{value:"Advanced Memory Management",id:"advanced-memory-management",level:2},{value:"Retrievable Memory System",id:"retrievable-memory-system",level:3},{value:"Trust Score Database",id:"trust-score-database",level:3},{value:"Plugin Development",id:"plugin-development",level:2},{value:"Creating Custom Plugins",id:"creating-custom-plugins",level:3},{value:"Advanced Action Development",id:"advanced-action-development",level:3},{value:"Advanced Configuration",id:"advanced-configuration",level:2},{value:"Custom Runtime Configuration",id:"custom-runtime-configuration",level:3},{value:"Advanced Model Configuration",id:"advanced-model-configuration",level:3},{value:"Performance Optimization",id:"performance-optimization",level:2},{value:"Caching Strategy",id:"caching-strategy",level:3},{value:"Queue Management",id:"queue-management",level:3},{value:"Best Practices",id:"best-practices",level:2},{value:"Error Handling",id:"error-handling",level:3},{value:"Resource Management",id:"resource-management",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Common Issues",id:"common-issues",level:3},{value:"Debugging",id:"debugging",level:3},{value:"Further Resources",id:"further-resources",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"-advanced-usage-guide",children:"\ud83d\udd27 Advanced Usage Guide"})}),"\n",(0,s.jsx)(n.p,{children:"This guide covers advanced features and capabilities of OKai, including complex integrations, custom services, and specialized plugins."}),"\n",(0,s.jsx)(n.h2,{id:"service-integration",children:"Service Integration"}),"\n",(0,s.jsx)(n.h3,{id:"video-processing-service",children:"Video Processing Service"}),"\n",(0,s.jsxs)(n.p,{children:["OKai supports advanced video processing capabilities through the ",(0,s.jsx)(n.code,{children:"VideoService"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'import { VideoService } from "@okcashpro/okai/plugin-node";\n\n// Initialize service\nconst videoService = new VideoService();\n\n// Process video content\nconst result = await videoService.processVideo(url, runtime);\n'})}),"\n",(0,s.jsx)(n.p,{children:"Key features:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Automatic video downloading"}),"\n",(0,s.jsx)(n.li,{children:"Transcription support"}),"\n",(0,s.jsx)(n.li,{children:"Subtitle extraction"}),"\n",(0,s.jsx)(n.li,{children:"Cache management"}),"\n",(0,s.jsx)(n.li,{children:"Queue processing"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"image-processing",children:"Image Processing"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"ImageDescriptionService"})," provides advanced image analysis:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'import { ImageDescriptionService } from "@okcashpro/okai/plugin-node";\n\nconst imageService = new ImageDescriptionService();\nconst description = await imageService.describeImage(imageUrl, "gpu", runtime);\n'})}),"\n",(0,s.jsx)(n.p,{children:"Features:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Local and cloud processing options"}),"\n",(0,s.jsx)(n.li,{children:"CUDA acceleration support"}),"\n",(0,s.jsx)(n.li,{children:"Automatic format handling"}),"\n",(0,s.jsx)(n.li,{children:"GIF frame extraction"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"blockchain-integration",children:"Blockchain Integration"}),"\n",(0,s.jsx)(n.h3,{id:"solana-integration",children:"Solana Integration"}),"\n",(0,s.jsx)(n.p,{children:"The Solana plugin provides comprehensive blockchain functionality:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'import { solanaPlugin } from "@okcashpro/okai/plugin-solana";\n\n// Initialize plugin\nruntime.registerPlugin(solanaPlugin);\n'})}),"\n",(0,s.jsx)(n.h4,{id:"token-operations",children:"Token Operations"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'// Buy tokens\nconst swapResult = await swapToken(\n  connection,\n  walletPublicKey,\n  inputTokenCA,\n  outputTokenCA,\n  amount,\n);\n\n// Sell tokens\nconst sellResult = await sellToken({\n  sdk,\n  seller: walletKeypair,\n  mint: tokenMint,\n  amount: sellAmount,\n  priorityFee,\n  allowOffCurve: false,\n  slippage: "1",\n  connection,\n});\n'})}),"\n",(0,s.jsx)(n.h4,{id:"trust-score-system",children:"Trust Score System"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"const trustScoreManager = new TrustScoreManager(tokenProvider, trustScoreDb);\n\n// Generate trust scores\nconst score = await trustScoreManager.generateTrustScore(\n  tokenAddress,\n  recommenderId,\n  recommenderWallet,\n);\n\n// Monitor trade performance\nawait trustScoreManager.createTradePerformance(runtime, tokenAddress, userId, {\n  buy_amount: amount,\n  is_simulation: false,\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"custom-services",children:"Custom Services"}),"\n",(0,s.jsx)(n.h3,{id:"speech-generation",children:"Speech Generation"}),"\n",(0,s.jsx)(n.p,{children:"Implement text-to-speech capabilities:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'class SpeechService extends Service implements ISpeechService {\n  async generate(runtime: IAgentRuntime, text: string): Promise<Readable> {\n    if (runtime.getSetting("ELEVENLABS_XI_API_KEY")) {\n      return textToSpeech(runtime, text);\n    }\n\n    const { audio } = await synthesize(text, {\n      engine: "vits",\n      voice: "en_US-hfc_female-medium",\n    });\n\n    return Readable.from(audio);\n  }\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"pdf-processing",children:"PDF Processing"}),"\n",(0,s.jsx)(n.p,{children:"Handle PDF document analysis:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'class PdfService extends Service {\n  async convertPdfToText(pdfBuffer: Buffer): Promise<string> {\n    const pdf = await getDocument({ data: pdfBuffer }).promise;\n    const numPages = pdf.numPages;\n    const textPages = [];\n\n    for (let pageNum = 1; pageNum <= numPages; pageNum++) {\n      const page = await pdf.getPage(pageNum);\n      const textContent = await page.getTextContent();\n      const pageText = textContent.items\n        .filter(isTextItem)\n        .map((item) => item.str)\n        .join(" ");\n      textPages.push(pageText);\n    }\n\n    return textPages.join("\\n");\n  }\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"advanced-memory-management",children:"Advanced Memory Management"}),"\n",(0,s.jsx)(n.h3,{id:"retrievable-memory-system",children:"Retrievable Memory System"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"class MemoryManager {\n  async getMemories({\n    agentId,\n    roomId,\n    count,\n  }: {\n    agentId: string;\n    roomId: string;\n    count: number;\n  }): Promise<Memory[]> {\n    // Implement memory retrieval logic\n  }\n\n  async createMemory(\n    memory: Memory,\n    allowDuplicates: boolean = false,\n  ): Promise<void> {\n    // Implement memory storage logic\n  }\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"trust-score-database",children:"Trust Score Database"}),"\n",(0,s.jsx)(n.p,{children:"Implement advanced scoring systems:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"class TrustScoreDatabase {\n  async calculateValidationTrust(tokenAddress: string): number {\n    const sql = `\n      SELECT rm.trust_score\n      FROM token_recommendations tr\n      JOIN recommender_metrics rm ON tr.recommender_id = rm.recommender_id\n      WHERE tr.token_address = ?;\n    `;\n\n    const rows = this.db.prepare(sql).all(tokenAddress);\n    if (rows.length === 0) return 0;\n\n    const totalTrust = rows.reduce((acc, row) => acc + row.trust_score, 0);\n    return totalTrust / rows.length;\n  }\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"plugin-development",children:"Plugin Development"}),"\n",(0,s.jsx)(n.h3,{id:"creating-custom-plugins",children:"Creating Custom Plugins"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'const customPlugin: Plugin = {\n  name: "custom-plugin",\n  description: "Custom Plugin for OKai",\n  actions: [\n    // Custom actions\n  ],\n  evaluators: [\n    // Custom evaluators\n  ],\n  providers: [\n    // Custom providers\n  ],\n};\n'})}),"\n",(0,s.jsx)(n.h3,{id:"advanced-action-development",children:"Advanced Action Development"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'export const complexAction: Action = {\n  name: "COMPLEX_ACTION",\n  similes: ["ALTERNATIVE_NAME", "OTHER_NAME"],\n  validate: async (runtime: IAgentRuntime, message: Memory) => {\n    // Implement validation logic\n    return true;\n  },\n  handler: async (\n    runtime: IAgentRuntime,\n    message: Memory,\n    state: State,\n    options: { [key: string]: unknown },\n    callback?: HandlerCallback,\n  ): Promise<boolean> => {\n    // Implement complex handling logic\n    return true;\n  },\n};\n'})}),"\n",(0,s.jsx)(n.h2,{id:"advanced-configuration",children:"Advanced Configuration"}),"\n",(0,s.jsx)(n.h3,{id:"custom-runtime-configuration",children:"Custom Runtime Configuration"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"const customRuntime = new AgentRuntime({\n  databaseAdapter: new PostgresDatabaseAdapter(config),\n  modelProvider: new OpenAIProvider(apiKey),\n  plugins: [solanaPlugin, customPlugin],\n  services: [\n    new VideoService(),\n    new ImageDescriptionService(),\n    new SpeechService(),\n  ],\n});\n"})}),"\n",(0,s.jsx)(n.h3,{id:"advanced-model-configuration",children:"Advanced Model Configuration"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"const modelConfig = {\n  modelClass: ModelClass.LARGE,\n  temperature: 0.7,\n  maxTokens: 2000,\n  topP: 0.9,\n  frequencyPenalty: 0.5,\n  presencePenalty: 0.5,\n};\n\nconst response = await generateText({\n  runtime,\n  context: prompt,\n  ...modelConfig,\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"performance-optimization",children:"Performance Optimization"}),"\n",(0,s.jsx)(n.h3,{id:"caching-strategy",children:"Caching Strategy"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'class CacheManager {\n  private cache: NodeCache;\n  private cacheDir: string;\n\n  constructor() {\n    this.cache = new NodeCache({ stdTTL: 300 });\n    this.cacheDir = path.join(__dirname, "cache");\n    this.ensureCacheDirectoryExists();\n  }\n\n  private async getCachedData<T>(key: string): Promise<T | null> {\n    // Implement tiered caching strategy\n  }\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"queue-management",children:"Queue Management"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"class QueueManager {\n  private queue: string[] = [];\n  private processing: boolean = false;\n\n  async processQueue(): Promise<void> {\n    if (this.processing || this.queue.length === 0) {\n      return;\n    }\n\n    this.processing = true;\n    while (this.queue.length > 0) {\n      const item = this.queue.shift();\n      await this.processItem(item);\n    }\n    this.processing = false;\n  }\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,s.jsx)(n.h3,{id:"error-handling",children:"Error Handling"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'try {\n  const result = await complexOperation();\n  if (!result) {\n    throw new Error("Operation failed");\n  }\n  return result;\n} catch (error) {\n  console.error("Error in operation:", error);\n  await errorReporting.log(error);\n  throw new OperationalError("Failed to complete operation", { cause: error });\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"resource-management",children:"Resource Management"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"class ResourceManager {\n  private resources: Map<string, Resource> = new Map();\n\n  async acquire(id: string): Promise<Resource> {\n    // Implement resource acquisition with timeout\n  }\n\n  async release(id: string): Promise<void> {\n    // Implement resource cleanup\n  }\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,s.jsx)(n.h3,{id:"common-issues",children:"Common Issues"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Memory Leaks"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Monitor memory usage"}),"\n",(0,s.jsx)(n.li,{children:"Implement proper cleanup"}),"\n",(0,s.jsx)(n.li,{children:"Use WeakMap for caching"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Performance Bottlenecks"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Profile slow operations"}),"\n",(0,s.jsx)(n.li,{children:"Implement batching"}),"\n",(0,s.jsx)(n.li,{children:"Use connection pooling"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Integration Issues"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Verify API credentials"}),"\n",(0,s.jsx)(n.li,{children:"Check network connectivity"}),"\n",(0,s.jsx)(n.li,{children:"Validate request formatting"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"debugging",children:"Debugging"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:'const debug = require("debug")("okai:advanced");\n\ndebug("Detailed operation info: %O", {\n  operation: "complexOperation",\n  parameters: params,\n  result: result,\n});\n'})}),"\n",(0,s.jsx)(n.h2,{id:"further-resources",children:"Further Resources"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/okai/docs/advanced/infrastructure",children:"Infrastructure Guide"})," for deployment"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/okai/docs/advanced/trust-engine",children:"Trust Engine Documentation"})," for scoring system"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/okai/docs/advanced/autonomous-trading",children:"Autonomous Trading Guide"})," for trading features"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/okai/docs/advanced/fine-tuning",children:"Fine-tuning Guide"})," for model optimization"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>o});var r=i(96540);const s={},t=r.createContext(s);function a(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);