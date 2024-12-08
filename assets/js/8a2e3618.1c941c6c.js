"use strict";(self.webpackChunkokai_docs=self.webpackChunkokai_docs||[]).push([[71285],{52384:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"advanced/autonomous-trading","title":"\ud83d\udcc8 Autonomous Trading","description":"Overview","source":"@site/docs/advanced/autonomous-trading.md","sourceDirName":"advanced","slug":"/advanced/autonomous-trading","permalink":"/okai/docs/advanced/autonomous-trading","draft":false,"unlisted":false,"editUrl":"https://github.com/ai16z/okai/tree/main/docs/docs/advanced/autonomous-trading.md","tags":[],"version":"current","sidebarPosition":16,"frontMatter":{"sidebar_position":16},"sidebar":"tutorialSidebar","previous":{"title":"Trust Engine","permalink":"/okai/docs/advanced/trust-engine"},"next":{"title":"Overview","permalink":"/okai/docs/packages/"}}');var i=t(74848),r=t(28453);const o={sidebar_position:16},s="\ud83d\udcc8 Autonomous Trading",c={},d=[{value:"Overview",id:"overview",level:2},{value:"Core Components",id:"core-components",level:2},{value:"Token Provider",id:"token-provider",level:3},{value:"Swap Execution",id:"swap-execution",level:3},{value:"Position Management",id:"position-management",level:2},{value:"Order Book System",id:"order-book-system",level:3},{value:"Position Sizing",id:"position-sizing",level:3},{value:"Risk Management",id:"risk-management",level:2},{value:"Token Validation",id:"token-validation",level:3},{value:"Trade Management",id:"trade-management",level:3},{value:"Market Analysis",id:"market-analysis",level:2},{value:"Price Data Collection",id:"price-data-collection",level:3},{value:"Technical Analysis",id:"technical-analysis",level:3},{value:"Trade Execution",id:"trade-execution",level:2},{value:"Swap Implementation",id:"swap-implementation",level:3},{value:"DAO Integration",id:"dao-integration",level:3},{value:"Monitoring &amp; Safety",id:"monitoring--safety",level:2},{value:"Health Checks",id:"health-checks",level:3},{value:"Safety Limits",id:"safety-limits",level:3},{value:"Error Handling",id:"error-handling",level:2},{value:"Transaction Errors",id:"transaction-errors",level:3},{value:"Recovery Procedures",id:"recovery-procedures",level:3}];function l(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"-autonomous-trading",children:"\ud83d\udcc8 Autonomous Trading"})}),"\n",(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(n.p,{children:"OKai's autonomous trading system enables automated token trading on the Solana blockchain. The system integrates with Jupiter aggregator for efficient swaps, implements smart order routing, and includes risk management features."}),"\n",(0,i.jsx)(n.h2,{id:"core-components",children:"Core Components"}),"\n",(0,i.jsx)(n.h3,{id:"token-provider",children:"Token Provider"}),"\n",(0,i.jsx)(n.p,{children:"Manages token information and market data:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'class TokenProvider {\n  constructor(\n    private tokenAddress: string,\n    private walletProvider: WalletProvider,\n  ) {\n    this.cache = new NodeCache({ stdTTL: 300 }); // 5 minutes cache\n  }\n\n  async fetchPrices(): Promise<Prices> {\n    const { SOL, BTC, ETH } = TOKEN_ADDRESSES;\n    // Fetch current prices\n    return {\n      solana: { usd: "0" },\n      bitcoin: { usd: "0" },\n      ethereum: { usd: "0" },\n    };\n  }\n\n  async getProcessedTokenData(): Promise<ProcessedTokenData> {\n    return {\n      security: await this.fetchTokenSecurity(),\n      tradeData: await this.fetchTokenTradeData(),\n      holderDistributionTrend: await this.analyzeHolderDistribution(),\n      highValueHolders: await this.filterHighValueHolders(),\n      recentTrades: await this.checkRecentTrades(),\n      dexScreenerData: await this.fetchDexScreenerData(),\n    };\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"swap-execution",children:"Swap Execution"}),"\n",(0,i.jsx)(n.p,{children:"Implementation of token swaps using Jupiter:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'async function swapToken(\n  connection: Connection,\n  walletPublicKey: PublicKey,\n  inputTokenCA: string,\n  outputTokenCA: string,\n  amount: number,\n): Promise<any> {\n  // Get token decimals\n  const decimals = await getTokenDecimals(connection, inputTokenCA);\n  const adjustedAmount = amount * 10 ** decimals;\n\n  // Fetch quote\n  const quoteResponse = await fetch(\n    `https://quote-api.jup.ag/v6/quote?inputMint=${inputTokenCA}` +\n      `&outputMint=${outputTokenCA}` +\n      `&amount=${adjustedAmount}` +\n      `&slippageBps=50`,\n  );\n\n  // Execute swap\n  const swapResponse = await fetch("https://quote-api.jup.ag/v6/swap", {\n    method: "POST",\n    body: JSON.stringify({\n      quoteResponse: await quoteResponse.json(),\n      userPublicKey: walletPublicKey.toString(),\n      wrapAndUnwrapSol: true,\n    }),\n  });\n\n  return swapResponse.json();\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"position-management",children:"Position Management"}),"\n",(0,i.jsx)(n.h3,{id:"order-book-system",children:"Order Book System"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"interface Order {\n  userId: string;\n  ticker: string;\n  contractAddress: string;\n  timestamp: string;\n  buyAmount: number;\n  price: number;\n}\n\nclass OrderBookProvider {\n  async addOrder(order: Order): Promise<void> {\n    let orderBook = await this.readOrderBook();\n    orderBook.push(order);\n    await this.writeOrderBook(orderBook);\n  }\n\n  async calculateProfitLoss(userId: string): Promise<number> {\n    const orders = await this.getUserOrders(userId);\n    return orders.reduce((total, order) => {\n      const currentPrice = this.getCurrentPrice(order.ticker);\n      const pl = (currentPrice - order.price) * order.buyAmount;\n      return total + pl;\n    }, 0);\n  }\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"position-sizing",children:"Position Sizing"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'async function calculatePositionSize(\n  tokenData: ProcessedTokenData,\n  riskLevel: "LOW" | "MEDIUM" | "HIGH",\n): Promise<CalculatedBuyAmounts> {\n  const { liquidity, marketCap } = tokenData.dexScreenerData.pairs[0];\n\n  // Impact percentages based on liquidity\n  const impactPercentages = {\n    LOW: 0.01, // 1% of liquidity\n    MEDIUM: 0.05, // 5% of liquidity\n    HIGH: 0.1, // 10% of liquidity\n  };\n\n  return {\n    none: 0,\n    low: liquidity.usd * impactPercentages.LOW,\n    medium: liquidity.usd * impactPercentages.MEDIUM,\n    high: liquidity.usd * impactPercentages.HIGH,\n  };\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"risk-management",children:"Risk Management"}),"\n",(0,i.jsx)(n.h3,{id:"token-validation",children:"Token Validation"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"async function validateToken(token: TokenPerformance): Promise<boolean> {\n  const security = await fetchTokenSecurity(token.tokenAddress);\n\n  // Red flags check\n  if (\n    security.rugPull ||\n    security.isScam ||\n    token.rapidDump ||\n    token.suspiciousVolume ||\n    token.liquidity.usd < 1000 || // Minimum $1000 liquidity\n    token.marketCap < 100000 // Minimum $100k market cap\n  ) {\n    return false;\n  }\n\n  // Holder distribution check\n  const holderData = await fetchHolderList(token.tokenAddress);\n  const topHolderPercent = calculateTopHolderPercentage(holderData);\n  if (topHolderPercent > 0.5) {\n    // >50% held by top holders\n    return false;\n  }\n\n  return true;\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"trade-management",children:"Trade Management"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"interface TradeManager {\n    async executeTrade(params: {\n        inputToken: string,\n        outputToken: string,\n        amount: number,\n        slippage: number\n    }): Promise<string>;\n\n    async monitorPosition(params: {\n        tokenAddress: string,\n        entryPrice: number,\n        stopLoss: number,\n        takeProfit: number\n    }): Promise<void>;\n\n    async closePosition(params: {\n        tokenAddress: string,\n        amount: number\n    }): Promise<string>;\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"market-analysis",children:"Market Analysis"}),"\n",(0,i.jsx)(n.h3,{id:"price-data-collection",children:"Price Data Collection"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"async function collectMarketData(\n  tokenAddress: string,\n): Promise<TokenTradeData> {\n  return {\n    price: await fetchCurrentPrice(tokenAddress),\n    volume_24h: await fetch24HourVolume(tokenAddress),\n    price_change_24h: await fetch24HourPriceChange(tokenAddress),\n    liquidity: await fetchLiquidity(tokenAddress),\n    holder_data: await fetchHolderData(tokenAddress),\n    trade_history: await fetchTradeHistory(tokenAddress),\n  };\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"technical-analysis",children:"Technical Analysis"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"function analyzeMarketConditions(tradeData: TokenTradeData): MarketAnalysis {\n  return {\n    trend: analyzePriceTrend(tradeData.price_history),\n    volume_profile: analyzeVolumeProfile(tradeData.volume_history),\n    liquidity_depth: analyzeLiquidityDepth(tradeData.liquidity),\n    holder_behavior: analyzeHolderBehavior(tradeData.holder_data),\n  };\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"trade-execution",children:"Trade Execution"}),"\n",(0,i.jsx)(n.h3,{id:"swap-implementation",children:"Swap Implementation"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'async function executeSwap(\n  runtime: IAgentRuntime,\n  input: {\n    tokenIn: string;\n    tokenOut: string;\n    amountIn: number;\n    slippage: number;\n  },\n): Promise<string> {\n  // Prepare transaction\n  const { swapTransaction } = await getSwapTransaction(input);\n\n  // Sign transaction\n  const keypair = getKeypairFromPrivateKey(\n    runtime.getSetting("SOLANA_PRIVATE_KEY") ??\n      runtime.getSetting("WALLET_PRIVATE_KEY"),\n  );\n  transaction.sign([keypair]);\n\n  // Execute swap\n  const signature = await connection.sendTransaction(transaction);\n\n  // Confirm transaction\n  await connection.confirmTransaction({\n    signature,\n    blockhash: latestBlockhash.blockhash,\n    lastValidBlockHeight: latestBlockhash.lastValidBlockHeight,\n  });\n\n  return signature;\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"dao-integration",children:"DAO Integration"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"async function executeSwapForDAO(\n  runtime: IAgentRuntime,\n  params: {\n    inputToken: string;\n    outputToken: string;\n    amount: number;\n  },\n): Promise<string> {\n  const authority = getAuthorityKeypair(runtime);\n  const [statePDA, walletPDA] = await derivePDAs(authority);\n\n  // Prepare instruction data\n  const instructionData = prepareSwapInstruction(params);\n\n  // Execute swap through DAO\n  return invokeSwapDao(\n    connection,\n    authority,\n    statePDA,\n    walletPDA,\n    instructionData,\n  );\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"monitoring--safety",children:"Monitoring & Safety"}),"\n",(0,i.jsx)(n.h3,{id:"health-checks",children:"Health Checks"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"async function performHealthChecks(): Promise<HealthStatus> {\n  return {\n    connection: await checkConnectionStatus(),\n    wallet: await checkWalletBalance(),\n    orders: await checkOpenOrders(),\n    positions: await checkPositions(),\n  };\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"safety-limits",children:"Safety Limits"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"const SAFETY_LIMITS = {\n  MAX_POSITION_SIZE: 0.1, // 10% of portfolio\n  MAX_SLIPPAGE: 0.05, // 5% slippage\n  MIN_LIQUIDITY: 1000, // $1000 minimum liquidity\n  MAX_PRICE_IMPACT: 0.03, // 3% price impact\n  STOP_LOSS: 0.15, // 15% stop loss\n};\n"})}),"\n",(0,i.jsx)(n.h2,{id:"error-handling",children:"Error Handling"}),"\n",(0,i.jsx)(n.h3,{id:"transaction-errors",children:"Transaction Errors"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'async function handleTransactionError(\n  error: Error,\n  transaction: Transaction,\n): Promise<void> {\n  if (error.message.includes("insufficient funds")) {\n    await handleInsufficientFunds();\n  } else if (error.message.includes("slippage tolerance exceeded")) {\n    await handleSlippageError(transaction);\n  } else {\n    await logTransactionError(error, transaction);\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"recovery-procedures",children:"Recovery Procedures"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"async function recoverFromError(\n  error: Error,\n  context: TradingContext,\n): Promise<void> {\n  // Stop all active trades\n  await stopActiveTrades();\n\n  // Close risky positions\n  await closeRiskyPositions();\n\n  // Reset system state\n  await resetTradingState();\n\n  // Notify administrators\n  await notifyAdministrators(error, context);\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>s});var a=t(96540);const i={},r=a.createContext(i);function o(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);