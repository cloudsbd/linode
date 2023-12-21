import{s as a,G as o,r as d,j as n,T as s,a1 as r,B as c}from"./index-Eksrs3uK.js";import{C as p}from"./CopyTooltip-mIyzAQ7E.js";const e=a(o,{label:"StyledInstructionGrid"})(({theme:i})=>({[i.breakpoints.up("sm")]:{"&:not(:first-of-type)":{"&:before":{content:"'|'",left:`calc(-${i.spacing(1)} + 2px)`,position:"absolute",top:`calc(${i.spacing(1)} - 3px)`},marginLeft:i.spacing(2),paddingLeft:i.spacing(2),position:"relative"},width:"auto"},width:"100%",boxSizing:"border-box",margin:"0"})),x=a(o,{label:"StyledContainerGrid"})(({theme:i})=>({alignItems:"center",backgroundColor:i.color.grey5,borderRadius:i.shape.borderRadius,boxSizing:"border-box",display:"flex",margin:`${i.spacing(1)} 0`,maxWidth:"100%",wrap:"noWrap"})),u=d.memo(i=>{const t=`curl -s https://lv.linode.com/${i.installationKey} | sudo bash`;return n.jsxs(o,{container:!0,spacing:2,children:[n.jsx(o,{children:n.jsx(s,{children:"Before this client can gather data, you need to install the Longview Agent on your server by running the following command. After installation, it may be a few minutes before the client begins receiving data."})}),n.jsx(o,{xs:12,children:n.jsxs(x,{spacing:2,children:[n.jsx(o,{sx:{padding:"8px"},children:n.jsx(p,{text:t})}),n.jsx(o,{sx:{paddingTop:0,paddingBottom:0,paddingLeft:"8px",overflowX:"auto"},children:n.jsx("pre",{children:n.jsx("code",{children:t})})})]})}),n.jsx(o,{xs:12,children:n.jsx(s,{children:"This should work for most installations, but if you have issues, please consult our troubleshooting guide and manual installation instructions (API key required):"})}),n.jsx(o,{xs:12,children:n.jsxs(o,{container:!0,spacing:2,children:[n.jsx(e,{children:n.jsx(s,{children:n.jsx(r,{to:"https://www.linode.com/docs/platform/longview/troubleshooting-linode-longview/",children:"Troubleshooting guide"})})}),n.jsx(e,{children:n.jsx(s,{children:n.jsx(r,{to:"https://www.linode.com/docs/platform/longview/what-is-longview/#install-the-longview-agent",children:"Manual installation instructions"})})}),n.jsx(e,{children:n.jsxs(s,{"data-testid":"api-key",children:["API Key:"," ",n.jsx(c,{component:"span",sx:l=>({color:l.color.grey1}),children:i.APIKey})]})})]})})]})});export{u as I};
