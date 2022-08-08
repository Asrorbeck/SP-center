var elBtn = document.querySelector(".burger__btn");
var elBtn1 = document.querySelector(".burger-close");
var elheader = document.querySelector(".header__container");

elBtn.addEventListener("click", function (evt) {
    elheader.classList.add("header-toggle")
})

elBtn1.addEventListener("click", function (evt) {
    elheader.classList.remove("header-toggle")
})

const container = document.querySelector('.rating');
const items = container.querySelectorAll('.rating-item')
container.onclick = e => {
    const elClass = e.target.classList;
    // change the rating if the user clicks on a different star
    if (!elClass.contains('active')) {
        items.forEach( // reset the active class on the star
        item => item.classList.remove('active')
        );
        console.log(e.target.getAttribute("data-rate"));
        elClass.add('active'); // add active class to the clicked star
    }
};