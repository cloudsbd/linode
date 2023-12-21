import{j as e,j$ as H,cb as E,ad as Y,bB as k,G as M,bI as z,ag as Q,W as A,r as P,bj as V,bM as W,cx as J,Q as K,an as X}from"./index-Eksrs3uK.js";import{A as Z}from"./AddNewLink-LwviGK8c.js";import{D as _}from"./DeletionDialog-MVB4bfuG.js";import{O as ee}from"./OrderBy-H-bWJCPy.js";import{P as ae}from"./Paginate-XLm_-WxT.js";import{P as te}from"./PaginationFooter-NHWf7fW2.js";import{T as I,a as b,b as oe,c as re}from"./TableRow-phXfWUGW.js";import{T as w}from"./TableSortCell-hcsagFzN.js";import{u as ne}from"./useDialog-Tn1TxMfw.js";import{u as se}from"./useOpenClose-GWPIoKTB.js";import{u as ie,a as le,b as ce,c as me}from"./ManagedLanding-ANON5BFb.js";import{F as de}from"./formik.esm-Kap5lsIh.js";import{p as pe}from"./pick-ELd0PGNj.js";import{D as ue}from"./Drawer-A9yKjC3Z.js";import{h as he,a as ge}from"./formikErrorUtils-jhqfCjwU.js";import{h as xe}from"./formikTrimUtil-tfsUpEEv.js";import{T as je}from"./TableRowEmpty-aXmC67-Z.js";import{T as Ce}from"./TableRowError-8gKmGX7P.js";import{T as fe}from"./TableRowLoading-iP7zIRHG.js";import{a as be}from"./arePropsEqual-WL8SjyyC.js";import{I as ye}from"./InlineMenuAction-d5mRENST.js";import{S as De,a as Te,b as we}from"./Contacts.styles-wn0Khfph.js";import{T as Se}from"./TableHead-Si_pzkLK.js";import"./TypeToConfirm-koQ3u5up.js";import"./splitAt-pbTnq2Oi.js";import"./LandingHeader-JXAVBhqg.js";import"./NavTabs-EcGU7lQb.js";import"./SafeTabPanel-S0Pp8CVT.js";import"./TabList-4PWL4GSj.js";import"./TabLinkList-BrXtJznm.js";import"./ProductInformationBanner-NRgFHJLr.js";import"./LineGraph-UgU3EQj3.js";import"./utilities-JekaXHyt.js";import"./visuallyHidden-DVicuktI.js";import"./TabbedPanel-IicwaI6L.js";import"./monitor-ok-uFJibhtB.js";import"./SupportTicketDialog-vNptwFQg.js";import"./scrollErrorIntoView-6n4Cku1Y.js";import"./TabbedReply-8laJdW9a.js";import"./remove-KHZAQMPH.js";import"./Skeleton-iwmO4Yae.js";const ve={email:"",group:"",name:"",phone:{primary:"",secondary:""}},Ee=n=>{const{closeDrawer:a,contact:t,groups:s,isOpen:d,mode:i}=n,h=i==="edit"&&t,{mutateAsync:C}=ie(),{mutateAsync:D}=le((t==null?void 0:t.id)||-1),S=h?pe(["name","email","phone","group"],t):ve,F=(y,{setErrors:o,setStatus:g,setSubmitting:m})=>{g(void 0);const p={...y};p.group===""&&delete p.group;let f;i==="edit"&&t?f=()=>D(p):f=()=>C(p),f().then(()=>{m(!1),a()}).catch(u=>{m(!1);const x=`Unable to ${h?"edit":"create"} contact. Please try again later.`,c=l=>g({generalError:l});m(!1),he(o,u),ge(c,u,x)})};return e.jsx(ue,{onClose:a,open:d,title:`${h?"Edit":"Add"} Contact`,children:e.jsx(de,{initialValues:S,onSubmit:F,validateOnBlur:!1,validateOnChange:!1,validationSchema:H,children:y=>{const{errors:o,handleBlur:g,handleChange:m,handleSubmit:p,isSubmitting:f,setFieldValue:u,status:x,values:c}=y,l=E("",["phone","primary"],o),j=E("",["phone","secondary"],o);return e.jsxs(e.Fragment,{children:[x&&e.jsx(Y,{text:x.generalError,variant:"error"},x),e.jsxs("form",{onSubmit:p,children:[e.jsx(k,{error:!!o.name,errorText:o.name,label:"Name",name:"name",onBlur:g,onChange:m,required:!0,value:c.name}),e.jsx(k,{error:!!o.email,errorText:o.email,label:"E-mail",name:"email",onBlur:r=>xe(r,y),onChange:m,required:!0,type:"email",value:c.email}),e.jsxs(M,{container:!0,spacing:2,children:[e.jsx(M,{md:6,xs:12,children:e.jsx(k,{error:!!l,errorText:l,label:"Primary Phone",name:"phone.primary",onBlur:g,onChange:m,value:E("",["phone","primary"],c)})}),e.jsx(M,{md:6,xs:12,children:e.jsx(k,{error:!!j,errorText:j,label:"Secondary Phone",name:"phone.secondary",onBlur:g,onChange:m,value:E("",["phone","secondary"],c)})})]}),e.jsx(z,{onChange:r=>u("group",r==null?void 0:r.value),options:s.map(r=>({label:r.groupName,value:r.groupName})),value:c.group?{label:c.group,value:c.group}:null,creatable:!0,errorText:o.group,isClearable:!1,label:"Group",placeholder:"Create or Select a Group"}),e.jsx(Q,{primaryButtonProps:{label:h?"Save Changes":"Add Contact",loading:f,onClick:()=>p()}})]})]})}})})},ke=n=>{const{contactId:a,openDialog:t,openDrawer:s}=n,d=[{onClick:()=>{s(a)},title:"Edit"},{onClick:()=>{t(a)},title:"Delete"}];return e.jsx(e.Fragment,{children:d.map(i=>e.jsx(ye,{actionText:i.title,onClick:i.onClick},i.title))})},Pe=n=>{const{contact:a,openDialog:t,openDrawer:s}=n;return e.jsxs(I,{ariaLabel:`Contact ${a.id}`,children:[e.jsx(b,{children:a.name}),e.jsx(A,{mdDown:!0,children:e.jsx(b,{children:a.group})}),e.jsx(b,{children:a.email}),e.jsxs(A,{smDown:!0,children:[e.jsx(b,{children:a.phone.primary}),e.jsx(b,{children:a.phone.secondary})]}),e.jsx(b,{actionCell:!0,children:e.jsx(ke,{contactId:a.id,contactName:a.name,openDialog:t,openDrawer:s})})]},a.id)},Ae=n=>{const{contacts:a,error:t,lastUpdated:s,loading:d,openDialog:i,openDrawer:h}=n;if(d&&s===0)return e.jsx(fe,{columns:6});if(t){const C=W(t);return e.jsx(Ce,{colSpan:6,message:C})}return a.length===0&&s!==0?e.jsx(je,{colSpan:12,message:"You don't have any Contacts on your account."}):e.jsx(e.Fragment,{children:a.map((C,D)=>e.jsx(Pe,{contact:C,openDialog:i,openDrawer:h},`managed-contact-row-${D}`))})},Fe=n=>P.memo(n,(a,t)=>V(a.contacts,t.contacts)&&be(["lastUpdated","loading","error"],a,t)),Me=Fe(Ae),ya=()=>{const{enqueueSnackbar:n}=J(),{data:a,dataUpdatedAt:t,error:s,isLoading:d}=ce(),i=a||[],[h,C]=P.useState(null),[D,S]=P.useState("create"),{mutateAsync:F}=me(),{closeDialog:y,dialog:o,handleError:g,openDialog:m,submitDialog:p}=ne(l=>F({id:l||-1})),f=()=>{p(o.entityID).then(()=>{n("Contact deleted successfully.",{variant:"success"})}).catch(l=>g(X(l,"Error deleting this contact.")[0].reason))},u=se(),x=P.createRef(),c=Ne(i);return e.jsxs(e.Fragment,{children:[e.jsx(K,{segment:"Contacts"}),e.jsx(De,{children:"You can assign contact groups to monitors so we know who to talk to in the event of a support issue. Create contacts and assign them to a group, then assign the group to the appropriate monitor(s)."}),e.jsx(Te,{alignItems:"center",container:!0,justifyContent:"flex-end",ref:x,spacing:2,children:e.jsx(we,{children:e.jsx(Z,{onClick:()=>{S("create"),u.open()},label:"Add Contact"})})}),e.jsx(ee,{data:i,order:"asc",orderBy:"name",children:({data:l,handleOrderChange:j,order:r,orderBy:T})=>e.jsx(ae,{data:l,scrollToRef:x,children:({count:O,data:R,handlePageChange:B,handlePageSizeChange:L,page:U,pageSize:q})=>e.jsxs(e.Fragment,{children:[e.jsxs(oe,{"aria-label":"List of Your Managed Contacts",children:[e.jsx(Se,{children:e.jsxs(I,{children:[e.jsx(w,{active:T==="name",direction:r,handleClick:j,label:"name",children:"Name"}),e.jsx(A,{smDown:!0,children:e.jsx(w,{active:T==="group",direction:r,handleClick:j,label:"group",children:"Group"})}),e.jsx(w,{active:T==="email",direction:r,handleClick:j,label:"email",children:"E-mail"}),e.jsxs(A,{xsDown:!0,children:[e.jsx(w,{active:T==="phone:primary",direction:r,handleClick:j,label:"phone:primary",children:"Primary Phone"}),e.jsx(w,{active:T==="phone:secondary",direction:r,handleClick:j,label:"phone:secondary",children:"Secondary Phone"})]}),e.jsx(b,{})]})}),e.jsx(re,{children:e.jsx(Me,{openDialog:v=>{const N=i.find($=>$.id===v),G=N?N.name:"";m(v,G)},openDrawer:v=>{C(v),S("edit"),u.open()},contacts:R,error:s,lastUpdated:t,loading:d})})]}),e.jsx(te,{count:O,eventCategory:"managed contacts",handlePageChange:B,handleSizeChange:L,page:U,pageSize:q})]})})}),e.jsx(_,{entity:"contact",error:o.error,label:o.entityLabel||"",loading:o.isLoading,onClose:y,onDelete:f,open:o.isOpen}),e.jsx(Ee,{closeDrawer:u.close,contact:i.find(l=>l.id===h),groups:c,isOpen:u.isOpen,mode:D})]})},Ne=n=>{const a=[];return n.forEach(t=>{if(typeof t.group!="string")return;const s=a.findIndex(d=>d.groupName===t.group);s===-1?a.push({contactNames:[t.name],groupName:t.group}):a[s].contactNames.push(t.name)}),a};export{ya as default,Ne as generateGroupsFromContacts};
