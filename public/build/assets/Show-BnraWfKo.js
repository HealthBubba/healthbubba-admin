import{j as e,Y as r,a}from"./app-BvifYBTD.js";import{D as d}from"./AuthenticatedLayout-BtlP21bc.js";import{C as i}from"./Currency-Cz-uUnpk.js";import{B as l}from"./Badge-Cj02IQfJ.js";import"./menu-fubnc1RW.js";import"./label-DVpZ61KM.js";import"./portal-qTpPLRU3.js";import"./Disclose-DCPOSFYp.js";function u({transaction:s}){return e.jsxs(d,{title:"Transaction - "+s.reference,children:[e.jsx(r,{title:"Transaction - "+s.reference}),e.jsx("div",{className:"card",children:e.jsxs("div",{className:"card-body grid md:grid-cols-3 gap-5",children:[e.jsxs("div",{children:[e.jsx("p",{className:"font-medium",children:"User"}),e.jsx(a,{href:route("patients.show",{user:s.user.id}),className:"link",children:s.user.full_name})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-medium",children:"Reference"}),e.jsx("div",{className:"text-gray-600",children:s.reference})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-medium",children:"Transaction Type"}),e.jsx("div",{className:"text-gray-600",children:s.type})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-medium",children:"Amount"}),e.jsxs("div",{className:"text-gray-600",children:[e.jsx(i,{}),s.amount]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"font-medium",children:"Status"}),e.jsx("div",{className:"text-gray-600",children:e.jsx(l,{status:s.status,children:s.status})})]}),e.jsxs("div",{className:"col-span-full",children:[e.jsx("p",{className:"font-medium",children:"Transaction Date"}),e.jsx("div",{className:"text-gray-600",children:s.date})]}),e.jsxs("div",{className:"col-span-full",children:[e.jsx("p",{className:"font-medium",children:"Reason"}),e.jsx("div",{className:"text-gray-600",children:s.reason})]})]})})]})}export{u as default};
