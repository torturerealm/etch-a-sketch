function getNumber() {
    const userInput = prompt("How many squares?");
    if
}

function createSquare() {
    const square = document.createElement("div");
    const rows = document.querySelectorAll(".row");

    square.classList.add("box");
    rows.forEach((row) => {
        row.appendChild(square);
    });
}

const click = document.querySelector("button");
click.addEventListener("click", getNumber());

for (let i = 0; i < 5; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    document.querySelector(".container").appendChild(row);

    for (let j = 0; j < 5; j++) {
        createSquare();
    }
}