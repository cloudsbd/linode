import{bt as i,_ as c,O as p,e as d,j as a,a0 as l,T as u,K as h,M as f}from"./index-Eksrs3uK.js";import{T as m}from"./TabLinkList-BrXtJznm.js";import{a as x}from"./TabList-4PWL4GSj.js";const T=i.lazy(()=>c(()=>import("./Certificates-PUc5fei8.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19])).then(e=>({default:e.Certificates}))),b=()=>{const{path:e,url:s}=p(),n=d(),o=[{path:"downstream",title:"TLS Certificates"},{path:"ca",title:"Service Target Certificates"}],r=o.findIndex(t=>n.pathname.startsWith(`${s}/${t.path}`));return a.jsxs(l,{paddingTop:1,spacing:1,children:[a.jsx(u,{children:"Upload certificates to your Load Balancer for use across your Configurations and Service Targets."}),a.jsxs(x,{index:r===-1?0:r,onChange:()=>null,children:[a.jsx(m,{tabs:o.map(t=>({...t,routeName:`${s}/${t.path}`}))}),a.jsx(i.Suspense,{fallback:a.jsx(h,{}),children:a.jsx(f,{component:T,path:`${e}/:type?/:create?`})})]})]})};export{b as LoadBalancerCertificates};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/Certificates-PUc5fei8.js","assets/index-Eksrs3uK.js","assets/index-RL6WRErT.css","assets/ActionMenu-4CPisA_2.js","assets/PaginationFooter-NHWf7fW2.js","assets/TableRow-phXfWUGW.js","assets/TableRowEmpty-aXmC67-Z.js","assets/TableRowError-8gKmGX7P.js","assets/TableSortCell-hcsagFzN.js","assets/useOrder-rsUMHEuj.js","assets/OrderBy-H-bWJCPy.js","assets/splitAt-pbTnq2Oi.js","assets/usePagination-Sxr0Tlb7.js","assets/certificates-6TEM7uZ-.js","assets/loadbalancers-xfUXrZkQ.js","assets/formik.esm-Kap5lsIh.js","assets/Drawer-A9yKjC3Z.js","assets/formikErrorUtils-jhqfCjwU.js","assets/scrollErrorIntoView-6n4Cku1Y.js","assets/TableHead-Si_pzkLK.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}