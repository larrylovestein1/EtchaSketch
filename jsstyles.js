const gridContainer = document.getElementById("gridContainer");

//function to make both rows and columns
function makeRows(rows, cols) {
  gridContainer.style.setProperty('--grid-rows' , rows);
  gridContainer.style.setProperty('--grid-cols' , cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.innerText = (c + 1);
    gridContainer.appendChild(cell).className = "grid-item";
  };
};

makeRows(16, 16);