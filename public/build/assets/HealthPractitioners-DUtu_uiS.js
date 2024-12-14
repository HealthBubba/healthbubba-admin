import{r as i,j as e,y as r,Y as u}from"./app-CzYDytL5.js";import{P as j}from"./Pagination-Cf8zwfPA.js";import{S as f}from"./SettingIcon-CLtczJqv.js";import{r as c,I as x,g as h,E as l,D as v,F as g}from"./AuthenticatedLayout-CFCfmVf-.js";import{B as b}from"./Badge-uMt86NMf.js";import{C as w}from"./Currency-Cu_X281H.js";import{D as d}from"./Disclose-DG1lNqL7.js";import{u as N,S as o}from"./Swal-Bqm1-ny2.js";import{F as y}from"./XMarkIcon-EP1dyQRy.js";import{F as R}from"./MagnifyingGlassIcon-Dc-l1ySi.js";import"./Button-Diq_KHdc.js";function _({title:t,titleId:s,...n},a){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:a,"aria-labelledby":s},n),t?i.createElement("title",{id:s},t):null,i.createElement("path",{fillRule:"evenodd",d:"M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z",clipRule:"evenodd"}))}const E=i.forwardRef(_);function C({title:t,titleId:s,...n},a){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:a,"aria-labelledby":s},n),t?i.createElement("title",{id:s},t):null,i.createElement("path",{fillRule:"evenodd",d:"M4.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z",clipRule:"evenodd"}))}const F=i.forwardRef(C),S=({user:t})=>{const s=p=>{r.get(route("users.suspend",{user:t.id}))},n=()=>{r.get(route("practitioners.approve",{user:t.id}))},a=()=>{r.get(route("practitioners.disapprove",{user:t.id}))},m=p=>{r.get(route("practitioners.destroy",{user:t.id}))};return N(),e.jsxs("tr",{children:[e.jsx("td",{children:t.no.toLocaleString()}),e.jsx("td",{children:t.full_name}),e.jsx("td",{children:t.email}),e.jsx("td",{children:t.phone}),e.jsx("td",{children:t.licence_number}),e.jsx("td",{children:e.jsx(d,{show:!!t.doctor_license,children:e.jsx("a",{href:t.doctor_license,target:"_blank",className:"text-primary flex space-x-4 items-center",children:"View License"})})}),e.jsx("td",{children:e.jsx(d,{show:!!t.other_document,children:e.jsx("a",{href:t.other_document,target:"_blank",className:"text-primary flex space-x-4 items-center",children:"View"})})}),e.jsx("td",{children:e.jsx(b,{className:"capitalize",status:t.status,children:t.status})}),e.jsx("td",{children:t.consultations}),e.jsxs("td",{children:[e.jsx(w,{}),t.earnings.toLocaleString()]}),e.jsxs("td",{children:[e.jsx(d,{show:t.is_doctor_verified,children:e.jsxs(c,{children:[e.jsx(x,{className:"btn border-2 p-1 bg-white rounded-lg",children:e.jsx(F,{className:"size-5"})}),e.jsxs(h,{transition:!0,anchor:"bottom end",className:"w-32 origin-top-right mt-1 rounded-xl border-[1.5px] bg-white transition duration-100 ease-out text-sm",children:[e.jsx("div",{className:"p-1",children:e.jsx(l,{children:e.jsx(o,{title:t.is_active?"Suspend User":"Restore User",type:t.is_active?"warning":"success",confirmLabel:t.is_active?"Suspend User":"Restore User",onConfirm:s,caption:`Are you sure you want to ${t.is_active?"suspend":"restore"} this user's account?`,className:"inline-flex w-full rounded-lg py-2 px-3 text-muted hover:bg-muted/10",children:t.is_active?"Suspend":"Restore"})})}),e.jsx("div",{className:"border-t-[1.5px]"}),e.jsx("div",{className:"p-1",children:e.jsx(l,{children:e.jsx(o,{title:"Delete User Account",type:"danger",onConfirm:m,caption:"Are you sure you want to delete this user's account? This action cannot be undone.",className:"inline-flex w-full rounded-lg py-2 px-3 text-muted hover:bg-muted/10",children:"Delete"})})})]})]})}),e.jsx(d,{show:!t.is_doctor_verified,children:e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("div",{children:e.jsx(o,{title:"Approve Verification Request",type:"success",onConfirm:n,caption:"Are you sure you want to approve this verification request?",className:"inline-flex w-full rounded-full p-2 text-primary bg-primary/10 hover:bg-primary hover:text-white",children:e.jsx(E,{className:"size-4"})})}),e.jsx("div",{children:e.jsx(o,{title:"Decline Verification Request",type:"danger",onConfirm:a,caption:"Are you sure you want to decline this verification request?",className:"inline-flex w-full rounded-full p-2 text-red-600 bg-red-500/10 hover:bg-red-500 hover:text-white",children:e.jsx(y,{className:"size-4"})})})]})})]})]})};function H({users:t}){return e.jsxs(v,{title:"Health Practitioners",children:[e.jsx(u,{title:"Health Practitioners"}),e.jsxs("div",{className:"card p-0 rounded-xl",children:[e.jsxs("div",{className:"p-4 md:flex md:space-x-2",children:[e.jsx("div",{children:e.jsxs(c,{children:[e.jsxs(x,{className:"border-2 p-1 h-full px-3 font-medium items-center space-x-1 text-sm rounded-lg inline-flex",children:[e.jsx(f,{className:"size-5"}),e.jsx("span",{children:"Filter"}),e.jsx(g,{className:"size-3"})]}),e.jsxs(h,{transition:!0,anchor:"bottom start",className:"w-32 origin-top-right mt-1 rounded-xl border-[1.5px] bg-white transition duration-100 ease-out text-sm",children:[e.jsx("div",{className:"p-1",children:e.jsx(l,{children:e.jsx("button",{onClick:s=>r.reload({data:{status:""}}),className:"inline-flex w-full rounded-lg py-2 px-3 text-muted hover:bg-muted/10",children:"All"})})}),e.jsx("div",{className:"border-t-[1.5px]"}),e.jsx("div",{className:"p-1",children:e.jsx(l,{children:e.jsx("button",{onClick:s=>r.reload({data:{status:"verified"}}),className:"inline-flex w-full rounded-lg py-2 px-3 text-muted hover:bg-muted/10",children:"Verified"})})}),e.jsx("div",{className:"border-t-[1.5px]"}),e.jsx("div",{className:"p-1",children:e.jsx(l,{children:e.jsx("button",{onClick:s=>r.reload({data:{status:"pending"}}),className:"inline-flex w-full rounded-lg py-2 px-3 text-muted hover:bg-muted/10",children:"Pending"})})})]})]})}),e.jsx("div",{children:e.jsxs("div",{className:"relative bg-[#F9FAFB] flex items-center border-[#E5E7EB] rounded-lg border-2",children:[e.jsx("div",{className:"px-2",children:e.jsx(R,{className:"size-4 text-muted"})}),e.jsx("input",{type:"text",onBlur:s=>r.reload({data:{keyword:s.currentTarget.value}}),placeholder:"Search health practitioners",className:"pl-0 border-0 bg-transparent focus:ring-0 text-sm"})]})})]}),e.jsx("div",{className:"border-t ml-4"}),e.jsx("div",{children:e.jsx("div",{className:"overflow-x-auto relative",children:e.jsxs("table",{className:"border-b",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"S/N"}),e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Email"}),e.jsx("th",{children:"Phone"}),e.jsx("th",{children:"License No."}),e.jsx("th",{children:"Licence Doc"}),e.jsx("th",{children:"Other Document"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Consultations"}),e.jsx("th",{children:"Earnings"}),e.jsx("th",{})]})}),e.jsx("tbody",{children:t.data.map(s=>e.jsx(S,{user:s},s.id))})]})})}),e.jsx(j,{items:t})]})]})}export{H as default};