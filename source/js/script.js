const navMain = document.querySelector(".main-nav");
const pageToggle = document.querySelector(".page-header__toggle");

navMain.classList.remove("main-nav--nojs");
pageToggle.classList.remove("page-header__toggle--nojs");

pageToggle.addEventListener("click", function () {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
    pageToggle.classList.remove("page-header__toggle--open");
    pageToggle.classList.add("page-header__toggle--close")
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
    pageToggle.classList.remove("page-header__toggle--close");
    pageToggle.classList.add("page-header__toggle--open")
  }
});
