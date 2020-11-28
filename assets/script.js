const burgerMenu = document.querySelector(".burger-menu");
const middleLine = document.querySelector(".middle-line");
const header = document.querySelector("header");
let firstTime = true;

const linkLoop = function(disp) {
    for (link of document.querySelectorAll(".nav-link")) {
        link.style.display = disp;
    }
}

burgerMenu.addEventListener("click", () => {
    if (document.querySelector("nav").lastElementChild.style.display === "none" || firstTime === true) {
        disp = "block";
        burgerMenu.firstElementChild.style.visibility = "hidden";
        burgerMenu.lastElementChild.style.visibility = "hidden";
        middleLine.firstElementChild.style.transform = "rotate(45deg)";
        middleLine.lastElementChild.style.transform = "rotate(135deg)";
        firstTime = false;
    } else {
        disp = "none";
        middleLine.firstElementChild.style.transform = "rotate(0)";
        middleLine.lastElementChild.style.transform = "rotate(0)";
        setTimeout( () => {
            burgerMenu.firstElementChild.style.visibility = "visible";
            burgerMenu.lastElementChild.style.visibility = "visible";
        }, 500);
    }

    linkLoop(disp);
});

document.querySelector("nav").lastElementChild.addEventListener(("click"), () => {
    linkLoop("none");
});

let flakes = [];

flakes = [];
const backgroundAnimation = function() {
    const rand = Math.floor(Math.random() * Math.floor(header.clientWidth));
    const rand2 = Math.floor(Math.random() * 5);
    flake = {f: document.createElement("div"), flakeHeight: 0};
    flakes.push(flake);
    flake.f.style.width = rand2 + "px";
    flake.f.style.height = rand2 + "px";
    flake.f.style.borderRadius = "100%";
    flake.f.style.backgroundColor = "white";
    flake.f.style.position = "absolute";
    flake.f.style.left = rand + "px";
    header.appendChild(flake.f);
    flakes.push(flake);
    for (fl of flakes) {
        if (fl.flakeHeight >= header.clientHeight) {
            fl.f.remove();
            flakes.splice(flakes.indexOf(fl), 1)
        } else {
            fl.flakeHeight += 2;
            fl.f.style.top = fl.flakeHeight + "px";   
        }
    }
}

setInterval( () => {
    backgroundAnimation();
}, 0);