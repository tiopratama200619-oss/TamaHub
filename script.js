document.getElementById("exploreBtn").addEventListener("click", () => {

    document.getElementById("produk").scrollIntoView({
        behavior: "smooth"
    });



});
function filterGame(category){

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

if(category==="all"){

card.style.display="block";

}else{

if(card.dataset.category===category){

card.style.display="block";

}else{

card.style.display="none";

}

}

});

}
const search=document.getElementById("search");

search.addEventListener("keyup",()=>{

const keyword=search.value.toLowerCase();

document.querySelectorAll(".card").forEach(card=>{

const title=card.querySelector("h3").innerText.toLowerCase();

card.style.display=title.includes(keyword) ? "block" : "none";

});

});
document.getElementById("logo").onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

}
const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".menu a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(sec=>{

const top=window.scrollY;

if(top>=sec.offsetTop-150){

current=sec.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});
const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

topBtn.style.display=window.scrollY>500?"block":"none";

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

}