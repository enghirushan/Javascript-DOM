//getElementById===>not array Type

let heading =document.getElementById("heading")
heading.textContent="Haritha ilangasinghe";
heading.style.color="Red";
heading.style.fontFamily="arial";
 

//getElementsByClassName===>array Type

const section =document.getElementsByClassName("section");
 for(let i=0;i<section.length;i++){
    section[i].style.color="#18182d";
    section[i].style.fontFamily="poppins";
    section[i].style.fontSize="25px";

 }


 //getElementsByTagName===>array Type

 const imgarea =document.getElementById("imgarea");
 const img = imgarea.getElementsByTagName("img");
 for(let i =0;i<img.length;i++){
    img[i].style.width="100%";
    img[i].style.maxHeight="290px";
    img[i].style.objectFit="cover";
    

 }
  

 //querySelector===>not array Type

 const bodycontent =document.querySelector("body");
 bodycontent.style.backgroundColor = "#39736e";

 const items = document.querySelector(".items")
 items.innerHTML +="<li> new list 6</li><li>new list 7</li>"

//we cannot use below for loop.because this not array type
 // for(let i=0;i<items.length;i++){
//    console.log(items);
// }

const gallerimgcont =document.querySelector(".gallerimgcont");
gallerimgcont.style.display ="flex";
gallerimgcont.style.flexWrap="wrap";



 //querySelectorAll===>array Type

 const gallerimg =document.querySelectorAll(".gallerimg");
 gallerimg.forEach(eb=>{
    eb.style.maxWidth = "50%";

 })

const ant = document.querySelectorAll(".items li")
ant.forEach(nm=>{
   nm.style.fontFamily="poppins";
})

// for(let i=0;i<ant.length;i++){
//    ant[i].style.fontFamily="popins";
// }