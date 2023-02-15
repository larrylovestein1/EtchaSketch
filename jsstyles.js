const container = document.getElementById("container");




//makes grid
function makeRows(rows,cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (i = 0; i < (rows * cols); i++) {
    let cell = document.createElement("div");
    cell.addEventListener('mousemove',changeColors);
    function changeColors() {
      cell.style.backgroundColor = 'blue';
    }
    cell.innerText = (i + 1);
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(16, 16);







