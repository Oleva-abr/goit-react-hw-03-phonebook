(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{2:function(t,e,n){t.exports={formWrapper:"contactForm_formWrapper__p-9bj",label:"contactForm_label__CW3By",btn:"contactForm_btn__3R-6o",input:"contactForm_input__tNG_S"}},20:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(10),o=n.n(r),s=(n(18),n(12)),i=n(3),u=n(4),l=n(6),b=n(5),m=n(11),h=n(21),j=n(2),f=n.n(j),p=n(0),d=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.createIdName=Object(h.a)(),t.createIdNumber=Object(h.a)(),t.handleInputChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(m.a)({},a,c))},t.submitContact=function(e){e.preventDefault(),t.props.OnSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(p.jsx)("div",{className:f.a.formWrapper,children:Object(p.jsxs)("form",{onSubmit:this.submitContact,children:[Object(p.jsxs)("label",{className:f.a.label,children:["Name",Object(p.jsx)("input",{className:f.a.input,type:"name",name:"name",value:this.state.name,onChange:this.handleInputChange})]}),Object(p.jsxs)("label",{className:f.a.label,children:["Number",Object(p.jsx)("input",{className:f.a.input,type:"tel",name:"number",value:this.state.number,onChange:this.handleInputChange})]}),Object(p.jsx)("button",{className:f.a.btn,type:"submit",children:"Add contact"})]})})}}]),n}(a.Component),O=n(7),_=n.n(O),v=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(p.jsx)("ul",{className:_.a.contactList,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(p.jsxs)("li",{className:_.a.item,children:[a,": ",c,Object(p.jsx)("button",{className:_.a.btn,onClick:function(){return n(e)},children:"Delete"})]},e)}))})},C=n(9),x=n.n(C),g=function(t){var e=t.value,n=t.onChange;return Object(p.jsxs)("label",{className:x.a.filter,children:["Find contacts by name:",Object(p.jsx)("input",{className:x.a.input,type:"text",value:e,onChange:n})]})},N=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.addContact=function(e){var n=t.state.contacts,a={id:Object(h.a)(),name:e.name,number:e.number};n.map((function(t){return t.name.toLowerCase()})).includes(e.name.toLowerCase())?alert("".concat(e.name," is already in contacts")):t.setState((function(t){return{contacts:[a].concat(Object(s.a)(t.contacts))}}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.filtercontact=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts");null!==t&&this.setState({contacts:JSON.parse(t)})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"Phonebook"}),Object(p.jsx)(d,{OnSubmit:this.addContact}),Object(p.jsx)("h2",{children:"Contacts"}),Object(p.jsx)(g,{value:this.state.filter,onChange:this.changeFilter}),Object(p.jsx)(v,{contacts:this.filtercontact(),onDeleteContact:this.deleteContact})]})}}]),n}(a.Component);o.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(N,{})}),document.getElementById("root"))},7:function(t,e,n){t.exports={contactList:"contactList_contactList__cvL6_",item:"contactList_item__YdFrP",btn:"contactList_btn__Tuk8W"}},9:function(t,e,n){t.exports={filter:"filter_filter__1p_fV",input:"filter_input__AmSfc"}}},[[20,1,2]]]);
//# sourceMappingURL=main.fb576d1a.chunk.js.map