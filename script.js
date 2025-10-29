const grid = document.querySelector("#grid");
const gridsizeBtn = document.querySelector("#gridsizeBtn");
const clearBtn = document.querySelector("#clearBtn");

gridsizeBtn.addEventListener("click", () => {
    const gridsize = Number(window.prompt("Type The Grid Size"));
    if (gridsize >= 5 && gridsize <= 50) {
        grid.innerHTML = "";
        grid.style.display = "grid";
        grid.style.gridTemplateColumns = `repeat(${gridsize}, 1fr)`;
        grid.style.gridTemplateRows = `repeat(${gridsize}, 1fr)`;

        for (let i = 0; i < gridsize * gridsize; i++) { 
            const square = document.createElement("div");
            square.classList.add("square");
            square.onmouseover = function() {
                const red = Math.floor(Math.random() * 256);
                const green = Math.floor(Math.random() * 256);
                const blue = Math.floor(Math.random() * 256);
                this.style.backgroundColor = `rgb(${red},${green},${blue})`;
            }
            grid.appendChild(square);
        }
    } else {
        alert("Error: Invalid Value");
    }
});

clearBtn.addEventListener("click", () => {
    const squares = document.querySelectorAll(".square");
    squares.forEach(square => {
        square.style.backgroundColor = "white";
    });
});
