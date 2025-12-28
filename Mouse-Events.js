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