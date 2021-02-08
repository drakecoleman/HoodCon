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
let follow = document.querySelector(".follow");
let board = document.querySelector(".followme");
let ex1 = document.querySelector(".fas1");
let youtube = document.querySelector(".you");
let face = document.querySelector(".fa-facebook");
let twit = document.querySelector(".fa-twitter");
let insta = document.querySelector(".fa-instagram");
let dipshit = document.querySelector(".dippy");
let contact = document.querySelector(".contact");
let form = document.querySelector(".form");
let ex2 = document.querySelector(".fas2");
let hood = document.querySelector(".tit");

let currentslide = slide1;
let takeaway = () => {
  face.classList.remove("ico");
  face.classList.add("feces");
  twit.classList.remove("ico");
  twit.classList.add("twit");
  insta.classList.remove("ico");
  insta.classList.add("insty");
  youtube.classList.remove("ico");
  dipshit.classList.add("dipshit");
};
let giveaway = () => {
  face.classList.add("ico");
  face.classList.remove("feces");
  twit.classList.add("ico");
  twit.classList.remove("twit");
  insta.classList.add("ico");
  insta.classList.remove("insty");
  youtube.classList.add("ico");
  dipshit.classList.remove("dipshit");
};

ex1.addEventListener("click", () => {
  board.style.width = "0";
  board.style.right = "1000%";
  body.style.overflow = "visible";
  youtube.classList.toggle("youtuber");
  giveaway();
});
follow.addEventListener("click", () => {
  board.style.width = "100%";
  board.style.right = "0";
  body.style.overflow = "hidden";
  takeaway();
  youtube.classList.toggle("youtuber");
});

ex2.addEventListener("click", () => {
  form.style.width = "0";
  form.style.right = "1000%";
  body.style.overflow = "visible";
});
contact.addEventListener("click", () => {
  form.style.width = "100%";
  form.style.right = "0";
  body.style.overflow = "hidden";
});

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
$(window).on("resize", function () {
  if ($(window).width() < 480) {
    $(".tit").addClass("ani4");
    $(".tit").removeClass("ani");
  } else {
    $(".tit").addClass("ani");
    $(".tit").removeClass("ani4");
  }
});
