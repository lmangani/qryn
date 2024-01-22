import{a as c,d as T}from"./vendor-ebc92242.js";import{r as i,d as oe,e as ae}from"./react-432945ee.js";import{O as ne,n as p,a6 as se,a4 as re,a3 as ce,a5 as ie,a1 as le,a7 as ue,m as j,k as q,s as w,B as de,r as pe,c as O,b as D,a as z,a8 as fe,a9 as he,u as ge}from"./index-84026252.js";import{j as v}from"./reactDnd-f9e32f58.js";function be(...e){return e.reduce((t,o)=>o==null?t:function(...n){t.apply(this,n),o.apply(this,n)},()=>{})}function me(e,t=166){let o;function a(...n){const r=()=>{e.apply(this,n)};clearTimeout(o),o=setTimeout(r,t)}return a.clear=()=>{clearTimeout(o)},a}function ve(e,t){return()=>null}function we(e,t){var o,a;return i.isValidElement(e)&&t.indexOf((o=e.type.muiName)!=null?o:(a=e.type)==null||(a=a._payload)==null||(a=a.value)==null?void 0:a.muiName)!==-1}function U(e){return e&&e.ownerDocument||document}function ke(e){return U(e).defaultView||window}function Ce(e,t){return()=>null}let P=0;function Se(e){const[t,o]=i.useState(e),a=e||t;return i.useEffect(()=>{t==null&&(P+=1,o(`mui-${P}`))},[t]),a}const E=oe["useId".toString()];function xe(e){if(E!==void 0){const t=E();return e??t}return Se(e)}function $e(e,t,o,a,n){return null}function V({controlled:e,default:t,name:o,state:a="value"}){const{current:n}=i.useRef(e!==void 0),[r,f]=i.useState(t),u=n?e:r,h=i.useCallback(m=>{n||f(m)},[]);return[u,h]}const ye={configure:e=>{ne.configure(e)}},Ie=Object.freeze(Object.defineProperty({__proto__:null,capitalize:p,createChainedFunction:be,createSvgIcon:se,debounce:me,deprecatedPropType:ve,isMuiElement:we,ownerDocument:U,ownerWindow:ke,requirePropFactory:Ce,setRef:re,unstable_ClassNameGenerator:ye,unstable_useEnhancedEffect:ce,unstable_useId:xe,unsupportedProp:$e,useControlled:V,useEventCallback:ie,useForkRef:le,useIsFocusVisible:ue},Symbol.toStringTag,{value:"Module"})),Re=i.createContext(void 0),Be=Re;function Fe(){return i.useContext(Be)}function _e(e){return j("PrivateSwitchBase",e)}q("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const Ne=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],ze=e=>{const{classes:t,checked:o,disabled:a,edge:n}=e,r={root:["root",o&&"checked",a&&"disabled",n&&`edge${p(n)}`],input:["input"]};return D(r,_e,t)},Pe=w(de)(({ownerState:e})=>c({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),Ee=w("input",{shouldForwardProp:pe})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),Me=i.forwardRef(function(t,o){const{autoFocus:a,checked:n,checkedIcon:r,className:f,defaultChecked:u,disabled:h,disableFocusRipple:m=!1,edge:g=!1,icon:b,id:C,inputProps:A,inputRef:G,name:W,onBlur:y,onChange:I,onFocus:R,readOnly:X,required:H=!1,tabIndex:J,type:S,value:B}=t,K=T(t,Ne),[F,Q]=V({controlled:n,default:!!u,name:"SwitchBase",state:"checked"}),d=Fe(),Y=l=>{R&&R(l),d&&d.onFocus&&d.onFocus(l)},Z=l=>{y&&y(l),d&&d.onBlur&&d.onBlur(l)},ee=l=>{if(l.nativeEvent.defaultPrevented)return;const N=l.target.checked;Q(N),I&&I(l,N)};let k=h;d&&typeof k>"u"&&(k=d.disabled);const te=S==="checkbox"||S==="radio",x=c({},t,{checked:F,disabled:k,disableFocusRipple:m,edge:g}),_=ze(x);return v.jsxs(Pe,c({component:"span",className:O(_.root,f),centerRipple:!0,focusRipple:!m,disabled:k,tabIndex:null,role:void 0,onFocus:Y,onBlur:Z,ownerState:x,ref:o},K,{children:[v.jsx(Ee,c({autoFocus:a,checked:n,defaultChecked:u,className:_.input,disabled:k,id:te?C:void 0,name:W,onChange:ee,readOnly:X,ref:G,required:H,ownerState:x,tabIndex:J,type:S},S==="checkbox"&&B===void 0?{}:{value:B},A)),F?r:b]}))}),Te=Me;function je(e){return j("MuiSwitch",e)}const qe=q("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),s=qe,Oe=["className","color","edge","size","sx"],De=e=>{const{classes:t,edge:o,size:a,color:n,checked:r,disabled:f}=e,u={root:["root",o&&`edge${p(o)}`,`size${p(a)}`],switchBase:["switchBase",`color${p(n)}`,r&&"checked",f&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},h=D(u,je,t);return c({},t,h)},Ue=w("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.edge&&t[`edge${p(o.edge)}`],t[`size${p(o.size)}`]]}})(({ownerState:e})=>c({display:"inline-flex",width:34+12*2,height:14+12*2,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},e.edge==="start"&&{marginLeft:-8},e.edge==="end"&&{marginRight:-8},e.size==="small"&&{width:40,height:24,padding:7,[`& .${s.thumb}`]:{width:16,height:16},[`& .${s.switchBase}`]:{padding:4,[`&.${s.checked}`]:{transform:"translateX(16px)"}}})),Ve=w(Te,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.switchBase,{[`& .${s.input}`]:t.input},o.color!=="default"&&t[`color${p(o.color)}`]]}})(({theme:e})=>({position:"absolute",top:0,left:0,zIndex:1,color:e.vars?e.vars.palette.Switch.defaultColor:`${e.palette.mode==="light"?e.palette.common.white:e.palette.grey[300]}`,transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),[`&.${s.checked}`]:{transform:"translateX(20px)"},[`&.${s.disabled}`]:{color:e.vars?e.vars.palette.Switch.defaultDisabledColor:`${e.palette.mode==="light"?e.palette.grey[100]:e.palette.grey[600]}`},[`&.${s.checked} + .${s.track}`]:{opacity:.5},[`&.${s.disabled} + .${s.track}`]:{opacity:e.vars?e.vars.opacity.switchTrackDisabled:`${e.palette.mode==="light"?.12:.2}`},[`& .${s.input}`]:{left:"-100%",width:"300%"}}),({theme:e,ownerState:t})=>c({"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:z(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},t.color!=="default"&&{[`&.${s.checked}`]:{color:(e.vars||e).palette[t.color].main,"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:z(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${s.disabled}`]:{color:e.vars?e.vars.palette.Switch[`${t.color}DisabledColor`]:`${e.palette.mode==="light"?fe(e.palette[t.color].main,.62):he(e.palette[t.color].main,.55)}`}},[`&.${s.checked} + .${s.track}`]:{backgroundColor:(e.vars||e).palette[t.color].main}})),Le=w("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(e,t)=>t.track})(({theme:e})=>({height:"100%",width:"100%",borderRadius:14/2,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:e.vars?e.vars.palette.common.onBackground:`${e.palette.mode==="light"?e.palette.common.black:e.palette.common.white}`,opacity:e.vars?e.vars.opacity.switchTrack:`${e.palette.mode==="light"?.38:.3}`})),Ae=w("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(e,t)=>t.thumb})(({theme:e})=>({boxShadow:(e.vars||e).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"})),Ge=i.forwardRef(function(t,o){const a=ge({props:t,name:"MuiSwitch"}),{className:n,color:r="primary",edge:f=!1,size:u="medium",sx:h}=a,m=T(a,Oe),g=c({},a,{color:r,edge:f,size:u}),b=De(g),C=v.jsx(Ae,{className:b.thumb,ownerState:g});return v.jsxs(Ue,{className:O(b.root,n),sx:h,ownerState:g,children:[v.jsx(Ve,c({type:"checkbox",icon:C,checkedIcon:C,ref:o,ownerState:g},m,{classes:c({},b,{root:b.switchBase})})),v.jsx(Le,{className:b.track,ownerState:g})]})}),Qe=Ge;var L={exports:{}};(function(e){function t(o){return o&&o.__esModule?o:{default:o}}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})(L);var Ye=L.exports,$={};const We=ae(Ie);var M;function Ze(){return M||(M=1,function(e){"use client";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.createSvgIcon}});var t=We}($)),$}export{Qe as S,ke as a,Te as b,be as c,me as d,Fe as e,V as f,Ye as i,U as o,Ze as r,xe as u};
