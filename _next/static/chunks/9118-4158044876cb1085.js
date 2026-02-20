"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9118],{19538:(r,e,t)=>{t.d(e,{A:()=>n});var a=t(40925),o=t(37876);let n=(0,a.A)((0,o.jsx)("path",{d:"M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"}),"Send")},29351:(r,e,t)=>{t.d(e,{A:()=>k});var a=t(14232),o=t(69241),n=t(53033),i=t(21849),s=t(13323),l=t(99093),u=t(57929),p=t(1971),c=t(75556),d=t(17937),b=t(95537),f=t(37876);let m=(0,c.A)(),v=(0,l.A)("div",{name:"MuiStack",slot:"Root"});function y(r){return(0,u.A)({props:r,name:"MuiStack",defaultTheme:m})}let g=({ownerState:r,theme:e})=>{let t={display:"flex",flexDirection:"column",...(0,d.NI)({theme:e},(0,d.kW)({values:r.direction,breakpoints:e.breakpoints.values}),r=>({flexDirection:r}))};if(r.spacing){let a=(0,b.LX)(e),o=Object.keys(e.breakpoints.values).reduce((e,t)=>(("object"==typeof r.spacing&&null!=r.spacing[t]||"object"==typeof r.direction&&null!=r.direction[t])&&(e[t]=!0),e),{}),i=(0,d.kW)({values:r.direction,base:o}),s=(0,d.kW)({values:r.spacing,base:o});"object"==typeof i&&Object.keys(i).forEach((r,e,t)=>{if(!i[r]){let a=e>0?i[t[e-1]]:"column";i[r]=a}}),t=(0,n.A)(t,(0,d.NI)({theme:e},s,(e,t)=>r.useFlexGap?{gap:(0,b._W)(a,e)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[t?i[t]:r.direction]}`]:(0,b._W)(a,e)}}))}return(0,d.iZ)(e.breakpoints,t)};var h=t(34401),A=t(96968);let k=function(r={}){let{createStyledComponent:e=v,useThemeProps:t=y,componentName:n="MuiStack"}=r,l=e(g);return a.forwardRef(function(r,e){let u,c=t(r),{component:d="div",direction:b="column",spacing:m=0,divider:v,children:y,className:g,useFlexGap:h=!1,...A}=(0,p.A)(c),k=(0,s.A)({root:["root"]},r=>(0,i.Ay)(n,r),{});return(0,f.jsx)(l,{as:d,ownerState:{direction:b,spacing:m,useFlexGap:h},ref:e,className:(0,o.A)(k.root,g),...A,children:v?(u=a.Children.toArray(y).filter(Boolean)).reduce((r,e,t)=>(r.push(e),t<u.length-1&&r.push(a.cloneElement(v,{key:`separator-${t}`})),r),[]):y})})}({createStyledComponent:(0,h.Ay)("div",{name:"MuiStack",slot:"Root"}),useThemeProps:r=>(0,A.b)({props:r,name:"MuiStack"})})},55868:(r,e,t)=>{t.d(e,{A:()=>n});var a=t(40925),o=t(37876);let n=(0,a.A)((0,o.jsx)("path",{d:"M6 6h12v12H6z"}),"Stop")},60020:(r,e,t)=>{t.d(e,{A:()=>n});var a=t(40925),o=t(37876);let n=(0,a.A)((0,o.jsx)("path",{d:"M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7 0-3.9-3.1-7-7-7"}),"Lightbulb")},76392:(r,e,t)=>{t.d(e,{A:()=>M});var a=t(14232),o=t(69241),n=t(13323),i=t(11870),s=t(38993),l=t(34401),u=t(10493),p=t(49429),c=t(96968),d=t(65559),b=t(14457),f=t(21849);function m(r){return(0,f.Ay)("MuiLinearProgress",r)}(0,b.A)("MuiLinearProgress",["root","colorPrimary","colorSecondary","determinate","indeterminate","buffer","query","dashed","dashedColorPrimary","dashedColorSecondary","bar","bar1","bar2","barColorPrimary","barColorSecondary","bar1Indeterminate","bar1Determinate","bar1Buffer","bar2Indeterminate","bar2Buffer"]);var v=t(37876);let y=(0,s.i7)`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`,g="string"!=typeof y?(0,s.AH)`
        animation: ${y} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
      `:null,h=(0,s.i7)`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`,A="string"!=typeof h?(0,s.AH)`
        animation: ${h} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
      `:null,k=(0,s.i7)`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`,C="string"!=typeof k?(0,s.AH)`
        animation: ${k} 3s infinite linear;
      `:null,x=(r,e)=>r.vars?r.vars.palette.LinearProgress[`${e}Bg`]:"light"===r.palette.mode?r.lighten(r.palette[e].main,.62):r.darken(r.palette[e].main,.5),$=(0,l.Ay)("span",{name:"MuiLinearProgress",slot:"Root",overridesResolver:(r,e)=>{let{ownerState:t}=r;return[e.root,e[`color${(0,d.A)(t.color)}`],e[t.variant]]}})((0,u.A)(({theme:r})=>({position:"relative",overflow:"hidden",display:"block",height:4,zIndex:0,"@media print":{colorAdjust:"exact"},variants:[...Object.entries(r.palette).filter((0,p.A)()).map(([e])=>({props:{color:e},style:{backgroundColor:x(r,e)}})),{props:({ownerState:r})=>"inherit"===r.color&&"buffer"!==r.variant,style:{"&::before":{content:'""',position:"absolute",left:0,top:0,right:0,bottom:0,backgroundColor:"currentColor",opacity:.3}}},{props:{variant:"buffer"},style:{backgroundColor:"transparent"}},{props:{variant:"query"},style:{transform:"rotate(180deg)"}}]}))),j=(0,l.Ay)("span",{name:"MuiLinearProgress",slot:"Dashed",overridesResolver:(r,e)=>{let{ownerState:t}=r;return[e.dashed,e[`dashedColor${(0,d.A)(t.color)}`]]}})((0,u.A)(({theme:r})=>({position:"absolute",marginTop:0,height:"100%",width:"100%",backgroundSize:"10px 10px",backgroundPosition:"0 -23px",variants:[{props:{color:"inherit"},style:{opacity:.3,backgroundImage:"radial-gradient(currentColor 0%, currentColor 16%, transparent 42%)"}},...Object.entries(r.palette).filter((0,p.A)()).map(([e])=>{let t=x(r,e);return{props:{color:e},style:{backgroundImage:`radial-gradient(${t} 0%, ${t} 16%, transparent 42%)`}}})]})),C||{animation:`${k} 3s infinite linear`}),w=(0,l.Ay)("span",{name:"MuiLinearProgress",slot:"Bar1",overridesResolver:(r,e)=>{let{ownerState:t}=r;return[e.bar,e.bar1,e[`barColor${(0,d.A)(t.color)}`],("indeterminate"===t.variant||"query"===t.variant)&&e.bar1Indeterminate,"determinate"===t.variant&&e.bar1Determinate,"buffer"===t.variant&&e.bar1Buffer]}})((0,u.A)(({theme:r})=>({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",variants:[{props:{color:"inherit"},style:{backgroundColor:"currentColor"}},...Object.entries(r.palette).filter((0,p.A)()).map(([e])=>({props:{color:e},style:{backgroundColor:(r.vars||r).palette[e].main}})),{props:{variant:"determinate"},style:{transition:"transform .4s linear"}},{props:{variant:"buffer"},style:{zIndex:1,transition:"transform .4s linear"}},{props:({ownerState:r})=>"indeterminate"===r.variant||"query"===r.variant,style:{width:"auto"}},{props:({ownerState:r})=>"indeterminate"===r.variant||"query"===r.variant,style:g||{animation:`${y} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite`}}]}))),S=(0,l.Ay)("span",{name:"MuiLinearProgress",slot:"Bar2",overridesResolver:(r,e)=>{let{ownerState:t}=r;return[e.bar,e.bar2,e[`barColor${(0,d.A)(t.color)}`],("indeterminate"===t.variant||"query"===t.variant)&&e.bar2Indeterminate,"buffer"===t.variant&&e.bar2Buffer]}})((0,u.A)(({theme:r})=>({width:"100%",position:"absolute",left:0,bottom:0,top:0,transition:"transform 0.2s linear",transformOrigin:"left",variants:[...Object.entries(r.palette).filter((0,p.A)()).map(([e])=>({props:{color:e},style:{"--LinearProgressBar2-barColor":(r.vars||r).palette[e].main}})),{props:({ownerState:r})=>"buffer"!==r.variant&&"inherit"!==r.color,style:{backgroundColor:"var(--LinearProgressBar2-barColor, currentColor)"}},{props:({ownerState:r})=>"buffer"!==r.variant&&"inherit"===r.color,style:{backgroundColor:"currentColor"}},{props:{color:"inherit"},style:{opacity:.3}},...Object.entries(r.palette).filter((0,p.A)()).map(([e])=>({props:{color:e,variant:"buffer"},style:{backgroundColor:x(r,e),transition:"transform .4s linear"}})),{props:({ownerState:r})=>"indeterminate"===r.variant||"query"===r.variant,style:{width:"auto"}},{props:({ownerState:r})=>"indeterminate"===r.variant||"query"===r.variant,style:A||{animation:`${h} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite`}}]}))),M=a.forwardRef(function(r,e){let t=(0,c.b)({props:r,name:"MuiLinearProgress"}),{className:a,color:s="primary",value:l,valueBuffer:u,variant:p="indeterminate",...b}=t,f={...t,color:s,variant:p},y=(r=>{let{classes:e,variant:t,color:a}=r,o={root:["root",`color${(0,d.A)(a)}`,t],dashed:["dashed",`dashedColor${(0,d.A)(a)}`],bar1:["bar","bar1",`barColor${(0,d.A)(a)}`,("indeterminate"===t||"query"===t)&&"bar1Indeterminate","determinate"===t&&"bar1Determinate","buffer"===t&&"bar1Buffer"],bar2:["bar","bar2","buffer"!==t&&`barColor${(0,d.A)(a)}`,"buffer"===t&&`color${(0,d.A)(a)}`,("indeterminate"===t||"query"===t)&&"bar2Indeterminate","buffer"===t&&"bar2Buffer"]};return(0,n.A)(o,m,e)})(f),g=(0,i.I)(),h={},A={},k={};if(("determinate"===p||"buffer"===p)&&void 0!==l){h["aria-valuenow"]=Math.round(l),h["aria-valuemin"]=0,h["aria-valuemax"]=100;let r=l-100;g&&(r=-r),A.transform=`translateX(${r}%)`}if("buffer"===p&&void 0!==u){let r=(u||0)-100;g&&(r=-r),k.transform=`translateX(${r}%)`}return(0,v.jsxs)($,{className:(0,o.A)(y.root,a),ownerState:f,role:"progressbar",...h,ref:e,...b,children:["buffer"===p?(0,v.jsx)(j,{className:y.dashed,ownerState:f}):null,(0,v.jsx)(w,{className:y.bar1,ownerState:f,style:A}),"determinate"===p?null:(0,v.jsx)(S,{className:y.bar2,ownerState:f,style:k})]})})}}]);