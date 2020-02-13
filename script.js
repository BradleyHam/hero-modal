let modalShow = document.querySelector(".sign-up");
let hero = document.querySelector(".hero");
let close = document.querySelector(".close-modal");
let modal = document.querySelector(".modal");



modalShow.addEventListener("click", () => {
    hero.classList.toggle("show-modal");
})
close.addEventListener("click", () => {
    hero.classList.remove("show-modal");
})

modal.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) {
        hero.classList.remove("show-modal");
    }
})