let c1=document.getElementById("chapter01");
let cBox = document.querySelector(".chapter-1");






c1.addEventListener("click", ()=>{
    cBox.style.display="flex";
});


// back button js 

function goBack(){
    cBox.style.display="none";
}