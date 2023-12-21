import{j as t,B as E,gV as M,gW as W,bp as v,dE as P,gX as N,ad as y,T as C,bB as $,ag as q,gY as Y,cx as F,c as G,gZ as Q,g_ as X,g$ as Z,h0 as H,h1 as J,a0 as B,aW as K,bD as ee,m as te,r as ae,ba as ne,W as se,V as ie}from"./index-Eksrs3uK.js";import{u as A}from"./formik.esm-Kap5lsIh.js";import{D as _}from"./Drawer-A9yKjC3Z.js";import{h as I,a as R}from"./formikErrorUtils-jhqfCjwU.js";import{T as U}from"./TypeToConfirmDialog-9yjZCCL0.js";import{T as oe}from"./TagsInput-cI8zXYga.js";import{D as le}from"./DisplayPrice-SNYRHKEX.js";import{g as re,S as de}from"./SizeField-jaJvblpx.js";import{C as L}from"./CopyableTextField-i2WTy2Xt.js";import{S as ce}from"./StatusIcon-RuV8PvAV.js";import{T as ue,a as j}from"./TableRow-phXfWUGW.js";import{s as me}from"./splitAt-pbTnq2Oi.js";import{A as he}from"./ActionMenu-4CPisA_2.js";import{I as be}from"./InlineMenuAction-d5mRENST.js";const O=({currentSize:d,regionId:s,value:l})=>{const e=n=>re({regionId:s,size:n}),a=((n,o)=>n>=o?n<=M?e(n):e(M):e(o))(l,d);return t.jsx(E,{marginTop:4,children:t.jsx(le,{interval:"mo",price:Number(a)})})},pe={label:""},ve=d=>{var g;const{onClose:s,open:l,volume:e}=d,{mutateAsync:i}=W(),{data:a}=v(),n=a!==void 0&&((g=a.volume.find(h=>h.id===(e==null?void 0:e.id)))==null?void 0:g.permissions)==="read_only",{errors:o,handleBlur:r,handleChange:m,handleSubmit:b,isSubmitting:u,resetForm:k,status:V,touched:w,values:D}=A({initialValues:pe,async onSubmit(h,{setErrors:f,setStatus:x}){try{await i({label:h.label,volumeId:(e==null?void 0:e.id)??-1}),p(),P()}catch(c){I(f,c),R(x,c,"Unable to clone this volume at this time. Please try again later.")}},validationSchema:N}),p=()=>{s(),k()};return t.jsx(_,{onClose:p,open:l,title:"Clone Volume",children:t.jsxs("form",{onSubmit:b,children:[n&&t.jsx(y,{spacingBottom:12,text:"You don't have permission to clone this volume.",variant:"error"}),V&&t.jsx(y,{text:V,variant:"error"}),t.jsxs(C,{variant:"body1",children:["The newly created volume will be an exact clone of"," ",t.jsx("b",{children:e==null?void 0:e.label}),". It will have a size of ",e==null?void 0:e.size," GB and be available in ",e==null?void 0:e.region,"."]}),t.jsx($,{disabled:n,errorText:w.label?o.label:void 0,label:"Label",name:"label",onBlur:r,onChange:m,required:!0,value:D.label}),t.jsx(O,{currentSize:(e==null?void 0:e.size)??-1,regionId:(e==null?void 0:e.region)??"",value:(e==null?void 0:e.size)??-1}),t.jsx(q,{primaryButtonProps:{disabled:n,label:"Clone Volume",loading:u,type:"submit"},secondaryButtonProps:{label:"Cancel",onClick:p}})]})})},qe=d=>{var r;const{onClose:s,open:l,volume:e}=d,{error:i,isLoading:a,mutateAsync:n}=Y(),o=()=>{n({id:(e==null?void 0:e.id)??-1}).then(()=>{s(),P()})};return t.jsx(U,{entity:{action:"deletion",name:e==null?void 0:e.label,primaryBtnText:"Delete",type:"Volume"},label:"Volume Label",loading:a,onClick:o,onClose:s,open:l,title:`Delete Volume ${e==null?void 0:e.label}?`,typographyStyle:{marginTop:"10px"},children:i&&t.jsx(y,{text:(r=i==null?void 0:i[0])==null?void 0:r.reason,variant:"error"})})},Ae=d=>{const{onClose:s,open:l,volume:e}=d,{enqueueSnackbar:i}=F(),{data:a}=G((e==null?void 0:e.linode_id)??-1,(e==null?void 0:e.linode_id)!==null&&(e==null?void 0:e.linode_id)!==void 0),{error:n,isLoading:o,mutateAsync:r}=Q(),m=()=>{r({id:(e==null?void 0:e.id)??-1}).then(()=>{s(),P(),i("Volume detachment started",{variant:"info"})})},b=(a==null?void 0:a.status)==="offline";return t.jsxs(U,{entity:{action:"detachment",name:e==null?void 0:e.label,primaryBtnText:"Detach",type:"Volume"},label:"Volume Label",loading:o,onClick:m,onClose:s,open:l,title:`Detach Volume ${e==null?void 0:e.label}?`,typographyStyle:{marginTop:"10px"},children:[n&&t.jsx(y,{text:n==null?void 0:n[0].reason,variant:"error"}),!b&&a!==void 0&&t.jsxs(C,{sx:u=>({color:u.color.red,marginBottom:u.spacing(2)}),children:[t.jsx("strong",{children:"Warning:"})," This operation could cause data loss. Please power off the Linode first or make sure it isn’t currently writing to the volume before continuing. If this volume is currently mounted, detaching it could cause your Linode to restart."]})]})},Ie=d=>{var f,x;const{onClose:s,open:l,volume:e}=d,{data:i}=v(),{mutateAsync:a}=X(),n=i!==void 0&&((f=i.volume.find(c=>c.id===(e==null?void 0:e.id)))==null?void 0:f.permissions)==="read_only",{dirty:o,errors:r,handleBlur:m,handleChange:b,handleSubmit:u,isSubmitting:k,resetForm:V,setFieldValue:w,status:D,touched:p,values:g}=A({enableReinitialize:!0,initialValues:{label:e==null?void 0:e.label,tags:e==null?void 0:e.tags},async onSubmit(c,{setErrors:z,setStatus:T}){try{await a({label:c.label??"",tags:c.tags,volumeId:(e==null?void 0:e.id)??-1}),h()}catch(S){I(z,S),R(T,S,"Unable to edit this Volume at this time. Please try again later.")}},validationSchema:Z}),h=()=>{s(),V()};return t.jsx(_,{onClose:h,open:l,title:"Edit Volume",children:t.jsxs("form",{onSubmit:u,children:[n&&t.jsx(y,{spacingBottom:0,text:"You don't have permission to edit this volume.",variant:"error"}),D&&t.jsx(y,{text:D,variant:"error"}),t.jsx($,{disabled:n,errorText:r.label,label:"Label",name:"label",onBlur:m,onChange:b,required:!0,value:g.label}),t.jsx(oe,{onChange:c=>w("tags",c.map(z=>z.value)),tagError:p.tags&&r.tags?"Unable to tag volume.":void 0,disabled:n,label:"Tags",name:"tags",value:((x=g.tags)==null?void 0:x.map(c=>({label:c,value:c})))??[]}),t.jsx(q,{primaryButtonProps:{disabled:n||!o,label:"Save Changes",loading:k,type:"submit"},secondaryButtonProps:{label:"Cancel",onClick:h}})]})})},Re=d=>{var f;const{onClose:s,open:l,volume:e}=d,{mutateAsync:i}=H(),a=J((e==null?void 0:e.size)??-1),{enqueueSnackbar:n}=F(),{data:o}=v(),r=o!==void 0&&((f=o.volume.find(x=>x.id===(e==null?void 0:e.id)))==null?void 0:f.permissions)==="read_only",{dirty:m,errors:b,handleBlur:u,handleChange:k,handleSubmit:V,isSubmitting:w,resetForm:D,status:p,values:g}=A({enableReinitialize:!0,initialValues:{size:e==null?void 0:e.size},onSubmit:(x,{setErrors:c,setStatus:z,setSubmitting:T})=>{T(!0),i({size:Number(x.size),volumeId:(e==null?void 0:e.id)??-1}).then(S=>{T(!1),P(),n("Volume scheduled to be resized.",{variant:"success"}),h()}).catch(S=>{T(!1),I(c,S),R(z,S,"Unable to resize this volume at this time. Please try again later.")})},validationSchema:a}),h=()=>{s(),D()};return t.jsx(_,{onClose:h,open:l,title:"Resize Volume",children:t.jsxs("form",{onSubmit:V,children:[r&&t.jsx(y,{spacingBottom:0,text:"You don't have permission to edit this volume.",variant:"error"}),p&&t.jsx(y,{text:p,variant:"error"}),t.jsx(de,{disabled:r,error:b.size,name:"size",onBlur:u,onChange:k,regionId:(e==null?void 0:e.region)??"",resize:e==null?void 0:e.size,value:g.size??-1}),t.jsx(O,{currentSize:(e==null?void 0:e.size)??-1,regionId:(e==null?void 0:e.region)??"",value:g.size??-1}),t.jsx(q,{primaryButtonProps:{disabled:r||!m,label:"Resize Volume",loading:w,type:"submit"},secondaryButtonProps:{label:"Cancel",onClick:h}})]})})},Me=d=>{const{onClose:s,open:l,volume:e}=d;return t.jsx(_,{onClose:s,open:l,title:"Volume Configuration",children:t.jsxs(B,{spacing:3,children:[t.jsxs(B,{spacing:1,children:[t.jsx(C,{"data-qa-config-help-msg":!0,variant:"body1",children:"To get started with a new volume, you’ll want to create a filesystem on it:"}),t.jsx(L,{"data-qa-make-filesystem":!0,hideLabel:!0,label:"Create a Filesystem",value:`mkfs.ext4 "${e==null?void 0:e.filesystem_path}"`})]}),t.jsxs(B,{spacing:1,children:[t.jsx(C,{"data-qa-config-help-msg":!0,variant:"body1",children:"Once the volume has a filesystem, you can create a mountpoint for it:"}),t.jsx(L,{"data-qa-mountpoint":!0,hideLabel:!0,label:"Create a Mountpoint",value:`mkdir "/mnt/${e==null?void 0:e.label}"`})]}),t.jsxs(B,{spacing:1,children:[t.jsx(C,{"data-qa-config-help-msg":!0,variant:"body1",children:"Then you can mount the new volume:"}),t.jsx(L,{"data-qa-mount":!0,hideLabel:!0,label:"Mount Volume",value:`mount "${e==null?void 0:e.filesystem_path}" "/mnt/${e==null?void 0:e.label}"`})]}),t.jsxs(B,{spacing:1,children:[t.jsx(C,{"data-qa-config-help-msg":!0,variant:"body1",children:"If you want the volume to automatically mount every time your Linode boots, you’ll want to add a line like the following to your /etc/fstab file:"}),t.jsx(L,{"data-qa-boot-mount":!0,hideLabel:!0,label:"Mount every time your Linode boots",value:`${e==null?void 0:e.filesystem_path} /mnt/${e==null?void 0:e.label} ext4 defaults,noatime,nofail 0 2`})]})]})})},ge=d=>{const{handlers:s,isVolumesLanding:l,volume:e}=d,i=e.linode_id!==null,a=K(),n=ee(a.breakpoints.down("md")),o=[{onClick:s.handleDetails,title:"Show Config"},{onClick:s.handleEdit,title:"Edit"},{onClick:s.handleResize,title:"Resize"},{onClick:s.handleClone,title:"Clone"}];!i&&l?o.push({onClick:s.handleAttach,title:"Attach"}):o.push({onClick:s.handleDetach,title:"Detach"}),o.push({disabled:i,onClick:s.handleDelete,title:"Delete",tooltip:i?"Your volume must be detached before it can be deleted.":void 0});const r=n?0:2,[m,b]=me(r,o);return t.jsxs(t.Fragment,{children:[!n&&m.map(u=>t.jsx(be,{actionText:u.title,onClick:u.onClick},u.title)),t.jsx(he,{actionsList:b,ariaLabel:`Action menu for Volume ${e.label}`})]})},xe=te()({chipWrapper:{alignSelf:"center"},volumePath:{width:"35%",wordBreak:"break-all"}}),ye={active:"active",creating:"other",migrating:"other",offline:"inactive",resizing:"other"},Ee=ae.memo(d=>{var r;const{classes:s}=xe(),{data:l}=ne(),{handlers:e,isDetailsPageRow:i,volume:a}=d,n=!i,o=((r=l==null?void 0:l.find(m=>m.id===a.region))==null?void 0:r.label)??a.region;return t.jsxs(ue,{"data-qa-volume-cell":a.id,children:[t.jsx(j,{"data-qa-volume-cell-label":a.label,children:t.jsx(E,{sx:{alignItems:"center",display:"flex",justifyContent:"space-between",wrap:"nowrap"},children:a.label})}),t.jsxs(j,{statusCell:!0,children:[t.jsx(ce,{status:ye[a.status]}),a.status.replace("_"," ")]}),n&&a.region?t.jsx(j,{"data-qa-volume-region":!0,"data-testid":"region",noWrap:!0,children:o}):null,t.jsxs(j,{"data-qa-volume-size":!0,children:[a.size," GB"]}),n?null:t.jsx(se,{smDown:!0,children:t.jsx(j,{className:s.volumePath,"data-qa-fs-path":!0,children:a.filesystem_path})}),n&&t.jsx(j,{"data-qa-volume-cell-attachment":a.linode_label,children:a.linode_id!==null?t.jsx(ie,{className:"link secondaryLink",to:`/linodes/${a.linode_id}/storage`,children:a.linode_label}):t.jsx(C,{"data-qa-unattached":!0,children:"Unattached"})}),t.jsx(j,{actionCell:!0,children:t.jsx(ge,{handlers:e,isVolumesLanding:n,volume:a})})]},`volume-row-${a.id}`)});export{ve as C,Ae as D,Ie as E,O as P,Re as R,Ee as V,Me as a,qe as b};
