import{bj as t}from"./index-Eksrs3uK.js";function o(n,r,e){var u,f;if(typeof n.indexOf=="function")switch(typeof r){case"number":if(r===0){for(u=1/r;e<n.length;){if(f=n[e],f===0&&1/f===u)return e;e+=1}return-1}else if(r!==r){for(;e<n.length;){if(f=n[e],typeof f=="number"&&f!==f)return e;e+=1}return-1}return n.indexOf(r,e);case"string":case"boolean":case"function":case"undefined":return n.indexOf(r,e);case"object":if(r===null)return n.indexOf(r,e)}for(;e<n.length;){if(t(n[e],r))return e;e+=1}return-1}function h(n,r){return o(r,n,0)>=0}export{h as _};
