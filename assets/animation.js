const header = document.querySelector("header");
let interval = (1600 - header.clientWidth) * 2;
let flakes = [];

flakes = [];

const moveFlake = function() {
    for (fl of flakes) {
        if (fl.flakeHeight >= header.clientHeight) {
            fl.f.remove();
            flakes.splice(flakes.indexOf(fl), 1)
        } else {
            fl.flakeHeight += fl.flakeVelocity * .25;
            fl.f.style.top = fl.flakeHeight + "px";   
        }
    }
}

const backgroundAnimation = function() {
    const rand = Math.random() * header.clientWidth;
    const rand2 = Math.random() * 5;
    const rand3 = Math.random() + 1;
    flake = {f: document.createElement("div"), flakeHeight: 0, flakeVelocity: rand3};
    flakes.push(flake);
    flake.f.style.width = rand2 + "px";
    flake.f.style.height = rand2 + "px";
    flake.f.style.borderRadius = "100%";
    flake.f.style.backgroundColor = "white";
    flake.f.style.position = "absolute";
    flake.f.style.left = rand + "px";
    header.appendChild(flake.f);
    flakes.push(flake);
}

setInterval( () => {
    backgroundAnimation();
}, interval);

setInterval( () => {
    moveFlake();
}, 0);