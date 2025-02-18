import{r as t,j as e,a as d,Y as c}from"./app-Brgi-b_-.js";import{B as m}from"./Button-BE__pn81.js";import{P as x}from"./Pagination-CrxECclK.js";import{S as h,M as u,u as j}from"./Swal-D3p1DOCz.js";import{D as f}from"./AuthenticatedLayout-CcS0gXUw.js";import p from"./EditForm-CxAQg2mT.js";import{F as g}from"./PlusIcon-DGyg6qQA.js";import"./Disclose-B_-fIrXb.js";import"./Input-DFB1FKsi.js";import"./InputError-Pdez-mX0.js";import"./Password-BiwyoU6U.js";import"./Select-CVU3eynq.js";import"./PlayIcon-CC72_2jU.js";function w({title:r,titleId:s,...a},n){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:n,"aria-labelledby":s},a),r?t.createElement("title",{id:s},r):null,t.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"}))}const b=t.forwardRef(w);function v({title:r,titleId:s,...a},n){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:n,"aria-labelledby":s},a),r?t.createElement("title",{id:s},r):null,t.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"}))}const N=t.forwardRef(v);function E({title:r,titleId:s,...a},n){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:n,"aria-labelledby":s},a),r?t.createElement("title",{id:s},r):null,t.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"}))}const k=t.forwardRef(E);function y({title:r,titleId:s,...a},n){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:n,"aria-labelledby":s},a),r?t.createElement("title",{id:s},r):null,t.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"}))}const L=t.forwardRef(y);function A({admin:r,setSelected:s}){const a=()=>{};return e.jsxs("tr",{children:[e.jsx("td",{children:r.full_name}),e.jsx("td",{children:r.role}),e.jsx("td",{children:r.is_active?"Active":"Suspended"}),e.jsx("td",{children:r.created_at}),e.jsx("td",{children:e.jsxs("div",{className:"flex space-x-4",children:[e.jsx(d,{href:route("admins.edit",{admin:r.id}),className:"border-2 p-1 bg-white rounded-lg",children:e.jsx(N,{className:"size-5"})}),e.jsx(h,{onConfirm:a,type:"danger",className:"border-2 p-1 bg-white rounded-lg",children:e.jsx(k,{className:"size-5"})})]})})]})}const R=({admin:r=null,...s})=>e.jsx(u,{...s,children:e.jsxs("div",{className:"space-y-5",children:[e.jsx("div",{children:e.jsx("h4",{className:"font-semibold",children:"Create New User"})}),e.jsx(p,{})]})});function Z({admins:r}){const[s,a]=t.useState([]),n=l=>{s.includes(l)?a(s.filter(i=>i!=l)):a([...s,l])};t.useMemo(()=>r.data.length&&s.length==r.data.length,[s,r]);const o=j();return e.jsxs(f,{title:"Admins",children:[e.jsx(c,{title:"Admins"}),e.jsxs("div",{className:"card p-0 rounded-xl",children:[e.jsxs("div",{className:"p-4 md:flex justify-between items-center",children:[e.jsxs("div",{className:"inline-flex items-center space-x-2",children:[e.jsx(L,{className:"size-7"}),e.jsx("p",{className:"font-semibold",children:"Users"})]}),e.jsxs("div",{className:"md:flex items-center space-y-3 md:space-y-0 md:space-x-2",children:[e.jsxs("div",{className:"relative bg-[#F9FAFB] flex items-center border-[#E5E7EB] rounded-lg border-2",children:[e.jsx("div",{className:"px-2",children:e.jsx(b,{className:"size-4 text-muted"})}),e.jsx("input",{type:"text",placeholder:"Search Users",className:"pl-0 border-0 bg-transparent focus:ring-0 text-sm"})]}),e.jsx("div",{children:e.jsxs(m,{onClick:o.open,className:"btn-primary h-full",children:["Create User ",e.jsx(g,{className:"size-5"})]})})]})]}),e.jsx("div",{className:"border-t ml-4"}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"border-b",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Role"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Date Added"}),e.jsx("th",{})]})}),e.jsx("tbody",{children:r.data.map(l=>e.jsx(A,{admin:l,toggle:n}))})]})}),e.jsx(x,{items:r})]}),e.jsx(R,{...o})]})}export{Z as default};
