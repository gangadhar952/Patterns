const square=document.querySelector("#sqbtn")
const squareop=document.querySelector(".pattern1op")
let isvisible=false
square.addEventListener("click",()=>{
    if(isvisible){
        squareop.innerHTML=""
    }
    else{
        let pattern=""
    for(let i=0;i<6;i++){
        for(let j=0;j<6;j++){
            pattern+="*"
        }
        pattern+="<br>"
    }
    squareop.innerHTML=pattern
}
    isvisible=!isvisible
})
const tr=document.querySelector("#trbtn")
const trop=document.querySelector(".pattern2op")
tr.addEventListener("click",()=>{
    if(isvisible){
        trop.innerHTML=""
    }
    else{
        let pattern=""
    for(let i=0;i<6;i++){
        for(let j=0;j<i;j++){
            pattern+="*"
        }
        pattern+="<br>"
    }
    trop.innerHTML=pattern
}
    isvisible=!isvisible
})
const retr=document.querySelector("#retrbtn")
const retrop=document.querySelector(".pattern3op")
retr.addEventListener("click",()=>{
    if(isvisible){
        retrop.innerHTML=""
    }
    else{
        let pattern=""
    for(let i=0;i<6;i++){
        for(let j=i;j<6;j++){
            pattern+="*"
        }
        pattern+="<br>"
    }
    retrop.innerHTML=pattern
}
    isvisible=!isvisible
})