import{j as e,r as p,q as u,W as j}from"./app-D6RhN8-2.js";import{B as f}from"./Button-BMWbTSE6.js";import{a as m}from"./InputError-WlPTD2od.js";function b({children:a,className:n,...t}){return e.jsx("div",{className:"",children:e.jsx("select",{className:`rounded-[8px] border border-[#F3F3F3] shadow-inner text-gray-500 w-full ${n}`,...t,children:a})})}function l({children:a,onChange:n,checked:t=!1,...o}){const[i,c]=p.useState(t),d=s=>{n&&n(s),c(s.currentTarget.checked)};return e.jsxs("label",{className:"flex items-center cursor-pointer focus:outline-none space-x-2 border-0 p-0 ",children:[e.jsxs("span",{className:`inline-flex items-center px-[2px] py-[3px] w-12 rounded-full transition-all duration-300 focus:outline-none shadow-switch ${i?" bg-[#3B82F6]":"bg-[#E5E7EB]"}`,children:[e.jsx("span",{className:`block rounded-full duration-500 w-5 h-5 bg-white ${i?"translate-x-[1.4rem]":"translate-x-[0.15rem]"}`}),e.jsx("input",{type:"checkbox",onChange:d,...o,className:"hidden",hidden:!0})]}),e.jsx("span",{className:"text-sm",children:a})]})}const r={create:"create",read:"read",update:"update",delete:"delete"},k=({admin:a})=>{var c,d;const{props:n}=u(),t=j({role:a.access_level,permissions:a.permissions}),o=()=>{t.post(route("admins.roles",{admin:a.id}))},i=(s,x)=>{s.currentTarget.checked?t.setData("permissions",[...t.data.permissions,x]):t.setData("permissions",t.data.permissions.filter((h,v)=>h!=x))};return e.jsxs("div",{className:"space-y-5",children:[e.jsxs("div",{children:[e.jsx("p",{className:"font-medium mb-1",children:"Role"}),e.jsxs(b,{onChange:s=>t.setData("role",s.currentTarget.value),defaultValue:a.access_level,children:[e.jsx("option",{value:"",disabled:!0,children:"Select Role"}),Object.keys(n.roles).map(s=>e.jsx("option",{value:s,children:n.roles[s]},s))]}),e.jsx(m,{message:(c=t.errors)==null?void 0:c.role})]}),e.jsx("div",{className:"border-t"}),e.jsxs("div",{children:[e.jsx("p",{className:"font-medium text-base mb-5",children:"Permission"}),e.jsxs("div",{className:"space-y-3 text-[#525254]",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("div",{children:e.jsx("p",{className:"text-base",children:"Create"})}),e.jsx("div",{children:e.jsx(l,{onChange:s=>i(s,r.create),checked:t.data.permissions.includes(r.create)})})]}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("div",{children:e.jsx("p",{className:"text-base",children:"Read"})}),e.jsx("div",{children:e.jsx(l,{onChange:s=>i(s,r.read),checked:t.data.permissions.includes(r.read)})})]}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("div",{children:e.jsx("p",{className:"text-base",children:"Update"})}),e.jsx("div",{children:e.jsx(l,{onChange:s=>i(s,r.update),checked:t.data.permissions.includes(r.update)})})]}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("div",{children:e.jsx("p",{className:"text-base",children:"Delete"})}),e.jsx("div",{children:e.jsx(l,{onChange:s=>i(s,r.delete),checked:t.data.permissions.includes(r.delete)})})]}),e.jsx(m,{message:(d=t.errors)==null?void 0:d.permissions}),e.jsx("div",{className:"pt-3",children:e.jsx(f,{onClick:o,className:"btn-primary w-full",children:"Update Changes"})})]})]})]})};export{k as EditRoles};
