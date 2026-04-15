import{j as i}from"./jsx-runtime-BjG_zV1W.js";import{r as m}from"./index-BNURykns.js";const C="_EToggleSwitch_tai5g_26",D="_toggleIcon_tai5g_33",I="_checkbox_tai5g_52",j="_isDisabled_tai5g_71",r={EToggleSwitch:C,toggleIcon:D,checkbox:I,isDisabled:j};function u({value:e=!1,isDisabled:s=!1,className:t,onChange:o,...v}){const k=`${t?`${t} `:""}${s?`${r.isDisabled} `:""}${r.EToggleSwitch}`,[d,g]=m.useState(e),a=typeof e=="boolean",w=()=>{if(s)return;const p=a?!e:!d;a||g(p),o&&o(p)};return m.useEffect(()=>{a&&g(e)},[e,a]),i.jsxs("label",{className:k,children:[i.jsx("input",{type:"checkbox",className:r.checkbox,checked:a?e:d,disabled:s,onChange:w,...v}),i.jsx("span",{className:r.toggleIcon})]})}u.__docgenInfo={description:"",methods:[],displayName:"EToggleSwitch",props:{value:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"value"}],return:{name:"void"}}},description:""}}};const{useArgs:O}=__STORYBOOK_MODULE_PREVIEW_API__,N={title:"Components/EToggleSwitch",component:u,parameters:{layout:"centered"},tags:["autodocs"],render:function(){const[{value:s},t]=O();return i.jsx(u,{value:s,onChange:o=>t({value:o})})}},n={args:{value:!1}},c={args:{value:!0}},l={args:{value:!1,isDisabled:!0}};var f,_,h;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    value: false
  }
}`,...(h=(_=n.parameters)==null?void 0:_.docs)==null?void 0:h.source}}};var b,x,E;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    value: true
  }
}`,...(E=(x=c.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};var T,S,y;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    value: false,
    isDisabled: true
  }
}`,...(y=(S=l.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};const R=["False","True","Disabled"];export{l as Disabled,n as False,c as True,R as __namedExportsOrder,N as default};
