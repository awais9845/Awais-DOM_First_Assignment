let body = document.body;

// task 1
let image1 = document.createElement("div");
image1.setAttribute("src", "../images/apple.jfif");
// console.log(image1);

// task 2
let changeImages = document.getElementById("changeImages");

function changeImage(){
    changeImages.setAttribute("src", "../images/apple.jfif")
}


// task 3

let inputfield = document.createElement("input");
inputfield.setAttribute("placeholder", "Enter your name");
body.appendChild(inputfield);
// console.log(inputfield);

// task 4

let inputfield2 = document.createElement("input");
// inputfield2.setAttribute("disabled");
body.appendChild(inputfield2);
inputfield2.disabled = true;

function enabledInputField(){
    inputfield2.disabled = false;
}


// task 5
let para = document.getElementById("paragraph");
// it will return the true or false 
console.log(para.hasAttribute("class"));

// here using condition

// if (para.hasAttribute("class")){
//     console.log("it has the class attribute:");
// }else{
//     console.log("it does not have the class attribute:");
// }

// task 6

let link = document.getElementById("link");

function changeLink(){
    link.innerText = "Youtube Link"
    link.setAttribute("href", "https://youtube.com");
}