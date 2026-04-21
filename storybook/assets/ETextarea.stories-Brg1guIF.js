import{j as a}from"./jsx-runtime-BjG_zV1W.js";import{r as k}from"./index-BNURykns.js";const A="_wrapper_1do1g_21",B="_ETextarea_1do1g_26",F="_none_1do1g_57",G="_both_1do1g_60",H="_horizontal_1do1g_63",J="_vertical_1do1g_66",K="_counter_1do1g_70",M="_max_1do1g_77",e={wrapper:A,ETextarea:B,none:F,both:G,horizontal:H,vertical:J,counter:K,max:M};function E({name:q,placeholder:S,className:l,rows:D=4,resize:N="vertical",maxLength:c,showCounter:j=!1,isDisabled:R=!1,onChange:d,...$}){const V=`${l?`${l} `:""}${e[N]} ${e.ETextarea}`,[O,I]=k.useState(0),L=i=>{I(i.target.value.length),d&&d(i.target.value)};return a.jsxs("div",{className:e.wrapper,children:[a.jsx("textarea",{name:q,placeholder:S,className:V,rows:D,maxLength:c,disabled:R,onChange:L,...$}),j&&a.jsxs("span",{className:e.counter,children:[O,"/",a.jsx("span",{className:e.max,children:c})]})]})}E.__docgenInfo={description:"",methods:[],displayName:"ETextarea",props:{name:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},rows:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"4",computed:!1}},resize:{required:!1,tsType:{name:"union",raw:"'none' | 'both' | 'horizontal' | 'vertical'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'both'"},{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"",defaultValue:{value:"'vertical'",computed:!1}},isDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},showCounter:{defaultValue:{value:"false",computed:!1},required:!1}}};const U={title:"Components/ETextarea",component:E,parameters:{layout:"centered"},tags:["autodocs"]},r={args:{placeholder:"placeholder"}},s={args:{placeholder:"placeholder",isDisabled:!0}},o={args:{placeholder:"placeholder",resize:"none"}},t={args:{placeholder:"placeholder",rows:8}},n={args:{placeholder:"placeholder",showCounter:!0,maxLength:100}};var p,u,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    placeholder: 'placeholder'
  }
}`,...(m=(u=r.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var h,g,f;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    placeholder: 'placeholder',
    isDisabled: true
  }
}`,...(f=(g=s.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var _,v,x;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    placeholder: 'placeholder',
    resize: 'none'
  }
}`,...(x=(v=o.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var w,T,b;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    placeholder: 'placeholder',
    rows: 8
  }
}`,...(b=(T=t.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};var y,C,z;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    placeholder: 'placeholder',
    showCounter: true,
    maxLength: 100
  }
}`,...(z=(C=n.parameters)==null?void 0:C.docs)==null?void 0:z.source}}};const W=["Default","Disabled","ResizeNone","CustomRows","ShowCounter"];export{t as CustomRows,r as Default,s as Disabled,o as ResizeNone,n as ShowCounter,W as __namedExportsOrder,U as default};
