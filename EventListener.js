// let clicking=document.querySelector(".hello");
// let addevent=()=>{
//     console.log("hello world");
//     //older way
//     // clicking.removeEventListener("click",addevent);
// }
// //new way
// clicking.addEventListener("click",addevent,{once:true});
//---------------------------------------------------------event delegation---------------------------------------------------------//
let selectedId;//this variable is used to active and deactive the row
const tabelval=document.querySelector("table");
tabelval.addEventListener("click",(event)=>{
    const target=event.target;
    const tr=target.closest("tr");
    if(target.tagName==="TH")return;//this condition ignor the header part of the table
    if(selectedId!=undefined)selectedId.classList.remove("active");
    selectedId=tr;
    console.log(event.target.innerText);
    tr.classList.add("active")
    // console.log(tr.children[0].innerText);
});
document.addEventListener("click",(event)=>{
    
    // console.log(event.target.dataset.toggleId);
    const id=event.target.dataset.toggleId;
    if(!id)return; //it ignore rest of all
    const ele=document.getElementById(id);
    ele.hidden=!ele.hidden;// hide and unhide donate form
})
const formel=document.querySelector("#donate-form");
formel.addEventListener("submit",(event)=>{
    event.preventDefault();
    const amt=event.target.querySelector("input").value;
    alert(`thank you for donating ${amt}`)
    console.log(amt);
})
document.addEventListener("copy",(event)=>{
    event.preventDefault();
    alert("copying is prohibited")
    
})
//small task to find which button you clicked in mouse
//mouseup
document.addEventListener("mouseup",(event)=>{
    // console.log(event);
    let btn;
    if(event.which==1){
        btn="left"
    }
    else if(event.which==3){
        btn="right"
    }
    else if(event.which==2){
        btn="middle"
    }
    alert(`you clicked ${btn} button`)
})


//mousedown
document.addEventListener("mousedown",(event)=>{
    console.log(event)
    
})
//mouseenter
document.addEventListener("mouseenter",(event)=>{
    console.log(event)
    
})
//mouseover
document.addEventListener("mouseover",(event)=>{
    console.log(event)
    
})
//mousemove it moniter every px of you mouse
document.addEventListener('mousemove',(event)=>{
    console.log(event)
    
})
//mouseleave when you leave the selected area it will trige
document.addEventListener("mouseleave",(event)=>{
    console.log(event)
    
})