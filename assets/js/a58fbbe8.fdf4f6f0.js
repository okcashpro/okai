"use strict";(self.webpackChunkokai_docs=self.webpackChunkokai_docs||[]).push([[65936],{77999:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>n,toc:()=>i});const n=JSON.parse('{"id":"Notes/cookbook","title":"Cookbook","description":"- Clone repo//github.com/okcashpro/okai","source":"@site/community/Notes/cookbook.md","sourceDirName":"Notes","slug":"/Notes/cookbook","permalink":"/okai/community/Notes/cookbook","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"defaultSidebar","previous":{"title":"Bankless okcashpro Shaw Interview","permalink":"/okai/community/Streams/12-2024/2024-12-11"},"next":{"title":"Lore","permalink":"/okai/community/Notes/lore"}}');var t=o(74848),a=o(28453);const s={},c="Cookbook",l={},i=[{value:"CSV of Commits",id:"csv-of-commits",level:3}];function u(e){const r={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"cookbook",children:"Cookbook"})}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["Clone repo: ",(0,t.jsx)(r.a,{href:"https://github.com/okcashpro/okai",children:"https://github.com/okcashpro/okai"})]}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"This command will get last month of contributions in a pretty JSON format"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash!",children:'git log --since="1 month ago" --date=short --pretty=format:\'{"commit": "%H", "author": "%an", "date": "%ad", "message": "%s"}\' | sed \'1s/^/[\\n/; $!s/$/,/; $s/$/\\n]/\' > 1month.json\n'})}),"\n",(0,t.jsx)(r.p,{children:"Sample output JSON file:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-json!",children:'[\r\n  {\r\n    "commit": "91239964e205386f9c08fb69f5daf5a4ffe04d71",\r\n    "author": "Loaf",\r\n    "date": "2024-11-22",\r\n    "message": "Merge pull request #472 from tarrencev/main"\r\n  },\r\n  {\r\n    "commit": "8450877832e91094a833e348de4c660895e21a2a",\r\n    "author": "Bruno Galego",\r\n    "date": "2024-11-21",\r\n    "message": "Merge pull request #476 from haeunchin/document-update-for-twitter-cookie"\r\n  },\r\n  {\r\n    "commit": "0d753341437998339b7f100adf80f6866e209c42",\r\n    "author": "Tarrence van As",\r\n    "date": "2024-11-20",\r\n    "message": "Improve knowledge embeddings"\r\n  },\n'})}),"\n",(0,t.jsx)(r.p,{children:"You can output the messages of what each contributor did like this:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"jq '.[] | select(.author == \"Loaf\") | .message' 1month.json\n"})}),"\n",(0,t.jsx)(r.p,{children:"Which returns output that looks like this:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:'"Merge pull request #472 from tarrencev/main"\r\n"Merge pull request #482 from bmgalego/improvements"\r\n"Merge pull request #446 from darwintree/patch-2"\r\n"Merge pull request #466 from okcashpro/env"\r\n"Merge pull request #475 from okcashpro/fix/ci"\r\n"Merge pull request #378 from bmgalego/cache-manager"\r\n"Merge pull request #456 from tarrencev/githubclient"\r\n"Merge pull request #460 from martincik/fix/fix-up-the-postgresql-schema"\r\n"Merge pull request #462 from coffeeorgreentea/create-okai-app"\n'})}),"\n",(0,t.jsx)(r.p,{children:"Or to process into something like a CSV file with dates:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"jq -r '.[] | select(.author == \"Loaf\") | [.date, .message] | @csv' 1month.json\n"})}),"\n",(0,t.jsx)(r.p,{children:"Output:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:'"2024-11-22","Merge pull request #472 from tarrencev/main"\r\n"2024-11-21","Merge pull request #482 from bmgalego/improvements"\r\n"2024-11-21","Merge pull request #446 from darwintree/patch-2"\r\n"2024-11-21","Merge pull request #466 from okcashpro/env"\r\n"2024-11-21","Merge pull request #475 from okcashpro/fix/ci"\r\n"2024-11-21","Merge pull request #378 from bmgalego/cache-manager"\r\n"2024-11-21","Merge pull request #456 from tarrencev/githubclient"\r\n"2024-11-21","Merge pull request #460 from martincik/fix/fix-up-the-postgresql-schema"\r\n"2024-11-21","Merge pull request #462 from coffeeorgreentea/create-okai-app"\r\n"2024-11-20","Merge pull request #449 from okcashpro/readme"\r\n"2024-11-20","Merge pull request #447 from okcashpro/fix/voice-perms"\r\n"2024-11-20","Merge pull request #444 from okcashpro/unrug-fix"\r\n...\n'})}),"\n",(0,t.jsx)(r.h3,{id:"csv-of-commits",children:"CSV of Commits"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash!",children:"jq -r 'sort_by(.author) | .[] | [.commit, .author, .date, .message] | @csv' 1month.json\n"})}),"\n",(0,t.jsx)(r.p,{children:"Will produce output like this:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:'"03cd5ccc2dd20af42535c3dd47c90f65b0726144","tsubasakong","2024-11-15","clean log"\r\n"3c2bedbfae10e2bd9f762b85f5f9488fb2510176","tsubasakong","2024-11-15","clean"\r\n"3ab32a97f8c2d1dc1a4425a2dc4b570c8be5e30f","twilwa","2024-11-20","Merge pull request #470 from odilitime/patch-3"\r\n"3f2cc7d693d1cc3e2625e2e385d8c8b540ca2652","twilwa","2024-11-20","Merge pull request #468 from odilitime/patch-2"\r\n"a2e0954a5871eaace15dc9197fd7457b1b62064e","twilwa","2024-11-17","Merge pull request #382 from okcashpro/add-client"\r\n"e0444cbde2cd46584b0f1e1ef9501a09382dd021","twilwa","2024-11-17","Merge branch \'main\' into add-client"\r\n"4b1caa00b77b5eb23e15d3adc3774fd4d6062fe2","twilwa","2024-11-16","Merge pull request #364 from okcashpro/new_docs"\r\n"1422736a4c0f238c09c9c769dfa1926fa1a23039","twilwa","2024-11-12","Merge pull request #273 from okcashpro/docs"\r\n"0e7722d643664681c2403f9e6d88f7b212105505","twilwa","2024-11-12","replace .env.example"\r\n"34fd76e6b4e6661c86eac1fc879cf21d76208c3b","twilwa","2024-11-12","lint with prettier"\n'})})]})}function d(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},28453:(e,r,o)=>{o.d(r,{R:()=>s,x:()=>c});var n=o(96540);const t={},a=n.createContext(t);function s(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);