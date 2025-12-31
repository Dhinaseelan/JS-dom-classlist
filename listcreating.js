document.addEventListener("keyup",(event)=>{
    console.log(event.target);
    switch(event.key){
        case "ArrowUp":
            alert(" you clicked the Uparrow");
            break;
        case "ArrowDown":
            alert("you clicked down arrow");
            break;
        case "ArrowLeft":
            --alert("you cliked left arrow");    
        case "ArrowRight":
            alert("you clicked right arrow");
            break;
        default:
            alert("you clicked wrong button");
            break;
    }
})