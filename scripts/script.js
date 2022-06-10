"use strict";

let boxes = document.getElementById("boxes")
let noOfBoxes = document.getElementById("noOfBoxes")
// let colors = ["Aqua", "LightCoral", "Blue", "Pink", "Salmon", "Turquoise", "SlateBlue", "LightGreen", "RoyalBlue"]
noOfBoxes.addEventListener("input", generateBoxes)

function generateBoxes(e){
    boxes.innerHTML = "";
    for (let i=0;i<e.target.value;i++){
        let box=document.createElement("div")
        boxes.appendChild(box)
        box.style.backgroundColor = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})` 
    }
}

//Math.random will never generate '1'.


