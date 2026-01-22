import{j as l}from"./jsx-runtime-BjG_zV1W.js";import{r as m}from"./index-BNURykns.js";const j="_EToggleSwitch_tai5g_26",q="_toggleIcon_tai5g_33",F="_checkbox_tai5g_52",N="_isDisabled_tai5g_71",a={EToggleSwitch:j,toggleIcon:q,checkbox:F,isDisabled:N};function w({value:e=!1,isDisabled:c=!1,className:i,onChange:u,...C}){const I=`${i?`${i} `:""}${c?`${a.isDisabled} `:""}${a.EToggleSwitch}`,[d,g]=m.useState(e),s=typeof e=="boolean",$=()=>{if(c)return;const p=s?!e:!d;s||g(p),u&&u(p)};return m.useEffect(()=>{s&&g(e)},[e,s]),l.jsxs("label",{className:I,children:[l.jsx("input",{type:"checkbox",className:a.checkbox,checked:s?e:d,disabled:c,onChange:$,...C}),l.jsx("span",{className:a.toggleIcon})]})}w.__docgenInfo={description:"",methods:[],displayName:"EToggleSwitch",props:{value:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:""}}};const R={title:"Components/EToggleSwitch",component:w,parameters:{layout:"centered"},tags:["autodocs"]},r={args:{value:!1}},t={args:{value:!0}},o={args:{value:!1,isDisabled:!0}},n={args:{value:!0,isDisabled:!0}};var f,b,h;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    value: false
  }
}`,...(h=(b=r.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var _,T,x;t.parameters={...t.parameters,docs:{...(_=t.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    value: true
  }
}`,...(x=(T=t.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};var S,y,D;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    value: false,
    isDisabled: true
  }
}`,...(D=(y=o.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};var E,v,k;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    value: true,
    isDisabled: true
  }
}`,...(k=(v=n.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};const z=["False","True","DisabledFalse","DisabledTrue"];export{o as DisabledFalse,n as DisabledTrue,r as False,t as True,z as __namedExportsOrder,R as default};
