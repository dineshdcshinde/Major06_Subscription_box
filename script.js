let annual = document.querySelector(".annual");
let sessional = document.querySelector(".sessional");

annual.addEventListener("click",()=>{
    annual.style.border= " 10px solid #fb6a66";
    sessional.style.border=" 10px solid transparent";
    console.log("i from annual")
});

sessional.addEventListener("click",()=>{
    annual.style.border= " 10px solid transparent";
    sessional.style.border="10px solid #fb6a66";
    console.log("i from sessioanl")
})