import{q as i,j as t}from"./app-21hr-4y7.js";import o from"./HealthPractitionersLayout-CaSrbXzS.js";import{P as a}from"./Pagination-B8C7a4WH.js";import n from"./DoctorTransactionItem-H_7pHPXB.js";import"./AuthenticatedLayout-DJP9Shvn.js";import"./Disclose-Bi8GMOkl.js";import"./Badge-Dn5c_TPx.js";import"./StatsItem-DFrXBfr2.js";import"./Swal-BnItVo33.js";import"./Button-FXnIFPIj.js";import"./Currency-BtIRrGUY.js";function y(){var s;const{props:{user:{data:c},transactions:r}}=i();return t.jsxs(o,{title:"Transactions",children:[t.jsxs("div",{className:"overflow-x-auto",children:[t.jsxs("table",{className:"border-b",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Transaction ID"}),t.jsx("th",{children:"Date/Time"}),t.jsx("th",{children:"Type"}),t.jsx("th",{children:"Amount"}),t.jsx("th",{children:"Status"})]})}),t.jsx("tbody",{children:r.data.map(e=>t.jsx(n,{transaction:e},e.id))})]}),((s=r.data)==null?void 0:s.length)<1?t.jsx("p",{className:"text-center py-3",children:"No records found"}):""]}),t.jsx(a,{items:r})]})}export{y as default};
