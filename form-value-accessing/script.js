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
    const jsondata=JSON.stringify(Object.fromEntries(formdata));
    const prejson=Object.fromEntries(formdata);
    console.log(JSON.stringify(prejson));

    //sending data to backend using XMLHttprequest
    // const xmlhreq= new XMLHttpRequest()
    // xmlhreq.open("GET","https://reqres.in/api/users/2",true);
    // xmlhreq.onload=()=>{
    //     console.log(JSON.parse(xmlhreq.responseText))
    // };
    // xmlhreq.send()  
    //fetch method 
    fetch("https://jsonplaceholder.typicode.com/users",{
        method:"GET",
        // headers:{
        //     "Content-Type":"application/json"//MIME
        // },
        // body:jsondata;
    }).then(data=>data.json()).then((data)=>{document.getElementById("output").innerText=JSON.stringify(data[0])});

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
formval.name.addEventListener("change",(e)=>{document.getElementById("invate").innerText=`hello ${e.target.value} thank you for visiting`;});
//1.attributes
// formval.name.value="kathir";
// formval.name.disabled=true;
formval.name.readOnly=true;
//----------------------------------events--------------------------------------------//
formval.name.addEventListener("blur",()=>console.log("blur"));
formval.name.addEventListener("focus",()=>console.log("focused"));
//---------------------------------input-method---------------------------------------//
formval.name.focus();
formval.name.blur()
//--------------------------------- radio input Elements----------------------------------//
const radioinput=formval.elements.type;
const allradioin=[...radioinput];
//attributes
// allradioin.forEach((val)=>{
//     console.log(val.checked);
//     console.log(val.value)
// });
//-----------------------------------------------------------------------------------------------
//-----------------------------------events------------------------------------------------------
const goble=document.getElementById("radio-inputs");

goble.addEventListener("change",(e)=>{
        //method one
        // console.log(e.target.value);
        //metho two
       console.log(allradioin.find((checked)=>checked.checked).value);

})
//--------------------------------task---------------------------------------------------------------
goble.addEventListener("change",(e)=>{
    if(e.target.value=="contribution"){
        setTimeout(()=>alert(`thank you for your contribution`),1000)
    }
})
//-------------------------------------------------------------------------------------------------
//---------------------------------methods---------------------------------------------------------
allradioin[0].select();
allradioin[1].checked=true;

//----------------------------------------------------------------------------------
//---------------------------------get properties and method------------------------
// const hobbies=formval.elements.hobbies;
const terms=formval.elements.terms
// console.log(hobbies);
// const arrhoobies=[...hobbies]
// arrhoobies.forEach((val)=>{
//     console.log(val.checked);
// })
// console.log(arrhoobies[1].value);
//------------------------------------------------------------
//-------------------------------attributes------------------------
//=========================================================
terms.checked=true;
//==============================events==============================
terms.addEventListener("change",(e)=>{
    if(e.target.checked===true)alert("your aceptiing terms and condition")
    
})
//=============================method========================
terms.select();
terms.checked=true;
