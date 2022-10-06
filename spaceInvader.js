"use strict";

alert("Draw your space invader here");

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

colorBox();
function colorBox() {
//big black square
    context.beginPath();
    context.rect(10,10,290,290)
    context.fill();
    context.stroke();

//Ll
context.beginPath();
    context.rect(30,90,50,50)
    context.fillStyle="rgba(0,255,0,255)";
    context.strokeStyle="rgba(0,255,0,255)";
    context.fill();
    context.stroke();

//Lm
context.beginPath();
    context.rect(80,90,50,50)
    context.fillStyle="rgba(0,255,0,255)";
    context.strokeStyle="rgba(0,255,0,255)";
    context.fill();
    context.stroke();
  
//M   
context.beginPath();
    context.rect(130,90,50,50)
    context.fillStyle="rgba(0,255,0,255)";
    context.strokeStyle="rgba(0,255,0,255)";
    context.fill();
    context.stroke();

//Rm
context.beginPath();
    context.rect(180,90,50,50)
    context.fillStyle="rgba(0,255,0,255)";
    context.strokeStyle="rgba(0,255,0,255)";
    context.fill();
    context.stroke();

//Rr    
context.beginPath();
    context.rect(230,90,50,50)
    context.fillStyle="rgba(0,255,0,255)";
    context.strokeStyle="rgba(0,255,0,255)";
    context.fill();
    context.stroke();
 
//Lmboven 
context.beginPath();
    context.rect(80,40,50,50)
    context.fillStyle="rgba(0,255,0,255)";
    context.strokeStyle="rgba(0,255,0,255)";
    context.fill();
    context.stroke();

//Rmboven
context.beginPath();
    context.rect(180,40,50,50)
    context.fillStyle="rgba(0,255,0,255)";
    context.strokeStyle="rgba(0,255,0,255)";
    context.fill();
    context.stroke();

//Mbeneden
context.beginPath();
    context.rect(130,140,50,50)
    context.fillStyle="rgba(0,255,0,255)";
    context.strokeStyle="rgba(0,255,0,255)";
    context.fill();
    context.stroke();

context.beginPath();
    context.rect(30,190,50,50)
    context.fillStyle="rgba(0,255,0,255)";
    context.strokeStyle="rgba(0,255,0,255)";
    context.fill();
    context.stroke();

context.beginPath();
    context.rect(30,240,50,50)
    context.fillStyle="rgba(0,255,0,255)";
    context.strokeStyle="rgba(0,255,0,255)";
    context.fill();
    context.stroke();

context.beginPath();
    context.rect(130,240,50,50)
    context.fillStyle="rgba(0,255,0,255)";
    context.strokeStyle="rgba(0,255,0,255)";
    context.fill();
    context.stroke();

context.beginPath();
    context.rect(230,190,50,50)
    context.fillStyle="rgba(0,255,0,255)";
    context.strokeStyle="rgba(0,255,0,255)";
    context.fill();
    context.stroke();

context.beginPath();
    context.rect(230,240,50,50)
    context.fillStyle="rgba(0,255,0,255)";
    context.strokeStyle="rgba(0,255,0,255)";
    context.fill();
    context.stroke();
}