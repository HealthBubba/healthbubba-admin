import{r as a,j as h}from"./app-DhgupAbr.js";import{W as g,u as w,a as y,I as H,G as T,$ as P,b as R,D as j,H as E}from"./portal-CJna2tiA.js";let F="textarea";function I(u,s){let d=a.useId(),i=w(),r=y(),{id:e=i||`headlessui-textarea-${d}`,disabled:o=r||!1,autoFocus:t=!1,invalid:f=!1,...n}=u,b=H(),p=T(),{isFocused:c,focusProps:m}=P({autoFocus:t}),{isHovered:l,hoverProps:x}=R({isDisabled:o}),$=j({ref:s,id:e,"aria-labelledby":b,"aria-describedby":p,"aria-invalid":f?"":void 0,disabled:o||void 0,autoFocus:t},m,x),v=a.useMemo(()=>({disabled:o,invalid:f,hover:l,focus:c,autofocus:t}),[o,f,l,c,t]);return E({ourProps:$,theirProps:n,slot:v,defaultTag:F,name:"Textarea"})}let D=g(I);const G=a.forwardRef(function({className:u="",isFocused:s=!1,...d},i){const r=a.useRef(null);return a.useImperativeHandle(i,()=>({focus:()=>{var e;return(e=r.current)==null?void 0:e.focus()}})),a.useEffect(()=>{var e;s&&((e=r.current)==null||e.focus())},[s]),h.jsx(D,{ref:r,className:`w-full rounded-lg focus:border-0 border-gray-100 focus:ring-1 focus:ring-primary shadow-sm shadow-black/5 text-sm ${u}`,...d})});export{G as T};
