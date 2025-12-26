let formEl=document.querySelector("form");
let inputEl=document.querySelector("form input");
let checkboxEl=document.querySelector("form input[type='checkbox']");
formEl.addEventListener("submit",(event)=>{
    event.preventDefault();
    console.log(inputEl.value.length)
     if(!(checkboxEl.checked)){
        alert("click the terms and consditions");
        return
    }
    if(3>inputEl.value.length){
        alert("user name minimum 3 value");
        return
    }
    if(!(20>inputEl.value.length)){
        alert("user name maxmim 20 value");
        return
    }
    
    console.log(`form submitted  ${inputEl.value} ${checkboxEl.checked}`)
    //preventDefauld is used to prevent page refresh
    console.log("defaultprevented:",event.defaultPrevented);
   
    //defaultprevented is used to check preventDefauld is used or not
});