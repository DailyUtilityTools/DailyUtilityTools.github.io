(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4393],{68211:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>R});var r=n(37876),o=n(14232),i=n(49106),l=n(1521),s=n(76686),a=n(82702),p=n(29351),u=n(9092),c=n(53019),y=n(87210),f=n(47399),d=n(39852),m=n(80424),b=n(25444),h=n(37260),j=n(17526),g=n(10850);function x(e){return e?e.charAt(0).toUpperCase()+e.slice(1):"Root"}function $(e,t="Root"){let n=[];return!function e(t,r){if("object"===t.type){let o=`export interface ${r} {
`;if(t.properties)for(let[n,r]of Object.entries(t.properties)){let i=t.required?.includes(n),l=e(r,x(n));o+=`  ${n}${i?"":"?"}: ${l};
`}return o+=`}
`,n.push(o),r}if("array"===t.type){let n=e(t.items,r+"Item");return`${n}[]`}return"unknown"===t.type&&t.unionTypes?t.unionTypes.map(t=>e(t,r)).join(" | "):({string:"string",number:"number",boolean:"boolean",null:"null",any:"any",unknown:"any"})[t.type]||"any"}(e,x(t)),n.reverse().join("\n")}function A(e,t="Root"){let n=function e(t,n=!1){let r="";if("string"===t.type)r="z.string()";else if("number"===t.type)r="z.number()";else if("boolean"===t.type)r="z.boolean()";else if("null"===t.type)r="z.null()";else if("any"===t.type||"unknown"===t.type)r="z.any()";else if("array"===t.type)r=`z.array(${e(t.items)})`;else if("object"===t.type){let n="z.object({\n";if(t.properties)for(let[r,o]of Object.entries(t.properties)){let i=t.required?.includes(r);n+=`  ${r}: ${e(o,!i)},
`}n+="})",r=n}if("unknown"===t.type&&t.unionTypes){let n=t.unionTypes.map(t=>e(t)).join(", ");r=`z.union([${n}])`}return r+(n?".optional()":"")}(e);return`import { z } from "zod";

export const ${x(t)}Schema = ${n};`}function v(e,t="Root"){let n=[];return!function e(t,r){if("object"===t.type){let o=`class ${r}(BaseModel):
`;if(t.properties&&Object.keys(t.properties).length>0)for(let[n,r]of Object.entries(t.properties)){let i=t.required?.includes(n),l=e(r,x(n));i||(l=`Optional[${l}]`),o+=`    ${n}: ${l}
`}else o+=`    pass
`;return n.push(o),r}if("array"===t.type){let n=e(t.items,r+"Item");return`List[${n}]`}if("unknown"===t.type&&t.unionTypes){let n=t.unionTypes.map(t=>e(t,r)).join(", ");return`Union[${n}]`}return({string:"str",number:"float",boolean:"bool",null:"Any",any:"Any",unknown:"Any"})[t.type]||"Any"}(e,x(t)),`from pydantic import BaseModel
from typing import List, Optional, Any, Union

`+n.reverse().join("\n\n")}function w(e,t="Root"){let n=`components:
  schemas:
    ${x(t)}:
`;return n+`      ${(function e(t,n){if("object"===t.type){let r=`type: object
`;if(t.required&&t.required.length>0&&(r+=`${n}required:
`,t.required.forEach(e=>r+=`${n}  - ${e}
`)),t.properties&&Object.keys(t.properties).length>0)for(let[o,i]of(r+=`${n}properties:
`,Object.entries(t.properties)))r+=`${n}  ${o}:
${n}    ${e(i,n+"    ").trimStart()}`;return r}if("array"===t.type){let r=`type: array
${n}items:
`;return r+`${n}  ${e(t.items,n+"  ").trimStart()}`}let r=t.type;return"number"===r&&(r="number"),("null"===r||"any"===r||"unknown"===r)&&(r="string"),`type: ${r}
`})(e,"      ").trimStart()}`}function k(e,t="Root"){let n=[];return!function e(t,r){if("object"===t.type){let o=`type ${r} struct {
`;if(t.properties)for(let[n,i]of Object.entries(t.properties)){let l=x(n),s=t.required?.includes(n),a=e(i,r+l);s||(a="*"+a);let p=s?`\`json:"${n}"\``:`\`json:"${n},omitempty"\``;o+=`	${l} ${a} ${p}
`}return o+=`}
`,n.push(o),r}if("array"===t.type){let n=e(t.items,r+"Item");return`[]${n}`}return"unknown"===t.type&&t.unionTypes?"any":({string:"string",number:"float64",boolean:"bool",null:"any",any:"any",unknown:"any"})[t.type]||"any"}(e,x(t)),n.reverse().join("\n")}function O(e,t="Root"){let n=[];return!function e(t,r){if("object"===t.type){let o=`public class ${r} {
`;if(t.properties)for(let[n,r]of Object.entries(t.properties)){let t=e(r,x(n));o+=`    private ${t} ${n};
`}return t.properties&&(o+=`
    public ${r}() {}
`),o+=`}
`,n.push(o),r}if("array"===t.type){let n=e(t.items,r+"Item");return`List<${n}>`}return"unknown"===t.type&&t.unionTypes?"Object":({string:"String",number:"Double",boolean:"Boolean",null:"Object",any:"Object",unknown:"Object"})[t.type]||"Object"}(e,x(t)),`import java.util.List;

`+n.reverse().join("\n")}function S(e,t="Root"){let n=[];return!function e(t,r){if("object"===t.type){let o=`data class ${r}(
`;if(t.properties){let n=Object.entries(t.properties);for(let r=0;r<n.length;r++){let[i,l]=n[r],s=t.required?.includes(i),a=e(l,x(i));s||(a+="? = null"),o+=`    val ${i}: ${a}${r<n.length-1?",":""}
`}}return o+=`)
`,n.push(o),r}if("array"===t.type){let n=e(t.items,r+"Item");return`List<${n}>`}return"unknown"===t.type&&t.unionTypes?"Any":({string:"String",number:"Double",boolean:"Boolean",null:"Any?",any:"Any",unknown:"Any"})[t.type]||"Any"}(e,x(t)),n.reverse().join("\n")}function C(e,t="Root"){let n=[];return!function e(t,r){if("object"===t.type){let o=`public class ${r}
{
`;if(t.properties)for(let[n,i]of Object.entries(t.properties)){let l=x(n),s=t.required?.includes(n),a=e(i,r+l),p=!s&&["string","object"].includes(a.toLowerCase())?"?":"";o+=`    [JsonPropertyName("${n}")]
    public ${a}${p} ${l} { get; set; }

`}return o+=`}
`,n.push(o),r}if("array"===t.type){let n=e(t.items,r+"Item");return`List<${n}>`}return"unknown"===t.type&&t.unionTypes?"object":({string:"string",number:"double",boolean:"bool",null:"object",any:"object",unknown:"object"})[t.type]||"object"}(e,x(t)),`using System.Collections.Generic;
using System.Text.Json.Serialization;

`+n.reverse().join("\n")}function T(e,t="Root"){let n=[];return!function e(t,r){if("object"===t.type){let o=`@dataclass
class ${r}:
`;if(t.properties&&Object.keys(t.properties).length>0)for(let[n,r]of Object.entries(t.properties)){let i=t.required?.includes(n),l=e(r,x(n));i||(l=`Optional[${l}]`),o+=`    ${n}: ${l}
`}else o+=`    pass
`;return n.push(o),r}if("array"===t.type){let n=e(t.items,r+"Item");return`List[${n}]`}if("unknown"===t.type&&t.unionTypes){let n=t.unionTypes.map(t=>e(t,r)).join(", ");return`Union[${n}]`}return({string:"str",number:"float",boolean:"bool",null:"Any",any:"Any",unknown:"Any"})[t.type]||"Any"}(e,x(t)),`from dataclasses import dataclass
from typing import List, Optional, Any, Union

`+n.reverse().join("\n\n")}let L=`{
  "id": 123,
  "name": "Jane Doe",
  "email": "jane@example.com",
  "isActive": true,
  "roles": ["admin", "editor"],
  "metadata": null,
  "settings": {
    "theme": "dark",
    "notifications": true
  },
  "pastOrders": [
    { "id": "A1", "total": 120.50 },
    { "id": "B2", "total": 45.00, "discountCode": "SUMMER" }
  ]
}`;function R(){let e="dark"===(0,i.A)().palette.mode,[t,n]=(0,o.useState)(L),[x,R]=(0,o.useState)(null),[z,B]=(0,o.useState)(0),[I,E]=(0,o.useState)(""),[N,q]=(0,o.useState)(!1),J=[{label:"TypeScript",fn:$,ext:"ts",lang:"typescript"},{label:"Zod",fn:A,ext:"ts",lang:"typescript"},{label:"Go",fn:k,ext:"go",lang:"go"},{label:"Python (Pydantic)",fn:v,ext:"py",lang:"python"},{label:"Python (Dataclass)",fn:T,ext:"py",lang:"python"},{label:"Java",fn:O,ext:"java",lang:"java"},{label:"Kotlin",fn:S,ext:"kt",lang:"kotlin"},{label:"C#",fn:C,ext:"cs",lang:"csharp"},{label:"OpenAPI",fn:w,ext:"yaml",lang:"yaml"}];(0,o.useEffect)(()=>{_(t,z)},[t,z]);let _=(e,t)=>{if(!e.trim()){E(""),R(null);return}try{let n=JSON.parse(e);R(null);let r=function e(t){if(null===t)return{type:"null"};let n=typeof t;if("string"===n||"number"===n||"boolean"===n)return{type:n};if(Array.isArray(t)){if(0===t.length)return{type:"array",items:{type:"any"}};let n=t.map(e);if(n.every(e=>"object"===e.type))return{type:"array",items:function e(t){let n=new Set;t.forEach(e=>{e.properties&&Object.keys(e.properties).forEach(e=>n.add(e))});let r={},o=[],i=t.length;return n.forEach(n=>{let l=0,s=[];t.forEach(e=>{e.properties&&e.properties[n]&&(l++,s.push(e.properties[n]))}),l===i&&o.push(n),s.every(e=>"object"===e.type)&&s.length>0?r[n]=e(s):r[n]=s[0]||{type:"any"}}),{type:"object",properties:r,required:o}}(n)};let r=Array.from(new Set(n.map(e=>e.type)));return 1===r.length?{type:"array",items:n[0]}:r.every(e=>["string","number","boolean","null"].includes(e))?{type:"array",items:{type:"unknown",unionTypes:r.map(e=>({type:e}))}}:{type:"array",items:{type:"any"}}}if("object"===n){let n={},r=[];for(let o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=e(t[o]),r.push(o));return{type:"object",properties:n,required:r}}return{type:"unknown"}}(n),o=(0,J[t].fn)(r,"Root");E(o)}catch(e){R(e.message),E("// Fix JSON errors to see the generated schema.")}};return(0,r.jsxs)(l.A,{maxWidth:"xl",sx:{py:3},children:[(0,r.jsxs)(s.A,{sx:{mb:3},children:[(0,r.jsx)(a.A,{variant:"h4",fontWeight:800,sx:{letterSpacing:"-0.02em",mb:1},children:"JSON Schema Generator"}),(0,r.jsx)(a.A,{color:"text.secondary",children:"Instantly convert raw JSON into strongly typed models and schemas for any language."})]}),(0,r.jsxs)(p.A,{direction:{xs:"column",lg:"row"},spacing:2,sx:{height:{xs:"auto",lg:"70vh"},minHeight:"600px"},children:[(0,r.jsxs)(u.A,{variant:"outlined",sx:{flex:1,flexBasis:"40%",minWidth:0,display:"flex",flexDirection:"column",overflow:"hidden"},children:[(0,r.jsxs)(s.A,{sx:{p:1.5,bgcolor:e?"#333":"#f5f5f5",borderBottom:1,borderColor:"divider",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,r.jsx)(a.A,{variant:"subtitle2",fontWeight:"bold",children:"Input JSON"}),(0,r.jsx)(c.A,{size:"small",startIcon:(0,r.jsx)(j.A,{}),onClick:()=>{try{let e=JSON.parse(t);n(JSON.stringify(e,null,2)),R(null)}catch(e){R("Cannot format: "+e.message)}},variant:"contained",children:"Format"})]}),(0,r.jsxs)(s.A,{sx:{flex:1,position:"relative"},children:[(0,r.jsx)(g.Ay,{height:"100%",language:"json",value:t,onChange:e=>n(e||""),theme:e?"vs-dark":"light",options:{minimap:{enabled:!1},fontSize:13,fontFamily:'"Roboto Mono", monospace',wordWrap:"on",automaticLayout:!0,scrollBeyondLastLine:!1,padding:{top:10}}}),x&&(0,r.jsx)(y.A,{severity:"error",icon:!1,sx:{position:"absolute",bottom:0,left:0,right:0,borderRadius:0},children:x})]})]}),(0,r.jsxs)(u.A,{variant:"outlined",sx:{flex:1,flexBasis:"60%",minWidth:0,display:"flex",flexDirection:"column",overflow:"hidden"},children:[(0,r.jsx)(s.A,{sx:{borderBottom:1,borderColor:"divider",bgcolor:e?"rgba(255,255,255,0.05)":"rgba(0,0,0,0.02)"},children:(0,r.jsx)(f.A,{value:z,onChange:(e,t)=>B(t),variant:"scrollable",scrollButtons:"auto",sx:{minHeight:48},children:J.map((e,t)=>(0,r.jsx)(d.A,{label:e.label,sx:{textTransform:"none",fontWeight:600}},e.label))})}),(0,r.jsxs)(s.A,{sx:{flex:1,display:"flex",flexDirection:"column"},children:[(0,r.jsxs)(s.A,{sx:{p:1,bgcolor:e?"#252525":"#fafafa",borderBottom:1,borderColor:"divider",display:"flex",justifyContent:"flex-end",gap:1},children:[(0,r.jsx)(m.A,{title:N?"Copied!":"Copy Schema",children:(0,r.jsx)(c.A,{size:"small",startIcon:(0,r.jsx)(b.A,{}),onClick:()=>{navigator.clipboard.writeText(I),q(!0),setTimeout(()=>q(!1),2e3)},color:N?"success":"inherit",children:"Copy"})}),(0,r.jsx)(c.A,{size:"small",startIcon:(0,r.jsx)(h.A,{}),onClick:()=>{let e=J[z].ext,t=new Blob([I],{type:"text/plain;charset=utf-8"}),n=document.createElement("a");n.href=URL.createObjectURL(t),n.download=`schema.${e}`,n.click(),URL.revokeObjectURL(n.href)},variant:"outlined",children:"Download"})]}),(0,r.jsx)(s.A,{sx:{flex:1},children:(0,r.jsx)(g.Ay,{height:"100%",language:J[z].lang,value:I,theme:e?"vs-dark":"light",options:{readOnly:!0,minimap:{enabled:!1},fontSize:13,fontFamily:'"Roboto Mono", monospace',wordWrap:"on",automaticLayout:!0,scrollBeyondLastLine:!1,padding:{top:10}}})})]})]})]})]})}},75208:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/programming/JsonSchemaGeneratorPage",function(){return n(68211)}])}},e=>{e.O(0,[8284,5081,9880,9100,5900,636,6593,8792],()=>e(e.s=75208)),_N_E=e.O()}]);