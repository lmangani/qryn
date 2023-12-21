import{a5 as F,m as q,k as T,s as D,u as Q,c as J,b as G,f as I,d as i,g as M,h as O,F as $,j as U,D as B}from"./index-ff3f8e4f.js";import{r as C}from"./react-432945ee.js";import{a as k,d as H,m as K,u as V,n as z,v as W}from"./vendor-2d54effd.js";import{r as X,i as Y,S as Z}from"./createSvgIcon-5eb8a045.js";import{j as N}from"./reactDnd-e973ae57.js";import{s as j}from"./actions-2742fbfc.js";import"./reactSelect-ac076837.js";import"./memoize-acaceb73.js";const ee=F(N.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");function re(e){return q("MuiAvatar",e)}T("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const te=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],oe=e=>{const{classes:r,variant:o,colorDefault:s}=e;return G({root:["root",o,s&&"colorDefault"],img:["img"],fallback:["fallback"]},re,r)},se=D("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:o}=e;return[r.root,r[o.variant],o.colorDefault&&r.colorDefault]}})(({theme:e,ownerState:r})=>k({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},r.variant==="rounded"&&{borderRadius:(e.vars||e).shape.borderRadius},r.variant==="square"&&{borderRadius:0},r.colorDefault&&k({color:(e.vars||e).palette.background.default},e.vars?{backgroundColor:e.vars.palette.Avatar.defaultBg}:{backgroundColor:e.palette.mode==="light"?e.palette.grey[400]:e.palette.grey[600]}))),ae=D("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,r)=>r.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),ne=D(ee,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,r)=>r.fallback})({width:"75%",height:"75%"});function ie({crossOrigin:e,referrerPolicy:r,src:o,srcSet:s}){const[d,f]=C.useState(!1);return C.useEffect(()=>{if(!o&&!s)return;f(!1);let g=!0;const c=new Image;return c.onload=()=>{g&&f("loaded")},c.onerror=()=>{g&&f("error")},c.crossOrigin=e,c.referrerPolicy=r,c.src=o,s&&(c.srcset=s),()=>{g=!1}},[e,r,o,s]),d}const le=C.forwardRef(function(r,o){const s=Q({props:r,name:"MuiAvatar"}),{alt:d,children:f,className:g,component:c="div",imgProps:v,sizes:S,src:h,srcSet:p,variant:l="circular"}=s,a=H(s,te);let n=null;const u=ie(k({},v,{src:h,srcSet:p})),m=h||p,y=m&&u!=="error",R=k({},s,{colorDefault:!y,component:c,variant:l}),w=oe(R);return y?n=N.jsx(ae,k({alt:d,srcSet:p,src:h,sizes:S,ownerState:R,className:w.img},v)):f!=null?n=f:m&&d?n=d[0]:n=N.jsx(ne,{ownerState:R,className:w.fallback}),N.jsx(se,k({as:c,ownerState:R,className:J(w.root,g),ref:o},a,{children:n}))}),ce=le;var _={},de=Y;Object.defineProperty(_,"__esModule",{value:!0});var P=_.default=void 0,ue=de(X()),pe=N,fe=(0,ue.default)((0,pe.jsx)("path",{d:"M21.95 10.99c-1.79-.03-3.7-1.95-2.68-4.22-2.98 1-5.77-1.59-5.19-4.56C6.95.71 2 6.58 2 12c0 5.52 4.48 10 10 10 5.89 0 10.54-5.08 9.95-11.01zM8.5 15c-.83 0-1.5-.67-1.5-1.5S7.67 12 8.5 12s1.5.67 1.5 1.5S9.33 15 8.5 15zm2-5C9.67 10 9 9.33 9 8.5S9.67 7 10.5 7s1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5 6c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"}),"Cookie");P=_.default=fe;function ge(e){return e.split(" ").map(r=>r[0].toUpperCase()).slice(0,3).join("")}const me={SUPER_ADMIN_ROLE:"superAdmin",ADMIN_ROLE:"admin",USER_ROLE:"user",GUEST_ROLE:"guest"},L="store_user",ve=()=>{let e=[];try{let r=localStorage.getItem(L);if(r&&typeof r=="string"){let o=JSON.parse(r);if(o&&(o==null?void 0:o.length)>0)return e=o,e}return e}catch(r){return console.log("Error on retrieving users from localstorage: ",r),e}},E=e=>{try{localStorage.setItem(L,JSON.stringify(e))}catch(r){console.log("Error storing users data",r)}},xe=e=>O("background:",e.background,";padding:10px;display:flex;flex:1;flex-direction:column;align-items:center;.cont{display:flex;width:100%;border-radius:3px;max-width:1280px;background:",e.shadow,";border:1px solid ",e.accentNeutral,";flex:1;flex-direction:column;}.user-row{display:flex;align-items:center;margin:5px;justify-content:space-between;border:1px solid ",e.accentNeutral,";padding:10px;border-radius:3px;height:30px;p{color:",e.contrast,";font-size:10px;letter-spacing:1px;text-transform:uppercase;display:flex;align-items:center;}.avatar{color:",e.contrast,";font-size:10px;letter-spacing:1px;display:flex;align-items:center;gap:4px;text-transform:uppercase;}select{margin-left:4px;font-size:12px;color:",e.contrast,";padding:4px;border-radius:3px;background:",e.deep,";}.user-role{display:flex;align-items:center;font-size:10px;text-transform:uppercase;color:",e.contrast,";p{margin-left:4px;}}.name-input{display:flex;align-items:center;padding:4px;border:1px solid ",e.accentNeutral,";border-radius:3px;background:",e.deep,";color:",e.contrast,";height:28px;font-size:12px;}.action-buttons{display:flex;align-items:center;gap:4px;width:80px;button{display:flex;align-items:center;flex:1;background:",e.shadow,";border:1px solid ",e.accentNeutral,";border-radius:3px;cursor:pointer;color:",e.contrast,";max-width:25px;&:hover{background:",e.background,";}.cookie-icon{font-size:15px;color:",e.contrast,";}}}}",""),he=(e,r)=>O("padding:4px;border-radius:3px;font-size:10px;text-transform:uppercase;color:",r?e.primary:e.contrast,"!important;color:",e.deep,";cursor:pointer;display:flex;align-items:center;border:1px solid transparent;&:hover{border:1px solid ",e.accentNeutral,';}&:after{content:"";margin-left:4px;display:flex;width:10px;height:10px;border-radius:3px;background:',r?e.primary:e.shadow,";border:1px solid ",e.primary,";}",""),be=({name:e})=>i(ce,{children:ge(e)}),Ue=e=>{const{user:r,onUserAdd:o,onUserChange:s,onUserRemove:d,onUserCookie:f,onUserSelect:g}=e,{name:c,role:v,active:S,id:h}=r,p=v===me.SUPER_ADMIN_ROLE,l=I(),[a,n]=C.useState(!1);return U("div",{className:"user-row",children:[a?i("p",{children:i("input",{className:"name-input",value:c,onChange:t=>{var x;let b=(x=t==null?void 0:t.target)==null?void 0:x.value;b.trim()===""&&(b=`Qryn ${v}`);let A={...r,name:B.sanitize(b)};s(t,A)},onKeyDown:t=>{t.key==="Enter"&&n(()=>!1)}})}):U("div",{onClick:()=>{p||n(t=>!t)},className:"avatar",children:[i(be,{name:c}),i("span",{children:c})]}),U("div",{className:"user-role",children:["Role:"," ",p?i("p",{children:"Super Admin"}):U("select",{onChange:t=>{var x;let b=(x=t==null?void 0:t.target)==null?void 0:x.value,A={...r,role:b};s(t,A)},defaultValue:v,children:[i("option",{value:"user",children:"User"}),i("option",{value:"admin",children:"Admin"}),i("option",{value:"guest",children:"Guest"})]})]}),U("p",{children:["Active"," ",!p&&i(Z,{checked:S,size:"small",inputProps:{"aria-label":"controlled"},onChange:t=>{var x;let b=(x=t==null?void 0:t.target)==null?void 0:x.checked,A={...r,active:b};s(t,A)}})]}),U("div",{onClick:t=>g(t,r),className:M(he(l,r.selected)),children:["Current User"," "]}),U("div",{className:"action-buttons",children:[i("button",{title:"generate cookie from user",onClick:t=>f(t,r),children:i(P,{className:"cookie-icon"})}),i("button",{title:"add user",onClick:o,children:"+"}),!p&&i("button",{title:"remove user",onClick:t=>d(t,h),children:"-"})]})]})},ye=()=>{const e=K(),r=V(l=>l.currentUser),o=C.useMemo(()=>ve(),[]),[s,d]=C.useState((o==null?void 0:o.length)>0?o:[{id:z(),name:"Qryn Admin",role:"superAdmin",active:!0,selected:!0}]),[f,g]=W(["user-cookie"]),c=()=>{d(l=>{let a=[...l,{id:z(),name:"Qryn User",role:"user",active:!0,selected:!1}];return E(a),a})},v=(l,a)=>{l.preventDefault(),d(n=>{let u=[...n],m=u==null?void 0:u.map(y=>y.id===a.id?{...a,selected:!0}:{...y,selected:!1});return E(m),m}),e(j({...a,selected:!0}))},S=(l,a)=>{l.preventDefault();const n=[...s].filter(u=>u.id!==a);d(()=>(E(n),n))},h=(l,a)=>{l.preventDefault();let n=[...s],u=n==null?void 0:n.map(m=>m.id===a.id?a:m);a.id===r.id&&e(j(a)),d(()=>u),E(u)},p=(l,a)=>{l.preventDefault();try{g("user-cookie",btoa(JSON.stringify(a)))}catch(n){console.log(n,"Error on setting user cookie")}};return i($,{children:(s==null?void 0:s.length)>0&&s.map((l,a)=>i(Ue,{user:l,onUserAdd:c,onUserChange:h,onUserRemove:S,onUserCookie:p,onUserSelect:v},a))})},De=()=>{const e=I();return i("div",{className:M(xe(e)),children:i("div",{className:"cont",children:i(ye,{})})})};export{De as default,ve as getUsersFromLocal,E as setLocalUsers};
