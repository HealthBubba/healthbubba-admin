import{r as s,j as o}from"./app-sBxSHzWL.js";const l=s.forwardRef(function({type:e="text",className:n="",isFocused:t=!1,...a},f){const u=s.useRef(null);return s.useImperativeHandle(f,()=>({focus:()=>{var r;return(r=u.current)==null?void 0:r.focus()}})),s.useEffect(()=>{var r;t&&((r=u.current)==null||r.focus())},[t]),o.jsx("input",{type:e,ref:u,className:`w-full rounded-lg focus:border-0 border-gray-200 focus:ring-1 focus:ring-primary shadow-sm shadow-black/5 text-sm ${n}`,...a})});function i({message:e,className:n="",...t}){return e?o.jsx("p",{...t,className:"text-red-500 text-sm mt-2 leading-[0.6rem] "+n,children:e}):null}export{l as I,i as a};