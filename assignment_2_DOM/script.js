// task 1
let heading = document.getElementById("heading");
heading.innerText = "DOM element selected by ID";

// task 2
let para = document.getElementsByTagName("p");
para[0].innerText = "First paragraph is updated";

// task3
let btn = document.getElementsByClassName("btn");
btn[1].innerText = "Click Me";

// task 4
let head3 = document.querySelector(".head3");
head3.style.color = "blue";


// task 5
let unOrderedList = document.querySelectorAll(".listItem");

unOrderedList.forEach(item=> {
    item.style.color = "green";

})

// task 6
let lastpara = document.getElementsByClassName("lastpara");
lastpara[0].style.fontSize = "25px";
lastpara[0].style.color = "red";
lastpara[0].style.backgroundColor = "lightgray";