const box = document.querySelector('.container');


for(let i = 0; i < 16; i++) {
    for(let j = 0; j < 16; j++) {
        const grid = document.createElement('div');
        grid.style.width = "30px";
        grid.style.height = "30px";
        grid.style.border = "1px solid grey";
        grid.style.background = "snow"
        box.append(grid);
        grid.addEventListener("mouseover", function(){
            grid.style.background = randomColor();
        });
    }
}

function randomColor() {
    let color = [];
    for(let i = 0; i < 3; i++) {
        color.push(Math.floor(Math.random()*256));
    }
    return 'rgb(' + color.join(', ') + ')';
}