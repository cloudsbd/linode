import{s as a,c1 as c,r as y,j as s,c2 as S}from"./index-Eksrs3uK.js";import{C as u}from"./CopyTooltip-mIyzAQ7E.js";import{S as T}from"./ShowMore-4P5e_z46.js";import{P as j}from"./PublicIpsUnassignedTooltip-A07mEsGp.js";import{p as h}from"./ipUtils-P4y3JNCT.js";const H=a("div",{label:"StyledIpLinkDiv"})(({theme:t})=>({color:t.palette.primary.main,display:"inline-block",position:"relative",top:-1,transition:t.transitions.create(["color"])})),b=a("div",{label:"StyledRootDiv",shouldForwardProp:c(["showAll"])})(({showAll:t,theme:o})=>({"&:last-child":{marginBottom:0},marginBottom:o.spacing(.5),maxWidth:"100%",width:"100%",...t?{}:{alignItems:"center",display:"inline-flex"}})),C=a(u,{label:"StyledCopyTooltip ",shouldForwardProp:c(["isHovered","isIpHovered","showTooltipOnIpHover"])})(({isHovered:t,isIpHovered:o,showTooltipOnIpHover:l,theme:r})=>({"& svg":{height:12,top:1,width:12},"&:focus":{opacity:1},alignItems:"center",display:"flex",justifyContent:"center",marginLeft:r.spacing(.5),opacity:t?1:0,transition:r.transitions.create(["opacity"]),...l&&{opacity:o?1:0}})),D=a("div",{label:"StyledRenderIPDiv",shouldForwardProp:c(["showAll","showTooltipOnIpHover"])})(({showAll:t,theme:o})=>({alignItems:"center",display:"flex",width:"100%",...t?{"&:not(:last-child)":{marginBottom:o.spacing(.5)}}:{}})),E=(t,o)=>(h.test(t)?1:-1)-(h.test(o)?1:-1),q=t=>{const{disabled:o=!1,ips:l,isHovered:r=!1,showAll:n,showMore:I,showTooltipOnIpHover:p=!1}=t,i=l.map(e=>e.replace("/64","")).sort(E),v=null,[f,m]=y.useState(!1);y.useEffect(()=>()=>{},[v]);const x=()=>m(!0),g=()=>m(!1),w=e=>o?j:s.jsx(H,{"data-qa-copy-ip":!0,children:s.jsx(C,{"data-testid":"styled-copytooltip",isHovered:r,isIpHovered:f,showTooltipOnIpHover:p,text:e})}),d=e=>{const P=p?{onMouseEnter:x,onMouseLeave:g}:void 0;return s.jsxs(D,{...P,showTooltipOnIpHover:p,children:[s.jsx(u,{copyableText:!0,"data-qa-copy-ip-text":!0,disabled:o,text:e}),w(e)]})};return s.jsxs(b,{showAll:n,children:[n?i.map(d):d(i[0]),i.length>1&&I&&!n&&s.jsx(T,{ariaItemType:"IP addresses","data-qa-ip-more":!0,items:S.tail(i),render:e=>e.map(d)})]})};export{q as I};
