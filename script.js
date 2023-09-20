// input: prompt 1-100
// for loop to generate boxes depending on input
    // loop rows
    // loop columns
    // function that creates empty divs
// output: boxes generated depending on input

function createSquare() {
    const square = document.createElement("div");
    square.classList.add("box");
    document.querySelector(".rows").appendChild(square);
}

function createRow() {
    const row = document.createElement("div");
    document.querySelector(".container").appendChild(column);
}