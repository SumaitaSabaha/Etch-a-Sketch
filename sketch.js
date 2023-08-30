function createBoard(size) {
    if(size < 16 || size > 100) {
        alert("Please enter a number greater than 16 and less than 100");
    }
    else if(size >= 16 || size <= 100) {
        let box = document.querySelector('.container');
        let divs = box.querySelectorAll("div")
        divs.forEach((div) => div.remove());
        box.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        box.style.gridTemplateRows = `repeat(${size}, 1fr)`;
        for(let i = 0; i < size * size; i++) {
            const grid = document.createElement('div');
            grid.style.background = "snow"
            box.insertAdjacentElement("beforeend", grid);
            grid.addEventListener("mouseover", function(){
            grid.style.background = randomColor();
            });
        }
    }
    
}

createBoard(16);

function changeSize(input) {
    createBoard(input);
}


function randomColor() {
    let color = [];
    for(let i = 0; i < 3; i++) {
        color.push(Math.floor(Math.random()*256));
    }
    return 'rgb(' + color.join(', ') + ')';
}

