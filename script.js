let circle = document.getElementById('round-shape');
let box = document.getElementById('box-shape');


setInterval(function() {
    circle.style.transition = 'all 0.5s ease-in-out';
    circle.style.backgroundColor = randomColor();
}, 1000);

setInterval(function() {
    box.style.transition = 'all 0.5s ease-in-out';
    box.style.backgroundColor = randomColor();
    box.style.width = Math.floor(Math.random() * 100) + 'px';
    box.style.height = Math.floor(Math.random() * 100) + 'px';
}, 1000);

function randomColor() {
    let color = 'rgb(';
    for (let i = 0; i < 2; i++) {
        color += Math.floor(Math.random() * 255) + ',';
    }
    color += Math.random() + ')';
    return color;
}



let sugar = document.getElementById('sugar');
let kerulet = document.getElementById('kerulet');
let terulet = document.getElementById('terulet');

sugar.addEventListener('input', () => {
    let r = sugar.value;
    kerulet.value = parseFloat(2 * Math.PI * parseFloat(r)).toFixed(2);
    terulet.value = parseFloat(Math.PI * parseFloat(r) * parseFloat(r)).toFixed(2);
});


//szelesseg and hosszusag is an input field help me to calculate the area and perimeter of a rectangle put the perimeter in ngyztKerulet input and area in ngyztTerulet input
let szelesseg = document.getElementById('szelesseg');
let hosszusag = document.getElementById('hosszusag');
let ngyztKerulet = document.getElementById('ngyztKerulet');
let ngyztTerulet = document.getElementById('ngyztTerulet');

szelesseg.addEventListener('input', () => {
    let a = szelesseg.value;
    let b = hosszusag.value;
    ngyztKerulet.value = parseFloat(2 * (parseFloat(a) + parseFloat(b))).toFixed(2);
    ngyztTerulet.value = parseFloat(parseFloat(a) * parseFloat(b)).toFixed(2);
});

hosszusag.addEventListener('input', () => {
    let a = szelesseg.value;
    let b = hosszusag.value;
    ngyztKerulet.value = parseFloat(2 * (parseFloat(a) + parseFloat(b))).toFixed(2);
    ngyztTerulet.value = parseFloat(parseFloat(a) * parseFloat(b)).toFixed(2);
});
