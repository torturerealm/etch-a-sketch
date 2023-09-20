// let i = 0, loop until i = 16
    // for j = 0, loop until j = 16

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

createSquare();