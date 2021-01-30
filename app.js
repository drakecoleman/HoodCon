let cuzzo = document.querySelector(".cuzzo");
let bod = document.querySelector(".Bod");
let begin = document.querySelector(".begin");
let button = document.querySelector(".btn");
let ul = document.querySelector(".ulTop");
let bar = document.querySelector(".fa-bars");

button.addEventListener("click", () => {
  bod.style.display = "block";
  begin.style.display = "none";
});
let mobile = function () {
  if (begin.style.display === "none") {
    bod.style.display = "block";
  } else {
    cuzzo.addEventListener("animationend", () => {
      bod.style.display = "block";
      begin.style.display = "none";
    });
  }
};
bar.addEventListener("click", () => {
  ul.classList.toggle("tog");
});
mobile();
