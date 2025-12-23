const showBtnEl=document.querySelector("#elebtn");
const inputcontainer=document.querySelector(".input-container")

showBtnEl.addEventListener("click",()=>{
  console.log("click")
  inputcontainer.classList.toggle("disable");
  if(inputcontainer.classList.contains("disable")){
    showBtnEl.innerText="SHOW DIV"
    showBtnEl.style.color="white";
    showBtnEl.style.backgroundColor="blue";
  }
  else{
    showBtnEl.innerText="HIDE DIV"
    showBtnEl.style.color="white";
    showBtnEl.style.backgroundColor="red";
  }
})