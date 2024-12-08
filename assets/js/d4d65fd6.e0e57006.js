"use strict";(self.webpackChunkeliza_docs=self.webpackChunkeliza_docs||[]).push([[43794],{24325:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"api/functions/composeContext","title":"Function: composeContext()","description":"composeContext(params): string","source":"@site/docs/api/functions/composeContext.md","sourceDirName":"api/functions","slug":"/api/functions/composeContext","permalink":"/okai/docs/api/functions/composeContext","draft":false,"unlisted":false,"editUrl":"https://github.com/ai16z/okai/tree/main/docs/docs/api/functions/composeContext.md","tags":[],"version":"current","frontMatter":{}}');var o=n(74848),c=n(28453);const r={},a="Function: composeContext()",i={},l=[{value:"Parameters",id:"parameters",level:2},{value:"Returns",id:"returns",level:2},{value:"Example",id:"example",level:2},{value:"Defined in",id:"defined-in",level:2}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,c.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"function-composecontext",children:"Function: composeContext()"})}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"composeContext"}),"(",(0,o.jsx)(t.code,{children:"params"}),"): ",(0,o.jsx)(t.code,{children:"string"})]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Composes a context string by replacing placeholders in a template with corresponding values from the state."}),"\n",(0,o.jsxs)(t.p,{children:["This function takes a template string with placeholders in the format ",(0,o.jsx)(t.code,{children:"{{placeholder}}"})," and a state object.\nIt replaces each placeholder with the value from the state object that matches the placeholder's name.\nIf a matching key is not found in the state object for a given placeholder, the placeholder is replaced with an empty string."]}),"\n",(0,o.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,o.jsxs)(t.p,{children:["\u2022 ",(0,o.jsx)(t.strong,{children:"params"})]}),"\n",(0,o.jsx)(t.p,{children:"The parameters for composing the context."}),"\n",(0,o.jsxs)(t.p,{children:["\u2022 ",(0,o.jsx)(t.strong,{children:"params.state"}),": ",(0,o.jsx)(t.a,{href:"/okai/docs/api/interfaces/State",children:(0,o.jsx)(t.code,{children:"State"})})]}),"\n",(0,o.jsx)(t.p,{children:"The state object containing values to replace the placeholders in the template."}),"\n",(0,o.jsxs)(t.p,{children:["\u2022 ",(0,o.jsx)(t.strong,{children:"params.template"}),": ",(0,o.jsx)(t.code,{children:"string"})]}),"\n",(0,o.jsx)(t.p,{children:"The template string containing placeholders to be replaced with state values."}),"\n",(0,o.jsx)(t.h2,{id:"returns",children:"Returns"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.code,{children:"string"})}),"\n",(0,o.jsx)(t.p,{children:"The composed context string with placeholders replaced by corresponding state values."}),"\n",(0,o.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",children:'// Given a state object and a template\nconst state = { userName: "Alice", userAge: 30 };\nconst template = "Hello, {{userName}}! You are {{userAge}} years old";\n\n// Composing the context will result in:\n// "Hello, Alice! You are 30 years old."\nconst context = composeContext({ state, template });\n'})}),"\n",(0,o.jsx)(t.h2,{id:"defined-in",children:"Defined in"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://github.com/ai16z/okai/blob/7fcf54e7fb2ba027d110afcc319c0b01b3f181dc/packages/core/src/context.ts#L24",children:"packages/core/src/context.ts:24"})})]})}function p(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var s=n(96540);const o={},c=s.createContext(o);function r(e){const t=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(c.Provider,{value:t},e.children)}}}]);