import{q as t,j as i,Y as s}from"./app-ftXI9cVP.js";import{D as o}from"./AuthenticatedLayout-IW32M0h8.js";import l from"./QualificationItem-CNBFWjm2.js";import{P as d}from"./Pagination--MOQ7N9M.js";import{B as n}from"./Button-BcTPcfUB.js";import{u as m}from"./Swal-Dlp_AlR6.js";import c from"./EditQualificationModal-BeT934PR.js";import{F as p}from"./MagnifyingGlassIcon-DQn-oin3.js";import"./menu-B8dKKaI2.js";import"./label-DLQ4BpEP.js";import"./portal-BKChLPJ4.js";import"./Disclose-DcHrlFcE.js";import"./EllipsisHorizontalIcon-Ciu8GU-j.js";import"./Modal-CNl2o9eu.js";import"./Input-Dju4KE9z.js";import"./InputError-BgKSx_Wd.js";import"./Label-C7oQG5HQ.js";function k(){const{qualifications:a}=t().props,r=m();return i.jsxs(o,{title:"Manage Qualifications",children:[i.jsx(s,{title:"Manage Qualifications"}),i.jsxs("div",{className:"card p-0 rounded-xl",children:[i.jsxs("div",{className:"p-4 md:flex md:justify-between space-y-2 md:space-x-2",children:[i.jsx("div",{children:i.jsxs("div",{className:"relative bg-[#F9FAFB] flex items-center border-[#E5E7EB] rounded-lg border-2",children:[i.jsx("div",{className:"px-2",children:i.jsx(p,{className:"size-4 text-muted"})}),i.jsx("input",{type:"text",onChange:e=>router.reload({data:{keyword:e.currentTarget.value}}),placeholder:"Search Qualifications",className:"pl-0 border-0 bg-transparent focus:ring-0 text-sm"})]})}),i.jsx("div",{children:i.jsx(n,{className:"btn-primary",onClick:r.open,children:"Create Qualification"})})]}),i.jsx("div",{className:"overflow-x-auto relative",children:i.jsxs("table",{className:"border-b",children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{children:"Qualification"}),i.jsx("th",{})]})}),i.jsx("tbody",{children:a.data.map(e=>i.jsx(l,{qualification:e},e.qualification_id))})]})}),i.jsx(d,{items:a})]}),i.jsx(c,{modal:r})]})}export{k as default};
