let slide=document.querySelectorAll(".slide-item");
slide.forEach((el,i)=>{
    el.style.left=(i*100).toString()+"%";
});
let l=slide.length;
let slider=document.getElementById("slider");
let list=document.querySelectorAll("ul li");

function resetLeft(){
    'use strrict';
    let active=document.querySelector(".active");

    if (slide[0].classList.contains("active")){
        slide[l-1].style.left="-100%";
    }else {

        active.previousElementSibling.style.left="-100%";
    }
}
function resetRight(){
    "use strict";
    let active=document.querySelector(".active");
    
    if (slide[l-1].classList.contains("active")){
        slide[l-1].style.left="-100%";
    }else {
        setTimeout(function(){
            active.previousElementSibling.style.left="-100%";

        },1000)
    }



}
resetLeft();
function moveToRight(){
    'use strict';
    let active=document.querySelector(".active");

    for (let i=0;i<l;i++){
       if (slide[0].classList.contains("active")){
             slide[0].classList.remove("active"); 
       
            slide[l-1].classList.add("active");

            list.forEach(el=>{
                el.classList.remove("active");
            })  

            list[l-1].classList.add("active");
         
            break ;
            
       
        }else if(slide[i].classList.contains("active"))  {
            slide[i].classList.remove("active");

            active.previousElementSibling.classList.add("active");   
        
            list.forEach(el=>{
                el.classList.remove("active");
            })
                list[i-1].classList.add("active")
            
           
            break;

        }
      } 
    slide.forEach((el,i)=>{
        
        el.style.left=(parseInt(el.style.left)+100).toString()+"%";
        if (parseInt(el.style.left)>=200){
            el.style.opacity="0";
        }else {
            el.style.opacity="1";

        }
    });
    resetLeft()
 

    
}
function moveToLeft(){
    'use strict';
    let active=document.querySelector(".active");

    for (let i=0;i<l;i++){
       if (slide[l-1].classList.contains("active")){
            slide[l-1].classList.remove("active");
            slide[0].classList.add("active");
            list.forEach(el=>{
                el.classList.remove("active");
            })
            list[0].classList.add("active");
            break ;
            
       
        }else if (slide[i].classList.contains("active"))  {
            slide[i].classList.remove("active");
            slide[i+1].classList.add("active");
            list.forEach(el=>{
                el.classList.remove("active");
            })
            list[i+1].classList.add("active")
            break;

        }
      } 
    slide.forEach((el,i)=>{       
        
        el.style.left=(parseInt(el.style.left)-100).toString()+"%";
        if (parseInt(el.style.left)<-100){
            el.style.opacity="0"
        }else{
            el.style.opacity="1"
        }
        if (el.style.left=="-200%"){
            el.style.left="200%";
        }
    });

}
var toright=setInterval(function(){
    let active=document.querySelector(".active");
    moveToRight()
},3000);
let left=document.querySelector("i.left");
let right=document.querySelector("i.right");
slider.onmouseleave=function(){
     toright=setInterval(function(){
        let active=document.querySelector(".active");
    moveToRight();
    },3000);
}
slider.onmouseover=function(){
    clearInterval(toright);
}
right.onclick=function(){
moveToRight()
}
left.onclick=function(){
moveToLeft()
}

