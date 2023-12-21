import{u as g,j as e,eO as R,di as T,iF as A,T as C,a1 as w,V as E,W as d,a0 as v,bt as L,C as P,E as O,an as I,Q as _}from"./index-Eksrs3uK.js";import{L as $}from"./LandingHeader-JXAVBhqg.js";import{P as F}from"./PaginationFooter-NHWf7fW2.js";import{T as y,a as o,b as z,c as H}from"./TableRow-phXfWUGW.js";import{T as N}from"./TableSortCell-hcsagFzN.js";import{A as c,a as M}from"./constants--Twc5yrJ.js";import{u as K}from"./useOrder-rsUMHEuj.js";import{u as Q}from"./usePagination-Sxr0Tlb7.js";import{u as U}from"./loadbalancers-xfUXrZkQ.js";import{D as V}from"./LoadBalancerDeleteDialog-SmSN1oJk.js";import{R as W,c as X,f as q}from"./ResourcesSection-fJQ13r7x.js";import{I as J}from"./IPAddress-ZmG9OcMn.js";import{r as Y}from"./LoadBalancerRegions-BPkF2TzX.js";import{A as Z}from"./ActionMenu-4CPisA_2.js";import{P as ee}from"./Ports-hlTiv7th.js";import{T as ae}from"./TableHead-Si_pzkLK.js";import"./OrderBy-H-bWJCPy.js";import"./splitAt-pbTnq2Oi.js";import"./TypeToConfirmDialog-9yjZCCL0.js";import"./TypeToConfirm-koQ3u5up.js";import"./ListItem-joIHQeyv.js";import"./CopyTooltip-mIyzAQ7E.js";import"./index-Y5esPPk-.js";import"./ShowMore-4P5e_z46.js";import"./PublicIpsUnassignedTooltip-A07mEsGp.js";import"./ipUtils-P4y3JNCT.js";import"./ipaddr-jlottelM.js";import"./Flag-kVTQNGw3.js";import"./Skeleton-iwmO4Yae.js";import"./configurations-KizjZfwm.js";const te={description:"Scalable Layer 4 and Layer 7 load balancer to route and manage enterprise traffic between clients and your distributed applications and networks globally.",subtitle:"BETA",title:"Global Load Balancers"},re={links:[{text:"Overview",to:c.Overview},{text:"Getting Started",to:c.GettingStarted}],moreInfo:{text:"Guides",to:c.Guides},title:"Getting Started Guides"},j={links:[{text:"Resources",to:c.Resouces},{text:"Developers",to:c.Developers}],moreInfo:{text:"Guides",to:c.Guides},title:"Resources"},u={action:"Click:link",category:"Load Balancer landing page empty"},oe=()=>e.jsxs(C,{sx:{mb:"16px"},variant:"body1",children:["Looking for a single data center Load Balancer? Try "," ",e.jsx(w,{to:"https://www.linode.com/products/nodebalancers/",children:"NodeBalancer."})]}),se=(r,t)=>e.jsx(q,{linkAnalyticsEvent:t,links:r.links}),ne=()=>{const{push:r}=g();return e.jsx(W,{CustomResource:()=>e.jsx(X,{icon:e.jsx(R,{}),title:j.title,children:se(j,u)}),buttonProps:[{children:"Create Global Load Balancer",onClick:()=>{T({action:"Click:button",category:u.category,label:"Global Load Balancers"}),r("/loadbalancers/create")}}],additionalCopy:e.jsx(oe,{}),gettingStartedGuidesData:re,headers:te,icon:A,linkAnalyticsEvent:u})},ie=({handlers:r,loadbalancer:t})=>{const s=g(),i=[{onClick:()=>s.push(`/loadbalancers/${t.id}/configurations`),title:"Configurations"},{onClick:()=>s.push(`/loadbalancers/${t.id}/settings`),title:"Settings"},{onClick:r.onDelete,title:"Delete"}];return e.jsx(Z,{actionsList:i,ariaLabel:`Action menu for Load Balancer ${t.label}`})},le=({handlers:r,loadBalancer:t})=>{const{hostname:s,id:i,label:m}=t;return e.jsxs(y,{ariaLabel:`Load Balancer ${m}`,children:[e.jsx(o,{children:e.jsx(E,{to:`/loadbalancers/${i}`,children:m})}),e.jsx(d,{smDown:!0,children:e.jsx(o,{children:e.jsx(ee,{loadbalancerId:i})})}),e.jsx(d,{smDown:!0,children:e.jsx(o,{children:s?e.jsx(J,{ips:[s]}):"None"})}),e.jsx(d,{mdDown:!0,children:e.jsx(o,{children:e.jsx(v,{py:1,spacing:.5,children:Y.map(({id:p,label:n})=>e.jsxs(C,{children:[n," (",p,")"]},p))})})}),e.jsx(o,{actionCell:!0,children:e.jsx(ie,{handlers:r,loadbalancer:t})})]},`loadbalancer-row-${i}`)},ce="loadbalancers/create",f="loadbalancers",ze=()=>{const r=g(),[t,s]=L.useState(!1),[i,m]=L.useState(),p=l=>{m(l),s(!0)},n=Q(1,f),{handleOrderChange:k,order:x,orderBy:b}=K({order:"desc",orderBy:"label"},`${f}-order`),D={"+order":x,"+order_by":b},S=()=>{r.push(ce)},{data:a,error:h,isLoading:B}=U({page:n.page,page_size:n.pageSize},D),G=a==null?void 0:a.data.find(l=>l.id===i);return B?e.jsx(P,{}):h?e.jsx(O,{errorText:I(h,"Error loading your Load Balancers.")[0].reason}):e.jsxs(e.Fragment,{children:[e.jsx(_,{segment:"Load Balancers"}),(a==null?void 0:a.data.length)===0?e.jsx(ne,{}):e.jsxs(e.Fragment,{children:[e.jsx($,{betaFeedbackLink:M,breadcrumbProps:{pathname:"/loadbalancers"},createButtonText:"Create Load Balancer",docsLabel:"Docs",docsLink:c.GettingStarted,entity:"Global Load Balancers",onButtonClick:S,removeCrumbX:1,title:"Global Load Balancers"}),e.jsxs(z,{children:[e.jsx(ae,{children:e.jsxs(y,{children:[e.jsx(N,{active:b==="label",direction:x,handleClick:k,label:"label",children:"Label"}),e.jsx(d,{smDown:!0,children:e.jsx(o,{children:"Ports"})}),e.jsx(d,{smDown:!0,children:e.jsx(o,{children:"Hostname"})}),e.jsx(d,{mdDown:!0,children:e.jsx(o,{children:"Regions"})}),e.jsx(o,{})]})}),e.jsx(H,{children:a==null?void 0:a.data.map(l=>e.jsx(le,{handlers:{onDelete:()=>p(l.id)},loadBalancer:l},l.id))})]}),e.jsx(F,{count:(a==null?void 0:a.data.length)||0,eventCategory:"Load Balancer Table",handlePageChange:n.handlePageChange,handleSizeChange:n.handlePageSizeChange,page:n.page,pageSize:n.pageSize}),e.jsx(V,{loadbalancer:G,onClose:()=>s(!1),open:t})]})]})};export{ze as LoadBalancerLanding};
