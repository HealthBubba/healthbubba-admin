import{j as e,Y as l,y as d}from"./app-DhgupAbr.js";import{P as o}from"./Pagination-BIQ_8iUu.js";import{S as m}from"./SettingIcon-Bv2_UIAQ.js";import{D as c,a as x}from"./AuthenticatedLayout-DvK4P4JL.js";import{A as p}from"./AppointmentItem-ByLB9ayc.js";import{S as r,D as i}from"./StatsItem-Q9MENQ4q.js";import{F as h}from"./MagnifyingGlassIcon-DPrNnKfh.js";import{r as j,I as u,g,E as n}from"./menu-dV7uO43n.js";import"./Disclose-BkQLdsHF.js";import"./Badge-DwBiG00-.js";import"./Currency-CZJzFq4A.js";import"./TableLink-CUtpSBdX.js";import"./portal-CJna2tiA.js";function I({appointments:a,stats:t}){return e.jsxs(c,{title:"Manage Appointments",children:[e.jsx(l,{title:"Manage Appointments"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"grid md:grid-cols-4 grid-cols-1 gap-3 mb-5",children:[e.jsx(r,{title:"Total Appointments",amount:t.total,direction:i.up,percentage:36}),e.jsx(r,{title:"Completed Appointments",amount:t.completed,direction:i.up,percentage:36}),e.jsx(r,{title:"Cancelled Appointments",amount:t.cancelled,direction:i.up,percentage:36}),e.jsx(r,{title:"Revenue Generated",amount:t.revenue,isPrice:!0,direction:i.up,percentage:36})]}),e.jsxs("div",{className:"card p-0 rounded-xl",children:[e.jsxs("div",{className:"p-4 md:flex space-y-2 md:space-x-2",children:[e.jsx("div",{children:e.jsxs(j,{children:[e.jsxs(u,{className:"border-2 p-1 font-medium h-full px-3 items-center space-x-1 text-sm rounded-lg inline-flex",children:[e.jsx(m,{className:"size-5"}),e.jsx("span",{children:"All Appointments"}),e.jsx(x,{className:"size-3"})]}),e.jsxs(g,{transition:!0,anchor:"bottom start",className:"min-w-32 origin-top-right mt-1 rounded-xl border-[1.5px] bg-white transition duration-100 ease-out text-sm",children:[e.jsx("div",{className:"p-1",children:e.jsx(n,{children:e.jsx("button",{className:"inline-flex w-full rounded-lg py-2 px-3 text-muted hover:bg-muted/10",children:"All Appointments"})})}),e.jsx("div",{className:"border-t-[1.5px]"}),e.jsx("div",{className:"p-1",children:e.jsx(n,{children:e.jsx("button",{className:"inline-flex w-full rounded-lg py-2 px-3 text-muted hover:bg-muted/10",children:"Confirmed Orders"})})}),e.jsx("div",{className:"border-t-[1.5px]"}),e.jsx("div",{className:"p-1",children:e.jsx(n,{children:e.jsx("button",{className:"inline-flex w-full rounded-lg py-2 px-3 text-muted hover:bg-muted/10",children:"Cancelled Orders"})})}),e.jsx("div",{className:"border-t-[1.5px]"}),e.jsx("div",{className:"p-1",children:e.jsx(n,{children:e.jsx("button",{className:"inline-flex w-full rounded-lg py-2 px-3 text-muted hover:bg-muted/10",children:"Completed Orders"})})})]})]})}),e.jsx("div",{children:e.jsxs("div",{className:"relative bg-[#F9FAFB] flex items-center border-[#E5E7EB] rounded-lg border-2",children:[e.jsx("div",{className:"px-2",children:e.jsx(h,{className:"size-4 text-muted"})}),e.jsx("input",{type:"text",onChange:s=>d.reload({data:{keyword:s.currentTarget.value}}),placeholder:"Search Appointments",className:"pl-0 border-0 bg-transparent focus:ring-0 text-sm"})]})})]}),e.jsx("div",{className:"border-t ml-4"}),e.jsx("div",{className:"overflow-x-auto relative",children:e.jsxs("table",{className:"border-b",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Patient name"}),e.jsx("th",{children:"Practitioner Name"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Order Date"}),e.jsx("th",{children:"Payment Status"}),e.jsx("th",{children:"Amount"})]})}),e.jsx("tbody",{children:a.data.map(s=>e.jsx(p,{appointment:s},s.no))})]})}),e.jsx(o,{items:a})]})]})]})}export{I as default};
