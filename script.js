
// Create grid 
const grid = document.querySelector("#grid-container")
const pixelDensity = document.querySelector("#pixelInput");

let size;
let isDrawing = false;

pixelDensity.addEventListener("click", () => {
    while (true) {
        size = Number((prompt("Enter grid size (1-100):")).trim());
        if (!isNaN(size) && Number.isInteger(size) && size >=1 && size <=100) {
            break;
        }
        }
    createGrid(size);
    })
  

document.addEventListener("mousedown", () => isDrawing = true);
document.addEventListener("mouseup", () => isDrawing = false);

function createGrid(input) {

    grid.innerHTML = "";

    for (i = 0; i < input * input; i++) {
    const cell = document.createElement("div");
    cell.style.width = `calc(100% / ${input})`
    cell.style.height = `calc(100% / ${input})`
    cell.addEventListener("mouseover", () => {
        if (isDrawing) {
            cell.style.backgroundColor = "black"; 
        }
    })
    grid.appendChild(cell);
    }
}




