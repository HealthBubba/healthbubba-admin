import{j as e,y as i}from"./app-CenqEzKj.js";import{P as a}from"./Pagination-CGtxy7B1.js";import{S as c}from"./SettingIcon-CCiuENMG.js";import{D as x,r as o,I as m,F as h,g as j,E as d}from"./AuthenticatedLayout-CIcsZ9II.js";import{B as p}from"./Badge-zSofIOyV.js";import{S as l,D as n}from"./StatsItem-D_fQcWbX.js";import{F as u}from"./MagnifyingGlassIcon-s4EsEk3J.js";import"./Disclose-CYVs-0JW.js";function g({appointment:s}){var t,r;return e.jsxs("tr",{children:[e.jsx("td",{children:s.no}),e.jsx("td",{children:(t=s.patient)==null?void 0:t.full_name}),e.jsx("td",{children:(r=s.doctor)==null?void 0:r.full_name}),e.jsx("td",{children:"Payment"}),e.jsx("td",{children:s.status?"Completed":"Pending"}),e.jsx("td",{children:s.date}),e.jsx("td",{children:e.jsx(p,{status:s.payment_status?"paid":"unpaid",children:s.payment_status?"Paid":"Unpaid"})}),e.jsx("td",{children:"Bank Transfer"}),e.jsx("td",{children:"APPT56789"})]})}function S({appointments:s,stats:t}){return e.jsx(x,{title:"Manage Orders",children:e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"grid md:grid-cols-4 grid-cols-1 gap-3 mb-5",children:[e.jsx(l,{title:"Total Appointments",amount:t.total,direction:n.up,percentage:36}),e.jsx(l,{title:"Completed Appointments",amount:t.completed,direction:n.up,percentage:36}),e.jsx(l,{title:"Cancelled Appointments",amount:t.cancelled,direction:n.up,percentage:36}),e.jsx(l,{title:"Revenue Generated",amount:t.revenue,isPrice:!0,direction:n.up,percentage:36})]}),e.jsxs("div",{className:"card p-0 rounded-xl",children:[e.jsxs("div",{className:"p-4 md:flex space-y-2 md:space-x-2",children:[e.jsx("div",{children:e.jsxs(o,{children:[e.jsxs(m,{className:"border-2 p-1 font-medium h-full px-3 items-center space-x-1 text-sm rounded-lg inline-flex",children:[e.jsx(c,{className:"size-5"}),e.jsx("span",{children:"All Appointments"}),e.jsx(h,{className:"size-3"})]}),e.jsxs(j,{transition:!0,anchor:"bottom start",className:"min-w-32 origin-top-right mt-1 rounded-xl border-[1.5px] bg-white transition duration-100 ease-out text-sm",children:[e.jsx("div",{className:"p-1",children:e.jsx(d,{children:e.jsx("button",{className:"inline-flex w-full rounded-lg py-2 px-3 text-muted hover:bg-muted/10",children:"All Appointments"})})}),e.jsx("div",{className:"border-t-[1.5px]"}),e.jsx("div",{className:"p-1",children:e.jsx(d,{children:e.jsx("button",{className:"inline-flex w-full rounded-lg py-2 px-3 text-muted hover:bg-muted/10",children:"Confirmed Orders"})})}),e.jsx("div",{className:"border-t-[1.5px]"}),e.jsx("div",{className:"p-1",children:e.jsx(d,{children:e.jsx("button",{className:"inline-flex w-full rounded-lg py-2 px-3 text-muted hover:bg-muted/10",children:"Cancelled Orders"})})}),e.jsx("div",{className:"border-t-[1.5px]"}),e.jsx("div",{className:"p-1",children:e.jsx(d,{children:e.jsx("button",{className:"inline-flex w-full rounded-lg py-2 px-3 text-muted hover:bg-muted/10",children:"Completed Orders"})})})]})]})}),e.jsx("div",{children:e.jsxs("div",{className:"relative bg-[#F9FAFB] flex items-center border-[#E5E7EB] rounded-lg border-2",children:[e.jsx("div",{className:"px-2",children:e.jsx(u,{className:"size-4 text-muted"})}),e.jsx("input",{type:"text",onChange:r=>i.reload({data:{keyword:r.currentTarget.value}}),placeholder:"Search Appointments",className:"pl-0 border-0 bg-transparent focus:ring-0 text-sm"})]})})]}),e.jsx("div",{className:"border-t ml-4"}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"border-b",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"S/N"}),e.jsx("th",{children:"Patient name"}),e.jsx("th",{children:"Practitioner Name"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Order Date"}),e.jsx("th",{children:"Payment Status"}),e.jsx("th",{children:"Amount"}),e.jsx("th",{children:"Next Step"})]})}),e.jsx("tbody",{children:s.data.map(r=>e.jsx(g,{appointment:r},r.no))})]})}),e.jsx(a,{items:s})]})]})})}export{S as default};
