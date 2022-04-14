let element1 = document.getElementById("text"); //access element with id text
console.log(element1);

element2 = document.getElementsByTagName("h1"); //access h1 tags

console.log(element2[0]); //prints first h1

let element3 = document.getElementsByClassName("box"); //access elements with class name box

console.log(element3[0]); //prints first element with class box

//changing the text in h1 from"hello" to "Hello world"

element2[0].innerText = "Hello world"; //this changes the text

//changing flex-direction onclick of button

function direction() {
  element1 = document.getElementsByClassName("container");
  element1[0].style.flexDirection = "column";
} //this function will change the direction of the flex box onclick of the button

//changing color of h1 to red and adding id="heading"
element2[0].style.color = "red";
element2[0].id = "heading";
console.log(element2[0]);

//change text in h1 to "welcome to elevation academy" onclick of button

function changeText() {
  element2[0].innerText = "Welcome to Elevation Academy";
} //this function will change the text onclick of button

//to display current time

function time() {
  let time = new Date();
  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();

  document.getElementById("hour").innerText = hours;
  document.getElementById("minute").innerText = minutes;
  document.getElementById("second").innerText = seconds;
}

time();
setInterval(time, 1000);

//printing the dropdown selected year

function yearChange() {
  // function is added to onchange event listener
  let selectedYear = document.getElementById("yearSelect").value;
  document.getElementById("year").innerText = selectedYear;
}

//form program

function emailCheck() {
  let a = document.getElementById("email").value;
  if (!a.endsWith("prepbytes.com")) {
    let b = document.getElementById("emailcheck");
    b.style.display = "inline";
  } else {
    let b = document.getElementById("emailcheck");
    b.style.display = "none";
  }
}

function numberCheck() {
  let a = document.getElementById("phoneno").value;
  if (!a.startsWith("91")) {
    let b = document.getElementById("startcheck");
    b.style.display = "inline";
  } else {
    let b = document.getElementById("startcheck");
    b.style.display = "none";
  }
  if (a.length != 10) {
    let b = document.getElementById("digitcheck");
    b.style.display = "inline";
  } else {
    let b = document.getElementById("digitcheck");
    b.style.display = "none";
  }
}

function bYearCheck() {
  let a = document.getElementById("byear").value;
  if (a < 1995) {
    let b = document.getElementById("byearcheck");
    b.style.display = "inline";
  } else {
    let b = document.getElementById("byearcheck");
    b.style.display = "none";
  }
}
