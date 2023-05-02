var button3 = document.querySelector(".button3");
var owl1 = document.querySelector(".owl1");
var owl2 = document.querySelector(".owl2");
var owl3 = document.querySelector(".owl3");




function click1(){
    var background = document.querySelector(".background_image");
    var button1 = document.querySelector(".button1");
    var button2 = document.querySelector(".button2");
    var background2 = document.querySelector(".backgroud_image2");
    var button = document.querySelector(".button3");
    var owl1 = document.querySelector(".owl1");
    var owl2 = document.querySelector(".owl2");
    var owl3 = document.querySelector(".owl3")
    
    background.setAttribute('style','visibility:hidden');
    button1.setAttribute('style','visibility:hidden');
    button2.setAttribute('style','visibility:hidden');
    background2.setAttribute('style','none');
    button.setAttribute('style','visibility:hidden');
    owl1.setAttribute('style','none');
    owl2.setAttribute('style','none');
    owl3.setAttribute('style','none');  
}

function clickowl1(){
    var owl_big = document.querySelector(".owl_big");
    owl_big.setAttribute('style','none');
    owl_big.setAttribute('src','../picture/page2/Frame 11.png');
   
}

function clickowl2(){
    var owl_big = document.querySelector(".owl_big");
    owl_big.setAttribute('style','none');
    owl_big.setAttribute('src','../picture/page2/Frame 12.png');
   
}
function clickowl3(){
    var owl_big = document.querySelector(".owl_big");
    owl_big.setAttribute('style','none');
    owl_big.setAttribute('src','../picture/page2/Frame 10.png');
   
}

button3.addEventListener('click',click1);
owl1.addEventListener('click',clickowl1);
owl2.addEventListener('click',clickowl2);
owl3.addEventListener('click',clickowl3);
