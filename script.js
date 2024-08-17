let btn = document.querySelector(".copy-button")
let btn1 = document.querySelector(".btn1")
let btn2 = document.querySelector(".btn2")
let btn3 = document.querySelector(".btn3")


let copy = 0 

const companyNames = [
    {
        id: 1,
        Name: 'mivi',
        imgSrc: 'MIVI_LOGO_.png' ,
        link :'https://www.instagram.com/reel/C-FDSH3xgmk/'
    },
    {
        id: 2,
        Name: 'hmd',
        imgSrc: 'HMD.png'
    },
    {
        id: 3,
        Name: 'adcom',
        imgSrc: 'adcom.png'
    },
    {
        id: 4,
        Name: 'gold',
        imgSrc: 'goldensand-logo_6786a98f-8ed3-4d6a-8d61-0effc9477646_260x.avif'
    },
    {
        id: 5,
        Name: 'costar',
        imgSrc: 'logo_d0a2c8eb-db67-42be-9b31-6dfca78cf4cf_310x.avif'
    },
    {
        id: 6,
        Name: 'urban',
        imgSrc: 'image-removebg-preview (6).png'
    }
];

const container = document.getElementById('company');

companyNames.forEach(company => {
    const img = document.createElement('img');
    img.className = company.Name;
    img.src = company.imgSrc;
    img.alt = company.Name;
    img.onclick = () => {
      window.open(company?.link, '_blank');
    }
    container.appendChild(img);
});


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


