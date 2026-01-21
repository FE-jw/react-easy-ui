import{j as E}from"./jsx-runtime-BjG_zV1W.js";const B="_EButton_1b8r0_32",S="_primary_1b8r0_49",$="_secondary_1b8r0_56",q="_isDisabled_1b8r0_63",s={EButton:B,primary:S,secondary:$,isDisabled:q};function b({children:f,className:n,variant:_="primary",isDisabled:g=!1,onClick:t,...v}){const D=`${n?`${n} `:""}${g?`${s.isDisabled} `:`${s[_]} `}${s.EButton}`,h=()=>{t&&t()};return E.jsx("button",{type:"button",className:D,onClick:h,...v,children:f})}b.__docgenInfo={description:"",methods:[],displayName:"EButton",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},isDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const R={title:"Components/EButton",component:b,parameters:{layout:"centered"},tags:["autodocs"]},e={args:{children:"Primary",variant:"primary"}},r={args:{children:"Secondary",variant:"secondary"}},a={args:{children:"Disabled",isDisabled:!0}};var o,i,c;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    children: 'Primary',
    variant: 'primary'
  }
}`,...(c=(i=e.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var d,l,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: 'Secondary',
    variant: 'secondary'
  }
}`,...(u=(l=r.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var m,p,y;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'Disabled',
    isDisabled: true
  }
}`,...(y=(p=a.parameters)==null?void 0:p.docs)==null?void 0:y.source}}};const T=["Primary","Secondary","Disabled"];export{a as Disabled,e as Primary,r as Secondary,T as __namedExportsOrder,R as default};
