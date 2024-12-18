"use strict";(self.webpackChunkokai_docs=self.webpackChunkokai_docs||[]).push([[72269],{93575:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"functions/parseJSONObjectFromText","title":"parseJSONObjectFromText","description":"@okcashpro/okai v0.1.7-alpha.1 / parseJSONObjectFromText","source":"@site/api/functions/parseJSONObjectFromText.md","sourceDirName":"functions","slug":"/functions/parseJSONObjectFromText","permalink":"/okai/api/functions/parseJSONObjectFromText","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"parseBooleanFromText","permalink":"/okai/api/functions/parseBooleanFromText"},"next":{"title":"parseJsonArrayFromText","permalink":"/okai/api/functions/parseJsonArrayFromText"}}');var s=r(74848),o=r(28453);const i={},a="Function: parseJSONObjectFromText()",c={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Defined in",id:"defined-in",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/okai/api/",children:"@okcashpro/okai v0.1.7-alpha.1"})," / parseJSONObjectFromText"]}),"\n",(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"function-parsejsonobjectfromtext",children:"Function: parseJSONObjectFromText()"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"parseJSONObjectFromText"}),"(",(0,s.jsx)(n.code,{children:"text"}),"): ",(0,s.jsx)(n.code,{children:"Record"}),"<",(0,s.jsx)(n.code,{children:"string"}),", ",(0,s.jsx)(n.code,{children:"any"}),"> | ",(0,s.jsx)(n.code,{children:"null"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Parses a JSON object from a given text. The function looks for a JSON block wrapped in triple backticks\r\nwith ",(0,s.jsx)(n.code,{children:"json"})," language identifier, and if not found, it searches for an object pattern within the text.\r\nIt then attempts to parse the JSON string into a JavaScript object. If parsing is successful and the result\r\nis an object (but not an array), it returns the object; otherwise, it tries to parse an array if the result\r\nis an array, or returns null if parsing is unsuccessful or the result is neither an object nor an array."]}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"text"}),": ",(0,s.jsx)(n.code,{children:"string"})]}),"\n",(0,s.jsx)(n.p,{children:"The input text from which to extract and parse the JSON object."}),"\n",(0,s.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Record"}),"<",(0,s.jsx)(n.code,{children:"string"}),", ",(0,s.jsx)(n.code,{children:"any"}),"> | ",(0,s.jsx)(n.code,{children:"null"})]}),"\n",(0,s.jsx)(n.p,{children:"An object parsed from the JSON string if successful; otherwise, null or the result of parsing an array."}),"\n",(0,s.jsx)(n.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/okcashpro/okai/blob/main/packages/core/src/parsing.ts#L110",children:"packages/core/src/parsing.ts:110"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>a});var t=r(96540);const s={},o=t.createContext(s);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);