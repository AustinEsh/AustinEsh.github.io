const burgerMenu = document.querySelector(".burger-menu");
const middleLine = document.querySelector(".middle-line");
let firstTime = true;

const linkLoop = function(disp) {
    for (link of document.querySelectorAll(".nav-link")) {
        link.style.display = disp;
    }
}

const hide = function() {
    middleLine.firstElementChild.style.transform = "rotate(0)";
    middleLine.lastElementChild.style.transform = "rotate(0)";
    setTimeout( () => {
        burgerMenu.firstElementChild.style.visibility = "visible";
        burgerMenu.lastElementChild.style.visibility = "visible";
    }, 500);
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
        
        hide();
    }

    linkLoop(disp);
});

document.querySelector("nav").lastElementChild.addEventListener(("click"), () => {
    if (document.querySelector("footer").clientWidth < 600) {
        linkLoop("none");
        hide();
    }
});

window.addEventListener("resize", () => {
    if (document.querySelector("body").clientWidth  >= 600) {
        linkLoop("block");
    } else {
        hide();
        linkLoop("none");
    }
});