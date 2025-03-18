import{j as e,Y as l,y as d}from"./app-ftXI9cVP.js";import{Z as n,_ as o}from"./useSearchParams-FdPLDvAI.js";import{P as c}from"./Pagination--MOQ7N9M.js";import{S as m}from"./SettingIcon-jRV-Chtc.js";import{D as x,a as h}from"./AuthenticatedLayout-IW32M0h8.js";import{T as p}from"./TransactionItem-C37RlwUk.js";import{r as j,I as u,g as f,E as t}from"./menu-B8dKKaI2.js";import"./Disclose-DcHrlFcE.js";import"./Badge-DR8YwSmu.js";import"./Currency-BGw_qayw.js";import"./Swal-Dlp_AlR6.js";import"./Modal-CNl2o9eu.js";import"./portal-BKChLPJ4.js";import"./Button-BcTPcfUB.js";import"./TableLink-CeOE-nXS.js";import"./EllipsisHorizontalIcon-CiEtcHyn.js";import"./label-DLQ4BpEP.js";function C({transactions:r}){var i;const a=n();return e.jsxs(x,{title:"Transactions",children:[e.jsx(l,{title:"Transactions"}),e.jsxs("div",{className:"card p-0 rounded-xl",children:[e.jsxs("div",{className:"justify-between items-center md:flex p-4",children:[e.jsx("div",{children:e.jsx("h4",{className:"font-semibold",children:"Transactions"})}),e.jsxs("div",{className:"md:flex space-y-2 md:space-y-0 md:space-x-2",children:[e.jsx("div",{children:e.jsx(o,{val:{endDate:a.endDate,startDate:a.startDate},onChange:s=>d.reload({data:s})})}),e.jsx("div",{children:e.jsxs(j,{children:[e.jsxs(u,{className:"border-2 py-2 h-full px-3 items-center space-x-1 text-sm rounded-lg inline-flex font-medium",children:[e.jsx(m,{className:"size-5"}),e.jsx("span",{children:"All Status"}),e.jsx(h,{className:"size-3"})]}),e.jsxs(f,{transition:!0,anchor:"bottom start",className:"w-32 origin-top-right mt-1 rounded-xl border-[1.5px] bg-white transition duration-100 ease-out text-sm",children:[e.jsx("div",{className:"p-1",children:e.jsx(t,{children:e.jsx("button",{className:"inline-flex w-full rounded-lg py-2 px-3 text-muted hover:bg-muted/10",children:"All"})})}),e.jsx("div",{className:"border-t-[1.5px]"}),e.jsx("div",{className:"p-1",children:e.jsx(t,{children:e.jsx("button",{className:"inline-flex w-full rounded-lg py-2 px-3 text-muted hover:bg-muted/10",children:"Successful"})})}),e.jsx("div",{className:"border-t-[1.5px]"}),e.jsx("div",{className:"p-1",children:e.jsx(t,{children:e.jsx("button",{className:"inline-flex w-full rounded-lg py-2 px-3 text-muted hover:bg-muted/10",children:"Failed"})})}),e.jsx("div",{className:"border-t-[1.5px]"}),e.jsx("div",{className:"p-1",children:e.jsx(t,{children:e.jsx("button",{className:"inline-flex w-full text-sm rounded-lg py-2 px-3 text-muted hover:bg-muted/10",children:"Processing"})})})]})]})})]})]}),e.jsx("div",{className:"border-t ml-4"}),e.jsxs("div",{className:"overflow-x-auto",children:[e.jsxs("table",{className:"border-b",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Transaction ID"}),e.jsx("th",{children:"Date/Time"}),e.jsx("th",{children:"Patient name"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Amount"}),e.jsx("th",{children:"Status"})]})}),e.jsx("tbody",{children:r.data.map(s=>e.jsx(p,{transaction:s},s.id))})]}),((i=r.data)==null?void 0:i.length)<1?e.jsx("p",{className:"text-center py-3",children:"No records found"}):""]}),e.jsx(c,{items:r})]})]})}export{C as default};
