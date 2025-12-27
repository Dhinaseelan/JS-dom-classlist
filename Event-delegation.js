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