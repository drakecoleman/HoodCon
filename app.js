let cuzzo = document.querySelector("#cuzzo");
let bod = document.querySelector(".Bod");
let begin = document.querySelector(".begin");
let button = document.querySelector(".btn");
let ul = document.querySelector(".ulTop");
let bar = document.querySelector(".fa-bars");
let body = document.querySelector("body");
let left = document.querySelector(".left");
let right = document.querySelector(".right");
let slide1 = document.querySelector(".slide1");
let slide2 = document.querySelector(".slide2");
let slide3 = document.querySelector(".slide3");

let currentslide = slide1;

button.addEventListener("click", () => {
  bod.style.display = "block";
  begin.style.display = "none";
  body.style.overflow = "visible";
});
let mobile = function () {
  if (begin.style.display === "none") {
    bod.style.display = "block";
  } else {
    cuzzo.addEventListener("animationend", () => {
      bod.style.display = "block";
      begin.style.display = "none";
      body.style.overflow = "visible";
    });
  }
};
bar.addEventListener("click", () => {
  ul.classList.toggle("tog");
});
mobile();

left.addEventListener("click", function () {
  if (currentslide === slide2) {
    slide2.style.transform = "translate(300%)";
    slide1.style.transform = "translate(0)";
    left.style.opacity = "0";
    right.style.opacity = "1";
    currentslide = slide1;
  } else if (currentslide === slide3) {
    slide3.style.transform = "translate(300%)";
    slide2.style.transform = "translate(0)";
    right.style.opacity = "1";
    currentslide = slide2;
  } else if (currentslide === slide1) {
    alert(
      "CONGRATS! YOU FOUND MY BUG! Pain in the ass to add the extra code to make the buttons go from the first slide to the thrid slide and vica vera. Please message me directly telling me of the find."
    );
  }
});
right.addEventListener("click", function () {
  if (currentslide === slide1) {
    left.style.opacity = "1";
    slide1.style.transform = "translate(-300%)";
    slide2.style.transform = "translate(0)";
    currentslide = slide2;
  } else if (currentslide === slide2) {
    slide2.style.transform = "translate(-300%)";
    slide3.style.transform = "translate(0)";
    right.style.opacity = "0";
    currentslide = slide3;
  }
});
