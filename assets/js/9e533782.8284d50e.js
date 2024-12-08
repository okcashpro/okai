"use strict";(self.webpackChunkokai_docs=self.webpackChunkokai_docs||[]).push([[72269],{93575:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"functions/parseJSONObjectFromText","title":"parseJSONObjectFromText","description":"@ai16z/okai v0.1.5-alpha.5 / parseJSONObjectFromText","source":"@site/api/functions/parseJSONObjectFromText.md","sourceDirName":"functions","slug":"/functions/parseJSONObjectFromText","permalink":"/okai/api/functions/parseJSONObjectFromText","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"parseBooleanFromText","permalink":"/okai/api/functions/parseBooleanFromText"},"next":{"title":"parseJsonArrayFromText","permalink":"/okai/api/functions/parseJsonArrayFromText"}}');var s=t(74848),i=t(28453);const a={},o="Function: parseJSONObjectFromText()",c={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Defined in",id:"defined-in",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/okai/api/",children:"@ai16z/okai v0.1.5-alpha.5"})," / parseJSONObjectFromText"]}),"\n",(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"function-parsejsonobjectfromtext",children:"Function: parseJSONObjectFromText()"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"parseJSONObjectFromText"}),"(",(0,s.jsx)(n.code,{children:"text"}),"): ",(0,s.jsx)(n.code,{children:"Record"}),"<",(0,s.jsx)(n.code,{children:"string"}),", ",(0,s.jsx)(n.code,{children:"any"}),"> | ",(0,s.jsx)(n.code,{children:"null"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Parses a JSON object from a given text. The function looks for a JSON block wrapped in triple backticks\nwith ",(0,s.jsx)(n.code,{children:"json"})," language identifier, and if not found, it searches for an object pattern within the text.\nIt then attempts to parse the JSON string into a JavaScript object. If parsing is successful and the result\nis an object (but not an array), it returns the object; otherwise, it tries to parse an array if the result\nis an array, or returns null if parsing is unsuccessful or the result is neither an object nor an array."]}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.p,{children:["\u2022 ",(0,s.jsx)(n.strong,{children:"text"}),": ",(0,s.jsx)(n.code,{children:"string"})]}),"\n",(0,s.jsx)(n.p,{children:"The input text from which to extract and parse the JSON object."}),"\n",(0,s.jsx)(n.h2,{id:"returns",children:"Returns"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Record"}),"<",(0,s.jsx)(n.code,{children:"string"}),", ",(0,s.jsx)(n.code,{children:"any"}),"> | ",(0,s.jsx)(n.code,{children:"null"})]}),"\n",(0,s.jsx)(n.p,{children:"An object parsed from the JSON string if successful; otherwise, null or the result of parsing an array."}),"\n",(0,s.jsx)(n.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/ai16z/okai/blob/main/packages/core/src/parsing.ts#L109",children:"packages/core/src/parsing.ts:109"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var r=t(96540);const s={},i=r.createContext(s);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);