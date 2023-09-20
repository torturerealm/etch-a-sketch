// input: prompt 1-100
// for loop to generate boxes depending on input
    // loop columns
    // function that creates empty divs
    // loop rows
// output: boxes generated depending on input

function createSquare() {
    const square = document.createElement("div");
    square.classList.add("box");
    document.querySelector(".container").appendChild(square);
}

function createRow() {
    const column = document.createElement("div");
    document.querySelector(".container").appendChild(column);
}

// loop to create rows
// for (let i = 0; i <= 16; i++) {
//    createSquare();
// }