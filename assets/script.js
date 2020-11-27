const linkLoop = function(disp) {
    for (link of document.querySelectorAll(".nav-link")) {
        link.style.display = disp;
    }
}

let firstTime = true;

document.querySelector(".burger-menu").addEventListener("click", () => {
    if (document.querySelector("nav").lastElementChild.style.display === "none" || firstTime === true) {
        disp = "block";
        firstTime = false;
    } else {
        disp = "none";
    }

    linkLoop(disp);
});

document.querySelector("nav").lastElementChild.addEventListener(("click"), () => {
    linkLoop("none");
});