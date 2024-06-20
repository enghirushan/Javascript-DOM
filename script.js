//getElementById===>not array Type

let heading =document.getElementById("heading")
heading.textContent="Haritha ilangasinghe";
heading.style.color="Red";
heading.style.fontFamily="arial";
 

//getElementsByClassName===>array Type

const section =document.getElementsByClassName("section");
 for(let i=0;i<section.length;i++){
    section[i].style.color="blue";
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
  