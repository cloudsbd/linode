import{jA as y,r as u,bt as or,s as A,lq as ir,T as oe,m as Me,j as g,bO as ar,co as Be,f as ge,da as sr,cO as lr,cx as cr,av as ur,aj as fr,lr as dr,ls as pr,lt as gr}from"./index-Eksrs3uK.js";import{p as mr}from"./immer.esm--MpJ8fpr.js";function Y(e,r,t,o){function i(n){return n instanceof t?n:new t(function(a){a(n)})}return new(t||(t=Promise))(function(n,a){function l(v){try{c(o.next(v))}catch(b){a(b)}}function d(v){try{c(o.throw(v))}catch(b){a(b)}}function c(v){v.done?n(v.value):i(v.value).then(l,d)}c((o=o.apply(e,r||[])).next())})}function G(e,r){var t={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},o,i,n,a;return a={next:l(0),throw:l(1),return:l(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function l(c){return function(v){return d([c,v])}}function d(c){if(o)throw new TypeError("Generator is already executing.");for(;a&&(a=0,c[0]&&(t=0)),t;)try{if(o=1,i&&(n=c[0]&2?i.return:c[0]?i.throw||((n=i.return)&&n.call(i),0):i.next)&&!(n=n.call(i,c[1])).done)return n;switch(i=0,n&&(c=[c[0]&2,n.value]),c[0]){case 0:case 1:n=c;break;case 4:return t.label++,{value:c[1],done:!1};case 5:t.label++,i=c[1],c=[0];continue;case 7:c=t.ops.pop(),t.trys.pop();continue;default:if(n=t.trys,!(n=n.length>0&&n[n.length-1])&&(c[0]===6||c[0]===2)){t=0;continue}if(c[0]===3&&(!n||c[1]>n[0]&&c[1]<n[3])){t.label=c[1];break}if(c[0]===6&&t.label<n[1]){t.label=n[1],n=c;break}if(n&&t.label<n[2]){t.label=n[2],t.ops.push(c);break}n[2]&&t.ops.pop(),t.trys.pop();continue}c=r.call(e,t)}catch(v){c=[6,v],i=0}finally{o=n=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function yr(e,r){var t=typeof Symbol=="function"&&e[Symbol.iterator];if(!t)return e;var o=t.call(e),i,n=[],a;try{for(;(r===void 0||r-- >0)&&!(i=o.next()).done;)n.push(i.value)}catch(l){a={error:l}}finally{try{i&&!i.done&&(t=o.return)&&t.call(o)}finally{if(a)throw a.error}}return n}function vr(){for(var e=[],r=0;r<arguments.length;r++)e=e.concat(yr(arguments[r]));return e}var br=new Map([["avi","video/avi"],["gif","image/gif"],["ico","image/x-icon"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["mkv","video/x-matroska"],["mov","video/quicktime"],["mp4","video/mp4"],["pdf","application/pdf"],["png","image/png"],["zip","application/zip"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]]);function se(e,r){var t=hr(e);if(typeof t.path!="string"){var o=e.webkitRelativePath;Object.defineProperty(t,"path",{value:typeof r=="string"?r:typeof o=="string"&&o.length>0?o:e.name,writable:!1,configurable:!1,enumerable:!0})}return t}function hr(e){var r=e.name,t=r&&r.lastIndexOf(".")!==-1;if(t&&!e.type){var o=r.split(".").pop().toLowerCase(),i=br.get(o);i&&Object.defineProperty(e,"type",{value:i,writable:!1,configurable:!1,enumerable:!0})}return e}var Er=[".DS_Store","Thumbs.db"];function Dr(e){return Y(this,void 0,void 0,function(){return G(this,function(r){return[2,Cr(e)&&e.dataTransfer?Fr(e.dataTransfer,e.type):xr(e)]})})}function Cr(e){return!!e.dataTransfer}function xr(e){var r=wr(e.target)?e.target.files?me(e.target.files):[]:[];return r.map(function(t){return se(t)})}function wr(e){return e!==null}function Fr(e,r){return Y(this,void 0,void 0,function(){var t,o;return G(this,function(i){switch(i.label){case 0:return e.items?(t=me(e.items).filter(function(n){return n.kind==="file"}),r!=="drop"?[2,t]:[4,Promise.all(t.map(Sr))]):[3,2];case 1:return o=i.sent(),[2,Ae($e(o))];case 2:return[2,Ae(me(e.files).map(function(n){return se(n)}))]}})})}function Ae(e){return e.filter(function(r){return Er.indexOf(r.name)===-1})}function me(e){for(var r=[],t=0;t<e.length;t++){var o=e[t];r.push(o)}return r}function Sr(e){if(typeof e.webkitGetAsEntry!="function")return je(e);var r=e.webkitGetAsEntry();return r&&r.isDirectory?We(r):je(e)}function $e(e){return e.reduce(function(r,t){return vr(r,Array.isArray(t)?$e(t):[t])},[])}function je(e){var r=e.getAsFile();if(!r)return Promise.reject(e+" is not a File");var t=se(r);return Promise.resolve(t)}function Or(e){return Y(this,void 0,void 0,function(){return G(this,function(r){return[2,e.isDirectory?We(e):Ar(e)]})})}function We(e){var r=e.createReader();return new Promise(function(t,o){var i=[];function n(){var a=this;r.readEntries(function(l){return Y(a,void 0,void 0,function(){var d,c,v;return G(this,function(b){switch(b.label){case 0:if(l.length)return[3,5];b.label=1;case 1:return b.trys.push([1,3,,4]),[4,Promise.all(i)];case 2:return d=b.sent(),t(d),[3,4];case 3:return c=b.sent(),o(c),[3,4];case 4:return[3,6];case 5:v=Promise.all(l.map(Or)),i.push(v),n(),b.label=6;case 6:return[2]}})})},function(l){o(l)})}n()})}function Ar(e){return Y(this,void 0,void 0,function(){return G(this,function(r){return[2,new Promise(function(t,o){e.file(function(i){var n=se(i,e.fullPath);t(n)},function(i){o(i)})})]})})}var jr=function(e,r){if(e&&r){var t=Array.isArray(r)?r:r.split(","),o=e.name||"",i=(e.type||"").toLowerCase(),n=i.replace(/\/.*$/,"");return t.some(function(a){var l=a.trim().toLowerCase();return l.charAt(0)==="."?o.toLowerCase().endsWith(l):l.endsWith("/*")?n===l.replace(/\/.*$/,""):i===l})}return!0};function Ie(e,r){return _r(e)||Tr(e,r)||Rr(e,r)||Ir()}function Ir(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Rr(e,r){if(e){if(typeof e=="string")return Re(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Re(e,r)}}function Re(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,o=new Array(r);t<r;t++)o[t]=e[t];return o}function Tr(e,r){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(e)))){var t=[],o=!0,i=!1,n=void 0;try{for(var a=e[Symbol.iterator](),l;!(o=(l=a.next()).done)&&(t.push(l.value),!(r&&t.length===r));o=!0);}catch(d){i=!0,n=d}finally{try{!o&&a.return!=null&&a.return()}finally{if(i)throw n}}return t}}function _r(e){if(Array.isArray(e))return e}var Lr="file-invalid-type",Pr="file-too-large",kr="file-too-small",Nr="too-many-files",Ur=function(r){r=Array.isArray(r)&&r.length===1?r[0]:r;var t=Array.isArray(r)?"one of ".concat(r.join(", ")):r;return{code:Lr,message:"File type must be ".concat(t)}},Te=function(r){return{code:Pr,message:"File is larger than ".concat(r," bytes")}},_e=function(r){return{code:kr,message:"File is smaller than ".concat(r," bytes")}},zr={code:Nr,message:"Too many files"};function Ke(e,r){var t=e.type==="application/x-moz-file"||jr(e,r);return[t,t?null:Ur(r)]}function He(e,r,t){if(q(e.size))if(q(r)&&q(t)){if(e.size>t)return[!1,Te(t)];if(e.size<r)return[!1,_e(r)]}else{if(q(r)&&e.size<r)return[!1,_e(r)];if(q(t)&&e.size>t)return[!1,Te(t)]}return[!0,null]}function q(e){return e!=null}function Mr(e){var r=e.files,t=e.accept,o=e.minSize,i=e.maxSize,n=e.multiple,a=e.maxFiles;return!n&&r.length>1||n&&a>=1&&r.length>a?!1:r.every(function(l){var d=Ke(l,t),c=Ie(d,1),v=c[0],b=He(l,o,i),F=Ie(b,1),T=F[0];return v&&T})}function ie(e){return typeof e.isPropagationStopped=="function"?e.isPropagationStopped():typeof e.cancelBubble<"u"?e.cancelBubble:!1}function ne(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,function(r){return r==="Files"||r==="application/x-moz-file"}):!!e.target&&!!e.target.files}function Le(e){e.preventDefault()}function Br(e){return e.indexOf("MSIE")!==-1||e.indexOf("Trident/")!==-1}function $r(e){return e.indexOf("Edge/")!==-1}function Wr(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window.navigator.userAgent;return Br(e)||$r(e)}function O(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return function(o){for(var i=arguments.length,n=new Array(i>1?i-1:0),a=1;a<i;a++)n[a-1]=arguments[a];return r.some(function(l){return!ie(o)&&l&&l.apply(void 0,[o].concat(n)),ie(o)})}}function Kr(e){return qr(e)||Qr(e)||Qe(e)||Hr()}function Hr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Qr(e){if(typeof Symbol<"u"&&Symbol.iterator in Object(e))return Array.from(e)}function qr(e){if(Array.isArray(e))return ye(e)}function pe(e,r){return Zr(e)||Gr(e,r)||Qe(e,r)||Yr()}function Yr(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Qe(e,r){if(e){if(typeof e=="string")return ye(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);if(t==="Object"&&e.constructor&&(t=e.constructor.name),t==="Map"||t==="Set")return Array.from(e);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return ye(e,r)}}function ye(e,r){(r==null||r>e.length)&&(r=e.length);for(var t=0,o=new Array(r);t<r;t++)o[t]=e[t];return o}function Gr(e,r){if(!(typeof Symbol>"u"||!(Symbol.iterator in Object(e)))){var t=[],o=!0,i=!1,n=void 0;try{for(var a=e[Symbol.iterator](),l;!(o=(l=a.next()).done)&&(t.push(l.value),!(r&&t.length===r));o=!0);}catch(d){i=!0,n=d}finally{try{!o&&a.return!=null&&a.return()}finally{if(i)throw n}}return t}}function Zr(e){if(Array.isArray(e))return e}function Pe(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),t.push.apply(t,o)}return t}function m(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};r%2?Pe(Object(t),!0).forEach(function(o){ve(e,o,t[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Pe(Object(t)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))})}return e}function ve(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function ae(e,r){if(e==null)return{};var t=Vr(e,r),o,i;if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)o=n[i],!(r.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}function Vr(e,r){if(e==null)return{};var t={},o=Object.keys(e),i,n;for(n=0;n<o.length;n++)i=o[n],!(r.indexOf(i)>=0)&&(t[i]=e[i]);return t}var be=u.forwardRef(function(e,r){var t=e.children,o=ae(e,["children"]),i=Ye(o),n=i.open,a=ae(i,["open"]);return u.useImperativeHandle(r,function(){return{open:n}},[n]),or.createElement(u.Fragment,null,t(m(m({},a),{},{open:n})))});be.displayName="Dropzone";var qe={disabled:!1,getFilesFromEvent:Dr,maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1};be.defaultProps=qe;be.propTypes={children:y.func,accept:y.oneOfType([y.string,y.arrayOf(y.string)]),multiple:y.bool,preventDropOnDocument:y.bool,noClick:y.bool,noKeyboard:y.bool,noDrag:y.bool,noDragEventsBubbling:y.bool,minSize:y.number,maxSize:y.number,maxFiles:y.number,disabled:y.bool,getFilesFromEvent:y.func,onFileDialogCancel:y.func,onDragEnter:y.func,onDragLeave:y.func,onDragOver:y.func,onDrop:y.func,onDropAccepted:y.func,onDropRejected:y.func};var Xr={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,draggedFiles:[],acceptedFiles:[],fileRejections:[]};function Ye(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=m(m({},qe),e),t=r.accept,o=r.disabled,i=r.getFilesFromEvent,n=r.maxSize,a=r.minSize,l=r.multiple,d=r.maxFiles,c=r.onDragEnter,v=r.onDragLeave,b=r.onDragOver,F=r.onDrop,T=r.onDropAccepted,B=r.onDropRejected,$=r.onFileDialogCancel,_=r.preventDropOnDocument,W=r.noClick,L=r.noKeyboard,Z=r.noDrag,j=r.noDragEventsBubbling,h=u.useRef(null),f=u.useRef(null),D=u.useReducer(Jr,Xr),C=pe(D,2),P=C[0],x=C[1],V=P.isFocused,K=P.isFileDialogActive,k=P.draggedFiles,I=u.useCallback(function(){f.current&&(x({type:"openDialog"}),f.current.value=null,f.current.click())},[x]),H=function(){K&&setTimeout(function(){if(f.current){var p=f.current.files;p.length||(x({type:"closeDialog"}),typeof $=="function"&&$())}},300)};u.useEffect(function(){return window.addEventListener("focus",H,!1),function(){window.removeEventListener("focus",H,!1)}},[f,K,$]);var X=u.useCallback(function(s){!h.current||!h.current.isEqualNode(s.target)||(s.keyCode===32||s.keyCode===13)&&(s.preventDefault(),I())},[h,f]),he=u.useCallback(function(){x({type:"focus"})},[]),Ee=u.useCallback(function(){x({type:"blur"})},[]),De=u.useCallback(function(){W||(Wr()?setTimeout(I,0):I())},[f,W]),N=u.useRef([]),Ce=function(p){h.current&&h.current.contains(p.target)||(p.preventDefault(),N.current=[])};u.useEffect(function(){return _&&(document.addEventListener("dragover",Le,!1),document.addEventListener("drop",Ce,!1)),function(){_&&(document.removeEventListener("dragover",Le),document.removeEventListener("drop",Ce))}},[h,_]);var xe=u.useCallback(function(s){s.preventDefault(),s.persist(),re(s),N.current=[].concat(Kr(N.current),[s.target]),ne(s)&&Promise.resolve(i(s)).then(function(p){ie(s)&&!j||(x({draggedFiles:p,isDragActive:!0,type:"setDraggedFiles"}),c&&c(s))})},[i,c,j]),we=u.useCallback(function(s){if(s.preventDefault(),s.persist(),re(s),s.dataTransfer)try{s.dataTransfer.dropEffect="copy"}catch{}return ne(s)&&b&&b(s),!1},[b,j]),Fe=u.useCallback(function(s){s.preventDefault(),s.persist(),re(s);var p=N.current.filter(function(w){return h.current&&h.current.contains(w)}),E=p.indexOf(s.target);E!==-1&&p.splice(E,1),N.current=p,!(p.length>0)&&(x({isDragActive:!1,type:"setDraggedFiles",draggedFiles:[]}),ne(s)&&v&&v(s))},[h,v,j]),J=u.useCallback(function(s){s.preventDefault(),s.persist(),re(s),N.current=[],ne(s)&&Promise.resolve(i(s)).then(function(p){if(!(ie(s)&&!j)){var E=[],w=[];p.forEach(function(S){var Q=Ke(S,t),z=pe(Q,2),ce=z[0],ue=z[1],fe=He(S,a,n),te=pe(fe,2),de=te[0],rr=te[1];if(ce&&de)E.push(S);else{var tr=[ue,rr].filter(function(nr){return nr});w.push({file:S,errors:tr})}}),(!l&&E.length>1||l&&d>=1&&E.length>d)&&(E.forEach(function(S){w.push({file:S,errors:[zr]})}),E.splice(0)),x({acceptedFiles:E,fileRejections:w,type:"setFiles"}),F&&F(E,w,s),w.length>0&&B&&B(w,s),E.length>0&&T&&T(E,s)}}),x({type:"reset"})},[l,t,a,n,d,i,F,T,B,j]),U=function(p){return o?null:p},le=function(p){return L?null:U(p)},ee=function(p){return Z?null:U(p)},re=function(p){j&&p.stopPropagation()},Ve=u.useMemo(function(){return function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},p=s.refKey,E=p===void 0?"ref":p,w=s.onKeyDown,S=s.onFocus,Q=s.onBlur,z=s.onClick,ce=s.onDragEnter,ue=s.onDragOver,fe=s.onDragLeave,te=s.onDrop,de=ae(s,["refKey","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"]);return m(m(ve({onKeyDown:le(O(w,X)),onFocus:le(O(S,he)),onBlur:le(O(Q,Ee)),onClick:U(O(z,De)),onDragEnter:ee(O(ce,xe)),onDragOver:ee(O(ue,we)),onDragLeave:ee(O(fe,Fe)),onDrop:ee(O(te,J))},E,h),!o&&!L?{tabIndex:0}:{}),de)}},[h,X,he,Ee,De,xe,we,Fe,J,L,Z,o]),Xe=u.useCallback(function(s){s.stopPropagation()},[]),Je=u.useMemo(function(){return function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},p=s.refKey,E=p===void 0?"ref":p,w=s.onChange,S=s.onClick,Q=ae(s,["refKey","onChange","onClick"]),z=ve({accept:t,multiple:l,type:"file",style:{display:"none"},onChange:U(O(w,J)),onClick:U(O(S,Xe)),autoComplete:"off",tabIndex:-1},E,f);return m(m({},z),Q)}},[f,t,l,J,o]),Se=k.length,Oe=Se>0&&Mr({files:k,accept:t,minSize:a,maxSize:n,multiple:l,maxFiles:d}),er=Se>0&&!Oe;return m(m({},P),{},{isDragAccept:Oe,isDragReject:er,isFocused:V&&!o,getRootProps:Ve,getInputProps:Je,rootRef:h,inputRef:f,open:U(I)})}function Jr(e,r){switch(r.type){case"focus":return m(m({},e),{},{isFocused:!0});case"blur":return m(m({},e),{},{isFocused:!1});case"openDialog":return m(m({},e),{},{isFileDialogActive:!0});case"closeDialog":return m(m({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":var t=r.isDragActive,o=r.draggedFiles;return m(m({},e),{},{draggedFiles:o,isDragActive:t});case"setFiles":return m(m({},e),{},{acceptedFiles:r.acceptedFiles,fileRejections:r.fileRejections});case"reset":return m(m({},e),{},{isFileDialogActive:!1,isDragActive:!1,draggedFiles:[],acceptedFiles:[],fileRejections:[]});default:return e}}const et=e=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",...e},u.createElement("g",{fill:"none",fillRule:"evenodd",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,transform:"translate(1 1)"},u.createElement("path",{d:"M11 15.125C10.81025 15.125 10.65625 15.279 10.65625 15.46875 10.65625 15.6585 10.81025 15.8125 11 15.8125 11.18975 15.8125 11.34375 15.6585 11.34375 15.46875 11.34375 15.279 11.18975 15.125 11 15.125L11 15.125M11 12.375L11 5.5"}),u.createElement("path",{d:"M1.17333333,12.17425 C0.52525,11.5261667 0.52525,10.47475 1.17333333,9.82666667 L9.82666667,1.17425 C10.4729167,0.526166667 11.5225,0.52525 12.1705833,1.1715 C12.1715,1.17241667 12.1724167,1.17333333 12.1733333,1.17425 L20.8266667,9.82666667 C21.47475,10.47475 21.47475,11.5261667 20.8266667,12.17425 L12.1733333,20.8266667 C11.52525,21.4738333 10.47475,21.4738333 9.82666667,20.8266667 L1.17333333,12.17425 Z"}))),rt=e=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",...e},u.createElement("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M5.625 14.3741667L19.9555822.0435844341M5.625 14.3741667L.133252532 8.8824192",transform:"translate(2 5)"})),tt=e=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",...e},u.createElement("g",{fill:"none",fillRule:"evenodd",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,transform:"translate(1 3)"},u.createElement("polyline",{points:"4.813 11.227 4.813 15.352 .688 15.352"}),u.createElement("polyline",{points:"17.188 7.102 17.188 2.977 21.313 2.977"}),u.createElement("path",{d:"M17.446 2.97458333C20.3778244 6.02901249 20.7648664 10.721236 18.3731571 14.2147813 15.9814479 17.7083265 11.4670057 19.0449544 7.55883333 17.4166667M4.55308333 15.3550833C1.62777321 12.2992727 1.24462928 7.61143277 3.63491941 4.12117043 6.02520954.630908093 10.5345873-.706310807 14.4411667.916666667"}))),nt=A("div",{label:"StyledRootContainer"})(({theme:e,...r})=>({"&:last-child ":{[`&.${Ge().classes.overwriteNotice}`]:{borderBottom:0,paddingBottom:e.spacing(1)}},cursor:r.error?"pointer":"default",marginBottom:e.spacing(.5),marginTop:e.spacing(.5),position:"relative"})),ot=A("div",{label:"StyledContainer"})(({theme:e})=>({alignItems:"center",display:"flex",justifyContent:"space-between",padding:e.spacing(),position:"relative",zIndex:2})),it=A("div",{label:"StyledLeftWrapper"})(({theme:e})=>({alignItems:"center",display:"flex",marginRight:e.spacing()})),at=A("div",{label:"StyledRightWrapper"})(()=>({alignItems:"center",display:"flex"})),st=A(tt,{label:"StyledUploadPending"})(({theme:e})=>({animation:`${ir} 2s linear infinite`,color:e.textColors.headlineStatic})),lt=A(oe,{label:"StyledFileSizeTypography"})(({theme:e})=>({marginRight:e.spacing()})),ct=A("div",{label:"StyledActionsContainer"})(({theme:e})=>({"& button":{marginLeft:e.spacing()},display:"flex",justifyContent:"center"})),Ge=Me()(e=>({barColorPrimary:{backgroundColor:e.name==="light"?"#cce2ff":"#243142"},error:{"& g":{stroke:e.palette.error.dark},color:e.palette.error.dark},iconRight:{color:e.textColors.headlineStatic},overwriteNotice:{alignItems:"center",borderBottom:`1px solid ${e.color.grey2}`,display:"flex",justifyContent:"space-between",padding:e.spacing(),paddingTop:0,position:"relative",zIndex:10},progressBar:{backgroundColor:e.bg.app,borderRadius:3,height:e.spacing(5.25),position:"absolute",width:"100%",zIndex:1}})),ut=u.memo(e=>{const{classes:r,cx:t}=Ge(),o=()=>e.dispatch({fileName:e.fileName,type:"RESUME_UPLOAD"}),i=()=>e.dispatch({fileName:e.fileName,type:"CANCEL_OVERWRITE"}),n=()=>{e.error&&o()},a=g.jsxs(nt,{onClick:n,onKeyPress:n,role:"button",tabIndex:0,children:[g.jsx(ar,{classes:{barColorPrimary:r.barColorPrimary,root:r.progressBar},className:r.progressBar,value:e.percentCompleted,variant:"determinate"}),g.jsxs(ot,{children:[g.jsx(it,{children:g.jsx(oe,{className:t({[r.error]:e.error!==""}),variant:"body1",children:e.displayName})}),g.jsxs(at,{children:[g.jsx(lt,{className:t({[r.error]:e.error!==""}),variant:"body1",children:Be(e.sizeInBytes).formatted}),e.percentCompleted===100?g.jsx(rt,{className:r.iconRight,"data-qa-file-upload-success":!0,height:22,width:22}):e.error||e.overwriteNotice?g.jsx(et,{className:t({[r.error]:e.error!=="",[r.iconRight]:!0}),"data-qa-file-upload-error":!0,height:22,width:22}):g.jsx(st,{"data-qa-file-upload-pending":!0,height:22,width:22})]})]}),e.overwriteNotice&&g.jsxs("div",{className:r.overwriteNotice,children:[g.jsx(oe,{variant:"body1",children:"This file already exists. Are you sure you want to overwrite it?"}),g.jsxs(ct,{children:[g.jsx(ge,{buttonType:"secondary",onClick:i,children:"Cancel"}),g.jsx(ge,{buttonType:"primary",onClick:o,children:"Replace"})]})]})]},e.displayName),l=`Error uploading ${e.type??"object"}. Click to retry.`,d=g.jsx("div",{children:l});return e.error?g.jsx(sr,{placement:"bottom",title:d,children:a}):a}),Ze=lr.create({}),ke=(e,r,t)=>{const o={data:r,headers:{"Content-Type":r.type},method:"PUT",onUploadProgress:t,url:e};return Ze.request(o)},Dt=e=>{const r={method:"DELETE",url:e};return Ze.request(r)},Ne=250,Ue=6,ze=5*1024*1024*1024,ft=(e,r)=>{switch(r.type){case"ENQUEUE":const t=[];r.files.forEach(n=>{const a=e.files.findIndex(l=>R(l.file)===R(n));if(a===-1)t.push(n);else{const l=e.files[a].status;(l==="FINISHED"||l==="CANCELED"||l==="ERROR")&&(e.files.splice(a,1),e.files.unshift({file:n,percentComplete:0,prefix:r.prefix,status:"QUEUED"}))}});const o=t.map(n=>({file:n,percentComplete:0,prefix:r.prefix,status:"QUEUED"}));e.files=[...o,...e.files],M(e);break;case"UPDATE_FILES":r.filesToUpdate.forEach(n=>{const a=e.files.find(l=>R(l.file)===n);a&&(Object.keys(r.data).forEach(l=>{a[l]=r.data[l]}),r.data.status&&M(e))});break;case"NOTIFY_FILE_EXISTS":{const n=e.files.find(a=>R(a.file)===r.fileName);n&&(n.status="OVERWRITE_NOTICE",n.url=r.url),M(e);break}case"RESUME_UPLOAD":{const n=e.files.find(a=>R(a.file)===r.fileName);n&&(n.status="QUEUED"),M(e);break}case"CANCEL_OVERWRITE":const i=e.files.findIndex(n=>R(n.file)===r.fileName);i>-1&&e.files.splice(i,1),M(e);break;case"CLEAR_UPLOAD_HISTORY":e.files=[],M(e);break}},dt=mr(ft),pt={files:[],numCanceled:0,numErrors:0,numFinished:0,numInProgress:0,numQueued:0},M=e=>{let r=0,t=0,o=0,i=0,n=0;e.files.forEach(a=>{a.status==="QUEUED"?r++:a.status==="IN_PROGRESS"?t++:a.status==="FINISHED"?o++:a.status==="CANCELED"?i++:a.status==="ERROR"&&n++}),e.numQueued=r,e.numInProgress=t,e.numFinished=o,e.numCanceled=i,e.numErrors=n},R=e=>e.path||e.name,gt=A("div",{label:"StyledFileUploadsContainer"})(()=>({display:"flex",flexDirection:"column",flexGrow:1,justifyContent:"flex-start"})),mt=A("div",{label:"StyledDropZoneContent"})(({theme:e})=>({alignItems:"center",display:"flex",flexDirection:"column",justifyContent:"center",padding:e.spacing(2),textAlign:"center",width:"100%"})),yt=A(oe,{label:"StyledDropZoneCopy"})(({theme:e})=>({color:e.palette.text.primary,margin:"0 auto"})),vt=Me()((e,r,t)=>({UploadZoneActiveButton:{[`& .${t.uploadButton}`]:{marginTop:0},backgroundColor:"transparent",bottom:e.spacing(1.5),padding:0,position:"absolute",width:`calc(100% - ${e.spacing(4)})`,zIndex:10},accept:{borderColor:e.palette.primary.light},active:{[`& .${t.uploadButton}`]:{opacity:.5},backgroundColor:e.color.white,borderColor:e.palette.primary.light},dropzone:{backgroundColor:"transparent",borderColor:e.palette.primary.main,borderRadius:6,borderStyle:"dashed",borderWidth:1,color:e.palette.primary.main,display:"flex",flexDirection:"row",height:"100%",justifyContent:"space-between",marginTop:e.spacing(2),maxHeight:400,minHeight:140,outline:"none",overflow:"auto",padding:e.spacing(),[e.breakpoints.down("md")]:{marginLeft:e.spacing(),marginRight:e.spacing()},transition:e.transitions.create(["border-color","background-color"])},reject:{borderColor:e.color.red},root:{paddingBottom:60,position:"relative"},uploadButton:{marginTop:e.spacing(2),opacity:1,transition:e.transitions.create(["opacity"])}})),Ct=u.memo(e=>{const{bucketName:r,clusterId:t,prefix:o}=e,{enqueueSnackbar:i}=cr(),{classes:n,cx:a}=vt(),l=ur(),[d,c]=u.useReducer(dt,pt),v=f=>{if(d.numInProgress+d.numQueued+f.length>Ne){i(`Upload up to ${Ne} files at a time`,{variant:"error"});return}gr(f.length),c({files:f,prefix:o,type:"ENQUEUE"})},b=f=>{let D=`Max file size (${Be(ze).formatted}) exceeded`;f.length>1&&(D+=" for some files"),i(D,{variant:"error"})},F=u.useMemo(()=>d.numQueued===0||d.numInProgress>=Ue?[]:d.files.filter(D=>D.status==="QUEUED").slice(0,Ue-d.numInProgress),[d.numQueued,d.numInProgress]),T=u.useRef(fr(3e3,!1,()=>pr(t,r,l))).current;u.useEffect(()=>{F.length!==0&&(c({data:{status:"IN_PROGRESS"},filesToUpdate:F.map(f=>R(f.file)),type:"UPDATE_FILES"}),F.forEach(f=>{const{file:D}=f,C=R(f.file),P=C.startsWith("/"),x=f.prefix+(P?C.substring(1):C),V=bt(c,C),K=()=>{T(),e.maybeAddObjectToTable(x,D.size),c({data:{percentComplete:100,status:"FINISHED"},filesToUpdate:[C],type:"UPDATE_FILES"})},k=()=>{c({data:{status:"ERROR"},filesToUpdate:[C],type:"UPDATE_FILES"})};f.url?ke(f.url,D,V).then(I=>K()).catch(I=>k()):dr(t,r,x,"PUT",{content_type:D.type}).then(({exists:I,url:H})=>{if(I){c({fileName:C,type:"NOTIFY_FILE_EXISTS",url:H});return}return ke(H,D,V).then(X=>K()).catch(X=>k())}).catch(I=>k())}))},[F]);const{getInputProps:B,getRootProps:$,isDragAccept:_,isDragActive:W,isDragReject:L,open:Z}=Ye({maxSize:ze,noClick:!0,noKeyboard:!0,onDrop:v,onDropRejected:b}),j=u.useMemo(()=>a({[n.accept]:_,[n.active]:W,[n.reject]:L}),[W,_,L]),h=d.files.length!==0;return g.jsx("div",{className:a({[n.root]:h}),children:g.jsxs("div",{...$({className:`${n.dropzone} ${j}`}),children:[g.jsx("input",{...B(),placeholder:"You can browse your device to upload files or drop them here."}),g.jsx(gt,{children:d.files.map((f,D)=>{const C=f.file.path||f.file.name;return g.jsx(ut,{error:f.status==="ERROR"?"Error uploading object.":"",dispatch:c,displayName:f.file.name,fileName:C,overwriteNotice:f.status==="OVERWRITE_NOTICE",percentCompleted:f.percentComplete||0,sizeInBytes:f.file.size||0,url:f.url},D)})}),g.jsxs(mt,{className:a({[n.UploadZoneActiveButton]:h}),"data-qa-drop-zone":!0,children:[!h&&g.jsx(yt,{variant:"subtitle2",children:"You can browse your device to upload files or drop them here."}),g.jsx(ge,{buttonType:"primary",className:n.uploadButton,onClick:Z,children:"Browse Files"})]})]})})}),bt=(e,r)=>t=>{e({data:{percentComplete:t.loaded/(t.total??1)*100},filesToUpdate:[r],type:"UPDATE_FILES"})};export{ut as F,Ue as M,Ct as O,ze as a,Dt as b,dt as c,pt as d,bt as o,R as p,Ye as u};
