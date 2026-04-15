import{j as g}from"./jsx-runtime-BjG_zV1W.js";import{r as h}from"./index-BNURykns.js";import{E as M}from"./ECheckbox-DOg3yMAR.js";const Q="_ECheckboxGroup_ighgi_20",U="_horizontal_ighgi_25",X="_vertical_ighgi_29",v={ECheckboxGroup:Q,horizontal:U,vertical:X};function H({name:I,options:P,values:a,className:W,isDisabled:$=!1,direction:B="horizontal",gap:c,onChange:m}){const R=[v.ECheckboxGroup,v[B],W].filter(Boolean).join(" "),d=typeof c=="number"?`${c}px`:c,F=a!==void 0,[J,b]=h.useState(a??[]),r=a??J,K=(e,p)=>{const f=p?r.includes(e)?r:[...r,e]:r.filter(L=>L!==e);F||b(f),m==null||m(f)};return h.useEffect(()=>{a!==void 0&&b(a)},[a]),g.jsx("div",{className:R,role:"group",style:d?{"--easy-checkbox-group-gap":d}:void 0,children:P.map(e=>g.jsx(M,{name:I,label:e.label,value:r.includes(e.value),isDisabled:$||e.isDisabled,onChange:p=>K(e.value,p)},e.value))})}H.__docgenInfo={description:"",methods:[],displayName:"ECheckboxGroup",props:{name:{required:!0,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"ECheckboxGroupOption"}],raw:"ECheckboxGroupOption[]"},description:""},values:{required:!1,tsType:{name:"Array",elements:[{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]}],raw:"ECheckboxValue[]"},description:""},className:{required:!1,tsType:{name:"string"},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},direction:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"",defaultValue:{value:"'horizontal'",computed:!1}},gap:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(values: ECheckboxValue[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]}],raw:"ECheckboxValue[]"},name:"values"}],return:{name:"void"}}},description:""}}};const ae={title:"Components/ECheckboxGroup",component:H,parameters:{layout:"centered"},tags:["autodocs"]},n=[{value:"apple",label:"사과"},{value:"banana",label:"바나나"},{value:"cherry",label:"체리"}],s={args:{name:"fruit",options:n}},t={args:{name:"fruit",options:n,direction:"vertical"}},o={args:{name:"fruit",options:n,direction:"horizontal"}},i={args:{name:"fruit",options:n,values:["apple","cherry"]}},l={args:{name:"fruit",options:n,isDisabled:!0,values:["banana"]}},u={args:{name:"fruit",options:[{value:"apple",label:"사과"},{value:"banana",label:"바나나 (비활성)",isDisabled:!0},{value:"cherry",label:"체리"}]}};var y,x,E;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    name: 'fruit',
    options
  }
}`,...(E=(x=s.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};var D,k,C;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    name: 'fruit',
    options,
    direction: 'vertical'
  }
}`,...(C=(k=t.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var _,z,V;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    name: 'fruit',
    options,
    direction: 'horizontal'
  }
}`,...(V=(z=o.parameters)==null?void 0:z.docs)==null?void 0:V.source}}};var G,q,w;i.parameters={...i.parameters,docs:{...(G=i.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    name: 'fruit',
    options,
    values: ['apple', 'cherry']
  }
}`,...(w=(q=i.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};var T,S,j;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    name: 'fruit',
    options,
    isDisabled: true,
    values: ['banana']
  }
}`,...(j=(S=l.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var A,N,O;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    name: 'fruit',
    options: [{
      value: 'apple',
      label: '사과'
    }, {
      value: 'banana',
      label: '바나나 (비활성)',
      isDisabled: true
    }, {
      value: 'cherry',
      label: '체리'
    }]
  }
}`,...(O=(N=u.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};const re=["Default","Vertical","Horizontal","WithDefaultValues","Disabled","PartiallyDisabled"];export{s as Default,l as Disabled,o as Horizontal,u as PartiallyDisabled,t as Vertical,i as WithDefaultValues,re as __namedExportsOrder,ae as default};
