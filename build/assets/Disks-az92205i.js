import{j as i,r as g,G as s,cb as T,cQ as C}from"./index-Eksrs3uK.js";import{i as S}from"./CloneLanding-Z-FykjjG.js";import{P as u}from"./Paginate-XLm_-WxT.js";import{P as w}from"./PaginationFooter-NHWf7fW2.js";import{b as P,T as p,a as r,c as y}from"./TableRow-phXfWUGW.js";import{T as z}from"./TableRowEmpty-aXmC67-Z.js";import{T as E}from"./TableHead-Si_pzkLK.js";import"./immer.esm--MpJ8fpr.js";import"./_contains-91K6xqrF.js";import"./uniq-xa8_MmzW.js";import"./SafeTabPanel-S0Pp8CVT.js";import"./TabList-4PWL4GSj.js";import"./TabLinkList-BrXtJznm.js";import"./configs-3PoBJaCX.js";import"./disks-ZTjtBBb6.js";import"./Notifications-N8OobC9R.js";import"./LinodeDisks-jJddYOGd.js";import"./AddNewLink-LwviGK8c.js";import"./OrderBy-H-bWJCPy.js";import"./splitAt-pbTnq2Oi.js";import"./TableRowError-8gKmGX7P.js";import"./TableRowLoading-iP7zIRHG.js";import"./Skeleton-iwmO4Yae.js";import"./TableSortCell-hcsagFzN.js";import"./formik.esm-Kap5lsIh.js";import"./Autocomplete-XvrzKoAo.js";import"./Drawer-A9yKjC3Z.js";import"./Radio-HudVgwMW.js";import"./RadioGroup-zpRjMzXK.js";import"./formikErrorUtils-jhqfCjwU.js";import"./AccessPanel-rD0WgXZZ.js";import"./CreateSSHKeyDrawer-NnwCGTeL.js";import"./Code-HuerkG4_.js";import"./formikTrimUtil-tfsUpEEv.js";import"./getAPIErrorFor-OfQrArkQ.js";import"./usePagination-Sxr0Tlb7.js";import"./ImageSelect-L2KD_WsZ.js";import"./cond-gNmMu4CH.js";import"./groupBy-7jUcQ2cf.js";import"./LinodePermissionsError-htxzmi5m.js";import"./DateTimeDisplay-bXC9mIcz.js";import"./ActionMenu-4CPisA_2.js";import"./InlineMenuAction-d5mRENST.js";import"./TextTooltip-SPU6hUyt.js";import"./ListItem-joIHQeyv.js";import"./MaintenanceBanner-5tjriDAX.js";import"./accountMaintenance-hC6-dGbb.js";import"./isPast-netbmlWS.js";import"./useDialog-Tn1TxMfw.js";import"./LinodeSelect-y7DOgXsC.js";import"./append-Xa6QMsiD.js";import"./pickBy-ZiFDTica.js";const zi=a=>{const{diskSelection:o,disks:l,handleSelect:n,selectedConfigIds:d}=a;return i.jsx(u,{data:l,children:({count:c,data:e,handlePageChange:x,handlePageSizeChange:h,page:j,pageSize:b})=>i.jsxs(g.Fragment,{children:[i.jsx(s,{container:!0,children:i.jsx(s,{md:9,xs:12,children:i.jsxs(P,{"aria-label":"List of Disks",children:[i.jsx(E,{children:i.jsxs(p,{children:[i.jsx(r,{sx:{width:"65%"},children:"Label"}),i.jsx(r,{sx:{width:"35%"},children:"Size"})]})}),i.jsx(y,{children:e.length===0?i.jsx(z,{colSpan:2}):e.map(t=>{const f=o[t.id]&&o[t.id].isSelected,m=S(T([],[t.id,"associatedConfigIds"],o),d).length>0;return i.jsxs(p,{"data-qa-disk":t.label,children:[i.jsx(r,{children:i.jsx(C,{checked:f||m,"data-testid":`checkbox-${t.id}`,disabled:m,onChange:()=>n(t.id),text:t.label})}),i.jsxs(r,{children:[t.size," MB"]})]},t.id)})})]})})}),i.jsx(w,{count:c,eventCategory:"linode disks",handlePageChange:x,handleSizeChange:h,page:j,pageSize:b})]})})};export{zi as Disks,zi as default};
