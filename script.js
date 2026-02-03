// task 1

let heading = document.getElementById("heading");
heading.innerText = "Welcome to JavaScript DOM";


// task 2

let para1 = document.getElementById("para1");

function changeText(){
    para1.innerText = "Paragraph text changed!";
}
// task 3

let body = document.body;

function changeBackground(){
    body.style.backgroundColor = "lightblue";
}
// task 4
function showAlert(){
    alert("DOM is Working");
}


// task 5
let yourName = document.getElementById("yourName");
let showName = document.getElementById("showName");
function submitbtn(){
    showName.innerText = yourName.value;
    yourName.value = "";
}