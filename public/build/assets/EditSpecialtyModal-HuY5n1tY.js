import{W as m,j as e}from"./app-DTXfO_M1.js";import{B as i}from"./Button-CXXq4qht.js";import{I as l}from"./Input-Dxg3YKAi.js";import{I as c}from"./InputError-BmXuuYBP.js";import{L as p}from"./Label-DCmL5hv4.js";import{M as d}from"./Modal-eh9MvMoi.js";import"./portal-DCXWZpKv.js";function S({modal:t,specialty:a=null}){var s;const r=m({specialty_name:a==null?void 0:a.specialty_name}),n=()=>{r.post(route("specialties.update",{specialty:a==null?void 0:a.specialty_id}),{onSuccess(){a||r.reset()}})};return e.jsx(d,{...t,children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx(p,{children:"Specialty"}),e.jsx(l,{name:"specialty_name",placeholder:"Specialty Name",value:r.data.specialty_name,onChange:o=>r.setData("specialty_name",o.currentTarget.value)}),e.jsx(c,{message:(s=r.errors)==null?void 0:s.specialty_name})]}),e.jsx("div",{children:e.jsx(i,{className:"btn-primary",onClick:n,children:"Save Changes"})})]})})}export{S as default};
