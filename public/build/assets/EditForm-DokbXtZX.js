import{W as n,q as p,j as e}from"./app-Bk8a7IP6.js";import{B as h}from"./Button-DImZIBh7.js";import{I as o}from"./Input-DopVFoXv.js";import{I as l}from"./InputError-ggU1Q08a.js";import{L as t,P as m}from"./Password-CetGzc9h.js";import{S as x}from"./Select-Bg5Vi94B.js";import{F as j}from"./PlayIcon-D1L59Tph.js";import"./Disclose-DPScjJfg.js";function C({admin:a=null}){const s=n({firstname:a==null?void 0:a.firstname,lastname:a==null?void 0:a.lastname,email:a==null?void 0:a.email,phone:a==null?void 0:a.phone,password:"",access_level:a==null?void 0:a.access_level}),{props:c}=p(),u=r=>{r.preventDefault(),s.post(route("admins.update",{admin:a==null?void 0:a.id}))};return e.jsxs("form",{onSubmit:u,className:"space-y-3",children:[e.jsxs("div",{children:[e.jsx(t,{children:"First name"}),e.jsx(o,{onChange:r=>s.setData("firstname",r.currentTarget.value),value:s.data.firstname,placeholder:"First Name",className:"w-full"}),e.jsx(l,{message:s.errors.firstname})]}),e.jsxs("div",{children:[e.jsx(t,{children:"Last name"}),e.jsx(o,{onChange:r=>s.setData("lastname",r.currentTarget.value),value:s.data.lastname,placeholder:"Last Name",className:"w-full"}),e.jsx(l,{message:s.errors.lastname})]}),e.jsxs("div",{children:[e.jsx(t,{children:"Email Address"}),e.jsx(o,{onChange:r=>s.setData("email",r.currentTarget.value),value:s.data.email,placeholder:"Email Address",className:"w-full"}),e.jsx(l,{message:s.errors.email})]}),e.jsxs("div",{children:[e.jsx(t,{children:"Phone Number"}),e.jsx(o,{onChange:r=>s.setData("phone",r.currentTarget.value),value:s.data.phone,placeholder:"Phone Number",className:"w-full"}),e.jsx(l,{message:s.errors.phone})]}),e.jsxs("div",{children:[e.jsx(t,{children:"Select Role"}),e.jsxs(x,{onChange:r=>s.setData("access_level",r.currentTarget.value),value:s.data.access_level,className:"w-full",children:[e.jsx("option",{value:"",disabled:!0,children:"Select Role"}),Object.keys(c.roles).map(r=>e.jsx("option",{value:r,children:c.roles[r]}))]}),e.jsx(l,{message:s.errors.access_level})]}),e.jsxs("div",{children:[e.jsx(t,{children:"Default Password"}),e.jsx(m,{onChange:r=>s.setData("password",r.currentTarget.value),value:s.data.password,placeholder:"Password",autoComplete:"off",className:"w-full"}),e.jsx(l,{message:s.errors.password})]}),e.jsx("div",{className:"pt-3",children:e.jsxs(h,{className:"btn-primary w-full",children:["Create User ",e.jsx(j,{className:"size-4 text-white/50"})," "]})})]})}export{C as default};