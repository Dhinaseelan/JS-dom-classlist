
let formel=document.querySelector(".formel");
let divel=document.querySelector(".divel");
let pel=document.querySelector(".pel");
formel.addEventListener("click",(event)=>{
    console.log(`where form ${event.target.tagName} this tag name ${formel.tagName}`)
})

divel.addEventListener("click",()=>{console.log(`div`)})
pel.addEventListener("click",()=>{console.log("p ")})
//fix-----------------------------------fix-----------------------------fix--------------------------fix
let formel=document.querySelector(".formel");
let divel=document.querySelector(".divel");
let pel=document.querySelector(".pel");
formel.addEventListener("click",(event)=>{
    console.log(`where form ${event.target.tagName} this tag name ${formel.tagName}`)
})

divel.addEventListener("click",(event)=>{console.log(`div`)
//adding stop propagation 
event.stopPropagation();
//this stop next bubbling the same name this is last bubbling
event.stopImmediatePropagation();
})
pel.addEventListener("click",()=>{console.log("p ")})
divel.addEventListener("click",()=>{console.log("last div")},)
//capturing enable ca[turing {caturing:true} third argument
formel.addEventListener("click",()=>{console.log("form")},{capture:true})
//for catch the capturing phase &  bubbling
for(let pro of document.querySelectorAll("form, form *")){
    //capturing
    pro.addEventListener("click",()=>{console.log(`capturing phrase: ${pro.tagName} `)},{capture:true})j
    //bubbling phase
    pro.addEventListener("click",()=>{console.log(`bubbling phase:${pro.tagName}`)})
}
