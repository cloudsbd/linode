import{m as x,eP as g,j as e,eQ as m,G as s,T as u,a4 as h,bC as b}from"./index-Eksrs3uK.js";const f=x()(a=>({button:{"& :hover, & :focus":{backgroundColor:a.palette.primary.main,color:"white"},"& > span":{padding:2},minHeight:"auto",minWidth:"auto",padding:0},common:{"& .actionPanel":{display:"flex",justifyContent:"flex-end",marginTop:a.spacing()},"& .selectionCard":{flexBasis:"100%",maxWidth:"100%"},padding:a.spacing(4),[a.breakpoints.down("sm")]:{padding:a.spacing(2)}},default:{[a.breakpoints.down("sm")]:{maxWidth:445,width:"100%"},width:480},drawerHeader:{"&&":{marginBottom:a.spacing(2)}},title:{marginRight:a.spacing(4),wordBreak:"break-word"},wide:{maxWidth:700,width:"100%"}})),y=a=>{const{classes:r,cx:l}=f(),{children:c,onClose:t,title:i,wide:o,...p}=a,n=g(i);return e.jsxs(m,{classes:{paper:l(r.common,{[r.default]:!o,[r.wide]:o})},onClose:(w,d)=>{t&&d!=="backdropClick"&&t(w,d)},anchor:"right",...p,"aria-labelledby":n,"data-qa-drawer":!0,"data-testid":"drawer",role:"dialog",children:[e.jsxs(s,{sx:{position:"relative"},alignItems:"flex-start",className:r.drawerHeader,container:!0,justifyContent:"space-between",wrap:"nowrap",children:[e.jsx(s,{children:e.jsx(u,{className:r.title,"data-qa-drawer-title":i,"data-testid":"drawer-title",id:n,variant:"h2",children:i})}),e.jsx(s,{children:e.jsx(h,{sx:{position:"absolute",right:"-12px",top:"-12px"},"aria-label":"Close drawer",color:"primary","data-qa-close-drawer":!0,onClick:t,size:"large",children:e.jsx(b,{})})})]}),c]})};export{y as D};
