
// Create grid 
const grid = document.querySelector("#grid-container")
const pixelDensity = document.querySelector("#pixelInput");
const customColor = document.querySelector("#customColor");
const resetButton = document.querySelector("#reset");
const randomColorButton = document.querySelector("#randomColors");

let size = 16;
let isDrawing = false;
let paintColor = "black";
let isRandom = false;

document.addEventListener("mousedown", () => isDrawing = true);
document.addEventListener("mouseup", () => isDrawing = false);

document.querySelectorAll("#customColor li").forEach(li => {
    li.style.backgroundColor = li.dataset.choice;
})




pixelDensity.addEventListener("click", () => {
    while (true) {
        size = Number((prompt("Enter grid size (1-100):")).trim());
        if (!isNaN(size) && Number.isInteger(size) && size >=1 && size <=100) {
            break;
        }
        }
    createGrid(size);
    })

customColor.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        paintColor = e.target.dataset.choice;
        isRandom = false;
        e.target.style.backgroundColor = e.target.dataset.choice;
    }
})

randomColorButton.addEventListener("click", () => {
    isRandom = true;
})


resetButton.addEventListener("click", () => createGrid(size)); 




function createGrid(input) {

    grid.innerHTML = "";

    for (i = 0; i < input * input; i++) {
        const cell = document.createElement("div");
        let clickCount = 0;
        cell.style.width = `calc(100% / ${input})`
        cell.style.height = `calc(100% / ${input})`

        cell.addEventListener("mouseover", () => {
            if (isDrawing) {
                if (isRandom) {
                    cell.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
                } else {
                    cell.style.backgroundColor = paintColor;
                }
            }
        })
        
        cell.addEventListener("click", () => {
            clickCount = clickCount > 1 ? 0.1 : clickCount + 0.1; 
            cell.style.opacity = clickCount;
        })

        grid.appendChild(cell);
        }
}

createGrid(16); 



