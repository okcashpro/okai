"use strict";(self.webpackChunkokai_docs=self.webpackChunkokai_docs||[]).push([[51149],{20556:e=>{e.exports=JSON.parse('{"version":{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"\ud83d\ude80 Introduction","href":"/okai/docs/intro","docId":"intro","unlisted":false},{"type":"category","label":"\ud83c\udfc1 Getting Started","items":[{"type":"link","label":"\u2b50 Quick Start","href":"/okai/docs/quickstart","docId":"quickstart","unlisted":false},{"type":"link","label":"\u2753 FAQ","href":"/okai/docs/faq","docId":"faq","unlisted":false}],"collapsed":false,"collapsible":true},{"type":"category","label":"\ud83e\udde0 Core Concepts","collapsed":false,"items":[{"type":"link","label":"Character Files","href":"/okai/docs/core/characterfile","docId":"core/characterfile","unlisted":false},{"type":"link","label":"Agents","href":"/okai/docs/core/agents","docId":"core/agents","unlisted":false},{"type":"link","label":"Providers","href":"/okai/docs/core/providers","docId":"core/providers","unlisted":false},{"type":"link","label":"Actions","href":"/okai/docs/core/actions","docId":"core/actions","unlisted":false},{"type":"link","label":"Evaluators","href":"/okai/docs/core/evaluators","docId":"core/evaluators","unlisted":false}],"collapsible":true},{"type":"category","label":"\ud83d\udcd8 Guides","collapsed":false,"items":[{"type":"link","label":"Configuration","href":"/okai/docs/guides/configuration","docId":"guides/configuration","unlisted":false},{"type":"link","label":"Advanced Usage","href":"/okai/docs/guides/advanced","docId":"guides/advanced","unlisted":false},{"type":"link","label":"Secrets Management","href":"/okai/docs/guides/secrets-management","docId":"guides/secrets-management","unlisted":false},{"type":"link","label":"Local Development","href":"/okai/docs/guides/local-development","docId":"guides/local-development","unlisted":false}],"collapsible":true},{"type":"category","label":"\ud83c\udf93 Advanced Topics","collapsed":false,"items":[{"type":"link","label":"Fine-tuning","href":"/okai/docs/advanced/fine-tuning","docId":"advanced/fine-tuning","unlisted":false},{"type":"link","label":"Infrastructure","href":"/okai/docs/advanced/infrastructure","docId":"advanced/infrastructure","unlisted":false},{"type":"link","label":"Trust Engine","href":"/okai/docs/advanced/trust-engine","docId":"advanced/trust-engine","unlisted":false},{"type":"link","label":"Autonomous Trading","href":"/okai/docs/advanced/autonomous-trading","docId":"advanced/autonomous-trading","unlisted":false}],"collapsible":true},{"type":"category","label":"\ud83d\udce6 Packages","collapsed":false,"items":[{"type":"link","label":"Overview","href":"/okai/docs/packages/","docId":"packages/packages","unlisted":false},{"type":"link","label":"Core Package","href":"/okai/docs/packages/core","docId":"packages/core","unlisted":false},{"type":"link","label":"Database Adapters","href":"/okai/docs/packages/adapters","docId":"packages/adapters","unlisted":false},{"type":"link","label":"Client Packages","href":"/okai/docs/packages/clients","docId":"packages/clients","unlisted":false},{"type":"link","label":"Agent Package","href":"/okai/docs/packages/agent","docId":"packages/agent","unlisted":false},{"type":"link","label":"Plugin System","href":"/okai/docs/packages/plugins","docId":"packages/plugins","unlisted":false}],"collapsible":true}]},"docs":{"advanced/autonomous-trading":{"id":"advanced/autonomous-trading","title":"\ud83d\udcc8 Autonomous Trading","description":"Overview","sidebar":"tutorialSidebar"},"advanced/fine-tuning":{"id":"advanced/fine-tuning","title":"\ud83c\udfaf Fine-tuning Guide","description":"Overview","sidebar":"tutorialSidebar"},"advanced/infrastructure":{"id":"advanced/infrastructure","title":"\ud83c\udfd7\ufe0f Infrastructure Guide","description":"Overview","sidebar":"tutorialSidebar"},"advanced/trust-engine":{"id":"advanced/trust-engine","title":"\ud83e\udd1d Trust Engine","description":"Overview","sidebar":"tutorialSidebar"},"api/classes/AgentRuntime":{"id":"api/classes/AgentRuntime","title":"Class: AgentRuntime","description":"Represents the runtime environment for an agent, handling message processing,"},"api/classes/DatabaseAdapter":{"id":"api/classes/DatabaseAdapter","title":"Class: abstract DatabaseAdapter","description":"An abstract class representing a database adapter for managing various entities"},"api/classes/MemoryManager":{"id":"api/classes/MemoryManager","title":"Class: MemoryManager","description":"Manage memories in the database."},"api/classes/Service":{"id":"api/classes/Service","title":"Class: abstract Service","description":"Extended by"},"api/enumerations/Clients":{"id":"api/enumerations/Clients","title":"Enumeration: Clients","description":"Enumeration Members"},"api/enumerations/GoalStatus":{"id":"api/enumerations/GoalStatus","title":"Enumeration: GoalStatus","description":"Enumeration Members"},"api/enumerations/ModelClass":{"id":"api/enumerations/ModelClass","title":"Enumeration: ModelClass","description":"Enumeration Members"},"api/enumerations/ModelProviderName":{"id":"api/enumerations/ModelProviderName","title":"Enumeration: ModelProviderName","description":"Enumeration Members"},"api/enumerations/ServiceType":{"id":"api/enumerations/ServiceType","title":"Enumeration: ServiceType","description":"Enumeration Members"},"api/functions/addHeader":{"id":"api/functions/addHeader","title":"Function: addHeader()","description":"addHeader(header, body): string"},"api/functions/composeActionExamples":{"id":"api/functions/composeActionExamples","title":"Function: composeActionExamples()","description":"composeActionExamples(actionsData, count): string"},"api/functions/composeContext":{"id":"api/functions/composeContext","title":"Function: composeContext()","description":"composeContext(params): string"},"api/functions/createGoal":{"id":"api/functions/createGoal","title":"Function: createGoal()","description":"createGoal(namedParameters): Promise\\\\"},"api/functions/createRelationship":{"id":"api/functions/createRelationship","title":"Function: createRelationship()","description":"createRelationship(namedParameters): Promise\\\\"},"api/functions/embed":{"id":"api/functions/embed","title":"Function: embed()","description":"embed(runtime, input): Promise\\\\"},"api/functions/findNearestEnvFile":{"id":"api/functions/findNearestEnvFile","title":"Function: findNearestEnvFile()","description":"findNearestEnvFile(startDir?): string"},"api/functions/formatActionNames":{"id":"api/functions/formatActionNames","title":"Function: formatActionNames()","description":"formatActionNames(actions): string"},"api/functions/formatActions":{"id":"api/functions/formatActions","title":"Function: formatActions()","description":"formatActions(actions): string"},"api/functions/formatActors":{"id":"api/functions/formatActors","title":"Function: formatActors()","description":"formatActors(actors): string"},"api/functions/formatEvaluatorExampleDescriptions":{"id":"api/functions/formatEvaluatorExampleDescriptions","title":"Function: formatEvaluatorExampleDescriptions()","description":"formatEvaluatorExampleDescriptions(evaluators): string"},"api/functions/formatEvaluatorExamples":{"id":"api/functions/formatEvaluatorExamples","title":"Function: formatEvaluatorExamples()","description":"formatEvaluatorExamples(evaluators): string"},"api/functions/formatEvaluatorNames":{"id":"api/functions/formatEvaluatorNames","title":"Function: formatEvaluatorNames()","description":"formatEvaluatorNames(evaluators): string"},"api/functions/formatEvaluators":{"id":"api/functions/formatEvaluators","title":"Function: formatEvaluators()","description":"formatEvaluators(evaluators): string"},"api/functions/formatGoalsAsString":{"id":"api/functions/formatGoalsAsString","title":"Function: formatGoalsAsString()","description":"formatGoalsAsString(namedParameters): string"},"api/functions/formatMessages":{"id":"api/functions/formatMessages","title":"Function: formatMessages()","description":"formatMessages(namedParameters): string"},"api/functions/formatPosts":{"id":"api/functions/formatPosts","title":"Function: formatPosts()","description":"formatPosts(namedParameters): string"},"api/functions/formatRelationships":{"id":"api/functions/formatRelationships","title":"Function: formatRelationships()","description":"formatRelationships(namedParameters): Promise\\\\"},"api/functions/formatTimestamp":{"id":"api/functions/formatTimestamp","title":"Function: formatTimestamp()","description":"formatTimestamp(messageDate): string"},"api/functions/generateCaption":{"id":"api/functions/generateCaption","title":"Function: generateCaption()","description":"generateCaption(data, runtime): Promise\\\\"},"api/functions/generateImage":{"id":"api/functions/generateImage","title":"Function: generateImage()","description":"generateImage(data, runtime): Promise\\\\"},"api/functions/generateMessageResponse":{"id":"api/functions/generateMessageResponse","title":"Function: generateMessageResponse()","description":"generateMessageResponse(opts): Promise\\\\"},"api/functions/generateObject":{"id":"api/functions/generateObject","title":"Function: generateObject()","description":"generateObject(namedParameters): Promise\\\\"},"api/functions/generateObjectArray":{"id":"api/functions/generateObjectArray","title":"Function: generateObjectArray()","description":"generateObjectArray(namedParameters): Promise\\\\"},"api/functions/generateShouldRespond":{"id":"api/functions/generateShouldRespond","title":"Function: generateShouldRespond()","description":"generateShouldRespond(opts): Promise\\\\"},"api/functions/generateText":{"id":"api/functions/generateText","title":"Function: generateText()","description":"generateText(opts): Promise\\\\"},"api/functions/generateTextArray":{"id":"api/functions/generateTextArray","title":"Function: generateTextArray()","description":"generateTextArray(opts): Promise\\\\"},"api/functions/generateTrueOrFalse":{"id":"api/functions/generateTrueOrFalse","title":"Function: generateTrueOrFalse()","description":"generateTrueOrFalse(opts): Promise\\\\"},"api/functions/getActorDetails":{"id":"api/functions/getActorDetails","title":"Function: getActorDetails()","description":"getActorDetails(namedParameters): Promise\\\\"},"api/functions/getEndpoint":{"id":"api/functions/getEndpoint","title":"Function: getEndpoint()","description":"getEndpoint(provider): string"},"api/functions/getGoals":{"id":"api/functions/getGoals","title":"Function: getGoals()","description":"getGoals(namedParameters): Promise\\\\"},"api/functions/getModel":{"id":"api/functions/getModel","title":"Function: getModel()","description":"getModel(provider, type): string"},"api/functions/getProviders":{"id":"api/functions/getProviders","title":"Function: getProviders()","description":"getProviders(runtime, message, state?): Promise\\\\"},"api/functions/getRelationship":{"id":"api/functions/getRelationship","title":"Function: getRelationship()","description":"getRelationship(namedParameters): Promise\\\\"},"api/functions/getRelationships":{"id":"api/functions/getRelationships","title":"Function: getRelationships()","description":"getRelationships(namedParameters): Promise\\\\"},"api/functions/loadEnvConfig":{"id":"api/functions/loadEnvConfig","title":"Function: loadEnvConfig()","description":"loadEnvConfig(): ProcessEnv"},"api/functions/retrieveCachedEmbedding":{"id":"api/functions/retrieveCachedEmbedding","title":"Function: retrieveCachedEmbedding()","description":"retrieveCachedEmbedding(runtime, input): Promise\\\\"},"api/functions/splitChunks":{"id":"api/functions/splitChunks","title":"Function: splitChunks()","description":"splitChunks(content, chunkSize, bleed): Promise\\\\"},"api/functions/trimTokens":{"id":"api/functions/trimTokens","title":"Function: trimTokens()","description":"trimTokens(context, maxTokens, model): any"},"api/functions/updateGoal":{"id":"api/functions/updateGoal","title":"Function: updateGoal()","description":"updateGoal(namedParameters): Promise\\\\"},"api/globals":{"id":"api/globals","title":"@ai16z/okai","description":"Enumerations"},"api/index":{"id":"api/index","title":"Eliza","description":"For Chinese Version: \u4e2d\u6587\u8bf4\u660e"},"api/interfaces/Account":{"id":"api/interfaces/Account","title":"Interface: Account","description":"Represents a user, including their name, details, and a unique identifier."},"api/interfaces/Action":{"id":"api/interfaces/Action","title":"Interface: Action","description":"Represents an action that the agent can perform, including conditions for its use, a description, examples, a handler function, and a validation function."},"api/interfaces/ActionExample":{"id":"api/interfaces/ActionExample","title":"Interface: ActionExample","description":"Represents an example of content, typically used for demonstrating or testing purposes. Includes user, content, optional action, and optional source."},"api/interfaces/Actor":{"id":"api/interfaces/Actor","title":"Interface: Actor","description":"Represents an actor in the conversation, which could be a user or the agent itself, including their name, details (such as tagline, summary, and quote), and a unique identifier."},"api/interfaces/Content":{"id":"api/interfaces/Content","title":"Interface: Content","description":"Represents the content of a message, including its main text (content), any associated action (action), and the source of the content (source), if applicable."},"api/interfaces/ConversationExample":{"id":"api/interfaces/ConversationExample","title":"Interface: ConversationExample","description":"Represents an example of content, typically used for demonstrating or testing purposes. Includes user, content, optional action, and optional source."},"api/interfaces/EvaluationExample":{"id":"api/interfaces/EvaluationExample","title":"Interface: EvaluationExample","description":"Represents an example for evaluation, including the context, an array of message examples, and the expected outcome."},"api/interfaces/Evaluator":{"id":"api/interfaces/Evaluator","title":"Interface: Evaluator","description":"Represents an evaluator, which is used to assess and guide the agent\'s responses based on the current context and state."},"api/interfaces/Goal":{"id":"api/interfaces/Goal","title":"Interface: Goal","description":"Represents a goal, which is a higher-level aim composed of one or more objectives. Goals are tracked to measure progress or achievements within the conversation or system."},"api/interfaces/IAgentRuntime":{"id":"api/interfaces/IAgentRuntime","title":"Interface: IAgentRuntime","description":"Properties"},"api/interfaces/IBrowserService":{"id":"api/interfaces/IBrowserService","title":"Interface: IBrowserService","description":"Extends"},"api/interfaces/IDatabaseAdapter":{"id":"api/interfaces/IDatabaseAdapter","title":"Interface: IDatabaseAdapter","description":"Properties"},"api/interfaces/IImageDescriptionService":{"id":"api/interfaces/IImageDescriptionService","title":"Interface: IImageDescriptionService","description":"Extends"},"api/interfaces/IMemoryManager":{"id":"api/interfaces/IMemoryManager","title":"Interface: IMemoryManager","description":"Properties"},"api/interfaces/IPdfService":{"id":"api/interfaces/IPdfService","title":"Interface: IPdfService","description":"Extends"},"api/interfaces/ISpeechService":{"id":"api/interfaces/ISpeechService","title":"Interface: ISpeechService","description":"Extends"},"api/interfaces/ITextGenerationService":{"id":"api/interfaces/ITextGenerationService","title":"Interface: ITextGenerationService","description":"Extends"},"api/interfaces/ITranscriptionService":{"id":"api/interfaces/ITranscriptionService","title":"Interface: ITranscriptionService","description":"Extends"},"api/interfaces/IVideoService":{"id":"api/interfaces/IVideoService","title":"Interface: IVideoService","description":"Extends"},"api/interfaces/Memory":{"id":"api/interfaces/Memory","title":"Interface: Memory","description":"Represents a memory record, which could be a message or any other piece of information remembered by the system, including its content, associated user IDs, and optionally, its embedding vector for similarity comparisons."},"api/interfaces/MessageExample":{"id":"api/interfaces/MessageExample","title":"Interface: MessageExample","description":"Represents an example of a message, typically used for demonstrating or testing purposes, including optional content and action."},"api/interfaces/Objective":{"id":"api/interfaces/Objective","title":"Interface: Objective","description":"Represents an objective within a goal, detailing what needs to be achieved and whether it has been completed."},"api/interfaces/Participant":{"id":"api/interfaces/Participant","title":"Interface: Participant","description":"Represents a participant in a room, including their ID and account details."},"api/interfaces/Provider":{"id":"api/interfaces/Provider","title":"Interface: Provider","description":"Represents a provider, which is used to retrieve information or perform actions on behalf of the agent, such as fetching data from an external API or service."},"api/interfaces/Relationship":{"id":"api/interfaces/Relationship","title":"Interface: Relationship","description":"Represents a relationship between two users, including their IDs, the status of the relationship, and the room ID in which the relationship is established."},"api/interfaces/Room":{"id":"api/interfaces/Room","title":"Interface: Room","description":"Represents a room or conversation context, including its ID and a list of participants."},"api/interfaces/State":{"id":"api/interfaces/State","title":"Interface: State","description":"Represents the state of the conversation or context in which the agent is operating, including information about users, messages, goals, and other relevant data."},"api/type-aliases/Character":{"id":"api/type-aliases/Character","title":"Type Alias: Character","description":"Character: object"},"api/type-aliases/Client":{"id":"api/type-aliases/Client","title":"Type Alias: Client","description":"Client: object"},"api/type-aliases/Handler":{"id":"api/type-aliases/Handler","title":"Type Alias: Handler()","description":"Handler: (runtime, message, state?, options?, callback?) => Promise\\\\"},"api/type-aliases/HandlerCallback":{"id":"api/type-aliases/HandlerCallback","title":"Type Alias: HandlerCallback()","description":"HandlerCallback: (response, files?) => Promise\\\\"},"api/type-aliases/Media":{"id":"api/type-aliases/Media","title":"Type Alias: Media","description":"Media: object"},"api/type-aliases/Model":{"id":"api/type-aliases/Model","title":"Type Alias: Model","description":"Model: object"},"api/type-aliases/Models":{"id":"api/type-aliases/Models","title":"Type Alias: Models","description":"Models: object"},"api/type-aliases/Plugin":{"id":"api/type-aliases/Plugin","title":"Type Alias: Plugin","description":"Plugin: object"},"api/type-aliases/UUID":{"id":"api/type-aliases/UUID","title":"Type Alias: UUID","description":"UUID: \\\\$\\\\{string\\\\}-$\\\\{string\\\\}-$\\\\{string\\\\}-$\\\\{string\\\\}-$\\\\{string\\\\}\\\\"},"api/type-aliases/Validator":{"id":"api/type-aliases/Validator","title":"Type Alias: Validator()","description":"Validator: (runtime, message, state?) => Promise\\\\"},"api/variables/defaultCharacter":{"id":"api/variables/defaultCharacter","title":"Variable: defaultCharacter","description":"const defaultCharacter: Character"},"api/variables/okaiLogger":{"id":"api/variables/okaiLogger","title":"Variable: okaiLogger","description":"const okaiLogger: ElizaLogger"},"api/variables/embeddingDimension":{"id":"api/variables/embeddingDimension","title":"Variable: embeddingDimension","description":"const embeddingDimension: 1536 = 1536"},"api/variables/embeddingZeroVector":{"id":"api/variables/embeddingZeroVector","title":"Variable: embeddingZeroVector","description":"const embeddingZeroVector: any[]"},"api/variables/evaluationTemplate":{"id":"api/variables/evaluationTemplate","title":"Variable: evaluationTemplate","description":"const evaluationTemplate: string"},"api/variables/settings":{"id":"api/variables/settings","title":"Variable: settings","description":"const settings: ProcessEnv"},"core/actions":{"id":"core/actions","title":"\u26a1 Actions","description":"Actions are core building blocks in Eliza that define how agents respond to and interact with messages. They allow agents to interact with external systems, modify their behavior, and perform tasks beyond simple message responses.","sidebar":"tutorialSidebar"},"core/agents":{"id":"core/agents","title":"\ud83e\udd16 Agents","description":"Agents are the core components of the Eliza framework that handle autonomous interactions. Each agent runs in a runtime environment and can interact through various clients (Discord, Telegram, etc.) while maintaining consistent behavior and memory.","sidebar":"tutorialSidebar"},"core/characterfile":{"id":"core/characterfile","title":"\ud83d\udcdd Character Files","description":"Character files are JSON-formatted configurations that define an AI character\'s personality, knowledge, and behavior patterns. This guide explains how to create effective character files for use with Eliza agents.","sidebar":"tutorialSidebar"},"core/evaluators":{"id":"core/evaluators","title":"\ud83d\udcca Evaluators","description":"Evaluators are core components that assess and extract information from conversations. They integrate with the AgentRuntime\'s evaluation system.","sidebar":"tutorialSidebar"},"core/providers":{"id":"core/providers","title":"\ud83d\udd0c Providers","description":"Providers are core modules that inject dynamic context and real-time information into agent interactions. They serve as a bridge between the agent and various external systems, enabling access to market data, wallet information, sentiment analysis, and temporal context.","sidebar":"tutorialSidebar"},"faq":{"id":"faq","title":"Frequently Asked Questions","description":"Eliza FAQ","sidebar":"tutorialSidebar"},"guides/advanced":{"id":"guides/advanced","title":"\ud83d\udd27 Advanced Usage Guide","description":"This guide covers advanced features and capabilities of Eliza, including complex integrations, custom services, and specialized plugins.","sidebar":"tutorialSidebar"},"guides/configuration":{"id":"guides/configuration","title":"\u2699\ufe0f Configuration Guide","description":"This guide covers how to configure Eliza for different use cases and environments. We\'ll walk through all available configuration options and best practices.","sidebar":"tutorialSidebar"},"guides/docker-setup":{"id":"guides/docker-setup","title":"[Eliza](https://github.com/ai16z/okai) Chatbot Docker Setup Guide","description":"This guide provides instructions for installing and running the Eliza chatbot using either Docker or direct installation on a server."},"guides/local-development":{"id":"guides/local-development","title":"\ud83d\udcbb Local Development Guide","description":"This guide covers setting up and working with Eliza in a development environment.","sidebar":"tutorialSidebar"},"guides/secrets-management":{"id":"guides/secrets-management","title":"\ud83d\udd10 Secrets Management","description":"A comprehensive guide for managing secrets, API keys, and sensitive configuration in Eliza.","sidebar":"tutorialSidebar"},"guides/template-configuration":{"id":"guides/template-configuration","title":"\ud83d\udd27 Template and Client Configuration","description":"This guide covers how to configure custom templates and client behaviors for your AI agent. We\'ll walk through all available template options and configuration settings."},"intro":{"id":"intro","title":"Introduction to Eliza","description":"As seen powering @DegenSpartanAI and @MarcAIndreessen","sidebar":"tutorialSidebar"},"packages/adapters":{"id":"packages/adapters","title":"\ud83d\udd27 Database Adapters","description":"Overview","sidebar":"tutorialSidebar"},"packages/agent":{"id":"packages/agent","title":"\ud83e\udd16 Agent Package","description":"The Agent Package (@okai/agent) provides the high-level orchestration layer for Eliza, managing agent lifecycles, character loading, client initialization, and runtime coordination.","sidebar":"tutorialSidebar"},"packages/agents":{"id":"packages/agents","title":"\ud83e\udd16 Agent Package","description":"Overview"},"packages/clients":{"id":"packages/clients","title":"\ud83d\udd0c Client Packages","description":"Overview","sidebar":"tutorialSidebar"},"packages/core":{"id":"packages/core","title":"\ud83d\udce6 Core Package","description":"Overview","sidebar":"tutorialSidebar"},"packages/database-adapters":{"id":"packages/database-adapters","title":"\ud83d\udd27 Database Adapters","description":"Overview"},"packages/packages":{"id":"packages/packages","title":"\ud83d\udcd6 Package Overview","description":"Core Components","sidebar":"tutorialSidebar"},"packages/plugins":{"id":"packages/plugins","title":"\ud83e\udde9 Plugins","description":"Overview","sidebar":"tutorialSidebar"},"quickstart":{"id":"quickstart","title":"Quickstart Guide","description":"Prerequisites","sidebar":"tutorialSidebar"}}}}')}}]);