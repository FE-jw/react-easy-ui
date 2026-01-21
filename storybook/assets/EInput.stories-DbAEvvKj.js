import{j as y}from"./jsx-runtime-BjG_zV1W.js";const x="_EInput_9c7p0_19",E={EInput:x};function p({type:d="text",placeholder:c,className:t,isDisabled:m=!1,onChange:r,...f}){const g=`${t?`${t} `:""}${E.EInput}`,h=v=>{r&&r(v.target.value)};return y.jsx("input",{type:d,placeholder:c,className:g,disabled:m,onChange:h,...f})}p.__docgenInfo={description:"",methods:[],displayName:"EInput",props:{type:{required:!1,tsType:{name:"union",raw:"'text' | 'password' | 'email' | 'search' | 'url' | 'tel'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'password'"},{name:"literal",value:"'email'"},{name:"literal",value:"'search'"},{name:"literal",value:"'url'"},{name:"literal",value:"'tel'"}]},description:"",defaultValue:{value:"'text'",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};const b={title:"Components/EInput",component:p,parameters:{layout:"centered"},tags:["autodocs"]},e={args:{placeholder:"placeholder"}},a={args:{placeholder:"placeholder",isDisabled:!0}};var s,n,l;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    placeholder: 'placeholder'
  }
}`,...(l=(n=e.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var o,i,u;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    placeholder: 'placeholder',
    isDisabled: true
  }
}`,...(u=(i=a.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};const D=["Default","Disabled"];export{e as Default,a as Disabled,D as __namedExportsOrder,b as default};
