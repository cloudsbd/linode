import{r as s,ao as p,j as e,ad as g,T as u,V as a,ap as f}from"./index-Eksrs3uK.js";import{u as x}from"./accountMaintenance-hC6-dGbb.js";import{i as w}from"./isPast-netbmlWS.js";const b=s.memo(r=>{const{maintenanceEnd:i,maintenanceStart:o,type:l}=r,{data:n}=x({},{status:{"+or":["pending, started"]}}),{data:t,error:c,isLoading:m}=p(),h=()=>m?"Fetching timezone...":c?"Error retrieving timezone.":t!=null&&t.timezone?t.timezone:null;return o===null||!n||(n==null?void 0:n.length)===0?null:e.jsxs(g,{important:!0,variant:"warning",children:[e.jsx(u,{lineHeight:"20px",children:y(l,o)}),o&&e.jsxs(u,{lineHeight:"20px",children:["Timezone: ",e.jsxs(a,{to:"/profile/display",children:[h()," "]})]}),e.jsxs(u,{lineHeight:"20px",children:["For more information, please see your"," ",e.jsx(a,{to:"/support/tickets?type=open",children:"open support tickets."})]})]})}),y=(r,i,o,l)=>{const n=i?w(i)(new Date().toISOString()):!1;if(r){if(n)return e.jsxs(s.Fragment,{children:["This Linode’s physical host is currently undergoing maintenance."," ",d[r]," Please refer to",e.jsx(a,{to:"/support/tickets",children:" your Support tickets "})," for more information."]});if(i){const t=f(i,{timezone:l});return e.jsxs(s.Fragment,{children:["This Linode’s physical host will be undergoing maintenance at"," ",t,". ",d[r]]})}else return null}return e.jsxs(s.Fragment,{children:['Maintenance is required for one or more of your Linodes’ physical hosts. Your maintenance times will be listed under the "Status" column',!location.pathname.includes("/linodes")&&e.jsx(a,{to:"/linodes?view=list",children:" here"}),"."]})},d={cold_migration:"During this time, your Linode will be shut down, cold migrated to a new host, then returned to its last state (running or powered off).",live_migration:"During this time, your Linode will be live migrated to a new host, then returned to its last state (running or powered off).",reboot:"During this time, your Linode will be shut down and remain offline, then returned to its last state (running or powered off).",volume_migration:"During this time, your Linode will be shut down and upgraded, then returned to its last state (running or powered off)."};export{b as M};
