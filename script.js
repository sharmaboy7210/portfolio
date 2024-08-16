let btn = document.querySelector(".copy-button")
let btn1 = document.querySelector(".btn1")
let btn2 = document.querySelector(".btn2")
let btn3 = document.querySelector(".btn3")


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


let connectbtn = document.querySelector(".connect")

connectbtn.addEventListener("click", ()=>{
    alert("✨Connect with Mohit Sharma Now!✨ \n \nTap OK to begin an exciting conversation and explore new possibilities! 🌟👋 ")
    window.location.href ="https://www.linkedin.com/in/sharmaboy7210/"
})


btn1.addEventListener("click", function(){
    window.location.href = "https://www.instagram.com/sharmaboy7210/reels/"
})

btn2.addEventListener("click", function(){
    window.location.href = "https://www.youtube.com/watch?v=vxd50n6kxM8&list=PL-oqR2CR6Rca9wJGisREn68DuI6p_8vL9&pp=iAQB"
})

btn1.addEventListener("click", function(){
    window.location.href = "https://www.instagram.com/reel/C-FDSH3xgmk/"
})


