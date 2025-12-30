const formval=document.forms.Feedback;// accessing forms by form name
// const formval=document.forms[0]-------------------->;//accessing form by index value
//---------------------------------------------------------------
//------------->accessing elements by index-----------------------
//const fullname=formval.elements[0];
// const typeEl=formval.elements[1];
// const email=formval.elements.[2];
// const discip=formval.elements[3];
//------------->accessing elements by name-----------------------

// const fullname=formval.elements.name;
// const typeEl=formval.elements.type;
// const email=formval.elements.email;
// const discip=formval.elements.discription;
// console.log(fullname.placeholder);
console.log("kathir")
console.log(formval);
//accessing elements by object destrucing
const {name,type,email,discription}=formval.elements;
console.log(name,type,email,discription);