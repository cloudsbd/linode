import{r as y,cx as b,fN as p,j as e,ad as x,bB as o,ag as S,T as k,a1 as g}from"./index-Eksrs3uK.js";import{u as j}from"./formik.esm-Kap5lsIh.js";import{C as i}from"./Code-HuerkG4_.js";import{D as w}from"./Drawer-A9yKjC3Z.js";import{h as f}from"./formikTrimUtil-tfsUpEEv.js";import{g as C}from"./getAPIErrorFor-OfQrArkQ.js";const P=y.memo(({onClose:r,open:l})=>{const{enqueueSnackbar:u}=b(),{error:c,isLoading:m,mutateAsync:h}=p(),a=j({initialValues:{label:"",ssh_key:""},async onSubmit(t){await h(t),u("Successfully created SSH key.",{variant:"success"}),a.resetForm(),r()}}),s=C({label:"Label",ssh_key:"Public key"},c??void 0),n=s("none"),d=()=>e.jsxs(k,{component:"span",children:[e.jsx(g,{to:"https://www.linode.com/docs/guides/use-public-key-authentication-with-ssh/",children:"Learn about"})," ","uploading an SSH key or generating a new key pair. Note that the public key begins with ",e.jsx(i,{children:"ssh-rsa"})," and ends with"," ",e.jsx(i,{children:"your_username@hostname"}),"."]});return e.jsxs(w,{onClose:r,open:l,title:"Add SSH Key",children:[n&&e.jsx(x,{text:n,variant:"error"}),e.jsxs("form",{onSubmit:a.handleSubmit,children:[e.jsx(o,{errorText:s("label"),label:"Label",name:"label",onChange:a.handleChange,value:a.values.label}),e.jsx(o,{errorText:s("ssh_key"),helperText:e.jsx(d,{}),label:"SSH Public Key",multiline:!0,name:"ssh_key",onBlur:t=>f(t,a),onChange:a.handleChange,rows:1.75,value:a.values.ssh_key}),e.jsx(S,{primaryButtonProps:{"data-testid":"submit",label:"Add Key",loading:m,type:"submit"},secondaryButtonProps:{label:"Cancel",onClick:r}})]})]})});export{P as C};
