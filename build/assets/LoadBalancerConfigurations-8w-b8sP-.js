import{j as e,a0 as j,T as C,cn as z,bt as se,r as R,d0 as $,es as ne,gS as ie,ag as B,iS as le,ad as w,bB as P,lS as ce,a1 as de,B as V,$ as k,f as T,a4 as ue,bC as pe,af as me,b as O,eb as he,c3 as xe,lT as fe,lU as ge,al as be,u as je,C as N,E as Ce,aa as ye}from"./index-Eksrs3uK.js";import{W as ve}from"./index-C8Ov-8_e.js";import{a as Te,b as Re,c as Se,d as Ae}from"./configurations-KizjZfwm.js";import{u as D,y as Ie}from"./formik.esm-Kap5lsIh.js";import{A as q}from"./Autocomplete-XvrzKoAo.js";import{g as G}from"./formikErrorUtils-jhqfCjwU.js";import{D as Y}from"./Drawer-A9yKjC3Z.js";import{R as M}from"./Radio-HudVgwMW.js";import{R as Fe}from"./RadioGroup-zpRjMzXK.js";import{u as Pe,a as we,R as Be}from"./RoutesTable-3ruUrzE5.js";import{g as J,R as H}from"./utils-d72dx4mb.js";import{C as De}from"./Code-HuerkG4_.js";import{C as Le}from"./CertificateSelect-0e6KEoj8.js";import{b as Ee,T as U,a as A,c as ke}from"./TableRow-phXfWUGW.js";import{T as Ve}from"./TableRowEmpty-aXmC67-Z.js";import{u as Oe}from"./certificates-6TEM7uZ-.js";import{T as _e}from"./TableHead-Si_pzkLK.js";import{g as $e,i as Ne,C as E,p as W}from"./constants-_Z1avj-R.js";import"./loadbalancers-xfUXrZkQ.js";import"./ActionMenu-4CPisA_2.js";import"./CollapsibleTable-0WYTbtYD.js";import"./InlineMenuAction-d5mRENST.js";import"./PaginationFooter-NHWf7fW2.js";import"./TableSortCell-hcsagFzN.js";import"./useOrder-rsUMHEuj.js";import"./OrderBy-H-bWJCPy.js";import"./splitAt-pbTnq2Oi.js";import"./usePagination-Sxr0Tlb7.js";import"./drag-indicator-1t7mhJe7.js";import"./TextTooltip-SPU6hUyt.js";import"./FormLabel-2wEwBKx7.js";import"./LinkButton-O1af9aD7.js";import"./Toggle-AbahDP9J.js";import"./serviceTargets-sfLGvdjG.js";import"./ListItem-joIHQeyv.js";import"./constants--Twc5yrJ.js";const Me=({configuration:l})=>e.jsxs(j,{alignItems:"center",direction:"row",flexWrap:"wrap",gap:1,justifyContent:"space-between",pr:2,children:[e.jsxs(j,{alignItems:"center",direction:"row",spacing:1,children:[e.jsx(C,{variant:"h3",children:l.label}),e.jsx(C,{children:"—"}),e.jsxs(C,{fontSize:"1rem",children:["Port ",l.port," -"," ",z("Route","Routes",l.routes.length)]})]}),e.jsxs(C,{children:["ID: ",l.id]})]}),He=l=>{const{errorText:a,label:s,loadbalancerId:d,onChange:n,value:o}=l,[u,p]=se.useState(""),c={};u&&(c.label={"+contains":u});const{data:r,error:i,fetchNextPage:h,hasNextPage:g,isLoading:y}=Pe(d,c),x=r==null?void 0:r.pages.flatMap(f=>f.data),I=(x==null?void 0:x.find(f=>f.id===o))??null,L=f=>{const b=f.currentTarget;b.scrollTop+b.clientHeight>=b.scrollHeight&&g&&h()};return e.jsx(q,{ListboxProps:{onScroll:L},getOptionLabel:({label:f,protocol:b,rules:F})=>`${f} (${b.toUpperCase()} - ${z("rule","rules",F.length)})`,onInputChange:(f,b,F)=>{F==="input"&&p(b)},errorText:(i==null?void 0:i[0].reason)??a,inputValue:I?I.label:u,label:s??"Route",loading:y,noMarginTop:!0,onChange:(f,b)=>n(b),options:x??[],placeholder:"Select a Route",value:I})},Ue=l=>{const{configuration:a,loadbalancerId:s,onAdd:d,onClose:n,open:o}=l,[u,p]=R.useState("existing"),c=J(a.protocol);return e.jsxs(Y,{onClose:n,open:o,title:"Add Route",children:[e.jsxs(j,{spacing:1,children:[e.jsx(C,{children:H.Description.main}),e.jsx(C,{children:H.Description[c]})]}),e.jsxs(Fe,{onChange:(r,i)=>p(i),value:u,children:[e.jsx($,{control:e.jsx(M,{}),label:`Create New ${c.toUpperCase()} Route`,value:"new"}),e.jsx($,{control:e.jsx(M,{}),label:"Add Existing Route",value:"existing"})]}),u==="existing"?e.jsx(We,{loadbalancerId:s,onAdd:d,onClose:n}):e.jsx(Qe,{configuration:a,loadbalancerId:s,onAdd:d,onClose:n})]})},We=l=>{const{loadbalancerId:a,onAdd:s,onClose:d}=l,n=D({initialValues:{route:null},onSubmit({route:o}){s(o),d()},validationSchema:ne({route:ie().required().typeError("Route is required.")})});return e.jsxs("form",{onSubmit:n.handleSubmit,children:[e.jsx(He,{errorText:n.errors.route,loadbalancerId:a,onChange:o=>n.setFieldValue("route",(o==null?void 0:o.id)??null),value:n.values.route??-1}),e.jsx(B,{primaryButtonProps:{label:"Add Route",type:"submit"},secondaryButtonProps:{label:"Cancel",onClick:d}})]})},Qe=l=>{const{configuration:a,loadbalancerId:s,onAdd:d,onClose:n}=l,{error:o,isLoading:u,mutateAsync:p}=we(s),c=D({initialValues:{label:"",protocol:J(a.protocol),rules:[]},async onSubmit(i,h){try{const g=await p(i);d(g.id),n()}catch(g){h.setErrors(G(g))}},validationSchema:le}),r=o==null?void 0:o.filter(i=>!i.field||i.field!=="label").map(i=>i.reason).join(",");return e.jsxs("form",{onSubmit:c.handleSubmit,children:[r&&e.jsx(w,{text:r,variant:"error"}),e.jsx(P,{errorText:c.errors.label,label:"Route Label",name:"label",noMarginTop:!0,onChange:c.handleChange,value:c.values.label}),e.jsx(B,{primaryButtonProps:{label:"Create Route",loading:u,type:"submit"},secondaryButtonProps:{label:"Cancel",onClick:n}})]})},Q={hostname:"",id:-1},ze=l=>{const{loadbalancerId:a,onAdd:s,onClose:d,open:n}=l,o=D({initialValues:{certificates:[Q]},onSubmit(p){s(p.certificates),d()},validateOnChange:!1,validationSchema:ce});R.useEffect(()=>{n&&o.resetForm()},[n]);const u=()=>{o.setFieldValue("certificates",[...o.values.certificates,Q])};return e.jsxs(Y,{onClose:d,open:n,title:"Apply Certificates",children:[e.jsxs(C,{children:["Input the host header that the Load Balancer will repsond to and the respective certificate to deliver. Use ",e.jsx(De,{children:"*"})," as a wildcard apply to any host. ",e.jsx(de,{to:"#",children:"Learn more."})]}),e.jsxs("form",{onSubmit:o.handleSubmit,children:[o.values.certificates.map(({hostname:p,id:c},r)=>{var i,h,g,y;return e.jsxs(V,{children:[e.jsx(P,{onChange:x=>o.setFieldValue(`certificates.${r}.hostname`,x.target.value),errorText:(h=(i=o.errors.certificates)==null?void 0:i[r])==null?void 0:h.hostname,label:"Host Header",value:p}),e.jsx(Le,{onChange:x=>o.setFieldValue(`certificates.${r}.id`,(x==null?void 0:x.id)??null),errorText:(y=(g=o.errors.certificates)==null?void 0:g[r])==null?void 0:y.id,filter:{type:"downstream"},loadbalancerId:a,value:c}),e.jsx(k,{spacingTop:24})]},r)}),e.jsx(T,{buttonType:"outlined",onClick:u,sx:{marginTop:2},children:"Add Another"}),e.jsx(B,{primaryButtonProps:{label:"Save",type:"submit"}})]})]})},qe=l=>{const{certificates:a,errors:s,loadbalancerId:d,onRemove:n}=l,{data:o}=Oe(d,{},{"+or":a.map(u=>({id:u.id}))});return e.jsxs(Ee,{children:[e.jsx(_e,{children:e.jsxs(U,{children:[e.jsx(A,{children:"Certificate"}),e.jsx(A,{children:"Host Header"}),e.jsx(A,{})]})}),e.jsxs(ke,{children:[a.length===0&&e.jsx(Ve,{colSpan:3}),a.map((u,p)=>{const c=o==null?void 0:o.data.find(y=>y.id===u.id),r=s[p],i=typeof r!="string"?r==null?void 0:r.hostname:void 0,h=typeof r!="string"?r==null?void 0:r.id:void 0,g=typeof r=="string"?r:h;return e.jsxs(U,{children:[e.jsxs(A,{children:[(c==null?void 0:c.label)??u.id,g&&e.jsx(C,{color:"error",children:g})]}),e.jsxs(A,{children:[u.hostname,i&&e.jsx(C,{color:"error",children:i})]}),e.jsx(A,{actionCell:!0,children:e.jsx(ue,{"aria-label":`Remove Certificate ${(c==null?void 0:c.label)??u.id}`,onClick:()=>n(p),children:e.jsx(pe,{})})})]},p)})]})]})},Ge=l=>{var r;const{configuration:a,loadbalancerId:s,onClose:d,open:n}=l,{error:o,isLoading:u,mutateAsync:p}=Te(s,a.id),c=async()=>{await p(),d()};return e.jsx(me,{actions:e.jsx(B,{primaryButtonProps:{label:"Delete",loading:u,onClick:c},secondaryButtonProps:{label:"Cancel",onClick:d}}),error:(r=o==null?void 0:o[0])==null?void 0:r.reason,onClose:d,open:n,title:`Delete Configuration ${a.label}?`,children:"Are you sure you want to delete this configuration?"})},K=l=>{const{configuration:a,mode:s,onCancel:d,onSuccess:n}=l,{loadbalancerId:o}=O(),[u,p]=R.useState(!1),[c,r]=R.useState(!1),[i,h]=R.useState(!1),[g,y]=R.useState(""),x=Number(o),I=g?{label:{"+contains":g}}:{},L=s==="edit"?Re:Se,{error:f,isLoading:b,mutateAsync:F,reset:X}=L(x,(a==null?void 0:a.id)??-1),Z=R.useMemo(()=>s==="edit"?$e(a):Ne,[a,s]),ee=s==="create"?fe:ge,t=D({enableReinitialize:!0,initialValues:Z,async onSubmit(m,v){try{const S=await F(m);n&&n(S)}catch(S){v.setErrors(G(S))}},validate(m){try{return ee.validateSync(m,{abortEarly:!1}),{}}catch(v){return Ie(v)}},validateOnBlur:!f,validateOnChange:!f}),te=m=>{t.setFieldTouched("certificates"),t.values.certificates.splice(m,1),t.setFieldValue("certificates",t.values.certificates)},oe=m=>{t.values.route_ids&&(t.values.route_ids.splice(m,1),t.setFieldValue("route_ids",t.values.route_ids))},re=m=>{t.setFieldTouched("certificates"),t.setFieldValue("certificates",[...t.values.certificates,...m])},ae=()=>{t.resetForm(),X()},_=f==null?void 0:f.reduce((m,{field:v,reason:S})=>!v||t.values.protocol!=="https"&&v.startsWith("certificates")?m?`${m}, ${S}`:S:m,"");return e.jsxs("form",{onSubmit:t.handleSubmit,children:[e.jsx(C,{variant:"h2",children:"Details"}),_&&e.jsx(w,{spacingBottom:0,spacingTop:8,text:_,variant:"error"}),e.jsx(P,{errorText:t.errors.label,label:"Configuration Label",name:"label",onChange:t.handleChange,value:t.values.label}),e.jsxs(j,{spacing:2,children:[e.jsxs(j,{direction:"row",spacing:2,children:[e.jsx(q,{textFieldProps:{labelTooltipText:E.Protocol},value:W.find(m=>m.value===t.values.protocol),disableClearable:!0,errorText:t.errors.protocol,label:"Protocol",onChange:(m,{value:v})=>t.setFieldValue("protocol",v),options:W}),e.jsx(P,{errorText:t.errors.port,label:"Port",labelTooltipText:E.Port,name:"port",onChange:t.handleChange,type:"number",value:t.values.port})]}),t.values.protocol==="https"&&e.jsxs(j,{maxWidth:"600px",children:[e.jsxs(j,{alignItems:"center",direction:"row",children:[e.jsx(he,{sx:{marginBottom:0},children:"TLS Certificates"}),e.jsx(xe,{status:"help",text:E.Certificates})]}),t.touched.certificates&&typeof t.errors.certificates=="string"&&e.jsx(w,{spacingBottom:16,spacingTop:0,text:t.errors.certificates,variant:"error"}),e.jsx(qe,{errors:Array.isArray(t.errors.certificates)?t.errors.certificates:[],certificates:t.values.certificates,loadbalancerId:x,onRemove:te}),e.jsx(V,{mt:2,children:e.jsxs(T,{onClick:()=>{p(!0)},buttonType:"outlined",children:["Apply ",t.values.certificates.length>0?"More":""," ","Certificates"]})})]})]}),e.jsx(k,{spacingBottom:16,spacingTop:16}),e.jsxs(j,{spacing:2,children:[e.jsx(C,{variant:"h2",children:"Routes"}),t.errors.route_ids&&e.jsx(w,{text:t.errors.route_ids,variant:"error"}),e.jsxs(j,{direction:"row",flexWrap:"wrap",gap:2,children:[e.jsx(T,{buttonType:"outlined",onClick:()=>r(!0),children:"Add Route"}),e.jsx(P,{hideLabel:!0,label:`Filter ${t.values.label}'s Routes`,onChange:m=>y(m.target.value),placeholder:"Filter"})]}),e.jsx(Be,{configuredRouteIds:t.values.route_ids??[],filter:I,onRemove:oe})]}),e.jsx(k,{spacingBottom:16,spacingTop:16}),e.jsxs(j,{direction:"row",flexWrap:"wrap",gap:2,justifyContent:"flex-end",children:[s==="edit"&&t.dirty&&e.jsx(T,{buttonType:"secondary",onClick:ae,children:"Reset"}),s==="edit"&&e.jsx(T,{buttonType:"secondary",onClick:()=>h(!0),children:"Delete"}),s==="create"&&e.jsx(T,{buttonType:"secondary",onClick:d,children:"Cancel"}),e.jsxs(T,{buttonType:"primary",disabled:s==="edit"&&!t.dirty,loading:b,type:"submit",children:[s=="edit"?"Save":"Create"," Configuration"]})]}),e.jsx(Ue,{onAdd:m=>{t.setFieldValue("route_ids",[...t.values.route_ids??[],m])},configuration:t.values,loadbalancerId:x,onClose:()=>r(!1),open:c}),e.jsx(ze,{loadbalancerId:x,onAdd:re,onClose:()=>p(!1),open:u}),s==="edit"&&e.jsx(Ge,{configuration:a,loadbalancerId:x,onClose:()=>h(!1),open:i})]})},Ye=l=>{const{configuration:a}=l,{configurationId:s}=O();return e.jsx(be,{defaultExpanded:a.id===Number(s),heading:e.jsx(Me,{configuration:a}),headingProps:{sx:{width:"100%"}},children:e.jsx(K,{configuration:a,mode:"edit"})})},Dt=()=>{const{loadbalancerId:l}=O(),a=je(),[s,d]=R.useState(!1),{data:n,error:o,fetchNextPage:u,hasNextPage:p,isFetchingNextPage:c,isLoading:r}=Ae(Number(l));if(r)return e.jsx(N,{});if(o)return e.jsx(Ce,{errorText:o[0].reason});const i=n==null?void 0:n.pages.flatMap(h=>h.data);return e.jsxs(e.Fragment,{children:[i==null?void 0:i.map(h=>e.jsx(Ye,{configuration:h},h.id)),p&&e.jsx(ve,{onEnter:()=>u()}),c&&e.jsx(N,{mini:!0}),e.jsxs(j,{my:2,spacing:2,children:[e.jsx(V,{children:e.jsxs(T,{buttonType:"outlined",onClick:()=>d(!0),children:["Add ",(i==null?void 0:i.length)===0?"":"another"," Configuration"]})}),s&&e.jsx(ye,{children:e.jsx(K,{onSuccess:h=>{a.push(`/loadbalancers/${l}/configurations/${h.id}`),d(!1)},mode:"create",onCancel:()=>d(!1)})})]})]})};export{Dt as LoadBalancerConfigurations};
