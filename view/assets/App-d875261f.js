import{s as H,a as Q,u as Y,c as J,b as X,l as Z,j as d,d as a,e as j,f as C,F as P,g as O,h as T,N as ee}from"./index-77da17b5.js";import{g as te,d as re,M as m,s as ae,a as L,n as A,T as ie,B as oe,b as ne,F as se,c as le,e as ce,P as de,S as pe}from"./consts-9cd982fb.js";import{r as x,R as ue}from"./react-432945ee.js";import{r as b,i as $}from"./createSvgIcon-b6d33248.js";import{j as h}from"./reactDnd-441585ba.js";import{a as u,d as he,m as E,q as V,u as y,L as _,O as fe}from"./vendor-92926b2c.js";import"./reactSelect-7edf7280.js";import"./memoize-acaceb73.js";import"./PluginManagerFactory-2e83b51c.js";import"./DeleteOutlineOutlined-ce41a22d.js";const ve=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],ge=e=>{const{absolute:t,children:r,classes:o,flexItem:s,light:l,orientation:c,textAlign:i,variant:p}=e;return X({root:["root",t&&"absolute",p,l&&"light",c==="vertical"&&"vertical",s&&"flexItem",r&&"withChildren",r&&c==="vertical"&&"withChildrenVertical",i==="right"&&c!=="vertical"&&"textAlignRight",i==="left"&&c!=="vertical"&&"textAlignLeft"],wrapper:["wrapper",c==="vertical"&&"wrapperVertical"]},te,o)},me=H("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.absolute&&t.absolute,t[r.variant],r.light&&t.light,r.orientation==="vertical"&&t.vertical,r.flexItem&&t.flexItem,r.children&&t.withChildren,r.children&&r.orientation==="vertical"&&t.withChildrenVertical,r.textAlign==="right"&&r.orientation!=="vertical"&&t.textAlignRight,r.textAlign==="left"&&r.orientation!=="vertical"&&t.textAlignLeft]}})(({theme:e,ownerState:t})=>u({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(e.vars||e).palette.divider,borderBottomWidth:"thin"},t.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},t.light&&{borderColor:e.vars?`rgba(${e.vars.palette.dividerChannel} / 0.08)`:Q(e.palette.divider,.08)},t.variant==="inset"&&{marginLeft:72},t.variant==="middle"&&t.orientation==="horizontal"&&{marginLeft:e.spacing(2),marginRight:e.spacing(2)},t.variant==="middle"&&t.orientation==="vertical"&&{marginTop:e.spacing(1),marginBottom:e.spacing(1)},t.orientation==="vertical"&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},t.flexItem&&{alignSelf:"stretch",height:"auto"}),({ownerState:e})=>u({},e.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{content:'""',alignSelf:"center"}}),({theme:e,ownerState:t})=>u({},t.children&&t.orientation!=="vertical"&&{"&::before, &::after":{width:"100%",borderTop:`thin solid ${(e.vars||e).palette.divider}`}}),({theme:e,ownerState:t})=>u({},t.children&&t.orientation==="vertical"&&{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:`thin solid ${(e.vars||e).palette.divider}`}}),({ownerState:e})=>u({},e.textAlign==="right"&&e.orientation!=="vertical"&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},e.textAlign==="left"&&e.orientation!=="vertical"&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})),xe=H("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.wrapper,r.orientation==="vertical"&&t.wrapperVertical]}})(({theme:e,ownerState:t})=>u({display:"inline-block",paddingLeft:`calc(${e.spacing(1)} * 1.2)`,paddingRight:`calc(${e.spacing(1)} * 1.2)`},t.orientation==="vertical"&&{paddingTop:`calc(${e.spacing(1)} * 1.2)`,paddingBottom:`calc(${e.spacing(1)} * 1.2)`})),B=x.forwardRef(function(t,r){const o=Y({props:t,name:"MuiDivider"}),{absolute:s=!1,children:l,className:c,component:i=l?"div":"hr",flexItem:p=!1,light:f=!1,orientation:v="horizontal",role:g=i!=="hr"?"separator":void 0,textAlign:S="center",variant:n="fullWidth"}=o,K=he(o,ve),w=u({},o,{absolute:s,component:i,flexItem:p,light:f,orientation:v,role:g,textAlign:S,variant:n}),k=ge(w);return h.jsx(me,u({as:i,className:J(k.root,c),role:g,ref:r,ownerState:w},K,{children:l?h.jsx(xe,{className:k.wrapper,ownerState:w,children:l}):null}))});B.muiSkipListHighlight=!0;const I=B;var N={},be=$;Object.defineProperty(N,"__esModule",{value:!0});var U=N.default=void 0,$e=be(b()),_e=h,Se=(0,$e.default)((0,_e.jsx)("path",{d:"M19.3 16.9c.4-.7.7-1.5.7-2.4 0-2.5-2-4.5-4.5-4.5S11 12 11 14.5s2 4.5 4.5 4.5c.9 0 1.7-.3 2.4-.7l3.2 3.2 1.4-1.4-3.2-3.2zm-3.8.1c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5zM12 20v2C6.48 22 2 17.52 2 12S6.48 2 12 2c4.84 0 8.87 3.44 9.8 8h-2.07c-.64-2.46-2.4-4.47-4.73-5.41V5c0 1.1-.9 2-2 2h-2v2c0 .55-.45 1-1 1H8v2h2v3H9l-4.79-4.79C4.08 10.79 4 11.38 4 12c0 4.41 3.59 8 8 8z"}),"TravelExplore");U=N.default=Se;var R={},we=$;Object.defineProperty(R,"__esModule",{value:!0});var q=R.default=void 0,ye=we(b()),Ce=h,Ne=(0,ye.default)((0,Ce.jsx)("path",{d:"M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z"}),"Extension");q=R.default=Ne;var M={},Re=$;Object.defineProperty(M,"__esModule",{value:!0});var W=M.default=void 0,Me=Re(b()),ze=h,De=(0,Me.default)((0,ze.jsx)("path",{d:"M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"}),"PersonOutlineOutlined");W=M.default=De;var z={},ke=$;Object.defineProperty(z,"__esModule",{value:!0});var F=z.default=void 0,je=ke(b()),Le=h,Ae=(0,je.default)((0,Le.jsx)("path",{d:"M2 20h20v-4H2v4zm2-3h2v2H4v-2zM2 4v4h20V4H2zm4 3H4V5h2v2zm-4 7h20v-4H2v4zm2-3h2v2H4v-2z"}),"Storage");F=z.default=Ae;function Ie(e){const{c:t}=e,r=E(),o=Z(),s="Link Copied To Clipboard";function l(){r(ae(!0)),setTimeout(()=>{var c;if(navigator!=null&&navigator.clipboard&&window.isSecureContext)(c=navigator==null?void 0:navigator.clipboard)==null||c.writeText(window.location.href).then(function(){const i=o.add({data:window.location.href,description:"From Shared URL"},10);r(L(i)),r(j({type:A.success,message:s}))},function(i){console.log("error on copy",i)});else{let i=document.createElement("textarea");return i.value=window.location.href,i.style.position="fixed",i.style.left="-999999px",i.style.top="-999999px",document.body.appendChild(i),i.focus(),i.select(),new Promise((p,f)=>{const v=o.add({data:window.location.href,description:"From Shared URL"},10);r(L(v)),document.execCommand("copy")?p():f(),i.remove(),r(j({type:A.success,message:s}))})}},200)}return d(m,{onClick:l,disabled:!1,style:{fontSize:"12px"},children:[" ",a(re,{fontSize:"small",className:t}),a("span",{children:"Copy Link"})]})}var D={},He=$;Object.defineProperty(D,"__esModule",{value:!0});var G=D.default=void 0,Pe=He(b()),Oe=h,Te=(0,Pe.default)((0,Oe.jsx)("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}),"Menu");G=D.default=Te;const Ee=e=>({color:`${e.contrast}`,overflow:"visible",fontSize:"12px",background:`${e.shadow}`,border:`1px solid ${e.accentNeutral}`,mt:1.5,"& .MuiAvatar-root":{width:32,height:32,ml:-.5,mr:1},"&:before":{content:'""',display:"block",position:"absolute",top:0,right:14,width:10,height:10,borderLeft:`1px solid ${e.accentNeutral}`,borderTop:`1px solid ${e.accentNeutral}`,bgcolor:`${e.shadow}`,transform:"translateY(-50%) rotate(45deg)",zIndex:0},"& .icon":{fontSize:"16px",marginRight:"4px",color:`${e.contrast}`},"& .item":{fontSize:"12px",color:`${e.contrast}`}}),Ve=e=>({display:"flex",justifyContent:"center",alignItems:"center",marginLeft:2,paddingLeft:0,cursor:"pointer",paddingRight:0,width:"30px",height:"30px",background:"none",borderRadius:"3px",color:`${e.accentNeutral}`,border:`1px solid ${e.accentNeutral}`});function Be(){const{key:e}=V(),t=y(n=>n.showDataSourceSetting),r=y(n=>n.currentUser.role),o=E(),s=C(),[l,c]=ue.useState(null),i=x.useMemo(()=>!!l,[l]),[p,f]=x.useState(r||"superAdmin");x.useEffect(()=>{f(r)},[r]),x.useEffect(()=>{g()},[e]);const v=n=>{n.stopPropagation(),n.preventDefault(),c(()=>n.currentTarget)},g=n=>{n==null||n.stopPropagation(),n==null||n.preventDefault(),c(()=>{})},S=()=>{g(),o(ce(!0))};return d(P,{children:[a(oe,{sx:{display:"flex",alignItems:"center",textAlign:"center"},children:a(ie,{title:"Settings",children:a("button",{onClick:v,style:Ve(s),"aria-controls":i?"account-menu":void 0,"aria-haspopup":"true","aria-expanded":i?"true":void 0,children:a(G,{style:{width:"14px",height:"14px"}})})})}),d(ne,{id:"account-menu",anchorEl:l,open:i,onClose:g,onClick:v,PaperProps:{elevation:0,sx:Ee(s)},TransitionComponent:se,transformOrigin:{horizontal:"right",vertical:"top"},anchorOrigin:{horizontal:"right",vertical:"top"},children:[a(Ie,{c:"icon"}),a(I,{}),d(m,{onClick:S,className:"item",children:[a(le,{className:"icon"})," General Settings"]}),a(I,{}),a(_,{to:"/",children:d(m,{className:"item",children:[a(U,{className:"icon"}),"Search"]})}),a(_,{to:"/plugins",children:d(m,{className:"item",children:[a(q,{className:"icon"}),"Plugins"]})}),a(_,{to:"/users",children:d(m,{className:"item",children:[a(W,{className:"icon"}),"Users"]})}),t&&(p==="admin"||p==="superAdmin")&&a(_,{to:"datasources",children:d(m,{className:"item",children:[a(F,{className:"icon"}),"Datasources"]})})]})]})}const Ue="/assets/qryn-logo-cd0b42d9.png",qe=()=>{const r=V().pathname.split("/").map((o,s)=>o===""&&s===0?{name:"home",link:"/"}:{name:`/${o}`,link:o});return a(P,{children:r.map(({name:o,link:s},l)=>a("a",{href:s,className:"bread-link",children:o},l))})},We=e=>T("background:",e.shadow,";height:30px;padding:4px;display:flex;align-items:center;border-bottom:1px solid ",e.accentNeutral,";.logo-section{margin:0;.version{color:",e.contrast,";font-size:10px;margin-left:5px;}.path{color:",e.contrast,";margin-left:20px;flex:1;font-weight:bold;text-transform:uppercase;font-size:11px;letter-spacing:1px;.bread-link{cursor:pointer;&:hover{color:",e.primary,";}}}}",""),Fe=()=>{const e=C();return d("div",{className:O(We(e)),children:[d("div",{className:"logo-section",children:[a("img",{src:Ue,alt:"Qryn View",height:"24px",className:"logo"}),a("p",{className:"version",children:"0.28.2"}),a("p",{className:"path",children:a(qe,{})})]}),a(de,{section:"Status Bar",localProps:e}),a(Be,{})]})},Ge=e=>T("background:",e.background,";display:flex;flex-direction:column;height:100vh;flex:1;","");function it(){const e=C(),t=y(r=>r.settingsDialogOpen);return d("div",{className:O(Ge(e)),children:[a(Fe,{}),a(fe,{}),a(ee,{}),a(pe,{open:t})]})}export{Ge as MainAppStyles,it as default};
