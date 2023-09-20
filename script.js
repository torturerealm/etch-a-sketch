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


// loop to create each row
for (let i = 0; i <= 5; i++) {
    // create row
    const row = document.createElement("div");
    row.classList.add("row");
    document.querySelector(".container").appendChild(row);

    // loop to create the squares inside each row
    for (let j = 0; j <= 5; j++) {
        createSquare();
    }
}