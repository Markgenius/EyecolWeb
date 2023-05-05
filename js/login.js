var button3 = document.querySelector(".button3");
var owl1 = document.querySelector(".owl1");
var owl2 = document.querySelector(".owl2");
var owl3 = document.querySelector(".owl3");
var button4 = document.querySelector(".button4")




function click1(){
    var background = document.querySelector(".background_image");
    var button1 = document.querySelector(".button1");
    var button2 = document.querySelector(".button2");
    var background2 = document.querySelector(".backgroud_image2");
    var button = document.querySelector(".button3");
    var owl1 = document.querySelector(".owl1");
    var owl2 = document.querySelector(".owl2");
    var owl3 = document.querySelector(".owl3");
    var input = document.querySelector(".charactor");
    var button4 = document.querySelector(".button4")
    
    background.setAttribute('style','visibility:hidden');
    button1.setAttribute('style','visibility:hidden');
    button2.setAttribute('style','visibility:hidden');
    background2.setAttribute('style','none');
    button.setAttribute('style','visibility:hidden');
    owl1.setAttribute('style','none');
    owl2.setAttribute('style','none');
    owl3.setAttribute('style','none');
    input.setAttribute('style','none'); 
    button4.setAttribute('style','none');   
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
function click4(){
    var background2 = document.querySelector(".backgroud_image2");
    var owl1 = document.querySelector(".owl1");
    var owl2 = document.querySelector(".owl2");
    var owl3 = document.querySelector(".owl3");
    var input = document.querySelector(".charactor");
    var button4 = document.querySelector(".button4");
    var owl_big = document.querySelector(".owl_big");

    var background3 = document.querySelector(".background_image3")
    var button5 = document.querySelector(".button5");

    background2.setAttribute('style','visibility:hidden');
    owl1.setAttribute('style','visibility:hidden');
    owl2.setAttribute('style','visibility:hidden');
    owl3.setAttribute('style','visibility:hidden');
    owl_big.setAttribute('style','visibility:hidden');
    input.setAttribute('style','visibility:hidden'); 
    button4.setAttribute('style','visibility:hidden'); 
    background3.setAttribute('style','none');
    button5.setAttribute('style','none');
    
}
// function senddata(){
//     // const url = "https://markgenius.github.io/EyecolWeb/html/prescription.html";
//     // const otherpage = window.open(url);
//     var name = document.querySelector(".charactor").value;
//     otherpage.postMessage(name,"https://markgenius.github.io/EyecolWeb/html/");


// }


button3.addEventListener('click',click1);
owl1.addEventListener('click',clickowl1);
owl2.addEventListener('click',clickowl2);
owl3.addEventListener('click',clickowl3);
button4.addEventListener('click', click4);
// button4.addEventListener('click', senddata);
