import{r as e,_ as o,b as L,e as h,O as f,j as t,C as g,E as x,Q as b,K as j,L as B,M as r}from"./index-Eksrs3uK.js";import{L as E}from"./LandingHeader-JXAVBhqg.js";import{T as S}from"./TabLinkList-BrXtJznm.js";import{a as R}from"./TabList-4PWL4GSj.js";import{a as T,A as v}from"./constants--Twc5yrJ.js";import{b as C}from"./loadbalancers-xfUXrZkQ.js";const y=e.lazy(()=>o(()=>import("./LoadBalancerSummary-g_kEaI2m.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16])).then(a=>({default:a.LoadBalancerSummary}))),D=e.lazy(()=>o(()=>import("./LoadBalancerConfigurations-8w-b8sP-.js"),__vite__mapDeps([17,1,2,18,13,10,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50])).then(a=>({default:a.LoadBalancerConfigurations}))),O=e.lazy(()=>o(()=>import("./LoadBalancerServiceTargets-sfRJsBNI.js"),__vite__mapDeps([51,1,2,31,28,32,52,33,34,35,36,37,44,10,19,20,22,41,23,24,43,21,53,47,48,54,55,56,29,26])).then(a=>({default:a.LoadBalancerServiceTargets}))),A=e.lazy(()=>o(()=>import("./LoadBalancerRoutes-VlxFR_JU.js"),__vite__mapDeps([57,1,2,19,22,41,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,10,38,39,40,21,20,42,43,44,45,53])).then(a=>({default:a.LoadBalancerRoutes}))),I=e.lazy(()=>o(()=>import("./index-5HQbXRh6.js"),__vite__mapDeps([58,1,2,59,60])).then(a=>({default:a.LoadBalancerCertificates}))),P=e.lazy(()=>o(()=>import("./LoadBalancerSettings-BPXzBchs.js"),__vite__mapDeps([61,1,2,10,62,63,64,19,14,15,16])).then(a=>({default:a.LoadBalancerSettings}))),M=()=>{const{loadbalancerId:a}=L(),m=h(),{path:n,url:c}=f(),p=Number(a),{data:s,error:l,isLoading:_}=C(p),d=[{path:"summary",title:"Summary"},{path:"configurations",title:"Configurations"},{path:"routes",title:"Routes"},{path:"service-targets",title:"Service Targets"},{path:"certificates",title:"Certificates"},{path:"settings",title:"Settings"}],u=d.findIndex(i=>m.pathname.startsWith(`${c}/${i.path}`));return _?t.jsx(g,{}):l?t.jsx(x,{errorText:l[0].reason}):t.jsxs(t.Fragment,{children:[t.jsx(b,{segment:(s==null?void 0:s.label)??""}),t.jsx(E,{breadcrumbProps:{crumbOverrides:[{label:"Global Load Balancers",position:1}],labelOptions:{noCap:!0},pathname:`/loadbalancers/${s==null?void 0:s.label}`},betaFeedbackLink:T,docsLabel:"Docs",docsLink:v.GettingStarted}),t.jsxs(R,{index:u===-1?0:u,onChange:()=>null,children:[t.jsx(S,{tabs:d.map(i=>({...i,routeName:`${c}/${i.path}`}))}),t.jsx(e.Suspense,{fallback:t.jsx(j,{}),children:t.jsxs(B,{children:[t.jsx(r,{component:D,path:`${n}/configurations/:configurationId?`}),t.jsx(r,{component:A,path:`${n}/routes`}),t.jsx(r,{component:I,path:`${n}/certificates`}),t.jsx(r,{component:O,path:`${n}/service-targets`}),t.jsx(r,{component:P,path:`${n}/settings`}),t.jsx(r,{component:y})]})})]})]})};export{M as LoadBalancerDetail};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LoadBalancerSummary-g_kEaI2m.js","assets/index-Eksrs3uK.js","assets/index-RL6WRErT.css","assets/IPAddress-ZmG9OcMn.js","assets/CopyTooltip-mIyzAQ7E.js","assets/index-Y5esPPk-.js","assets/ShowMore-4P5e_z46.js","assets/PublicIpsUnassignedTooltip-A07mEsGp.js","assets/ipUtils-P4y3JNCT.js","assets/ipaddr-jlottelM.js","assets/loadbalancers-xfUXrZkQ.js","assets/Ports-hlTiv7th.js","assets/Skeleton-iwmO4Yae.js","assets/configurations-KizjZfwm.js","assets/LoadBalancerRegions-BPkF2TzX.js","assets/Flag-kVTQNGw3.js","assets/Flag-_y0A-gKD.css","assets/LoadBalancerConfigurations-8w-b8sP-.js","assets/index-C8Ov-8_e.js","assets/formik.esm-Kap5lsIh.js","assets/Autocomplete-XvrzKoAo.js","assets/formikErrorUtils-jhqfCjwU.js","assets/Drawer-A9yKjC3Z.js","assets/Radio-HudVgwMW.js","assets/RadioGroup-zpRjMzXK.js","assets/RoutesTable-3ruUrzE5.js","assets/ActionMenu-4CPisA_2.js","assets/CollapsibleTable-0WYTbtYD.js","assets/TableRow-phXfWUGW.js","assets/TableHead-Si_pzkLK.js","assets/InlineMenuAction-d5mRENST.js","assets/PaginationFooter-NHWf7fW2.js","assets/TableRowEmpty-aXmC67-Z.js","assets/TableSortCell-hcsagFzN.js","assets/useOrder-rsUMHEuj.js","assets/OrderBy-H-bWJCPy.js","assets/splitAt-pbTnq2Oi.js","assets/usePagination-Sxr0Tlb7.js","assets/drag-indicator-1t7mhJe7.js","assets/TextTooltip-SPU6hUyt.js","assets/utils-d72dx4mb.js","assets/FormLabel-2wEwBKx7.js","assets/LinkButton-O1af9aD7.js","assets/Toggle-AbahDP9J.js","assets/serviceTargets-sfLGvdjG.js","assets/ListItem-joIHQeyv.js","assets/Code-HuerkG4_.js","assets/CertificateSelect-0e6KEoj8.js","assets/certificates-6TEM7uZ-.js","assets/constants-_Z1avj-R.js","assets/constants--Twc5yrJ.js","assets/LoadBalancerServiceTargets-sfRJsBNI.js","assets/TableRowError-8gKmGX7P.js","assets/scrollErrorIntoView-6n4Cku1Y.js","assets/EndpointTable-tENENXjc.js","assets/vpcs-SI1JeFoo.js","assets/stackscripts-7LZsSbBg.js","assets/LoadBalancerRoutes-VlxFR_JU.js","assets/index-5HQbXRh6.js","assets/TabLinkList-BrXtJznm.js","assets/TabList-4PWL4GSj.js","assets/LoadBalancerSettings-BPXzBchs.js","assets/LoadBalancerDeleteDialog-SmSN1oJk.js","assets/TypeToConfirmDialog-9yjZCCL0.js","assets/TypeToConfirm-koQ3u5up.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}