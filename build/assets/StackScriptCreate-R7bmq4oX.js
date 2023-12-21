var K=Object.defineProperty;var Y=(r,c,e)=>c in r?K(r,c,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[c]=e;var n=(r,c,e)=>(Y(r,typeof c!="symbol"?c+"":c,e),e);import{s as x,ag as U,G as B,bB as C,ad as T,r as f,j as s,aa as J,bN as V,T as I,ai as F,e9 as z,E as X,C as Z,Q as ee,jK as te,im as ae,jJ as se,bj as ie,af as re,aj as ne,g as oe,w as le}from"./index-Eksrs3uK.js";import{L as ce}from"./LandingHeader-JXAVBhqg.js";import{w as de}from"./images.container-bKGmsZjk.js";import{f as pe,w as he}from"./image.helpers-5SOq-oMg.js";import{w as ue}from"./withQueryClient.container-mPoqUoyy.js";import{I as ge}from"./ImageSelect-L2KD_WsZ.js";import{g as M}from"./getAPIErrorFor-OfQrArkQ.js";import{s as me}from"./scrollErrorIntoView-6n4Cku1Y.js";import"./cond-gNmMu4CH.js";import"./groupBy-7jUcQ2cf.js";const Se=r=>r.map(c=>({label:c.replace("linode/",""),value:c})),be=x(U,{label:"StyledActionsPanel"})(({theme:r})=>({display:"flex",justifyContent:"flex-end",marginTop:r.spacing(3),paddingBottom:0})),O=x(B,{label:"StyledGridWithTips"})(({theme:r})=>({maxWidth:"50%",[r.breakpoints.down("md")]:{maxWidth:"100%",width:"100%"}})),ve=x(C,{label:"StyledTextField"})({"& input":{paddingLeft:0}}),Ce=x(T,{label:"StyledNotice"})(({theme:r})=>({backgroundColor:r.palette.divider,marginLeft:r.spacing(4),marginTop:`${r.spacing(4)} !important`,padding:r.spacing(4),[r.breakpoints.down("lg")]:{paddingLeft:r.spacing(2)},[r.breakpoints.down("xl")]:{marginLeft:0}})),fe={images:"Images",label:"A label",script:"A script"},W=f.memo(r=>{const{currentUser:c,description:e,disableSubmit:t,disabled:i,errors:a,images:o,isSubmitting:l,label:d,mode:p,onCancel:u,onSelectChange:h,onSubmit:g,revision:S,script:b}=r,m=M(fe,a),k=Se(o.selected);return s.jsxs(J,{sx:L=>({padding:L.spacing(2)}),children:[s.jsxs(B,{container:!0,spacing:2,children:[s.jsxs(O,{children:[s.jsx(ve,{InputProps:{startAdornment:s.jsxs(V,{position:"end",children:[c," /"]})},"data-qa-stackscript-label":!0,disabled:i,errorText:m("label"),label:"StackScript Label",onChange:d.handler,placeholder:"Enter a label",required:!0,tooltipText:"StackScript labels must be between 3 and 128 characters.",value:d.value}),s.jsx(C,{"data-qa-stackscript-description":!0,disabled:i,label:"Description",multiline:!0,onChange:e.handler,placeholder:"Enter a description",rows:1,value:e.value}),s.jsx(ge,{helperText:'Select which images are compatible with this StackScript. "Any/All" allows you to use private images.',anyAllOption:!0,"data-qa-stackscript-target-select":!0,disabled:i,imageFieldError:m("images"),images:o.available,isMulti:!0,label:"Target Images",onSelect:h,required:!0,value:k})]}),s.jsx(O,{children:s.jsxs(Ce,{children:[s.jsx(I,{variant:"h2",children:"Tips"}),s.jsx(I,{children:"There are four default environment variables provided to you:"}),s.jsxs("ul",{children:[s.jsx("li",{children:"LINODE_ID"}),s.jsx("li",{children:"LINODE_LISHUSERNAME"}),s.jsx("li",{children:"LINODE_RAM"}),s.jsx("li",{children:"LINODE_DATACENTERID"})]})]})})]}),s.jsx(C,{InputProps:{sx:{maxWidth:"100%"}},"data-qa-stackscript-script":!0,disabled:i,errorText:m("script"),label:"Script",multiline:!0,onChange:b.handler,placeholder:`#!/bin/bash 

# Your script goes here`,required:!0,rows:3,value:b.value}),s.jsx(C,{InputProps:{sx:{maxWidth:"100%"}},"data-qa-stackscript-revision":!0,disabled:i,label:"Revision Note",onChange:S.handler,placeholder:"Enter a revision note",value:S.value}),s.jsx(be,{primaryButtonProps:{"data-testid":"save",disabled:i||t,label:p==="edit"?"Save Changes":"Create StackScript",loading:l,onClick:g},secondaryButtonProps:{"data-testid":"cancel",disabled:i,label:"Reset",onClick:u}})]})});f.memo(W);const xe={images:"Images",label:"A label",script:"A script"};class ke extends f.Component{constructor(){super(...arguments);n(this,"_saveStateToLocalStorage",e=>{const{description:t,images:i,label:a,revisionNote:o,script:l,updated:d}=this.state,{match:{params:{stackScriptID:p}},mode:u}=this.props,h=e.getQueryData("account");if(h){const g=u==="create"?h.euuid:+p;F.stackScriptInProgress.set({description:t,id:g,images:i,label:a,rev_note:o,script:l,updated:d})}});n(this,"generatePayload",()=>{const{description:e,images:t,label:i,revisionNote:a,script:o}=this.state;return{description:e,images:t,label:i,rev_note:a,script:o}});n(this,"handleChangeRevisionNote",e=>{this.setState({revisionNote:e.target.value},()=>this.saveStateToLocalStorage(this.props.queryClient))});n(this,"handleChangeScript",e=>{this.setState({script:e.target.value},()=>this.saveStateToLocalStorage(this.props.queryClient))});n(this,"handleChooseImage",e=>{const t=e.map(a=>a.value),i=t.includes("any/all");this.setState({images:i?["any/all"]:t},()=>this.saveStateToLocalStorage(this.props.queryClient))});n(this,"handleCloseDialog",()=>{this.setState({dialogOpen:!1})});n(this,"handleCreateStackScript",(e,t)=>{const{history:i,profile:a}=this.props;te(e).then(o=>{var l;this.mounted&&((l=a.data)!=null&&l.restricted&&t.invalidateQueries([ae,"grants"]),this.setState({isSubmitting:!1}),this.resetAllFields(),i.push("/stackscripts/account",{successMessage:`${o.label} successfully created`}))}).catch(this.handleError)});n(this,"handleDescriptionChange",e=>{this.setState({description:e.target.value},()=>this.saveStateToLocalStorage(this.props.queryClient))});n(this,"handleError",e=>{this.mounted&&this.setState(()=>({errors:e,isSubmitting:!1}),()=>{me()})});n(this,"handleLabelChange",e=>{this.setState({label:e.target.value},()=>this.saveStateToLocalStorage(this.props.queryClient))});n(this,"handleOpenDialog",()=>{this.setState({dialogOpen:!0})});n(this,"handleSubmit",()=>{const{mode:e}=this.props,t=this.generatePayload();this.mounted&&(this.setState({isSubmitting:!0}),e==="create"?this.handleCreateStackScript(t,this.props.queryClient):this.handleUpdateStackScript(t))});n(this,"handleUpdateStackScript",e=>{const{history:t,match:{params:{stackScriptID:i}}}=this.props;return se(+i,e).then(a=>{this.mounted&&(this.setState({isSubmitting:!1}),this.resetAllFields(a),t.push("/stackscripts/account",{successMessage:`${a.label} successfully updated`}))}).catch(this.handleError)});n(this,"hasUnsavedChanges",()=>{const{apiResponse:e,description:t,images:i,label:a,revisionNote:o,script:l}=this.state;return e?l!==e.script||a!==e.label||!ie(i,e.images)||t!==e.description||o!==e.rev_note:l||a||i.length>0||t||o});n(this,"mounted",!1);n(this,"renderCancelStackScriptDialog",()=>{const{dialogOpen:e}=this.state;return s.jsx(re,{actions:this.renderDialogActions,onClose:this.handleCloseDialog,open:e,title:"Clear StackScript Configuration?",children:s.jsx(I,{children:"Are you sure you want to reset your StackScript configuration?"})})});n(this,"renderDialogActions",()=>s.jsx(U,{primaryButtonProps:{"data-testid":"confirm-cancel",label:"Reset",onClick:()=>this.resetAllFields(this.state.apiResponse)},secondaryButtonProps:{"data-testid":"cancel-cancel",label:"Cancel",onClick:this.handleCloseDialog}}));n(this,"resetAllFields",e=>{this.handleCloseDialog(),this.setState({description:(e==null?void 0:e.description)??"",images:(e==null?void 0:e.images)??[],label:(e==null?void 0:e.label)??"",revisionNote:(e==null?void 0:e.rev_note)??"",script:(e==null?void 0:e.script)??""},()=>this.saveStateToLocalStorage(this.props.queryClient))});n(this,"saveStateToLocalStorage",ne(1e3,this._saveStateToLocalStorage));n(this,"state",{description:"",dialogOpen:!1,images:[],isLoadingStackScript:!1,isSubmitting:!1,label:"",revisionNote:"",script:"",updated:""})}componentDidMount(){this.mounted=!0;const{match:{params:{stackScriptID:e}}}=this.props,t=F.stackScriptInProgress.get(),i=this.props.queryClient.getQueryData("account");e?(this.setState({isLoadingStackScript:!0}),z(+e).then(a=>{const o=Date.parse(a.updated),l=Date.parse(t.updated),d=o>l;a.id===t.id&&!d?this.setState({apiResponse:a,description:t.description??"",images:t.images??[],isLoadingStackScript:!1,label:t.label??"",revisionNote:t.rev_note??"",script:t.script??""}):this.setState({apiResponse:a,description:a.description,images:a.images,isLoadingStackScript:!1,label:a.label,revisionNote:a.rev_note,script:a.script,updated:a.updated})}).catch(a=>{this.setState({errors:a,isLoadingStackScript:!1})})):t.id===(i==null?void 0:i.euuid)&&this.setState({description:t.description??"",images:t.images??[],label:t.label??"",revisionNote:t.rev_note??"",script:t.script??""})}componentWillUnmount(){this.mounted=!1}render(){var N,w,P,q,R,_;const{grants:e,imagesData:t,location:i,match:{params:{stackScriptID:a}},mode:o,profile:l}=this.props,{description:d,errors:p,images:u,isLoadingStackScript:h,isSubmitting:g,label:S,revisionNote:b,script:m}=this.state,k=pe(t,"public"),y=M(xe,p)("none"),$=this.hasUnsavedChanges(),Q=Object.values(k).filter(v=>!this.state.images.includes(v.id)&&!v.label.match(/kube/i)),j=(N=e.data)==null?void 0:N.stackscript,D=j==null?void 0:j.find(v=>v.id===Number(a)),G=((w=l.data)==null?void 0:w.restricted)&&!((P=e.data)!=null&&P.global.add_stackscripts),H=((q=l.data)==null?void 0:q.restricted)&&(D==null?void 0:D.permissions)!=="read_write",A=o==="edit"&&H||o==="create"&&G;if(!((R=l.data)!=null&&R.username))return s.jsx(X,{errorText:"An error has occurred. Please try again."});if(h)return s.jsx(Z,{});const E=o==="create"?"Create":"Edit";return s.jsxs(f.Fragment,{children:[s.jsx(ee,{segment:E}),y&&s.jsx(T,{text:y,variant:"error"}),s.jsx(ce,{breadcrumbProps:{breadcrumbDataAttrs:{"data-qa-create-stackscript-breadcrumb":!0},crumbOverrides:[{label:"StackScripts",position:1}],pathname:i.pathname},title:E}),A&&s.jsx(T,{text:`You don't have permission to ${o==="create"?"create StackScripts":"edit this StackScript"}. Please contact an account administrator for details.`,important:!0,variant:"error"}),s.jsx(W,{description:{handler:this.handleDescriptionChange,value:d},images:{available:Q,selected:u},label:{handler:this.handleLabelChange,value:S},revision:{handler:this.handleChangeRevisionNote,value:b},script:{handler:this.handleChangeScript,value:m},currentUser:((_=l.data)==null?void 0:_.username)||"",disableSubmit:!$,disabled:A,errors:p,isSubmitting:g,mode:o,onCancel:this.handleOpenDialog,onSelectChange:this.handleChooseImage,onSubmit:this.handleSubmit}),this.renderCancelStackScriptDialog()]})}}const je=oe(de,le,he,ue),Re=je(ke);export{ke as StackScriptCreate,Re as default};
