import{u as I,f as te,g as se,h as _,i as ae,P as le,t as Ee,j as re,k as L,l as f,m as ue,w as M,n as s,p as Ae,R as j,q as ie,s as oe,v as ne,C as ce,x as ve,y as Be,z as he,A as pe,B as ye,D as H,E as de,F as me,G as Ce,H as T,I as V,J as Fe}from"./app-5EKgbxwj.js";const ge=["/","/intro.html","/%E4%BB%A3%E7%A0%81%E4%B9%8B%E5%A4%96/","/%E4%BB%A3%E7%A0%81%E4%B9%8B%E5%A4%96/%E6%88%90%E9%95%BF%E5%8E%86%E7%A8%8B.html","/%E5%AD%A6%E4%B9%A0%E6%96%B9%E6%B3%95/","/%E5%AD%A6%E4%B9%A0%E6%96%B9%E6%B3%95/%E8%BE%93%E5%87%BA%E6%98%AF%E6%9C%80%E5%A5%BD%E7%9A%84%E8%AE%B0%E5%BF%86%E6%96%B9%E6%B3%95.html","/%E6%8A%80%E6%9C%AF%E6%96%87%E7%AB%A0/","/%E7%95%99%E8%A8%80%E5%A2%99/","/%E6%8A%80%E6%9C%AF%E6%96%87%E7%AB%A0/JavaScript%E5%9F%BA%E7%A1%80/JavaScript%E5%9F%BA%E7%A1%80%E9%9B%B6%E7%A2%8E.html","/%E6%8A%80%E6%9C%AF%E6%96%87%E7%AB%A0/Java%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0/Java%E7%BA%BF%E7%A8%8B%E5%92%8C%E7%BA%BF%E7%A8%8B%E9%94%81.html","/%E6%8A%80%E6%9C%AF%E6%96%87%E7%AB%A0/Java%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0/java%E5%9F%BA%E7%A1%80%E9%9B%B6%E7%A2%8E.html","/%E6%8A%80%E6%9C%AF%E6%96%87%E7%AB%A0/Python%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0/python%E5%9F%BA%E7%A1%80.html","/%E6%8A%80%E6%9C%AF%E6%96%87%E7%AB%A0/Vue%E5%9F%BA%E7%A1%80/Vue2%E5%9F%BA%E7%A1%80%E9%9B%B6%E7%A2%8E.html","/%E6%8A%80%E6%9C%AF%E6%96%87%E7%AB%A0/Vue%E5%9F%BA%E7%A1%80/Vue3%E5%9F%BA%E7%A1%80%E9%9B%B6%E7%A2%8E.html","/%E6%8A%80%E6%9C%AF%E6%96%87%E7%AB%A0/%E6%95%B0%E6%8D%AE%E5%BA%93/MySQL%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.html","/%E6%8A%80%E6%9C%AF%E6%96%87%E7%AB%A0/%E6%95%B0%E6%8D%AE%E5%BA%93/Oracle%E5%92%8CMysql%E7%9A%84%E5%8C%BA%E5%88%AB.html","/%E6%8A%80%E6%9C%AF%E6%96%87%E7%AB%A0/%E6%95%B0%E6%8D%AE%E5%BA%93/Oracle%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.html","/%E6%8A%80%E6%9C%AF%E6%96%87%E7%AB%A0/%E6%95%B0%E6%8D%AE%E5%BA%93/Redis%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0.html","/%E6%8A%80%E6%9C%AF%E6%96%87%E7%AB%A0/%E6%95%B0%E6%8D%AE%E5%BA%93/%E6%95%B0%E6%8D%AE%E5%BA%93%E4%B8%89%E5%A4%A7%E8%8C%83%E5%BC%8F.html","/%E6%8A%80%E6%9C%AF%E6%96%87%E7%AB%A0/%E6%95%B0%E6%8D%AE%E5%BA%93/%E6%95%B0%E6%8D%AE%E5%BA%93%E5%AD%A6%E4%B9%A0.html","/404.html","/%E6%8A%80%E6%9C%AF%E6%96%87%E7%AB%A0/JavaScript%E5%9F%BA%E7%A1%80/","/%E6%8A%80%E6%9C%AF%E6%96%87%E7%AB%A0/Java%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0/","/%E6%8A%80%E6%9C%AF%E6%96%87%E7%AB%A0/Python%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0/","/%E6%8A%80%E6%9C%AF%E6%96%87%E7%AB%A0/Vue%E5%9F%BA%E7%A1%80/","/%E6%8A%80%E6%9C%AF%E6%96%87%E7%AB%A0/%E6%95%B0%E6%8D%AE%E5%BA%93/","/category/","/tag/","/article/","/star/","/timeline/"],De="SEARCH_PRO_QUERY_HISTORY",y=I(De,[]),fe=()=>{const{queryHistoryCount:a}=H,l=a>0;return{enabled:l,queryHistory:y,addQueryHistory:E=>{l&&(y.value=Array.from(new Set([E,...y.value.slice(0,a-1)])))},removeQueryHistory:E=>{y.value=[...y.value.slice(0,E),...y.value.slice(E+1)]}}},P=a=>ge[a.id]+("anchor"in a?`#${a.anchor}`:""),He="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:$}=H,d=I(He,[]),Re=()=>{const a=$>0;return{enabled:a,resultHistory:d,addResultHistory:l=>{if(a){const E={link:P(l),display:l.display};"header"in l&&(E.header=l.header),d.value=[E,...d.value.slice(0,$-1)]}},removeResultHistory:l=>{d.value=[...d.value.slice(0,l),...d.value.slice(l+1)]}}},ke=a=>{const l=ce(),E=_(),R=ve(),u=L(0),F=f(()=>u.value>0),B=Be([]);return he(()=>{const{search:h,terminate:k}=pe(),m=ye(o=>{const C=o.join(" "),{searchFilter:Q=v=>v,splitWord:w,suggestionsFilter:b,...p}=l.value;C?(u.value+=1,h(o.join(" "),E.value,p).then(v=>Q(v,C,E.value,R.value)).then(v=>{u.value-=1,B.value=v}).catch(v=>{console.warn(v),u.value-=1,u.value||(B.value=[])})):B.value=[]},H.searchDelay-H.suggestDelay);M([a,E],([o])=>m(o),{immediate:!0}),de(()=>{k()})}),{isSearching:F,results:B}};var we=te({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(a,{emit:l}){const E=se(),R=_(),u=ae(le),{enabled:F,addQueryHistory:B,queryHistory:h,removeQueryHistory:k}=fe(),{enabled:m,resultHistory:o,addResultHistory:C,removeResultHistory:Q}=Re(),w=F||m,b=Ee(a,"queries"),{results:p,isSearching:v}=ke(b),r=re({isQuery:!0,index:0}),n=L(0),c=L(0),J=f(()=>w&&(h.value.length>0||o.value.length>0)),S=f(()=>p.value.length>0),q=f(()=>p.value[n.value]||null),U=()=>{const{isQuery:e,index:t}=r;t===0?(r.isQuery=!e,r.index=e?o.value.length-1:h.value.length-1):r.index=t-1},Y=()=>{const{isQuery:e,index:t}=r;t===(e?h.value.length-1:o.value.length-1)?(r.isQuery=!e,r.index=0):r.index=t+1},z=()=>{n.value=n.value>0?n.value-1:p.value.length-1,c.value=q.value.contents.length-1},G=()=>{n.value=n.value<p.value.length-1?n.value+1:0,c.value=0},K=()=>{c.value<q.value.contents.length-1?c.value+=1:G()},N=()=>{c.value>0?c.value-=1:z()},x=e=>e.map(t=>Fe(t)?t:s(t[0],t[1])),W=e=>{if(e.type==="customField"){const t=me[e.index]||"$content",[A,D=""]=Ce(t)?t[R.value].split("$content"):t.split("$content");return e.display.map(i=>s("div",x([A,...i,D])))}return e.display.map(t=>s("div",x(t)))},g=()=>{n.value=0,c.value=0,l("updateQuery",""),l("close")},X=()=>F?s("ul",{class:"search-pro-result-list"},s("li",{class:"search-pro-result-list-item"},[s("div",{class:"search-pro-result-title"},u.value.queryHistory),h.value.map((e,t)=>s("div",{class:["search-pro-result-item",{active:r.isQuery&&r.index===t}],onClick:()=>{l("updateQuery",e)}},[s(T,{class:"search-pro-result-type"}),s("div",{class:"search-pro-result-content"},e),s("button",{class:"search-pro-remove-icon",innerHTML:V,onClick:A=>{A.preventDefault(),A.stopPropagation(),k(t)}})]))])):null,Z=()=>m?s("ul",{class:"search-pro-result-list"},s("li",{class:"search-pro-result-list-item"},[s("div",{class:"search-pro-result-title"},u.value.resultHistory),o.value.map((e,t)=>s(j,{to:e.link,class:["search-pro-result-item",{active:!r.isQuery&&r.index===t}],onClick:()=>{g()}},()=>[s(T,{class:"search-pro-result-type"}),s("div",{class:"search-pro-result-content"},[e.header?s("div",{class:"content-header"},e.header):null,s("div",e.display.map(A=>x(A)).flat())]),s("button",{class:"search-pro-remove-icon",innerHTML:V,onClick:A=>{A.preventDefault(),A.stopPropagation(),Q(t)}})]))])):null;return ue("keydown",e=>{if(a.isFocusing){if(S.value){if(e.key==="ArrowUp")N();else if(e.key==="ArrowDown")K();else if(e.key==="Enter"){const t=q.value.contents[c.value];B(a.queries.join(" ")),C(t),E.push(P(t)),g()}}else if(m){if(e.key==="ArrowUp")U();else if(e.key==="ArrowDown")Y();else if(e.key==="Enter"){const{index:t}=r;r.isQuery?(l("updateQuery",h.value[t]),e.preventDefault()):(E.push(o.value[t].link),g())}}}}),M([n,c],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>s("div",{class:["search-pro-result-wrapper",{empty:a.queries.length?!S.value:!J.value}],id:"search-pro-results"},a.queries.length?v.value?s(Ae,{hint:u.value.searching}):S.value?s("ul",{class:"search-pro-result-list"},p.value.map(({title:e,contents:t},A)=>{const D=n.value===A;return s("li",{class:["search-pro-result-list-item",{active:D}]},[s("div",{class:"search-pro-result-title"},e||u.value.defaultTitle),t.map((i,ee)=>{const O=D&&c.value===ee;return s(j,{to:P(i),class:["search-pro-result-item",{active:O,"aria-selected":O}],onClick:()=>{B(a.queries.join(" ")),C(i),g()}},()=>[i.type==="text"?null:s(i.type==="title"?ie:i.type==="heading"?oe:ne,{class:"search-pro-result-type"}),s("div",{class:"search-pro-result-content"},[i.type==="text"&&i.header?s("div",{class:"content-header"},i.header):null,s("div",W(i))])])})])})):u.value.emptyResult:w?J.value?[X(),Z()]:u.value.emptyHistory:u.value.emptyResult)}});export{we as default};
