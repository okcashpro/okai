"use strict";(self.webpackChunkokai_docs=self.webpackChunkokai_docs||[]).push([[16507],{26796:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"packages/clients","title":"\ud83d\udd0c Client Packages","description":"Overview","source":"@site/docs/packages/clients.md","sourceDirName":"packages","slug":"/packages/clients","permalink":"/okai/docs/packages/clients","draft":false,"unlisted":false,"editUrl":"https://github.com/okcashpro/okai/tree/main/docs/docs/packages/clients.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"Database Adapters","permalink":"/okai/docs/packages/adapters"},"next":{"title":"Agent Package","permalink":"/okai/docs/packages/agent"}}');var t=i(74848),a=i(28453);const r={},l="\ud83d\udd0c Client Packages",c={},o=[{value:"Overview",id:"overview",level:2},{value:"Architecture Overview",id:"architecture-overview",level:3},{value:"Available Clients",id:"available-clients",level:2},{value:"Installation",id:"installation",level:2},{value:"Discord Client",id:"discord-client",level:2},{value:"Basic Setup",id:"basic-setup",level:3},{value:"Features",id:"features",level:3},{value:"Voice Integration",id:"voice-integration",level:3},{value:"Message Handling",id:"message-handling",level:3},{value:"Twitter Client",id:"twitter-client",level:2},{value:"Basic Setup",id:"basic-setup-1",level:3},{value:"Components",id:"components",level:3},{value:"Post Management",id:"post-management",level:3},{value:"Search Features",id:"search-features",level:3},{value:"Telegram Client",id:"telegram-client",level:2},{value:"Basic Setup",id:"basic-setup-2",level:3},{value:"Message Management",id:"message-management",level:3},{value:"Direct Client",id:"direct-client",level:2},{value:"Basic Setup",id:"basic-setup-3",level:3},{value:"API Endpoints",id:"api-endpoints",level:3},{value:"Auto Client",id:"auto-client",level:2},{value:"Basic Setup",id:"basic-setup-4",level:3},{value:"Automated Trading",id:"automated-trading",level:3},{value:"Common Features",id:"common-features",level:2},{value:"Message Handling",id:"message-handling-1",level:3},{value:"Media Processing",id:"media-processing",level:3},{value:"Error Handling",id:"error-handling",level:3},{value:"Best Practices",id:"best-practices",level:2},{value:"Error Handling",id:"error-handling-1",level:3},{value:"Resource Management",id:"resource-management",level:3},{value:"Rate Limiting",id:"rate-limiting",level:3},{value:"Performance Optimization",id:"performance-optimization",level:2},{value:"Connection Management",id:"connection-management",level:3},{value:"Message Queuing",id:"message-queuing",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Common Issues",id:"common-issues",level:3},{value:"Related Resources",id:"related-resources",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"-client-packages",children:"\ud83d\udd0c Client Packages"})}),"\n",(0,t.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(n.p,{children:"OKai's client packages enable integration with various platforms and services. Each client provides a standardized interface for sending and receiving messages, handling media, and interacting with platform-specific features."}),"\n",(0,t.jsx)(n.h3,{id:"architecture-overview",children:"Architecture Overview"}),"\n",(0,t.jsx)(n.mermaid,{value:'graph TD\n    RT["Agent Runtime"]\n    CI["Client Interface"]\n    RT --\x3e CI\n\n    %% Main Clients\n    CI --\x3e DC["Direct Client"]\n    CI --\x3e DSC["Discord Client"]\n    CI --\x3e TC["Telegram Client"]\n    CI --\x3e TWC["Twitter Client"]\n    CI --\x3e AC["Auto Client"]\n\n    %% Key Features - one per client for clarity\n    DC --\x3e |"REST API"| DC1["Messages & Images"]\n    DSC --\x3e |"Bot Integration"| DSC1["Voice & Messages"]\n    TC --\x3e |"Bot API"| TC1["Commands & Media"]\n    TWC --\x3e |"Social"| TWC1["Posts & Interactions"]\n    AC --\x3e |"Trading"| AC1["Analysis & Execution"]\n\n    %% Simple styling with better contrast and black text\n    classDef default fill:#f9f9f9,stroke:#333,stroke-width:1px,color:black\n    classDef highlight fill:#e9e9e9,stroke:#333,stroke-width:2px,color:black\n\n    class RT,CI highlight'}),"\n",(0,t.jsx)(n.h2,{id:"available-clients",children:"Available Clients"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Discord"})," (",(0,t.jsx)(n.code,{children:"@okai/client-discord"}),") - Full Discord bot integration"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Twitter"})," (",(0,t.jsx)(n.code,{children:"@okai/client-twitter"}),") - Twitter bot and interaction handling"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Telegram"})," (",(0,t.jsx)(n.code,{children:"@okai/client-telegram"}),") - Telegram bot integration"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Direct"})," (",(0,t.jsx)(n.code,{children:"@okai/client-direct"}),") - Direct API interface for custom integrations"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Auto"})," (",(0,t.jsx)(n.code,{children:"@okai/client-auto"}),") - Automated trading and interaction client"]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# Discord\npnpm add @okai/client-discord\n\n# Twitter\npnpm add @okai/client-twitter\n\n# Telegram\npnpm add @okai/client-telegram\n\n# Direct API\npnpm add @okai/client-direct\n\n# Auto Client\npnpm add @okai/client-auto\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"discord-client",children:"Discord Client"}),"\n",(0,t.jsx)(n.p,{children:"The Discord client provides full integration with Discord's features including voice, reactions, and attachments."}),"\n",(0,t.jsx)(n.h3,{id:"basic-setup",children:"Basic Setup"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'import { DiscordClientInterface } from "@okai/client-discord";\n\n// Initialize client\nconst client = await DiscordClientInterface.start(runtime);\n\n// Configuration in .env\nDISCORD_APPLICATION_ID = your_app_id;\nDISCORD_API_TOKEN = your_bot_token;\n'})}),"\n",(0,t.jsx)(n.h3,{id:"features",children:"Features"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Voice channel integration"}),"\n",(0,t.jsx)(n.li,{children:"Message attachments"}),"\n",(0,t.jsx)(n.li,{children:"Reactions handling"}),"\n",(0,t.jsx)(n.li,{children:"Media transcription"}),"\n",(0,t.jsx)(n.li,{children:"Room management"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"voice-integration",children:"Voice Integration"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"class VoiceManager {\n  // Join a voice channel\n  async handleJoinChannelCommand(interaction) {\n    await this.joinVoiceChannel(channel);\n  }\n\n  // Handle voice state updates\n  async handleVoiceStateUpdate(oldState, newState) {\n    if (newState.channelId) {\n      await this.handleUserJoinedChannel(newState);\n    }\n  }\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"message-handling",children:"Message Handling"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"class MessageManager {\n  async handleMessage(message) {\n    // Ignore bot messages\n    if (message.author.bot) return;\n\n    // Process attachments\n    if (message.attachments.size > 0) {\n      await this.processAttachments(message);\n    }\n\n    // Generate response\n    await this.generateResponse(message);\n  }\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"twitter-client",children:"Twitter Client"}),"\n",(0,t.jsx)(n.p,{children:"The Twitter client enables posting, searching, and interacting with Twitter users."}),"\n",(0,t.jsx)(n.h3,{id:"basic-setup-1",children:"Basic Setup"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'import { TwitterClientInterface } from "@okai/client-twitter";\n\n// Initialize client\nconst client = await TwitterClientInterface.start(runtime);\n\n// Configuration in .env\nTWITTER_USERNAME = your_username;\nTWITTER_PASSWORD = your_password;\nTWITTER_EMAIL = your_email;\nTWITTER_COOKIES = your_cookies;\n'})}),"\n",(0,t.jsx)(n.h3,{id:"components",children:"Components"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"PostClient"}),": Handles creating and managing posts"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"SearchClient"}),": Handles search functionality"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"InteractionClient"}),": Manages user interactions"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"post-management",children:"Post Management"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"class TwitterPostClient {\n  async createPost(content: string) {\n    return await this.post({\n      text: content,\n      media: await this.processMedia(),\n    });\n  }\n\n  async replyTo(tweetId: string, content: string) {\n    return await this.post({\n      text: content,\n      reply: { in_reply_to_tweet_id: tweetId },\n    });\n  }\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"search-features",children:"Search Features"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'class TwitterSearchClient {\n  async searchTweets(query: string) {\n    return await this.search({\n      query,\n      filters: {\n        recency: "recent",\n        language: "en",\n      },\n    });\n  }\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"telegram-client",children:"Telegram Client"}),"\n",(0,t.jsx)(n.p,{children:"The Telegram client provides messaging and bot functionality for Telegram."}),"\n",(0,t.jsx)(n.h3,{id:"basic-setup-2",children:"Basic Setup"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'import { TelegramClientInterface } from "@okai/client-telegram";\n\n// Initialize client\nconst client = await TelegramClientInterface.start(runtime);\n\n// Configuration in .env\nTELEGRAM_BOT_TOKEN = your_bot_token;\n'})}),"\n",(0,t.jsx)(n.h3,{id:"message-management",children:"Message Management"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"class TelegramClient {\n  async handleMessage(message) {\n    // Process message content\n    const content = await this.processMessage(message);\n\n    // Generate response\n    const response = await this.generateResponse(content);\n\n    // Send response\n    await this.sendMessage(message.chat.id, response);\n  }\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"direct-client",children:"Direct Client"}),"\n",(0,t.jsx)(n.p,{children:"The Direct client provides a REST API interface for custom integrations."}),"\n",(0,t.jsx)(n.h3,{id:"basic-setup-3",children:"Basic Setup"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'import { DirectClientInterface } from "@okai/client-direct";\n\n// Initialize client\nconst client = await DirectClientInterface.start(runtime);\n'})}),"\n",(0,t.jsx)(n.h3,{id:"api-endpoints",children:"API Endpoints"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'class DirectClient {\n  constructor() {\n    // Message endpoint\n    this.app.post("/:agentId/message", async (req, res) => {\n      const response = await this.handleMessage(req.body);\n      res.json(response);\n    });\n\n    // Image generation endpoint\n    this.app.post("/:agentId/image", async (req, res) => {\n      const images = await this.generateImage(req.body);\n      res.json(images);\n    });\n  }\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"auto-client",children:"Auto Client"}),"\n",(0,t.jsx)(n.p,{children:"The Auto client enables automated interactions and trading."}),"\n",(0,t.jsx)(n.h3,{id:"basic-setup-4",children:"Basic Setup"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'import { AutoClientInterface } from "@okai/client-auto";\n\n// Initialize client\nconst client = await AutoClientInterface.start(runtime);\n'})}),"\n",(0,t.jsx)(n.h3,{id:"automated-trading",children:"Automated Trading"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"class AutoClient {\n  constructor(runtime: IAgentRuntime) {\n    this.runtime = runtime;\n\n    // Start trading loop\n    this.interval = setInterval(\n      () => {\n        this.makeTrades();\n      },\n      60 * 60 * 1000,\n    ); // 1 hour interval\n  }\n\n  async makeTrades() {\n    // Get recommendations\n    const recommendations = await this.getHighTrustRecommendations();\n\n    // Analyze tokens\n    const analysis = await this.analyzeTokens(recommendations);\n\n    // Execute trades\n    await this.executeTrades(analysis);\n  }\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"common-features",children:"Common Features"}),"\n",(0,t.jsx)(n.h3,{id:"message-handling-1",children:"Message Handling"}),"\n",(0,t.jsx)(n.p,{children:"All clients implement standard message handling:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"interface ClientInterface {\n  async handleMessage(message: Message): Promise<void>;\n  async generateResponse(context: Context): Promise<Response>;\n  async sendMessage(destination: string, content: Content): Promise<void>;\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"media-processing",children:"Media Processing"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"interface MediaProcessor {\n  async processImage(image: Image): Promise<ProcessedImage>;\n  async processVideo(video: Video): Promise<ProcessedVideo>;\n  async processAudio(audio: Audio): Promise<ProcessedAudio>;\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"error-handling",children:"Error Handling"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'class BaseClient {\n  protected async handleError(error: Error) {\n    console.error("Client error:", error);\n\n    if (error.code === "RATE_LIMIT") {\n      await this.handleRateLimit(error);\n    } else if (error.code === "AUTH_FAILED") {\n      await this.refreshAuth();\n    }\n  }\n}\n'})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"best-practices",children:"Best Practices"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Authentication"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Store credentials securely in environment variables"}),"\n",(0,t.jsx)(n.li,{children:"Implement token refresh mechanisms"}),"\n",(0,t.jsx)(n.li,{children:"Handle authentication errors gracefully"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Rate Limiting"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Implement exponential backoff"}),"\n",(0,t.jsx)(n.li,{children:"Track API usage"}),"\n",(0,t.jsx)(n.li,{children:"Queue messages during rate limits"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Error Handling"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Log errors with context"}),"\n",(0,t.jsx)(n.li,{children:"Implement retry logic"}),"\n",(0,t.jsx)(n.li,{children:"Handle platform-specific errors"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Media Processing"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Validate media before processing"}),"\n",(0,t.jsx)(n.li,{children:"Handle different file formats"}),"\n",(0,t.jsx)(n.li,{children:"Implement size limits"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"error-handling-1",children:"Error Handling"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'class BaseClient {\n  protected async handleError(error: Error) {\n    if (error.code === "RATE_LIMIT") {\n      await this.handleRateLimit(error);\n    } else if (error.code === "AUTH_FAILED") {\n      await this.refreshAuth();\n    } else if (error.code === "NETWORK_ERROR") {\n      await this.reconnect();\n    }\n\n    // Log error\n    console.error("Client error:", {\n      type: error.name,\n      message: error.message,\n      code: error.code,\n      stack: error.stack,\n    });\n  }\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"resource-management",children:"Resource Management"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"class ClientManager {\n  private async cleanup() {\n    // Close connections\n    await Promise.all(this.connections.map((conn) => conn.close()));\n\n    // Clear caches\n    this.cache.clear();\n\n    // Cancel timers\n    this.timers.forEach((timer) => clearInterval(timer));\n  }\n\n  private async reconnect() {\n    await this.cleanup();\n    await wait(this.calculateBackoff());\n    await this.initialize();\n  }\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"rate-limiting",children:"Rate Limiting"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"class RateLimiter {\n  private async handleRateLimit(error: RateLimitError) {\n    const delay = this.calculateBackoff(error);\n    await wait(delay);\n    return this.retryRequest();\n  }\n\n  private calculateBackoff(error: RateLimitError): number {\n    return Math.min(this.baseDelay * Math.pow(2, this.attempts), this.maxDelay);\n  }\n}\n"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"performance-optimization",children:"Performance Optimization"}),"\n",(0,t.jsx)(n.h3,{id:"connection-management",children:"Connection Management"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"class ClientManager {\n  private reconnect() {\n    await this.disconnect();\n    await wait(this.backoff());\n    await this.connect();\n  }\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"message-queuing",children:"Message Queuing"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"class MessageQueue {\n  async queueMessage(message: Message) {\n    await this.queue.push(message);\n    this.processQueue();\n  }\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,t.jsx)(n.h3,{id:"common-issues",children:"Common Issues"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Authentication Failures"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"// Implement token refresh\nasync refreshAuth() {\n  const newToken = await this.requestNewToken();\n  await this.updateToken(newToken);\n}\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Rate Limits"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"// Handle rate limiting\nasync handleRateLimit(error) {\n  const delay = this.calculateBackoff(error);\n  await wait(delay);\n  return this.retryRequest();\n}\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Connection Issues"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"// Implement reconnection logic\nasync handleDisconnect() {\n  await this.reconnect({\n    maxAttempts: 5,\n    backoff: 'exponential'\n  });\n}\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Message Processing Failure"})}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:'async processMessage(message) {\n  try {\n    return await this.messageProcessor(message);\n  } catch (error) {\n    if (error.code === "INVALID_FORMAT") {\n      return this.handleInvalidFormat(message);\n    }\n    throw error;\n  }\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"../../packages/core",children:"Error Handling"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>l});var s=i(96540);const t={},a=s.createContext(t);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);