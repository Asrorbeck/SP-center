var elBtn = document.querySelector(".burger__btn");
var elBtn1 = document.querySelector(".burger-close");
var elheader = document.querySelector(".header__container");

elBtn.addEventListener("click", function (evt) {
    elheader.classList.add("header-toggle")
})

elBtn1.addEventListener("click", function (evt) {
    elheader.classList.remove("header-toggle")
})