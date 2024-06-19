import{ac as F,n as T,m as q,s as D,ah as Q,c as J,ai as G,b as B,i as H,f as I,d as i,g as M,h as z,F as K,j as y,D as V}from"./index-Db6C1Mw1.js";import{r as C}from"./react-B8DbRJ_3.js";import{a as U,d as W,m as $,u as X,n as _,w as Y}from"./vendor-BVYYq__d.js";import{r as Z,S as ee}from"./createSvgIcon-BhVK1PDy.js";import{j as A}from"./reactDnd-BtpxPq0t.js";import{s as j}from"./actions-C1TUpiFF.js";import"./reactSelect-FVq3QTPV.js";import"./memoize-CbKs8VX_.js";const re=F(A.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");function te(e){return T("MuiAvatar",e)}q("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const oe=["alt","children","className","component","slots","slotProps","imgProps","sizes","src","srcSet","variant"],se=G(),ae=e=>{const{classes:r,variant:o,colorDefault:a}=e;return B({root:["root",o,a&&"colorDefault"],img:["img"],fallback:["fallback"]},te,r)},ne=D("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:o}=e;return[r.root,r[o.variant],o.colorDefault&&r.colorDefault]}})(({theme:e})=>({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(e.vars||e).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:U({color:(e.vars||e).palette.background.default},e.vars?{backgroundColor:e.vars.palette.Avatar.defaultBg}:U({backgroundColor:e.palette.grey[400]},e.applyStyles("dark",{backgroundColor:e.palette.grey[600]})))}]})),ie=D("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,r)=>r.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),le=D(re,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,r)=>r.fallback})({width:"75%",height:"75%"});function ce({crossOrigin:e,referrerPolicy:r,src:o,srcSet:a}){const[d,g]=C.useState(!1);return C.useEffect(()=>{if(!o&&!a)return;g(!1);let v=!0;const l=new Image;return l.onload=()=>{v&&g("loaded")},l.onerror=()=>{v&&g("error")},l.crossOrigin=e,l.referrerPolicy=r,l.src=o,a&&(l.srcset=a),()=>{v=!1}},[e,r,o,a]),d}const de=C.forwardRef(function(r,o){const a=se({props:r,name:"MuiAvatar"}),{alt:d,children:g,className:v,component:l="div",slots:h={},slotProps:S={},imgProps:k,sizes:x,src:n,srcSet:s,variant:c="circular"}=a,p=W(a,oe);let u=null;const R=ce(U({},k,{src:n,srcSet:s})),N=n||s,E=N&&R!=="error",t=U({},a,{colorDefault:!E,component:l,variant:c}),f=ae(t),[b,m]=Q("img",{className:f.img,elementType:ie,externalForwardedProps:{slots:h,slotProps:{img:U({},k,S.img)}},additionalProps:{alt:d,src:n,srcSet:s,sizes:x},ownerState:t});return E?u=A.jsx(b,U({},m)):g||g===0?u=g:N&&d?u=d[0]:u=A.jsx(le,{ownerState:t,className:f.fallback}),A.jsx(ne,U({as:l,ownerState:t,className:J(f.root,v),ref:o},p,{children:u}))});var P={},ue=H;Object.defineProperty(P,"__esModule",{value:!0});var O=P.default=void 0,pe=ue(Z()),fe=A;O=P.default=(0,pe.default)((0,fe.jsx)("path",{d:"M21.95 10.99c-1.79-.03-3.7-1.95-2.68-4.22-2.98 1-5.77-1.59-5.19-4.56C6.95.71 2 6.58 2 12c0 5.52 4.48 10 10 10 5.89 0 10.54-5.08 9.95-11.01M8.5 15c-.83 0-1.5-.67-1.5-1.5S7.67 12 8.5 12s1.5.67 1.5 1.5S9.33 15 8.5 15m2-5C9.67 10 9 9.33 9 8.5S9.67 7 10.5 7s1.5.67 1.5 1.5-.67 1.5-1.5 1.5m4.5 6c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1"}),"Cookie");function ge(e){return e.split(" ").map(r=>r[0].toUpperCase()).slice(0,3).join("")}const me={SUPER_ADMIN_ROLE:"superAdmin",ADMIN_ROLE:"admin",USER_ROLE:"user",GUEST_ROLE:"guest"},L="store_user",ve=()=>{let e=[];try{let r=localStorage.getItem(L);if(r&&typeof r=="string"){let o=JSON.parse(r);if(o&&(o==null?void 0:o.length)>0)return e=o,e}return e}catch(r){return console.log("Error on retrieving users from localstorage: ",r),e}},w=e=>{try{localStorage.setItem(L,JSON.stringify(e))}catch(r){console.log("Error storing users data",r)}},xe=e=>z("background:",e.background,";padding:10px;display:flex;flex:1;flex-direction:column;align-items:center;.cont{display:flex;width:100%;border-radius:3px;max-width:1280px;background:",e.shadow,";border:1px solid ",e.accentNeutral,";flex:1;flex-direction:column;}.user-row{display:flex;align-items:center;margin:5px;justify-content:space-between;border:1px solid ",e.accentNeutral,";padding:10px;border-radius:3px;height:30px;p{color:",e.contrast,";font-size:10px;letter-spacing:1px;text-transform:uppercase;display:flex;align-items:center;}.avatar{color:",e.contrast,";font-size:10px;letter-spacing:1px;display:flex;align-items:center;gap:4px;text-transform:uppercase;}select{margin-left:4px;font-size:12px;color:",e.contrast,";padding:4px;border-radius:3px;background:",e.deep,";}.user-role{display:flex;align-items:center;font-size:10px;text-transform:uppercase;color:",e.contrast,";p{margin-left:4px;}}.name-input{display:flex;align-items:center;padding:4px;border:1px solid ",e.accentNeutral,";border-radius:3px;background:",e.deep,";color:",e.contrast,";height:26px;font-size:12px;}.action-buttons{display:flex;align-items:center;gap:4px;width:80px;button{display:flex;align-items:center;flex:1;background:",e.shadow,";border:1px solid ",e.accentNeutral,";border-radius:3px;cursor:pointer;color:",e.contrast,";max-width:25px;&:hover{background:",e.background,";}.cookie-icon{font-size:15px;color:",e.contrast,";}}}}",""),he=(e,r)=>z("padding:4px;border-radius:3px;font-size:10px;text-transform:uppercase;color:",r?e.primary:e.contrast,"!important;color:",e.deep,";cursor:pointer;display:flex;align-items:center;border:1px solid transparent;&:hover{border:1px solid ",e.accentNeutral,';}&:after{content:"";margin-left:4px;display:flex;width:10px;height:10px;border-radius:3px;background:',r?e.primary:e.shadow,";border:1px solid ",e.primary,";}",""),be=({name:e})=>i(de,{children:ge(e)}),ye=e=>{const{user:r,onUserAdd:o,onUserChange:a,onUserRemove:d,onUserCookie:g,onUserSelect:v}=e,{name:l,role:h,active:S,id:k}=r,x=h===me.SUPER_ADMIN_ROLE,n=I(),[s,c]=C.useState(!1);return y("div",{className:"user-row",children:[s?i("p",{children:i("input",{className:"name-input",value:l,onChange:t=>{var m;let f=(m=t==null?void 0:t.target)==null?void 0:m.value;f.trim()===""&&(f=`Qryn ${h}`);let b={...r,name:V.sanitize(f)};a(t,b)},onKeyDown:t=>{t.key==="Enter"&&c(()=>!1)}})}):y("div",{onClick:()=>{x||c(t=>!t)},className:"avatar",children:[i(be,{name:l}),i("span",{children:l})]}),y("div",{className:"user-role",children:["Role:"," ",x?i("p",{children:"Super Admin"}):y("select",{onChange:t=>{var m;let f=(m=t==null?void 0:t.target)==null?void 0:m.value,b={...r,role:f};a(t,b)},defaultValue:h,children:[i("option",{value:"user",children:"User"}),i("option",{value:"admin",children:"Admin"}),i("option",{value:"guest",children:"Guest"})]})]}),y("p",{children:["Active"," ",!x&&i(ee,{checked:S,size:"small",inputProps:{"aria-label":"controlled"},onChange:t=>{var m;let f=(m=t==null?void 0:t.target)==null?void 0:m.checked,b={...r,active:f};a(t,b)}})]}),y("div",{onClick:t=>v(t,r),className:M(he(n,r.selected)),children:["Current User"," "]}),y("div",{className:"action-buttons",children:[i("button",{title:"generate cookie from user",onClick:t=>g(t,r),children:i(O,{className:"cookie-icon"})}),i("button",{title:"add user",onClick:o,children:"+"}),!x&&i("button",{title:"remove user",onClick:t=>d(t,k),children:"-"})]})]})},Ue=()=>{const e=$(),r=X(n=>n.currentUser),o=C.useMemo(()=>ve(),[]),[a,d]=C.useState((o==null?void 0:o.length)>0?o:[{id:_(),name:"Qryn Admin",role:"superAdmin",active:!0,selected:!0}]),[g,v]=Y(["user-cookie"]),l=()=>{d(n=>{let s=[...n,{id:_(),name:"Qryn User",role:"user",active:!0,selected:!1}];return w(s),s})},h=(n,s)=>{n.preventDefault(),d(c=>{let p=[...c],u=p==null?void 0:p.map(R=>R.id===s.id?{...s,selected:!0}:{...R,selected:!1});return w(u),u}),e(j({...s,selected:!0}))},S=(n,s)=>{n.preventDefault();const c=[...a].filter(p=>p.id!==s);d(()=>(w(c),c))},k=(n,s)=>{n.preventDefault();let c=[...a],p=c==null?void 0:c.map(u=>u.id===s.id?s:u);s.id===r.id&&e(j(s)),d(()=>p),w(p)},x=(n,s)=>{n.preventDefault();try{v("user-cookie",btoa(JSON.stringify(s)))}catch(c){console.log(c,"Error on setting user cookie")}};return i(K,{children:(a==null?void 0:a.length)>0&&a.map((n,s)=>i(ye,{user:n,onUserAdd:l,onUserChange:k,onUserRemove:S,onUserCookie:x,onUserSelect:h},s))})},De=()=>{const e=I();return i("div",{className:M(xe(e)),children:i("div",{className:"cont",children:i(Ue,{})})})};export{De as default,ve as getUsersFromLocal,w as setLocalUsers};
