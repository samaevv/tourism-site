alert("Вітаємо на сайті нашої туристичної агенції!");

const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", function () {
    menu.classList.toggle("open");
});

closeBtn.addEventListener("click", function () {
    menu.classList.toggle("open");
});

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        themeBtn.textContent = "Світла тема";
    } else {
        themeBtn.textContent = "Темна тема";
    }
});

const moreBtn = document.getElementById("moreBtn");

moreBtn.addEventListener("click", function () {
    const cards = document.querySelectorAll(".hidden");
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.display = "block";
    }
    moreBtn.style.display = "none";
});

const chooseBtn = document.getElementById("chooseBtn");
const counter = document.getElementById("counter");
let count = 0;

chooseBtn.addEventListener("click", function () {
    count = count + 1;
    counter.textContent = "Натискань: " + count;
});
