const grid = document.querySelector("#grid");
const gridsizeBtn = document.querySelector("#gridsizeBtn");
const clearBtn = document.querySelector("#clearBtn");

gridsizeBtn.addEventListener("click", (() => {
    gridsize = Number(window.prompt("Type The Grid Size"));
    if (gridsize >= 5 && gridsize <= 50) {
        grid.innerHTML = "";
        for (let i = 0; i < gridsize; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.onmouseover = function() {
            red = Math.floor(Math.random() * 255);
            blue = Math.floor(Math.random() * 255);
            green = Math.floor(Math.random() * 255);
            this.style.backgroundColor = 'rgb(' + red + ',' + blue + ',' + green + ')';
        }
        grid.appendChild(square);
        }
    } else {
        alert("Error: Invalid Value");
    }
}));


