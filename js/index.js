const $ = element => {
  return document.querySelector(element);
};

//create burger menu

let menuToggler = $(".menu__btn");
let body = $("body");

menuToggler.addEventListener("click", () => {
  body.classList.toggle("open");
});

//init AOS
AOS.init();
