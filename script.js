let btn = document.querySelector(".copy-button")
let connectbtn = document.querySelector(".connect")

let copy = 0 

btn.addEventListener("click", function(){
    if(copy == 0){
        btn.innerHTML = "Copied"
        btn.style.backgroundColor = "black"
        btn.style.color = "white"
        navigator.clipboard.writeText("sharmamohit7210@gmail.com")
        copy = 1
    }else{
        btn.innerHTML = "Copy"
        btn.style.backgroundColor = "white"
        btn.style.color = "black"
        copy = 0
    }
});


connectbtn.addEventListener("click", ()=>{
    alert("✨Connect with Mohit Sharma Now!✨ \n \nTap OK to begin an exciting conversation and explore new possibilities! 🌟👋 ")
    window.location.href ="https://www.linkedin.com/in/sharmaboy7210/"
})




