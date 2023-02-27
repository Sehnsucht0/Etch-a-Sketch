const container = document.querySelector(".grid");
const changeGrid = document.querySelector(".change-grid");
container.style.width = `${innerWidth/3}px`;
container.style.height = `${innerWidth/3}px`;
let squaresNumber = 16;
gridCreation();
changeGrid.addEventListener("click", function() {
    gridChange();
    gridCreation();
});

function gridCreation ()
{
    let cell, row = 1, column = 1;
    for (let i = 0; i < squaresNumber**2; i++)
{
    cell = document.createElement("div");
    cell.classList.add(`cell-${row}x${column}`, "cell");
    column++;
    if (column === squaresNumber + 1)
    {
        column = 1;
        row++;
    }
    cell.style.boxSizing = "border-box";
    cell.style.width = `${(innerWidth/3)/squaresNumber}px`;
    cell.style.height = `${(innerWidth/3)/squaresNumber}px`;
    cell.style.border = "1px solid black";
    cell.addEventListener("mouseenter", function() {
        this.style.backgroundColor = `rgb(${255 * Math.random()}, ${255 * Math.random()}, ${255 * Math.random()})`;
    });
    container.appendChild(cell);
}
}

function gridChange ()
{
    squaresNumber = prompt("Input the number of squares in each side of the grid", "16");
    while (!(Number.isInteger(Number(squaresNumber)))) squaresNumber = prompt("Invalid input. An integer is required.", "16");
    while (squaresNumber > 100) squaresNumber = prompt ("You can't create a grid bigger than 100x100 squares", "16");
    const oldGrid = document.getElementsByClassName("cell");
    const oldGridArray = Array.from(oldGrid);
    oldGridArray.forEach(item => item.remove());
}
