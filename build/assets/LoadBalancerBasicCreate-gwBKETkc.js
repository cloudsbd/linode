import{u as m,cx as d,j as a,Q as u,a0 as b,ad as p,aa as x,bB as f,B,f as L,i_ as h}from"./index-Eksrs3uK.js";import{u as j}from"./formik.esm-Kap5lsIh.js";import{L as g}from"./LandingHeader-JXAVBhqg.js";import{a as y}from"./constants--Twc5yrJ.js";import{c as C}from"./loadbalancers-xfUXrZkQ.js";import{g as S}from"./formikErrorUtils-jhqfCjwU.js";import{L as k}from"./LoadBalancerRegions-YhP1KVZs.js";import"./LoadBalancerRegions-BPkF2TzX.js";import"./Flag-kVTQNGw3.js";const D=()=>{const{error:t,mutateAsync:n}=C(),{push:i}=m(),{enqueueSnackbar:l}=d(),r=j({initialValues:{label:""},async onSubmit(e,c){try{const s=await n(e);l(`Load Balancer ${s.label} successfully created.`,{variant:"success"}),i(`/loadbalancers/${s.id}`)}catch(s){c.setErrors(S(s))}},validationSchema:h}),o=t==null?void 0:t.filter(e=>!e.field||e.field!=="label").map(e=>e.reason).join(", ");return a.jsxs("form",{onSubmit:r.handleSubmit,children:[a.jsx(u,{segment:"Create a Load Balancer"}),a.jsx(g,{breadcrumbProps:{crumbOverrides:[{label:"Global Load Balancers",position:1}],pathname:location.pathname},betaFeedbackLink:y,title:"Create"}),a.jsxs(b,{spacing:3,children:[o&&a.jsx(p,{text:o,variant:"error"}),a.jsx(x,{children:a.jsx(f,{errorText:r.errors.label,label:"Load Balancer Label",name:"label",noMarginTop:!0,onChange:r.handleChange,value:r.values.label})}),a.jsx(k,{}),a.jsx(B,{display:"flex",justifyContent:"flex-end",children:a.jsx(L,{buttonType:"primary",loading:r.isSubmitting,type:"submit",children:"Create Load Balancer"})})]})]})};export{D as LoadBalancerBasicCreate};
