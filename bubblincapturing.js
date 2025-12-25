
let formel=document.querySelector(".formel");
let divel=document.querySelector(".divel");
let pel=document.querySelector(".pel");
formel.addEventListener("click",(event)=>{
    console.log(`where form ${event.target.tagName} this tag name ${formel.tagName}`)
})

divel.addEventListener("click",()=>{console.log(`div`)})
pel.addEventListener("click",()=>{console.log("p ")})

