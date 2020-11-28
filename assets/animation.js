const header = document.querySelector("header");
let flakes = [];

flakes = [];
const backgroundAnimation = function() {
    const rand = Math.random() * header.clientWidth;
    const rand2 = Math.random() * 5;
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