import{jO as a,jP as v,jQ as C,jR as c,jS as L,jT as d,jU as u,aN as j,jV as $,i as f}from"./index-Eksrs3uK.js";const r=(n,t)=>e=>async i=>{const{done:o,failed:s,started:g}=n;i(g(e));try{const l=await t(e),w=o({params:e,result:l});return i(w),l}catch(l){const w=s({error:l,params:e});return i(w),Promise.reject(l)}},A=n=>j((t,e)=>$(t,e))(n.params,n.filter),R=r(a,A),U=r(C,({label:n})=>v(n)),D=r(L,({id:n})=>c(n)),E=r(u,({id:n,label:t})=>d(n,t)),k=n=>f((t,e)=>{const{data:i,error:o,lastUpdated:s,loading:g,results:l}=t.longviewClients;return n?n(e,{longviewClientsData:i,longviewClientsError:o,longviewClientsLastUpdated:s,longviewClientsLoading:g,longviewClientsResults:l}):{longviewClientsData:i,longviewClientsError:o,longviewClientsLastUpdated:s,longviewClientsLoading:g,longviewClientsResults:l}},t=>({createLongviewClient:e=>t(U({label:e})),deleteLongviewClient:e=>t(D({id:e})),getLongviewClients:(e,i)=>t(R({filter:i,params:e})),updateLongviewClient:(e,i)=>t(E({id:e,label:i}))})),x=k;export{r as c,x as w};
