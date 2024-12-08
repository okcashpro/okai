"use strict";(self.webpackChunkokai_docs=self.webpackChunkokai_docs||[]).push([[35045],{64677:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"classes/MemoryManager","title":"MemoryManager","description":"@okcashpro/okai v0.1.5-alpha.5 / MemoryManager","source":"@site/api/classes/MemoryManager.md","sourceDirName":"classes","slug":"/classes/MemoryManager","permalink":"/okai/api/classes/MemoryManager","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"MemoryCacheAdapter","permalink":"/okai/api/classes/MemoryCacheAdapter"},"next":{"title":"Service","permalink":"/okai/api/classes/Service"}}');var s=n(74848),d=n(28453);const o={},l="Class: MemoryManager",a={},c=[{value:"Implements",id:"implements",level:2},{value:"Constructors",id:"constructors",level:2},{value:"new MemoryManager()",id:"new-memorymanager",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties",level:2},{value:"runtime",id:"runtime",level:3},{value:"Implementation of",id:"implementation-of",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"tableName",id:"tablename",level:3},{value:"Implementation of",id:"implementation-of-1",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"Methods",id:"methods",level:2},{value:"addEmbeddingToMemory()",id:"addembeddingtomemory",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Throws",id:"throws",level:4},{value:"Implementation of",id:"implementation-of-2",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"getMemories()",id:"getmemories",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Implementation of",id:"implementation-of-3",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"getCachedEmbeddings()",id:"getcachedembeddings",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Implementation of",id:"implementation-of-4",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"searchMemoriesByEmbedding()",id:"searchmemoriesbyembedding",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Implementation of",id:"implementation-of-5",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"createMemory()",id:"creatememory",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Implementation of",id:"implementation-of-6",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"getMemoriesByRoomIds()",id:"getmemoriesbyroomids",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Implementation of",id:"implementation-of-7",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"getMemoryById()",id:"getmemorybyid",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"Returns",id:"returns-7",level:4},{value:"Implementation of",id:"implementation-of-8",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"removeMemory()",id:"removememory",level:3},{value:"Parameters",id:"parameters-8",level:4},{value:"Returns",id:"returns-8",level:4},{value:"Implementation of",id:"implementation-of-9",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:"removeAllMemories()",id:"removeallmemories",level:3},{value:"Parameters",id:"parameters-9",level:4},{value:"Returns",id:"returns-9",level:4},{value:"Implementation of",id:"implementation-of-10",level:4},{value:"Defined in",id:"defined-in-11",level:4},{value:"countMemories()",id:"countmemories",level:3},{value:"Parameters",id:"parameters-10",level:4},{value:"Returns",id:"returns-10",level:4},{value:"Implementation of",id:"implementation-of-11",level:4},{value:"Defined in",id:"defined-in-12",level:4}];function t(e){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/okai/api/",children:"@okcashpro/okai v0.1.5-alpha.5"})," / MemoryManager"]}),"\n",(0,s.jsx)(r.header,{children:(0,s.jsx)(r.h1,{id:"class-memorymanager",children:"Class: MemoryManager"})}),"\n",(0,s.jsx)(r.p,{children:"Manage memories in the database."}),"\n",(0,s.jsx)(r.h2,{id:"implements",children:"Implements"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsx)(r.li,{children:(0,s.jsx)(r.a,{href:"/okai/api/interfaces/IMemoryManager",children:(0,s.jsx)(r.code,{children:"IMemoryManager"})})}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"constructors",children:"Constructors"}),"\n",(0,s.jsx)(r.h3,{id:"new-memorymanager",children:"new MemoryManager()"}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"new MemoryManager"}),"(",(0,s.jsx)(r.code,{children:"opts"}),"): ",(0,s.jsx)(r.a,{href:"/okai/api/classes/MemoryManager",children:(0,s.jsx)(r.code,{children:"MemoryManager"})})]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"Constructs a new MemoryManager instance."}),"\n",(0,s.jsx)(r.h4,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.strong,{children:"opts"})]}),"\n",(0,s.jsx)(r.p,{children:"Options for the manager."}),"\n",(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.strong,{children:"opts.tableName"}),": ",(0,s.jsx)(r.code,{children:"string"})]}),"\n",(0,s.jsx)(r.p,{children:"The name of the table this manager will operate on."}),"\n",(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.strong,{children:"opts.runtime"}),": ",(0,s.jsx)(r.a,{href:"/okai/api/interfaces/IAgentRuntime",children:(0,s.jsx)(r.code,{children:"IAgentRuntime"})})]}),"\n",(0,s.jsx)(r.p,{children:"The AgentRuntime instance associated with this manager."}),"\n",(0,s.jsx)(r.h4,{id:"returns",children:"Returns"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/okai/api/classes/MemoryManager",children:(0,s.jsx)(r.code,{children:"MemoryManager"})})}),"\n",(0,s.jsx)(r.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"https://github.com/okcashpro/okai/blob/main/packages/core/src/memory.ts#L33",children:"packages/core/src/memory.ts:33"})}),"\n",(0,s.jsx)(r.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsx)(r.h3,{id:"runtime",children:"runtime"}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"runtime"}),": ",(0,s.jsx)(r.a,{href:"/okai/api/interfaces/IAgentRuntime",children:(0,s.jsx)(r.code,{children:"IAgentRuntime"})})]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"The AgentRuntime instance associated with this manager."}),"\n",(0,s.jsx)(r.h4,{id:"implementation-of",children:"Implementation of"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/okai/api/interfaces/IMemoryManager",children:(0,s.jsx)(r.code,{children:"IMemoryManager"})}),".",(0,s.jsx)(r.a,{href:"/okai/api/interfaces/IMemoryManager#runtime",children:(0,s.jsx)(r.code,{children:"runtime"})})]}),"\n",(0,s.jsx)(r.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"https://github.com/okcashpro/okai/blob/main/packages/core/src/memory.ts#L20",children:"packages/core/src/memory.ts:20"})}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"tablename",children:"tableName"}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"tableName"}),": ",(0,s.jsx)(r.code,{children:"string"})]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"The name of the database table this manager operates on."}),"\n",(0,s.jsx)(r.h4,{id:"implementation-of-1",children:"Implementation of"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/okai/api/interfaces/IMemoryManager",children:(0,s.jsx)(r.code,{children:"IMemoryManager"})}),".",(0,s.jsx)(r.a,{href:"/okai/api/interfaces/IMemoryManager#tableName",children:(0,s.jsx)(r.code,{children:"tableName"})})]}),"\n",(0,s.jsx)(r.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"https://github.com/okcashpro/okai/blob/main/packages/core/src/memory.ts#L25",children:"packages/core/src/memory.ts:25"})}),"\n",(0,s.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsx)(r.h3,{id:"addembeddingtomemory",children:"addEmbeddingToMemory()"}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"addEmbeddingToMemory"}),"(",(0,s.jsx)(r.code,{children:"memory"}),"): ",(0,s.jsx)(r.code,{children:"Promise"}),"<",(0,s.jsx)(r.a,{href:"/okai/api/interfaces/Memory",children:(0,s.jsx)(r.code,{children:"Memory"})}),">"]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"Adds an embedding vector to a memory object if one doesn't already exist.\nThe embedding is generated from the memory's text content using the runtime's\nembedding model. If the memory has no text content, an error is thrown."}),"\n",(0,s.jsx)(r.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.strong,{children:"memory"}),": ",(0,s.jsx)(r.a,{href:"/okai/api/interfaces/Memory",children:(0,s.jsx)(r.code,{children:"Memory"})})]}),"\n",(0,s.jsx)(r.p,{children:"The memory object to add an embedding to"}),"\n",(0,s.jsx)(r.h4,{id:"returns-1",children:"Returns"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"Promise"}),"<",(0,s.jsx)(r.a,{href:"/okai/api/interfaces/Memory",children:(0,s.jsx)(r.code,{children:"Memory"})}),">"]}),"\n",(0,s.jsx)(r.p,{children:"The memory object with an embedding vector added"}),"\n",(0,s.jsx)(r.h4,{id:"throws",children:"Throws"}),"\n",(0,s.jsx)(r.p,{children:"Error if the memory content is empty"}),"\n",(0,s.jsx)(r.h4,{id:"implementation-of-2",children:"Implementation of"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/okai/api/interfaces/IMemoryManager",children:(0,s.jsx)(r.code,{children:"IMemoryManager"})}),".",(0,s.jsx)(r.a,{href:"/okai/api/interfaces/IMemoryManager#addEmbeddingToMemory",children:(0,s.jsx)(r.code,{children:"addEmbeddingToMemory"})})]}),"\n",(0,s.jsx)(r.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"https://github.com/okcashpro/okai/blob/main/packages/core/src/memory.ts#L52",children:"packages/core/src/memory.ts:52"})}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"getmemories",children:"getMemories()"}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"getMemories"}),"(",(0,s.jsx)(r.code,{children:"opts"}),"): ",(0,s.jsx)(r.code,{children:"Promise"}),"<",(0,s.jsx)(r.a,{href:"/okai/api/interfaces/Memory",children:(0,s.jsx)(r.code,{children:"Memory"})}),"[]>"]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"Retrieves a list of memories by user IDs, with optional deduplication."}),"\n",(0,s.jsx)(r.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.strong,{children:"opts"})]}),"\n",(0,s.jsx)(r.p,{children:"Options including user IDs, count, and uniqueness."}),"\n",(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.strong,{children:"opts.roomId"}),": `${string}-${string}-${string}-${string}-${string}`"]}),"\n",(0,s.jsx)(r.p,{children:"The room ID to retrieve memories for."}),"\n",(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.strong,{children:"opts.count?"}),": ",(0,s.jsx)(r.code,{children:"number"})," = ",(0,s.jsx)(r.code,{children:"10"})]}),"\n",(0,s.jsx)(r.p,{children:"The number of memories to retrieve."}),"\n",(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.strong,{children:"opts.unique?"}),": ",(0,s.jsx)(r.code,{children:"boolean"})," = ",(0,s.jsx)(r.code,{children:"true"})]}),"\n",(0,s.jsx)(r.p,{children:"Whether to retrieve unique memories only."}),"\n",(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.strong,{children:"opts.start?"}),": ",(0,s.jsx)(r.code,{children:"number"})]}),"\n",(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.strong,{children:"opts.end?"}),": ",(0,s.jsx)(r.code,{children:"number"})]}),"\n",(0,s.jsx)(r.h4,{id:"returns-2",children:"Returns"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"Promise"}),"<",(0,s.jsx)(r.a,{href:"/okai/api/interfaces/Memory",children:(0,s.jsx)(r.code,{children:"Memory"})}),"[]>"]}),"\n",(0,s.jsx)(r.p,{children:"A Promise resolving to an array of Memory objects."}),"\n",(0,s.jsx)(r.h4,{id:"implementation-of-3",children:"Implementation of"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/okai/api/interfaces/IMemoryManager",children:(0,s.jsx)(r.code,{children:"IMemoryManager"})}),".",(0,s.jsx)(r.a,{href:"/okai/api/interfaces/IMemoryManager#getMemories",children:(0,s.jsx)(r.code,{children:"getMemories"})})]}),"\n",(0,s.jsx)(r.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"https://github.com/okcashpro/okai/blob/main/packages/core/src/memory.ts#L87",children:"packages/core/src/memory.ts:87"})}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"getcachedembeddings",children:"getCachedEmbeddings()"}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"getCachedEmbeddings"}),"(",(0,s.jsx)(r.code,{children:"content"}),"): ",(0,s.jsx)(r.code,{children:"Promise"}),"<",(0,s.jsx)(r.code,{children:"object"}),"[]>"]}),"\n"]}),"\n",(0,s.jsx)(r.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.strong,{children:"content"}),": ",(0,s.jsx)(r.code,{children:"string"})]}),"\n",(0,s.jsx)(r.h4,{id:"returns-3",children:"Returns"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"Promise"}),"<",(0,s.jsx)(r.code,{children:"object"}),"[]>"]}),"\n",(0,s.jsx)(r.h4,{id:"implementation-of-4",children:"Implementation of"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/okai/api/interfaces/IMemoryManager",children:(0,s.jsx)(r.code,{children:"IMemoryManager"})}),".",(0,s.jsx)(r.a,{href:"/okai/api/interfaces/IMemoryManager#getCachedEmbeddings",children:(0,s.jsx)(r.code,{children:"getCachedEmbeddings"})})]}),"\n",(0,s.jsx)(r.h4,{id:"defined-in-5",children:"Defined in"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"https://github.com/okcashpro/okai/blob/main/packages/core/src/memory.ts#L111",children:"packages/core/src/memory.ts:111"})}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"searchmemoriesbyembedding",children:"searchMemoriesByEmbedding()"}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"searchMemoriesByEmbedding"}),"(",(0,s.jsx)(r.code,{children:"embedding"}),", ",(0,s.jsx)(r.code,{children:"opts"}),"): ",(0,s.jsx)(r.code,{children:"Promise"}),"<",(0,s.jsx)(r.a,{href:"/okai/api/interfaces/Memory",children:(0,s.jsx)(r.code,{children:"Memory"})}),"[]>"]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"Searches for memories similar to a given embedding vector."}),"\n",(0,s.jsx)(r.h4,{id:"parameters-4",children:"Parameters"}),"\n",(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.strong,{children:"embedding"}),": ",(0,s.jsx)(r.code,{children:"number"}),"[]"]}),"\n",(0,s.jsx)(r.p,{children:"The embedding vector to search with."}),"\n",(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.strong,{children:"opts"})]}),"\n",(0,s.jsx)(r.p,{children:"Options including match threshold, count, user IDs, and uniqueness."}),"\n",(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.strong,{children:"opts.match_threshold?"}),": ",(0,s.jsx)(r.code,{children:"number"})]}),"\n",(0,s.jsx)(r.p,{children:"The similarity threshold for matching memories."}),"\n",(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.strong,{children:"opts.count?"}),": ",(0,s.jsx)(r.code,{children:"number"})]}),"\n",(0,s.jsx)(r.p,{children:"The maximum number of memories to retrieve."}),"\n",(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.strong,{children:"opts.roomId"}),": `${string}-${string}-${string}-${string}-${string}`"]}),"\n",(0,s.jsx)(r.p,{children:"The room ID to retrieve memories for."}),"\n",(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.strong,{children:"opts.unique?"}),": ",(0,s.jsx)(r.code,{children:"boolean"})]}),"\n",(0,s.jsx)(r.p,{children:"Whether to retrieve unique memories only."}),"\n",(0,s.jsx)(r.h4,{id:"returns-4",children:"Returns"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"Promise"}),"<",(0,s.jsx)(r.a,{href:"/okai/api/interfaces/Memory",children:(0,s.jsx)(r.code,{children:"Memory"})}),"[]>"]}),"\n",(0,s.jsx)(r.p,{children:"A Promise resolving to an array of Memory objects that match the embedding."}),"\n",(0,s.jsx)(r.h4,{id:"implementation-of-5",children:"Implementation of"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/okai/api/interfaces/IMemoryManager",children:(0,s.jsx)(r.code,{children:"IMemoryManager"})}),".",(0,s.jsx)(r.a,{href:"/okai/api/interfaces/IMemoryManager#searchMemoriesByEmbedding",children:(0,s.jsx)(r.code,{children:"searchMemoriesByEmbedding"})})]}),"\n",(0,s.jsx)(r.h4,{id:"defined-in-6",children:"Defined in"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"https://github.com/okcashpro/okai/blob/main/packages/core/src/memory.ts#L137",children:"packages/core/src/memory.ts:137"})}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"creatememory",children:"createMemory()"}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"createMemory"}),"(",(0,s.jsx)(r.code,{children:"memory"}),", ",(0,s.jsx)(r.code,{children:"unique"}),"): ",(0,s.jsx)(r.code,{children:"Promise"}),"<",(0,s.jsx)(r.code,{children:"void"}),">"]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"Creates a new memory in the database, with an option to check for similarity before insertion."}),"\n",(0,s.jsx)(r.h4,{id:"parameters-5",children:"Parameters"}),"\n",(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.strong,{children:"memory"}),": ",(0,s.jsx)(r.a,{href:"/okai/api/interfaces/Memory",children:(0,s.jsx)(r.code,{children:"Memory"})})]}),"\n",(0,s.jsx)(r.p,{children:"The memory object to create."}),"\n",(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.strong,{children:"unique"}),": ",(0,s.jsx)(r.code,{children:"boolean"})," = ",(0,s.jsx)(r.code,{children:"false"})]}),"\n",(0,s.jsx)(r.p,{children:"Whether to check for similarity before insertion."}),"\n",(0,s.jsx)(r.h4,{id:"returns-5",children:"Returns"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"Promise"}),"<",(0,s.jsx)(r.code,{children:"void"}),">"]}),"\n",(0,s.jsx)(r.p,{children:"A Promise that resolves when the operation completes."}),"\n",(0,s.jsx)(r.h4,{id:"implementation-of-6",children:"Implementation of"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/okai/api/interfaces/IMemoryManager",children:(0,s.jsx)(r.code,{children:"IMemoryManager"})}),".",(0,s.jsx)(r.a,{href:"/okai/api/interfaces/IMemoryManager#createMemory",children:(0,s.jsx)(r.code,{children:"createMemory"})})]}),"\n",(0,s.jsx)(r.h4,{id:"defined-in-7",children:"Defined in"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"https://github.com/okcashpro/okai/blob/main/packages/core/src/memory.ts#L172",children:"packages/core/src/memory.ts:172"})}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"getmemoriesbyroomids",children:"getMemoriesByRoomIds()"}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"getMemoriesByRoomIds"}),"(",(0,s.jsx)(r.code,{children:"params"}),"): ",(0,s.jsx)(r.code,{children:"Promise"}),"<",(0,s.jsx)(r.a,{href:"/okai/api/interfaces/Memory",children:(0,s.jsx)(r.code,{children:"Memory"})}),"[]>"]}),"\n"]}),"\n",(0,s.jsx)(r.h4,{id:"parameters-6",children:"Parameters"}),"\n",(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.strong,{children:"params"})]}),"\n",(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.strong,{children:"params.roomIds"}),": `${string}-${string}-${string}-${string}-${string}`[]"]}),"\n",(0,s.jsx)(r.h4,{id:"returns-6",children:"Returns"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"Promise"}),"<",(0,s.jsx)(r.a,{href:"/okai/api/interfaces/Memory",children:(0,s.jsx)(r.code,{children:"Memory"})}),"[]>"]}),"\n",(0,s.jsx)(r.h4,{id:"implementation-of-7",children:"Implementation of"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/okai/api/interfaces/IMemoryManager",children:(0,s.jsx)(r.code,{children:"IMemoryManager"})}),".",(0,s.jsx)(r.a,{href:"/okai/api/interfaces/IMemoryManager#getMemoriesByRoomIds",children:(0,s.jsx)(r.code,{children:"getMemoriesByRoomIds"})})]}),"\n",(0,s.jsx)(r.h4,{id:"defined-in-8",children:"Defined in"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"https://github.com/okcashpro/okai/blob/main/packages/core/src/memory.ts#L192",children:"packages/core/src/memory.ts:192"})}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"getmemorybyid",children:"getMemoryById()"}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"getMemoryById"}),"(",(0,s.jsx)(r.code,{children:"id"}),"): ",(0,s.jsx)(r.code,{children:"Promise"}),"<",(0,s.jsx)(r.a,{href:"/okai/api/interfaces/Memory",children:(0,s.jsx)(r.code,{children:"Memory"})}),">"]}),"\n"]}),"\n",(0,s.jsx)(r.h4,{id:"parameters-7",children:"Parameters"}),"\n",(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.strong,{children:"id"}),": `${string}-${string}-${string}-${string}-${string}`"]}),"\n",(0,s.jsx)(r.h4,{id:"returns-7",children:"Returns"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"Promise"}),"<",(0,s.jsx)(r.a,{href:"/okai/api/interfaces/Memory",children:(0,s.jsx)(r.code,{children:"Memory"})}),">"]}),"\n",(0,s.jsx)(r.h4,{id:"implementation-of-8",children:"Implementation of"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/okai/api/interfaces/IMemoryManager",children:(0,s.jsx)(r.code,{children:"IMemoryManager"})}),".",(0,s.jsx)(r.a,{href:"/okai/api/interfaces/IMemoryManager#getMemoryById",children:(0,s.jsx)(r.code,{children:"getMemoryById"})})]}),"\n",(0,s.jsx)(r.h4,{id:"defined-in-9",children:"Defined in"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"https://github.com/okcashpro/okai/blob/main/packages/core/src/memory.ts#L200",children:"packages/core/src/memory.ts:200"})}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"removememory",children:"removeMemory()"}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"removeMemory"}),"(",(0,s.jsx)(r.code,{children:"memoryId"}),"): ",(0,s.jsx)(r.code,{children:"Promise"}),"<",(0,s.jsx)(r.code,{children:"void"}),">"]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"Removes a memory from the database by its ID."}),"\n",(0,s.jsx)(r.h4,{id:"parameters-8",children:"Parameters"}),"\n",(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.strong,{children:"memoryId"}),": `${string}-${string}-${string}-${string}-${string}`"]}),"\n",(0,s.jsx)(r.p,{children:"The ID of the memory to remove."}),"\n",(0,s.jsx)(r.h4,{id:"returns-8",children:"Returns"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"Promise"}),"<",(0,s.jsx)(r.code,{children:"void"}),">"]}),"\n",(0,s.jsx)(r.p,{children:"A Promise that resolves when the operation completes."}),"\n",(0,s.jsx)(r.h4,{id:"implementation-of-9",children:"Implementation of"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/okai/api/interfaces/IMemoryManager",children:(0,s.jsx)(r.code,{children:"IMemoryManager"})}),".",(0,s.jsx)(r.a,{href:"/okai/api/interfaces/IMemoryManager#removeMemory",children:(0,s.jsx)(r.code,{children:"removeMemory"})})]}),"\n",(0,s.jsx)(r.h4,{id:"defined-in-10",children:"Defined in"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"https://github.com/okcashpro/okai/blob/main/packages/core/src/memory.ts#L211",children:"packages/core/src/memory.ts:211"})}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"removeallmemories",children:"removeAllMemories()"}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"removeAllMemories"}),"(",(0,s.jsx)(r.code,{children:"roomId"}),"): ",(0,s.jsx)(r.code,{children:"Promise"}),"<",(0,s.jsx)(r.code,{children:"void"}),">"]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"Removes all memories associated with a set of user IDs."}),"\n",(0,s.jsx)(r.h4,{id:"parameters-9",children:"Parameters"}),"\n",(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.strong,{children:"roomId"}),": `${string}-${string}-${string}-${string}-${string}`"]}),"\n",(0,s.jsx)(r.p,{children:"The room ID to remove memories for."}),"\n",(0,s.jsx)(r.h4,{id:"returns-9",children:"Returns"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"Promise"}),"<",(0,s.jsx)(r.code,{children:"void"}),">"]}),"\n",(0,s.jsx)(r.p,{children:"A Promise that resolves when the operation completes."}),"\n",(0,s.jsx)(r.h4,{id:"implementation-of-10",children:"Implementation of"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/okai/api/interfaces/IMemoryManager",children:(0,s.jsx)(r.code,{children:"IMemoryManager"})}),".",(0,s.jsx)(r.a,{href:"/okai/api/interfaces/IMemoryManager#removeAllMemories",children:(0,s.jsx)(r.code,{children:"removeAllMemories"})})]}),"\n",(0,s.jsx)(r.h4,{id:"defined-in-11",children:"Defined in"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"https://github.com/okcashpro/okai/blob/main/packages/core/src/memory.ts#L223",children:"packages/core/src/memory.ts:223"})}),"\n",(0,s.jsx)(r.hr,{}),"\n",(0,s.jsx)(r.h3,{id:"countmemories",children:"countMemories()"}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"countMemories"}),"(",(0,s.jsx)(r.code,{children:"roomId"}),", ",(0,s.jsx)(r.code,{children:"unique"}),"): ",(0,s.jsx)(r.code,{children:"Promise"}),"<",(0,s.jsx)(r.code,{children:"number"}),">"]}),"\n"]}),"\n",(0,s.jsx)(r.p,{children:"Counts the number of memories associated with a set of user IDs, with an option for uniqueness."}),"\n",(0,s.jsx)(r.h4,{id:"parameters-10",children:"Parameters"}),"\n",(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.strong,{children:"roomId"}),": `${string}-${string}-${string}-${string}-${string}`"]}),"\n",(0,s.jsx)(r.p,{children:"The room ID to count memories for."}),"\n",(0,s.jsxs)(r.p,{children:["\u2022 ",(0,s.jsx)(r.strong,{children:"unique"}),": ",(0,s.jsx)(r.code,{children:"boolean"})," = ",(0,s.jsx)(r.code,{children:"true"})]}),"\n",(0,s.jsx)(r.p,{children:"Whether to count unique memories only."}),"\n",(0,s.jsx)(r.h4,{id:"returns-10",children:"Returns"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"Promise"}),"<",(0,s.jsx)(r.code,{children:"number"}),">"]}),"\n",(0,s.jsx)(r.p,{children:"A Promise resolving to the count of memories."}),"\n",(0,s.jsx)(r.h4,{id:"implementation-of-11",children:"Implementation of"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/okai/api/interfaces/IMemoryManager",children:(0,s.jsx)(r.code,{children:"IMemoryManager"})}),".",(0,s.jsx)(r.a,{href:"/okai/api/interfaces/IMemoryManager#countMemories",children:(0,s.jsx)(r.code,{children:"countMemories"})})]}),"\n",(0,s.jsx)(r.h4,{id:"defined-in-12",children:"Defined in"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"https://github.com/okcashpro/okai/blob/main/packages/core/src/memory.ts#L236",children:"packages/core/src/memory.ts:236"})})]})}function h(e={}){const{wrapper:r}={...(0,d.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>o,x:()=>l});var i=n(96540);const s={},d=i.createContext(s);function o(e){const r=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(d.Provider,{value:r},e.children)}}}]);