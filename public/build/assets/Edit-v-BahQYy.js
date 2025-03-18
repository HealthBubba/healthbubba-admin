import{r as d,j as e,q as N,W as _}from"./app-ftXI9cVP.js";import y from"./HealthPractitionersLayout-CrX-Zjpg.js";import{L as t}from"./Label-C7oQG5HQ.js";import{I as l}from"./Input-Dju4KE9z.js";import{I as i}from"./InputError-BgKSx_Wd.js";import{B as b}from"./Button-BcTPcfUB.js";import{S as C}from"./Select-k5e86XxT.js";import{T}from"./TextArea-C8nJ4Dag.js";import{B as D}from"./AuthenticatedLayout-IW32M0h8.js";import"./Badge-DR8YwSmu.js";import"./StatsItem-D4VqEeWb.js";import"./Swal-Dlp_AlR6.js";import"./Modal-CNl2o9eu.js";import"./portal-BKChLPJ4.js";import"./Disclose-DcHrlFcE.js";import"./label-DLQ4BpEP.js";import"./menu-B8dKKaI2.js";function E({title:r,titleId:a,...n},o){return d.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":a},n),r?d.createElement("title",{id:a},r):null,d.createElement("path",{fillRule:"evenodd",d:"M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z",clipRule:"evenodd"}))}const w=d.forwardRef(E);function A({value:r=null,onChange:a=null}){const[n,o]=d.useState(null),u=c=>{c.preventDefault(),a&&a(c.currentTarget.files),o(c.currentTarget.files[0])},m=d.useMemo(()=>n?URL.createObjectURL(n):r,[n]);return e.jsxs("div",{className:"flex items-center space-x-3",children:[e.jsx("div",{children:e.jsx("div",{className:"size-14 overflow-hidden rounded-md bg-gray-100 flex justify-center items-center",children:m?e.jsx("img",{src:m,className:"size-full object-cover",alt:""}):e.jsx(w,{className:"size-8 text-gray-400"})})}),e.jsx("input",{type:"file",onChange:u})]})}function q(){var o,u,m,c,x,h,p,j,f,v,g;const{props:{user:{data:r}}}=N(),a=_({first_name:r.first_name,last_name:r.last_name,phone:r.phone,email:r.email,dob:r.dob,sex:r.sex,address:r.address,picture:r.picture,bio:r.bio,title:r.title,years_of_experience:r.years_of_experience,clinic_affiliation:r.clinic_affiliation});function n(s){s.preventDefault(),a.post(route("practitioners.update",{user:r.id}),{onSuccess(){D.success("Health Practitioner Updated")}})}return e.jsx(y,{title:"Edit",children:e.jsxs("form",{onSubmit:n,className:"space-y-5",children:[e.jsxs("div",{className:"md:w-1/2 space-y-3",children:[e.jsx("div",{children:e.jsx("h4",{className:"font-semibold",children:"Personal Information"})}),e.jsxs("div",{className:"grid grid-cols-2 gap-5",children:[e.jsxs("div",{className:"col-span-full",children:[e.jsx(t,{children:"Profile Image"}),e.jsx(A,{value:a.data.picture,onChange:s=>a.setData("picture",s[0])})]}),e.jsxs("div",{children:[e.jsx(t,{children:"First Name"}),e.jsx(l,{value:a.data.first_name,placeholder:"First Name",onChange:s=>a.setData("first_name",s.currentTarget.value)}),e.jsx(i,{message:(o=a.errors)==null?void 0:o.first_name})]}),e.jsxs("div",{children:[e.jsx(t,{children:"Last Name"}),e.jsx(l,{value:a.data.last_name,placeholder:"Last Name",onChange:s=>a.setData("last_name",s.currentTarget.value)}),e.jsx(i,{message:(u=a.errors)==null?void 0:u.last_name})]}),e.jsxs("div",{children:[e.jsx(t,{children:"Email Address"}),e.jsx(l,{value:a.data.email,placeholder:"Email Address",onChange:s=>a.setData("email",s.currentTarget.value)}),e.jsx(i,{message:(m=a.errors)==null?void 0:m.email})]}),e.jsxs("div",{children:[e.jsx(t,{children:"Phone Number"}),e.jsx(l,{value:a.data.phone,type:"tel",placeholder:"Phone Number",onChange:s=>a.setData("phone",s.currentTarget.value)}),e.jsx(i,{message:(c=a.errors)==null?void 0:c.phone})]}),e.jsxs("div",{children:[e.jsx(t,{children:"Date of Birth"}),e.jsx(l,{type:"date",value:a.data.dob,placeholder:"Email Address",onChange:s=>a.setData("dob",s.currentTarget.value)}),e.jsx(i,{message:(x=a.errors)==null?void 0:x.dob})]}),e.jsxs("div",{children:[e.jsx(t,{children:"Gender"}),e.jsxs(C,{value:a.data.sex,onChange:s=>a.setData("sex",s.currentTarget.value),children:[e.jsx("option",{value:"",children:"Select Gender"}),e.jsx("option",{value:"male",children:"Male"}),e.jsx("option",{value:"female",children:"Female"})]}),e.jsx(i,{message:(h=a.errors)==null?void 0:h.sex})]}),e.jsxs("div",{className:"col-span-full",children:[e.jsx(t,{children:"Address"}),e.jsx(l,{value:a.data.address,placeholder:"Address",onChange:s=>a.setData("address",s.currentTarget.value)}),e.jsx(i,{message:(p=a.errors)==null?void 0:p.address})]}),e.jsxs("div",{className:"col-span-full",children:[e.jsx(t,{children:"Personal Bio"}),e.jsx(T,{value:a.data.bio,rows:4,placeholder:"Bio",onChange:s=>a.setData("bio",s.currentTarget.value),className:"resize-none"}),e.jsx(i,{message:(j=a.errors)==null?void 0:j.bio})]})]}),e.jsx("div",{children:e.jsx(b,{className:"btn-primary",children:"Save Changes"})})]}),e.jsxs("div",{className:"md:w-1/2 space-y-3",children:[e.jsx("div",{children:e.jsx("h4",{className:"font-semibold",children:"Work Information"})}),e.jsxs("div",{className:"grid grid-cols-2 gap-5",children:[e.jsxs("div",{children:[e.jsx(t,{children:"Title"}),e.jsx(l,{value:a.data.title,placeholder:"Title",onChange:s=>a.setData("title",s.currentTarget.value)}),e.jsx(i,{message:(f=a.errors)==null?void 0:f.title})]}),e.jsxs("div",{children:[e.jsx(t,{children:"Years of Experience"}),e.jsx(l,{value:a.data.years_of_experience,placeholder:"Years of Experience",type:"number",onChange:s=>a.setData("years_of_experience",s.currentTarget.value)}),e.jsx(i,{message:(v=a.errors)==null?void 0:v.last_name})]}),e.jsxs("div",{className:"col-span-full",children:[e.jsx(t,{children:"Affiliated Clinic"}),e.jsx(l,{value:a.data.clinic_affiliation,placeholder:"Clinic Affiliation",onChange:s=>a.setData("clinic_affiliation",s.currentTarget.value)}),e.jsx(i,{message:(g=a.errors)==null?void 0:g.clinic_affiliation})]})]}),e.jsx("div",{children:e.jsx(b,{className:"btn-primary",children:"Save Changes"})})]})]})})}export{q as default};
