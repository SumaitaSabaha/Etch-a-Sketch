let box = document.querySelector('.container');
let divs = box.querySelectorAll("div");
let defaultColor = "grey";

function createBoard(size) {
    if(size < 16 || size > 100) {
        alert("Please enter a number greater than 16 and less than 100");
    }
    else if(size >= 16 || size <= 100) {
        divs.forEach((div) => div.remove());
        box.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        box.style.gridTemplateRows = `repeat(${size}, 1fr)`;
        for(let i = 0; i < size * size; i++) {
            const grid = document.createElement('div');
            grid.style.background = "snow"
            box.insertAdjacentElement("beforeend", grid);
            grid.addEventListener("mouseover", function(){
                if(defaultColor === "grey"){
                    grid.style.background = randomGreyHex();
                }
                else if (defaultColor === "rainbow") {
                    grid.style.background = randomColor();
                }
            });
        }
    }
    
}

createBoard(16);

function changeSize(input) {
    createBoard(input);
}

function randomGreyHex() {
    var v = (Math.random()*(256)|0).toString(16);
    return "#" + v + v + v;
}

function randomColor() {
    let color = [];
    for(let i = 0; i < 3; i++) {
        color.push(Math.floor(Math.random()*256));
    }
    return 'rgb(' + color.join(', ') + ')';
}

function eraseAll () {
    let divs = box.querySelectorAll("div");
    divs.forEach((div) => div.remove());
    createBoard(16);
}

function toggleToGrey() {
    defaultColor = "grey";  
    applyColorMode();
}

function toggleToColor() {
    defaultColor = "rainbow";
    applyColorMode();
}

function applyColorMode() {
    divs.forEach((div) => {
        if(defaultColor === "grey"){
            div.style.background = randomGreyHex();
        }
        else if (defaultColor === "rainbow") {
            div.style.background = randomColor();
        }
    });
}