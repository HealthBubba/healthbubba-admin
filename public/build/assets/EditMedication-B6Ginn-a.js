import{W as g,q as h,j as e}from"./app-DhgupAbr.js";import{B as p}from"./Button-CTZHf8AQ.js";import{I as u}from"./Input-DC3_shtb.js";import{I as t}from"./InputError-BJkmRvyM.js";import{L as i}from"./Label-esAuhokH.js";import{S as _}from"./Select-DoFnJpJO.js";import{T as v}from"./TextArea-_O8qdAo_.js";import{M as f}from"./Modal-CEp8H5Zb.js";import"./portal-CJna2tiA.js";function E({medication:s=null,...n}){var c,o,d,l,m;const r=g({medication_name:s==null?void 0:s.name,medication_desc:s==null?void 0:s.description,medication_category:(c=s==null?void 0:s.category)==null?void 0:c.id,medication_pic:null,medication_price:s==null?void 0:s.price}),x=()=>{r.post(s?route("medications.update",{medication:s.id}):route("medications.store"),{onSuccess(){s&&n.close()}})},{categories:j}=h().props;return e.jsx(f,{...n,children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx(i,{children:"Medication Name"}),e.jsx(u,{value:r.data.medication_name,onChange:a=>r.setData("medication_name",a.currentTarget.value)}),e.jsx(t,{message:(o=r.errors)==null?void 0:o.medication_name})]}),e.jsxs("div",{children:[e.jsx(i,{children:"Medication Description"}),e.jsx(v,{value:r.data.medication_desc,onChange:a=>r.setData("medication_desc",a.currentTarget.value)}),e.jsx(t,{message:(d=r.errors)==null?void 0:d.medication_desc})]}),e.jsxs("div",{children:[e.jsx(i,{children:"Medication Category"}),e.jsx(_,{value:r.data.medication_category,onChange:a=>r.setData("medication_category",a.currentTarget.value),children:j.map(a=>e.jsx("option",{value:a.id,children:a.name}))}),e.jsx(t,{message:(l=r.errors)==null?void 0:l.medication_desc})]}),e.jsxs("div",{children:[e.jsx(i,{children:"Medication Price"}),e.jsx(u,{value:r.data.medication_price,onChange:a=>r.setData("medication_price",a.currentTarget.value)}),e.jsx(t,{message:(m=r.errors)==null?void 0:m.medication_price})]}),e.jsxs("div",{className:"flex justify-end space-x-3",children:[e.jsx(p,{role:"button",onClick:n.close,className:"",children:"Cancel"}),e.jsx(p,{onClick:x,loading:r.processing,className:"btn-primary",children:"Save"})]})]})})}export{E as default};
