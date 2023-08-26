const box = document.querySelector('.container');


for(let i = 0; i < 16; i++) {
    for(let j = 0; j < 16; j++) {
        const grid = document.createElement('div');
        grid.style.width = "30px";
        grid.style.height = "30px";
        grid.style.border = "1px solid black";
        grid.style.background = "white"
        box.append(grid);
    }

}