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
    context.fillStyle="rgba(240,240,240,255)";
    context.fill();
    context.strokeStyle="rgba(240,240,240,255)";
    context.stroke();

//Lmidden
context.beginPath();
    context.rect(80,90,50,50)
    context.fillStyle="rgba(148,226,155,255)";
    context.strokeStyle="rgba(148,226,155,255)";
    context.fill();
    context.stroke();
  
//Mmidden  
context.beginPath();
    context.rect(130,90,50,50)
    context.fillStyle="rgba(148,226,155,255)";
    context.strokeStyle="rgba(148,226,155,255)";
    context.fill();
    context.stroke();

//Rmidden
context.beginPath();
    context.rect(180,90,50,50)
    context.fillStyle="rgba(148,226,155,255)";
    context.strokeStyle="rgba(148,226,155,255)";
    context.fill();
    context.stroke();
 
//Mboven 
context.beginPath();
    context.rect(130,40,50,50)
    context.fillStyle="rgba(148,226,155,255)";
    context.strokeStyle="rgba(148,226,155,255)";
    context.fill();
    context.stroke();

//Lbeneden
context.beginPath();
    context.rect(80,140,50,50)
    context.fillStyle="rgba(148,226,155,255)";
    context.strokeStyle="rgba(148,226,155,255)";
    context.fill();
    context.stroke();

//Rbeneden
context.beginPath();
    context.rect(180,140,50,50)
    context.fillStyle="rgba(148,226,155,255)";
    context.strokeStyle="rgba(148,226,155,255)";
    context.fill();
    context.stroke();

//Mbbeneden
context.beginPath();
    context.rect(130,190,50,50)
    context.fillStyle="rgba(148,226,155,255)";
    context.strokeStyle="rgba(148,226,155,255)";
    context.fill();
    context.stroke();




}