import{bt as D,r as i,m as se,j as Z,s as le}from"./index-Eksrs3uK.js";var z=_()?D.useLayoutEffect:D.useEffect,de=B;function fe(e,n){if(e!=null)if(Q(e))e(n);else try{e.current=n}catch{throw new Error('Cannot assign value "'+n+'" to ref "'+e+'"')}}function ve(e){return e==="true"?!0:me(e)?e:!1}function _(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function be(e,n){for(var t=arguments.length,r=new Array(t>2?t-2:0),a=2;a<t;a++)r[a-2]=arguments[a];return i.isValidElement(e)?i.cloneElement.apply(void 0,[e,n].concat(r)):e}function ee(e,n){var t=i.createContext(n);return t.displayName=e,t}function H(e){return D.forwardRef(e)}function ne(e,n){return D.memo(e,n)}function pe(e,n){var t=null,r=xe(e);return e.currentStyle?t=e.currentStyle[n]:r&&r.defaultView&&Q(r.defaultView.getComputedStyle)&&(t=r.defaultView.getComputedStyle(e,null).getPropertyValue(n)),t}function xe(e){return e&&e.ownerDocument?e.ownerDocument:_()?document:null}function me(e){return typeof e=="boolean"}function Q(e){return!!(e&&{}.toString.call(e)=="[object Function]")}function K(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return n.filter(function(r){return r!=null}).join("--")}function B(){}function ge(e,n){var t=i.useRef(e!=null),r=i.useState(n),a=r[0],u=r[1],x=i.useCallback(function(s){t.current||u(s)},[]);return[t.current?e:a,x]}function X(e){var n=i.useRef(e);return z(function(){n.current=e}),i.useCallback(function(t){for(var r=arguments.length,a=new Array(r>1?r-1:0),u=1;u<r;u++)a[u-1]=arguments[u];return n.current.apply(n,[t].concat(a))},[])}function V(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return i.useMemo(function(){return n.every(function(r){return r==null})?null:function(r){n.forEach(function(a){fe(a,r)})}},[].concat(n))}function he(e){var n=i.useRef(null);return i.useEffect(function(){n.current=e},[e]),n.current}function Ce(e,n){var t=i.useRef(!1);i.useEffect(function(){t.current?e():t.current=!0},n)}function q(e,n){return function(t){if(e&&e(t),!t.defaultPrevented)return n(t)}}function R(){return R=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},R.apply(this,arguments)}function ye(e,n){if(e==null)return{};var t={},r=Object.keys(e),a,u;for(u=0;u<r.length;u++)a=r[u],!(n.indexOf(a)>=0)&&(t[a]=e[a]);return t}function te(e,n){n===void 0&&(n={});var t=[];return ee(e,R({descendants:t,registerDescendant:B,unregisterDescendant:B},n))}function re(e,n,t){var r=i.useState(),a=r[1],u=i.useContext(n),x=u.registerDescendant,s=u.unregisterDescendant,o=u.descendants,v=t??o.findIndex(function(b){return b.element===e.element}),c=he(o),l=o.some(function(b,h){var p;return b.element!==(c==null||(p=c[h])===null||p===void 0?void 0:p.element)});return z(function(){return e.element||a({}),x(R({},e,{index:v})),function(){return s(e.element)}},[x,s,v,l].concat(Object.values(e))),v}function ae(){return i.useState([])}function Ie(e){return i.useContext(e).descendants}function oe(e){var n=e.context,t=e.children,r=e.items,a=e.set,u=i.useCallback(function(s){var o=s.element,v=s.index,c=ye(s,["element","index"]);o&&a(function(l){var b;if(v!=null)b=[].concat(l,[R({},c,{element:o,index:v})]);else if(l.length===0)b=[].concat(l,[R({},c,{element:o,index:0})]);else if(l.find(function(d){return d.element===o}))b=l;else{var h=l.findIndex(function(d){return!d.element||!o?!1:!!(d.element.compareDocumentPosition(o)&Node.DOCUMENT_POSITION_PRECEDING)}),p=R({},c,{element:o,index:h});h===-1?b=[].concat(l,[p]):b=[].concat(l.slice(0,h),[p],l.slice(h))}return b.map(function(d,y){return R({},d,{index:y})})})},[]),x=i.useCallback(function(s){s&&a(function(o){return o.filter(function(v){return s!==v.element})})},[]);return D.createElement(n.Provider,{value:i.useMemo(function(){return{descendants:r,registerDescendant:u,unregisterDescendant:x}},[r,u,x])},t)}function De(e,n){var t=i.useContext(e),r=t.descendants,a=n.callback,u=n.currentIndex,x=n.filter,s=n.key,o=s===void 0?"index":s,v=n.orientation,c=v===void 0?"vertical":v,l=n.rotate,b=l===void 0?!0:l,h=n.rtl,p=h===void 0?!1:h,d=u??-1;return function(f){if(!["ArrowDown","ArrowUp","ArrowLeft","ArrowRight","PageUp","PageDown","Home","End"].includes(f.key))return;var m=x?r.filter(x):r;if(x&&(d=m.findIndex(function(S){return S.index===u})),!m.length)return;function I(){var S=d===m.length-1;return S?b?g():m[d]:m[(d+1)%m.length]}function w(){var S=d===0;return S?b?C():m[d]:m[(d-1+m.length)%m.length]}function g(){return m[0]}function C(){return m[m.length-1]}switch(f.key){case"ArrowDown":if(c==="vertical"||c==="both"){f.preventDefault();var T=I();a(o==="option"?T:T[o])}break;case"ArrowUp":if(c==="vertical"||c==="both"){f.preventDefault();var E=w();a(o==="option"?E:E[o])}break;case"ArrowLeft":if(c==="horizontal"||c==="both"){f.preventDefault();var O=(p?I:w)();a(o==="option"?O:O[o])}break;case"ArrowRight":if(c==="horizontal"||c==="both"){f.preventDefault();var P=(p?w:I)();a(o==="option"?P:P[o])}break;case"PageUp":f.preventDefault();var L=(f.ctrlKey?w:g)();a(o==="option"?L:L[o]);break;case"Home":f.preventDefault();var $=g();a(o==="option"?$:$[o]);break;case"PageDown":f.preventDefault();var U=(f.ctrlKey?I:C)();a(o==="option"?U:U[o]);break;case"End":f.preventDefault();var F=C();a(o==="option"?F:F[o]);break}}}var G=!1,we=0,Y=function(){return++we},Se=function(n){var t=n||(G?Y():null),r=i.useState(t),a=r[0],u=r[1];return z(function(){a===null&&u(Y())},[]),i.useEffect(function(){G===!1&&(G=!0)},[]),a!=null?String(a):void 0};function M(e,n){if(e==null)return{};var t={},r=Object.keys(e),a,u;for(u=0;u<r.length;u++)a=r[u],!(n.indexOf(a)>=0)&&(t[a]=e[a]);return t}var N=te("TabsDescendantsContext"),ie=te("TabPanelDescendantsContext"),W=ee("TabsContext",{}),j;(function(e){e.Auto="auto",e.Manual="manual"})(j||(j={}));var J;(function(e){e.Horizontal="horizontal",e.Vertical="vertical"})(J||(J={}));var $e=H(function(n,t){var r,a=n.as,u=a===void 0?"div":a,x=n.children,s=n.defaultIndex,o=n.orientation,v=o===void 0?J.Horizontal:o,c=n.index,l=c===void 0?void 0:c,b=n.keyboardActivation,h=b===void 0?j.Auto:b,p=n.onChange,d=n.readOnly,y=d===void 0?!1:d,f=M(n,["as","children","defaultIndex","orientation","index","keyboardActivation","onChange","readOnly"]),m=i.useRef(l!=null),I=Se(f.id),w=(r=f.id)!==null&&r!==void 0?r:K("tabs",I),g=i.useRef(!1),C=i.useRef(null),T=i.useRef(!1),E=ge(l,s??0),O=E[0],P=E[1],L=i.useState(-1),$=L[0],U=L[1],F=ae(),S=F[0],ue=F[1],ce=i.useMemo(function(){return{focusedIndex:$,id:w,isControlled:m.current,isRTL:T,keyboardActivation:h,onFocusPanel:function(){var A;(A=C.current)===null||A===void 0||A.focus()},onSelectTab:y?B:function(k){g.current=!0,p&&p(k),P(k)},onSelectTabWithKeyboard:y?B:function(k){var A;switch(g.current=!0,h){case j.Manual:(A=S[k].element)===null||A===void 0||A.focus();return;case j.Auto:default:p&&p(k),P(k);return}},orientation:v,selectedIndex:O,selectedPanelRef:C,setFocusedIndex:U,setSelectedIndex:P,userInteractedRef:g}},[$,w,h,p,v,y,O,P,S]);return i.useEffect(function(){return de()},[]),D.createElement(oe,{context:N,items:S,set:ue},D.createElement(W.Provider,{value:ce},D.createElement(u,Object.assign({},f,{ref:t,"data-reach-tabs":"","data-orientation":v,id:f.id}),Q(x)?x({focusedIndex:$,id:w,selectedIndex:O}):x)))}),Te=H(function(n,t){var r=n.children,a=n.as,u=a===void 0?"div":a,x=n.onKeyDown,s=M(n,["children","as","onKeyDown"]),o=i.useContext(W),v=o.focusedIndex,c=o.isControlled,l=o.isRTL,b=o.keyboardActivation,h=o.onSelectTabWithKeyboard,p=o.orientation,d=o.selectedIndex,y=o.setSelectedIndex,f=Ie(N),m=i.useRef(null),I=V(t,m);i.useEffect(function(){m.current&&(m.current.ownerDocument&&m.current.ownerDocument.dir==="rtl"||pe(m.current,"direction")==="rtl")&&(l.current=!0)},[l]);var w=X(q(x,De(N,{currentIndex:b===j.Manual?v:d,orientation:p,rotate:!0,callback:h,filter:function(C){return!C.disabled},rtl:l.current})));return z(function(){var g;if(!c&&ve((g=f[d])===null||g===void 0?void 0:g.disabled)){var C=f.find(function(T){return!T.disabled});C&&y(C.index)}},[f,c,d,y]),D.createElement(u,Object.assign({role:"tablist","aria-orientation":p},s,{"data-reach-tab-list":"",ref:I,onKeyDown:w}),i.Children.map(r,function(g,C){return be(g,{isSelected:C===d})}))}),Re=ne(Te),Ee=H(function(n,t){var r=n.children;n.isSelected;var a=n.as,u=a===void 0?"button":a,x=n.index,s=n.disabled;n.onBlur;var o=n.onFocus,v=M(n,["children","isSelected","as","index","disabled","onBlur","onFocus"]),c=i.useContext(W),l=c.id,b=c.onSelectTab,h=c.orientation,p=c.selectedIndex,d=c.userInteractedRef,y=c.setFocusedIndex,f=i.useRef(null),m=V(t,f),I=re({element:f.current,disabled:!!s},N,x),w=u==="button"&&v.type==null?"button":v.type,g=I===p;function C(){b(I)}Ce(function(){g&&f.current&&d.current&&(d.current=!1,f.current.focus())},[g,d]);var T=X(q(o,function(){y(I)})),E=X(q(o,function(){y(-1)}));return D.createElement(u,Object.assign({"aria-controls":K(l,"panel",I),"aria-disabled":s,"aria-selected":g,role:"tab",tabIndex:g?0:-1},v,{ref:m,"data-reach-tab":"","data-orientation":h,"data-selected":g?"":void 0,disabled:s,id:K(l,"tab",I),onClick:C,onFocus:T,onBlur:E,type:w}),r)}),Pe=H(function(n,t){var r=n.children,a=n.as,u=a===void 0?"div":a,x=M(n,["children","as"]),s=i.useRef(),o=V(s,t),v=ae(),c=v[0],l=v[1];return D.createElement(oe,{context:ie,items:c,set:l},D.createElement(u,Object.assign({},x,{ref:o,"data-reach-tab-panels":""}),r))}),je=ne(Pe),Le=H(function(n,t){var r=n.children;n["aria-label"];var a=n.as,u=a===void 0?"div":a,x=M(n,["children","aria-label","as"]),s=i.useContext(W),o=s.selectedPanelRef,v=s.selectedIndex,c=s.id,l=i.useRef(null),b=re({element:l.current},ie),h=K(c,"panel",b),p=b===v,d=i.useRef(!1),y=d.current?!p:!1;D.useEffect(function(){d.current=!0},[]);var f=V(t,l,p?o:null);return D.createElement(u,Object.assign({"aria-labelledby":K(c,"tab",b),hidden:y,role:"tabpanel",tabIndex:p?0:-1},x,{ref:f,"data-reach-tab-panel":"",id:h}),r)});function Fe(){var e=i.useContext(W),n=e.focusedIndex,t=e.id,r=e.selectedIndex;return i.useMemo(function(){return{focusedIndex:n,id:t,selectedIndex:r}},[n,t,r])}const ke=se()(e=>({tab:{"&[data-reach-tab]":{"&:focus":{backgroundColor:e.color.grey7},"&:hover":{backgroundColor:e.color.grey7,color:e.palette.primary.main},alignItems:"center",borderBottom:"2px solid transparent",color:e.textColors.linkActiveLight,display:"inline-flex",flexShrink:0,fontSize:"0.9rem",lineHeight:1.3,marginTop:e.spacing(.5),maxWidth:264,minHeight:e.spacing(5),minWidth:50,padding:"6px 16px",textDecoration:"none"},"&[data-reach-tab][data-selected]":{"&:hover":{color:e.palette.primary.main},borderBottom:`3px solid ${e.textColors.linkActiveLight}`,color:e.textColors.headlineStatic,fontFamily:e.font.bold}}})),Ke=({children:e,className:n,...t})=>{const{classes:r,cx:a}=ke();return Z.jsx(Ee,{className:a(r.tab,n),...t,children:e})},Be=({children:e,className:n,...t})=>Z.jsx(Ae,{className:n,...t,children:e}),Ae=le(Re)(({theme:e})=>({"&[data-reach-tab-list]":{background:"none !important",boxShadow:`inset 0 -1px 0 ${e.name==="light"?"#e3e5e8":"#2e3238"}`,marginBottom:e.spacing(),[e.breakpoints.down("lg")]:{overflowX:"auto",padding:1}},color:e.color.tableHeaderText}));export{je as T,$e as a,Be as b,Ke as c,Le as d,Fe as u};
