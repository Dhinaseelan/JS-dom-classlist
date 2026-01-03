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
// console.log("kathir")
// console.log(formval);
//accessing elements by object destrucing
// const {name,type,email,discription}=formval.elements;
// console.log(name,type,email,discription);
const handleform=(event)=>{
    event.preventDefault()
    const formdata=new FormData(formval);
    const data=[...formdata.entries()];
    const datastring= data.map((key,value)=>`${encodeURIComponent(key)}=${encodeURIComponent(value)}`).join("&");
    console.log("old:",datastring);
    const urlsearch=new URLSearchParams(formdata).toString();
    console.log("urlspar:",urlsearch);
    //converting json format
    const prejson=Object.fromEntries(formdata);
    console.log(JSON.stringify(prejson));

    
   
    

}//this old method data to server formating
const handleformdata=(e)=>{
    const formData=e.formData;
    console.log(formData);
    //you can adding new key and value to formdata
    formData.append("myname","kathir");
    //this method delete a particular key and value
    formData.delete("name");
    //the entries method is you do get all key and value
   console.log( [...formData.entries()]);
   //has method is used to a particular data is present or not it present it returns true it not present it return false
    console.log(formData.has("name"));
    //it returns the entier keys of form data
    console.log([...formData.key()]);
    //it return the entier values of the formdata
    console.log([...formData.values()])}


formval.addEventListener("submit",handleform);
formval.addEventListener("formdata",handleformdata);
