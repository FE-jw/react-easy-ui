import{j as n}from"./jsx-runtime-BjG_zV1W.js";import{r}from"./index-BNURykns.js";const ne="_ESelect_niawd_36",re="_trigger_niawd_44",te="_disabled_niawd_60",le="_open_niawd_63",oe="_value_niawd_72",ce="_placeholder_niawd_79",ie="_arrow_niawd_87",de="_dropdown_niawd_104",ue="_searchWrapper_niawd_118",pe="_searchInput_niawd_122",fe="_optionList_niawd_144",me="_option_niawd_144",he="_optionDisabled_niawd_159",be="_focused_niawd_162",_e="_selected_niawd_165",ge="_noOptions_niawd_175",s={ESelect:ne,trigger:re,disabled:te,open:le,value:oe,placeholder:ce,arrow:ie,dropdown:de,searchWrapper:ue,searchInput:pe,optionList:fe,option:me,optionDisabled:he,focused:be,selected:_e,noOptions:ge};function $({options:l,value:E,placeholder:z,className:G,isDisabled:v=!1,searchable:p=!1,searchPlaceholder:H="Search...",noOptionsText:J="No results found",onChange:w}){const j=E!==void 0,[M,X]=r.useState(void 0),[i,d]=r.useState(!1),[y,N]=r.useState(""),[o,c]=r.useState(-1),x=r.useRef(null),k=r.useRef(null),D=r.useRef(null),u=j?E:M,S=l.find(e=>e.value===u),t=p&&y?l.filter(e=>e.label.toLowerCase().includes(y.toLowerCase())):l,Y=[s.ESelect,i&&s.open,v&&s.disabled,G].filter(Boolean).join(" "),O=e=>{e.isDisabled||(j||X(e.value),w==null||w(e.value),d(!1))},Z=()=>{v||d(e=>!e)},ee=e=>{N(e.target.value),c(-1)},ae=e=>{if(!i){(e.key==="Enter"||e.key===" "||e.key==="ArrowDown")&&(e.preventDefault(),d(!0));return}switch(e.key){case"Tab":e.preventDefault(),e.shiftKey?c(a=>a<=0?t.length-1:a-1):c(a=>a>=t.length-1?0:a+1);break;case"ArrowDown":e.preventDefault(),c(a=>a>=t.length-1?0:a+1);break;case"ArrowUp":e.preventDefault(),c(a=>a<=0?t.length-1:a-1);break;case"Enter":e.preventDefault(),o>=0&&t[o]&&O(t[o]);break;case"Escape":d(!1);break}};return r.useEffect(()=>{if(o<0||!D.current)return;const e=D.current.children[o];e==null||e.scrollIntoView({block:"nearest"})},[o]),r.useEffect(()=>{var e;if(i){const a=l.findIndex(se=>se.value===u);c(a),p&&((e=k.current)==null||e.focus())}else N(""),c(-1)},[i,u,l,p]),r.useEffect(()=>{const e=a=>{x.current&&!x.current.contains(a.target)&&d(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]),n.jsxs("div",{ref:x,className:Y,onKeyDown:ae,children:[n.jsxs("div",{className:s.trigger,tabIndex:v?-1:0,onClick:Z,children:[n.jsx("span",{className:S?s.value:s.placeholder,children:S?S.label:z}),n.jsx("span",{className:s.arrow})]}),i&&n.jsxs("div",{className:s.dropdown,children:[p&&n.jsx("div",{className:s.searchWrapper,children:n.jsx("input",{ref:k,type:"text",className:s.searchInput,placeholder:H,value:y,onChange:ee})}),n.jsx("ul",{ref:D,role:"listbox",className:s.optionList,children:t.length>0?t.map((e,a)=>n.jsx("li",{role:"option","aria-selected":u===e.value,"aria-disabled":e.isDisabled,className:[s.option,u===e.value&&s.selected,e.isDisabled&&s.optionDisabled,o===a&&s.focused].filter(Boolean).join(" "),onClick:()=>O(e),children:e.label},e.value)):n.jsx("li",{className:s.noOptions,children:J})})]})]})}$.__docgenInfo={description:"",methods:[],displayName:"ESelect",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"ESelectOption"}],raw:"ESelectOption[]"},description:""},value:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},searchable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},searchPlaceholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Search...'",computed:!1}},noOptionsText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'No results found'",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | number) => void",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"value"}],return:{name:"void"}}},description:""}}};const ye={title:"Components/ESelect",component:$,parameters:{layout:"centered",docs:{story:{height:"250px"}}},tags:["autodocs"],decorators:[l=>n.jsx("div",{style:{width:"200px"},children:n.jsx(l,{})})]},g=[{value:"apple",label:"사과"},{value:"banana",label:"바나나"},{value:"cherry",label:"체리"},{value:"grape",label:"포도"}],f={args:{options:g,placeholder:"선택하세요"}},m={args:{options:g,value:"banana"}},h={args:{options:g,placeholder:"선택하세요",isDisabled:!0}},b={args:{options:g,placeholder:"선택하세요",searchable:!0}},_={args:{options:[{value:"apple",label:"사과"},{value:"banana",label:"바나나 (비활성)",isDisabled:!0},{value:"cherry",label:"체리"},{value:"grape",label:"포도"}],placeholder:"선택하세요"}};var I,T,V;f.parameters={...f.parameters,docs:{...(I=f.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    options,
    placeholder: '선택하세요'
  }
}`,...(V=(T=f.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};var q,L,R;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    options,
    value: 'banana'
  }
}`,...(R=(L=m.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};var W,C,A;h.parameters={...h.parameters,docs:{...(W=h.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    options,
    placeholder: '선택하세요',
    isDisabled: true
  }
}`,...(A=(C=h.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};var K,P,B;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    options,
    placeholder: '선택하세요',
    searchable: true
  }
}`,...(B=(P=b.parameters)==null?void 0:P.docs)==null?void 0:B.source}}};var Q,F,U;_.parameters={..._.parameters,docs:{...(Q=_.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
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
    }, {
      value: 'grape',
      label: '포도'
    }],
    placeholder: '선택하세요'
  }
}`,...(U=(F=_.parameters)==null?void 0:F.docs)==null?void 0:U.source}}};const xe=["Default","WithDefaultValue","Disabled","Searchable","PartiallyDisabled"];export{f as Default,h as Disabled,_ as PartiallyDisabled,b as Searchable,m as WithDefaultValue,xe as __namedExportsOrder,ye as default};
