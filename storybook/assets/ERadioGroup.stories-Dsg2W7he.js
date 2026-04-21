import{j as b}from"./jsx-runtime-BjG_zV1W.js";import{r as g}from"./index-BNURykns.js";import{E as K}from"./ERadio-CJ9DNjS6.js";const L="_ERadioGroup_28y8u_20",M="_horizontal_28y8u_25",Q="_vertical_28y8u_29",v={ERadioGroup:L,horizontal:M,vertical:Q};function I({name:P,options:W,value:a,className:$,isDisabled:A=!1,direction:B="horizontal",gap:c,onChange:m}){const C=[v.ERadioGroup,v[B],$].filter(Boolean).join(" "),d=typeof c=="number"?`${c}px`:c,n=a!==void 0,[k,f]=g.useState(a),F=n?a:k,J=(e,p)=>{p&&(n||f(e),m==null||m(e))};return g.useEffect(()=>{n&&f(a)},[a,n]),b.jsx("div",{className:C,role:"radiogroup",style:d?{"--easy-radio-group-gap":d}:void 0,children:W.map(e=>b.jsx(K,{name:P,label:e.label,value:F===e.value,isDisabled:A||e.isDisabled,onChange:p=>J(e.value,p)},e.value))})}I.__docgenInfo={description:"",methods:[],displayName:"ERadioGroup",props:{name:{required:!0,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"ERadioGroupOption"}],raw:"ERadioGroupOption[]"},description:""},value:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},direction:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"",defaultValue:{value:"'horizontal'",computed:!1}},gap:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: ERadioValue) => void",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"value"}],return:{name:"void"}}},description:""}}};const Z={title:"Components/ERadioGroup",component:I,parameters:{layout:"centered"},tags:["autodocs"]},r=[{value:"apple",label:"사과"},{value:"banana",label:"바나나"},{value:"cherry",label:"체리"}],s={args:{name:"fruit",options:r}},t={args:{name:"fruit",options:r,direction:"vertical"}},o={args:{name:"fruit",options:r,direction:"horizontal"}},i={args:{name:"fruit",options:r,value:"banana"}},l={args:{name:"fruit",options:r,isDisabled:!0,value:"apple"}},u={args:{name:"fruit",options:[{value:"apple",label:"사과"},{value:"banana",label:"바나나 (비활성)",isDisabled:!0},{value:"cherry",label:"체리"}]}};var y,h,E;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    name: 'fruit',
    options
  }
}`,...(E=(h=s.parameters)==null?void 0:h.docs)==null?void 0:E.source}}};var D,_,R;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    name: 'fruit',
    options,
    direction: 'vertical'
  }
}`,...(R=(_=t.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};var z,V,G;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    name: 'fruit',
    options,
    direction: 'horizontal'
  }
}`,...(G=(V=o.parameters)==null?void 0:V.docs)==null?void 0:G.source}}};var q,x,T;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    name: 'fruit',
    options,
    value: 'banana'
  }
}`,...(T=(x=i.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var S,w,j;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    name: 'fruit',
    options,
    isDisabled: true,
    value: 'apple'
  }
}`,...(j=(w=l.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var N,O,H;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(H=(O=u.parameters)==null?void 0:O.docs)==null?void 0:H.source}}};const ee=["Default","Vertical","Horizontal","WithDefaultValue","Disabled","PartiallyDisabled"];export{s as Default,l as Disabled,o as Horizontal,u as PartiallyDisabled,t as Vertical,i as WithDefaultValue,ee as __namedExportsOrder,Z as default};
