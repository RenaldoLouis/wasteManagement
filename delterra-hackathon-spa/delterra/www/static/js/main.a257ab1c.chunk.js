(this["webpackJsonptemplate-react"]=this["webpackJsonptemplate-react"]||[]).push([[0],{253:function(e,t,a){},254:function(e,t,a){},380:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(21),o=a.n(r),l=(a(253),a(254),a(427)),c=a(429),d=a(431),g=a(430),m=a(223),p=a.n(m),s=a(224),h=a.n(s),j=a(500),b=a(233),x=a(424);const u=Object(x.a)((e=>({root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}})));var f=a(2);const O=e=>{const t=u(),[a,n]=i.a.useState(null),r=Boolean(a),o=()=>{n(null)};return Object(f.jsx)("div",{className:t.root,children:Object(f.jsx)(l.a,{position:"static",children:Object(f.jsxs)(c.a,{children:[Object(f.jsx)(g.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"menu",children:Object(f.jsx)(p.a,{})}),Object(f.jsx)(d.a,{variant:"h6",className:t.title,children:"Photos"}),Object(f.jsxs)("div",{children:[Object(f.jsx)(g.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:e=>{n(e.currentTarget)},color:"inherit",children:Object(f.jsx)(h.a,{})}),Object(f.jsxs)(b.a,{id:"menu-appbar",anchorEl:a,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:r,onClose:o,children:[Object(f.jsx)(j.a,{onClick:o,children:"Profile"}),Object(f.jsx)(j.a,{onClick:o,children:"My account"})]})]})]})})})};var v=Object(n.memo)(O);const C=Object(n.memo)((e=>{let{render:t,of:a}=e;return n.Children.toArray(a.map(((e,a)=>t(e,a))))}));var L=a(497);const B="https://pokeapi.co/api/v2/",y="pokemon/";var S={getAllPokemons:e=>L.a.get("".concat(B+y,"?limit=").concat(e)),getPokemonById:e=>L.a.get("".concat(B+y).concat(e))},T=a(234),k=a(232);a(379);const R={0:"#FFFFFF",10:"#F1F1F1",15:"#ECECEC",20:"#E0E0E0",25:"#CBCBCB",30:"#9EA1A4",40:"#7E8286",50:"#5E6267",60:"#3E4349",70:"#34383D",80:"#292D31",90:"#1F2225",100:"#000000"},W={fontSize:"24px",lineHeight:"36px",letterSpacing:"0.12px"},F={fontFamily:"Inter",fontSize:"16px",lineHeight:"22px"},E={fontFamily:"Inter",fontSize:"14px",lineHeight:"20px"},N={fontFamily:"Inter",fontSize:"12px",lineHeight:"16px"},w={xxLarge:{...W,fontWeight:400},xxLargeBold:{...W,fontWeight:700},xLarge:{fontSize:"20px",lineHeight:"26px",letterSpacing:"0.1px",fontWeight:500},large:{fontFamily:"Inter",fontSize:"18px",lineHeight:"24px",letterSpacing:"0.09px",fontWeight:500},medium:{...F,fontWeight:400},mediumMedium:{...F,fontWeight:500},mediumSemiBold:{...F,fontWeight:600},small:{...E,fontWeight:400},smallMedium:{...E,fontWeight:500},smallSemiBold:{...E,fontWeight:600},smallBold:{...E,fontWeight:700},xSmall:{...N,fontWeight:400},xSmallMedium:{...N,fontWeight:500},xSmallSemiBold:{...N,fontWeight:600},xSmallBold:{...N,fontWeight:700},xxSmall:{fontFamily:"Inter",fontSize:"10px",lineHeight:"14px",fontWeight:400},xxSmallMedium:{...N,fontWeight:500}},I=e=>{const{id:t,fontFamily:a,color:n,style:i,className:r,onMouseOver:o,onMouseOut:l,onClick:c,noWrap:g,type:m}=e;return Object(f.jsx)(d.a,{id:t,style:{fontFamily:a,color:n,...m,...i},className:r,onMouseOver:o,onMouseOut:l,onClick:c,noWrap:g||!1,children:e.children})};I.defaultProps={fontFamily:"Inter",color:R[100],type:w.medium};var A=Object(n.memo)(I);const D=Object(x.a)({p2:{padding:2},p4:{padding:4},p8:{padding:8},p12:{padding:12},p16:{padding:16},p20:{padding:20},p24:{padding:24},p28:{padding:28},p32:{padding:32},p36:{padding:36},p40:{padding:40},p44:{padding:44},p48:{padding:48},pt2:{paddingTop:2},pt4:{paddingTop:4},pt8:{paddingTop:8},pt12:{paddingTop:12},pt16:{paddingTop:16},pt20:{paddingTop:20},pt24:{paddingTop:24},pt28:{paddingTop:28},pt32:{paddingTop:32},pt36:{paddingTop:36},pt40:{paddingTop:40},pt44:{paddingTop:44},pt48:{paddingTop:48},pr2:{paddingRight:2},pr4:{paddingRight:4},pr8:{paddingRight:8},pr12:{paddingRight:12},pr16:{paddingRight:16},pr20:{paddingRight:20},pr24:{paddingRight:24},pr28:{paddingRight:28},pr32:{paddingRight:32},pr36:{paddingRight:36},pr40:{paddingRight:40},pr44:{paddingRight:44},pr48:{paddingRight:48},pl2:{paddingLeft:2},pl4:{paddingLeft:4},pl8:{paddingLeft:8},pl12:{paddingLeft:12},pl16:{paddingLeft:16},pl20:{paddingLeft:20},pl24:{paddingLeft:24},pl28:{paddingLeft:28},pl32:{paddingLeft:32},pl36:{paddingLeft:36},pl40:{paddingLeft:40},pl44:{paddingLeft:44},pl48:{paddingLeft:48},pb2:{paddingBottom:2},pb4:{paddingBottom:4},pb8:{paddingBottom:8},pb12:{paddingBottom:12},pb16:{paddingBottom:16},pb20:{paddingBottom:20},pb24:{paddingBottom:24},pb28:{paddingBottom:28},pb32:{paddingBottom:32},pb36:{paddingBottom:36},pb40:{paddingBottom:40},pb44:{paddingBottom:44},pb48:{paddingBottom:48},m2:{margin:2},m4:{margin:4},m8:{margin:8},m12:{margin:12},m16:{margin:16},m20:{margin:20},m24:{margin:24},m28:{margin:28},m32:{margin:32},m36:{margin:36},m40:{margin:40},m44:{margin:44},m48:{margin:48},mt2:{marginTop:2},mt4:{marginTop:4},mt8:{marginTop:8},mt12:{marginTop:12},mt16:{marginTop:16},mt20:{marginTop:20},mt24:{marginTop:24},mt28:{marginTop:28},mt32:{marginTop:32},mt36:{marginTop:36},mt40:{marginTop:40},mt44:{marginTop:44},mt48:{marginTop:48},mr2:{marginRight:2},mr4:{marginRight:4},mr8:{marginRight:8},mr12:{marginRight:12},mr16:{marginRight:16},mr20:{marginRight:20},mr24:{marginRight:24},mr28:{marginRight:28},mr32:{marginRight:32},mr36:{marginRight:36},mr40:{marginRight:40},mr44:{marginRight:44},mr48:{marginRight:48},ml2:{marginLeft:2},ml4:{marginLeft:4},ml8:{marginLeft:8},ml12:{marginLeft:12},ml16:{marginLeft:16},ml20:{marginLeft:20},ml24:{marginLeft:24},ml28:{marginLeft:28},ml32:{marginLeft:32},ml36:{marginLeft:36},ml40:{marginLeft:40},ml44:{marginLeft:44},ml48:{marginLeft:48},mb2:{marginBottom:2},mb4:{marginBottom:4},mb8:{marginBottom:8},mb12:{marginBottom:12},mb16:{marginBottom:16},mb20:{marginBottom:20},mb24:{marginBottom:24},mb28:{marginBottom:28},mb32:{marginBottom:32},mb36:{marginBottom:36},mb40:{marginBottom:40},mb44:{marginBottom:44},mb48:{marginBottom:48},gap2:{gap:2},gap4:{gap:4},gap8:{gap:8},gap12:{gap:12},gap16:{gap:16},gap20:{gap:20},gap24:{gap:24},gap28:{gap:28},gap32:{gap:32},gap36:{gap:36},gap40:{gap:40},gap44:{gap:44},gap48:{gap:48},flexStart:{display:"flex",justifyContent:"flex-start"},flexCenter:{display:"flex",justifyContent:"center"},flexEnd:{display:"flex",justifyContent:"flex-end"},flexSpaceBetween:{display:"flex",justifyContent:"space-between"},alignStart:{alignItems:"flex-start"},alignCenter:{alignItems:"center"},textRight:{textAlign:"right"},textCenter:{textAlign:"center"},flexColumn:{display:"flex",flexDirection:"column"},fullHeight:{height:"100%"}}),M=Object(x.a)({titleDashboardContainer:{background:R[10]}}),P=Object(x.a)((e=>({root:{flexGrow:1},cirlceCard:{background:"blue",padding:16,borderRadius:50,width:"3rem",height:"3rem"},cardContainer:{height:200,background:"gray",borderRadius:16}})));var z=a(495);var H=()=>{const e=D(),t=P();return Object(f.jsx)("div",{className:"".concat(t.cardContainer),children:Object(f.jsxs)(z.a,{className:"".concat(e.fullHeight," ").concat(e.alignCenter),container:!0,children:[Object(f.jsx)(z.a,{item:!0,xs:3,className:"".concat(e.flexCenter),children:Object(f.jsx)("div",{className:"".concat(e.flexCenter," ").concat(e.alignCenter," ").concat(t.cirlceCard),children:"Pile1"})}),Object(f.jsxs)(z.a,{item:!0,xs:9,className:e.flexColumn,children:[Object(f.jsx)(A,{type:w.medium,children:"Organic Compost Conversion"}),Object(f.jsx)(A,{type:w.medium,children:"Compost Date : 3 maret 2024"}),Object(f.jsx)(A,{type:w.medium,children:"estimation harvest Date : 3 maret 2024"}),Object(f.jsx)(A,{type:w.medium,children:"Status: 3 maret 2024"}),Object(f.jsx)(A,{type:w.medium,children:"Current Task : 3 maret 2024"})]})]})})};var G=e=>{const t=D(),a=M(),[r,o]=Object(n.useState)([]),[l,c]=i.a.useState(new Date("2014-08-18T21:11:54")),[d,g]=Object(n.useState)([{id:"java",label:"java",value:195,color:"hsl(90, 70%, 50%)"},{id:"erlang",label:"erlang",value:419,color:"hsl(56, 70%, 50%)"},{id:"ruby",label:"ruby",value:407,color:"hsl(103, 70%, 50%)"},{id:"haskell",label:"haskell",value:474,color:"hsl(186, 70%, 50%)"},{id:"go",label:"go",value:71,color:"hsl(104, 70%, 50%)"}]);return Object(n.useEffect)((()=>{S.getAllPokemons(25).then((e=>{console.log(e),o(e.data.results)})).catch((e=>console.log(e)))}),[]),Object(f.jsxs)("div",{style:{width:"100vw",height:"100vh"},children:[Object(f.jsx)("div",{className:"".concat(t.p8," ").concat(t.flexCenter," ").concat(a.titleDashboardContainer),children:Object(f.jsx)(A,{type:w.xLarge,children:"Organic Compost Conversion"})}),Object(f.jsx)(k.a,{data:d,margin:{top:20,right:20,bottom:20,left:20},interpolation:"linear",shapeBlending:.37,valueFormat:">-.4s",colors:{scheme:"spectral"},borderWidth:0,borderColor:{from:"color",modifiers:[]},labelColor:{from:"color",modifiers:[["darker",3]]},beforeSeparatorLength:100,beforeSeparatorOffset:20,afterSeparatorLength:100,afterSeparatorOffset:20,currentPartSizeExtension:10,currentBorderWidth:40,motionConfig:"wobbly"}),Object(f.jsx)("div",{className:"".concat(t.p8," ").concat(t.flexCenter," ").concat(a.titleDashboardContainer),children:Object(f.jsx)(A,{type:w.xLarge,children:"composition performance"})}),Object(f.jsx)(T.a,{data:d,margin:{top:0,right:80,bottom:80,left:80},innerRadius:.5,padAngle:.7,cornerRadius:3,activeOuterRadiusOffset:8,borderWidth:1,borderColor:{from:"color",modifiers:[["darker",.2]]},arcLinkLabelsSkipAngle:10,arcLinkLabelsTextColor:"#333333",arcLinkLabelsThickness:2,arcLinkLabelsColor:{from:"color"},arcLabelsSkipAngle:10,arcLabelsTextColor:{from:"color",modifiers:[["darker",2]]},height:500}),Object(f.jsx)(H,{})]})};const J="/",K="/list",V="/list/detail";var $=a(27);const q=Object(n.memo)((e=>{let t=null,a=null;return n.Children.forEach(null===e||void 0===e?void 0:e.children,(e=>{var n,i;void 0===(null===e||void 0===e||null===(n=e.props)||void 0===n?void 0:n.isTrue)?a=e:t||!0!==(null===e||void 0===e||null===(i=e.props)||void 0===i?void 0:i.isTrue)||(t=e)})),t||a}));q.When=e=>{let{isTrue:t,children:a}=e;return t&&a||Object(f.jsx)(i.a.Fragment,{})},q.Else=e=>{let{render:t,children:a}=e;return t||a||Object(f.jsx)(i.a.Fragment,{})};var Q=e=>{const[t,a]=Object(n.useState)(null),i=Object($.g)(),r=Object($.f)();return Object(n.useEffect)((()=>{S.getPokemonById(i.id).then((e=>{a(e.data)})).catch((e=>console.log(e)))}),[]),Object(f.jsxs)("div",{style:{width:"100vw",height:"100vh"},children:[Object(f.jsx)(A,{type:w.mediumSemiBold,onClick:()=>{r.push({pathname:K})},children:"Go back"}),Object(f.jsxs)(q,{children:[Object(f.jsxs)(q.When,{isTrue:null!==t,children:[Object(f.jsxs)(A,{type:w.xxLargeBold,children:["Name: ",null===t||void 0===t?void 0:t.name]}),Object(f.jsx)(A,{type:w.xLarge,children:"Abilities:"}),Object(f.jsx)(C,{of:null===t||void 0===t?void 0:t.abilities,render:e=>{var t;return Object(f.jsx)(A,{type:w.large,children:null===e||void 0===e||null===(t=e.ability)||void 0===t?void 0:t.name})}})]}),Object(f.jsx)(q.Else,{children:Object(f.jsx)(A,{type:w.xxLargeBold,children:"LOADING..."})})]})]})},U=a(496),X=a(498);var Y=e=>{const{id:t,value:a,label:n,placeholder:i,onChange:r,error:o,fullWidth:l}=e;return Object(f.jsx)(X.a,{id:t,value:a,label:n,placeholder:i,onChange:r,error:o,fullWidth:l})};const Z=e=>{const[t,a]=Object(n.useState)(""),[i,r]=Object(n.useState)(""),[o,l]=Object(n.useState)(""),[c,d]=Object(n.useState)(""),[g,m]=Object(n.useState)(""),p=D();return Object(f.jsx)("form",{onSubmit:e=>{e.preventDefault(),console.log(t,i,o,c,g)},children:Object(f.jsxs)(z.a,{container:!0,className:"".concat(p.flexCenter," ").concat(p.alignCenter," ").concat(p.gap16),direction:"column",children:[Object(f.jsx)(z.a,{item:!0,children:Object(f.jsx)(Y,{id:"tanggal",label:"Tanggal",value:t,onChange:e=>a(e.target.value)})}),Object(f.jsx)(z.a,{item:!0,children:Object(f.jsx)(Y,{id:"id-armada",label:"ID Armada",value:i,onChange:e=>r(e.target.value)})}),Object(f.jsx)(z.a,{item:!0,children:Object(f.jsx)(Y,{id:"kemurnian",label:"% Kemurnian",value:o,onChange:e=>l(e.target.value)})}),Object(f.jsx)(z.a,{item:!0,children:Object(f.jsx)(Y,{id:"volume",label:"$ Volume",value:c,onChange:e=>d(e.target.value)})}),Object(f.jsx)(z.a,{item:!0,children:Object(f.jsx)(Y,{id:"catatan",label:"Catatan",value:g,onChange:e=>m(e.target.value)})}),Object(f.jsxs)(z.a,{item:!0,children:[Object(f.jsx)(U.a,{variant:"contained",color:"primary",type:"submit",children:"Sampah Masuk"}),Object(f.jsx)(U.a,{variant:"contained",children:"Mulai Pengomposan"})]})]})})};var _=e=>Object(f.jsxs)($.c,{children:[Object(f.jsx)($.a,{path:K,exact:!0,children:Object(f.jsx)(Z,{})}),Object(f.jsx)($.a,{path:V+"/:id",children:Object(f.jsx)(Q,{})})]});const ee=[{path:J,exact:!0,component:()=>Object(f.jsx)(G,{})},{path:K,component:()=>Object(f.jsx)(_,{})}],te=()=>Object(f.jsx)($.c,{children:Object(f.jsx)(C,{of:ee,render:(e,t)=>Object(f.jsx)($.a,{path:e.path,exact:e.exact,render:t=>Object(f.jsx)(e.component,{...t,routes:e.routes})})})});var ae=a(54);a(378);var ne=function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)(v,{}),Object(f.jsx)(ae.b,{children:Object(f.jsx)(te,{})})]})};var ie=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,502)).then((t=>{let{getCLS:a,getFID:n,getFCP:i,getLCP:r,getTTFB:o}=t;a(e),n(e),i(e),r(e),o(e)}))};o.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(ae.a,{children:Object(f.jsx)(ne,{})})}),document.getElementById("root")),ie()}},[[380,1,2]]]);
//# sourceMappingURL=main.a257ab1c.chunk.js.map