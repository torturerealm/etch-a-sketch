function createSquare() {
    const square = document.createElement("div");
    const rows = document.querySelectorAll(".row");

    square.classList.add("box");
    rows.forEach((row) => {
        row.appendChild(square);
    });
}


let squareNum = 0;
const button = document.querySelector("button");

button.addEventListener("click", () => {
    let userInput = prompt("How many squares? 1-100");
    if (userInput > 0 && userInput < 100) {
        squareNum = userInput;
    } else {
        alert("Invalid. Choose from 1-100.");
    }
});

for (let i = 0; i < squareNum; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    document.querySelector(".container").appendChild(row);

    for (let j = 0; j < squareNum; j++) {
        createSquare();
    }
}