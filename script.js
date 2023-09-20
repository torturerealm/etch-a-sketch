// input: prompt 1-100
// for loop to generate boxes depending on input
    // loop rows
    // loop columns
    // function that creates empty divs
// output: boxes generated depending on input

function createSquare() {
    const square = document.createElement("div");
    square.classList.add("box");
    document.querySelector(".row").appendChild(square);
}


const row = document.createElement("div");
row.classList.add("row");
document.querySelector(".container").appendChild(row);

// create squares inside row
for (let j = 0; j <= 5; j++) {
    createSquare();
}


// loop squares
// for (let i = 0; i <= 5; i++) {
// }