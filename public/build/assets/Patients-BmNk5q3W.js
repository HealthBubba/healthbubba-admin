import{r as l,j as e,y as t,Y as m}from"./app-CAUEZc0i.js";import{P as h}from"./Pagination-DWuoVxcy.js";import{S as j}from"./SettingIcon-C6Dws3sq.js";import{r as o,I as c,g as x,E as d,D as p,F as f}from"./AuthenticatedLayout-pxGpmzW_.js";import{B as g}from"./Badge-CQqSYJT2.js";import{C as b}from"./Currency-BDUNyYnt.js";import{S as i}from"./Swal-bun7Bi3r.js";import{F as v}from"./MagnifyingGlassIcon-BXedVAgB.js";import"./Disclose-Cba31f_p.js";import"./Button-wM9EFlir.js";function N({title:s,titleId:r,...a},n){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:n,"aria-labelledby":r},a),s?l.createElement("title",{id:r},s):null,l.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"}))}const w=l.forwardRef(N);function y({patient:s}){var n;const r=u=>{t.get(route("users.suspend",{user:s.id}))},a=u=>{t.get(route("patients.destroy",{user:s.id}))};return e.jsxs("tr",{children:[e.jsx("td",{children:s.no}),e.jsx("td",{children:s.full_name}),e.jsx("td",{children:s.email}),e.jsx("td",{children:s.phone}),e.jsx("td",{children:(n=s==null?void 0:s.next_appointment_date)==null?void 0:n.date}),e.jsx("td",{children:e.jsx(g,{className:"capitalize",status:s.status,children:s.status})}),e.jsx("td",{children:s.appointments_count}),e.jsxs("td",{children:[e.jsx(b,{}),s.transactions_sum.toLocaleString()]}),e.jsx("td",{children:e.jsxs(o,{children:[e.jsx(c,{className:"border-2 p-1 rounded-lg",children:e.jsx(w,{className:"size-5"})}),e.jsxs(x,{transition:!0,anchor:"bottom end",className:"w-32 origin-top-right mt-1 rounded-xl border-[1.5px] bg-white transition duration-100 ease-out text-sm",children:[e.jsx("div",{className:"p-1",children:e.jsx(d,{children:e.jsx(i,{title:s.is_active?"Suspend User":"Restore User",type:s.is_active?"warning":"success",confirmLabel:s.is_active?"Suspend User":"Restore User",onConfirm:r,caption:`Are you sure you want to ${s.is_active?"suspend":"restore"} this user's account?`,className:"inline-flex w-full rounded-lg py-2 px-3 text-muted hover:bg-muted/10",children:s.is_active?"Suspend":"Restore"})})}),e.jsx("div",{className:"border-t-[1.5px]"}),e.jsx("div",{className:"p-1",children:e.jsx(d,{children:e.jsx(i,{title:"Delete User Account",type:"danger",onConfirm:a,caption:"Are you sure you want to delete this user's account? This action cannot be undone.",className:"inline-flex w-full rounded-lg py-2 px-3 text-muted hover:bg-muted/10",children:"Delete"})})})]})]})})]})}function B({patients:s}){return e.jsxs(p,{title:"Patients",children:[e.jsx(m,{title:"Patients"}),e.jsxs("div",{className:"card p-0 rounded-xl",children:[e.jsxs("div",{className:"p-4 flex space-x-2",children:[e.jsx("div",{children:e.jsxs(o,{children:[e.jsxs(c,{className:"border-2 p-1 h-full px-3 items-center space-x-1 text-sm rounded-lg inline-flex",children:[e.jsx(j,{className:"size-5"}),e.jsx("span",{children:"Filter"}),e.jsx(f,{className:"size-3"})]}),e.jsxs(x,{transition:!0,anchor:"bottom start",className:"w-32 origin-top-right mt-1 rounded-xl border-[1.5px] bg-white transition duration-100 ease-out text-sm",children:[e.jsx("div",{className:"p-1",children:e.jsx(d,{children:e.jsx("button",{onClick:r=>t.reload({data:{status:""}}),className:"inline-flex w-full rounded-lg py-2 px-3 text-muted hover:bg-muted/10",children:"All"})})}),e.jsx("div",{className:"border-t-[1.5px]"}),e.jsx("div",{className:"p-1",children:e.jsx(d,{children:e.jsx("button",{onClick:r=>t.reload({data:{status:"active"}}),className:"inline-flex w-full rounded-lg py-2 px-3 text-muted hover:bg-muted/10",children:"Active"})})}),e.jsx("div",{className:"border-t-[1.5px]"}),e.jsx("div",{className:"p-1",children:e.jsx(d,{children:e.jsx("button",{onClick:r=>t.reload({data:{status:"suspended"}}),className:"inline-flex w-full rounded-lg py-2 px-3 text-muted hover:bg-muted/10",children:"Suspended"})})})]})]})}),e.jsx("div",{children:e.jsxs("div",{className:"relative bg-[#F9FAFB] flex items-center  border-[#E5E7EB] rounded-lg border-2",children:[e.jsx("div",{className:"px-2",children:e.jsx(v,{className:"size-4 text-muted"})}),e.jsx("input",{type:"text",onChange:r=>t.reload({data:{keyword:r.currentTarget.value}}),placeholder:"Search Patients",className:"pl-0 border-0 bg-transparent focus:ring-0 text-sm"})]})})]}),e.jsx("div",{className:"border-t ml-4"}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"border-b",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"S/N"}),e.jsx("th",{children:"Name"}),e.jsx("th",{children:"Email Address"}),e.jsx("th",{children:"Phone No."}),e.jsx("th",{children:"Next Appointment"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Consultations"}),e.jsx("th",{children:"Total Payments"}),e.jsx("th",{})]})}),e.jsx("tbody",{children:s.data.map(r=>e.jsx(y,{patient:r},r.id))})]})}),e.jsx(h,{items:s})]})]})}export{B as default};