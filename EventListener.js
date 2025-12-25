let clicking=document.querySelector(".hello");
let addevent=()=>{
    console.log("hello world");
    //older way
    // clicking.removeEventListener("click",addevent);
}
//new way
clicking.addEventListener("click",addevent,{once:true});

