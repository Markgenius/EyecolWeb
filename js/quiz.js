// var img_genius_1 = document.querySelector(".genius_1");
// var img_genius_2 = document.querySelector(".genius_2");
// var img_genius_3 = document.querySelector(".genius_3");
// var img_genius_4 = document.querySelector(".genius_4");
// var img_genius_5 = document.querySelector(".genius_5");
// var img_genius_6 = document.querySelector(".genius_6");
// var img_about_us = document.querySelector(".about_us");
// var img_news = document.querySelector(".news");
// var img_equipment = document.querySelector(".equipment");
// var img_together = document.querySelector(".together");
// var img_connect = document.querySelector(".connect");
// var img_findNow = document.querySelector(".find_now");

var button_1 = document.querySelector(".botton1");
var background_1 = document.querySelector(".background_image1");

var button_2 = document.querySelector(".botton2");
var background_2 = document.querySelector(".background_image2");
var age_input_1 = document.querySelector(".age_input1");

var button_3 = document.querySelector(".botton3");
var background_3 = document.querySelector(".background_image3");
var slider_1 = document.querySelector(".slider1");
var output1 = document.getElementById("sliderValue1");
output1.innerHTML = slider_1.value;

var button_4 = document.querySelector(".botton4");
var background_4 = document.querySelector(".background_image4");
var slider_2 = document.querySelector(".slider1");
var output2 = document.getElementById("sliderValue2");
output2.innerHTML = slider_2.value;

var button_5 = document.querySelector(".botton4");
var background_5 = document.querySelector(".background_image5");
var buttonGroup1 = document.querySelector(".buttonG1_1");
var buttonGroup2 = document.querySelector(".buttonG1_2");
var buttonGroup3 = document.querySelector(".buttonG1_3");
var buttonGroup4 = document.querySelector(".buttonG1_4");
var buttonGroup5 = document.querySelector(".buttonG1_5");
var buttonGroup6 = document.querySelector(".buttonG1_6");


function click1(){
    button_1.style.background = "dark";  

    button_1.setAttribute('style','visibility:hidden');
    background_1.setAttribute('style','visibility:hidden');
    button_2.setAttribute('style','none');
    background_2.setAttribute('style','none');
    age_input_1.setAttribute('style','none');
}

function click2(){
    button_2.style.background = "dark";  

    button_2.setAttribute('style','visibility:hidden');
    background_2.setAttribute('style','visibility:hidden');
    age_input_1.setAttribute('style','visibility:hidden');
    button_3.setAttribute('style','none');
    background_3.setAttribute('style','none');
    slider_1.setAttribute('style','none');
    output1.setAttribute('style','none');
}

function click3(){
    button_3.style.background = "dark";  

    button_3.setAttribute('style','visibility:hidden');
    background_3.setAttribute('style','visibility:hidden');
    slider_1.setAttribute('style','visibility:hidden');
    output1.setAttribute('style','visibility:hidden');
    button_4.setAttribute('style','none');
    background_4.setAttribute('style','none');
    slider_2.setAttribute('style','none');
    output2.setAttribute('style','none');
}

function click4(){
    button_4.style.background = "dark";  

    button_4.setAttribute('style','visibility:hidden');
    background_4.setAttribute('style','visibility:hidden');
    slider_2.setAttribute('style','visibility:hidden');
    output2.setAttribute('style','visibility:hidden');
    button_5.setAttribute('style','none');
    background_5.setAttribute('style','none');
    buttonGroup1.setAttribute('style','none');
    buttonGroup2.setAttribute('style','none');
    buttonGroup3.setAttribute('style','none');
    buttonGroup4.setAttribute('style','none');
    buttonGroup5.setAttribute('style','none');
    buttonGroup6.setAttribute('style','none');
}




// img_genius_1.addEventListener('mouseenter',mouse_in_1);
// img_genius_2.addEventListener('mouseenter',mouse_in_2);
// img_genius_3.addEventListener('mouseenter',mouse_in_3);
// img_genius_4.addEventListener('mouseenter',mouse_in_4);
// img_genius_5.addEventListener('mouseenter',mouse_in_5);
// img_genius_6.addEventListener('mouseenter',mouse_in_6);
// img_findNow.addEventListener('mouseenter',mouse_in_findNow);

// img_genius_1.addEventListener('mouseleave',mouse_out_1);
// img_genius_2.addEventListener('mouseleave',mouse_out_2);
// img_genius_3.addEventListener('mouseleave',mouse_out_3);
// img_genius_4.addEventListener('mouseleave',mouse_out_4);
// img_genius_5.addEventListener('mouseleave',mouse_out_5);
// img_genius_6.addEventListener('mouseleave',mouse_out_6);
// img_findNow.addEventListener('mouseleave',mouse_out_findNow);
// img_findNow.addEventListener('click',mouse_out_click);
// img_about_us.addEventListener('click',mouse_aboutus_click);


// img_about_us.addEventListener('mouseenter',mouse_in_about_us);
// img_news.addEventListener('mouseenter' ,mouse_in_news);
// img_equipment.addEventListener('mouseenter', mouse_in_equipment);
// img_together.addEventListener('mouseenter', mouse_in_together);
// img_connect.addEventListener('mouseenter', mouse_in_connect);
// img_news.addEventListener('mouseleave' ,mouse_out_news);
// img_equipment.addEventListener('mouseleave' ,mouse_out_equipment);
// img_together.addEventListener('mouseleave' ,mouse_out_together);
// img_connect.addEventListener('mouseleave', mouse_out_connect);
// img_about_us.addEventListener('mouseleave',mouse_out_about_us);

button_1.addEventListener('click',click1);
button_2.addEventListener('click',click2);
button_3.addEventListener('click',click3);
button_4.addEventListener('click',click4);

slider_1.oninput = function() {
    output1.innerHTML = this.value;
}
slider_2.oninput = function() {
    output2.innerHTML = this.value;
}
