import{ao as z,bp as K,h5 as U,r as l,u as Z,ak as ee,j as e,G as A,Q as ae,ad as T,aa as re,d0 as N,bB as D,bI as te,bJ as P,ag as oe,s as b,h6 as se,h7 as ne,p as c,bx as F}from"./index-Eksrs3uK.js";import{u as ie}from"./formik.esm-Kap5lsIh.js";import{L as le}from"./LandingHeader-JXAVBhqg.js";import{M as de}from"./MultipleIPInput-NQt3M-F3.js";import{R as _}from"./Radio-HudVgwMW.js";import{R as ce}from"./RadioGroup-zpRjMzXK.js";import{L as me}from"./LinodeSelect-y7DOgXsC.js";import{N as ue}from"./NodeBalancerSelect-tPR8nvIa.js";import{h as pe,a as fe}from"./formikErrorUtils-jhqfCjwU.js";import{h as he}from"./formikTrimUtil-tfsUpEEv.js";import{s as ve,e as ge}from"./ipUtils-P4y3JNCT.js";import{s as be}from"./scrollErrorIntoView-6n4Cku1Y.js";import{g as R}from"./domainUtils-mqxZFuqB.js";import"./Autocomplete-XvrzKoAo.js";import"./ipaddr-jlottelM.js";const qe=()=>{var B;const{data:p}=z(),{data:y}=K(),{mutateAsync:M}=U(),i=(p==null?void 0:p.restricted)&&!(y!=null&&y.global.add_domains),[S,I]=l.useState(!1),[w,j]=l.useState(void 0),G=Z(),[m,q]=l.useState({label:"Do not insert default records for me.",value:"none"}),[o,k]=l.useState(void 0),[s,H]=l.useState(void 0),{values:u,...a}=ie({initialValues:{domain:"",master_ips:[""],soa_email:"",type:"master"},onSubmit:r=>O(r),validateOnChange:!0,validateOnMount:!0,validationSchema:se});l.useEffect(()=>(I(!0),()=>{I(!1)}),[]);const h=ee(["defaultLinode","defaultNodeBalancer"],w),C=((B=a.status)==null?void 0:B.generalError)||h.none,W=a.errors.master_ips,x=u.type==="master",V=u.type==="slave",E=(r,n)=>{const f=r?`/domains/${r}`:"/domains";G.push(f,n)},v=(r,n,f={})=>{E(r==="master"&&n?n:"",f)},O=r=>{const{domain:n,master_ips:f,soa_email:Q,tags:L,type:d}=r;if(m.value==="linode"&&!o)return j([{field:"defaultLinode",reason:"Please select a Linode."}]);if(m.value==="nodebalancer"&&!s)return j([{field:"defaultNodeBalancer",reason:"Please select a NodeBalancer."}]);const X=d==="master"?{domain:n,soa_email:Q,tags:L,type:d}:{domain:n,master_ips:f,tags:L,type:d};a.setSubmitting(!0),M(X).then(t=>{if(S){if(ne("Domain Create Page"),u.type==="master"){if(m.value==="linode")return R(t.domain,t.id,c(["ipv4",0],o),c(["ipv6"],o)).then(()=>v(d,t.id)).catch(g=>(F(`Default DNS Records couldn't be created from Linode: ${g[0].reason}`,{domainID:t.id,ipv4:c(["ipv4",0],o),ipv6:c(["ipv6"],o),selectedLinode:o.id}),v(d,t.id,{recordError:"There was an issue creating default domain records."})));if(m.value==="nodebalancer")return R(t.domain,t.id,c(["ipv4"],s),c(["ipv6"],s)).then(()=>v(d,t.id)).catch(g=>(F(`Default DNS Records couldn't be created from NodeBalancer: ${g[0].reason}`,{domainID:t.id,ipv4:c(["ipv4"],s),ipv6:c(["ipv6"],s),selectedNodeBalancer:s.id}),v(d,t.id,{recordError:"There was an issue creating default domain records."})))}return v(d,t.id)}}).catch(t=>{if(!S)return;const g=Y=>a.setStatus({generalError:Y});a.setSubmitting(!1),pe(a.setErrors,t),fe(g,t,"An unexpected error occurred."),be()})},$=(r,n)=>{a.setFieldValue("type",n),j([])},J=r=>{const n=r.length>0?r.map(ge):[""];S&&a.setFieldValue("master_ips",n)};return e.jsxs(A,{container:!0,children:[e.jsx(ae,{segment:"Create Domain"}),e.jsx(le,{docsLabel:"Docs",docsLink:"https://www.linode.com/docs/guides/dns-manager/",title:"Create"}),e.jsxs(xe,{children:[C&&!i&&e.jsx(T,{spacingTop:8,variant:"error",children:C}),i&&e.jsx(T,{text:"You don't have permissions to create a new Domain. Please contact an account administrator for details.",important:!0,variant:"error"}),e.jsx(re,{"data-qa-label-header":!0,children:e.jsxs(ye,{onSubmit:a.handleSubmit,children:[e.jsxs(Se,{"aria-label":"type",name:"type",onChange:$,row:!0,value:u.type,children:[e.jsx(N,{control:e.jsx(_,{}),"data-qa-domain-radio":"Primary",disabled:i,label:"Primary",value:"master"}),e.jsx(N,{control:e.jsx(_,{}),"data-qa-domain-radio":"Secondary",disabled:i,label:"Secondary",value:"slave"})]}),e.jsx(D,{errorText:a.touched.domain?a.errors.domain:void 0,"data-qa-domain-name":!0,"data-testid":"domain-name-input",disabled:i,label:"Domain",onBlur:()=>a.setFieldTouched("domain"),onChange:a.handleChange,required:!0,value:u.domain}),x&&e.jsx(D,{errorText:a.touched.soa_email?a.errors.soa_email:void 0,"data-qa-soa-email":!0,"data-testid":"soa-email-input",disabled:i,label:"SOA Email Address",name:"soa_email",onBlur:r=>he(r,a),onChange:a.handleChange,required:!0,type:"email",value:u.soa_email}),V&&e.jsx(je,{error:a.touched.master_ips?W:void 0,ips:u.master_ips.map(ve),onChange:J,required:!0,title:"Primary Nameserver IP Address"}),x&&e.jsxs(l.Fragment,{children:[e.jsx(te,{onChange:r=>q(r),options:[{label:"Do not insert default records for me.",value:"none"},{label:"Insert default records from one of my Linodes.",value:"linode"},{label:"Insert default records from one of my NodeBalancers.",value:"nodebalancer"}],disabled:i,isClearable:!1,label:"Insert Default Records",value:m}),e.jsx(Pe,{children:"If specified, we can automatically create some domain records (A/AAAA and MX) to get you started, based on one of your Linodes or NodeBalancers."})]}),x&&m.value==="linode"&&e.jsxs(l.Fragment,{children:[e.jsx(me,{onSelectionChange:r=>k(r??void 0),disabled:i,errorText:h.defaultLinode,value:(o==null?void 0:o.id)??null}),!h.defaultLinode&&e.jsx(P,{children:o&&!o.ipv6?"We'll automatically create domains for the first IPv4 address on this Linode.":"We'll automatically create domain records for both the first IPv4 and IPv6 addresses on this Linode."})]}),x&&m.value==="nodebalancer"&&e.jsxs(l.Fragment,{children:[e.jsx(ue,{onSelectionChange:r=>H(r??void 0),disabled:i,errorText:h.defaultNodeBalancer,value:(s==null?void 0:s.id)??null}),!h.defaultNodeBalancer&&e.jsx(P,{children:s&&!s.ipv6?"We'll automatically create domains for the first IPv4 address on this NodeBalancer.":"We'll automatically create domain records for both the first IPv4 and IPv6 addresses on this NodeBalancer."})]}),e.jsx(oe,{primaryButtonProps:{"data-testid":"submit",disabled:i||!a.isValid,label:"Create Domain",loading:a.isSubmitting,onClick:()=>a.handleSubmit()}})]})})]})]})},xe=b(A,{label:"StyledGrid"})({width:"100%"}),ye=b("form",{label:"StyledForm"})(({theme:p})=>({"& > div":{marginBottom:p.spacing(2)},"& label":{color:p.color.headline,letterSpacing:"0.25px",lineHeight:"1.33rem",margin:0}})),Se=b(ce,{label:"StyledRadioGroup"})({"& label:first-of-type .MuiButtonBase-root":{marginLeft:-10}}),je=b(de,{label:"StyledMultipeIPInput"})({maxWidth:468}),Pe=b(P,{label:"StyledFormHelperText"})({maxWidth:"none"});export{qe as CreateDomain};
