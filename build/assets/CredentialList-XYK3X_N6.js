import{k1 as Z,et as ee,es as A,k2 as ae,k3 as re,k4 as te,r as j,_ as F,j as e,ad as w,bB as T,K as _,ag as q,aW as se,bD as ne,s as O,cx as le,Q as oe,an as ie}from"./index-Eksrs3uK.js";import{A as de}from"./AddNewLink-LwviGK8c.js";import{D as ce}from"./DeletionDialog-MVB4bfuG.js";import{O as ue}from"./OrderBy-H-bWJCPy.js";import{P as me}from"./Paginate-XLm_-WxT.js";import{P as pe}from"./PaginationFooter-NHWf7fW2.js";import{a as S,T as I,b as be,c as he}from"./TableRow-phXfWUGW.js";import{T as B}from"./TableSortCell-hcsagFzN.js";import{u as xe}from"./useDialog-Tn1TxMfw.js";import{i as Ce,p as ge,q as je,r as fe,s as ye}from"./ManagedLanding-ANON5BFb.js";import{h as we,a as De}from"./formikErrorUtils-jhqfCjwU.js";import{S as ve,a as Te,b as Se}from"./Contacts.styles-wn0Khfph.js";import{F as L}from"./formik.esm-Kap5lsIh.js";import{D as U}from"./Drawer-A9yKjC3Z.js";import{h as M}from"./formikTrimUtil-tfsUpEEv.js";import{T as Ee}from"./TableRowEmpty-aXmC67-Z.js";import{T as ke}from"./TableRowError-8gKmGX7P.js";import{T as Pe}from"./TableRowLoading-iP7zIRHG.js";import{D as qe}from"./DateTimeDisplay-bXC9mIcz.js";import{A as Le}from"./ActionMenu-4CPisA_2.js";import{I as Be}from"./InlineMenuAction-d5mRENST.js";import{T as Ae}from"./TableHead-Si_pzkLK.js";import"./TypeToConfirm-koQ3u5up.js";import"./splitAt-pbTnq2Oi.js";import"./LandingHeader-JXAVBhqg.js";import"./NavTabs-EcGU7lQb.js";import"./SafeTabPanel-S0Pp8CVT.js";import"./TabList-4PWL4GSj.js";import"./TabLinkList-BrXtJznm.js";import"./ProductInformationBanner-NRgFHJLr.js";import"./LineGraph-UgU3EQj3.js";import"./utilities-JekaXHyt.js";import"./visuallyHidden-DVicuktI.js";import"./TabbedPanel-IicwaI6L.js";import"./monitor-ok-uFJibhtB.js";import"./SupportTicketDialog-vNptwFQg.js";import"./scrollErrorIntoView-6n4Cku1Y.js";import"./TabbedReply-8laJdW9a.js";import"./remove-KHZAQMPH.js";import"./Skeleton-iwmO4Yae.js";const Fe=Z.shape({password:ee().required("Password is required.")}),_e=A().shape({label:ae.required("Label is required.")}),Oe=A().shape({password:re.required("Password is required."),username:te}),Ie=j.lazy(()=>F(()=>import("./PasswordInput-0lxL15tw.js"),__vite__mapDeps([0,1,2,3]))),Ue=h=>{const{onClose:a,onSubmit:u,open:m}=h;return e.jsx(U,{onClose:a,open:m,title:"Add Credential",children:e.jsx(L,{initialValues:{label:"",password:"",username:""},onSubmit:u,validateOnBlur:!1,validateOnChange:!1,validationSchema:Fe,children:p=>{const{errors:o,handleBlur:i,handleChange:s,handleSubmit:x,isSubmitting:b,status:n,values:t}=p;return e.jsxs(e.Fragment,{children:[n&&e.jsx(w,{"data-qa-error":!0,text:n.generalError,variant:"error"},n),e.jsxs("form",{onSubmit:x,children:[e.jsx(T,{"data-qa-add-label":!0,error:!!o.label,errorText:o.label,label:"Label",name:"label",onBlur:i,onChange:s,value:t.label}),e.jsx(T,{"data-qa-add-username":!0,error:!!o.username,errorText:o.username,label:"Username",name:"username",onBlur:l=>M(l,p),onChange:s,optional:!0,value:t.username}),e.jsx(j.Suspense,{fallback:e.jsx(_,{}),children:e.jsx(Ie,{"data-qa-add-password":!0,error:!!o.password,errorText:o.password,hideValidation:!0,label:"Password",name:"password",onBlur:i,onChange:s,type:"password",value:t.password})}),e.jsx(q,{primaryButtonProps:{"data-testid":"submit",label:"Add Credential",loading:b,onClick:()=>x()},secondaryButtonProps:{"data-testid":"cancel",label:"Cancel",onClick:a}})]})]})}})})},Me=h=>{const a=se(),u=ne(a.breakpoints.down("md")),{credentialID:m,label:p,openDialog:o,openForEdit:i}=h,b=[{onClick:()=>{i(m)},title:"Edit"},{onClick:()=>{o(m,p)},title:"Delete"}];return e.jsx(e.Fragment,{children:u?e.jsx(Le,{actionsList:b,ariaLabel:`Action menu for Managed Credentials for ${p}`}):b.map(n=>e.jsx(Be,{actionText:n.title,onClick:n.onClick},n.title))})},Re=h=>{const{credential:a,openDialog:u,openForEdit:m}=h;return e.jsxs(Ve,{ariaLabel:`Credential ${a.label}`,"data-qa-credential-cell":a.id,"data-testid":"credential-row",children:[e.jsx(S,{"data-qa-credential-label":!0,children:a.label}),e.jsx(S,{"data-qa-credential-decrypted":!0,children:a.last_decrypted?e.jsx(qe,{value:a.last_decrypted}):"Never"}),e.jsx($e,{children:e.jsx(Me,{credentialID:a.id,label:a.label,openDialog:u,openForEdit:m})})]},a.id)},$e=O(S,{label:"StyledTableCell"})({"&.MuiTableCell-root":{paddingRight:0},display:"flex",justifyContent:"flex-end",padding:0}),Ve=O(I,{label:"StyledTableRow"})({"&:before":{display:"none"}}),ze=h=>{const{credentials:a,error:u,loading:m,openDialog:p,openForEdit:o}=h;return m?e.jsx(Pe,{columns:3}):u?e.jsx(ke,{colSpan:3,message:u[0].reason}):a.length===0?e.jsx(Ee,{colSpan:12,message:"You don't have any Credentials on your account."}):e.jsx(e.Fragment,{children:a.map((i,s)=>e.jsx(Re,{credential:i,openDialog:p,openForEdit:o},`managed-credential-row-${s}`))})},Ge=j.lazy(()=>F(()=>import("./PasswordInput-0lxL15tw.js"),__vite__mapDeps([0,1,2,3]))),Ne=h=>{const{label:a,onClose:u,onSubmitLabel:m,onSubmitPassword:p,open:o}=h;return e.jsxs(U,{onClose:u,open:o,title:`Edit Credential: ${a}`,children:[e.jsx(L,{initialValues:{label:a},onSubmit:m,validateOnBlur:!1,validateOnChange:!1,validationSchema:_e,children:({errors:i,handleBlur:s,handleChange:x,handleSubmit:b,isSubmitting:n,status:t,values:l})=>e.jsxs(e.Fragment,{children:[t&&t.generalError&&e.jsx(w,{"data-qa-error":!0,text:t.generalError,variant:"error"},t.generalError),t&&t.success&&e.jsx(w,{"data-qa-success":!0,text:t.success,variant:"success"},t.success),e.jsxs("form",{onSubmit:b,children:[e.jsx(T,{"data-qa-add-label":!0,error:!!i.label,errorText:i.label,label:"Label",name:"label",onBlur:s,onChange:x,value:l.label}),e.jsx(q,{primaryButtonProps:{"data-testid":"submit",label:"Update label",loading:n,onClick:()=>b()}})]})]})}),e.jsx(L,{initialValues:{password:"",username:""},onSubmit:p,validateOnBlur:!1,validateOnChange:!1,validationSchema:Oe,children:i=>{const{errors:s,handleBlur:x,handleChange:b,handleSubmit:n,isSubmitting:t,status:l,values:D}=i;return e.jsxs("div",{style:{paddingTop:"1em"},children:[l&&l.generalError&&e.jsx(w,{"data-qa-error":!0,spacingBottom:0,text:l.generalError,variant:"error"},l.generalError),l&&l.success&&e.jsx(w,{"data-qa-success":!0,spacingBottom:0,text:l.success,variant:"success"},l.success),e.jsxs("form",{onSubmit:n,children:[e.jsx(T,{"data-qa-add-username":!0,error:!!s.username,errorText:s.username,label:"Username",name:"username",onBlur:E=>M(E,i),onChange:b,optional:!0,value:D.username}),e.jsx(j.Suspense,{fallback:e.jsx(_,{}),children:e.jsx(Ge,{"data-qa-add-password":!0,error:!!s.password,errorText:s.password,hideValidation:!0,label:"Password",name:"password",onBlur:x,onChange:b,type:"password",value:D.password})}),e.jsx(q,{primaryButtonProps:{"data-testid":"submit",label:"Update credentials",loading:t,onClick:()=>n()}})]})]})}})]})},Ba=()=>{const{enqueueSnackbar:h}=le(),{data:a,error:u,isLoading:m}=Ce(),p=a||[],{mutateAsync:o}=ge(),{mutateAsync:i}=je(),[s,x]=j.useState(!1),[b,n]=j.useState(!1),[t,l]=j.useState(0),{mutateAsync:D}=fe(t),{mutateAsync:E}=ye(t),{closeDialog:R,dialog:f,handleError:$,openDialog:V,submitDialog:z}=xe(r=>i({id:r||-1})),v=p.find(r=>r.id===t),G=()=>{z(f.entityID).then(()=>{h("Credential deleted successfully.",{variant:"success"})}).catch(r=>$(ie(r,"Error deleting this credential.")[0].reason))},k=(r,C,d,c,g)=>{const y=P=>c({generalError:P});we(d,r),De(y,r,g),C(!1)},N=(r,{setErrors:C,setStatus:d,setSubmitting:c})=>{d(void 0),o(r).then(()=>{x(!1),c(!1)}).catch(g=>{k(g,c,C,d,"Unable to create this Credential. Please try again later.")})},Q=(r,{setErrors:C,setFieldValue:d,setStatus:c,setSubmitting:g})=>{c(void 0),v&&D({password:r.password||void 0,username:r.username||void 0}).then(()=>{g(!1),c({success:"Updated successfully."}),d("password",""),d("username","")}).catch(y=>k(y,g,C,c,"Unable to update this Credential."))},Y=(r,{setErrors:C,setStatus:d,setSubmitting:c})=>{d(void 0),v&&E({label:r.label}).then(()=>{c(!1),d({success:"Label updated successfully."})}).catch(g=>k(g,c,C,d,"Unable to update this Credential."))},H=r=>{l(r),n(!0)},W=()=>{l(0),n(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(oe,{segment:"Credentials"}),e.jsxs(ve,{children:["Please share any credentials our support team may need when responding to a service issue.",e.jsx("br",{})," Credentials are stored encrypted and all decryption attempts are logged. You can revoke credentials at any time by deleting them."]}),e.jsx(Te,{alignItems:"center",container:!0,justifyContent:"flex-end",spacing:2,children:e.jsx(Se,{children:e.jsx(de,{label:"Add Credential",onClick:()=>x(!0)})})}),e.jsx(ue,{data:p,order:"asc",orderBy:"label",children:({data:r,handleOrderChange:C,order:d,orderBy:c})=>e.jsx(me,{data:r,children:({count:g,data:y,handlePageChange:P,handlePageSizeChange:K,page:J,pageSize:X})=>e.jsxs(e.Fragment,{children:[e.jsxs(be,{"aria-label":"List of Your Managed Credentials",children:[e.jsx(Ae,{children:e.jsxs(I,{children:[e.jsx(B,{active:c==="label","data-qa-credential-label-header":!0,direction:d,handleClick:C,label:"label",style:{width:"30%"},children:"Credential"}),e.jsx(B,{active:c==="last_decrypted","data-qa-credential-decrypted-header":!0,direction:d,handleClick:C,label:"last_decrypted",style:{width:"60%"},children:"Last Decrypted"}),e.jsx(S,{})]})}),e.jsx(he,{children:e.jsx(ze,{credentials:y,error:u,loading:m,openDialog:V,openForEdit:H})})]}),e.jsx(pe,{count:g,eventCategory:"managed credential table",handlePageChange:P,handleSizeChange:K,page:J,pageSize:X})]})})}),e.jsx(ce,{entity:"credential",error:f.error,label:f.entityLabel||"",loading:f.isLoading,onClose:R,onDelete:G,open:f.isOpen}),e.jsx(Ue,{onClose:()=>x(!1),onSubmit:N,open:s}),e.jsx(Ne,{label:v?v.label:"",onClose:W,onSubmitLabel:Y,onSubmitPassword:Q,open:b})]})};export{Ba as CredentialList,Ba as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/PasswordInput-0lxL15tw.js","assets/index-Eksrs3uK.js","assets/index-RL6WRErT.css","assets/main-SCnYvbUf.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}