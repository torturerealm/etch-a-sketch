function createGrid() {
    for (let i = 0; i < squareNum; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        document.querySelector(".container").appendChild(row);
    
        for (let j = 0; j < squareNum; j++) {
            createSquare();
        }
    }
}

function createSquare() {
    const square = document.createElement("div");
    const rows = document.querySelectorAll(".row");

    square.classList.add("box");
    rows.forEach((row) => {
        row.appendChild(square);
    });
}

function promptUser() {
    let userInput = prompt("How many squares? 1-100");
    
    if (squareNum === 0) {
        if (userInput > 0 && userInput <= 100) {
            squareNum = userInput;
            createGrid();
        } else {
            alert("Invalid. Choose from 1-100.");
        }
    } else {
        alert("Reset grid");
    }
}

function resetGrid() {
    const squares = document.querySelectorAll(".row");
    const rows = document.querySelectorAll(".box");

    squares.forEach((square) => {
        square.remove();
    });

    rows.forEach((row) => {
        row.remove();
    });

    squareNum = 0;
}

let squareNum = 0;
const gridButton = document.querySelector(".grid");
gridButton.addEventListener("click", promptUser);

const resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", resetGrid);

